# openapi_client.BackupVaultConfigsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_vault_configs_get**](BackupVaultConfigsApi.md#backup_vault_configs_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupconfig/vaultconfig | 
[**backup_vault_configs_update**](BackupVaultConfigsApi.md#backup_vault_configs_update) | **PATCH** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupconfig/vaultconfig | 


# **backup_vault_configs_get**
> BackupVaultConfig backup_vault_configs_get(subscription_id, api_version, resource_group_name, vault_name)



Fetches vault config.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_vault_config import BackupVaultConfig
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
    api_instance = openapi_client.BackupVaultConfigsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.

    try:
        api_response = api_instance.backup_vault_configs_get(subscription_id, api_version, resource_group_name, vault_name)
        print("The response of BackupVaultConfigsApi->backup_vault_configs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupVaultConfigsApi->backup_vault_configs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **api_version** | **str**| Client Api Version. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **vault_name** | **str**| The name of the recovery services vault. | 

### Return type

[**BackupVaultConfig**](BackupVaultConfig.md)

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

# **backup_vault_configs_update**
> BackupVaultConfig backup_vault_configs_update(subscription_id, api_version, resource_group_name, vault_name, backup_vault_config)



Updates vault config model type.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_vault_config import BackupVaultConfig
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
    api_instance = openapi_client.BackupVaultConfigsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    backup_vault_config = openapi_client.BackupVaultConfig() # BackupVaultConfig | Backup vault config.

    try:
        api_response = api_instance.backup_vault_configs_update(subscription_id, api_version, resource_group_name, vault_name, backup_vault_config)
        print("The response of BackupVaultConfigsApi->backup_vault_configs_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupVaultConfigsApi->backup_vault_configs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **api_version** | **str**| Client Api Version. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **backup_vault_config** | [**BackupVaultConfig**](BackupVaultConfig.md)| Backup vault config. | 

### Return type

[**BackupVaultConfig**](BackupVaultConfig.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

