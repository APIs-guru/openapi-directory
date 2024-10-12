# openapi_client.DebugApi

All URIs are relative to *https://cloudsearch.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudsearch_debug_datasources_items_check_access**](DebugApi.md#cloudsearch_debug_datasources_items_check_access) | **POST** /v1/debug/{name}:checkAccess | 
[**cloudsearch_debug_datasources_items_search_by_view_url**](DebugApi.md#cloudsearch_debug_datasources_items_search_by_view_url) | **POST** /v1/debug/{name}/items:searchByViewUrl | 
[**cloudsearch_debug_identitysources_items_list_forunmappedidentity**](DebugApi.md#cloudsearch_debug_identitysources_items_list_forunmappedidentity) | **GET** /v1/debug/{parent}/items:forunmappedidentity | 
[**cloudsearch_debug_identitysources_unmappedids_list**](DebugApi.md#cloudsearch_debug_identitysources_unmappedids_list) | **GET** /v1/debug/{parent}/unmappedids | 


# **cloudsearch_debug_datasources_items_check_access**
> CheckAccessResponse cloudsearch_debug_datasources_items_check_access(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, debug_options_enable_debugging=debug_options_enable_debugging, principal=principal)



Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.check_access_response import CheckAccessResponse
from openapi_client.models.principal import Principal
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsearch.googleapis.com"
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
    api_instance = openapi_client.DebugApi(api_client)
    name = 'name_example' # str | Item name, format: datasources/{source_id}/items/{item_id}
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
    debug_options_enable_debugging = True # bool | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. (optional)
    principal = openapi_client.Principal() # Principal |  (optional)

    try:
        api_response = api_instance.cloudsearch_debug_datasources_items_check_access(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, debug_options_enable_debugging=debug_options_enable_debugging, principal=principal)
        print("The response of DebugApi->cloudsearch_debug_datasources_items_check_access:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DebugApi->cloudsearch_debug_datasources_items_check_access: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Item name, format: datasources/{source_id}/items/{item_id} | 
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
 **debug_options_enable_debugging** | **bool**| If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. | [optional] 
 **principal** | [**Principal**](Principal.md)|  | [optional] 

### Return type

[**CheckAccessResponse**](CheckAccessResponse.md)

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

# **cloudsearch_debug_datasources_items_search_by_view_url**
> SearchItemsByViewUrlResponse cloudsearch_debug_datasources_items_search_by_view_url(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, search_items_by_view_url_request=search_items_by_view_url_request)



Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.search_items_by_view_url_request import SearchItemsByViewUrlRequest
from openapi_client.models.search_items_by_view_url_response import SearchItemsByViewUrlResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsearch.googleapis.com"
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
    api_instance = openapi_client.DebugApi(api_client)
    name = 'name_example' # str | Source name, format: datasources/{source_id}
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
    search_items_by_view_url_request = openapi_client.SearchItemsByViewUrlRequest() # SearchItemsByViewUrlRequest |  (optional)

    try:
        api_response = api_instance.cloudsearch_debug_datasources_items_search_by_view_url(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, search_items_by_view_url_request=search_items_by_view_url_request)
        print("The response of DebugApi->cloudsearch_debug_datasources_items_search_by_view_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DebugApi->cloudsearch_debug_datasources_items_search_by_view_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Source name, format: datasources/{source_id} | 
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
 **search_items_by_view_url_request** | [**SearchItemsByViewUrlRequest**](SearchItemsByViewUrlRequest.md)|  | [optional] 

### Return type

[**SearchItemsByViewUrlResponse**](SearchItemsByViewUrlResponse.md)

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

# **cloudsearch_debug_identitysources_items_list_forunmappedidentity**
> ListItemNamesForUnmappedIdentityResponse cloudsearch_debug_identitysources_items_list_forunmappedidentity(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, debug_options_enable_debugging=debug_options_enable_debugging, group_resource_name=group_resource_name, page_size=page_size, page_token=page_token, user_resource_name=user_resource_name)



Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_item_names_for_unmapped_identity_response import ListItemNamesForUnmappedIdentityResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsearch.googleapis.com"
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
    api_instance = openapi_client.DebugApi(api_client)
    parent = 'parent_example' # str | The name of the identity source, in the following format: identitysources/{source_id}}
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
    debug_options_enable_debugging = True # bool | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. (optional)
    group_resource_name = 'group_resource_name_example' # str |  (optional)
    page_size = 56 # int | Maximum number of items to fetch in a request. Defaults to 100. (optional)
    page_token = 'page_token_example' # str | The next_page_token value returned from a previous List request, if any. (optional)
    user_resource_name = 'user_resource_name_example' # str |  (optional)

    try:
        api_response = api_instance.cloudsearch_debug_identitysources_items_list_forunmappedidentity(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, debug_options_enable_debugging=debug_options_enable_debugging, group_resource_name=group_resource_name, page_size=page_size, page_token=page_token, user_resource_name=user_resource_name)
        print("The response of DebugApi->cloudsearch_debug_identitysources_items_list_forunmappedidentity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DebugApi->cloudsearch_debug_identitysources_items_list_forunmappedidentity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| The name of the identity source, in the following format: identitysources/{source_id}} | 
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
 **debug_options_enable_debugging** | **bool**| If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. | [optional] 
 **group_resource_name** | **str**|  | [optional] 
 **page_size** | **int**| Maximum number of items to fetch in a request. Defaults to 100. | [optional] 
 **page_token** | **str**| The next_page_token value returned from a previous List request, if any. | [optional] 
 **user_resource_name** | **str**|  | [optional] 

### Return type

[**ListItemNamesForUnmappedIdentityResponse**](ListItemNamesForUnmappedIdentityResponse.md)

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

# **cloudsearch_debug_identitysources_unmappedids_list**
> ListUnmappedIdentitiesResponse cloudsearch_debug_identitysources_unmappedids_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, debug_options_enable_debugging=debug_options_enable_debugging, page_size=page_size, page_token=page_token, resolution_status_code=resolution_status_code)



Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_unmapped_identities_response import ListUnmappedIdentitiesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsearch.googleapis.com"
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
    api_instance = openapi_client.DebugApi(api_client)
    parent = 'parent_example' # str | The name of the identity source, in the following format: identitysources/{source_id}
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
    debug_options_enable_debugging = True # bool | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. (optional)
    page_size = 56 # int | Maximum number of items to fetch in a request. Defaults to 100. (optional)
    page_token = 'page_token_example' # str | The next_page_token value returned from a previous List request, if any. (optional)
    resolution_status_code = 'resolution_status_code_example' # str | Limit users selection to this status. (optional)

    try:
        api_response = api_instance.cloudsearch_debug_identitysources_unmappedids_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, debug_options_enable_debugging=debug_options_enable_debugging, page_size=page_size, page_token=page_token, resolution_status_code=resolution_status_code)
        print("The response of DebugApi->cloudsearch_debug_identitysources_unmappedids_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DebugApi->cloudsearch_debug_identitysources_unmappedids_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| The name of the identity source, in the following format: identitysources/{source_id} | 
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
 **debug_options_enable_debugging** | **bool**| If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. | [optional] 
 **page_size** | **int**| Maximum number of items to fetch in a request. Defaults to 100. | [optional] 
 **page_token** | **str**| The next_page_token value returned from a previous List request, if any. | [optional] 
 **resolution_status_code** | **str**| Limit users selection to this status. | [optional] 

### Return type

[**ListUnmappedIdentitiesResponse**](ListUnmappedIdentitiesResponse.md)

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

