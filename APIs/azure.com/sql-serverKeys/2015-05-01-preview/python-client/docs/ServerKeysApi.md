# openapi_client.ServerKeysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**server_keys_create_or_update**](ServerKeysApi.md#server_keys_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/keys/{keyName} | 
[**server_keys_delete**](ServerKeysApi.md#server_keys_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/keys/{keyName} | 
[**server_keys_get**](ServerKeysApi.md#server_keys_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/keys/{keyName} | 
[**server_keys_list_by_server**](ServerKeysApi.md#server_keys_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/keys | 


# **server_keys_create_or_update**
> ServerKey server_keys_create_or_update(resource_group_name, server_name, key_name, subscription_id, api_version, parameters)



Creates or updates a server key.

### Example


```python
import openapi_client
from openapi_client.models.server_key import ServerKey
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
    api_instance = openapi_client.ServerKeysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    key_name = 'key_name_example' # str | The name of the server key to be operated on (updated or created). The key name is required to be in the format of 'vault_key_version'. For example, if the keyId is https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901, then the server key name should be formatted as: YourVaultName_YourKeyName_01234567890123456789012345678901
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ServerKey() # ServerKey | The requested server key resource state.

    try:
        api_response = api_instance.server_keys_create_or_update(resource_group_name, server_name, key_name, subscription_id, api_version, parameters)
        print("The response of ServerKeysApi->server_keys_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerKeysApi->server_keys_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **key_name** | **str**| The name of the server key to be operated on (updated or created). The key name is required to be in the format of &#39;vault_key_version&#39;. For example, if the keyId is https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901, then the server key name should be formatted as: YourVaultName_YourKeyName_01234567890123456789012345678901 | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ServerKey**](ServerKey.md)| The requested server key resource state. | 

### Return type

[**ServerKey**](ServerKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the server key. |  -  |
**201** | Successfully created the server key. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidKeyName - An invalid value was given for the server key name.   * 400 InvalidKeyType - The create server key type is not supported.   * 400 InvalidKeyUpsertRequest - The create server key request does not exist or has no properties object.   * 400 AzureKeyVaultInvalidExpirationDate - The operation could not be completed because the Azure Key Vault key expiration date is invalid.   * 400 AzureKeyVaultInvalidUri - An invalid response from Azure Key Vault. Please use a valid Azure Key Vault URI.   * 400 AzureKeyVaultMalformedVaultUri - The provided Key Vault uri is not valid.   * 400 AzureKeyVaultInvalidExpirationDate - The operation could not be completed because the Azure Key Vault key expiration date is invalid.   * 400 AzureKeyVaultInvalidUri - An invalid response from Azure Key Vault. Please use a valid Azure Key Vault URI.   * 400 AzureKeyVaultMalformedVaultUri - The provided Key Vault uri is not valid.   * 401 AzureKeyVaultKeyDisabled - The operation could not be completed on the server because the Azure Key Vault key is disabled.   * 401 AzureKeyVaultNoServerIdentity - The server identity is not correctly configured on server. Please contact support.   * 401 AzureKeyVaultMissingPermissions - The server is missing required permissions on the Azure Key Vault.    * 401 AdalGenericError - The operation could not be completed because an Azure Active Directory error was encountered.   * 401 AdalServicePrincipalNotFound - The operation could not be completed because an Azure Active Directory library Service Principal not found error was encountered.   * 401 AzureKeyVaultKeyDisabled - The operation could not be completed on the server because the Azure Key Vault key is disabled.   * 401 AzureKeyVaultNoServerIdentity - The server identity is not correctly configured on server. Please contact support.   * 401 AzureKeyVaultMissingPermissions - The server is missing required permissions on the Azure Key Vault.    * 401 AdalGenericError - The operation could not be completed because an Azure Active Directory error was encountered.   * 401 AdalServicePrincipalNotFound - The operation could not be completed because an Azure Active Directory library Service Principal not found error was encountered.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found.   * 409 ServerKeyUriAlreadyExists - The server key URI already exists on the server.   * 409 ServerKeyDoesNotExists - The server key does not exist.   * 409 AzureKeyVaultKeyNameNotFound - The operation could not be completed because the Azure Key Vault Key name does not exist.   * 409 AzureKeyVaultKeyInUse - The key is currently being used by the server.   * 409 ServerKeyNameAlreadyExists - The server key already exists on the server.   * 409 ServerKeyUriAlreadyExists - The server key URI already exists on the server.   * 409 ServerKeyDoesNotExists - The server key does not exist.   * 409 AzureKeyVaultKeyNameNotFound - The operation could not be completed because the Azure Key Vault Key name does not exist.   * 409 AzureKeyVaultKeyInUse - The key is currently being used by the server.   * 409 ServerKeyNameAlreadyExists - The server key already exists on the server.   * 503 AzureKeyVaultConnectionFailed - The operation could not be completed on the server because attempts to connect to Azure Key Vault have failed   * 503 AzureKeyVaultGenericConnectionError - The operation could not be completed because an error was encountered when attempting to retrieve Key Vault information .   * 503 AzureKeyVaultConnectionFailed - The operation could not be completed on the server because attempts to connect to Azure Key Vault have failed   * 503 AzureKeyVaultGenericConnectionError - The operation could not be completed because an error was encountered when attempting to retrieve Key Vault information . |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_keys_delete**
> server_keys_delete(resource_group_name, server_name, key_name, subscription_id, api_version)



Deletes the server key with the given name.

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
    api_instance = openapi_client.ServerKeysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    key_name = 'key_name_example' # str | The name of the server key to be deleted.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.server_keys_delete(resource_group_name, server_name, key_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ServerKeysApi->server_keys_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **key_name** | **str**| The name of the server key to be deleted. | 
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
**200** | Successfully deleted the server key. |  -  |
**202** | Accepted |  -  |
**204** | The specified server key does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidKeyName - An invalid value was given for the server key name.   * 400 InvalidKeyType - The create server key type is not supported.   * 400 InvalidKeyUpsertRequest - The create server key request does not exist or has no properties object.   * 400 AzureKeyVaultInvalidExpirationDate - The operation could not be completed because the Azure Key Vault key expiration date is invalid.   * 400 AzureKeyVaultInvalidUri - An invalid response from Azure Key Vault. Please use a valid Azure Key Vault URI.   * 400 AzureKeyVaultMalformedVaultUri - The provided Key Vault uri is not valid.   * 401 AzureKeyVaultKeyDisabled - The operation could not be completed on the server because the Azure Key Vault key is disabled.   * 401 AzureKeyVaultNoServerIdentity - The server identity is not correctly configured on server. Please contact support.   * 401 AzureKeyVaultMissingPermissions - The server is missing required permissions on the Azure Key Vault.    * 401 AdalGenericError - The operation could not be completed because an Azure Active Directory error was encountered.   * 401 AdalServicePrincipalNotFound - The operation could not be completed because an Azure Active Directory library Service Principal not found error was encountered.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found.   * 409 ServerKeyUriAlreadyExists - The server key URI already exists on the server.   * 409 ServerKeyDoesNotExists - The server key does not exist.   * 409 AzureKeyVaultKeyNameNotFound - The operation could not be completed because the Azure Key Vault Key name does not exist.   * 409 AzureKeyVaultKeyInUse - The key is currently being used by the server.   * 409 ServerKeyNameAlreadyExists - The server key already exists on the server.   * 503 AzureKeyVaultConnectionFailed - The operation could not be completed on the server because attempts to connect to Azure Key Vault have failed   * 503 AzureKeyVaultGenericConnectionError - The operation could not be completed because an error was encountered when attempting to retrieve Key Vault information . |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_keys_get**
> ServerKey server_keys_get(resource_group_name, server_name, key_name, subscription_id, api_version)



Gets a server key.

### Example


```python
import openapi_client
from openapi_client.models.server_key import ServerKey
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
    api_instance = openapi_client.ServerKeysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    key_name = 'key_name_example' # str | The name of the server key to be retrieved.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.server_keys_get(resource_group_name, server_name, key_name, subscription_id, api_version)
        print("The response of ServerKeysApi->server_keys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerKeysApi->server_keys_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **key_name** | **str**| The name of the server key to be retrieved. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ServerKey**](ServerKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified server key. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidKeyName - An invalid value was given for the server key name.   * 400 InvalidKeyType - The create server key type is not supported.   * 400 InvalidKeyUpsertRequest - The create server key request does not exist or has no properties object.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_keys_list_by_server**
> ServerKeyListResult server_keys_list_by_server(resource_group_name, server_name, subscription_id, api_version)



Gets a list of server keys.

### Example


```python
import openapi_client
from openapi_client.models.server_key_list_result import ServerKeyListResult
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
    api_instance = openapi_client.ServerKeysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.server_keys_list_by_server(resource_group_name, server_name, subscription_id, api_version)
        print("The response of ServerKeysApi->server_keys_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerKeysApi->server_keys_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ServerKeyListResult**](ServerKeyListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of server keys. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidKeyName - An invalid value was given for the server key name.   * 400 InvalidKeyType - The create server key type is not supported.   * 400 InvalidKeyUpsertRequest - The create server key request does not exist or has no properties object.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

