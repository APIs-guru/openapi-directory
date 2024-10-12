# openapi_client.GCApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**farms_get_garbage_collection_state**](GCApi.md#farms_get_garbage_collection_state) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/operationresults/{operationId} | 


# **farms_get_garbage_collection_state**
> str farms_get_garbage_collection_state(subscription_id, resource_group_name, farm_id, api_version, operation_id)



Returns the state of the garbage collection job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GCApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    api_version = 'api_version_example' # str | REST Api Version.
    operation_id = 'operation_id_example' # str | Operation Id.

    try:
        api_response = api_instance.farms_get_garbage_collection_state(subscription_id, resource_group_name, farm_id, api_version, operation_id)
        print("The response of GCApi->farms_get_garbage_collection_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GCApi->farms_get_garbage_collection_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **api_version** | **str**| REST Api Version. | 
 **operation_id** | **str**| Operation Id. | 

### Return type

**str**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The state of garbage collection has been returned. |  -  |
**404** | NOT FOUND -- The specified farm or garbage collection job can not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

