# openapi_client.UsageApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usages_list**](UsageApi.md#usages_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.BatchAI/locations/{location}/usages | 


# **usages_list**
> ListUsagesResult usages_list(api_version, subscription_id, location)



Gets the current usage information as well as limits for Batch AI resources for given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_usages_result import ListUsagesResult
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
    api_instance = openapi_client.UsageApi(api_client)
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.
    location = 'location_example' # str | The location for which resource usage is queried.

    try:
        api_response = api_instance.usages_list(api_version, subscription_id, location)
        print("The response of UsageApi->usages_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageApi->usages_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 
 **location** | **str**| The location for which resource usage is queried. | 

### Return type

[**ListUsagesResult**](ListUsagesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

