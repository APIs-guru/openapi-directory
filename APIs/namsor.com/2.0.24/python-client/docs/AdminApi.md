# openapi_client.AdminApi

All URIs are relative to *https://v2.namsor.com/NamSorAPIv2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**anonymize**](AdminApi.md#anonymize) | **GET** /api2/json/anonymize/{source}/{anonymized}/{token} | Activate/deactivate anonymization for a source.
[**api_key_info**](AdminApi.md#api_key_info) | **GET** /api2/json/apiKeyInfo | Read API Key info.
[**api_status**](AdminApi.md#api_status) | **GET** /api2/json/apiStatus | Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
[**api_usage**](AdminApi.md#api_usage) | **GET** /api2/json/apiUsage | Print current API usage.
[**api_usage_history**](AdminApi.md#api_usage_history) | **GET** /api2/json/apiUsageHistory | Print historical API usage.
[**api_usage_history_aggregate**](AdminApi.md#api_usage_history_aggregate) | **GET** /api2/json/apiUsageHistoryAggregate | Print historical API usage (in an aggregated view, by service, by day/hour/min).
[**available_services**](AdminApi.md#available_services) | **GET** /api2/json/apiServices | List of classification services and usage cost in Units per classification (default is 1&#x3D;ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
[**learnable**](AdminApi.md#learnable) | **GET** /api2/json/learnable/{source}/{learnable}/{token} | Activate/deactivate learning from a source.
[**regions**](AdminApi.md#regions) | **GET** /api2/json/regions | Print basic source statistics.
[**software_version**](AdminApi.md#software_version) | **GET** /api2/json/softwareVersion | Get the current software version
[**taxonomy_classes**](AdminApi.md#taxonomy_classes) | **GET** /api2/json/taxonomyClasses/{classifierName} | Print the taxonomy classes valid for the given classifier.


# **anonymize**
> APIKeyOut anonymize(source, anonymized, token)

Activate/deactivate anonymization for a source.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.api_key_out import APIKeyOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    source = 'source_example' # str | 
    anonymized = True # bool | 
    token = 'token_example' # str | 

    try:
        # Activate/deactivate anonymization for a source.
        api_response = api_instance.anonymize(source, anonymized, token)
        print("The response of AdminApi->anonymize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->anonymize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **str**|  | 
 **anonymized** | **bool**|  | 
 **token** | **str**|  | 

### Return type

[**APIKeyOut**](APIKeyOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Anonymization of a source. |  -  |
**401** | Missing or incorrect API Key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_key_info**
> APIKeyOut api_key_info()

Read API Key info.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.api_key_out import APIKeyOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # Read API Key info.
        api_response = api_instance.api_key_info()
        print("The response of AdminApi->api_key_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->api_key_info: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**APIKeyOut**](APIKeyOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Read API Key (uncached, i.e. DB read) |  -  |
**401** | Missing or incorrect API Key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_status**
> APIClassifiersStatusOut api_status()

Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.api_classifiers_status_out import APIClassifiersStatusOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
        api_response = api_instance.api_status()
        print("The response of AdminApi->api_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->api_status: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**APIClassifiersStatusOut**](APIClassifiersStatusOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available classifiers and status |  -  |
**401** | Missing or incorrect token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_usage**
> APIPeriodUsageOut api_usage()

Print current API usage.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.api_period_usage_out import APIPeriodUsageOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # Print current API usage.
        api_response = api_instance.api_usage()
        print("The response of AdminApi->api_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->api_usage: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**APIPeriodUsageOut**](APIPeriodUsageOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Print current API usage. |  -  |
**401** | Missing or incorrect API Key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_usage_history**
> APIUsageHistoryOut api_usage_history()

Print historical API usage.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.api_usage_history_out import APIUsageHistoryOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # Print historical API usage.
        api_response = api_instance.api_usage_history()
        print("The response of AdminApi->api_usage_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->api_usage_history: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**APIUsageHistoryOut**](APIUsageHistoryOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Print historical API usage (NB. new output format form v2.0.15) |  -  |
**401** | Missing or incorrect API Key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_usage_history_aggregate**
> APIUsageAggregatedOut api_usage_history_aggregate()

Print historical API usage (in an aggregated view, by service, by day/hour/min).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.api_usage_aggregated_out import APIUsageAggregatedOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # Print historical API usage (in an aggregated view, by service, by day/hour/min).
        api_response = api_instance.api_usage_history_aggregate()
        print("The response of AdminApi->api_usage_history_aggregate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->api_usage_history_aggregate: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**APIUsageAggregatedOut**](APIUsageAggregatedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Print historical API usage. |  -  |
**401** | Missing or incorrect API Key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **available_services**
> APIServicesOut available_services()

List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.api_services_out import APIServicesOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
        api_response = api_instance.available_services()
        print("The response of AdminApi->available_services:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->available_services: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**APIServicesOut**](APIServicesOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available services |  -  |
**401** | Missing or incorrect token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **learnable**
> APIKeyOut learnable(source, learnable, token)

Activate/deactivate learning from a source.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.api_key_out import APIKeyOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    source = 'source_example' # str | The API Key to set as learnable/non learnable.
    learnable = True # bool | 
    token = 'token_example' # str | 

    try:
        # Activate/deactivate learning from a source.
        api_response = api_instance.learnable(source, learnable, token)
        print("The response of AdminApi->learnable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->learnable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **str**| The API Key to set as learnable/non learnable. | 
 **learnable** | **bool**|  | 
 **token** | **str**|  | 

### Return type

[**APIKeyOut**](APIKeyOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Set learning from source. |  -  |
**401** | Missing or incorrect API Key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **regions**
> RegionOut regions()

Print basic source statistics.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.region_out import RegionOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # Print basic source statistics.
        api_response = api_instance.regions()
        print("The response of AdminApi->regions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->regions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**RegionOut**](RegionOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of countries and regions. |  -  |
**401** | Missing or incorrect API Key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **software_version**
> SoftwareVersionOut software_version()

Get the current software version

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.software_version_out import SoftwareVersionOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # Get the current software version
        api_response = api_instance.software_version()
        print("The response of AdminApi->software_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->software_version: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SoftwareVersionOut**](SoftwareVersionOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The current software version |  -  |
**401** | Missing or incorrect token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **taxonomy_classes**
> APIClassifierTaxonomyOut taxonomy_classes(classifier_name)

Print the taxonomy classes valid for the given classifier.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.api_classifier_taxonomy_out import APIClassifierTaxonomyOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    classifier_name = 'classifier_name_example' # str | 

    try:
        # Print the taxonomy classes valid for the given classifier.
        api_response = api_instance.taxonomy_classes(classifier_name)
        print("The response of AdminApi->taxonomy_classes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->taxonomy_classes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classifier_name** | **str**|  | 

### Return type

[**APIClassifierTaxonomyOut**](APIClassifierTaxonomyOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available plans |  -  |
**401** | Missing or incorrect token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

