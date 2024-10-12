# openapi_client.RegionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locations_get_capabilities**](RegionsApi.md#locations_get_capabilities) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/capabilities | 
[**locations_list_billing_specs**](RegionsApi.md#locations_list_billing_specs) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/billingSpecs | 
[**locations_list_usages**](RegionsApi.md#locations_list_usages) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/usages | 


# **locations_get_capabilities**
> CapabilitiesResult locations_get_capabilities(subscription_id, location, api_version)



Gets the capabilities for the specified location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.capabilities_result import CapabilitiesResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | The Azure location (region) for which to make the request.
    api_version = 'api_version_example' # str | The HDInsight client API Version.

    try:
        api_response = api_instance.locations_get_capabilities(subscription_id, location, api_version)
        print("The response of RegionsApi->locations_get_capabilities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegionsApi->locations_get_capabilities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| The Azure location (region) for which to make the request. | 
 **api_version** | **str**| The HDInsight client API Version. | 

### Return type

[**CapabilitiesResult**](CapabilitiesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **locations_list_billing_specs**
> BillingResponseListResult locations_list_billing_specs(subscription_id, location, api_version)



Lists the billingSpecs for the specified subscription and location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_response_list_result import BillingResponseListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | The Azure location (region) for which to make the request.
    api_version = 'api_version_example' # str | The HDInsight client API Version.

    try:
        api_response = api_instance.locations_list_billing_specs(subscription_id, location, api_version)
        print("The response of RegionsApi->locations_list_billing_specs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegionsApi->locations_list_billing_specs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| The Azure location (region) for which to make the request. | 
 **api_version** | **str**| The HDInsight client API Version. | 

### Return type

[**BillingResponseListResult**](BillingResponseListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **locations_list_usages**
> UsagesListResult locations_list_usages(subscription_id, location, api_version)



Lists the usages for the specified location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usages_list_result import UsagesListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | The Azure location (region) for which to make the request.
    api_version = 'api_version_example' # str | The HDInsight client API Version.

    try:
        api_response = api_instance.locations_list_usages(subscription_id, location, api_version)
        print("The response of RegionsApi->locations_list_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegionsApi->locations_list_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| The Azure location (region) for which to make the request. | 
 **api_version** | **str**| The HDInsight client API Version. | 

### Return type

[**UsagesListResult**](UsagesListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

