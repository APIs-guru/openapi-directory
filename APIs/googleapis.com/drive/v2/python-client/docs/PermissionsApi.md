# openapi_client.PermissionsApi

All URIs are relative to *https://www.googleapis.com/drive/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**drive_permissions_delete**](PermissionsApi.md#drive_permissions_delete) | **DELETE** /files/{fileId}/permissions/{permissionId} | 
[**drive_permissions_get**](PermissionsApi.md#drive_permissions_get) | **GET** /files/{fileId}/permissions/{permissionId} | 
[**drive_permissions_get_id_for_email**](PermissionsApi.md#drive_permissions_get_id_for_email) | **GET** /permissionIds/{email} | 
[**drive_permissions_insert**](PermissionsApi.md#drive_permissions_insert) | **POST** /files/{fileId}/permissions | 
[**drive_permissions_list**](PermissionsApi.md#drive_permissions_list) | **GET** /files/{fileId}/permissions | 
[**drive_permissions_patch**](PermissionsApi.md#drive_permissions_patch) | **PATCH** /files/{fileId}/permissions/{permissionId} | 
[**drive_permissions_update**](PermissionsApi.md#drive_permissions_update) | **PUT** /files/{fileId}/permissions/{permissionId} | 


# **drive_permissions_delete**
> drive_permissions_delete(file_id, permission_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, use_domain_admin_access=use_domain_admin_access)



Deletes a permission from a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

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
    api_instance = openapi_client.PermissionsApi(api_client)
    file_id = 'file_id_example' # str | The ID for the file or shared drive.
    permission_id = 'permission_id_example' # str | The ID for the permission.
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
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    use_domain_admin_access = True # bool | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. (optional)

    try:
        api_instance.drive_permissions_delete(file_id, permission_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, use_domain_admin_access=use_domain_admin_access)
    except Exception as e:
        print("Exception when calling PermissionsApi->drive_permissions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID for the file or shared drive. | 
 **permission_id** | **str**| The ID for the permission. | 
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
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **use_domain_admin_access** | **bool**| Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. | [optional] 

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

# **drive_permissions_get**
> Permission drive_permissions_get(file_id, permission_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, use_domain_admin_access=use_domain_admin_access)



Gets a permission by ID.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.permission import Permission
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
    api_instance = openapi_client.PermissionsApi(api_client)
    file_id = 'file_id_example' # str | The ID for the file or shared drive.
    permission_id = 'permission_id_example' # str | The ID for the permission.
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
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    use_domain_admin_access = True # bool | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. (optional)

    try:
        api_response = api_instance.drive_permissions_get(file_id, permission_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, use_domain_admin_access=use_domain_admin_access)
        print("The response of PermissionsApi->drive_permissions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->drive_permissions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID for the file or shared drive. | 
 **permission_id** | **str**| The ID for the permission. | 
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
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **use_domain_admin_access** | **bool**| Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. | [optional] 

### Return type

[**Permission**](Permission.md)

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

# **drive_permissions_get_id_for_email**
> PermissionId drive_permissions_get_id_for_email(email, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Returns the permission ID for an email address.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.permission_id import PermissionId
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
    api_instance = openapi_client.PermissionsApi(api_client)
    email = 'email_example' # str | The email address for which to return a permission ID
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
        api_response = api_instance.drive_permissions_get_id_for_email(email, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of PermissionsApi->drive_permissions_get_id_for_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->drive_permissions_get_id_for_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**| The email address for which to return a permission ID | 
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

[**PermissionId**](PermissionId.md)

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

# **drive_permissions_insert**
> Permission drive_permissions_insert(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, email_message=email_message, enforce_single_parent=enforce_single_parent, move_to_new_owners_root=move_to_new_owners_root, send_notification_emails=send_notification_emails, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, use_domain_admin_access=use_domain_admin_access, permission=permission)



Inserts a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.permission import Permission
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
    api_instance = openapi_client.PermissionsApi(api_client)
    file_id = 'file_id_example' # str | The ID for the file or shared drive.
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
    email_message = 'email_message_example' # str | A plain text custom message to include in notification emails. (optional)
    enforce_single_parent = True # bool | Deprecated: See `moveToNewOwnersRoot` for details. (optional)
    move_to_new_owners_root = True # bool | This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed. (optional)
    send_notification_emails = True # bool | Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the `role` is `owner`. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    use_domain_admin_access = True # bool | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. (optional)
    permission = openapi_client.Permission() # Permission |  (optional)

    try:
        api_response = api_instance.drive_permissions_insert(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, email_message=email_message, enforce_single_parent=enforce_single_parent, move_to_new_owners_root=move_to_new_owners_root, send_notification_emails=send_notification_emails, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, use_domain_admin_access=use_domain_admin_access, permission=permission)
        print("The response of PermissionsApi->drive_permissions_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->drive_permissions_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID for the file or shared drive. | 
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
 **email_message** | **str**| A plain text custom message to include in notification emails. | [optional] 
 **enforce_single_parent** | **bool**| Deprecated: See &#x60;moveToNewOwnersRoot&#x60; for details. | [optional] 
 **move_to_new_owners_root** | **bool**| This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to &#x60;true&#x60;, the item will be moved to the new owner&#39;s My Drive root folder and all prior parents removed. If set to &#x60;false&#x60;, parents are not changed. | [optional] 
 **send_notification_emails** | **bool**| Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the &#x60;role&#x60; is &#x60;owner&#x60;. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **use_domain_admin_access** | **bool**| Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. | [optional] 
 **permission** | [**Permission**](Permission.md)|  | [optional] 

### Return type

[**Permission**](Permission.md)

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

# **drive_permissions_list**
> PermissionList drive_permissions_list(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, include_permissions_for_view=include_permissions_for_view, max_results=max_results, page_token=page_token, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, use_domain_admin_access=use_domain_admin_access)



Lists a file's or shared drive's permissions.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.permission_list import PermissionList
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
    api_instance = openapi_client.PermissionsApi(api_client)
    file_id = 'file_id_example' # str | The ID for the file or shared drive.
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
    include_permissions_for_view = 'include_permissions_for_view_example' # str | Specifies which additional view's permissions to include in the response. Only `published` is supported. (optional)
    max_results = 56 # int | The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned. (optional)
    page_token = 'page_token_example' # str | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    use_domain_admin_access = True # bool | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. (optional)

    try:
        api_response = api_instance.drive_permissions_list(file_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, include_permissions_for_view=include_permissions_for_view, max_results=max_results, page_token=page_token, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, use_domain_admin_access=use_domain_admin_access)
        print("The response of PermissionsApi->drive_permissions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->drive_permissions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID for the file or shared drive. | 
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
 **include_permissions_for_view** | **str**| Specifies which additional view&#39;s permissions to include in the response. Only &#x60;published&#x60; is supported. | [optional] 
 **max_results** | **int**| The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned. | [optional] 
 **page_token** | **str**| The token for continuing a previous list request on the next page. This should be set to the value of &#x60;nextPageToken&#x60; from the previous response. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **use_domain_admin_access** | **bool**| Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. | [optional] 

### Return type

[**PermissionList**](PermissionList.md)

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

# **drive_permissions_patch**
> Permission drive_permissions_patch(file_id, permission_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, remove_expiration=remove_expiration, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, transfer_ownership=transfer_ownership, use_domain_admin_access=use_domain_admin_access, permission=permission)



Updates a permission using patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.permission import Permission
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
    api_instance = openapi_client.PermissionsApi(api_client)
    file_id = 'file_id_example' # str | The ID for the file or shared drive.
    permission_id = 'permission_id_example' # str | The ID for the permission.
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
    remove_expiration = True # bool | Whether to remove the expiration date. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    transfer_ownership = True # bool | Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`. (optional)
    use_domain_admin_access = True # bool | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. (optional)
    permission = openapi_client.Permission() # Permission |  (optional)

    try:
        api_response = api_instance.drive_permissions_patch(file_id, permission_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, remove_expiration=remove_expiration, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, transfer_ownership=transfer_ownership, use_domain_admin_access=use_domain_admin_access, permission=permission)
        print("The response of PermissionsApi->drive_permissions_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->drive_permissions_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID for the file or shared drive. | 
 **permission_id** | **str**| The ID for the permission. | 
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
 **remove_expiration** | **bool**| Whether to remove the expiration date. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **transfer_ownership** | **bool**| Whether changing a role to &#x60;owner&#x60; downgrades the current owners to writers. Does nothing if the specified role is not &#x60;owner&#x60;. | [optional] 
 **use_domain_admin_access** | **bool**| Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. | [optional] 
 **permission** | [**Permission**](Permission.md)|  | [optional] 

### Return type

[**Permission**](Permission.md)

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

# **drive_permissions_update**
> Permission drive_permissions_update(file_id, permission_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, remove_expiration=remove_expiration, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, transfer_ownership=transfer_ownership, use_domain_admin_access=use_domain_admin_access, permission=permission)



Updates a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.permission import Permission
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
    api_instance = openapi_client.PermissionsApi(api_client)
    file_id = 'file_id_example' # str | The ID for the file or shared drive.
    permission_id = 'permission_id_example' # str | The ID for the permission.
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
    remove_expiration = True # bool | Whether to remove the expiration date. (optional)
    supports_all_drives = True # bool | Whether the requesting application supports both My Drives and shared drives. (optional)
    supports_team_drives = True # bool | Deprecated: Use `supportsAllDrives` instead. (optional)
    transfer_ownership = True # bool | Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`. (optional)
    use_domain_admin_access = True # bool | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. (optional)
    permission = openapi_client.Permission() # Permission |  (optional)

    try:
        api_response = api_instance.drive_permissions_update(file_id, permission_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, remove_expiration=remove_expiration, supports_all_drives=supports_all_drives, supports_team_drives=supports_team_drives, transfer_ownership=transfer_ownership, use_domain_admin_access=use_domain_admin_access, permission=permission)
        print("The response of PermissionsApi->drive_permissions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->drive_permissions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The ID for the file or shared drive. | 
 **permission_id** | **str**| The ID for the permission. | 
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
 **remove_expiration** | **bool**| Whether to remove the expiration date. | [optional] 
 **supports_all_drives** | **bool**| Whether the requesting application supports both My Drives and shared drives. | [optional] 
 **supports_team_drives** | **bool**| Deprecated: Use &#x60;supportsAllDrives&#x60; instead. | [optional] 
 **transfer_ownership** | **bool**| Whether changing a role to &#x60;owner&#x60; downgrades the current owners to writers. Does nothing if the specified role is not &#x60;owner&#x60;. | [optional] 
 **use_domain_admin_access** | **bool**| Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. | [optional] 
 **permission** | [**Permission**](Permission.md)|  | [optional] 

### Return type

[**Permission**](Permission.md)

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

