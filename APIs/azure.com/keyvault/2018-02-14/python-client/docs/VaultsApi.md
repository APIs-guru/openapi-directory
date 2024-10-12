# openapi_client.VaultsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vaults_check_name_availability**](VaultsApi.md#vaults_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/checkNameAvailability | 
[**vaults_create_or_update**](VaultsApi.md#vaults_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName} | 
[**vaults_delete**](VaultsApi.md#vaults_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName} | 
[**vaults_get**](VaultsApi.md#vaults_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName} | 
[**vaults_get_deleted**](VaultsApi.md#vaults_get_deleted) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName} | 
[**vaults_list**](VaultsApi.md#vaults_list) | **GET** /subscriptions/{subscriptionId}/resources | 
[**vaults_list_by_resource_group**](VaultsApi.md#vaults_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults | 
[**vaults_list_by_subscription**](VaultsApi.md#vaults_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/vaults | 
[**vaults_list_deleted**](VaultsApi.md#vaults_list_deleted) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/deletedVaults | 
[**vaults_purge_deleted**](VaultsApi.md#vaults_purge_deleted) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}/purge | 
[**vaults_update**](VaultsApi.md#vaults_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName} | 
[**vaults_update_access_policy**](VaultsApi.md#vaults_update_access_policy) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/accessPolicies/{operationKind} | 


# **vaults_check_name_availability**
> CheckNameAvailabilityResult vaults_check_name_availability(api_version, subscription_id, vault_name)



Checks that the vault name is valid and is not already in use.

### Example


```python
import openapi_client
from openapi_client.models.check_name_availability_result import CheckNameAvailabilityResult
from openapi_client.models.vault_check_name_availability_parameters import VaultCheckNameAvailabilityParameters
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
    api_instance = openapi_client.VaultsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vault_name = openapi_client.VaultCheckNameAvailabilityParameters() # VaultCheckNameAvailabilityParameters | The name of the vault.

    try:
        api_response = api_instance.vaults_check_name_availability(api_version, subscription_id, vault_name)
        print("The response of VaultsApi->vaults_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vault_name** | [**VaultCheckNameAvailabilityParameters**](VaultCheckNameAvailabilityParameters.md)| The name of the vault. | 

### Return type

[**CheckNameAvailabilityResult**](CheckNameAvailabilityResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Operation to check the vault name availability was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vaults_create_or_update**
> Vault vaults_create_or_update(resource_group_name, vault_name, api_version, subscription_id, parameters)



Create or update a key vault in the specified subscription.

### Example


```python
import openapi_client
from openapi_client.models.vault import Vault
from openapi_client.models.vault_create_or_update_parameters import VaultCreateOrUpdateParameters
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
    api_instance = openapi_client.VaultsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the server belongs.
    vault_name = 'vault_name_example' # str | Name of the vault
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VaultCreateOrUpdateParameters() # VaultCreateOrUpdateParameters | Parameters to create or update the vault

    try:
        api_response = api_instance.vaults_create_or_update(resource_group_name, vault_name, api_version, subscription_id, parameters)
        print("The response of VaultsApi->vaults_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the server belongs. | 
 **vault_name** | **str**| Name of the vault | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VaultCreateOrUpdateParameters**](VaultCreateOrUpdateParameters.md)| Parameters to create or update the vault | 

### Return type

[**Vault**](Vault.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created or updated vault |  -  |
**201** | Created or updated vault |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vaults_delete**
> vaults_delete(resource_group_name, vault_name, api_version, subscription_id)



Deletes the specified Azure key vault.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.VaultsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the vault belongs.
    vault_name = 'vault_name_example' # str | The name of the vault to delete
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.vaults_delete(resource_group_name, vault_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the vault belongs. | 
 **vault_name** | **str**| The name of the vault to delete | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vaults_get**
> Vault vaults_get(resource_group_name, vault_name, api_version, subscription_id)



Gets the specified Azure key vault.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VaultsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the vault belongs.
    vault_name = 'vault_name_example' # str | The name of the vault.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.vaults_get(resource_group_name, vault_name, api_version, subscription_id)
        print("The response of VaultsApi->vaults_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the vault belongs. | 
 **vault_name** | **str**| The name of the vault. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**Vault**](Vault.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieved vault |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vaults_get_deleted**
> DeletedVault vaults_get_deleted(vault_name, location, api_version, subscription_id)



Gets the deleted Azure key vault.

### Example


```python
import openapi_client
from openapi_client.models.deleted_vault import DeletedVault
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
    api_instance = openapi_client.VaultsApi(api_client)
    vault_name = 'vault_name_example' # str | The name of the vault.
    location = 'location_example' # str | The location of the deleted vault.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.vaults_get_deleted(vault_name, location, api_version, subscription_id)
        print("The response of VaultsApi->vaults_get_deleted:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_get_deleted: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vault_name** | **str**| The name of the vault. | 
 **location** | **str**| The location of the deleted vault. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DeletedVault**](DeletedVault.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieved information about the deleted vault. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vaults_list**
> ResourceListResult vaults_list(filter, api_version, subscription_id, top=top)



The List operation gets information about the vaults associated with the subscription.

### Example


```python
import openapi_client
from openapi_client.models.resource_list_result import ResourceListResult
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
    api_instance = openapi_client.VaultsApi(api_client)
    filter = 'filter_example' # str | The filter to apply on the operation.
    api_version = 'api_version_example' # str | Azure Resource Manager Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    top = 56 # int | Maximum number of results to return. (optional)

    try:
        api_response = api_instance.vaults_list(filter, api_version, subscription_id, top=top)
        print("The response of VaultsApi->vaults_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| The filter to apply on the operation. | 
 **api_version** | **str**| Azure Resource Manager Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **top** | **int**| Maximum number of results to return. | [optional] 

### Return type

[**ResourceListResult**](ResourceListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get information about all key vaults in the subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vaults_list_by_resource_group**
> VaultListResult vaults_list_by_resource_group(resource_group_name, api_version, subscription_id, top=top)



The List operation gets information about the vaults associated with the subscription and within the specified resource group.

### Example


```python
import openapi_client
from openapi_client.models.vault_list_result import VaultListResult
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
    api_instance = openapi_client.VaultsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the vault belongs.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    top = 56 # int | Maximum number of results to return. (optional)

    try:
        api_response = api_instance.vaults_list_by_resource_group(resource_group_name, api_version, subscription_id, top=top)
        print("The response of VaultsApi->vaults_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the vault belongs. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **top** | **int**| Maximum number of results to return. | [optional] 

### Return type

[**VaultListResult**](VaultListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get information about all key vaults in the specified resource group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vaults_list_by_subscription**
> VaultListResult vaults_list_by_subscription(api_version, subscription_id, top=top)



The List operation gets information about the vaults associated with the subscription.

### Example


```python
import openapi_client
from openapi_client.models.vault_list_result import VaultListResult
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
    api_instance = openapi_client.VaultsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    top = 56 # int | Maximum number of results to return. (optional)

    try:
        api_response = api_instance.vaults_list_by_subscription(api_version, subscription_id, top=top)
        print("The response of VaultsApi->vaults_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **top** | **int**| Maximum number of results to return. | [optional] 

### Return type

[**VaultListResult**](VaultListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get information about all key vaults in the specified subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vaults_list_deleted**
> DeletedVaultListResult vaults_list_deleted(api_version, subscription_id)



Gets information about the deleted vaults in a subscription.

### Example


```python
import openapi_client
from openapi_client.models.deleted_vault_list_result import DeletedVaultListResult
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
    api_instance = openapi_client.VaultsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.vaults_list_deleted(api_version, subscription_id)
        print("The response of VaultsApi->vaults_list_deleted:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_list_deleted: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DeletedVaultListResult**](DeletedVaultListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieved information about all deleted key vaults in a subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vaults_purge_deleted**
> vaults_purge_deleted(vault_name, location, api_version, subscription_id)



Permanently deletes the specified vault. aka Purges the deleted Azure key vault.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.VaultsApi(api_client)
    vault_name = 'vault_name_example' # str | The name of the soft-deleted vault.
    location = 'location_example' # str | The location of the soft-deleted vault.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.vaults_purge_deleted(vault_name, location, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_purge_deleted: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vault_name** | **str**| The name of the soft-deleted vault. | 
 **location** | **str**| The location of the soft-deleted vault. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The vault is purged. |  -  |
**202** | Vault is being purged. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vaults_update**
> Vault vaults_update(resource_group_name, vault_name, api_version, subscription_id, parameters)



Update a key vault in the specified subscription.

### Example


```python
import openapi_client
from openapi_client.models.vault import Vault
from openapi_client.models.vault_patch_parameters import VaultPatchParameters
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
    api_instance = openapi_client.VaultsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the server belongs.
    vault_name = 'vault_name_example' # str | Name of the vault
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VaultPatchParameters() # VaultPatchParameters | Parameters to patch the vault

    try:
        api_response = api_instance.vaults_update(resource_group_name, vault_name, api_version, subscription_id, parameters)
        print("The response of VaultsApi->vaults_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the server belongs. | 
 **vault_name** | **str**| Name of the vault | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VaultPatchParameters**](VaultPatchParameters.md)| Parameters to patch the vault | 

### Return type

[**Vault**](Vault.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Patched vault |  -  |
**201** | Patched vault |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vaults_update_access_policy**
> VaultAccessPolicyParameters vaults_update_access_policy(resource_group_name, vault_name, operation_kind, api_version, subscription_id, parameters)



Update access policies in a key vault in the specified subscription.

### Example


```python
import openapi_client
from openapi_client.models.vault_access_policy_parameters import VaultAccessPolicyParameters
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
    api_instance = openapi_client.VaultsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the vault belongs.
    vault_name = 'vault_name_example' # str | Name of the vault
    operation_kind = 'operation_kind_example' # str | Name of the operation
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VaultAccessPolicyParameters() # VaultAccessPolicyParameters | Access policy to merge into the vault

    try:
        api_response = api_instance.vaults_update_access_policy(resource_group_name, vault_name, operation_kind, api_version, subscription_id, parameters)
        print("The response of VaultsApi->vaults_update_access_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultsApi->vaults_update_access_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the vault belongs. | 
 **vault_name** | **str**| Name of the vault | 
 **operation_kind** | **str**| Name of the operation | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VaultAccessPolicyParameters**](VaultAccessPolicyParameters.md)| Access policy to merge into the vault | 

### Return type

[**VaultAccessPolicyParameters**](VaultAccessPolicyParameters.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated access policies |  -  |
**201** | The updated access policies |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

