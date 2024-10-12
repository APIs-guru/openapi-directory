# openapi_client.ExportApi

All URIs are relative to *https://api.appcenter.ms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export_configurations_create**](ExportApi.md#export_configurations_create) | **POST** /v0.1/apps/{owner_name}/{app_name}/export_configurations | 
[**export_configurations_delete**](ExportApi.md#export_configurations_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/export_configurations/{export_configuration_id} | 
[**export_configurations_disable**](ExportApi.md#export_configurations_disable) | **POST** /v0.1/apps/{owner_name}/{app_name}/export_configurations/{export_configuration_id}/disable | 
[**export_configurations_enable**](ExportApi.md#export_configurations_enable) | **POST** /v0.1/apps/{owner_name}/{app_name}/export_configurations/{export_configuration_id}/enable | 
[**export_configurations_get**](ExportApi.md#export_configurations_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/export_configurations/{export_configuration_id} | 
[**export_configurations_list**](ExportApi.md#export_configurations_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/export_configurations | 
[**export_configurations_partial_update**](ExportApi.md#export_configurations_partial_update) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/export_configurations/{export_configuration_id} | 


# **export_configurations_create**
> ExportConfigurationsList200ResponseValuesInner export_configurations_create(owner_name, app_name, export_configurations_list200_response_values_inner_export_configuration)



Create new export configuration

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.export_configurations_list200_response_values_inner import ExportConfigurationsList200ResponseValuesInner
from openapi_client.models.export_configurations_list200_response_values_inner_export_configuration import ExportConfigurationsList200ResponseValuesInnerExportConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExportApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    export_configurations_list200_response_values_inner_export_configuration = openapi_client.ExportConfigurationsList200ResponseValuesInnerExportConfiguration() # ExportConfigurationsList200ResponseValuesInnerExportConfiguration | Export configurations.

    try:
        api_response = api_instance.export_configurations_create(owner_name, app_name, export_configurations_list200_response_values_inner_export_configuration)
        print("The response of ExportApi->export_configurations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExportApi->export_configurations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **export_configurations_list200_response_values_inner_export_configuration** | [**ExportConfigurationsList200ResponseValuesInnerExportConfiguration**](ExportConfigurationsList200ResponseValuesInnerExportConfiguration.md)| Export configurations. | 

### Return type

[**ExportConfigurationsList200ResponseValuesInner**](ExportConfigurationsList200ResponseValuesInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Create export configuration request successfully received. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_configurations_delete**
> export_configurations_delete(export_configuration_id, owner_name, app_name)



Delete export configuration.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExportApi(api_client)
    export_configuration_id = 'export_configuration_id_example' # str | The id of the export configuration.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.export_configurations_delete(export_configuration_id, owner_name, app_name)
    except Exception as e:
        print("Exception when calling ExportApi->export_configurations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **export_configuration_id** | **str**| The id of the export configuration. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Export configuration was successfully deleted. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_configurations_disable**
> export_configurations_disable(export_configuration_id, owner_name, app_name)



Disable export configuration.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExportApi(api_client)
    export_configuration_id = 'export_configuration_id_example' # str | The id of the export configuration.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.export_configurations_disable(export_configuration_id, owner_name, app_name)
    except Exception as e:
        print("Exception when calling ExportApi->export_configurations_disable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **export_configuration_id** | **str**| The id of the export configuration. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Export configuration was successfully disabled. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_configurations_enable**
> export_configurations_enable(export_configuration_id, owner_name, app_name)



Enable export configuration.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExportApi(api_client)
    export_configuration_id = 'export_configuration_id_example' # str | The id of the export configuration.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.export_configurations_enable(export_configuration_id, owner_name, app_name)
    except Exception as e:
        print("Exception when calling ExportApi->export_configurations_enable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **export_configuration_id** | **str**| The id of the export configuration. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Export configuration was successfully enabled. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_configurations_get**
> ExportConfigurationsList200ResponseValuesInner export_configurations_get(export_configuration_id, owner_name, app_name)



Get export configuration.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.export_configurations_list200_response_values_inner import ExportConfigurationsList200ResponseValuesInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExportApi(api_client)
    export_configuration_id = 'export_configuration_id_example' # str | The id of the export configuration.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.export_configurations_get(export_configuration_id, owner_name, app_name)
        print("The response of ExportApi->export_configurations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExportApi->export_configurations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **export_configuration_id** | **str**| The id of the export configuration. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**ExportConfigurationsList200ResponseValuesInner**](ExportConfigurationsList200ResponseValuesInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get export configuration. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_configurations_list**
> ExportConfigurationsList200Response export_configurations_list(owner_name, app_name)



List export configurations.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.export_configurations_list200_response import ExportConfigurationsList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExportApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.export_configurations_list(owner_name, app_name)
        print("The response of ExportApi->export_configurations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExportApi->export_configurations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**ExportConfigurationsList200Response**](ExportConfigurationsList200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List export configurations. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_configurations_partial_update**
> ExportConfigurationsList200ResponseValuesInner export_configurations_partial_update(export_configuration_id, owner_name, app_name, export_configurations_list200_response_values_inner_export_configuration)



Partially update export configuration.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.export_configurations_list200_response_values_inner import ExportConfigurationsList200ResponseValuesInner
from openapi_client.models.export_configurations_list200_response_values_inner_export_configuration import ExportConfigurationsList200ResponseValuesInnerExportConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExportApi(api_client)
    export_configuration_id = 'export_configuration_id_example' # str | The id of the export configuration.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    export_configurations_list200_response_values_inner_export_configuration = openapi_client.ExportConfigurationsList200ResponseValuesInnerExportConfiguration() # ExportConfigurationsList200ResponseValuesInnerExportConfiguration | Export configurations.

    try:
        api_response = api_instance.export_configurations_partial_update(export_configuration_id, owner_name, app_name, export_configurations_list200_response_values_inner_export_configuration)
        print("The response of ExportApi->export_configurations_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExportApi->export_configurations_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **export_configuration_id** | **str**| The id of the export configuration. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **export_configurations_list200_response_values_inner_export_configuration** | [**ExportConfigurationsList200ResponseValuesInnerExportConfiguration**](ExportConfigurationsList200ResponseValuesInnerExportConfiguration.md)| Export configurations. | 

### Return type

[**ExportConfigurationsList200ResponseValuesInner**](ExportConfigurationsList200ResponseValuesInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Export configuration updated successfully. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

