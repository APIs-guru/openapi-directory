# openapi_client.FoldersApi

All URIs are relative to *https://storage.googleapis.com/storage/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_folders_delete**](FoldersApi.md#storage_folders_delete) | **DELETE** /b/{bucket}/folders/{folder} | 
[**storage_folders_get**](FoldersApi.md#storage_folders_get) | **GET** /b/{bucket}/folders/{folder} | 
[**storage_folders_insert**](FoldersApi.md#storage_folders_insert) | **POST** /b/{bucket}/folders | 
[**storage_folders_list**](FoldersApi.md#storage_folders_list) | **GET** /b/{bucket}/folders | 
[**storage_folders_rename**](FoldersApi.md#storage_folders_rename) | **POST** /b/{bucket}/folders/{sourceFolder}/renameTo/folders/{destinationFolder} | 


# **storage_folders_delete**
> storage_folders_delete(bucket, folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match)



Permanently deletes a folder. Only applicable to buckets with hierarchical namespace enabled.

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
    api_instance = openapi_client.FoldersApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which the folder resides.
    folder = 'folder_example' # str | Name of a folder.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | If set, only deletes the folder if its metageneration matches this value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | If set, only deletes the folder if its metageneration does not match this value. (optional)

    try:
        api_instance.storage_folders_delete(bucket, folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match)
    except Exception as e:
        print("Exception when calling FoldersApi->storage_folders_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the folder resides. | 
 **folder** | **str**| Name of a folder. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **if_metageneration_match** | **str**| If set, only deletes the folder if its metageneration matches this value. | [optional] 
 **if_metageneration_not_match** | **str**| If set, only deletes the folder if its metageneration does not match this value. | [optional] 

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

# **storage_folders_get**
> Folder storage_folders_get(bucket, folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match)



Returns metadata for the specified folder. Only applicable to buckets with hierarchical namespace enabled.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.folder import Folder
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
    api_instance = openapi_client.FoldersApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which the folder resides.
    folder = 'folder_example' # str | Name of a folder.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the return of the folder metadata conditional on whether the folder's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the return of the folder metadata conditional on whether the folder's current metageneration does not match the given value. (optional)

    try:
        api_response = api_instance.storage_folders_get(bucket, folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match)
        print("The response of FoldersApi->storage_folders_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoldersApi->storage_folders_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the folder resides. | 
 **folder** | **str**| Name of a folder. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **if_metageneration_match** | **str**| Makes the return of the folder metadata conditional on whether the folder&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the return of the folder metadata conditional on whether the folder&#39;s current metageneration does not match the given value. | [optional] 

### Return type

[**Folder**](Folder.md)

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

# **storage_folders_insert**
> Folder storage_folders_insert(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, recursive=recursive, folder=folder)



Creates a new folder. Only applicable to buckets with hierarchical namespace enabled.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.folder import Folder
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
    api_instance = openapi_client.FoldersApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which the folder resides.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    recursive = True # bool | If true, any parent folder which doesn’t exist will be created automatically. (optional)
    folder = openapi_client.Folder() # Folder |  (optional)

    try:
        api_response = api_instance.storage_folders_insert(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, recursive=recursive, folder=folder)
        print("The response of FoldersApi->storage_folders_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoldersApi->storage_folders_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the folder resides. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **recursive** | **bool**| If true, any parent folder which doesn’t exist will be created automatically. | [optional] 
 **folder** | [**Folder**](Folder.md)|  | [optional] 

### Return type

[**Folder**](Folder.md)

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

# **storage_folders_list**
> Folders storage_folders_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, delimiter=delimiter, end_offset=end_offset, page_size=page_size, page_token=page_token, prefix=prefix, start_offset=start_offset)



Retrieves a list of folders matching the criteria. Only applicable to buckets with hierarchical namespace enabled.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.folders import Folders
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
    api_instance = openapi_client.FoldersApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which to look for folders.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    delimiter = 'delimiter_example' # str | Returns results in a directory-like mode. The only supported value is '/'. If set, items will only contain folders that either exactly match the prefix, or are one level below the prefix. (optional)
    end_offset = 'end_offset_example' # str | Filter results to folders whose names are lexicographically before endOffset. If startOffset is also set, the folders listed will have names between startOffset (inclusive) and endOffset (exclusive). (optional)
    page_size = 56 # int | Maximum number of items to return in a single page of responses. (optional)
    page_token = 'page_token_example' # str | A previously-returned page token representing part of the larger set of results to view. (optional)
    prefix = 'prefix_example' # str | Filter results to folders whose paths begin with this prefix. If set, the value must either be an empty string or end with a '/'. (optional)
    start_offset = 'start_offset_example' # str | Filter results to folders whose names are lexicographically equal to or after startOffset. If endOffset is also set, the folders listed will have names between startOffset (inclusive) and endOffset (exclusive). (optional)

    try:
        api_response = api_instance.storage_folders_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, delimiter=delimiter, end_offset=end_offset, page_size=page_size, page_token=page_token, prefix=prefix, start_offset=start_offset)
        print("The response of FoldersApi->storage_folders_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoldersApi->storage_folders_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which to look for folders. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **delimiter** | **str**| Returns results in a directory-like mode. The only supported value is &#39;/&#39;. If set, items will only contain folders that either exactly match the prefix, or are one level below the prefix. | [optional] 
 **end_offset** | **str**| Filter results to folders whose names are lexicographically before endOffset. If startOffset is also set, the folders listed will have names between startOffset (inclusive) and endOffset (exclusive). | [optional] 
 **page_size** | **int**| Maximum number of items to return in a single page of responses. | [optional] 
 **page_token** | **str**| A previously-returned page token representing part of the larger set of results to view. | [optional] 
 **prefix** | **str**| Filter results to folders whose paths begin with this prefix. If set, the value must either be an empty string or end with a &#39;/&#39;. | [optional] 
 **start_offset** | **str**| Filter results to folders whose names are lexicographically equal to or after startOffset. If endOffset is also set, the folders listed will have names between startOffset (inclusive) and endOffset (exclusive). | [optional] 

### Return type

[**Folders**](Folders.md)

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

# **storage_folders_rename**
> GoogleLongrunningOperation storage_folders_rename(bucket, source_folder, destination_folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_source_metageneration_match=if_source_metageneration_match, if_source_metageneration_not_match=if_source_metageneration_not_match)



Renames a source folder to a destination folder. Only applicable to buckets with hierarchical namespace enabled.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
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
    api_instance = openapi_client.FoldersApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which the folders are in.
    source_folder = 'source_folder_example' # str | Name of the source folder.
    destination_folder = 'destination_folder_example' # str | Name of the destination folder.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    if_source_metageneration_match = 'if_source_metageneration_match_example' # str | Makes the operation conditional on whether the source object's current metageneration matches the given value. (optional)
    if_source_metageneration_not_match = 'if_source_metageneration_not_match_example' # str | Makes the operation conditional on whether the source object's current metageneration does not match the given value. (optional)

    try:
        api_response = api_instance.storage_folders_rename(bucket, source_folder, destination_folder, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_source_metageneration_match=if_source_metageneration_match, if_source_metageneration_not_match=if_source_metageneration_not_match)
        print("The response of FoldersApi->storage_folders_rename:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoldersApi->storage_folders_rename: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the folders are in. | 
 **source_folder** | **str**| Name of the source folder. | 
 **destination_folder** | **str**| Name of the destination folder. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **if_source_metageneration_match** | **str**| Makes the operation conditional on whether the source object&#39;s current metageneration matches the given value. | [optional] 
 **if_source_metageneration_not_match** | **str**| Makes the operation conditional on whether the source object&#39;s current metageneration does not match the given value. | [optional] 

### Return type

[**GoogleLongrunningOperation**](GoogleLongrunningOperation.md)

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

