# openapi_client.SpacesApi

All URIs are relative to *https://chat.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chat_spaces_complete_import**](SpacesApi.md#chat_spaces_complete_import) | **POST** /v1/{name}:completeImport | 
[**chat_spaces_create**](SpacesApi.md#chat_spaces_create) | **POST** /v1/spaces | 
[**chat_spaces_find_direct_message**](SpacesApi.md#chat_spaces_find_direct_message) | **GET** /v1/spaces:findDirectMessage | 
[**chat_spaces_list**](SpacesApi.md#chat_spaces_list) | **GET** /v1/spaces | 
[**chat_spaces_members_create**](SpacesApi.md#chat_spaces_members_create) | **POST** /v1/{parent}/members | 
[**chat_spaces_members_list**](SpacesApi.md#chat_spaces_members_list) | **GET** /v1/{parent}/members | 
[**chat_spaces_messages_attachments_get**](SpacesApi.md#chat_spaces_messages_attachments_get) | **GET** /v1/{name} | 
[**chat_spaces_messages_create**](SpacesApi.md#chat_spaces_messages_create) | **POST** /v1/{parent}/messages | 
[**chat_spaces_messages_list**](SpacesApi.md#chat_spaces_messages_list) | **GET** /v1/{parent}/messages | 
[**chat_spaces_messages_patch**](SpacesApi.md#chat_spaces_messages_patch) | **PATCH** /v1/{name} | 
[**chat_spaces_messages_reactions_create**](SpacesApi.md#chat_spaces_messages_reactions_create) | **POST** /v1/{parent}/reactions | 
[**chat_spaces_messages_reactions_delete**](SpacesApi.md#chat_spaces_messages_reactions_delete) | **DELETE** /v1/{name} | 
[**chat_spaces_messages_reactions_list**](SpacesApi.md#chat_spaces_messages_reactions_list) | **GET** /v1/{parent}/reactions | 
[**chat_spaces_messages_update**](SpacesApi.md#chat_spaces_messages_update) | **PUT** /v1/{name} | 
[**chat_spaces_setup**](SpacesApi.md#chat_spaces_setup) | **POST** /v1/spaces:setup | 


# **chat_spaces_complete_import**
> CompleteImportSpaceResponse chat_spaces_complete_import(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)



Completes the [import process](https://developers.google.com/chat/api/guides/import-data) for the specified space and makes it visible to users. Requires app authentication and domain-wide delegation. For more information, see [Authorize Google Chat apps to import data](https://developers.google.com/chat/api/guides/authorize-import).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.complete_import_space_response import CompleteImportSpaceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
    name = 'name_example' # str | Required. Resource name of the import mode space. Format: `spaces/{space}`
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
    body = None # object |  (optional)

    try:
        api_response = api_instance.chat_spaces_complete_import(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)
        print("The response of SpacesApi->chat_spaces_complete_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_complete_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. Resource name of the import mode space. Format: &#x60;spaces/{space}&#x60; | 
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
 **body** | **object**|  | [optional] 

### Return type

[**CompleteImportSpaceResponse**](CompleteImportSpaceResponse.md)

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

# **chat_spaces_create**
> Space chat_spaces_create(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, request_id=request_id, space=space)



Creates a named space. Spaces grouped by topics aren't supported. For an example, see [Create a space](https://developers.google.com/chat/api/guides/v1/spaces/create). If you receive the error message `ALREADY_EXISTS` when creating a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.space import Space
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
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
    request_id = 'request_id_example' # str | Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error. (optional)
    space = openapi_client.Space() # Space |  (optional)

    try:
        api_response = api_instance.chat_spaces_create(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, request_id=request_id, space=space)
        print("The response of SpacesApi->chat_spaces_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_create: %s\n" % e)
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
 **request_id** | **str**| Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error. | [optional] 
 **space** | [**Space**](Space.md)|  | [optional] 

### Return type

[**Space**](Space.md)

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

# **chat_spaces_find_direct_message**
> Space chat_spaces_find_direct_message(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, name=name)



Returns the existing direct message with the specified user. If no direct message space is found, returns a `404 NOT_FOUND` error. For an example, see [Find a direct message](/chat/api/guides/v1/spaces/find-direct-message). With [user authentication](https://developers.google.com/chat/api/guides/auth/users), returns the direct message space between the specified user and the authenticated user. With [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts), returns the direct message space between the specified user and the calling Chat app. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users) or [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.space import Space
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
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
    name = 'name_example' # str | Required. Resource name of the user to find direct message with. Format: `users/{user}`, where `{user}` is either the `id` for the [person](https://developers.google.com/people/api/rest/v1/people) from the People API, or the `id` for the [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Directory API. For example, if the People API profile ID is `123456789`, you can find a direct message with that person by using `users/123456789` as the `name`. When [authenticated as a user](https://developers.google.com/chat/api/guides/auth/users), you can use the email as an alias for `{user}`. For example, `users/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user. (optional)

    try:
        api_response = api_instance.chat_spaces_find_direct_message(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, name=name)
        print("The response of SpacesApi->chat_spaces_find_direct_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_find_direct_message: %s\n" % e)
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
 **name** | **str**| Required. Resource name of the user to find direct message with. Format: &#x60;users/{user}&#x60;, where &#x60;{user}&#x60; is either the &#x60;id&#x60; for the [person](https://developers.google.com/people/api/rest/v1/people) from the People API, or the &#x60;id&#x60; for the [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Directory API. For example, if the People API profile ID is &#x60;123456789&#x60;, you can find a direct message with that person by using &#x60;users/123456789&#x60; as the &#x60;name&#x60;. When [authenticated as a user](https://developers.google.com/chat/api/guides/auth/users), you can use the email as an alias for &#x60;{user}&#x60;. For example, &#x60;users/example@gmail.com&#x60; where &#x60;example@gmail.com&#x60; is the email of the Google Chat user. | [optional] 

### Return type

[**Space**](Space.md)

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

# **chat_spaces_list**
> ListSpacesResponse chat_spaces_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)



Lists spaces the caller is a member of. Group chats and DMs aren't listed until the first message is sent. For an example, see [List spaces](https://developers.google.com/chat/api/guides/v1/spaces/list). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users). Lists spaces visible to the caller or authenticated user. Group chats and DMs aren't listed until the first message is sent.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_spaces_response import ListSpacesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
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
    filter = 'filter_example' # str | Optional. A query filter. You can filter spaces by the space type ([`space_type`](https://developers.google.com/chat/api/reference/rest/v1/spaces#spacetype)). To filter by space type, you must specify valid enum value, such as `SPACE` or `GROUP_CHAT` (the `space_type` can't be `SPACE_TYPE_UNSPECIFIED`). To query for multiple space types, use the `OR` operator. For example, the following queries are valid: ``` space_type = \"SPACE\" spaceType = \"GROUP_CHAT\" OR spaceType = \"DIRECT_MESSAGE\" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error. (optional)
    page_size = 56 # int | Optional. The maximum number of spaces to return. The service might return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1,000. If you use a value more than 1,000, it's automatically changed to 1,000. Negative values return an `INVALID_ARGUMENT` error. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous list spaces call. Provide this parameter to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results. (optional)

    try:
        api_response = api_instance.chat_spaces_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)
        print("The response of SpacesApi->chat_spaces_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_list: %s\n" % e)
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
 **filter** | **str**| Optional. A query filter. You can filter spaces by the space type ([&#x60;space_type&#x60;](https://developers.google.com/chat/api/reference/rest/v1/spaces#spacetype)). To filter by space type, you must specify valid enum value, such as &#x60;SPACE&#x60; or &#x60;GROUP_CHAT&#x60; (the &#x60;space_type&#x60; can&#39;t be &#x60;SPACE_TYPE_UNSPECIFIED&#x60;). To query for multiple space types, use the &#x60;OR&#x60; operator. For example, the following queries are valid: &#x60;&#x60;&#x60; space_type &#x3D; \&quot;SPACE\&quot; spaceType &#x3D; \&quot;GROUP_CHAT\&quot; OR spaceType &#x3D; \&quot;DIRECT_MESSAGE\&quot; &#x60;&#x60;&#x60; Invalid queries are rejected by the server with an &#x60;INVALID_ARGUMENT&#x60; error. | [optional] 
 **page_size** | **int**| Optional. The maximum number of spaces to return. The service might return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1,000. If you use a value more than 1,000, it&#39;s automatically changed to 1,000. Negative values return an &#x60;INVALID_ARGUMENT&#x60; error. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous list spaces call. Provide this parameter to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results. | [optional] 

### Return type

[**ListSpacesResponse**](ListSpacesResponse.md)

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

# **chat_spaces_members_create**
> Membership chat_spaces_members_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, membership=membership)



Creates a human membership or app membership for the calling app. Creating memberships for other apps isn't supported. For an example, see [ Create a membership](https://developers.google.com/chat/api/guides/v1/members/create). When creating a membership, if the specified member has their auto-accept policy turned off, then they're invited, and must accept the space invitation before joining. Otherwise, creating a membership adds the member directly to the specified space. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users). To specify the member to add, set the `membership.member.name` in the `CreateMembershipRequest`: - To add the calling app to a space or a direct message between two human users, use `users/app`. Unable to add other apps to the space. - To add a human user, use `users/{user}`, where `{user}` can be the email address for the user. For users in the same Workspace organization `{user}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.membership import Membership
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
    parent = 'parent_example' # str | Required. The resource name of the space for which to create the membership. Format: spaces/{space}
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
    membership = openapi_client.Membership() # Membership |  (optional)

    try:
        api_response = api_instance.chat_spaces_members_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, membership=membership)
        print("The response of SpacesApi->chat_spaces_members_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_members_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The resource name of the space for which to create the membership. Format: spaces/{space} | 
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
 **membership** | [**Membership**](Membership.md)|  | [optional] 

### Return type

[**Membership**](Membership.md)

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

# **chat_spaces_members_list**
> ListMembershipsResponse chat_spaces_members_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token, show_groups=show_groups, show_invited=show_invited)



Lists memberships in a space. For an example, see [List memberships](https://developers.google.com/chat/api/guides/v1/members/list). Listing memberships with [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own. Listing memberships with [User authentication](https://developers.google.com/chat/api/guides/auth/users) lists memberships in spaces that the authenticated user has access to. Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_memberships_response import ListMembershipsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
    parent = 'parent_example' # str | Required. The resource name of the space for which to fetch a membership list. Format: spaces/{space}
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
    filter = 'filter_example' # str | Optional. A query filter. You can filter memberships by a member's role ([`role`](https://developers.google.com/chat/api/reference/rest/v1/spaces.members#membershiprole)) and type ([`member.type`](https://developers.google.com/chat/api/reference/rest/v1/User#type)). To filter by role, set `role` to `ROLE_MEMBER` or `ROLE_MANAGER`. To filter by type, set `member.type` to `HUMAN` or `BOT`. To filter by both role and type, use the `AND` operator. To filter by either role or type, use the `OR` operator. For example, the following queries are valid: ``` role = \"ROLE_MANAGER\" OR role = \"ROLE_MEMBER\" member.type = \"HUMAN\" AND role = \"ROLE_MANAGER\" ``` The following queries are invalid: ``` member.type = \"HUMAN\" AND member.type = \"BOT\" role = \"ROLE_MANAGER\" AND role = \"ROLE_MEMBER\" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error. (optional)
    page_size = 56 # int | Optional. The maximum number of memberships to return. The service might return fewer than this value. If unspecified, at most 100 memberships are returned. The maximum value is 1,000. If you use a value more than 1,000, it's automatically changed to 1,000. Negative values return an `INVALID_ARGUMENT` error. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous call to list memberships. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results. (optional)
    show_groups = True # bool | Optional. When `true`, also returns memberships associated with a Google Group, in addition to other types of memberships. If a filter is set, Google Group memberships that don't match the filter criteria aren't returned. (optional)
    show_invited = True # bool | Optional. When `true`, also returns memberships associated with invited members, in addition to other types of memberships. If a filter is set, invited memberships that don't match the filter criteria aren't returned. Currently requires [user authentication](https://developers.google.com/chat/api/guides/auth/users). (optional)

    try:
        api_response = api_instance.chat_spaces_members_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token, show_groups=show_groups, show_invited=show_invited)
        print("The response of SpacesApi->chat_spaces_members_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_members_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The resource name of the space for which to fetch a membership list. Format: spaces/{space} | 
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
 **filter** | **str**| Optional. A query filter. You can filter memberships by a member&#39;s role ([&#x60;role&#x60;](https://developers.google.com/chat/api/reference/rest/v1/spaces.members#membershiprole)) and type ([&#x60;member.type&#x60;](https://developers.google.com/chat/api/reference/rest/v1/User#type)). To filter by role, set &#x60;role&#x60; to &#x60;ROLE_MEMBER&#x60; or &#x60;ROLE_MANAGER&#x60;. To filter by type, set &#x60;member.type&#x60; to &#x60;HUMAN&#x60; or &#x60;BOT&#x60;. To filter by both role and type, use the &#x60;AND&#x60; operator. To filter by either role or type, use the &#x60;OR&#x60; operator. For example, the following queries are valid: &#x60;&#x60;&#x60; role &#x3D; \&quot;ROLE_MANAGER\&quot; OR role &#x3D; \&quot;ROLE_MEMBER\&quot; member.type &#x3D; \&quot;HUMAN\&quot; AND role &#x3D; \&quot;ROLE_MANAGER\&quot; &#x60;&#x60;&#x60; The following queries are invalid: &#x60;&#x60;&#x60; member.type &#x3D; \&quot;HUMAN\&quot; AND member.type &#x3D; \&quot;BOT\&quot; role &#x3D; \&quot;ROLE_MANAGER\&quot; AND role &#x3D; \&quot;ROLE_MEMBER\&quot; &#x60;&#x60;&#x60; Invalid queries are rejected by the server with an &#x60;INVALID_ARGUMENT&#x60; error. | [optional] 
 **page_size** | **int**| Optional. The maximum number of memberships to return. The service might return fewer than this value. If unspecified, at most 100 memberships are returned. The maximum value is 1,000. If you use a value more than 1,000, it&#39;s automatically changed to 1,000. Negative values return an &#x60;INVALID_ARGUMENT&#x60; error. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous call to list memberships. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results. | [optional] 
 **show_groups** | **bool**| Optional. When &#x60;true&#x60;, also returns memberships associated with a Google Group, in addition to other types of memberships. If a filter is set, Google Group memberships that don&#39;t match the filter criteria aren&#39;t returned. | [optional] 
 **show_invited** | **bool**| Optional. When &#x60;true&#x60;, also returns memberships associated with invited members, in addition to other types of memberships. If a filter is set, invited memberships that don&#39;t match the filter criteria aren&#39;t returned. Currently requires [user authentication](https://developers.google.com/chat/api/guides/auth/users). | [optional] 

### Return type

[**ListMembershipsResponse**](ListMembershipsResponse.md)

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

# **chat_spaces_messages_attachments_get**
> Attachment chat_spaces_messages_attachments_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/chat/api/reference/rest/v1/media/download). For an example, see [Get a message attachment](https://developers.google.com/chat/api/guides/v1/media-and-attachments/get). Requires [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.attachment import Attachment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
    name = 'name_example' # str | Required. Resource name of the attachment, in the form `spaces/*/messages/*/attachments/*`.
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
        api_response = api_instance.chat_spaces_messages_attachments_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of SpacesApi->chat_spaces_messages_attachments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_messages_attachments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. Resource name of the attachment, in the form &#x60;spaces/*/messages/*/attachments/*&#x60;. | 
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

[**Attachment**](Attachment.md)

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

# **chat_spaces_messages_create**
> Message chat_spaces_messages_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, message_id=message_id, message_reply_option=message_reply_option, request_id=request_id, thread_key=thread_key, message=message)



Creates a message in a Google Chat space. For an example, see [Create a message](https://developers.google.com/chat/api/guides/v1/messages/create). Calling this method requires [authentication](https://developers.google.com/chat/api/guides/auth) and supports the following authentication types: - For text messages, user authentication or app authentication are supported. - For card messages, only app authentication is supported. (Only Chat apps can create card messages.)

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.message import Message
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
    parent = 'parent_example' # str | Required. The resource name of the space in which to create a message. Format: `spaces/{space}`
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
    message_id = 'message_id_example' # str | Optional. A custom ID for a message. Lets Chat apps get, update, or delete a message without needing to store the system-assigned ID in the message's resource name (represented in the message `name` field). The value for this field must meet the following requirements: * Begins with `client-`. For example, `client-custom-name` is a valid custom ID, but `custom-name` is not. * Contains up to 63 characters and only lowercase letters, numbers, and hyphens. * Is unique within a space. A Chat app can't use the same custom ID for different messages. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message). (optional)
    message_reply_option = 'message_reply_option_example' # str | Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces. (optional)
    request_id = 'request_id_example' # str | Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message. (optional)
    thread_key = 'thread_key_example' # str | Optional. Deprecated: Use thread.thread_key instead. ID for the thread. Supports up to 4000 characters. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread). (optional)
    message = openapi_client.Message() # Message |  (optional)

    try:
        api_response = api_instance.chat_spaces_messages_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, message_id=message_id, message_reply_option=message_reply_option, request_id=request_id, thread_key=thread_key, message=message)
        print("The response of SpacesApi->chat_spaces_messages_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_messages_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The resource name of the space in which to create a message. Format: &#x60;spaces/{space}&#x60; | 
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
 **message_id** | **str**| Optional. A custom ID for a message. Lets Chat apps get, update, or delete a message without needing to store the system-assigned ID in the message&#39;s resource name (represented in the message &#x60;name&#x60; field). The value for this field must meet the following requirements: * Begins with &#x60;client-&#x60;. For example, &#x60;client-custom-name&#x60; is a valid custom ID, but &#x60;custom-name&#x60; is not. * Contains up to 63 characters and only lowercase letters, numbers, and hyphens. * Is unique within a space. A Chat app can&#39;t use the same custom ID for different messages. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message). | [optional] 
 **message_reply_option** | **str**| Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces. | [optional] 
 **request_id** | **str**| Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message. | [optional] 
 **thread_key** | **str**| Optional. Deprecated: Use thread.thread_key instead. ID for the thread. Supports up to 4000 characters. To start or add to a thread, create a message and specify a &#x60;threadKey&#x60; or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread). | [optional] 
 **message** | [**Message**](Message.md)|  | [optional] 

### Return type

[**Message**](Message.md)

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

# **chat_spaces_messages_list**
> ListMessagesResponse chat_spaces_messages_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, show_deleted=show_deleted)



Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. For an example, see [List messages](/chat/api/guides/v1/messages/list). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_messages_response import ListMessagesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
    parent = 'parent_example' # str | Required. The resource name of the space to list messages from. Format: `spaces/{space}`
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
    filter = 'filter_example' # str | A query filter. You can filter messages by date (`create_time`) and thread (`thread.name`). To filter messages by the date they were created, specify the `create_time` with a timestamp in [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339) format and double quotation marks. For example, `\"2023-04-21T11:30:00-04:00\"`. You can use the greater than operator `>` to list messages that were created after a timestamp, or the less than operator `<` to list messages that were created before a timestamp. To filter messages within a time interval, use the `AND` operator between two timestamps. To filter by thread, specify the `thread.name`, formatted as `spaces/{space}/threads/{thread}`. You can only specify one `thread.name` per query. To filter by both thread and date, use the `AND` operator in your query. For example, the following queries are valid: ``` create_time > \"2012-04-21T11:30:00-04:00\" create_time > \"2012-04-21T11:30:00-04:00\" AND thread.name = spaces/AAAAAAAAAAA/threads/123 create_time > \"2012-04-21T11:30:00+00:00\" AND create_time < \"2013-01-01T00:00:00+00:00\" AND thread.name = spaces/AAAAAAAAAAA/threads/123 thread.name = spaces/AAAAAAAAAAA/threads/123 ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error. (optional)
    order_by = 'order_by_example' # str | Optional, if resuming from a previous query. How the list of messages is ordered. Specify a value to order by an ordering operation. Valid ordering operation values are as follows: - `ASC` for ascending. - `DESC` for descending. The default ordering is `create_time ASC`. (optional)
    page_size = 56 # int | The maximum number of messages returned. The service might return fewer messages than this value. If unspecified, at most 25 are returned. The maximum value is 1,000. If you use a value more than 1,000, it's automatically changed to 1,000. Negative values return an `INVALID_ARGUMENT` error. (optional)
    page_token = 'page_token_example' # str | Optional, if resuming from a previous query. A page token received from a previous list messages call. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results. (optional)
    show_deleted = True # bool | Whether to include deleted messages. Deleted messages include deleted time and metadata about their deletion, but message content is unavailable. (optional)

    try:
        api_response = api_instance.chat_spaces_messages_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, show_deleted=show_deleted)
        print("The response of SpacesApi->chat_spaces_messages_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_messages_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The resource name of the space to list messages from. Format: &#x60;spaces/{space}&#x60; | 
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
 **filter** | **str**| A query filter. You can filter messages by date (&#x60;create_time&#x60;) and thread (&#x60;thread.name&#x60;). To filter messages by the date they were created, specify the &#x60;create_time&#x60; with a timestamp in [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339) format and double quotation marks. For example, &#x60;\&quot;2023-04-21T11:30:00-04:00\&quot;&#x60;. You can use the greater than operator &#x60;&gt;&#x60; to list messages that were created after a timestamp, or the less than operator &#x60;&lt;&#x60; to list messages that were created before a timestamp. To filter messages within a time interval, use the &#x60;AND&#x60; operator between two timestamps. To filter by thread, specify the &#x60;thread.name&#x60;, formatted as &#x60;spaces/{space}/threads/{thread}&#x60;. You can only specify one &#x60;thread.name&#x60; per query. To filter by both thread and date, use the &#x60;AND&#x60; operator in your query. For example, the following queries are valid: &#x60;&#x60;&#x60; create_time &gt; \&quot;2012-04-21T11:30:00-04:00\&quot; create_time &gt; \&quot;2012-04-21T11:30:00-04:00\&quot; AND thread.name &#x3D; spaces/AAAAAAAAAAA/threads/123 create_time &gt; \&quot;2012-04-21T11:30:00+00:00\&quot; AND create_time &lt; \&quot;2013-01-01T00:00:00+00:00\&quot; AND thread.name &#x3D; spaces/AAAAAAAAAAA/threads/123 thread.name &#x3D; spaces/AAAAAAAAAAA/threads/123 &#x60;&#x60;&#x60; Invalid queries are rejected by the server with an &#x60;INVALID_ARGUMENT&#x60; error. | [optional] 
 **order_by** | **str**| Optional, if resuming from a previous query. How the list of messages is ordered. Specify a value to order by an ordering operation. Valid ordering operation values are as follows: - &#x60;ASC&#x60; for ascending. - &#x60;DESC&#x60; for descending. The default ordering is &#x60;create_time ASC&#x60;. | [optional] 
 **page_size** | **int**| The maximum number of messages returned. The service might return fewer messages than this value. If unspecified, at most 25 are returned. The maximum value is 1,000. If you use a value more than 1,000, it&#39;s automatically changed to 1,000. Negative values return an &#x60;INVALID_ARGUMENT&#x60; error. | [optional] 
 **page_token** | **str**| Optional, if resuming from a previous query. A page token received from a previous list messages call. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results. | [optional] 
 **show_deleted** | **bool**| Whether to include deleted messages. Deleted messages include deleted time and metadata about their deletion, but message content is unavailable. | [optional] 

### Return type

[**ListMessagesResponse**](ListMessagesResponse.md)

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

# **chat_spaces_messages_patch**
> Message chat_spaces_messages_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, allow_missing=allow_missing, update_mask=update_mask, message=message)



Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/chat/api/guides/v1/messages/update). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users). When using app authentication, requests can only update messages created by the calling Chat app.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.message import Message
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
    name = 'name_example' # str | Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).
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
    allow_missing = True # bool | Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message) or the request fails. (optional)
    update_mask = 'update_mask_example' # str | Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - Developer Preview: `accessory_widgets` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) (optional)
    message = openapi_client.Message() # Message |  (optional)

    try:
        api_response = api_instance.chat_spaces_messages_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, allow_missing=allow_missing, update_mask=update_mask, message=message)
        print("The response of SpacesApi->chat_spaces_messages_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_messages_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Resource name of the message. Format: &#x60;spaces/{space}/messages/{message}&#x60; Where &#x60;{space}&#x60; is the ID of the space where the message is posted and &#x60;{message}&#x60; is a system-assigned ID for the message. For example, &#x60;spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB&#x60;. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing &#x60;{message}&#x60; with the value from the &#x60;clientAssignedMessageId&#x60; field. For example, &#x60;spaces/AAAAAAAAAAA/messages/client-custom-name&#x60;. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message). | 
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
 **allow_missing** | **bool**| Optional. If &#x60;true&#x60; and the message isn&#39;t found, a new message is created and &#x60;updateMask&#x60; is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message) or the request fails. | [optional] 
 **update_mask** | **str**| Required. The field paths to update. Separate multiple values with commas or use &#x60;*&#x60; to update all field paths. Currently supported field paths: - &#x60;text&#x60; - &#x60;attachment&#x60; - &#x60;cards&#x60; (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - &#x60;cards_v2&#x60; (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - Developer Preview: &#x60;accessory_widgets&#x60; (Requires [app authentication](/chat/api/guides/auth/service-accounts).) | [optional] 
 **message** | [**Message**](Message.md)|  | [optional] 

### Return type

[**Message**](Message.md)

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

# **chat_spaces_messages_reactions_create**
> Reaction chat_spaces_messages_reactions_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, reaction=reaction)



Creates a reaction and adds it to a message. For an example, see [Create a reaction](https://developers.google.com/chat/api/guides/v1/reactions/create). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users). Only unicode emoji are supported.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.reaction import Reaction
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
    parent = 'parent_example' # str | Required. The message where the reaction is created. Format: `spaces/{space}/messages/{message}`
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
    reaction = openapi_client.Reaction() # Reaction |  (optional)

    try:
        api_response = api_instance.chat_spaces_messages_reactions_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, reaction=reaction)
        print("The response of SpacesApi->chat_spaces_messages_reactions_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_messages_reactions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The message where the reaction is created. Format: &#x60;spaces/{space}/messages/{message}&#x60; | 
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
 **reaction** | [**Reaction**](Reaction.md)|  | [optional] 

### Return type

[**Reaction**](Reaction.md)

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

# **chat_spaces_messages_reactions_delete**
> object chat_spaces_messages_reactions_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, force=force)



Deletes a reaction to a message. For an example, see [Delete a reaction](https://developers.google.com/chat/api/guides/v1/reactions/delete). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
    name = 'name_example' # str | Required. Name of the reaction to delete. Format: `spaces/{space}/messages/{message}/reactions/{reaction}`
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
    force = True # bool | When `true`, deleting a message also deletes its threaded replies. When `false`, if a message has threaded replies, deletion fails. Only applies when [authenticating as a user](https://developers.google.com/chat/api/guides/auth/users). Has no effect when [authenticating as a Chat app] (https://developers.google.com/chat/api/guides/auth/service-accounts). (optional)

    try:
        api_response = api_instance.chat_spaces_messages_reactions_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, force=force)
        print("The response of SpacesApi->chat_spaces_messages_reactions_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_messages_reactions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. Name of the reaction to delete. Format: &#x60;spaces/{space}/messages/{message}/reactions/{reaction}&#x60; | 
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
 **force** | **bool**| When &#x60;true&#x60;, deleting a message also deletes its threaded replies. When &#x60;false&#x60;, if a message has threaded replies, deletion fails. Only applies when [authenticating as a user](https://developers.google.com/chat/api/guides/auth/users). Has no effect when [authenticating as a Chat app] (https://developers.google.com/chat/api/guides/auth/service-accounts). | [optional] 

### Return type

**object**

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

# **chat_spaces_messages_reactions_list**
> ListReactionsResponse chat_spaces_messages_reactions_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)



Lists reactions to a message. For an example, see [List reactions](https://developers.google.com/chat/api/guides/v1/reactions/list). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_reactions_response import ListReactionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
    parent = 'parent_example' # str | Required. The message users reacted to. Format: `spaces/{space}/messages/{message}`
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
    filter = 'filter_example' # str | Optional. A query filter. You can filter reactions by [emoji](https://developers.google.com/chat/api/reference/rest/v1/Emoji) (either `emoji.unicode` or `emoji.custom_emoji.uid`) and [user](https://developers.google.com/chat/api/reference/rest/v1/User) (`user.name`). To filter reactions for multiple emojis or users, join similar fields with the `OR` operator, such as `emoji.unicode = \"🙂\" OR emoji.unicode = \"👍\"` and `user.name = \"users/AAAAAA\" OR user.name = \"users/BBBBBB\"`. To filter reactions by emoji and user, use the `AND` operator, such as `emoji.unicode = \"🙂\" AND user.name = \"users/AAAAAA\"`. If your query uses both `AND` and `OR`, group them with parentheses. For example, the following queries are valid: ``` user.name = \"users/{user}\" emoji.unicode = \"🙂\" emoji.custom_emoji.uid = \"{uid}\" emoji.unicode = \"🙂\" OR emoji.unicode = \"👍\" emoji.unicode = \"🙂\" OR emoji.custom_emoji.uid = \"{uid}\" emoji.unicode = \"🙂\" AND user.name = \"users/{user}\" (emoji.unicode = \"🙂\" OR emoji.custom_emoji.uid = \"{uid}\") AND user.name = \"users/{user}\" ``` The following queries are invalid: ``` emoji.unicode = \"🙂\" AND emoji.unicode = \"👍\" emoji.unicode = \"🙂\" AND emoji.custom_emoji.uid = \"{uid}\" emoji.unicode = \"🙂\" OR user.name = \"users/{user}\" emoji.unicode = \"🙂\" OR emoji.custom_emoji.uid = \"{uid}\" OR user.name = \"users/{user}\" emoji.unicode = \"🙂\" OR emoji.custom_emoji.uid = \"{uid}\" AND user.name = \"users/{user}\" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error. (optional)
    page_size = 56 # int | Optional. The maximum number of reactions returned. The service can return fewer reactions than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200. (optional)
    page_token = 'page_token_example' # str | Optional. (If resuming from a previous query.) A page token received from a previous list reactions call. Provide this to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results. (optional)

    try:
        api_response = api_instance.chat_spaces_messages_reactions_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)
        print("The response of SpacesApi->chat_spaces_messages_reactions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_messages_reactions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The message users reacted to. Format: &#x60;spaces/{space}/messages/{message}&#x60; | 
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
 **filter** | **str**| Optional. A query filter. You can filter reactions by [emoji](https://developers.google.com/chat/api/reference/rest/v1/Emoji) (either &#x60;emoji.unicode&#x60; or &#x60;emoji.custom_emoji.uid&#x60;) and [user](https://developers.google.com/chat/api/reference/rest/v1/User) (&#x60;user.name&#x60;). To filter reactions for multiple emojis or users, join similar fields with the &#x60;OR&#x60; operator, such as &#x60;emoji.unicode &#x3D; \&quot;🙂\&quot; OR emoji.unicode &#x3D; \&quot;👍\&quot;&#x60; and &#x60;user.name &#x3D; \&quot;users/AAAAAA\&quot; OR user.name &#x3D; \&quot;users/BBBBBB\&quot;&#x60;. To filter reactions by emoji and user, use the &#x60;AND&#x60; operator, such as &#x60;emoji.unicode &#x3D; \&quot;🙂\&quot; AND user.name &#x3D; \&quot;users/AAAAAA\&quot;&#x60;. If your query uses both &#x60;AND&#x60; and &#x60;OR&#x60;, group them with parentheses. For example, the following queries are valid: &#x60;&#x60;&#x60; user.name &#x3D; \&quot;users/{user}\&quot; emoji.unicode &#x3D; \&quot;🙂\&quot; emoji.custom_emoji.uid &#x3D; \&quot;{uid}\&quot; emoji.unicode &#x3D; \&quot;🙂\&quot; OR emoji.unicode &#x3D; \&quot;👍\&quot; emoji.unicode &#x3D; \&quot;🙂\&quot; OR emoji.custom_emoji.uid &#x3D; \&quot;{uid}\&quot; emoji.unicode &#x3D; \&quot;🙂\&quot; AND user.name &#x3D; \&quot;users/{user}\&quot; (emoji.unicode &#x3D; \&quot;🙂\&quot; OR emoji.custom_emoji.uid &#x3D; \&quot;{uid}\&quot;) AND user.name &#x3D; \&quot;users/{user}\&quot; &#x60;&#x60;&#x60; The following queries are invalid: &#x60;&#x60;&#x60; emoji.unicode &#x3D; \&quot;🙂\&quot; AND emoji.unicode &#x3D; \&quot;👍\&quot; emoji.unicode &#x3D; \&quot;🙂\&quot; AND emoji.custom_emoji.uid &#x3D; \&quot;{uid}\&quot; emoji.unicode &#x3D; \&quot;🙂\&quot; OR user.name &#x3D; \&quot;users/{user}\&quot; emoji.unicode &#x3D; \&quot;🙂\&quot; OR emoji.custom_emoji.uid &#x3D; \&quot;{uid}\&quot; OR user.name &#x3D; \&quot;users/{user}\&quot; emoji.unicode &#x3D; \&quot;🙂\&quot; OR emoji.custom_emoji.uid &#x3D; \&quot;{uid}\&quot; AND user.name &#x3D; \&quot;users/{user}\&quot; &#x60;&#x60;&#x60; Invalid queries are rejected by the server with an &#x60;INVALID_ARGUMENT&#x60; error. | [optional] 
 **page_size** | **int**| Optional. The maximum number of reactions returned. The service can return fewer reactions than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200. | [optional] 
 **page_token** | **str**| Optional. (If resuming from a previous query.) A page token received from a previous list reactions call. Provide this to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results. | [optional] 

### Return type

[**ListReactionsResponse**](ListReactionsResponse.md)

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

# **chat_spaces_messages_update**
> Message chat_spaces_messages_update(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, allow_missing=allow_missing, update_mask=update_mask, message=message)



Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/chat/api/guides/v1/messages/update). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users). When using app authentication, requests can only update messages created by the calling Chat app.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.message import Message
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
    name = 'name_example' # str | Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).
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
    allow_missing = True # bool | Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message) or the request fails. (optional)
    update_mask = 'update_mask_example' # str | Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - Developer Preview: `accessory_widgets` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) (optional)
    message = openapi_client.Message() # Message |  (optional)

    try:
        api_response = api_instance.chat_spaces_messages_update(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, allow_missing=allow_missing, update_mask=update_mask, message=message)
        print("The response of SpacesApi->chat_spaces_messages_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_messages_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Resource name of the message. Format: &#x60;spaces/{space}/messages/{message}&#x60; Where &#x60;{space}&#x60; is the ID of the space where the message is posted and &#x60;{message}&#x60; is a system-assigned ID for the message. For example, &#x60;spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB&#x60;. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing &#x60;{message}&#x60; with the value from the &#x60;clientAssignedMessageId&#x60; field. For example, &#x60;spaces/AAAAAAAAAAA/messages/client-custom-name&#x60;. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message). | 
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
 **allow_missing** | **bool**| Optional. If &#x60;true&#x60; and the message isn&#39;t found, a new message is created and &#x60;updateMask&#x60; is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message) or the request fails. | [optional] 
 **update_mask** | **str**| Required. The field paths to update. Separate multiple values with commas or use &#x60;*&#x60; to update all field paths. Currently supported field paths: - &#x60;text&#x60; - &#x60;attachment&#x60; - &#x60;cards&#x60; (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - &#x60;cards_v2&#x60; (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - Developer Preview: &#x60;accessory_widgets&#x60; (Requires [app authentication](/chat/api/guides/auth/service-accounts).) | [optional] 
 **message** | [**Message**](Message.md)|  | [optional] 

### Return type

[**Message**](Message.md)

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

# **chat_spaces_setup**
> Space chat_spaces_setup(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, set_up_space_request=set_up_space_request)



Creates a space and adds specified users to it. The calling user is automatically added to the space, and shouldn't be specified as a membership in the request. For an example, see [Set up a space](https://developers.google.com/chat/api/guides/v1/spaces/set-up). To specify the human members to add, add memberships with the appropriate `member.name` in the `SetUpSpaceRequest`. To add a human user, use `users/{user}`, where `{user}` can be the email address for the user. For users in the same Workspace organization `{user}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`. For a space or group chat, if the caller blocks or is blocked by some members, then those members aren't added to the created space. To create a direct message (DM) between the calling user and another human user, specify exactly one membership to represent the human user. If one user blocks the other, the request fails and the DM isn't created. To create a DM between the calling user and the calling app, set `Space.singleUserBotDm` to `true` and don't specify any memberships. You can only use this method to set up a DM with the calling app. To add the calling app as a member of a space or an existing DM between two human users, see [create a membership](https://developers.google.com/chat/api/guides/v1/members/create). If a DM already exists between two users, even when one user blocks the other at the time a request is made, then the existing DM is returned. Spaces with threaded replies aren't supported. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.set_up_space_request import SetUpSpaceRequest
from openapi_client.models.space import Space
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.googleapis.com"
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
    api_instance = openapi_client.SpacesApi(api_client)
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
    set_up_space_request = openapi_client.SetUpSpaceRequest() # SetUpSpaceRequest |  (optional)

    try:
        api_response = api_instance.chat_spaces_setup(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, set_up_space_request=set_up_space_request)
        print("The response of SpacesApi->chat_spaces_setup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->chat_spaces_setup: %s\n" % e)
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
 **set_up_space_request** | [**SetUpSpaceRequest**](SetUpSpaceRequest.md)|  | [optional] 

### Return type

[**Space**](Space.md)

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

