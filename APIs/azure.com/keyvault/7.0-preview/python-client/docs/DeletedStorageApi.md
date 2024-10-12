# openapi_client.DeletedStorageApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_deleted_sas_definition**](DeletedStorageApi.md#get_deleted_sas_definition) | **GET** /deletedstorage/{storage-account-name}/sas/{sas-definition-name} | Gets the specified deleted sas definition.
[**get_deleted_sas_definitions**](DeletedStorageApi.md#get_deleted_sas_definitions) | **GET** /deletedstorage/{storage-account-name}/sas | Lists deleted SAS definitions for the specified vault and storage account.
[**get_deleted_storage_account**](DeletedStorageApi.md#get_deleted_storage_account) | **GET** /deletedstorage/{storage-account-name} | Gets the specified deleted storage account.
[**get_deleted_storage_accounts**](DeletedStorageApi.md#get_deleted_storage_accounts) | **GET** /deletedstorage | Lists deleted storage accounts for the specified vault.
[**purge_deleted_storage_account**](DeletedStorageApi.md#purge_deleted_storage_account) | **DELETE** /deletedstorage/{storage-account-name} | Permanently deletes the specified storage account.
[**recover_deleted_sas_definition**](DeletedStorageApi.md#recover_deleted_sas_definition) | **POST** /deletedstorage/{storage-account-name}/sas/{sas-definition-name}/recover | Recovers the deleted SAS definition.
[**recover_deleted_storage_account**](DeletedStorageApi.md#recover_deleted_storage_account) | **POST** /deletedstorage/{storage-account-name}/recover | Recovers the deleted storage account.


# **get_deleted_sas_definition**
> DeletedSasDefinitionBundle get_deleted_sas_definition(storage_account_name, sas_definition_name, api_version)

Gets the specified deleted sas definition.

The Get Deleted SAS Definition operation returns the specified deleted SAS definition along with its attributes. This operation requires the storage/getsas permission.

### Example


```python
import openapi_client
from openapi_client.models.deleted_sas_definition_bundle import DeletedSasDefinitionBundle
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedStorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    sas_definition_name = 'sas_definition_name_example' # str | The name of the SAS definition.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Gets the specified deleted sas definition.
        api_response = api_instance.get_deleted_sas_definition(storage_account_name, sas_definition_name, api_version)
        print("The response of DeletedStorageApi->get_deleted_sas_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedStorageApi->get_deleted_sas_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_account_name** | **str**| The name of the storage account. | 
 **sas_definition_name** | **str**| The name of the SAS definition. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**DeletedSasDefinitionBundle**](DeletedSasDefinitionBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted SAS definition and information on when the it will be purged, and how to recover the deleted SAS definition. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_deleted_sas_definitions**
> DeletedSasDefinitionListResult get_deleted_sas_definitions(storage_account_name, api_version, maxresults=maxresults)

Lists deleted SAS definitions for the specified vault and storage account.

The Get Deleted Sas Definitions operation returns the SAS definitions that have been deleted for a vault enabled for soft-delete. This operation requires the storage/listsas permission.

### Example


```python
import openapi_client
from openapi_client.models.deleted_sas_definition_list_result import DeletedSasDefinitionListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedStorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified the service will return up to 25 results. (optional)

    try:
        # Lists deleted SAS definitions for the specified vault and storage account.
        api_response = api_instance.get_deleted_sas_definitions(storage_account_name, api_version, maxresults=maxresults)
        print("The response of DeletedStorageApi->get_deleted_sas_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedStorageApi->get_deleted_sas_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_account_name** | **str**| The name of the storage account. | 
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified the service will return up to 25 results. | [optional] 

### Return type

[**DeletedSasDefinitionListResult**](DeletedSasDefinitionListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of deleted SAS definitions for the storage account, along with a link to the next page of deleted SAS definitions. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_deleted_storage_account**
> DeletedStorageBundle get_deleted_storage_account(storage_account_name, api_version)

Gets the specified deleted storage account.

The Get Deleted Storage Account operation returns the specified deleted storage account along with its attributes. This operation requires the storage/get permission.

### Example


```python
import openapi_client
from openapi_client.models.deleted_storage_bundle import DeletedStorageBundle
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedStorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Gets the specified deleted storage account.
        api_response = api_instance.get_deleted_storage_account(storage_account_name, api_version)
        print("The response of DeletedStorageApi->get_deleted_storage_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedStorageApi->get_deleted_storage_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_account_name** | **str**| The name of the storage account. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**DeletedStorageBundle**](DeletedStorageBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted storage account and information on when it will be purged, and how to recover the deleted storage account. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_deleted_storage_accounts**
> DeletedStorageListResult get_deleted_storage_accounts(api_version, maxresults=maxresults)

Lists deleted storage accounts for the specified vault.

The Get Deleted Storage Accounts operation returns the storage accounts that have been deleted for a vault enabled for soft-delete. This operation requires the storage/list permission.

### Example


```python
import openapi_client
from openapi_client.models.deleted_storage_list_result import DeletedStorageListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedStorageApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified the service will return up to 25 results. (optional)

    try:
        # Lists deleted storage accounts for the specified vault.
        api_response = api_instance.get_deleted_storage_accounts(api_version, maxresults=maxresults)
        print("The response of DeletedStorageApi->get_deleted_storage_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedStorageApi->get_deleted_storage_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified the service will return up to 25 results. | [optional] 

### Return type

[**DeletedStorageListResult**](DeletedStorageListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of deleted storage accounts in the vault, along with a link to the next page of deleted storage accounts. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purge_deleted_storage_account**
> purge_deleted_storage_account(storage_account_name, api_version)

Permanently deletes the specified storage account.

The purge deleted storage account operation removes the secret permanently, without the possibility of recovery. This operation can only be performed on a soft-delete enabled vault. This operation requires the storage/purge permission.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedStorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Permanently deletes the specified storage account.
        api_instance.purge_deleted_storage_account(storage_account_name, api_version)
    except Exception as e:
        print("Exception when calling DeletedStorageApi->purge_deleted_storage_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_account_name** | **str**| The name of the storage account. | 
 **api_version** | **str**| Client API version. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content signaling that the storage account was purged forever. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recover_deleted_sas_definition**
> SasDefinitionBundle recover_deleted_sas_definition(storage_account_name, sas_definition_name, api_version)

Recovers the deleted SAS definition.

Recovers the deleted SAS definition for the specified storage account. This operation can only be performed on a soft-delete enabled vault. This operation requires the storage/recover permission.

### Example


```python
import openapi_client
from openapi_client.models.sas_definition_bundle import SasDefinitionBundle
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedStorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    sas_definition_name = 'sas_definition_name_example' # str | The name of the SAS definition.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Recovers the deleted SAS definition.
        api_response = api_instance.recover_deleted_sas_definition(storage_account_name, sas_definition_name, api_version)
        print("The response of DeletedStorageApi->recover_deleted_sas_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedStorageApi->recover_deleted_sas_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_account_name** | **str**| The name of the storage account. | 
 **sas_definition_name** | **str**| The name of the SAS definition. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**SasDefinitionBundle**](SasDefinitionBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A SAS definition bundle of the original SAS definition and its attributes. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recover_deleted_storage_account**
> StorageBundle recover_deleted_storage_account(storage_account_name, api_version)

Recovers the deleted storage account.

Recovers the deleted storage account in the specified vault. This operation can only be performed on a soft-delete enabled vault. This operation requires the storage/recover permission.

### Example


```python
import openapi_client
from openapi_client.models.storage_bundle import StorageBundle
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedStorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Recovers the deleted storage account.
        api_response = api_instance.recover_deleted_storage_account(storage_account_name, api_version)
        print("The response of DeletedStorageApi->recover_deleted_storage_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedStorageApi->recover_deleted_storage_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_account_name** | **str**| The name of the storage account. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**StorageBundle**](StorageBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A storage bundle of the original storage account and its attributes. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

