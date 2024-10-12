# openapi_client.ManagedInstanceOperationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_instance_operations_list_by_managed_instance**](ManagedInstanceOperationsApi.md#managed_instance_operations_list_by_managed_instance) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/operations | 


# **managed_instance_operations_list_by_managed_instance**
> ManagedInstanceOperationListResult managed_instance_operations_list_by_managed_instance(resource_group_name, managed_instance_name, subscription_id, api_version)



Gets a list of operations performed on the managed instance.

### Example


```python
import openapi_client
from openapi_client.models.managed_instance_operation_list_result import ManagedInstanceOperationListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManagedInstanceOperationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_instance_operations_list_by_managed_instance(resource_group_name, managed_instance_name, subscription_id, api_version)
        print("The response of ManagedInstanceOperationsApi->managed_instance_operations_list_by_managed_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedInstanceOperationsApi->managed_instance_operations_list_by_managed_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedInstanceOperationListResult**](ManagedInstanceOperationListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request for getting managed instance operations has been executed successfully. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

