# openapi_client.RecoveryPointsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recovery_points_get**](RecoveryPointsApi.md#recovery_points_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointId} | 
[**recovery_points_list**](RecoveryPointsApi.md#recovery_points_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints | 


# **recovery_points_get**
> RecoveryPointResource recovery_points_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, recovery_point_id)



Provides the backup data for the RecoveryPointID. This is an asynchronous operation. To learn the status of the operation, call the GetProtectedItemOperationResult API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_point_resource import RecoveryPointResource
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
    api_instance = openapi_client.RecoveryPointsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    vault_name = 'vault_name_example' # str | The name of the Recovery Services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group associated with the Recovery Services vault.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    fabric_name = 'fabric_name_example' # str | The fabric name associated with backup item.
    container_name = 'container_name_example' # str | The container name associated with backup item.
    protected_item_name = 'protected_item_name_example' # str | The name of the backup item used in this GET operation.
    recovery_point_id = 'recovery_point_id_example' # str | The RecoveryPointID associated with this GET operation.

    try:
        api_response = api_instance.recovery_points_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, recovery_point_id)
        print("The response of RecoveryPointsApi->recovery_points_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecoveryPointsApi->recovery_points_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **vault_name** | **str**| The name of the Recovery Services vault. | 
 **resource_group_name** | **str**| The name of the resource group associated with the Recovery Services vault. | 
 **subscription_id** | **str**| The subscription ID. | 
 **fabric_name** | **str**| The fabric name associated with backup item. | 
 **container_name** | **str**| The container name associated with backup item. | 
 **protected_item_name** | **str**| The name of the backup item used in this GET operation. | 
 **recovery_point_id** | **str**| The RecoveryPointID associated with this GET operation. | 

### Return type

[**RecoveryPointResource**](RecoveryPointResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recovery_points_list**
> RecoveryPointResourceList recovery_points_list(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, filter=filter)



Lists the recovery points, or backup copies, for the specified backup item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_point_resource_list import RecoveryPointResourceList
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
    api_instance = openapi_client.RecoveryPointsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    vault_name = 'vault_name_example' # str | The name of the Recovery Services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group associated with the Recovery Services vault.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    fabric_name = 'fabric_name_example' # str | The fabric name associated with the backup item.
    container_name = 'container_name_example' # str | The container name associated with the backup item.
    protected_item_name = 'protected_item_name_example' # str | The name of backup item used in this GET operation.
    filter = 'filter_example' # str | startDate eq {yyyy-mm-dd hh:mm:ss PM} and endDate { yyyy-mm-dd hh:mm:ss PM}. (optional)

    try:
        api_response = api_instance.recovery_points_list(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, filter=filter)
        print("The response of RecoveryPointsApi->recovery_points_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecoveryPointsApi->recovery_points_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **vault_name** | **str**| The name of the Recovery Services vault. | 
 **resource_group_name** | **str**| The name of the resource group associated with the Recovery Services vault. | 
 **subscription_id** | **str**| The subscription ID. | 
 **fabric_name** | **str**| The fabric name associated with the backup item. | 
 **container_name** | **str**| The container name associated with the backup item. | 
 **protected_item_name** | **str**| The name of backup item used in this GET operation. | 
 **filter** | **str**| startDate eq {yyyy-mm-dd hh:mm:ss PM} and endDate { yyyy-mm-dd hh:mm:ss PM}. | [optional] 

### Return type

[**RecoveryPointResourceList**](RecoveryPointResourceList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

