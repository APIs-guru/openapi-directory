# openapi_client.StorageApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_storage_account**](StorageApi.md#backup_storage_account) | **POST** /storage/{storage-account-name}/backup | Backs up the specified storage account.
[**delete_sas_definition**](StorageApi.md#delete_sas_definition) | **DELETE** /storage/{storage-account-name}/sas/{sas-definition-name} | 
[**delete_storage_account**](StorageApi.md#delete_storage_account) | **DELETE** /storage/{storage-account-name} | 
[**get_sas_definition**](StorageApi.md#get_sas_definition) | **GET** /storage/{storage-account-name}/sas/{sas-definition-name} | 
[**get_sas_definitions**](StorageApi.md#get_sas_definitions) | **GET** /storage/{storage-account-name}/sas | 
[**get_storage_account**](StorageApi.md#get_storage_account) | **GET** /storage/{storage-account-name} | 
[**get_storage_accounts**](StorageApi.md#get_storage_accounts) | **GET** /storage | 
[**regenerate_storage_account_key**](StorageApi.md#regenerate_storage_account_key) | **POST** /storage/{storage-account-name}/regeneratekey | 
[**restore_storage_account**](StorageApi.md#restore_storage_account) | **POST** /storage/restore | Restores a backed up storage account to a vault.
[**set_sas_definition**](StorageApi.md#set_sas_definition) | **PUT** /storage/{storage-account-name}/sas/{sas-definition-name} | 
[**set_storage_account**](StorageApi.md#set_storage_account) | **PUT** /storage/{storage-account-name} | 
[**update_sas_definition**](StorageApi.md#update_sas_definition) | **PATCH** /storage/{storage-account-name}/sas/{sas-definition-name} | 
[**update_storage_account**](StorageApi.md#update_storage_account) | **PATCH** /storage/{storage-account-name} | 


# **backup_storage_account**
> BackupStorageResult backup_storage_account(storage_account_name, api_version)

Backs up the specified storage account.

Requests that a backup of the specified storage account be downloaded to the client. This operation requires the storage/backup permission.

### Example


```python
import openapi_client
from openapi_client.models.backup_storage_result import BackupStorageResult
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
    api_instance = openapi_client.StorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Backs up the specified storage account.
        api_response = api_instance.backup_storage_account(storage_account_name, api_version)
        print("The response of StorageApi->backup_storage_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageApi->backup_storage_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_account_name** | **str**| The name of the storage account. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**BackupStorageResult**](BackupStorageResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The backup blob containing the backed up storage account. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_sas_definition**
> DeletedSasDefinitionBundle delete_sas_definition(storage_account_name, sas_definition_name, api_version)



Deletes a SAS definition from a specified storage account. This operation requires the storage/deletesas permission.

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
    api_instance = openapi_client.StorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    sas_definition_name = 'sas_definition_name_example' # str | The name of the SAS definition.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.delete_sas_definition(storage_account_name, sas_definition_name, api_version)
        print("The response of StorageApi->delete_sas_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageApi->delete_sas_definition: %s\n" % e)
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
**200** | The deleted SAS definition and information on when the SAS definition will be deleted, and how to recover the deleted SAS definition. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_storage_account**
> DeletedStorageBundle delete_storage_account(storage_account_name, api_version)



Deletes a storage account. This operation requires the storage/delete permission.

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
    api_instance = openapi_client.StorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.delete_storage_account(storage_account_name, api_version)
        print("The response of StorageApi->delete_storage_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageApi->delete_storage_account: %s\n" % e)
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
**200** | The deleted storage account and information on when the storage account will be deleted, and how to recover the deleted storage account. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sas_definition**
> SasDefinitionBundle get_sas_definition(storage_account_name, sas_definition_name, api_version)



Gets information about a SAS definition for the specified storage account. This operation requires the storage/getsas permission.

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
    api_instance = openapi_client.StorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    sas_definition_name = 'sas_definition_name_example' # str | The name of the SAS definition.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.get_sas_definition(storage_account_name, sas_definition_name, api_version)
        print("The response of StorageApi->get_sas_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageApi->get_sas_definition: %s\n" % e)
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
**200** | The retrieved SAS definition. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sas_definitions**
> SasDefinitionListResult get_sas_definitions(storage_account_name, api_version, maxresults=maxresults)



List storage SAS definitions for the given storage account. This operation requires the storage/listsas permission.

### Example


```python
import openapi_client
from openapi_client.models.sas_definition_list_result import SasDefinitionListResult
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
    api_instance = openapi_client.StorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified the service will return up to 25 results. (optional)

    try:
        api_response = api_instance.get_sas_definitions(storage_account_name, api_version, maxresults=maxresults)
        print("The response of StorageApi->get_sas_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageApi->get_sas_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_account_name** | **str**| The name of the storage account. | 
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified the service will return up to 25 results. | [optional] 

### Return type

[**SasDefinitionListResult**](SasDefinitionListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of SAS definitions along with a link to the next page of SAS definitions. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_storage_account**
> StorageBundle get_storage_account(storage_account_name, api_version)



Gets information about a specified storage account. This operation requires the storage/get permission.

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
    api_instance = openapi_client.StorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.get_storage_account(storage_account_name, api_version)
        print("The response of StorageApi->get_storage_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageApi->get_storage_account: %s\n" % e)
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
**200** | The retrieved storage account. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_storage_accounts**
> StorageListResult get_storage_accounts(api_version, maxresults=maxresults)



List storage accounts managed by the specified key vault. This operation requires the storage/list permission.

### Example


```python
import openapi_client
from openapi_client.models.storage_list_result import StorageListResult
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
    api_instance = openapi_client.StorageApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified the service will return up to 25 results. (optional)

    try:
        api_response = api_instance.get_storage_accounts(api_version, maxresults=maxresults)
        print("The response of StorageApi->get_storage_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageApi->get_storage_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified the service will return up to 25 results. | [optional] 

### Return type

[**StorageListResult**](StorageListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of storage accounts along with a link to the next page of storage accounts. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **regenerate_storage_account_key**
> StorageBundle regenerate_storage_account_key(storage_account_name, api_version, parameters)



Regenerates the specified key value for the given storage account. This operation requires the storage/regeneratekey permission.

### Example


```python
import openapi_client
from openapi_client.models.storage_account_regenerte_key_parameters import StorageAccountRegenerteKeyParameters
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
    api_instance = openapi_client.StorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.StorageAccountRegenerteKeyParameters() # StorageAccountRegenerteKeyParameters | The parameters to regenerate storage account key.

    try:
        api_response = api_instance.regenerate_storage_account_key(storage_account_name, api_version, parameters)
        print("The response of StorageApi->regenerate_storage_account_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageApi->regenerate_storage_account_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_account_name** | **str**| The name of the storage account. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**StorageAccountRegenerteKeyParameters**](StorageAccountRegenerteKeyParameters.md)| The parameters to regenerate storage account key. | 

### Return type

[**StorageBundle**](StorageBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated storage account. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restore_storage_account**
> StorageBundle restore_storage_account(api_version, parameters)

Restores a backed up storage account to a vault.

Restores a backed up storage account to a vault. This operation requires the storage/restore permission.

### Example


```python
import openapi_client
from openapi_client.models.storage_bundle import StorageBundle
from openapi_client.models.storage_restore_parameters import StorageRestoreParameters
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
    api_instance = openapi_client.StorageApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.StorageRestoreParameters() # StorageRestoreParameters | The parameters to restore the storage account.

    try:
        # Restores a backed up storage account to a vault.
        api_response = api_instance.restore_storage_account(api_version, parameters)
        print("The response of StorageApi->restore_storage_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageApi->restore_storage_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **parameters** | [**StorageRestoreParameters**](StorageRestoreParameters.md)| The parameters to restore the storage account. | 

### Return type

[**StorageBundle**](StorageBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Restored storage account bundle in the vault. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_sas_definition**
> SasDefinitionBundle set_sas_definition(storage_account_name, sas_definition_name, api_version, parameters)



Creates or updates a new SAS definition for the specified storage account. This operation requires the storage/setsas permission.

### Example


```python
import openapi_client
from openapi_client.models.sas_definition_bundle import SasDefinitionBundle
from openapi_client.models.sas_definition_create_parameters import SasDefinitionCreateParameters
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
    api_instance = openapi_client.StorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    sas_definition_name = 'sas_definition_name_example' # str | The name of the SAS definition.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.SasDefinitionCreateParameters() # SasDefinitionCreateParameters | The parameters to create a SAS definition.

    try:
        api_response = api_instance.set_sas_definition(storage_account_name, sas_definition_name, api_version, parameters)
        print("The response of StorageApi->set_sas_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageApi->set_sas_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_account_name** | **str**| The name of the storage account. | 
 **sas_definition_name** | **str**| The name of the SAS definition. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**SasDefinitionCreateParameters**](SasDefinitionCreateParameters.md)| The parameters to create a SAS definition. | 

### Return type

[**SasDefinitionBundle**](SasDefinitionBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created SAS definition. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_storage_account**
> StorageBundle set_storage_account(storage_account_name, api_version, parameters)



Creates or updates a new storage account. This operation requires the storage/set permission.

### Example


```python
import openapi_client
from openapi_client.models.storage_account_create_parameters import StorageAccountCreateParameters
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
    api_instance = openapi_client.StorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.StorageAccountCreateParameters() # StorageAccountCreateParameters | The parameters to create a storage account.

    try:
        api_response = api_instance.set_storage_account(storage_account_name, api_version, parameters)
        print("The response of StorageApi->set_storage_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageApi->set_storage_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_account_name** | **str**| The name of the storage account. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**StorageAccountCreateParameters**](StorageAccountCreateParameters.md)| The parameters to create a storage account. | 

### Return type

[**StorageBundle**](StorageBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created storage account. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_sas_definition**
> SasDefinitionBundle update_sas_definition(storage_account_name, sas_definition_name, api_version, parameters)



Updates the specified attributes associated with the given SAS definition. This operation requires the storage/setsas permission.

### Example


```python
import openapi_client
from openapi_client.models.sas_definition_bundle import SasDefinitionBundle
from openapi_client.models.sas_definition_update_parameters import SasDefinitionUpdateParameters
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
    api_instance = openapi_client.StorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    sas_definition_name = 'sas_definition_name_example' # str | The name of the SAS definition.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.SasDefinitionUpdateParameters() # SasDefinitionUpdateParameters | The parameters to update a SAS definition.

    try:
        api_response = api_instance.update_sas_definition(storage_account_name, sas_definition_name, api_version, parameters)
        print("The response of StorageApi->update_sas_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageApi->update_sas_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_account_name** | **str**| The name of the storage account. | 
 **sas_definition_name** | **str**| The name of the SAS definition. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**SasDefinitionUpdateParameters**](SasDefinitionUpdateParameters.md)| The parameters to update a SAS definition. | 

### Return type

[**SasDefinitionBundle**](SasDefinitionBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated SAS definition. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_storage_account**
> StorageBundle update_storage_account(storage_account_name, api_version, parameters)



Updates the specified attributes associated with the given storage account. This operation requires the storage/set/update permission.

### Example


```python
import openapi_client
from openapi_client.models.storage_account_update_parameters import StorageAccountUpdateParameters
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
    api_instance = openapi_client.StorageApi(api_client)
    storage_account_name = 'storage_account_name_example' # str | The name of the storage account.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.StorageAccountUpdateParameters() # StorageAccountUpdateParameters | The parameters to update a storage account.

    try:
        api_response = api_instance.update_storage_account(storage_account_name, api_version, parameters)
        print("The response of StorageApi->update_storage_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageApi->update_storage_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_account_name** | **str**| The name of the storage account. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**StorageAccountUpdateParameters**](StorageAccountUpdateParameters.md)| The parameters to update a storage account. | 

### Return type

[**StorageBundle**](StorageBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated storage account. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

