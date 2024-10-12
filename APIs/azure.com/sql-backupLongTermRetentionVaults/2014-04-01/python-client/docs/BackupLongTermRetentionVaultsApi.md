# openapi_client.BackupLongTermRetentionVaultsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_long_term_retention_vaults_create_or_update**](BackupLongTermRetentionVaultsApi.md#backup_long_term_retention_vaults_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/backupLongTermRetentionVaults/{backupLongTermRetentionVaultName} | 
[**backup_long_term_retention_vaults_get**](BackupLongTermRetentionVaultsApi.md#backup_long_term_retention_vaults_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/backupLongTermRetentionVaults/{backupLongTermRetentionVaultName} | 
[**backup_long_term_retention_vaults_list_by_server**](BackupLongTermRetentionVaultsApi.md#backup_long_term_retention_vaults_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/backupLongTermRetentionVaults | 


# **backup_long_term_retention_vaults_create_or_update**
> BackupLongTermRetentionVault backup_long_term_retention_vaults_create_or_update(api_version, subscription_id, resource_group_name, server_name, backup_long_term_retention_vault_name, parameters)



Updates a server backup long term retention vault

### Example


```python
import openapi_client
from openapi_client.models.backup_long_term_retention_vault import BackupLongTermRetentionVault
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
    api_instance = openapi_client.BackupLongTermRetentionVaultsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    backup_long_term_retention_vault_name = 'backup_long_term_retention_vault_name_example' # str | The name of the backup long term retention vault
    parameters = openapi_client.BackupLongTermRetentionVault() # BackupLongTermRetentionVault | The required parameters to update a backup long term retention vault

    try:
        api_response = api_instance.backup_long_term_retention_vaults_create_or_update(api_version, subscription_id, resource_group_name, server_name, backup_long_term_retention_vault_name, parameters)
        print("The response of BackupLongTermRetentionVaultsApi->backup_long_term_retention_vaults_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupLongTermRetentionVaultsApi->backup_long_term_retention_vaults_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **backup_long_term_retention_vault_name** | **str**| The name of the backup long term retention vault | 
 **parameters** | [**BackupLongTermRetentionVault**](BackupLongTermRetentionVault.md)| The required parameters to update a backup long term retention vault | 

### Return type

[**BackupLongTermRetentionVault**](BackupLongTermRetentionVault.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backup_long_term_retention_vaults_get**
> BackupLongTermRetentionVault backup_long_term_retention_vaults_get(api_version, subscription_id, resource_group_name, server_name, backup_long_term_retention_vault_name)



Gets a server backup long term retention vault

### Example


```python
import openapi_client
from openapi_client.models.backup_long_term_retention_vault import BackupLongTermRetentionVault
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
    api_instance = openapi_client.BackupLongTermRetentionVaultsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    backup_long_term_retention_vault_name = 'backup_long_term_retention_vault_name_example' # str | The name of the Azure SQL Server backup LongTermRetention vault

    try:
        api_response = api_instance.backup_long_term_retention_vaults_get(api_version, subscription_id, resource_group_name, server_name, backup_long_term_retention_vault_name)
        print("The response of BackupLongTermRetentionVaultsApi->backup_long_term_retention_vaults_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupLongTermRetentionVaultsApi->backup_long_term_retention_vaults_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **backup_long_term_retention_vault_name** | **str**| The name of the Azure SQL Server backup LongTermRetention vault | 

### Return type

[**BackupLongTermRetentionVault**](BackupLongTermRetentionVault.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backup_long_term_retention_vaults_list_by_server**
> BackupLongTermRetentionVaultListResult backup_long_term_retention_vaults_list_by_server(api_version, subscription_id, resource_group_name, server_name)



Gets server backup long term retention vaults in a server

### Example


```python
import openapi_client
from openapi_client.models.backup_long_term_retention_vault_list_result import BackupLongTermRetentionVaultListResult
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
    api_instance = openapi_client.BackupLongTermRetentionVaultsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.

    try:
        api_response = api_instance.backup_long_term_retention_vaults_list_by_server(api_version, subscription_id, resource_group_name, server_name)
        print("The response of BackupLongTermRetentionVaultsApi->backup_long_term_retention_vaults_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupLongTermRetentionVaultsApi->backup_long_term_retention_vaults_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 

### Return type

[**BackupLongTermRetentionVaultListResult**](BackupLongTermRetentionVaultListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

