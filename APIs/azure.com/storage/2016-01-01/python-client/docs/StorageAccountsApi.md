# openapi_client.StorageAccountsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_accounts_check_name_availability**](StorageAccountsApi.md#storage_accounts_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Storage/checkNameAvailability | 
[**storage_accounts_create**](StorageAccountsApi.md#storage_accounts_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName} | 
[**storage_accounts_delete**](StorageAccountsApi.md#storage_accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName} | 
[**storage_accounts_get_properties**](StorageAccountsApi.md#storage_accounts_get_properties) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName} | 
[**storage_accounts_list**](StorageAccountsApi.md#storage_accounts_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Storage/storageAccounts | 
[**storage_accounts_list_by_resource_group**](StorageAccountsApi.md#storage_accounts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts | 
[**storage_accounts_list_keys**](StorageAccountsApi.md#storage_accounts_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/listKeys | 
[**storage_accounts_regenerate_key**](StorageAccountsApi.md#storage_accounts_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/regenerateKey | 
[**storage_accounts_update**](StorageAccountsApi.md#storage_accounts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName} | 


# **storage_accounts_check_name_availability**
> CheckNameAvailabilityResult storage_accounts_check_name_availability(api_version, subscription_id, account_name)



Checks that the storage account name is valid and is not already in use.

### Example


```python
import openapi_client
from openapi_client.models.check_name_availability_result import CheckNameAvailabilityResult
from openapi_client.models.storage_account_check_name_availability_parameters import StorageAccountCheckNameAvailabilityParameters
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
    api_instance = openapi_client.StorageAccountsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    account_name = openapi_client.StorageAccountCheckNameAvailabilityParameters() # StorageAccountCheckNameAvailabilityParameters | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.

    try:
        api_response = api_instance.storage_accounts_check_name_availability(api_version, subscription_id, account_name)
        print("The response of StorageAccountsApi->storage_accounts_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **account_name** | [**StorageAccountCheckNameAvailabilityParameters**](StorageAccountCheckNameAvailabilityParameters.md)| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 

### Return type

[**CheckNameAvailabilityResult**](CheckNameAvailabilityResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Operation to check the storage account name availability was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_create**
> StorageAccount storage_accounts_create(resource_group_name, account_name, api_version, subscription_id, parameters)



Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.

### Example


```python
import openapi_client
from openapi_client.models.storage_account import StorageAccount
from openapi_client.models.storage_account_create_parameters import StorageAccountCreateParameters
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
    api_instance = openapi_client.StorageAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.StorageAccountCreateParameters() # StorageAccountCreateParameters | The parameters to provide for the created account.

    try:
        api_response = api_instance.storage_accounts_create(resource_group_name, account_name, api_version, subscription_id, parameters)
        print("The response of StorageAccountsApi->storage_accounts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**StorageAccountCreateParameters**](StorageAccountCreateParameters.md)| The parameters to provide for the created account. | 

### Return type

[**StorageAccount**](StorageAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- returned when the storage account was already created from a previous request with the same properties specified in the request body. |  -  |
**202** | Accepted -- Create or update request accepted; operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_delete**
> storage_accounts_delete(resource_group_name, account_name, api_version, subscription_id)



Deletes a storage account in Microsoft Azure.

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
    api_instance = openapi_client.StorageAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.storage_accounts_delete(resource_group_name, account_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | OK -- storage account deleted successfully. |  -  |
**204** | NoContent -- account does not exist in the subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_get_properties**
> StorageAccount storage_accounts_get_properties(resource_group_name, account_name, api_version, subscription_id)



Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys.

### Example


```python
import openapi_client
from openapi_client.models.storage_account import StorageAccount
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
    api_instance = openapi_client.StorageAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.storage_accounts_get_properties(resource_group_name, account_name, api_version, subscription_id)
        print("The response of StorageAccountsApi->storage_accounts_get_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_get_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.   | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**StorageAccount**](StorageAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- properties retrieved successfully for the storage account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_list**
> StorageAccountListResult storage_accounts_list(api_version, subscription_id)



Lists all the storage accounts available under the subscription. Note that storage keys are not returned; use the ListKeys operation for this.

### Example


```python
import openapi_client
from openapi_client.models.storage_account_list_result import StorageAccountListResult
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
    api_instance = openapi_client.StorageAccountsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.storage_accounts_list(api_version, subscription_id)
        print("The response of StorageAccountsApi->storage_accounts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**StorageAccountListResult**](StorageAccountListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- List of storage accounts was retrieved and returned successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_list_by_resource_group**
> StorageAccountListResult storage_accounts_list_by_resource_group(resource_group_name, api_version, subscription_id)



Lists all the storage accounts available under the given resource group. Note that storage keys are not returned; use the ListKeys operation for this.

### Example


```python
import openapi_client
from openapi_client.models.storage_account_list_result import StorageAccountListResult
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
    api_instance = openapi_client.StorageAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.storage_accounts_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of StorageAccountsApi->storage_accounts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**StorageAccountListResult**](StorageAccountListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- List of storage accounts in the given resource group retrieved and returned successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_list_keys**
> StorageAccountListKeysResult storage_accounts_list_keys(resource_group_name, account_name, api_version, subscription_id)



Lists the access keys for the specified storage account.

### Example


```python
import openapi_client
from openapi_client.models.storage_account_list_keys_result import StorageAccountListKeysResult
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
    api_instance = openapi_client.StorageAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.storage_accounts_list_keys(resource_group_name, account_name, api_version, subscription_id)
        print("The response of StorageAccountsApi->storage_accounts_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**StorageAccountListKeysResult**](StorageAccountListKeysResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- list of keys retrieved and returned successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_regenerate_key**
> StorageAccountListKeysResult storage_accounts_regenerate_key(resource_group_name, account_name, api_version, subscription_id, regenerate_key)



Regenerates one of the access keys for the specified storage account.

### Example


```python
import openapi_client
from openapi_client.models.storage_account_list_keys_result import StorageAccountListKeysResult
from openapi_client.models.storage_account_regenerate_key_parameters import StorageAccountRegenerateKeyParameters
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
    api_instance = openapi_client.StorageAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    regenerate_key = openapi_client.StorageAccountRegenerateKeyParameters() # StorageAccountRegenerateKeyParameters | Specifies name of the key which should be regenerated -- key1 or key2.

    try:
        api_response = api_instance.storage_accounts_regenerate_key(resource_group_name, account_name, api_version, subscription_id, regenerate_key)
        print("The response of StorageAccountsApi->storage_accounts_regenerate_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_regenerate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **regenerate_key** | [**StorageAccountRegenerateKeyParameters**](StorageAccountRegenerateKeyParameters.md)| Specifies name of the key which should be regenerated -- key1 or key2. | 

### Return type

[**StorageAccountListKeysResult**](StorageAccountListKeysResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- specified key regenerated successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_update**
> StorageAccount storage_accounts_update(resource_group_name, account_name, api_version, subscription_id, parameters)



The update operation can be used to update the SKU, encryption, access tier, or tags for a storage account. It can also be used to map the account to a custom domain. Only one custom domain is supported per storage account; the replacement/change of custom domain is not supported. In order to replace an old custom domain, the old value must be cleared/unregistered before a new value can be set. The update of multiple properties is supported. This call does not change the storage keys for the account. If you want to change the storage account keys, use the regenerate keys operation. The location and name of the storage account cannot be changed after creation.

### Example


```python
import openapi_client
from openapi_client.models.storage_account import StorageAccount
from openapi_client.models.storage_account_update_parameters import StorageAccountUpdateParameters
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
    api_instance = openapi_client.StorageAccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    account_name = 'account_name_example' # str | The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.StorageAccountUpdateParameters() # StorageAccountUpdateParameters | The parameters to provide for the updated account.

    try:
        api_response = api_instance.storage_accounts_update(resource_group_name, account_name, api_version, subscription_id, parameters)
        print("The response of StorageAccountsApi->storage_accounts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **account_name** | **str**| The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**StorageAccountUpdateParameters**](StorageAccountUpdateParameters.md)| The parameters to provide for the updated account. | 

### Return type

[**StorageAccount**](StorageAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- storage account properties updated successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

