# openapi_client.ManagedFoldersApi

All URIs are relative to *https://storage.googleapis.com/storage/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_managed_folders_delete**](ManagedFoldersApi.md#storage_managed_folders_delete) | **DELETE** /b/{bucket}/managedFolders/{managedFolder} | 
[**storage_managed_folders_get**](ManagedFoldersApi.md#storage_managed_folders_get) | **GET** /b/{bucket}/managedFolders/{managedFolder} | 
[**storage_managed_folders_get_iam_policy**](ManagedFoldersApi.md#storage_managed_folders_get_iam_policy) | **GET** /b/{bucket}/managedFolders/{managedFolder}/iam | 
[**storage_managed_folders_insert**](ManagedFoldersApi.md#storage_managed_folders_insert) | **POST** /b/{bucket}/managedFolders | 
[**storage_managed_folders_list**](ManagedFoldersApi.md#storage_managed_folders_list) | **GET** /b/{bucket}/managedFolders | 
[**storage_managed_folders_set_iam_policy**](ManagedFoldersApi.md#storage_managed_folders_set_iam_policy) | **PUT** /b/{bucket}/managedFolders/{managedFolder}/iam | 
[**storage_managed_folders_test_iam_permissions**](ManagedFoldersApi.md#storage_managed_folders_test_iam_permissions) | **GET** /b/{bucket}/managedFolders/{managedFolder}/iam/testPermissions | 


# **storage_managed_folders_delete**
> storage_managed_folders_delete(bucket, managed_folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match)



Permanently deletes a managed folder.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManagedFoldersApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket containing the managed folder.
    managed_folder = 'managed_folder_example' # str | The managed folder name/path.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | If set, only deletes the managed folder if its metageneration matches this value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | If set, only deletes the managed folder if its metageneration does not match this value. (optional)

    try:
        api_instance.storage_managed_folders_delete(bucket, managed_folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match)
    except Exception as e:
        print("Exception when calling ManagedFoldersApi->storage_managed_folders_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket containing the managed folder. | 
 **managed_folder** | **str**| The managed folder name/path. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **if_metageneration_match** | **str**| If set, only deletes the managed folder if its metageneration matches this value. | [optional] 
 **if_metageneration_not_match** | **str**| If set, only deletes the managed folder if its metageneration does not match this value. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_managed_folders_get**
> ManagedFolder storage_managed_folders_get(bucket, managed_folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match)



Returns metadata of the specified managed folder.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.managed_folder import ManagedFolder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManagedFoldersApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket containing the managed folder.
    managed_folder = 'managed_folder_example' # str | The managed folder name/path.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the return of the managed folder metadata conditional on whether the managed folder's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the return of the managed folder metadata conditional on whether the managed folder's current metageneration does not match the given value. (optional)

    try:
        api_response = api_instance.storage_managed_folders_get(bucket, managed_folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match)
        print("The response of ManagedFoldersApi->storage_managed_folders_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedFoldersApi->storage_managed_folders_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket containing the managed folder. | 
 **managed_folder** | **str**| The managed folder name/path. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **if_metageneration_match** | **str**| Makes the return of the managed folder metadata conditional on whether the managed folder&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the return of the managed folder metadata conditional on whether the managed folder&#39;s current metageneration does not match the given value. | [optional] 

### Return type

[**ManagedFolder**](ManagedFolder.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_managed_folders_get_iam_policy**
> Policy storage_managed_folders_get_iam_policy(bucket, managed_folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, options_requested_policy_version=options_requested_policy_version, user_project=user_project)



Returns an IAM policy for the specified managed folder.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.policy import Policy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManagedFoldersApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket containing the managed folder.
    managed_folder = 'managed_folder_example' # str | The managed folder name/path.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    options_requested_policy_version = 56 # int | The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn't support part of the requested IAM policy, the request fails. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)

    try:
        api_response = api_instance.storage_managed_folders_get_iam_policy(bucket, managed_folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, options_requested_policy_version=options_requested_policy_version, user_project=user_project)
        print("The response of ManagedFoldersApi->storage_managed_folders_get_iam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedFoldersApi->storage_managed_folders_get_iam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket containing the managed folder. | 
 **managed_folder** | **str**| The managed folder name/path. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **options_requested_policy_version** | **int**| The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn&#39;t support part of the requested IAM policy, the request fails. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 

### Return type

[**Policy**](Policy.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_managed_folders_insert**
> ManagedFolder storage_managed_folders_insert(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, managed_folder=managed_folder)



Creates a new managed folder.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.managed_folder import ManagedFolder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManagedFoldersApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket containing the managed folder.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    managed_folder = openapi_client.ManagedFolder() # ManagedFolder |  (optional)

    try:
        api_response = api_instance.storage_managed_folders_insert(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, managed_folder=managed_folder)
        print("The response of ManagedFoldersApi->storage_managed_folders_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedFoldersApi->storage_managed_folders_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket containing the managed folder. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **managed_folder** | [**ManagedFolder**](ManagedFolder.md)|  | [optional] 

### Return type

[**ManagedFolder**](ManagedFolder.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_managed_folders_list**
> ManagedFolders storage_managed_folders_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, page_size=page_size, page_token=page_token, prefix=prefix)



Lists managed folders in the given bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.managed_folders import ManagedFolders
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManagedFoldersApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket containing the managed folder.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    page_size = 56 # int | Maximum number of items to return in a single page of responses. (optional)
    page_token = 'page_token_example' # str | A previously-returned page token representing part of the larger set of results to view. (optional)
    prefix = 'prefix_example' # str | The managed folder name/path prefix to filter the output list of results. (optional)

    try:
        api_response = api_instance.storage_managed_folders_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, page_size=page_size, page_token=page_token, prefix=prefix)
        print("The response of ManagedFoldersApi->storage_managed_folders_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedFoldersApi->storage_managed_folders_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket containing the managed folder. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **page_size** | **int**| Maximum number of items to return in a single page of responses. | [optional] 
 **page_token** | **str**| A previously-returned page token representing part of the larger set of results to view. | [optional] 
 **prefix** | **str**| The managed folder name/path prefix to filter the output list of results. | [optional] 

### Return type

[**ManagedFolders**](ManagedFolders.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_managed_folders_set_iam_policy**
> Policy storage_managed_folders_set_iam_policy(bucket, managed_folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project, policy=policy)



Updates an IAM policy for the specified managed folder.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.policy import Policy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManagedFoldersApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket containing the managed folder.
    managed_folder = 'managed_folder_example' # str | The managed folder name/path.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    policy = openapi_client.Policy() # Policy |  (optional)

    try:
        api_response = api_instance.storage_managed_folders_set_iam_policy(bucket, managed_folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project, policy=policy)
        print("The response of ManagedFoldersApi->storage_managed_folders_set_iam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedFoldersApi->storage_managed_folders_set_iam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket containing the managed folder. | 
 **managed_folder** | **str**| The managed folder name/path. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **policy** | [**Policy**](Policy.md)|  | [optional] 

### Return type

[**Policy**](Policy.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_managed_folders_test_iam_permissions**
> TestIamPermissionsResponse storage_managed_folders_test_iam_permissions(bucket, managed_folder, permissions, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)



Tests a set of permissions on the given managed folder to see which, if any, are held by the caller.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.test_iam_permissions_response import TestIamPermissionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManagedFoldersApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket containing the managed folder.
    managed_folder = 'managed_folder_example' # str | The managed folder name/path.
    permissions = ['permissions_example'] # List[str] | Permissions to test.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)

    try:
        api_response = api_instance.storage_managed_folders_test_iam_permissions(bucket, managed_folder, permissions, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)
        print("The response of ManagedFoldersApi->storage_managed_folders_test_iam_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedFoldersApi->storage_managed_folders_test_iam_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket containing the managed folder. | 
 **managed_folder** | **str**| The managed folder name/path. | 
 **permissions** | [**List[str]**](str.md)| Permissions to test. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 

### Return type

[**TestIamPermissionsResponse**](TestIamPermissionsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

