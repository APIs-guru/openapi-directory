# openapi_client.UsageApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usage_get_usage**](UsageApi.md#usage_get_usage) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web.Admin/environments/{environmentName}/usage | Returns usage records for specified subscription and resource groups


# **usage_get_usage**
> object usage_get_usage(resource_group_name, environment_name, last_id, batch_size, subscription_id, api_version)

Returns usage records for specified subscription and resource groups

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    environment_name = 'environment_name_example' # str | Environment name
    last_id = 'last_id_example' # str | Last marker that was returned from the batch
    batch_size = 56 # int | size of the batch to be returned.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Returns usage records for specified subscription and resource groups
        api_response = api_instance.usage_get_usage(resource_group_name, environment_name, last_id, batch_size, subscription_id, api_version)
        print("The response of UsageApi->usage_get_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageApi->usage_get_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **environment_name** | **str**| Environment name | 
 **last_id** | **str**| Last marker that was returned from the batch | 
 **batch_size** | **int**| size of the batch to be returned. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

