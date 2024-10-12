# openapi_client.ManagedInstanceEncryptionProtectorsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_instance_encryption_protectors_create_or_update**](ManagedInstanceEncryptionProtectorsApi.md#managed_instance_encryption_protectors_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector/{encryptionProtectorName} | 
[**managed_instance_encryption_protectors_get**](ManagedInstanceEncryptionProtectorsApi.md#managed_instance_encryption_protectors_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector/{encryptionProtectorName} | 
[**managed_instance_encryption_protectors_list_by_instance**](ManagedInstanceEncryptionProtectorsApi.md#managed_instance_encryption_protectors_list_by_instance) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector | 
[**managed_instance_encryption_protectors_revalidate**](ManagedInstanceEncryptionProtectorsApi.md#managed_instance_encryption_protectors_revalidate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector/{encryptionProtectorName}/revalidate | 


# **managed_instance_encryption_protectors_create_or_update**
> ManagedInstanceEncryptionProtector managed_instance_encryption_protectors_create_or_update(resource_group_name, managed_instance_name, encryption_protector_name, subscription_id, api_version, parameters)



Updates an existing encryption protector.

### Example


```python
import openapi_client
from openapi_client.models.managed_instance_encryption_protector import ManagedInstanceEncryptionProtector
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
    api_instance = openapi_client.ManagedInstanceEncryptionProtectorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    encryption_protector_name = 'encryption_protector_name_example' # str | The name of the encryption protector to be updated.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ManagedInstanceEncryptionProtector() # ManagedInstanceEncryptionProtector | The requested encryption protector resource state.

    try:
        api_response = api_instance.managed_instance_encryption_protectors_create_or_update(resource_group_name, managed_instance_name, encryption_protector_name, subscription_id, api_version, parameters)
        print("The response of ManagedInstanceEncryptionProtectorsApi->managed_instance_encryption_protectors_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedInstanceEncryptionProtectorsApi->managed_instance_encryption_protectors_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **encryption_protector_name** | **str**| The name of the encryption protector to be updated. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ManagedInstanceEncryptionProtector**](ManagedInstanceEncryptionProtector.md)| The requested encryption protector resource state. | 

### Return type

[**ManagedInstanceEncryptionProtector**](ManagedInstanceEncryptionProtector.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the encryption protector. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidKeyName - An invalid value was given for the server key name.   * 400 InvalidKeyType - The create server key type is not supported.   * 400 InvalidUpsertKeyType - Service Managed type keys are managed by Azure SQL. This key type does not support create or update by the user.   * 400 InvalidKeyUpsertRequest - The create server key request does not exist or has no properties object.   * 400 InvalidEncryptionProtectorName - The encryption protector key name is not supported.   * 400 SecurityAzureKeyVaultGeoChainError - Creating secondary of secondary (a process known as chaining) is not supported when enabling Transparent Data Encryption using Azure Key Vault (BYOK).   * 400 AzureKeyVaultInvalidExpirationDate - The operation could not be completed because the Azure Key Vault key expiration date is invalid.   * 400 SecurityAzureKeyVaultUrlNullOrEmpty - The operation could not be completed because the Azure Key Vault Uri is null or empty.   * 400 AzureKeyVaultInvalidUri - An invalid response from Azure Key Vault. Please use a valid Azure Key Vault URI.   * 400 SecurityAzureKeyVaultInvalidKeyName - The operation could not be completed because of an invalid Server Key name.   * 400 AzureKeyVaultMalformedVaultUri - The provided Key Vault uri is not valid.   * 400 SecurityAdalPrincipalCertExpiredError - The operation could not be completed because the Azure Key Vault principal certificate has expired.   * 400 SecurityInvalidAzureKeyVaultRecoveryLevel - The provided Key Vault uri is not valid.   * 400 KeyMaterialNotFoundOnRemoteServer - Remote server does not have access to key material used as a TDE protector.   * 400 AzureKeyVaultMismatchError - Unexpected Key Vault region found in the http response.   * 400 AzureKeyVaultRsaKeyNotSupported - The provided key vault uses unsupported RSA Key Size or Key Type. The supported RSA key size is 2048 and Key Type is RSA.   * 401 AzureKeyVaultKeyDisabled - The operation could not be completed on the server because the Azure Key Vault key is disabled.   * 401 AzureKeyVaultNoServerIdentity - The server identity is not correctly configured.   * 401 AzureKeyVaultMissingPermissions - The server is missing required permissions on the Azure Key Vault.    * 401 AdalGenericError - The operation could not be completed because an Azure Active Directory error was encountered.   * 401 AdalServicePrincipalNotFound - The operation could not be completed because an Azure Active Directory library Service Principal not found error was encountered.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found.   * 404 ServerKeyNotFound - The requested server key was not found on the current subscription.   * 409 ServerKeyNameAlreadyExists - The server key already exists on the server.   * 409 ServerKeyUriAlreadyExists - The server key URI already exists on the server.   * 409 ServerKeyDoesNotExists - The server key does not exist.   * 409 AzureKeyVaultKeyNameNotFound - The operation could not be completed because the Azure Key Vault Key name does not exist.   * 409 AzureKeyVaultKeyInUse - The key is currently being used by the server.   * 503 AzureKeyVaultConnectionFailed - The operation could not be completed on the server because attempts to connect to Azure Key Vault have failed   * 503 AzureKeyVaultGenericConnectionError - The operation could not be completed because an error was encountered when attempting to retrieve Key Vault information . |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_instance_encryption_protectors_get**
> ManagedInstanceEncryptionProtector managed_instance_encryption_protectors_get(resource_group_name, managed_instance_name, encryption_protector_name, subscription_id, api_version)



Gets a managed instance encryption protector.

### Example


```python
import openapi_client
from openapi_client.models.managed_instance_encryption_protector import ManagedInstanceEncryptionProtector
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
    api_instance = openapi_client.ManagedInstanceEncryptionProtectorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    encryption_protector_name = 'encryption_protector_name_example' # str | The name of the encryption protector to be retrieved.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_instance_encryption_protectors_get(resource_group_name, managed_instance_name, encryption_protector_name, subscription_id, api_version)
        print("The response of ManagedInstanceEncryptionProtectorsApi->managed_instance_encryption_protectors_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedInstanceEncryptionProtectorsApi->managed_instance_encryption_protectors_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **encryption_protector_name** | **str**| The name of the encryption protector to be retrieved. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedInstanceEncryptionProtector**](ManagedInstanceEncryptionProtector.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified managed instance encryption protector. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidKeyName - An invalid value was given for the server key name.   * 400 InvalidKeyType - The create server key type is not supported.   * 400 InvalidUpsertKeyType - Service Managed type keys are managed by Azure SQL. This key type does not support create or update by the user.   * 400 InvalidKeyUpsertRequest - The create server key request does not exist or has no properties object.   * 400 InvalidEncryptionProtectorName - The encryption protector key name is not supported.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_instance_encryption_protectors_list_by_instance**
> ManagedInstanceEncryptionProtectorListResult managed_instance_encryption_protectors_list_by_instance(resource_group_name, managed_instance_name, subscription_id, api_version)



Gets a list of managed instance encryption protectors

### Example


```python
import openapi_client
from openapi_client.models.managed_instance_encryption_protector_list_result import ManagedInstanceEncryptionProtectorListResult
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
    api_instance = openapi_client.ManagedInstanceEncryptionProtectorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_instance_encryption_protectors_list_by_instance(resource_group_name, managed_instance_name, subscription_id, api_version)
        print("The response of ManagedInstanceEncryptionProtectorsApi->managed_instance_encryption_protectors_list_by_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedInstanceEncryptionProtectorsApi->managed_instance_encryption_protectors_list_by_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedInstanceEncryptionProtectorListResult**](ManagedInstanceEncryptionProtectorListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of managed instance encryption protector. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidKeyName - An invalid value was given for the server key name.   * 400 InvalidKeyType - The create server key type is not supported.   * 400 InvalidUpsertKeyType - Service Managed type keys are managed by Azure SQL. This key type does not support create or update by the user.   * 400 InvalidKeyUpsertRequest - The create server key request does not exist or has no properties object.   * 400 InvalidEncryptionProtectorName - The encryption protector key name is not supported.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_instance_encryption_protectors_revalidate**
> managed_instance_encryption_protectors_revalidate(resource_group_name, managed_instance_name, encryption_protector_name, subscription_id, api_version)



Revalidates an existing encryption protector.

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
    api_instance = openapi_client.ManagedInstanceEncryptionProtectorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    encryption_protector_name = 'encryption_protector_name_example' # str | The name of the encryption protector to be updated.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.managed_instance_encryption_protectors_revalidate(resource_group_name, managed_instance_name, encryption_protector_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ManagedInstanceEncryptionProtectorsApi->managed_instance_encryption_protectors_revalidate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **encryption_protector_name** | **str**| The name of the encryption protector to be updated. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

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
**200** | Successfully revalidated the encryption protector. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidKeyName - An invalid value was given for the server key name.   * 400 InvalidKeyType - The create server key type is not supported.   * 400 InvalidUpsertKeyType - Service Managed type keys are managed by Azure SQL. This key type does not support create or update by the user.   * 400 InvalidKeyUpsertRequest - The create server key request does not exist or has no properties object.   * 400 InvalidEncryptionProtectorName - The encryption protector key name is not supported.   * 400 SecurityAzureKeyVaultGeoChainError - Creating secondary of secondary (a process known as chaining) is not supported when enabling Transparent Data Encryption using Azure Key Vault (BYOK).   * 400 AzureKeyVaultInvalidExpirationDate - The operation could not be completed because the Azure Key Vault key expiration date is invalid.   * 400 SecurityAzureKeyVaultUrlNullOrEmpty - The operation could not be completed because the Azure Key Vault Uri is null or empty.   * 400 AzureKeyVaultInvalidUri - An invalid response from Azure Key Vault. Please use a valid Azure Key Vault URI.   * 400 SecurityAzureKeyVaultInvalidKeyName - The operation could not be completed because of an invalid Server Key name.   * 400 AzureKeyVaultMalformedVaultUri - The provided Key Vault uri is not valid.   * 400 SecurityAdalPrincipalCertExpiredError - The operation could not be completed because the Azure Key Vault principal certificate has expired.   * 400 SecurityInvalidAzureKeyVaultRecoveryLevel - The provided Key Vault uri is not valid.   * 400 KeyMaterialNotFoundOnRemoteServer - Remote server does not have access to key material used as a TDE protector.   * 400 AzureKeyVaultMismatchError - Unexpected Key Vault region found in the http response.   * 400 AzureKeyVaultRsaKeyNotSupported - The provided key vault uses unsupported RSA Key Size or Key Type. The supported RSA key size is 2048 and Key Type is RSA.   * 401 AzureKeyVaultKeyDisabled - The operation could not be completed on the server because the Azure Key Vault key is disabled.   * 401 AzureKeyVaultNoServerIdentity - The server identity is not correctly configured.   * 401 AzureKeyVaultMissingPermissions - The server is missing required permissions on the Azure Key Vault.    * 401 AdalGenericError - The operation could not be completed because an Azure Active Directory error was encountered.   * 401 AdalServicePrincipalNotFound - The operation could not be completed because an Azure Active Directory library Service Principal not found error was encountered.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found.   * 404 ServerKeyNotFound - The requested server key was not found on the current subscription.   * 409 ServerKeyNameAlreadyExists - The server key already exists on the server.   * 409 ServerKeyUriAlreadyExists - The server key URI already exists on the server.   * 409 ServerKeyDoesNotExists - The server key does not exist.   * 409 AzureKeyVaultKeyNameNotFound - The operation could not be completed because the Azure Key Vault Key name does not exist.   * 409 AzureKeyVaultKeyInUse - The key is currently being used by the server.   * 503 AzureKeyVaultConnectionFailed - The operation could not be completed on the server because attempts to connect to Azure Key Vault have failed   * 503 AzureKeyVaultGenericConnectionError - The operation could not be completed because an error was encountered when attempting to retrieve Key Vault information . |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

