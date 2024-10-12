# openapi_client.FilesApi

All URIs are relative to *https://www.googleapis.com/drive/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**drive_files_copy**](FilesApi.md#drive_files_copy) | **POST** /files/{fileId}/copy | 
[**drive_files_create**](FilesApi.md#drive_files_create) | **POST** /files | 
[**drive_files_delete**](FilesApi.md#drive_files_delete) | **DELETE** /files/{fileId} | 
[**drive_files_empty_trash**](FilesApi.md#drive_files_empty_trash) | **DELETE** /files/trash | 
[**drive_files_export**](FilesApi.md#drive_files_export) | **GET** /files/{fileId}/export | 
[**drive_files_generate_ids**](FilesApi.md#drive_files_generate_ids) | **GET** /files/generateIds | 
[**drive_files_get**](FilesApi.md#drive_files_get) | **GET** /files/{fileId} | 
[**drive_files_list**](FilesApi.md#drive_files_list) | **GET** /files | 
[**drive_files_list_labels**](FilesApi.md#drive_files_list_labels) | **GET** /files/{fileId}/listLabels | 
[**drive_files_modify_labels**](FilesApi.md#drive_files_modify_labels) | **POST** /files/{fileId}/modifyLabels | 
[**drive_files_update**](FilesApi.md#drive_files_update) | **PATCH** /files/{fileId} | 
[**drive_files_watch**](FilesApi.md#drive_files_watch) | **POST** /files/{fileId}/watch | 


# **drive_files_copy**
> File drive_files_copy(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, enforce_single_parent=enforce_single_parent, ignore_default_visibility=ignore_default_visibility, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, keep_revision_forever=keep_revision_forever, ocr_language=ocr_language, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, file=file)



Creates a copy of a file and applies any requested updates with patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file import File
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v3"
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
    api_instance = openapi_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | The ID of the file.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    enforce_single_parent = True # bool | Deprecated. Copying files into multiple folders is no longer supported. Use shortcuts instead. (optional)
    ignore_default_visibility = True # bool | Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only 'published' is supported. (optional)
    keep_revision_forever = True # bool | Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. (optional)
    ocr_language = 'ocr_language_example' # str | A language hint for OCR processing during image import (ISO 639-1 code). (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    file = '/path/to/file' # File |  (optional)

    try:
        api_response = api_instance.drive_files_copy(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, enforce_single_parent=enforce_single_parent, ignore_default_visibility=ignore_default_visibility, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, keep_revision_forever=keep_revision_forever, ocr_language=ocr_language, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, file=file)
        print("The response of FilesApi->drive_files_copy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_copy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID of the file. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **enforce_single_parent** | **bool**| Deprecated. Copying files into multiple folders is no longer supported. Use shortcuts instead. | [optional] 
 **ignore_default_visibility** | **bool**| Whether to ignore the domain&#39;s default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#39;published&#39; is supported. | [optional] 
 **keep_revision_forever** | **bool**| Whether to set the &#39;keepForever&#39; field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. | [optional] 
 **ocr_language** | **str**| A language hint for OCR processing during image import (ISO 639-1 code). | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **file** | [**File**](File.md)|  | [optional] 

### Return type

[**File**](File.md)

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

# **drive_files_create**
> File drive_files_create(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, enforce_single_parent=enforce_single_parent, ignore_default_visibility=ignore_default_visibility, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, keep_revision_forever=keep_revision_forever, ocr_language=ocr_language, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, use_content_as_indexable_text=use_content_as_indexable_text, file=file)



 Creates a new file. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.create` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `\"name\": \"cat.jpg\"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file import File
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v3"
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
    api_instance = openapi_client.FilesApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    enforce_single_parent = True # bool | Deprecated. Creating files in multiple folders is no longer supported. (optional)
    ignore_default_visibility = True # bool | Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only 'published' is supported. (optional)
    keep_revision_forever = True # bool | Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. (optional)
    ocr_language = 'ocr_language_example' # str | A language hint for OCR processing during image import (ISO 639-1 code). (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    use_content_as_indexable_text = True # bool | Whether to use the uploaded content as indexable text. (optional)
    file = '/path/to/file' # File |  (optional)

    try:
        api_response = api_instance.drive_files_create(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, enforce_single_parent=enforce_single_parent, ignore_default_visibility=ignore_default_visibility, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, keep_revision_forever=keep_revision_forever, ocr_language=ocr_language, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, use_content_as_indexable_text=use_content_as_indexable_text, file=file)
        print("The response of FilesApi->drive_files_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **enforce_single_parent** | **bool**| Deprecated. Creating files in multiple folders is no longer supported. | [optional] 
 **ignore_default_visibility** | **bool**| Whether to ignore the domain&#39;s default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#39;published&#39; is supported. | [optional] 
 **keep_revision_forever** | **bool**| Whether to set the &#39;keepForever&#39; field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. | [optional] 
 **ocr_language** | **str**| A language hint for OCR processing during image import (ISO 639-1 code). | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **use_content_as_indexable_text** | **bool**| Whether to use the uploaded content as indexable text. | [optional] 
 **file** | [**File**](File.md)|  | [optional] 

### Return type

[**File**](File.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **drive_files_delete**
> drive_files_delete(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, enforce_single_parent=enforce_single_parent, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives)



Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v3"
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
    api_instance = openapi_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | The ID of the file.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    enforce_single_parent = True # bool | Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)

    try:
        api_instance.drive_files_delete(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, enforce_single_parent=enforce_single_parent, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID of the file. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **enforce_single_parent** | **bool**| Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner&#39;s root. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 

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

# **drive_files_empty_trash**
> drive_files_empty_trash(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, drive_id=drive_id, enforce_single_parent=enforce_single_parent)



Permanently deletes all of the user's trashed files.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v3"
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
    api_instance = openapi_client.FilesApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    drive_id = 'drive_id_example' # str | If set, empties the trash of the provided shared drive. (optional)
    enforce_single_parent = True # bool | Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root. (optional)

    try:
        api_instance.drive_files_empty_trash(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, drive_id=drive_id, enforce_single_parent=enforce_single_parent)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_empty_trash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **drive_id** | **str**| If set, empties the trash of the provided shared drive. | [optional] 
 **enforce_single_parent** | **bool**| Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner&#39;s root. | [optional] 

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

# **drive_files_export**
> drive_files_export(file_id, mime_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v3"
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
    api_instance = openapi_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | The ID of the file.
    mime_type = 'mime_type_example' # str | Required. The MIME type of the format requested for this export.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)

    try:
        api_instance.drive_files_export(file_id, mime_type, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_export: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID of the file. | 
 **mime_type** | **str**| Required. The MIME type of the format requested for this export. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 

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

# **drive_files_generate_ids**
> GeneratedIds drive_files_generate_ids(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, count=count, space=space, type=type)



Generates a set of file IDs which can be provided in create or copy requests.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.generated_ids import GeneratedIds
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v3"
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
    api_instance = openapi_client.FilesApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    count = 56 # int | The number of IDs to return. (optional)
    space = 'space_example' # str | The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'. (Default: 'drive') (optional)
    type = 'type_example' # str | The type of items which the IDs can be used for. Supported values are 'files' and 'shortcuts'. Note that 'shortcuts' are only supported in the `drive` 'space'. (Default: 'files') (optional)

    try:
        api_response = api_instance.drive_files_generate_ids(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, count=count, space=space, type=type)
        print("The response of FilesApi->drive_files_generate_ids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_generate_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **count** | **int**| The number of IDs to return. | [optional] 
 **space** | **str**| The space in which the IDs can be used to create new files. Supported values are &#39;drive&#39; and &#39;appDataFolder&#39;. (Default: &#39;drive&#39;) | [optional] 
 **type** | **str**| The type of items which the IDs can be used for. Supported values are &#39;files&#39; and &#39;shortcuts&#39;. Note that &#39;shortcuts&#39; are only supported in the &#x60;drive&#x60; &#39;space&#39;. (Default: &#39;files&#39;) | [optional] 

### Return type

[**GeneratedIds**](GeneratedIds.md)

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

# **drive_files_get**
> File drive_files_get(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, acknowledge_abuse=acknowledge_abuse, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives)



 Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download & export files](/drive/api/guides/manage-downloads).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file import File
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v3"
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
    api_instance = openapi_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | The ID of the file.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    acknowledge_abuse = True # bool | Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only 'published' is supported. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)

    try:
        api_response = api_instance.drive_files_get(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, acknowledge_abuse=acknowledge_abuse, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives)
        print("The response of FilesApi->drive_files_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID of the file. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **acknowledge_abuse** | **bool**| Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt&#x3D;media. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#39;published&#39; is supported. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 

### Return type

[**File**](File.md)

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

# **drive_files_list**
> FileList drive_files_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, corpora=corpora, corpus=corpus, drive_id=drive_id, include_items_from_all_drives=include_items_from_all_drives, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, include_team_drive_items=include_team_drive_items, order_by=order_by, page_size=page_size, page_token=page_token, q=q, spaces=spaces, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, team_drive_id=team_drive_id)



 Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file_list import FileList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v3"
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
    api_instance = openapi_client.FilesApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    corpora = 'corpora_example' # str | Bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'drive', and 'allDrives'. Prefer 'user' or 'drive' to 'allDrives' for efficiency. By default, corpora is set to 'user'. However, this can change depending on the filter set through the 'q' parameter. (optional)
    corpus = 'corpus_example' # str | Deprecated: The source of files to list. Use 'corpora' instead. (optional)
    drive_id = 'drive_id_example' # str | ID of the shared drive to search. (optional)
    include_items_from_all_drives = True # bool | Whether both My Drive and shared drive items should be included in results. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only 'published' is supported. (optional)
    include_team_drive_items = True # bool | Deprecated: Use `includeItemsFromAllDrives` instead. (optional)
    order_by = 'order_by_example' # str | A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. (optional)
    page_size = 56 # int | The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached. (optional)
    page_token = 'page_token_example' # str | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. (optional)
    q = 'q_example' # str | A query for filtering the file results. See the \"Search for files & folders\" guide for supported syntax. (optional)
    spaces = 'spaces_example' # str | A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    team_drive_id = 'team_drive_id_example' # str | Deprecated: Use `driveId` instead. (optional)

    try:
        api_response = api_instance.drive_files_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, corpora=corpora, corpus=corpus, drive_id=drive_id, include_items_from_all_drives=include_items_from_all_drives, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, include_team_drive_items=include_team_drive_items, order_by=order_by, page_size=page_size, page_token=page_token, q=q, spaces=spaces, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, team_drive_id=team_drive_id)
        print("The response of FilesApi->drive_files_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **corpora** | **str**| Bodies of items (files/documents) to which the query applies. Supported bodies are &#39;user&#39;, &#39;domain&#39;, &#39;drive&#39;, and &#39;allDrives&#39;. Prefer &#39;user&#39; or &#39;drive&#39; to &#39;allDrives&#39; for efficiency. By default, corpora is set to &#39;user&#39;. However, this can change depending on the filter set through the &#39;q&#39; parameter. | [optional] 
 **corpus** | **str**| Deprecated: The source of files to list. Use &#39;corpora&#39; instead. | [optional] 
 **drive_id** | **str**| ID of the shared drive to search. | [optional] 
 **include_items_from_all_drives** | **bool**| Whether both My Drive and shared drive items should be included in results. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#39;published&#39; is supported. | [optional] 
 **include_team_drive_items** | **bool**| Deprecated: Use &#x60;includeItemsFromAllDrives&#x60; instead. | [optional] 
 **order_by** | **str**| A comma-separated list of sort keys. Valid keys are &#39;createdTime&#39;, &#39;folder&#39;, &#39;modifiedByMeTime&#39;, &#39;modifiedTime&#39;, &#39;name&#39;, &#39;name_natural&#39;, &#39;quotaBytesUsed&#39;, &#39;recency&#39;, &#39;sharedWithMeTime&#39;, &#39;starred&#39;, and &#39;viewedByMeTime&#39;. Each key sorts ascending by default, but can be reversed with the &#39;desc&#39; modifier. Example usage: ?orderBy&#x3D;folder,modifiedTime desc,name. | [optional] 
 **page_size** | **int**| The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached. | [optional] 
 **page_token** | **str**| The token for continuing a previous list request on the next page. This should be set to the value of &#39;nextPageToken&#39; from the previous response. | [optional] 
 **q** | **str**| A query for filtering the file results. See the \&quot;Search for files &amp; folders\&quot; guide for supported syntax. | [optional] 
 **spaces** | **str**| A comma-separated list of spaces to query within the corpora. Supported values are &#39;drive&#39; and &#39;appDataFolder&#39;. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **team_drive_id** | **str**| Deprecated: Use &#x60;driveId&#x60; instead. | [optional] 

### Return type

[**FileList**](FileList.md)

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

# **drive_files_list_labels**
> LabelList drive_files_list_labels(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, max_results=max_results, page_token=page_token)



Lists the labels on a file.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.label_list import LabelList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v3"
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
    api_instance = openapi_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | The ID for the file.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    max_results = 56 # int | The maximum number of labels to return per page. When not set, defaults to 100. (optional)
    page_token = 'page_token_example' # str | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. (optional)

    try:
        api_response = api_instance.drive_files_list_labels(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, max_results=max_results, page_token=page_token)
        print("The response of FilesApi->drive_files_list_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_list_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID for the file. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **max_results** | **int**| The maximum number of labels to return per page. When not set, defaults to 100. | [optional] 
 **page_token** | **str**| The token for continuing a previous list request on the next page. This should be set to the value of &#39;nextPageToken&#39; from the previous response. | [optional] 

### Return type

[**LabelList**](LabelList.md)

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

# **drive_files_modify_labels**
> ModifyLabelsResponse drive_files_modify_labels(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, modify_labels_request=modify_labels_request)



Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.modify_labels_request import ModifyLabelsRequest
from openapi_client.models.modify_labels_response import ModifyLabelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v3"
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
    api_instance = openapi_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | The ID of the file to which the labels belong.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    modify_labels_request = openapi_client.ModifyLabelsRequest() # ModifyLabelsRequest |  (optional)

    try:
        api_response = api_instance.drive_files_modify_labels(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, modify_labels_request=modify_labels_request)
        print("The response of FilesApi->drive_files_modify_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_modify_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID of the file to which the labels belong. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **modify_labels_request** | [**ModifyLabelsRequest**](ModifyLabelsRequest.md)|  | [optional] 

### Return type

[**ModifyLabelsResponse**](ModifyLabelsResponse.md)

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

# **drive_files_update**
> File drive_files_update(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, add_parents=add_parents, enforce_single_parent=enforce_single_parent, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, keep_revision_forever=keep_revision_forever, ocr_language=ocr_language, remove_parents=remove_parents, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, use_content_as_indexable_text=use_content_as_indexable_text, file=file)



 Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file import File
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v3"
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
    api_instance = openapi_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | The ID of the file.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    add_parents = 'add_parents_example' # str | A comma-separated list of parent IDs to add. (optional)
    enforce_single_parent = True # bool | Deprecated: Adding files to multiple folders is no longer supported. Use shortcuts instead. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only 'published' is supported. (optional)
    keep_revision_forever = True # bool | Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. (optional)
    ocr_language = 'ocr_language_example' # str | A language hint for OCR processing during image import (ISO 639-1 code). (optional)
    remove_parents = 'remove_parents_example' # str | A comma-separated list of parent IDs to remove. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    use_content_as_indexable_text = True # bool | Whether to use the uploaded content as indexable text. (optional)
    file = '/path/to/file' # File |  (optional)

    try:
        api_response = api_instance.drive_files_update(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, add_parents=add_parents, enforce_single_parent=enforce_single_parent, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, keep_revision_forever=keep_revision_forever, ocr_language=ocr_language, remove_parents=remove_parents, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, use_content_as_indexable_text=use_content_as_indexable_text, file=file)
        print("The response of FilesApi->drive_files_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID of the file. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **add_parents** | **str**| A comma-separated list of parent IDs to add. | [optional] 
 **enforce_single_parent** | **bool**| Deprecated: Adding files to multiple folders is no longer supported. Use shortcuts instead. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#39;published&#39; is supported. | [optional] 
 **keep_revision_forever** | **bool**| Whether to set the &#39;keepForever&#39; field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. | [optional] 
 **ocr_language** | **str**| A language hint for OCR processing during image import (ISO 639-1 code). | [optional] 
 **remove_parents** | **str**| A comma-separated list of parent IDs to remove. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **use_content_as_indexable_text** | **bool**| Whether to use the uploaded content as indexable text. | [optional] 
 **file** | [**File**](File.md)|  | [optional] 

### Return type

[**File**](File.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **drive_files_watch**
> Channel drive_files_watch(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, acknowledge_abuse=acknowledge_abuse, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, channel=channel)



Subscribes to changes to a file.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.channel import Channel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v3"
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
    api_instance = openapi_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | The ID of the file.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    acknowledge_abuse = True # bool | Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only 'published' is supported. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    channel = openapi_client.Channel() # Channel |  (optional)

    try:
        api_response = api_instance.drive_files_watch(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, acknowledge_abuse=acknowledge_abuse, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, channel=channel)
        print("The response of FilesApi->drive_files_watch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_watch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID of the file. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **acknowledge_abuse** | **bool**| Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt&#x3D;media. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#39;published&#39; is supported. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **channel** | [**Channel**](Channel.md)|  | [optional] 

### Return type

[**Channel**](Channel.md)

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

