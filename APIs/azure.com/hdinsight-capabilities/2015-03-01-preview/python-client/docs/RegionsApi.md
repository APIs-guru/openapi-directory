# openapi_client.RegionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**location_get_capabilities**](RegionsApi.md#location_get_capabilities) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/capabilities | 


# **location_get_capabilities**
> CapabilitiesResult location_get_capabilities(location, api_version, subscription_id)



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
    location = 'location_example' # str | The location to get capabilities for.
    api_version = 'api_version_example' # str | The HDInsight client API Version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.location_get_capabilities(location, api_version, subscription_id)
        print("The response of RegionsApi->location_get_capabilities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegionsApi->location_get_capabilities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location to get capabilities for. | 
 **api_version** | **str**| The HDInsight client API Version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

