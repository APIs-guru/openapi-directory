# openapi_client.ChangesApi

All URIs are relative to *https://www.googleapis.com/drive/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**drive_changes_get**](ChangesApi.md#drive_changes_get) | **GET** /changes/{changeId} | 
[**drive_changes_get_start_page_token**](ChangesApi.md#drive_changes_get_start_page_token) | **GET** /changes/startPageToken | 
[**drive_changes_list**](ChangesApi.md#drive_changes_list) | **GET** /changes | 
[**drive_changes_watch**](ChangesApi.md#drive_changes_watch) | **POST** /changes/watch | 


# **drive_changes_get**
> Change drive_changes_get(change_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, drive_id=drive_id, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, team_drive_id=team_drive_id)



Deprecated: Use `changes.getStartPageToken` and `changes.list` to retrieve recent changes.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.change import Change
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
    api_instance = openapi_client.ChangesApi(api_client)
    change_id = 'change_id_example' # str | The ID of the change.
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
    drive_id = 'drive_id_example' # str | The shared drive from which the change will be returned. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    team_drive_id = 'team_drive_id_example' # str | Deprecated: Use `driveId` instead. (optional)

    try:
        api_response = api_instance.drive_changes_get(change_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, drive_id=drive_id, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, team_drive_id=team_drive_id)
        print("The response of ChangesApi->drive_changes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChangesApi->drive_changes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **change_id** | **str**| The ID of the change. | 
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
 **drive_id** | **str**| The shared drive from which the change will be returned. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **team_drive_id** | **str**| Deprecated: Use &#x60;driveId&#x60; instead. | [optional] 

### Return type

[**Change**](Change.md)

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

# **drive_changes_get_start_page_token**
> StartPageToken drive_changes_get_start_page_token(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, drive_id=drive_id, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, team_drive_id=team_drive_id)



Gets the starting pageToken for listing future changes.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.start_page_token import StartPageToken
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
    api_instance = openapi_client.ChangesApi(api_client)
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
    drive_id = 'drive_id_example' # str | The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    team_drive_id = 'team_drive_id_example' # str | Deprecated: Use `driveId` instead. (optional)

    try:
        api_response = api_instance.drive_changes_get_start_page_token(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, drive_id=drive_id, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, team_drive_id=team_drive_id)
        print("The response of ChangesApi->drive_changes_get_start_page_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChangesApi->drive_changes_get_start_page_token: %s\n" % e)
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
 **drive_id** | **str**| The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **team_drive_id** | **str**| Deprecated: Use &#x60;driveId&#x60; instead. | [optional] 

### Return type

[**StartPageToken**](StartPageToken.md)

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

# **drive_changes_list**
> ChangeList drive_changes_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, drive_id=drive_id, include_corpus_removals=include_corpus_removals, include_deleted=include_deleted, include_items_from_all_drives=include_items_from_all_drives, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, include_subscribed=include_subscribed, include_team_drive_items=include_team_drive_items, max_results=max_results, page_token=page_token, spaces=spaces, start_change_id=start_change_id, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, team_drive_id=team_drive_id)



Lists the changes for a user or shared drive.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.change_list import ChangeList
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
    api_instance = openapi_client.ChangesApi(api_client)
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
    drive_id = 'drive_id_example' # str | The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. (optional)
    include_corpus_removals = True # bool | Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. (optional)
    include_deleted = True # bool | Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. (optional)
    include_items_from_all_drives = True # bool | Whether both My Drive and shared drive items should be included in results. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only `published` is supported. (optional)
    include_subscribed = True # bool | Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result. (optional)
    include_team_drive_items = True # bool | Deprecated: Use `includeItemsFromAllDrives` instead. (optional)
    max_results = 56 # int | Maximum number of changes to return. (optional)
    page_token = 'page_token_example' # str | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method. (optional)
    spaces = 'spaces_example' # str | A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`. (optional)
    start_change_id = 'start_change_id_example' # str | Deprecated: Use `pageToken` instead. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    team_drive_id = 'team_drive_id_example' # str | Deprecated: Use `driveId` instead. (optional)

    try:
        api_response = api_instance.drive_changes_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, drive_id=drive_id, include_corpus_removals=include_corpus_removals, include_deleted=include_deleted, include_items_from_all_drives=include_items_from_all_drives, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, include_subscribed=include_subscribed, include_team_drive_items=include_team_drive_items, max_results=max_results, page_token=page_token, spaces=spaces, start_change_id=start_change_id, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, team_drive_id=team_drive_id)
        print("The response of ChangesApi->drive_changes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChangesApi->drive_changes_list: %s\n" % e)
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
 **drive_id** | **str**| The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. | [optional] 
 **include_corpus_removals** | **bool**| Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. | [optional] 
 **include_deleted** | **bool**| Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. | [optional] 
 **include_items_from_all_drives** | **bool**| Whether both My Drive and shared drive items should be included in results. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#x60;published&#x60; is supported. | [optional] 
 **include_subscribed** | **bool**| Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result. | [optional] 
 **include_team_drive_items** | **bool**| Deprecated: Use &#x60;includeItemsFromAllDrives&#x60; instead. | [optional] 
 **max_results** | **int**| Maximum number of changes to return. | [optional] 
 **page_token** | **str**| The token for continuing a previous list request on the next page. This should be set to the value of &#x60;nextPageToken&#x60; from the previous response or to the response from the getStartPageToken method. | [optional] 
 **spaces** | **str**| A comma-separated list of spaces to query. Supported values are &#x60;drive&#x60;, &#x60;appDataFolder&#x60; and &#x60;photos&#x60;. | [optional] 
 **start_change_id** | **str**| Deprecated: Use &#x60;pageToken&#x60; instead. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **team_drive_id** | **str**| Deprecated: Use &#x60;driveId&#x60; instead. | [optional] 

### Return type

[**ChangeList**](ChangeList.md)

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

# **drive_changes_watch**
> Channel drive_changes_watch(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, drive_id=drive_id, include_corpus_removals=include_corpus_removals, include_deleted=include_deleted, include_items_from_all_drives=include_items_from_all_drives, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, include_subscribed=include_subscribed, include_team_drive_items=include_team_drive_items, max_results=max_results, page_token=page_token, spaces=spaces, start_change_id=start_change_id, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, team_drive_id=team_drive_id, channel=channel)



Subscribe to changes for a user.

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
    api_instance = openapi_client.ChangesApi(api_client)
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
    drive_id = 'drive_id_example' # str | The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. (optional)
    include_corpus_removals = True # bool | Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. (optional)
    include_deleted = True # bool | Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. (optional)
    include_items_from_all_drives = True # bool | Whether both My Drive and shared drive items should be included in results. (optional)
    include_labels = 'include_labels_example' # str | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. (optional)
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only `published` is supported. (optional)
    include_subscribed = True # bool | Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result. (optional)
    include_team_drive_items = True # bool | Deprecated: Use `includeItemsFromAllDrives` instead. (optional)
    max_results = 56 # int | Maximum number of changes to return. (optional)
    page_token = 'page_token_example' # str | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method. (optional)
    spaces = 'spaces_example' # str | A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`. (optional)
    start_change_id = 'start_change_id_example' # str | Deprecated: Use `pageToken` instead. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    team_drive_id = 'team_drive_id_example' # str | Deprecated: Use `driveId` instead. (optional)
    channel = openapi_client.Channel() # Channel |  (optional)

    try:
        api_response = api_instance.drive_changes_watch(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, drive_id=drive_id, include_corpus_removals=include_corpus_removals, include_deleted=include_deleted, include_items_from_all_drives=include_items_from_all_drives, include_labels=include_labels, include_permissions_for_view=include_permissions_for_view, include_subscribed=include_subscribed, include_team_drive_items=include_team_drive_items, max_results=max_results, page_token=page_token, spaces=spaces, start_change_id=start_change_id, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, team_drive_id=team_drive_id, channel=channel)
        print("The response of ChangesApi->drive_changes_watch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChangesApi->drive_changes_watch: %s\n" % e)
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
 **drive_id** | **str**| The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. | [optional] 
 **include_corpus_removals** | **bool**| Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. | [optional] 
 **include_deleted** | **bool**| Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. | [optional] 
 **include_items_from_all_drives** | **bool**| Whether both My Drive and shared drive items should be included in results. | [optional] 
 **include_labels** | **str**| A comma-separated list of IDs of labels to include in the &#x60;labelInfo&#x60; part of the response. | [optional] 
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#x60;published&#x60; is supported. | [optional] 
 **include_subscribed** | **bool**| Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result. | [optional] 
 **include_team_drive_items** | **bool**| Deprecated: Use &#x60;includeItemsFromAllDrives&#x60; instead. | [optional] 
 **max_results** | **int**| Maximum number of changes to return. | [optional] 
 **page_token** | **str**| The token for continuing a previous list request on the next page. This should be set to the value of &#x60;nextPageToken&#x60; from the previous response or to the response from the getStartPageToken method. | [optional] 
 **spaces** | **str**| A comma-separated list of spaces to query. Supported values are &#x60;drive&#x60;, &#x60;appDataFolder&#x60; and &#x60;photos&#x60;. | [optional] 
 **start_change_id** | **str**| Deprecated: Use &#x60;pageToken&#x60; instead. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **team_drive_id** | **str**| Deprecated: Use &#x60;driveId&#x60; instead. | [optional] 
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

