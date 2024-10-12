# openapi_client.ProtectedItemsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**protected_items_create_or_update**](ProtectedItemsApi.md#protected_items_create_or_update) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName} | 
[**protected_items_delete**](ProtectedItemsApi.md#protected_items_delete) | **DELETE** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName} | 
[**protected_items_get**](ProtectedItemsApi.md#protected_items_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName} | 


# **protected_items_create_or_update**
> protected_items_create_or_update(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, parameters)



Enables backup of an item or to modifies the backup policy information of an already backed up item. This is an asynchronous operation. To know the status of the operation, call the GetItemOperationResult API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protected_item_resource import ProtectedItemResource
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
    api_instance = openapi_client.ProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated with the backup item.
    container_name = 'container_name_example' # str | Container name associated with the backup item.
    protected_item_name = 'protected_item_name_example' # str | Item name to be backed up.
    parameters = openapi_client.ProtectedItemResource() # ProtectedItemResource | resource backed up item

    try:
        api_instance.protected_items_create_or_update(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, parameters)
    except Exception as e:
        print("Exception when calling ProtectedItemsApi->protected_items_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated with the backup item. | 
 **container_name** | **str**| Container name associated with the backup item. | 
 **protected_item_name** | **str**| Item name to be backed up. | 
 **parameters** | [**ProtectedItemResource**](ProtectedItemResource.md)| resource backed up item | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **protected_items_delete**
> protected_items_delete(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name)



Used to disable backup of an item within a container. This is an asynchronous operation. To know the status of the request, call the GetItemOperationResult API.

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
    api_instance = openapi_client.ProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated with the backed up item.
    container_name = 'container_name_example' # str | Container name associated with the backed up item.
    protected_item_name = 'protected_item_name_example' # str | Backed up item to be deleted.

    try:
        api_instance.protected_items_delete(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name)
    except Exception as e:
        print("Exception when calling ProtectedItemsApi->protected_items_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated with the backed up item. | 
 **container_name** | **str**| Container name associated with the backed up item. | 
 **protected_item_name** | **str**| Backed up item to be deleted. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **protected_items_get**
> ProtectedItemResource protected_items_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, filter=filter)



Provides the details of the backed up item. This is an asynchronous operation. To know the status of the operation, call the GetItemOperationResult API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protected_item_resource import ProtectedItemResource
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
    api_instance = openapi_client.ProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated with the backed up item.
    container_name = 'container_name_example' # str | Container name associated with the backed up item.
    protected_item_name = 'protected_item_name_example' # str | Backed up item name whose details are to be fetched.
    filter = 'filter_example' # str | OData filter options. (optional)

    try:
        api_response = api_instance.protected_items_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, filter=filter)
        print("The response of ProtectedItemsApi->protected_items_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProtectedItemsApi->protected_items_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated with the backed up item. | 
 **container_name** | **str**| Container name associated with the backed up item. | 
 **protected_item_name** | **str**| Backed up item name whose details are to be fetched. | 
 **filter** | **str**| OData filter options. | [optional] 

### Return type

[**ProtectedItemResource**](ProtectedItemResource.md)

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

