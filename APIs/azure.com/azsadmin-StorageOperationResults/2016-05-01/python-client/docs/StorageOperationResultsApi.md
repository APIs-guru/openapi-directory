# openapi_client.StorageOperationResultsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_operation_results_get**](StorageOperationResultsApi.md#storage_operation_results_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/storageOperationResults/{operation} | 
[**storage_operation_results_list**](StorageOperationResultsApi.md#storage_operation_results_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/storageOperationResults | 


# **storage_operation_results_get**
> StorageOperationResult storage_operation_results_get(subscription_id, resource_group_name, location, operation, api_version)



Returns the status of a storage operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_operation_result import StorageOperationResult
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
    api_instance = openapi_client.StorageOperationResultsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    location = 'location_example' # str | Location of the resource.
    operation = 'operation_example' # str | Operation identifier.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')

    try:
        api_response = api_instance.storage_operation_results_get(subscription_id, resource_group_name, location, operation, api_version)
        print("The response of StorageOperationResultsApi->storage_operation_results_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageOperationResultsApi->storage_operation_results_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **location** | **str**| Location of the resource. | 
 **operation** | **str**| Operation identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]

### Return type

[**StorageOperationResult**](StorageOperationResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NOT FOUND |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_operation_results_list**
> StorageOperationResultList storage_operation_results_list(subscription_id, resource_group_name, location, api_version, filter=filter)



Returns a list of all storage operation results at a location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_operation_result_list import StorageOperationResultList
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
    api_instance = openapi_client.StorageOperationResultsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    location = 'location_example' # str | Location of the resource.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')
    filter = 'filter_example' # str | OData filter parameter. (optional)

    try:
        api_response = api_instance.storage_operation_results_list(subscription_id, resource_group_name, location, api_version, filter=filter)
        print("The response of StorageOperationResultsApi->storage_operation_results_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageOperationResultsApi->storage_operation_results_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **location** | **str**| Location of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]
 **filter** | **str**| OData filter parameter. | [optional] 

### Return type

[**StorageOperationResultList**](StorageOperationResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NOT FOUND |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

