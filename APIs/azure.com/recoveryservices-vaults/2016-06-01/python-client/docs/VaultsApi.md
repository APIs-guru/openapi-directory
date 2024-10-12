# openapi_client.VaultsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vaults_create_or_update**](VaultsApi.md#vaults_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName} | 
[**vaults_delete**](VaultsApi.md#vaults_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName} | 
[**vaults_get**](VaultsApi.md#vaults_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName} | 
[**vaults_list_by_resource_group**](VaultsApi.md#vaults_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults | 
[**vaults_list_by_subscription_id**](VaultsApi.md#vaults_list_by_subscription_id) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/vaults | 
[**vaults_update**](VaultsApi.md#vaults_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName} | 


# **vaults_create_or_update**
> Vault vaults_create_or_update(subscription_id, api_version, resource_group_name, vault_name, vault)



Creates or updates a Recovery Services vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vault import Vault
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
    api_instance = openapi_client.VaultsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    vault = openapi_client.Vault() # Vault | Recovery Services Vault to be created.

    try:
        api_response = api_instance.vaults_create_or_update(subscription_id, api_version, resource_group_name, vault_name, vault)
        print("The response of VaultsApi->vaults_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **api_version** | **str**| Client Api Version. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **vault** | [**Vault**](Vault.md)| Recovery Services Vault to be created. | 

### Return type

[**Vault**](Vault.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vaults_delete**
> vaults_delete(subscription_id, api_version, resource_group_name, vault_name)



Deletes a vault.

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
    api_instance = openapi_client.VaultsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.

    try:
        api_instance.vaults_delete(subscription_id, api_version, resource_group_name, vault_name)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **api_version** | **str**| Client Api Version. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **vault_name** | **str**| The name of the recovery services vault. | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vaults_get**
> Vault vaults_get(subscription_id, api_version, resource_group_name, vault_name)



Get the Vault details.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vault import Vault
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
    api_instance = openapi_client.VaultsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.

    try:
        api_response = api_instance.vaults_get(subscription_id, api_version, resource_group_name, vault_name)
        print("The response of VaultsApi->vaults_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **api_version** | **str**| Client Api Version. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **vault_name** | **str**| The name of the recovery services vault. | 

### Return type

[**Vault**](Vault.md)

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

# **vaults_list_by_resource_group**
> VaultList vaults_list_by_resource_group(subscription_id, api_version, resource_group_name)



Retrieve a list of Vaults.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vault_list import VaultList
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
    api_instance = openapi_client.VaultsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.

    try:
        api_response = api_instance.vaults_list_by_resource_group(subscription_id, api_version, resource_group_name)
        print("The response of VaultsApi->vaults_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **api_version** | **str**| Client Api Version. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 

### Return type

[**VaultList**](VaultList.md)

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

# **vaults_list_by_subscription_id**
> VaultList vaults_list_by_subscription_id(subscription_id, api_version)



Fetches all the resources of the specified type in the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vault_list import VaultList
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
    api_instance = openapi_client.VaultsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.vaults_list_by_subscription_id(subscription_id, api_version)
        print("The response of VaultsApi->vaults_list_by_subscription_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_list_by_subscription_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**VaultList**](VaultList.md)

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

# **vaults_update**
> Vault vaults_update(subscription_id, api_version, resource_group_name, vault_name, vault)



Updates the vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.patch_vault import PatchVault
from openapi_client.models.vault import Vault
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
    api_instance = openapi_client.VaultsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    vault = openapi_client.PatchVault() # PatchVault | Recovery Services Vault to be created.

    try:
        api_response = api_instance.vaults_update(subscription_id, api_version, resource_group_name, vault_name, vault)
        print("The response of VaultsApi->vaults_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **api_version** | **str**| Client Api Version. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **vault** | [**PatchVault**](PatchVault.md)| Recovery Services Vault to be created. | 

### Return type

[**Vault**](Vault.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

