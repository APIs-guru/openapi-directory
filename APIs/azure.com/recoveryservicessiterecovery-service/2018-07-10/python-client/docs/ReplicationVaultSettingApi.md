# openapi_client.ReplicationVaultSettingApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_vault_setting_create**](ReplicationVaultSettingApi.md#replication_vault_setting_create) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultSettings/{vaultSettingName} | Updates vault setting. A vault setting object is a singleton per vault and it is always present by default.
[**replication_vault_setting_get**](ReplicationVaultSettingApi.md#replication_vault_setting_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultSettings/{vaultSettingName} | Gets the vault setting.
[**replication_vault_setting_list**](ReplicationVaultSettingApi.md#replication_vault_setting_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultSettings | Gets the list of vault setting.


# **replication_vault_setting_create**
> VaultSetting replication_vault_setting_create(api_version, resource_name, resource_group_name, subscription_id, vault_setting_name, input)

Updates vault setting. A vault setting object is a singleton per vault and it is always present by default.

The operation to configure vault setting.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vault_setting import VaultSetting
from openapi_client.models.vault_setting_creation_input import VaultSettingCreationInput
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
    api_instance = openapi_client.ReplicationVaultSettingApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    vault_setting_name = 'vault_setting_name_example' # str | Vault setting name.
    input = openapi_client.VaultSettingCreationInput() # VaultSettingCreationInput | Vault setting creation input.

    try:
        # Updates vault setting. A vault setting object is a singleton per vault and it is always present by default.
        api_response = api_instance.replication_vault_setting_create(api_version, resource_name, resource_group_name, subscription_id, vault_setting_name, input)
        print("The response of ReplicationVaultSettingApi->replication_vault_setting_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationVaultSettingApi->replication_vault_setting_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **vault_setting_name** | **str**| Vault setting name. | 
 **input** | [**VaultSettingCreationInput**](VaultSettingCreationInput.md)| Vault setting creation input. | 

### Return type

[**VaultSetting**](VaultSetting.md)

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

# **replication_vault_setting_get**
> VaultSetting replication_vault_setting_get(api_version, resource_name, resource_group_name, subscription_id, vault_setting_name)

Gets the vault setting.

Gets the vault setting. This includes the Migration Hub connection settings.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vault_setting import VaultSetting
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
    api_instance = openapi_client.ReplicationVaultSettingApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    vault_setting_name = 'vault_setting_name_example' # str | Vault setting name.

    try:
        # Gets the vault setting.
        api_response = api_instance.replication_vault_setting_get(api_version, resource_name, resource_group_name, subscription_id, vault_setting_name)
        print("The response of ReplicationVaultSettingApi->replication_vault_setting_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationVaultSettingApi->replication_vault_setting_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **vault_setting_name** | **str**| Vault setting name. | 

### Return type

[**VaultSetting**](VaultSetting.md)

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

# **replication_vault_setting_list**
> VaultSettingCollection replication_vault_setting_list(api_version, resource_name, resource_group_name, subscription_id)

Gets the list of vault setting.

Gets the list of vault setting. This includes the Migration Hub connection settings.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vault_setting_collection import VaultSettingCollection
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
    api_instance = openapi_client.ReplicationVaultSettingApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.

    try:
        # Gets the list of vault setting.
        api_response = api_instance.replication_vault_setting_list(api_version, resource_name, resource_group_name, subscription_id)
        print("The response of ReplicationVaultSettingApi->replication_vault_setting_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationVaultSettingApi->replication_vault_setting_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 

### Return type

[**VaultSettingCollection**](VaultSettingCollection.md)

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

