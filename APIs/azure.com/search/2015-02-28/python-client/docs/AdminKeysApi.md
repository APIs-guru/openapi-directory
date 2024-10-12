# openapi_client.AdminKeysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_keys_list**](AdminKeysApi.md#admin_keys_list) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{serviceName}/listAdminKeys | 


# **admin_keys_list**
> AdminKeyResult admin_keys_list(resource_group_name, service_name, api_version, subscription_id)



Returns the primary and secondary API keys for the given Azure Search service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.admin_key_result import AdminKeyResult
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
    api_instance = openapi_client.AdminKeysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the current subscription.
    service_name = 'service_name_example' # str | The name of the Search service for which to list admin keys.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.admin_keys_list(resource_group_name, service_name, api_version, subscription_id)
        print("The response of AdminKeysApi->admin_keys_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminKeysApi->admin_keys_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the current subscription. | 
 **service_name** | **str**| The name of the Search service for which to list admin keys. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AdminKeyResult**](AdminKeyResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

