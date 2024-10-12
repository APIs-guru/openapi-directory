# openapi_client.ProtectionIntentApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**protection_intent_create_or_update**](ProtectionIntentApi.md#protection_intent_create_or_update) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/backupProtectionIntent/{intentObjectName} | 
[**protection_intent_delete**](ProtectionIntentApi.md#protection_intent_delete) | **DELETE** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/backupProtectionIntent/{intentObjectName} | 
[**protection_intent_get**](ProtectionIntentApi.md#protection_intent_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/backupProtectionIntent/{intentObjectName} | 
[**protection_intent_validate**](ProtectionIntentApi.md#protection_intent_validate) | **POST** /Subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{azureRegion}/backupPreValidateProtection | It will validate followings  1. Vault capacity  2. VM is already protected  3. Any VM related configuration passed in properties.


# **protection_intent_create_or_update**
> ProtectionIntentResource protection_intent_create_or_update(api_version, vault_name, resource_group_name, subscription_id, fabric_name, intent_object_name, parameters)



Create Intent for Enabling backup of an item. This is a synchronous operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protection_intent_resource import ProtectionIntentResource
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
    api_instance = openapi_client.ProtectionIntentApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated with the backup item.
    intent_object_name = 'intent_object_name_example' # str | Intent object name.
    parameters = openapi_client.ProtectionIntentResource() # ProtectionIntentResource | resource backed up item

    try:
        api_response = api_instance.protection_intent_create_or_update(api_version, vault_name, resource_group_name, subscription_id, fabric_name, intent_object_name, parameters)
        print("The response of ProtectionIntentApi->protection_intent_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProtectionIntentApi->protection_intent_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated with the backup item. | 
 **intent_object_name** | **str**| Intent object name. | 
 **parameters** | [**ProtectionIntentResource**](ProtectionIntentResource.md)| resource backed up item | 

### Return type

[**ProtectionIntentResource**](ProtectionIntentResource.md)

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

# **protection_intent_delete**
> protection_intent_delete(api_version, vault_name, resource_group_name, subscription_id, fabric_name, intent_object_name)



Used to remove intent from an item

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
    api_instance = openapi_client.ProtectionIntentApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated with the intent.
    intent_object_name = 'intent_object_name_example' # str | Intent to be deleted.

    try:
        api_instance.protection_intent_delete(api_version, vault_name, resource_group_name, subscription_id, fabric_name, intent_object_name)
    except Exception as e:
        print("Exception when calling ProtectionIntentApi->protection_intent_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated with the intent. | 
 **intent_object_name** | **str**| Intent to be deleted. | 

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
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **protection_intent_get**
> ProtectionIntentResource protection_intent_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, intent_object_name)



Provides the details of the protection intent up item. This is an asynchronous operation. To know the status of the operation,  call the GetItemOperationResult API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protection_intent_resource import ProtectionIntentResource
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
    api_instance = openapi_client.ProtectionIntentApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated with the backed up item.
    intent_object_name = 'intent_object_name_example' # str | Backed up item name whose details are to be fetched.

    try:
        api_response = api_instance.protection_intent_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, intent_object_name)
        print("The response of ProtectionIntentApi->protection_intent_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProtectionIntentApi->protection_intent_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated with the backed up item. | 
 **intent_object_name** | **str**| Backed up item name whose details are to be fetched. | 

### Return type

[**ProtectionIntentResource**](ProtectionIntentResource.md)

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

# **protection_intent_validate**
> PreValidateEnableBackupResponse protection_intent_validate(api_version, azure_region, subscription_id, parameters)

It will validate followings  1. Vault capacity  2. VM is already protected  3. Any VM related configuration passed in properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pre_validate_enable_backup_request import PreValidateEnableBackupRequest
from openapi_client.models.pre_validate_enable_backup_response import PreValidateEnableBackupResponse
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
    api_instance = openapi_client.ProtectionIntentApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    azure_region = 'azure_region_example' # str | Azure region to hit Api
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    parameters = openapi_client.PreValidateEnableBackupRequest() # PreValidateEnableBackupRequest | Enable backup validation request on Virtual Machine

    try:
        # It will validate followings  1. Vault capacity  2. VM is already protected  3. Any VM related configuration passed in properties.
        api_response = api_instance.protection_intent_validate(api_version, azure_region, subscription_id, parameters)
        print("The response of ProtectionIntentApi->protection_intent_validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProtectionIntentApi->protection_intent_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **azure_region** | **str**| Azure region to hit Api | 
 **subscription_id** | **str**| The subscription Id. | 
 **parameters** | [**PreValidateEnableBackupRequest**](PreValidateEnableBackupRequest.md)| Enable backup validation request on Virtual Machine | 

### Return type

[**PreValidateEnableBackupResponse**](PreValidateEnableBackupResponse.md)

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

