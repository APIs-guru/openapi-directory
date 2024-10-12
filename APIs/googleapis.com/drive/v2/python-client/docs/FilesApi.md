# openapi_client.FilesApi

All URIs are relative to *https://www.googleapis.com/drive/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**drive_files_copy**](FilesApi.md#drive_files_copy) | **POST** /files/{fileId}/copy | 
[**drive_files_delete**](FilesApi.md#drive_files_delete) | **DELETE** /files/{fileId} | 
[**drive_files_empty_trash**](FilesApi.md#drive_files_empty_trash) | **DELETE** /files/trash | 
[**drive_files_export**](FilesApi.md#drive_files_export) | **GET** /files/{fileId}/export | 
[**drive_files_generate_ids**](FilesApi.md#drive_files_generate_ids) | **GET** /files/generateIds | 
[**drive_files_get**](FilesApi.md#drive_files_get) | **GET** /files/{fileId} | 
[**drive_files_insert**](FilesApi.md#drive_files_insert) | **POST** /files | 
[**drive_files_list**](FilesApi.md#drive_files_list) | **GET** /files | 
[**drive_files_list_labels**](FilesApi.md#drive_files_list_labels) | **GET** /files/{fileId}/listLabels | 
[**drive_files_modify_labels**](FilesApi.md#drive_files_modify_labels) | **POST** /files/{fileId}/modifyLabels | 
[**drive_files_patch**](FilesApi.md#drive_files_patch) | **PATCH** /files/{fileId} | 
[**drive_files_touch**](FilesApi.md#drive_files_touch) | **POST** /files/{fileId}/touch | 
[**drive_files_trash**](FilesApi.md#drive_files_trash) | **POST** /files/{fileId}/trash | 
[**drive_files_untrash**](FilesApi.md#drive_files_untrash) | **POST** /files/{fileId}/untrash | 
[**drive_files_update**](FilesApi.md#drive_files_update) | **PUT** /files/{fileId} | 
[**drive_files_watch**](FilesApi.md#drive_files_watch) | **POST** /files/{fileId}/watch | 


# **drive_files_copy**
> File drive_files_copy(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, convert=convert, enforce_single_parent=enforce_single_parent, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, ocr=ocr, ocr_language=ocr_language, pinned=pinned, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, timed_text_language=timed_text_language, timed_text_track_name=timed_text_track_name, visibility=visibility, file=file)



Creates a copy of the specified file.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file import File
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    file_id = 'file_id_example' # str | The ID of the file to copy.
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
    convert = True # bool | Whether to convert this file to the corresponding Docs Editors format. (optional)
    enforce_single_parent = True # bool | Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only `published` is supported. (optional)
    ocr = True # bool | Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. (optional)
    ocr_language = 'ocr_language_example' # str | If `ocr` is true, hints at the language to use. Valid values are BCP 47 codes. (optional)
    pinned = True # bool | Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    timed_text_language = 'timed_text_language_example' # str | The language of the timed text. (optional)
    timed_text_track_name = 'timed_text_track_name_example' # str | The timed text track name. (optional)
    visibility = 'visibility_example' # str | The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false. (optional)
    file = '/path/to/file' # File |  (optional)

    try:
        api_response = api_instance.drive_files_copy(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, convert=convert, enforce_single_parent=enforce_single_parent, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, ocr=ocr, ocr_language=ocr_language, pinned=pinned, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, timed_text_language=timed_text_language, timed_text_track_name=timed_text_track_name, visibility=visibility, file=file)
        print("The response of FilesApi->drive_files_copy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_copy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID of the file to copy. | 
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
 **convert** | **bool**| Whether to convert this file to the corresponding Docs Editors format. | [optional] 
 **enforce_single_parent** | **bool**| Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#x60;published&#x60; is supported. | [optional] 
 **ocr** | **bool**| Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. | [optional] 
 **ocr_language** | **str**| If &#x60;ocr&#x60; is true, hints at the language to use. Valid values are BCP 47 codes. | [optional] 
 **pinned** | **bool**| Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **timed_text_language** | **str**| The language of the timed text. | [optional] 
 **timed_text_track_name** | **str**| The timed text track name. | [optional] 
 **visibility** | **str**| The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert&#x3D;false. | [optional] 
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

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    file_id = 'file_id_example' # str | The ID of the file to delete.
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
    enforce_single_parent = True # bool | Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root. (optional)
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
 **file_id** | **str**| The ID of the file to delete. | 
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
 **enforce_single_parent** | **bool**| Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner&#39;s root. | [optional] 
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

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    enforce_single_parent = True # bool | Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root. (optional)

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
 **enforce_single_parent** | **bool**| Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner&#39;s root. | [optional] 

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

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
> GeneratedIds drive_files_generate_ids(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, max_results=max_results, space=space, type=type)



Generates a set of file IDs which can be provided in insert or copy requests.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.generated_ids import GeneratedIds
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    max_results = 56 # int | Maximum number of IDs to return. (optional)
    space = 'space_example' # str | The space in which the IDs can be used to create new files. Supported values are `drive` and `appDataFolder`. (Default: `drive`) (optional)
    type = 'type_example' # str | The type of items which the IDs can be used for. Supported values are `files` and `shortcuts`. Note that `shortcuts` are only supported in the `drive` `space`. (Default: `files`) (optional)

    try:
        api_response = api_instance.drive_files_generate_ids(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, max_results=max_results, space=space, type=type)
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
 **max_results** | **int**| Maximum number of IDs to return. | [optional] 
 **space** | **str**| The space in which the IDs can be used to create new files. Supported values are &#x60;drive&#x60; and &#x60;appDataFolder&#x60;. (Default: &#x60;drive&#x60;) | [optional] 
 **type** | **str**| The type of items which the IDs can be used for. Supported values are &#x60;files&#x60; and &#x60;shortcuts&#x60;. Note that &#x60;shortcuts&#x60; are only supported in the &#x60;drive&#x60; &#x60;space&#x60;. (Default: &#x60;files&#x60;) | [optional] 

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
> File drive_files_get(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, acknowledge_abuse=acknowledge_abuse, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, projection=projection, revision_id=revision_id, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, update_viewed_date=update_viewed_date)



 Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/drive/api/reference/rest/v2/files/export) instead. For more information, see [Download & export files](/drive/api/guides/manage-downloads).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file import File
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    file_id = 'file_id_example' # str | The ID for the file in question.
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
    acknowledge_abuse = True # bool | Whether the user is acknowledging the risk of downloading known malware or other abusive files. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only `published` is supported. (optional)
    projection = 'projection_example' # str | Deprecated: This parameter has no function. (optional)
    revision_id = 'revision_id_example' # str | Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    update_viewed_date = True # bool | Deprecated: Use `files.update` with `modifiedDateBehavior=noChange, updateViewedDate=true` and an empty request body. (optional)

    try:
        api_response = api_instance.drive_files_get(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, acknowledge_abuse=acknowledge_abuse, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, projection=projection, revision_id=revision_id, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, update_viewed_date=update_viewed_date)
        print("The response of FilesApi->drive_files_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID for the file in question. | 
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
 **acknowledge_abuse** | **bool**| Whether the user is acknowledging the risk of downloading known malware or other abusive files. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#x60;published&#x60; is supported. | [optional] 
 **projection** | **str**| Deprecated: This parameter has no function. | [optional] 
 **revision_id** | **str**| Specifies the Revision ID that should be downloaded. Ignored unless alt&#x3D;media is specified. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **update_viewed_date** | **bool**| Deprecated: Use &#x60;files.update&#x60; with &#x60;modifiedDateBehavior&#x3D;noChange, updateViewedDate&#x3D;true&#x60; and an empty request body. | [optional] 

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

# **drive_files_insert**
> File drive_files_insert(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, convert=convert, enforce_single_parent=enforce_single_parent, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, ocr=ocr, ocr_language=ocr_language, pinned=pinned, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, timed_text_language=timed_text_language, timed_text_track_name=timed_text_track_name, use_content_as_indexable_text=use_content_as_indexable_text, visibility=visibility, file=file)



 Inserts a new file. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.insert` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `title` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `\"title\": \"cat.jpg\"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file import File
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    convert = True # bool | Whether to convert this file to the corresponding Docs Editors format. (optional)
    enforce_single_parent = True # bool | Deprecated: Creating files in multiple folders is no longer supported. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only `published` is supported. (optional)
    ocr = True # bool | Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. (optional)
    ocr_language = 'ocr_language_example' # str | If ocr is true, hints at the language to use. Valid values are BCP 47 codes. (optional)
    pinned = True # bool | Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    timed_text_language = 'timed_text_language_example' # str | The language of the timed text. (optional)
    timed_text_track_name = 'timed_text_track_name_example' # str | The timed text track name. (optional)
    use_content_as_indexable_text = True # bool | Whether to use the content as indexable text. (optional)
    visibility = 'visibility_example' # str | The visibility of the new file. This parameter is only relevant when convert=false. (optional)
    file = '/path/to/file' # File |  (optional)

    try:
        api_response = api_instance.drive_files_insert(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, convert=convert, enforce_single_parent=enforce_single_parent, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, ocr=ocr, ocr_language=ocr_language, pinned=pinned, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, timed_text_language=timed_text_language, timed_text_track_name=timed_text_track_name, use_content_as_indexable_text=use_content_as_indexable_text, visibility=visibility, file=file)
        print("The response of FilesApi->drive_files_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_insert: %s\n" % e)
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
 **convert** | **bool**| Whether to convert this file to the corresponding Docs Editors format. | [optional] 
 **enforce_single_parent** | **bool**| Deprecated: Creating files in multiple folders is no longer supported. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#x60;published&#x60; is supported. | [optional] 
 **ocr** | **bool**| Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. | [optional] 
 **ocr_language** | **str**| If ocr is true, hints at the language to use. Valid values are BCP 47 codes. | [optional] 
 **pinned** | **bool**| Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **timed_text_language** | **str**| The language of the timed text. | [optional] 
 **timed_text_track_name** | **str**| The timed text track name. | [optional] 
 **use_content_as_indexable_text** | **bool**| Whether to use the content as indexable text. | [optional] 
 **visibility** | **str**| The visibility of the new file. This parameter is only relevant when convert&#x3D;false. | [optional] 
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

# **drive_files_list**
> FileList drive_files_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, corpora=corpora, corpus=corpus, drive_id=drive_id, include_items_from_all_drives=include_items_from_all_drives, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, include_team_drive_items=include_team_drive_items, max_results=max_results, order_by=order_by, page_token=page_token, projection=projection, q=q, spaces=spaces, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, team_drive_id=team_drive_id)



 Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file_list import FileList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    corpora = 'corpora_example' # str | Bodies of items (files/documents) to which the query applies. Supported bodies are `default`, `domain`, `drive` and `allDrives`. Prefer `default` or `drive` to `allDrives` for efficiency. (optional)
    corpus = 'corpus_example' # str | Deprecated: The body of items (files/documents) to which the query applies. Use `corpora` instead. (optional)
    drive_id = 'drive_id_example' # str | ID of the shared drive to search. (optional)
    include_items_from_all_drives = True # bool | Whether both My Drive and shared drive items should be included in results. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only `published` is supported. (optional)
    include_team_drive_items = True # bool | Deprecated: Use `includeItemsFromAllDrives` instead. (optional)
    max_results = 56 # int | The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached. (optional)
    order_by = 'order_by_example' # str | A comma-separated list of sort keys. Valid keys are `createdDate`, `folder`, `lastViewedByMeDate`, `modifiedByMeDate`, `modifiedDate`, `quotaBytesUsed`, `recency`, `sharedWithMeDate`, `starred`, `title`, and `title_natural`. Each key sorts ascending by default, but may be reversed with the `desc` modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored. (optional)
    page_token = 'page_token_example' # str | Page token for files. (optional)
    projection = 'projection_example' # str | Deprecated: This parameter has no function. (optional)
    q = 'q_example' # str | Query string for searching files. (optional)
    spaces = 'spaces_example' # str | A comma-separated list of spaces to query. Supported values are `drive`, and `appDataFolder`. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    team_drive_id = 'team_drive_id_example' # str | Deprecated: Use `driveId` instead. (optional)

    try:
        api_response = api_instance.drive_files_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, corpora=corpora, corpus=corpus, drive_id=drive_id, include_items_from_all_drives=include_items_from_all_drives, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, include_team_drive_items=include_team_drive_items, max_results=max_results, order_by=order_by, page_token=page_token, projection=projection, q=q, spaces=spaces, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, team_drive_id=team_drive_id)
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
 **corpora** | **str**| Bodies of items (files/documents) to which the query applies. Supported bodies are &#x60;default&#x60;, &#x60;domain&#x60;, &#x60;drive&#x60; and &#x60;allDrives&#x60;. Prefer &#x60;default&#x60; or &#x60;drive&#x60; to &#x60;allDrives&#x60; for efficiency. | [optional] 
 **corpus** | **str**| Deprecated: The body of items (files/documents) to which the query applies. Use &#x60;corpora&#x60; instead. | [optional] 
 **drive_id** | **str**| ID of the shared drive to search. | [optional] 
 **include_items_from_all_drives** | **bool**| Whether both My Drive and shared drive items should be included in results. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#x60;published&#x60; is supported. | [optional] 
 **include_team_drive_items** | **bool**| Deprecated: Use &#x60;includeItemsFromAllDrives&#x60; instead. | [optional] 
 **max_results** | **int**| The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached. | [optional] 
 **order_by** | **str**| A comma-separated list of sort keys. Valid keys are &#x60;createdDate&#x60;, &#x60;folder&#x60;, &#x60;lastViewedByMeDate&#x60;, &#x60;modifiedByMeDate&#x60;, &#x60;modifiedDate&#x60;, &#x60;quotaBytesUsed&#x60;, &#x60;recency&#x60;, &#x60;sharedWithMeDate&#x60;, &#x60;starred&#x60;, &#x60;title&#x60;, and &#x60;title_natural&#x60;. Each key sorts ascending by default, but may be reversed with the &#x60;desc&#x60; modifier. Example usage: ?orderBy&#x3D;folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored. | [optional] 
 **page_token** | **str**| Page token for files. | [optional] 
 **projection** | **str**| Deprecated: This parameter has no function. | [optional] 
 **q** | **str**| Query string for searching files. | [optional] 
 **spaces** | **str**| A comma-separated list of spaces to query. Supported values are &#x60;drive&#x60;, and &#x60;appDataFolder&#x60;. | [optional] 
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

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    page_token = 'page_token_example' # str | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. (optional)

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
 **page_token** | **str**| The token for continuing a previous list request on the next page. This should be set to the value of &#x60;nextPageToken&#x60; from the previous response. | [optional] 

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

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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

# **drive_files_patch**
> File drive_files_patch(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, add_parents=add_parents, convert=convert, enforce_single_parent=enforce_single_parent, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, modified_date_behavior=modified_date_behavior, new_revision=new_revision, ocr=ocr, ocr_language=ocr_language, pinned=pinned, remove_parents=remove_parents, set_modified_date=set_modified_date, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, timed_text_language=timed_text_language, timed_text_track_name=timed_text_track_name, update_viewed_date=update_viewed_date, use_content_as_indexable_text=use_content_as_indexable_text, file=file)



Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file import File
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    file_id = 'file_id_example' # str | The ID of the file to update.
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
    add_parents = 'add_parents_example' # str | Comma-separated list of parent IDs to add. (optional)
    convert = True # bool | Deprecated: This parameter has no function. (optional)
    enforce_single_parent = True # bool | Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only `published` is supported. (optional)
    modified_date_behavior = 'modified_date_behavior_example' # str | Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`. (optional)
    new_revision = True # bool | Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045). Note that this field is ignored if there is no payload in the request. (optional)
    ocr = True # bool | Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. (optional)
    ocr_language = 'ocr_language_example' # str | If ocr is true, hints at the language to use. Valid values are BCP 47 codes. (optional)
    pinned = True # bool | Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. Note that this field is ignored if there is no payload in the request. (optional)
    remove_parents = 'remove_parents_example' # str | Comma-separated list of parent IDs to remove. (optional)
    set_modified_date = True # bool | Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    timed_text_language = 'timed_text_language_example' # str | The language of the timed text. (optional)
    timed_text_track_name = 'timed_text_track_name_example' # str | The timed text track name. (optional)
    update_viewed_date = True # bool | Whether to update the view date after successfully updating the file. (optional)
    use_content_as_indexable_text = True # bool | Whether to use the content as indexable text. (optional)
    file = '/path/to/file' # File |  (optional)

    try:
        api_response = api_instance.drive_files_patch(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, add_parents=add_parents, convert=convert, enforce_single_parent=enforce_single_parent, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, modified_date_behavior=modified_date_behavior, new_revision=new_revision, ocr=ocr, ocr_language=ocr_language, pinned=pinned, remove_parents=remove_parents, set_modified_date=set_modified_date, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, timed_text_language=timed_text_language, timed_text_track_name=timed_text_track_name, update_viewed_date=update_viewed_date, use_content_as_indexable_text=use_content_as_indexable_text, file=file)
        print("The response of FilesApi->drive_files_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID of the file to update. | 
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
 **add_parents** | **str**| Comma-separated list of parent IDs to add. | [optional] 
 **convert** | **bool**| Deprecated: This parameter has no function. | [optional] 
 **enforce_single_parent** | **bool**| Deprecated: Adding files to multiple folders is no longer supported. Use &#x60;shortcuts&#x60; instead. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#x60;published&#x60; is supported. | [optional] 
 **modified_date_behavior** | **str**| Determines the behavior in which &#x60;modifiedDate&#x60; is updated. This overrides &#x60;setModifiedDate&#x60;. | [optional] 
 **new_revision** | **bool**| Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045). Note that this field is ignored if there is no payload in the request. | [optional] 
 **ocr** | **bool**| Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. | [optional] 
 **ocr_language** | **str**| If ocr is true, hints at the language to use. Valid values are BCP 47 codes. | [optional] 
 **pinned** | **bool**| Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. Note that this field is ignored if there is no payload in the request. | [optional] 
 **remove_parents** | **str**| Comma-separated list of parent IDs to remove. | [optional] 
 **set_modified_date** | **bool**| Whether to set the modified date using the value supplied in the request body. Setting this field to &#x60;true&#x60; is equivalent to &#x60;modifiedDateBehavior&#x3D;fromBodyOrNow&#x60;, and &#x60;false&#x60; is equivalent to &#x60;modifiedDateBehavior&#x3D;now&#x60;. To prevent any changes to the modified date set &#x60;modifiedDateBehavior&#x3D;noChange&#x60;. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **timed_text_language** | **str**| The language of the timed text. | [optional] 
 **timed_text_track_name** | **str**| The timed text track name. | [optional] 
 **update_viewed_date** | **bool**| Whether to update the view date after successfully updating the file. | [optional] 
 **use_content_as_indexable_text** | **bool**| Whether to use the content as indexable text. | [optional] 
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

# **drive_files_touch**
> File drive_files_touch(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives)



Set the file's updated time to the current server time.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file import File
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    file_id = 'file_id_example' # str | The ID of the file to update.
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
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only `published` is supported. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)

    try:
        api_response = api_instance.drive_files_touch(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives)
        print("The response of FilesApi->drive_files_touch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_touch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID of the file to update. | 
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
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#x60;published&#x60; is supported. | [optional] 
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

# **drive_files_trash**
> File drive_files_trash(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives)



Moves a file to the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file import File
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    file_id = 'file_id_example' # str | The ID of the file to trash.
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
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only `published` is supported. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)

    try:
        api_response = api_instance.drive_files_trash(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives)
        print("The response of FilesApi->drive_files_trash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_trash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID of the file to trash. | 
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
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#x60;published&#x60; is supported. | [optional] 
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

# **drive_files_untrash**
> File drive_files_untrash(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives)



Restores a file from the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file import File
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    file_id = 'file_id_example' # str | The ID of the file to untrash.
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
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only `published` is supported. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)

    try:
        api_response = api_instance.drive_files_untrash(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives)
        print("The response of FilesApi->drive_files_untrash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_untrash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID of the file to untrash. | 
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
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#x60;published&#x60; is supported. | [optional] 
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

# **drive_files_update**
> File drive_files_update(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, add_parents=add_parents, convert=convert, enforce_single_parent=enforce_single_parent, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, modified_date_behavior=modified_date_behavior, new_revision=new_revision, ocr=ocr, ocr_language=ocr_language, pinned=pinned, remove_parents=remove_parents, set_modified_date=set_modified_date, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, timed_text_language=timed_text_language, timed_text_track_name=timed_text_track_name, update_viewed_date=update_viewed_date, use_content_as_indexable_text=use_content_as_indexable_text, file=file)



 Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.file import File
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    file_id = 'file_id_example' # str | The ID of the file to update.
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
    add_parents = 'add_parents_example' # str | Comma-separated list of parent IDs to add. (optional)
    convert = True # bool | Deprecated: This parameter has no function. (optional)
    enforce_single_parent = True # bool | Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only `published` is supported. (optional)
    modified_date_behavior = 'modified_date_behavior_example' # str | Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`. (optional)
    new_revision = True # bool | Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045). (optional)
    ocr = True # bool | Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. (optional)
    ocr_language = 'ocr_language_example' # str | If ocr is true, hints at the language to use. Valid values are BCP 47 codes. (optional)
    pinned = True # bool | Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. (optional)
    remove_parents = 'remove_parents_example' # str | Comma-separated list of parent IDs to remove. (optional)
    set_modified_date = True # bool | Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    timed_text_language = 'timed_text_language_example' # str | The language of the timed text. (optional)
    timed_text_track_name = 'timed_text_track_name_example' # str | The timed text track name. (optional)
    update_viewed_date = True # bool | Whether to update the view date after successfully updating the file. (optional)
    use_content_as_indexable_text = True # bool | Whether to use the content as indexable text. (optional)
    file = '/path/to/file' # File |  (optional)

    try:
        api_response = api_instance.drive_files_update(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, add_parents=add_parents, convert=convert, enforce_single_parent=enforce_single_parent, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, modified_date_behavior=modified_date_behavior, new_revision=new_revision, ocr=ocr, ocr_language=ocr_language, pinned=pinned, remove_parents=remove_parents, set_modified_date=set_modified_date, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, timed_text_language=timed_text_language, timed_text_track_name=timed_text_track_name, update_viewed_date=update_viewed_date, use_content_as_indexable_text=use_content_as_indexable_text, file=file)
        print("The response of FilesApi->drive_files_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID of the file to update. | 
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
 **add_parents** | **str**| Comma-separated list of parent IDs to add. | [optional] 
 **convert** | **bool**| Deprecated: This parameter has no function. | [optional] 
 **enforce_single_parent** | **bool**| Deprecated: Adding files to multiple folders is no longer supported. Use &#x60;shortcuts&#x60; instead. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#x60;published&#x60; is supported. | [optional] 
 **modified_date_behavior** | **str**| Determines the behavior in which &#x60;modifiedDate&#x60; is updated. This overrides &#x60;setModifiedDate&#x60;. | [optional] 
 **new_revision** | **bool**| Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045). | [optional] 
 **ocr** | **bool**| Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. | [optional] 
 **ocr_language** | **str**| If ocr is true, hints at the language to use. Valid values are BCP 47 codes. | [optional] 
 **pinned** | **bool**| Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. | [optional] 
 **remove_parents** | **str**| Comma-separated list of parent IDs to remove. | [optional] 
 **set_modified_date** | **bool**| Whether to set the modified date using the value supplied in the request body. Setting this field to &#x60;true&#x60; is equivalent to &#x60;modifiedDateBehavior&#x3D;fromBodyOrNow&#x60;, and &#x60;false&#x60; is equivalent to &#x60;modifiedDateBehavior&#x3D;now&#x60;. To prevent any changes to the modified date set &#x60;modifiedDateBehavior&#x3D;noChange&#x60;. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **timed_text_language** | **str**| The language of the timed text. | [optional] 
 **timed_text_track_name** | **str**| The timed text track name. | [optional] 
 **update_viewed_date** | **bool**| Whether to update the view date after successfully updating the file. | [optional] 
 **use_content_as_indexable_text** | **bool**| Whether to use the content as indexable text. | [optional] 
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
> Channel drive_files_watch(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, acknowledge_abuse=acknowledge_abuse, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, projection=projection, revision_id=revision_id, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, update_viewed_date=update_viewed_date, channel=channel)



Subscribes to changes to a file.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.channel import Channel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/drive/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/drive/v2"
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
    file_id = 'file_id_example' # str | The ID for the file in question.
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
    acknowledge_abuse = True # bool | Whether the user is acknowledging the risk of downloading known malware or other abusive files. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only `published` is supported. (optional)
    projection = 'projection_example' # str | Deprecated: This parameter has no function. (optional)
    revision_id = 'revision_id_example' # str | Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    update_viewed_date = True # bool | Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body. (optional)
    channel = openapi_client.Channel() # Channel |  (optional)

    try:
        api_response = api_instance.drive_files_watch(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, acknowledge_abuse=acknowledge_abuse, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, projection=projection, revision_id=revision_id, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, update_viewed_date=update_viewed_date, channel=channel)
        print("The response of FilesApi->drive_files_watch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->drive_files_watch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID for the file in question. | 
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
 **acknowledge_abuse** | **bool**| Whether the user is acknowledging the risk of downloading known malware or other abusive files. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#x60;published&#x60; is supported. | [optional] 
 **projection** | **str**| Deprecated: This parameter has no function. | [optional] 
 **revision_id** | **str**| Specifies the Revision ID that should be downloaded. Ignored unless alt&#x3D;media is specified. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **update_viewed_date** | **bool**| Deprecated: Use files.update with modifiedDateBehavior&#x3D;noChange, updateViewedDate&#x3D;true and an empty request body. | [optional] 
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

