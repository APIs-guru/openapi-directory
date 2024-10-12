# openapi_client.RestorableDroppedManagedDatabasesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restorable_dropped_managed_databases_get**](RestorableDroppedManagedDatabasesApi.md#restorable_dropped_managed_databases_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId} | 
[**restorable_dropped_managed_databases_list_by_instance**](RestorableDroppedManagedDatabasesApi.md#restorable_dropped_managed_databases_list_by_instance) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases | 


# **restorable_dropped_managed_databases_get**
> RestorableDroppedManagedDatabase restorable_dropped_managed_databases_get(resource_group_name, managed_instance_name, restorable_dropped_database_id, subscription_id, api_version)



Gets a restorable dropped managed database.

### Example


```python
import openapi_client
from openapi_client.models.restorable_dropped_managed_database import RestorableDroppedManagedDatabase
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
    api_instance = openapi_client.RestorableDroppedManagedDatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    restorable_dropped_database_id = 'restorable_dropped_database_id_example' # str | 
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.restorable_dropped_managed_databases_get(resource_group_name, managed_instance_name, restorable_dropped_database_id, subscription_id, api_version)
        print("The response of RestorableDroppedManagedDatabasesApi->restorable_dropped_managed_databases_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RestorableDroppedManagedDatabasesApi->restorable_dropped_managed_databases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **restorable_dropped_database_id** | **str**|  | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**RestorableDroppedManagedDatabase**](RestorableDroppedManagedDatabase.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified restorable dropped database. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidRestorableDroppedDatabaseDeletionDate - The restorable dropped database deletion date given is invalid   * 400 InvalidRestorableDroppedDatabaseId - Invalid restorable dropped database identifier   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restorable_dropped_managed_databases_list_by_instance**
> RestorableDroppedManagedDatabaseListResult restorable_dropped_managed_databases_list_by_instance(resource_group_name, managed_instance_name, subscription_id, api_version)



Gets a list of restorable dropped managed databases.

### Example


```python
import openapi_client
from openapi_client.models.restorable_dropped_managed_database_list_result import RestorableDroppedManagedDatabaseListResult
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
    api_instance = openapi_client.RestorableDroppedManagedDatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.restorable_dropped_managed_databases_list_by_instance(resource_group_name, managed_instance_name, subscription_id, api_version)
        print("The response of RestorableDroppedManagedDatabasesApi->restorable_dropped_managed_databases_list_by_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RestorableDroppedManagedDatabasesApi->restorable_dropped_managed_databases_list_by_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**RestorableDroppedManagedDatabaseListResult**](RestorableDroppedManagedDatabaseListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of restorable dropped databases. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

