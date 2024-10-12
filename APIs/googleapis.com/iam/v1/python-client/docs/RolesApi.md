# openapi_client.RolesApi

All URIs are relative to *https://iam.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iam_roles_get**](RolesApi.md#iam_roles_get) | **GET** /v1/{name} | 
[**iam_roles_list**](RolesApi.md#iam_roles_list) | **GET** /v1/roles | 
[**iam_roles_query_grantable_roles**](RolesApi.md#iam_roles_query_grantable_roles) | **POST** /v1/roles:queryGrantableRoles | 


# **iam_roles_get**
> Role iam_roles_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, public_key_type=public_key_type)



Gets the definition of a Role.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.role import Role
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://iam.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://iam.googleapis.com"
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
    api_instance = openapi_client.RolesApi(api_client)
    name = 'name_example' # str | The `name` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`roles.get()`](https://cloud.google.com/iam/reference/rest/v1/roles/get): `roles/{ROLE_NAME}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME}` * [`projects.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [`organizations.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
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
    public_key_type = 'public_key_type_example' # str | Optional. The output format of the public key. The default is `TYPE_NONE`, which means that the public key is not returned. (optional)

    try:
        api_response = api_instance.iam_roles_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, public_key_type=public_key_type)
        print("The response of RolesApi->iam_roles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->iam_roles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The &#x60;name&#x60; parameter&#39;s value depends on the target resource for the request, namely [&#x60;roles&#x60;](https://cloud.google.com/iam/reference/rest/v1/roles), [&#x60;projects&#x60;](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [&#x60;organizations&#x60;](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type&#39;s &#x60;name&#x60; value format is described below: * [&#x60;roles.get()&#x60;](https://cloud.google.com/iam/reference/rest/v1/roles/get): &#x60;roles/{ROLE_NAME}&#x60;. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: &#x60;https://iam.googleapis.com/v1/roles/{ROLE_NAME}&#x60; * [&#x60;projects.roles.get()&#x60;](https://cloud.google.com/iam/reference/rest/v1/projects.roles/get): &#x60;projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}&#x60;. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: &#x60;https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}&#x60; * [&#x60;organizations.roles.get()&#x60;](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/get): &#x60;organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}&#x60;. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: &#x60;https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}&#x60; Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. | 
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
 **public_key_type** | **str**| Optional. The output format of the public key. The default is &#x60;TYPE_NONE&#x60;, which means that the public key is not returned. | [optional] 

### Return type

[**Role**](Role.md)

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

# **iam_roles_list**
> ListRolesResponse iam_roles_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, parent=parent, show_deleted=show_deleted, view=view)



Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_roles_response import ListRolesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://iam.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://iam.googleapis.com"
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
    api_instance = openapi_client.RolesApi(api_client)
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
    page_size = 56 # int | Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000. (optional)
    page_token = 'page_token_example' # str | Optional pagination token returned in an earlier ListRolesResponse. (optional)
    parent = 'parent_example' # str | The `parent` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`roles.list()`](https://cloud.google.com/iam/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [`projects.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [`organizations.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. (optional)
    show_deleted = True # bool | Include Roles that have been deleted. (optional)
    view = 'view_example' # str | Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field. (optional)

    try:
        api_response = api_instance.iam_roles_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, parent=parent, show_deleted=show_deleted, view=view)
        print("The response of RolesApi->iam_roles_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->iam_roles_list: %s\n" % e)
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
 **page_size** | **int**| Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000. | [optional] 
 **page_token** | **str**| Optional pagination token returned in an earlier ListRolesResponse. | [optional] 
 **parent** | **str**| The &#x60;parent&#x60; parameter&#39;s value depends on the target resource for the request, namely [&#x60;roles&#x60;](https://cloud.google.com/iam/reference/rest/v1/roles), [&#x60;projects&#x60;](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [&#x60;organizations&#x60;](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type&#39;s &#x60;parent&#x60; value format is described below: * [&#x60;roles.list()&#x60;](https://cloud.google.com/iam/reference/rest/v1/roles/list): An empty string. This method doesn&#39;t require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: &#x60;https://iam.googleapis.com/v1/roles&#x60; * [&#x60;projects.roles.list()&#x60;](https://cloud.google.com/iam/reference/rest/v1/projects.roles/list): &#x60;projects/{PROJECT_ID}&#x60;. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: &#x60;https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles&#x60; * [&#x60;organizations.roles.list()&#x60;](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/list): &#x60;organizations/{ORGANIZATION_ID}&#x60;. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: &#x60;https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles&#x60; Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID. | [optional] 
 **show_deleted** | **bool**| Include Roles that have been deleted. | [optional] 
 **view** | **str**| Optional view for the returned Role objects. When &#x60;FULL&#x60; is specified, the &#x60;includedPermissions&#x60; field is returned, which includes a list of all permissions in the role. The default value is &#x60;BASIC&#x60;, which does not return the &#x60;includedPermissions&#x60; field. | [optional] 

### Return type

[**ListRolesResponse**](ListRolesResponse.md)

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

# **iam_roles_query_grantable_roles**
> QueryGrantableRolesResponse iam_roles_query_grantable_roles(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, query_grantable_roles_request=query_grantable_roles_request)



Lists roles that can be granted on a Google Cloud resource. A role is grantable if the IAM policy for the resource can contain bindings to the role.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.query_grantable_roles_request import QueryGrantableRolesRequest
from openapi_client.models.query_grantable_roles_response import QueryGrantableRolesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://iam.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://iam.googleapis.com"
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
    api_instance = openapi_client.RolesApi(api_client)
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
    query_grantable_roles_request = openapi_client.QueryGrantableRolesRequest() # QueryGrantableRolesRequest |  (optional)

    try:
        api_response = api_instance.iam_roles_query_grantable_roles(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, query_grantable_roles_request=query_grantable_roles_request)
        print("The response of RolesApi->iam_roles_query_grantable_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->iam_roles_query_grantable_roles: %s\n" % e)
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
 **query_grantable_roles_request** | [**QueryGrantableRolesRequest**](QueryGrantableRolesRequest.md)|  | [optional] 

### Return type

[**QueryGrantableRolesResponse**](QueryGrantableRolesResponse.md)

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

