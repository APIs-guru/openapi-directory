# openapi_client.ProtectedItemsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**protected_items_create_or_update**](ProtectedItemsApi.md#protected_items_create_or_update) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName} | 
[**protected_items_delete**](ProtectedItemsApi.md#protected_items_delete) | **DELETE** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName} | 
[**protected_items_get**](ProtectedItemsApi.md#protected_items_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName} | 
[**protected_items_list**](ProtectedItemsApi.md#protected_items_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupProtectedItems | 


# **protected_items_create_or_update**
> protected_items_create_or_update(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, resource_protected_item)



This operation enables an item to be backed up, or modifies the existing backup policy information for an item that has been backed up. This is an asynchronous operation. To learn the status of the operation, call the GetItemOperationResult API.

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
    api_version = 'api_version_example' # str | Client API version.
    vault_name = 'vault_name_example' # str | The name of the Recovery Services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group associated with the Recovery Services vault.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    fabric_name = 'fabric_name_example' # str | The fabric name associated with the backup item.
    container_name = 'container_name_example' # str | The container name associated with the backup item.
    protected_item_name = 'protected_item_name_example' # str | The name of the backup item.
    resource_protected_item = openapi_client.ProtectedItemResource() # ProtectedItemResource | The resource backup item.

    try:
        api_instance.protected_items_create_or_update(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, resource_protected_item)
    except Exception as e:
        print("Exception when calling ProtectedItemsApi->protected_items_create_or_update: %s\n" % e)
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
 **protected_item_name** | **str**| The name of the backup item. | 
 **resource_protected_item** | [**ProtectedItemResource**](ProtectedItemResource.md)| The resource backup item. | 

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
**202** | Accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **protected_items_delete**
> protected_items_delete(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name)



Used to disable the backup job for an item within a container. This is an asynchronous operation. To learn the status of the request, call the GetItemOperationResult API.

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
    api_version = 'api_version_example' # str | Client API version.
    vault_name = 'vault_name_example' # str | The name of the Recovery Services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group associated with the Recovery Services vault.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    fabric_name = 'fabric_name_example' # str |  The fabric name associated with the backup item.
    container_name = 'container_name_example' # str | The container name associated with the backup item.
    protected_item_name = 'protected_item_name_example' # str | The backup item to be deleted.

    try:
        api_instance.protected_items_delete(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name)
    except Exception as e:
        print("Exception when calling ProtectedItemsApi->protected_items_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **vault_name** | **str**| The name of the Recovery Services vault. | 
 **resource_group_name** | **str**| The name of the resource group associated with the Recovery Services vault. | 
 **subscription_id** | **str**| The subscription ID. | 
 **fabric_name** | **str**|  The fabric name associated with the backup item. | 
 **container_name** | **str**| The container name associated with the backup item. | 
 **protected_item_name** | **str**| The backup item to be deleted. | 

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
**202** | Accepted. |  -  |
**204** | No content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **protected_items_get**
> ProtectedItemResource protected_items_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, filter=filter)



Provides the details of the backup item. This is an asynchronous operation. To know the status of the operation, call the GetItemOperationResult API.

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
    api_version = 'api_version_example' # str | Client API version.
    vault_name = 'vault_name_example' # str | The name of the Recovery Services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group associated with the Recovery Services vault.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    fabric_name = 'fabric_name_example' # str | The fabric name associated with the backup item.
    container_name = 'container_name_example' # str | The container name associated with the backup item.
    protected_item_name = 'protected_item_name_example' # str | The backup item name used in this GET operation.
    filter = 'filter_example' # str | expand eq {extendedInfo}. This filter enables you to choose (or filter) specific items in the list of backup items. (optional)

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
 **api_version** | **str**| Client API version. | 
 **vault_name** | **str**| The name of the Recovery Services vault. | 
 **resource_group_name** | **str**| The name of the resource group associated with the Recovery Services vault. | 
 **subscription_id** | **str**| The subscription ID. | 
 **fabric_name** | **str**| The fabric name associated with the backup item. | 
 **container_name** | **str**| The container name associated with the backup item. | 
 **protected_item_name** | **str**| The backup item name used in this GET operation. | 
 **filter** | **str**| expand eq {extendedInfo}. This filter enables you to choose (or filter) specific items in the list of backup items. | [optional] 

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
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **protected_items_list**
> ProtectedItemResourceList protected_items_list(api_version, vault_name, resource_group_name, subscription_id, filter=filter, skip_token=skip_token)



Provides a pageable list of all items in a subscription, that can be protected.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protected_item_resource_list import ProtectedItemResourceList
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
    api_version = 'api_version_example' # str | Client API version.
    vault_name = 'vault_name_example' # str | The name of the Recovery Services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group associated with the Recovery Services vault.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    filter = 'filter_example' # str |  itemType eq { VM , FileFolder , AzureSqlDb , SQLDB , Exchange , Sharepoint , DPMUnknown } and providerType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and policyName eq {policyName} and containerName eq {containername} and backupManagementType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql }. (optional)
    skip_token = 'skip_token_example' # str |  The Skip Token filter. (optional)

    try:
        api_response = api_instance.protected_items_list(api_version, vault_name, resource_group_name, subscription_id, filter=filter, skip_token=skip_token)
        print("The response of ProtectedItemsApi->protected_items_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProtectedItemsApi->protected_items_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **vault_name** | **str**| The name of the Recovery Services vault. | 
 **resource_group_name** | **str**| The name of the resource group associated with the Recovery Services vault. | 
 **subscription_id** | **str**| The subscription ID. | 
 **filter** | **str**|  itemType eq { VM , FileFolder , AzureSqlDb , SQLDB , Exchange , Sharepoint , DPMUnknown } and providerType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and policyName eq {policyName} and containerName eq {containername} and backupManagementType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql }. | [optional] 
 **skip_token** | **str**|  The Skip Token filter. | [optional] 

### Return type

[**ProtectedItemResourceList**](ProtectedItemResourceList.md)

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

