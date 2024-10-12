# openapi_client.KeysApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_key**](KeysApi.md#backup_key) | **POST** /keys/{key-name}/backup | Requests that a backup of the specified key be downloaded to the client.
[**create_key**](KeysApi.md#create_key) | **POST** /keys/{key-name}/create | Creates a new key, stores it, then returns key parameters and attributes to the client.
[**decrypt**](KeysApi.md#decrypt) | **POST** /keys/{key-name}/{key-version}/decrypt | Decrypts a single block of encrypted data.
[**delete_key**](KeysApi.md#delete_key) | **DELETE** /keys/{key-name} | Deletes a key of any type from storage in Azure Key Vault.
[**encrypt**](KeysApi.md#encrypt) | **POST** /keys/{key-name}/{key-version}/encrypt | Encrypts an arbitrary sequence of bytes using an encryption key that is stored in a key vault.
[**get_key**](KeysApi.md#get_key) | **GET** /keys/{key-name}/{key-version} | Gets the public part of a stored key.
[**get_key_versions**](KeysApi.md#get_key_versions) | **GET** /keys/{key-name}/versions | Retrieves a list of individual key versions with the same key name.
[**get_keys**](KeysApi.md#get_keys) | **GET** /keys | List keys in the specified vault.
[**import_key**](KeysApi.md#import_key) | **PUT** /keys/{key-name} | Imports an externally created key, stores it, and returns key parameters and attributes to the client.
[**restore_key**](KeysApi.md#restore_key) | **POST** /keys/restore | Restores a backed up key to a vault.
[**sign**](KeysApi.md#sign) | **POST** /keys/{key-name}/{key-version}/sign | Creates a signature from a digest using the specified key.
[**unwrap_key**](KeysApi.md#unwrap_key) | **POST** /keys/{key-name}/{key-version}/unwrapkey | Unwraps a symmetric key using the specified key that was initially used for wrapping that key.
[**update_key**](KeysApi.md#update_key) | **PATCH** /keys/{key-name}/{key-version} | The update key operation changes specified attributes of a stored key and can be applied to any key type and key version stored in Azure Key Vault.
[**verify**](KeysApi.md#verify) | **POST** /keys/{key-name}/{key-version}/verify | Verifies a signature using a specified key.
[**wrap_key**](KeysApi.md#wrap_key) | **POST** /keys/{key-name}/{key-version}/wrapkey | Wraps a symmetric key using a specified key.


# **backup_key**
> BackupKeyResult backup_key(key_name, api_version)

Requests that a backup of the specified key be downloaded to the client.

The Key Backup operation exports a key from Azure Key Vault in a protected form. Note that this operation does NOT return key material in a form that can be used outside the Azure Key Vault system, the returned key material is either protected to a Azure Key Vault HSM or to Azure Key Vault itself. The intent of this operation is to allow a client to GENERATE a key in one Azure Key Vault instance, BACKUP the key, and then RESTORE it into another Azure Key Vault instance. The BACKUP operation may be used to export, in protected form, any key type from Azure Key Vault. Individual versions of a key cannot be backed up. BACKUP / RESTORE can be performed within geographical boundaries only; meaning that a BACKUP from one geographical area cannot be restored to another geographical area. For example, a backup from the US geographical area cannot be restored in an EU geographical area. This operation requires the key/backup permission.

### Example


```python
import openapi_client
from openapi_client.models.backup_key_result import BackupKeyResult
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
    api_instance = openapi_client.KeysApi(api_client)
    key_name = 'key_name_example' # str | The name of the key.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Requests that a backup of the specified key be downloaded to the client.
        api_response = api_instance.backup_key(key_name, api_version)
        print("The response of KeysApi->backup_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->backup_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of the key. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**BackupKeyResult**](BackupKeyResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The backup blob containing the backed up key. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_key**
> KeyBundle create_key(key_name, api_version, parameters)

Creates a new key, stores it, then returns key parameters and attributes to the client.

The create key operation can be used to create any key type in Azure Key Vault. If the named key already exists, Azure Key Vault creates a new version of the key. It requires the keys/create permission.

### Example


```python
import openapi_client
from openapi_client.models.key_bundle import KeyBundle
from openapi_client.models.key_create_parameters import KeyCreateParameters
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
    api_instance = openapi_client.KeysApi(api_client)
    key_name = 'key_name_example' # str | The name for the new key. The system will generate the version name for the new key.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.KeyCreateParameters() # KeyCreateParameters | The parameters to create a key.

    try:
        # Creates a new key, stores it, then returns key parameters and attributes to the client.
        api_response = api_instance.create_key(key_name, api_version, parameters)
        print("The response of KeysApi->create_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->create_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name for the new key. The system will generate the version name for the new key. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**KeyCreateParameters**](KeyCreateParameters.md)| The parameters to create a key. | 

### Return type

[**KeyBundle**](KeyBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A key bundle containing the result of the create key request. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **decrypt**
> KeyOperationResult decrypt(key_name, key_version, api_version, parameters)

Decrypts a single block of encrypted data.

The DECRYPT operation decrypts a well-formed block of ciphertext using the target encryption key and specified algorithm. This operation is the reverse of the ENCRYPT operation; only a single block of data may be decrypted, the size of this block is dependent on the target key and the algorithm to be used. The DECRYPT operation applies to asymmetric and symmetric keys stored in Azure Key Vault since it uses the private portion of the key. This operation requires the keys/decrypt permission.

### Example


```python
import openapi_client
from openapi_client.models.key_operation_result import KeyOperationResult
from openapi_client.models.key_operations_parameters import KeyOperationsParameters
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
    api_instance = openapi_client.KeysApi(api_client)
    key_name = 'key_name_example' # str | The name of the key.
    key_version = 'key_version_example' # str | The version of the key.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.KeyOperationsParameters() # KeyOperationsParameters | The parameters for the decryption operation.

    try:
        # Decrypts a single block of encrypted data.
        api_response = api_instance.decrypt(key_name, key_version, api_version, parameters)
        print("The response of KeysApi->decrypt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->decrypt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of the key. | 
 **key_version** | **str**| The version of the key. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**KeyOperationsParameters**](KeyOperationsParameters.md)| The parameters for the decryption operation. | 

### Return type

[**KeyOperationResult**](KeyOperationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The decryption result. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_key**
> DeletedKeyBundle delete_key(key_name, api_version)

Deletes a key of any type from storage in Azure Key Vault.

The delete key operation cannot be used to remove individual versions of a key. This operation removes the cryptographic material associated with the key, which means the key is not usable for Sign/Verify, Wrap/Unwrap or Encrypt/Decrypt operations. This operation requires the keys/delete permission.

### Example


```python
import openapi_client
from openapi_client.models.deleted_key_bundle import DeletedKeyBundle
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
    api_instance = openapi_client.KeysApi(api_client)
    key_name = 'key_name_example' # str | The name of the key to delete.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Deletes a key of any type from storage in Azure Key Vault.
        api_response = api_instance.delete_key(key_name, api_version)
        print("The response of KeysApi->delete_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->delete_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of the key to delete. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**DeletedKeyBundle**](DeletedKeyBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The public part of the deleted key and deletion information on when the key will be purged. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **encrypt**
> KeyOperationResult encrypt(key_name, key_version, api_version, parameters)

Encrypts an arbitrary sequence of bytes using an encryption key that is stored in a key vault.

The ENCRYPT operation encrypts an arbitrary sequence of bytes using an encryption key that is stored in Azure Key Vault. Note that the ENCRYPT operation only supports a single block of data, the size of which is dependent on the target key and the encryption algorithm to be used. The ENCRYPT operation is only strictly necessary for symmetric keys stored in Azure Key Vault since protection with an asymmetric key can be performed using public portion of the key. This operation is supported for asymmetric keys as a convenience for callers that have a key-reference but do not have access to the public key material. This operation requires the keys/encrypt permission.

### Example


```python
import openapi_client
from openapi_client.models.key_operation_result import KeyOperationResult
from openapi_client.models.key_operations_parameters import KeyOperationsParameters
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
    api_instance = openapi_client.KeysApi(api_client)
    key_name = 'key_name_example' # str | The name of the key.
    key_version = 'key_version_example' # str | The version of the key.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.KeyOperationsParameters() # KeyOperationsParameters | The parameters for the encryption operation.

    try:
        # Encrypts an arbitrary sequence of bytes using an encryption key that is stored in a key vault.
        api_response = api_instance.encrypt(key_name, key_version, api_version, parameters)
        print("The response of KeysApi->encrypt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->encrypt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of the key. | 
 **key_version** | **str**| The version of the key. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**KeyOperationsParameters**](KeyOperationsParameters.md)| The parameters for the encryption operation. | 

### Return type

[**KeyOperationResult**](KeyOperationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The encryption result. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_key**
> KeyBundle get_key(key_name, key_version, api_version)

Gets the public part of a stored key.

The get key operation is applicable to all key types. If the requested key is symmetric, then no key material is released in the response. This operation requires the keys/get permission.

### Example


```python
import openapi_client
from openapi_client.models.key_bundle import KeyBundle
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
    api_instance = openapi_client.KeysApi(api_client)
    key_name = 'key_name_example' # str | The name of the key to get.
    key_version = 'key_version_example' # str | Adding the version parameter retrieves a specific version of a key.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Gets the public part of a stored key.
        api_response = api_instance.get_key(key_name, key_version, api_version)
        print("The response of KeysApi->get_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->get_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of the key to get. | 
 **key_version** | **str**| Adding the version parameter retrieves a specific version of a key. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**KeyBundle**](KeyBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A key bundle containing the key and its attributes. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_key_versions**
> KeyListResult get_key_versions(key_name, api_version, maxresults=maxresults)

Retrieves a list of individual key versions with the same key name.

The full key identifier, attributes, and tags are provided in the response. This operation requires the keys/list permission.

### Example


```python
import openapi_client
from openapi_client.models.key_list_result import KeyListResult
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
    api_instance = openapi_client.KeysApi(api_client)
    key_name = 'key_name_example' # str | The name of the key.
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified the service will return up to 25 results. (optional)

    try:
        # Retrieves a list of individual key versions with the same key name.
        api_response = api_instance.get_key_versions(key_name, api_version, maxresults=maxresults)
        print("The response of KeysApi->get_key_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->get_key_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of the key. | 
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified the service will return up to 25 results. | [optional] 

### Return type

[**KeyListResult**](KeyListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of keys along with a link to the next page of keys. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_keys**
> KeyListResult get_keys(api_version, maxresults=maxresults)

List keys in the specified vault.

Retrieves a list of the keys in the Key Vault as JSON Web Key structures that contain the public part of a stored key. The LIST operation is applicable to all key types, however only the base key identifier, attributes, and tags are provided in the response. Individual versions of a key are not listed in the response. This operation requires the keys/list permission.

### Example


```python
import openapi_client
from openapi_client.models.key_list_result import KeyListResult
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
    api_instance = openapi_client.KeysApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified the service will return up to 25 results. (optional)

    try:
        # List keys in the specified vault.
        api_response = api_instance.get_keys(api_version, maxresults=maxresults)
        print("The response of KeysApi->get_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->get_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified the service will return up to 25 results. | [optional] 

### Return type

[**KeyListResult**](KeyListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of keys in the vault along with a link to the next page of keys. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **import_key**
> KeyBundle import_key(key_name, api_version, parameters)

Imports an externally created key, stores it, and returns key parameters and attributes to the client.

The import key operation may be used to import any key type into an Azure Key Vault. If the named key already exists, Azure Key Vault creates a new version of the key. This operation requires the keys/import permission.

### Example


```python
import openapi_client
from openapi_client.models.key_bundle import KeyBundle
from openapi_client.models.key_import_parameters import KeyImportParameters
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
    api_instance = openapi_client.KeysApi(api_client)
    key_name = 'key_name_example' # str | Name for the imported key.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.KeyImportParameters() # KeyImportParameters | The parameters to import a key.

    try:
        # Imports an externally created key, stores it, and returns key parameters and attributes to the client.
        api_response = api_instance.import_key(key_name, api_version, parameters)
        print("The response of KeysApi->import_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->import_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| Name for the imported key. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**KeyImportParameters**](KeyImportParameters.md)| The parameters to import a key. | 

### Return type

[**KeyBundle**](KeyBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Imported key bundle to the vault. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restore_key**
> KeyBundle restore_key(api_version, parameters)

Restores a backed up key to a vault.

Imports a previously backed up key into Azure Key Vault, restoring the key, its key identifier, attributes and access control policies. The RESTORE operation may be used to import a previously backed up key. Individual versions of a key cannot be restored. The key is restored in its entirety with the same key name as it had when it was backed up. If the key name is not available in the target Key Vault, the RESTORE operation will be rejected. While the key name is retained during restore, the final key identifier will change if the key is restored to a different vault. Restore will restore all versions and preserve version identifiers. The RESTORE operation is subject to security constraints: The target Key Vault must be owned by the same Microsoft Azure Subscription as the source Key Vault The user must have RESTORE permission in the target Key Vault. This operation requires the keys/restore permission.

### Example


```python
import openapi_client
from openapi_client.models.key_bundle import KeyBundle
from openapi_client.models.key_restore_parameters import KeyRestoreParameters
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
    api_instance = openapi_client.KeysApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.KeyRestoreParameters() # KeyRestoreParameters | The parameters to restore the key.

    try:
        # Restores a backed up key to a vault.
        api_response = api_instance.restore_key(api_version, parameters)
        print("The response of KeysApi->restore_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->restore_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **parameters** | [**KeyRestoreParameters**](KeyRestoreParameters.md)| The parameters to restore the key. | 

### Return type

[**KeyBundle**](KeyBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Restored key bundle in the vault. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sign**
> KeyOperationResult sign(key_name, key_version, api_version, parameters)

Creates a signature from a digest using the specified key.

The SIGN operation is applicable to asymmetric and symmetric keys stored in Azure Key Vault since this operation uses the private portion of the key. This operation requires the keys/sign permission.

### Example


```python
import openapi_client
from openapi_client.models.key_operation_result import KeyOperationResult
from openapi_client.models.key_sign_parameters import KeySignParameters
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
    api_instance = openapi_client.KeysApi(api_client)
    key_name = 'key_name_example' # str | The name of the key.
    key_version = 'key_version_example' # str | The version of the key.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.KeySignParameters() # KeySignParameters | The parameters for the signing operation.

    try:
        # Creates a signature from a digest using the specified key.
        api_response = api_instance.sign(key_name, key_version, api_version, parameters)
        print("The response of KeysApi->sign:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->sign: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of the key. | 
 **key_version** | **str**| The version of the key. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**KeySignParameters**](KeySignParameters.md)| The parameters for the signing operation. | 

### Return type

[**KeyOperationResult**](KeyOperationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The signature value. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unwrap_key**
> KeyOperationResult unwrap_key(key_name, key_version, api_version, parameters)

Unwraps a symmetric key using the specified key that was initially used for wrapping that key.

The UNWRAP operation supports decryption of a symmetric key using the target key encryption key. This operation is the reverse of the WRAP operation. The UNWRAP operation applies to asymmetric and symmetric keys stored in Azure Key Vault since it uses the private portion of the key. This operation requires the keys/unwrapKey permission.

### Example


```python
import openapi_client
from openapi_client.models.key_operation_result import KeyOperationResult
from openapi_client.models.key_operations_parameters import KeyOperationsParameters
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
    api_instance = openapi_client.KeysApi(api_client)
    key_name = 'key_name_example' # str | The name of the key.
    key_version = 'key_version_example' # str | The version of the key.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.KeyOperationsParameters() # KeyOperationsParameters | The parameters for the key operation.

    try:
        # Unwraps a symmetric key using the specified key that was initially used for wrapping that key.
        api_response = api_instance.unwrap_key(key_name, key_version, api_version, parameters)
        print("The response of KeysApi->unwrap_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->unwrap_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of the key. | 
 **key_version** | **str**| The version of the key. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**KeyOperationsParameters**](KeyOperationsParameters.md)| The parameters for the key operation. | 

### Return type

[**KeyOperationResult**](KeyOperationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The unwrapped symmetric key. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_key**
> KeyBundle update_key(key_name, key_version, api_version, parameters)

The update key operation changes specified attributes of a stored key and can be applied to any key type and key version stored in Azure Key Vault.

In order to perform this operation, the key must already exist in the Key Vault. Note: The cryptographic material of a key itself cannot be changed. This operation requires the keys/update permission.

### Example


```python
import openapi_client
from openapi_client.models.key_bundle import KeyBundle
from openapi_client.models.key_update_parameters import KeyUpdateParameters
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
    api_instance = openapi_client.KeysApi(api_client)
    key_name = 'key_name_example' # str | The name of key to update.
    key_version = 'key_version_example' # str | The version of the key to update.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.KeyUpdateParameters() # KeyUpdateParameters | The parameters of the key to update.

    try:
        # The update key operation changes specified attributes of a stored key and can be applied to any key type and key version stored in Azure Key Vault.
        api_response = api_instance.update_key(key_name, key_version, api_version, parameters)
        print("The response of KeysApi->update_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->update_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of key to update. | 
 **key_version** | **str**| The version of the key to update. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**KeyUpdateParameters**](KeyUpdateParameters.md)| The parameters of the key to update. | 

### Return type

[**KeyBundle**](KeyBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated key. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify**
> KeyVerifyResult verify(key_name, key_version, api_version, parameters)

Verifies a signature using a specified key.

The VERIFY operation is applicable to symmetric keys stored in Azure Key Vault. VERIFY is not strictly necessary for asymmetric keys stored in Azure Key Vault since signature verification can be performed using the public portion of the key but this operation is supported as a convenience for callers that only have a key-reference and not the public portion of the key. This operation requires the keys/verify permission.

### Example


```python
import openapi_client
from openapi_client.models.key_verify_parameters import KeyVerifyParameters
from openapi_client.models.key_verify_result import KeyVerifyResult
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
    api_instance = openapi_client.KeysApi(api_client)
    key_name = 'key_name_example' # str | The name of the key.
    key_version = 'key_version_example' # str | The version of the key.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.KeyVerifyParameters() # KeyVerifyParameters | The parameters for verify operations.

    try:
        # Verifies a signature using a specified key.
        api_response = api_instance.verify(key_name, key_version, api_version, parameters)
        print("The response of KeysApi->verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of the key. | 
 **key_version** | **str**| The version of the key. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**KeyVerifyParameters**](KeyVerifyParameters.md)| The parameters for verify operations. | 

### Return type

[**KeyVerifyResult**](KeyVerifyResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The verification result. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wrap_key**
> KeyOperationResult wrap_key(key_name, key_version, api_version, parameters)

Wraps a symmetric key using a specified key.

The WRAP operation supports encryption of a symmetric key using a key encryption key that has previously been stored in an Azure Key Vault. The WRAP operation is only strictly necessary for symmetric keys stored in Azure Key Vault since protection with an asymmetric key can be performed using the public portion of the key. This operation is supported for asymmetric keys as a convenience for callers that have a key-reference but do not have access to the public key material. This operation requires the keys/wrapKey permission.

### Example


```python
import openapi_client
from openapi_client.models.key_operation_result import KeyOperationResult
from openapi_client.models.key_operations_parameters import KeyOperationsParameters
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
    api_instance = openapi_client.KeysApi(api_client)
    key_name = 'key_name_example' # str | The name of the key.
    key_version = 'key_version_example' # str | The version of the key.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.KeyOperationsParameters() # KeyOperationsParameters | The parameters for wrap operation.

    try:
        # Wraps a symmetric key using a specified key.
        api_response = api_instance.wrap_key(key_name, key_version, api_version, parameters)
        print("The response of KeysApi->wrap_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->wrap_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_name** | **str**| The name of the key. | 
 **key_version** | **str**| The version of the key. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**KeyOperationsParameters**](KeyOperationsParameters.md)| The parameters for wrap operation. | 

### Return type

[**KeyOperationResult**](KeyOperationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The wrapped symmetric key. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

