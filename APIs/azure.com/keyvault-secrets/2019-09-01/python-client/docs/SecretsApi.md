# openapi_client.SecretsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secrets_create_or_update**](SecretsApi.md#secrets_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName} | 
[**secrets_get**](SecretsApi.md#secrets_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName} | 
[**secrets_list**](SecretsApi.md#secrets_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets | 
[**secrets_update**](SecretsApi.md#secrets_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName} | 


# **secrets_create_or_update**
> Secret secrets_create_or_update(resource_group_name, vault_name, secret_name, api_version, subscription_id, parameters)



Create or update a secret in a key vault in the specified subscription.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.

### Example


```python
import openapi_client
from openapi_client.models.secret import Secret
from openapi_client.models.secret_create_or_update_parameters import SecretCreateOrUpdateParameters
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
    api_instance = openapi_client.SecretsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the vault belongs.
    vault_name = 'vault_name_example' # str | Name of the vault
    secret_name = 'secret_name_example' # str | Name of the secret
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.SecretCreateOrUpdateParameters() # SecretCreateOrUpdateParameters | Parameters to create or update the secret

    try:
        api_response = api_instance.secrets_create_or_update(resource_group_name, vault_name, secret_name, api_version, subscription_id, parameters)
        print("The response of SecretsApi->secrets_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->secrets_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the vault belongs. | 
 **vault_name** | **str**| Name of the vault | 
 **secret_name** | **str**| Name of the secret | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**SecretCreateOrUpdateParameters**](SecretCreateOrUpdateParameters.md)| Parameters to create or update the secret | 

### Return type

[**Secret**](Secret.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created or updated secret |  -  |
**201** | Created or updated vault |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secrets_get**
> Secret secrets_get(resource_group_name, vault_name, secret_name, api_version, subscription_id)



Gets the specified secret.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.

### Example


```python
import openapi_client
from openapi_client.models.secret import Secret
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
    api_instance = openapi_client.SecretsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the vault belongs.
    vault_name = 'vault_name_example' # str | The name of the vault.
    secret_name = 'secret_name_example' # str | The name of the secret.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.secrets_get(resource_group_name, vault_name, secret_name, api_version, subscription_id)
        print("The response of SecretsApi->secrets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->secrets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the vault belongs. | 
 **vault_name** | **str**| The name of the vault. | 
 **secret_name** | **str**| The name of the secret. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**Secret**](Secret.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieved secret |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secrets_list**
> SecretListResult secrets_list(resource_group_name, vault_name, api_version, subscription_id, top=top)



The List operation gets information about the secrets in a vault.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.

### Example


```python
import openapi_client
from openapi_client.models.secret_list_result import SecretListResult
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
    api_instance = openapi_client.SecretsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the vault belongs.
    vault_name = 'vault_name_example' # str | The name of the vault.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    top = 56 # int | Maximum number of results to return. (optional)

    try:
        api_response = api_instance.secrets_list(resource_group_name, vault_name, api_version, subscription_id, top=top)
        print("The response of SecretsApi->secrets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->secrets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the vault belongs. | 
 **vault_name** | **str**| The name of the vault. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **top** | **int**| Maximum number of results to return. | [optional] 

### Return type

[**SecretListResult**](SecretListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get information about secrets in the specified vault. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secrets_update**
> Secret secrets_update(resource_group_name, vault_name, secret_name, api_version, subscription_id, parameters)



Update a secret in the specified subscription.  NOTE: This API is intended for internal use in ARM deployments.  Users should use the data-plane REST service for interaction with vault secrets.

### Example


```python
import openapi_client
from openapi_client.models.secret import Secret
from openapi_client.models.secret_patch_parameters import SecretPatchParameters
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
    api_instance = openapi_client.SecretsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the vault belongs.
    vault_name = 'vault_name_example' # str | Name of the vault
    secret_name = 'secret_name_example' # str | Name of the secret
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.SecretPatchParameters() # SecretPatchParameters | Parameters to patch the secret

    try:
        api_response = api_instance.secrets_update(resource_group_name, vault_name, secret_name, api_version, subscription_id, parameters)
        print("The response of SecretsApi->secrets_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->secrets_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the vault belongs. | 
 **vault_name** | **str**| Name of the vault | 
 **secret_name** | **str**| Name of the secret | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**SecretPatchParameters**](SecretPatchParameters.md)| Parameters to patch the secret | 

### Return type

[**Secret**](Secret.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Patched secret |  -  |
**201** | Patched secret |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

