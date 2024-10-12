# openapi_client.ProjectsApi

All URIs are relative to *https://securitycenter.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**securitycenter_projects_assets_group**](ProjectsApi.md#securitycenter_projects_assets_group) | **POST** /v1/{parent}/assets:group | 
[**securitycenter_projects_assets_list**](ProjectsApi.md#securitycenter_projects_assets_list) | **GET** /v1/{parent}/assets | 
[**securitycenter_projects_big_query_exports_create**](ProjectsApi.md#securitycenter_projects_big_query_exports_create) | **POST** /v1/{parent}/bigQueryExports | 
[**securitycenter_projects_big_query_exports_list**](ProjectsApi.md#securitycenter_projects_big_query_exports_list) | **GET** /v1/{parent}/bigQueryExports | 
[**securitycenter_projects_event_threat_detection_settings_validate_custom_module**](ProjectsApi.md#securitycenter_projects_event_threat_detection_settings_validate_custom_module) | **POST** /v1/{parent}:validateCustomModule | 
[**securitycenter_projects_findings_bulk_mute**](ProjectsApi.md#securitycenter_projects_findings_bulk_mute) | **POST** /v1/{parent}/findings:bulkMute | 
[**securitycenter_projects_mute_configs_create**](ProjectsApi.md#securitycenter_projects_mute_configs_create) | **POST** /v1/{parent}/muteConfigs | 
[**securitycenter_projects_mute_configs_list**](ProjectsApi.md#securitycenter_projects_mute_configs_list) | **GET** /v1/{parent}/muteConfigs | 
[**securitycenter_projects_notification_configs_create**](ProjectsApi.md#securitycenter_projects_notification_configs_create) | **POST** /v1/{parent}/notificationConfigs | 
[**securitycenter_projects_notification_configs_list**](ProjectsApi.md#securitycenter_projects_notification_configs_list) | **GET** /v1/{parent}/notificationConfigs | 
[**securitycenter_projects_security_health_analytics_settings_custom_modules_create**](ProjectsApi.md#securitycenter_projects_security_health_analytics_settings_custom_modules_create) | **POST** /v1/{parent}/customModules | 
[**securitycenter_projects_security_health_analytics_settings_custom_modules_delete**](ProjectsApi.md#securitycenter_projects_security_health_analytics_settings_custom_modules_delete) | **DELETE** /v1/{name} | 
[**securitycenter_projects_security_health_analytics_settings_custom_modules_list**](ProjectsApi.md#securitycenter_projects_security_health_analytics_settings_custom_modules_list) | **GET** /v1/{parent}/customModules | 
[**securitycenter_projects_security_health_analytics_settings_custom_modules_list_descendant**](ProjectsApi.md#securitycenter_projects_security_health_analytics_settings_custom_modules_list_descendant) | **GET** /v1/{parent}/customModules:listDescendant | 
[**securitycenter_projects_security_health_analytics_settings_custom_modules_simulate**](ProjectsApi.md#securitycenter_projects_security_health_analytics_settings_custom_modules_simulate) | **POST** /v1/{parent}/customModules:simulate | 
[**securitycenter_projects_security_health_analytics_settings_effective_custom_modules_get**](ProjectsApi.md#securitycenter_projects_security_health_analytics_settings_effective_custom_modules_get) | **GET** /v1/{name} | 
[**securitycenter_projects_security_health_analytics_settings_effective_custom_modules_list**](ProjectsApi.md#securitycenter_projects_security_health_analytics_settings_effective_custom_modules_list) | **GET** /v1/{parent}/effectiveCustomModules | 
[**securitycenter_projects_sources_findings_external_systems_patch**](ProjectsApi.md#securitycenter_projects_sources_findings_external_systems_patch) | **PATCH** /v1/{name} | 
[**securitycenter_projects_sources_findings_group**](ProjectsApi.md#securitycenter_projects_sources_findings_group) | **POST** /v1/{parent}/findings:group | 
[**securitycenter_projects_sources_findings_list**](ProjectsApi.md#securitycenter_projects_sources_findings_list) | **GET** /v1/{parent}/findings | 
[**securitycenter_projects_sources_findings_set_mute**](ProjectsApi.md#securitycenter_projects_sources_findings_set_mute) | **POST** /v1/{name}:setMute | 
[**securitycenter_projects_sources_findings_set_state**](ProjectsApi.md#securitycenter_projects_sources_findings_set_state) | **POST** /v1/{name}:setState | 
[**securitycenter_projects_sources_list**](ProjectsApi.md#securitycenter_projects_sources_list) | **GET** /v1/{parent}/sources | 


# **securitycenter_projects_assets_group**
> GroupAssetsResponse securitycenter_projects_assets_group(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, group_assets_request=group_assets_request)



Filters an organization's assets and groups them by their specified properties.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.group_assets_request import GroupAssetsRequest
from openapi_client.models.group_assets_response import GroupAssetsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The name of the parent to group the assets by. Its format is \"organizations/[organization_id]\", \"folders/[folder_id]\", or \"projects/[project_id]\".
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
    group_assets_request = openapi_client.GroupAssetsRequest() # GroupAssetsRequest |  (optional)

    try:
        api_response = api_instance.securitycenter_projects_assets_group(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, group_assets_request=group_assets_request)
        print("The response of ProjectsApi->securitycenter_projects_assets_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_assets_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the parent to group the assets by. Its format is \&quot;organizations/[organization_id]\&quot;, \&quot;folders/[folder_id]\&quot;, or \&quot;projects/[project_id]\&quot;. | 
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
 **group_assets_request** | [**GroupAssetsRequest**](GroupAssetsRequest.md)|  | [optional] 

### Return type

[**GroupAssetsResponse**](GroupAssetsResponse.md)

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

# **securitycenter_projects_assets_list**
> ListAssetsResponse securitycenter_projects_assets_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, compare_duration=compare_duration, field_mask=field_mask, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, read_time=read_time)



Lists an organization's assets.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_assets_response import ListAssetsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: \"organizations/[organization_id]\", \"folders/[folder_id]\", or \"projects/[project_id]\".
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
    compare_duration = 'compare_duration_example' # str | When compare_duration is set, the ListAssetsResult's \"state_change\" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible \"state_change\" values when compare_duration is specified: * \"ADDED\": indicates that the asset was not present at the start of compare_duration, but present at read_time. * \"REMOVED\": indicates that the asset was present at the start of compare_duration, but not present at read_time. * \"ACTIVE\": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is \"UNUSED\", which will be the state_change set for all assets present at read_time. (optional)
    field_mask = 'field_mask_example' # str | A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields. (optional)
    filter = 'filter_example' # str | Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following are the allowed field and operator combinations: * name: `=` * update_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = \"2019-06-10T16:07:18-07:00\"` `update_time = 1560208038000` * create_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = \"2019-06-10T16:07:18-07:00\"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : \"\"` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : \"\"` (optional)
    order_by = 'order_by_example' # str | Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: \"name,resource_properties.a_property\". The default sorting order is ascending. To specify descending order for a field, a suffix \" desc\" should be appended to the field name. For example: \"name desc,resource_properties.a_property\". Redundant space characters in the syntax are insignificant. \"name desc,resource_properties.a_property\" and \" name desc , resource_properties.a_property \" are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type (optional)
    page_size = 56 # int | The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. (optional)
    page_token = 'page_token_example' # str | The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data. (optional)
    read_time = 'read_time_example' # str | Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. (optional)

    try:
        api_response = api_instance.securitycenter_projects_assets_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, compare_duration=compare_duration, field_mask=field_mask, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, read_time=read_time)
        print("The response of ProjectsApi->securitycenter_projects_assets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_assets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: \&quot;organizations/[organization_id]\&quot;, \&quot;folders/[folder_id]\&quot;, or \&quot;projects/[project_id]\&quot;. | 
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
 **compare_duration** | **str**| When compare_duration is set, the ListAssetsResult&#39;s \&quot;state_change\&quot; attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don&#39;t affect the result. For example, the results aren&#39;t affected if the asset is removed and re-created again. Possible \&quot;state_change\&quot; values when compare_duration is specified: * \&quot;ADDED\&quot;: indicates that the asset was not present at the start of compare_duration, but present at read_time. * \&quot;REMOVED\&quot;: indicates that the asset was present at the start of compare_duration, but not present at read_time. * \&quot;ACTIVE\&quot;: indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is \&quot;UNUSED\&quot;, which will be the state_change set for all assets present at read_time. | [optional] 
 **field_mask** | **str**| A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields. | [optional] 
 **filter** | **str**| Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators &#x60;AND&#x60; and &#x60;OR&#x60;. Parentheses are supported, and &#x60;OR&#x60; has higher precedence than &#x60;AND&#x60;. Restrictions have the form &#x60; &#x60; and may have a &#x60;-&#x60; character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * &#x60;&#x3D;&#x60; for all value types. * &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; for integer values. * &#x60;:&#x60;, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals &#x60;true&#x60; and &#x60;false&#x60; without quotes. The following are the allowed field and operator combinations: * name: &#x60;&#x3D;&#x60; * update_time: &#x60;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: &#x60;update_time &#x3D; \&quot;2019-06-10T16:07:18-07:00\&quot;&#x60; &#x60;update_time &#x3D; 1560208038000&#x60; * create_time: &#x60;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: &#x60;create_time &#x3D; \&quot;2019-06-10T16:07:18-07:00\&quot;&#x60; &#x60;create_time &#x3D; 1560208038000&#x60; * iam_policy.policy_blob: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource_properties: &#x60;&#x3D;&#x60;, &#x60;:&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; * security_marks.marks: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * security_center_properties.resource_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * security_center_properties.resource_display_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * security_center_properties.resource_type: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * security_center_properties.resource_parent: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * security_center_properties.resource_parent_display_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * security_center_properties.resource_project: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * security_center_properties.resource_project_display_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * security_center_properties.resource_owners: &#x60;&#x3D;&#x60;, &#x60;:&#x60; For example, &#x60;resource_properties.size &#x3D; 100&#x60; is a valid filter string. Use a partial match on the empty string to filter based on a property existing: &#x60;resource_properties.my_property : \&quot;\&quot;&#x60; Use a negated partial match on the empty string to filter based on a property not existing: &#x60;-resource_properties.my_property : \&quot;\&quot;&#x60; | [optional] 
 **order_by** | **str**| Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: \&quot;name,resource_properties.a_property\&quot;. The default sorting order is ascending. To specify descending order for a field, a suffix \&quot; desc\&quot; should be appended to the field name. For example: \&quot;name desc,resource_properties.a_property\&quot;. Redundant space characters in the syntax are insignificant. \&quot;name desc,resource_properties.a_property\&quot; and \&quot; name desc , resource_properties.a_property \&quot; are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type | [optional] 
 **page_size** | **int**| The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. | [optional] 
 **page_token** | **str**| The value returned by the last &#x60;ListAssetsResponse&#x60;; indicates that this is a continuation of a prior &#x60;ListAssets&#x60; call, and that the system should return the next page of data. | [optional] 
 **read_time** | **str**| Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API&#39;s version of NOW. | [optional] 

### Return type

[**ListAssetsResponse**](ListAssetsResponse.md)

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

# **securitycenter_projects_big_query_exports_create**
> GoogleCloudSecuritycenterV1BigQueryExport securitycenter_projects_big_query_exports_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, big_query_export_id=big_query_export_id, google_cloud_securitycenter_v1_big_query_export=google_cloud_securitycenter_v1_big_query_export)



Creates a BigQuery export.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_securitycenter_v1_big_query_export import GoogleCloudSecuritycenterV1BigQueryExport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The name of the parent resource of the new BigQuery export. Its format is \"organizations/[organization_id]\", \"folders/[folder_id]\", or \"projects/[project_id]\".
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
    big_query_export_id = 'big_query_export_id_example' # str | Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less. (optional)
    google_cloud_securitycenter_v1_big_query_export = openapi_client.GoogleCloudSecuritycenterV1BigQueryExport() # GoogleCloudSecuritycenterV1BigQueryExport |  (optional)

    try:
        api_response = api_instance.securitycenter_projects_big_query_exports_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, big_query_export_id=big_query_export_id, google_cloud_securitycenter_v1_big_query_export=google_cloud_securitycenter_v1_big_query_export)
        print("The response of ProjectsApi->securitycenter_projects_big_query_exports_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_big_query_exports_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the parent resource of the new BigQuery export. Its format is \&quot;organizations/[organization_id]\&quot;, \&quot;folders/[folder_id]\&quot;, or \&quot;projects/[project_id]\&quot;. | 
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
 **big_query_export_id** | **str**| Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less. | [optional] 
 **google_cloud_securitycenter_v1_big_query_export** | [**GoogleCloudSecuritycenterV1BigQueryExport**](GoogleCloudSecuritycenterV1BigQueryExport.md)|  | [optional] 

### Return type

[**GoogleCloudSecuritycenterV1BigQueryExport**](GoogleCloudSecuritycenterV1BigQueryExport.md)

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

# **securitycenter_projects_big_query_exports_list**
> ListBigQueryExportsResponse securitycenter_projects_big_query_exports_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_big_query_exports_response import ListBigQueryExportsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The parent, which owns the collection of BigQuery exports. Its format is \"organizations/[organization_id]\", \"folders/[folder_id]\", \"projects/[project_id]\".
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
    page_size = 56 # int | The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. (optional)
    page_token = 'page_token_example' # str | A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token. (optional)

    try:
        api_response = api_instance.securitycenter_projects_big_query_exports_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->securitycenter_projects_big_query_exports_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_big_query_exports_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent, which owns the collection of BigQuery exports. Its format is \&quot;organizations/[organization_id]\&quot;, \&quot;folders/[folder_id]\&quot;, \&quot;projects/[project_id]\&quot;. | 
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
 **page_size** | **int**| The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. | [optional] 
 **page_token** | **str**| A page token, received from a previous &#x60;ListBigQueryExports&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListBigQueryExports&#x60; must match the call that provided the page token. | [optional] 

### Return type

[**ListBigQueryExportsResponse**](ListBigQueryExportsResponse.md)

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

# **securitycenter_projects_event_threat_detection_settings_validate_custom_module**
> ValidateEventThreatDetectionCustomModuleResponse securitycenter_projects_event_threat_detection_settings_validate_custom_module(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, validate_event_threat_detection_custom_module_request=validate_event_threat_detection_custom_module_request)



Validates the given Event Threat Detection custom module.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.validate_event_threat_detection_custom_module_request import ValidateEventThreatDetectionCustomModuleRequest
from openapi_client.models.validate_event_threat_detection_custom_module_response import ValidateEventThreatDetectionCustomModuleResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. Resource name of the parent to validate the Custom Module under. Its format is: * \"organizations/{organization}/eventThreatDetectionSettings\". * \"folders/{folder}/eventThreatDetectionSettings\". * \"projects/{project}/eventThreatDetectionSettings\".
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
    validate_event_threat_detection_custom_module_request = openapi_client.ValidateEventThreatDetectionCustomModuleRequest() # ValidateEventThreatDetectionCustomModuleRequest |  (optional)

    try:
        api_response = api_instance.securitycenter_projects_event_threat_detection_settings_validate_custom_module(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, validate_event_threat_detection_custom_module_request=validate_event_threat_detection_custom_module_request)
        print("The response of ProjectsApi->securitycenter_projects_event_threat_detection_settings_validate_custom_module:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_event_threat_detection_settings_validate_custom_module: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Resource name of the parent to validate the Custom Module under. Its format is: * \&quot;organizations/{organization}/eventThreatDetectionSettings\&quot;. * \&quot;folders/{folder}/eventThreatDetectionSettings\&quot;. * \&quot;projects/{project}/eventThreatDetectionSettings\&quot;. | 
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
 **validate_event_threat_detection_custom_module_request** | [**ValidateEventThreatDetectionCustomModuleRequest**](ValidateEventThreatDetectionCustomModuleRequest.md)|  | [optional] 

### Return type

[**ValidateEventThreatDetectionCustomModuleResponse**](ValidateEventThreatDetectionCustomModuleResponse.md)

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

# **securitycenter_projects_findings_bulk_mute**
> Operation securitycenter_projects_findings_bulk_mute(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_mute_findings_request=bulk_mute_findings_request)



Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bulk_mute_findings_request import BulkMuteFindingsRequest
from openapi_client.models.operation import Operation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The parent, at which bulk action needs to be applied. Its format is \"organizations/[organization_id]\", \"folders/[folder_id]\", \"projects/[project_id]\".
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
    bulk_mute_findings_request = openapi_client.BulkMuteFindingsRequest() # BulkMuteFindingsRequest |  (optional)

    try:
        api_response = api_instance.securitycenter_projects_findings_bulk_mute(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, bulk_mute_findings_request=bulk_mute_findings_request)
        print("The response of ProjectsApi->securitycenter_projects_findings_bulk_mute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_findings_bulk_mute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent, at which bulk action needs to be applied. Its format is \&quot;organizations/[organization_id]\&quot;, \&quot;folders/[folder_id]\&quot;, \&quot;projects/[project_id]\&quot;. | 
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
 **bulk_mute_findings_request** | [**BulkMuteFindingsRequest**](BulkMuteFindingsRequest.md)|  | [optional] 

### Return type

[**Operation**](Operation.md)

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

# **securitycenter_projects_mute_configs_create**
> GoogleCloudSecuritycenterV1MuteConfig securitycenter_projects_mute_configs_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, mute_config_id=mute_config_id, google_cloud_securitycenter_v1_mute_config=google_cloud_securitycenter_v1_mute_config)



Creates a mute config.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_securitycenter_v1_mute_config import GoogleCloudSecuritycenterV1MuteConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. Resource name of the new mute configs's parent. Its format is \"organizations/[organization_id]\", \"folders/[folder_id]\", or \"projects/[project_id]\".
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
    mute_config_id = 'mute_config_id_example' # str | Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less. (optional)
    google_cloud_securitycenter_v1_mute_config = openapi_client.GoogleCloudSecuritycenterV1MuteConfig() # GoogleCloudSecuritycenterV1MuteConfig |  (optional)

    try:
        api_response = api_instance.securitycenter_projects_mute_configs_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, mute_config_id=mute_config_id, google_cloud_securitycenter_v1_mute_config=google_cloud_securitycenter_v1_mute_config)
        print("The response of ProjectsApi->securitycenter_projects_mute_configs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_mute_configs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Resource name of the new mute configs&#39;s parent. Its format is \&quot;organizations/[organization_id]\&quot;, \&quot;folders/[folder_id]\&quot;, or \&quot;projects/[project_id]\&quot;. | 
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
 **mute_config_id** | **str**| Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less. | [optional] 
 **google_cloud_securitycenter_v1_mute_config** | [**GoogleCloudSecuritycenterV1MuteConfig**](GoogleCloudSecuritycenterV1MuteConfig.md)|  | [optional] 

### Return type

[**GoogleCloudSecuritycenterV1MuteConfig**](GoogleCloudSecuritycenterV1MuteConfig.md)

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

# **securitycenter_projects_mute_configs_list**
> ListMuteConfigsResponse securitycenter_projects_mute_configs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists mute configs.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_mute_configs_response import ListMuteConfigsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The parent, which owns the collection of mute configs. Its format is \"organizations/[organization_id]\", \"folders/[folder_id]\", \"projects/[project_id]\".
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
    page_size = 56 # int | The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. (optional)
    page_token = 'page_token_example' # str | A page token, received from a previous `ListMuteConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMuteConfigs` must match the call that provided the page token. (optional)

    try:
        api_response = api_instance.securitycenter_projects_mute_configs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->securitycenter_projects_mute_configs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_mute_configs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent, which owns the collection of mute configs. Its format is \&quot;organizations/[organization_id]\&quot;, \&quot;folders/[folder_id]\&quot;, \&quot;projects/[project_id]\&quot;. | 
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
 **page_size** | **int**| The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. | [optional] 
 **page_token** | **str**| A page token, received from a previous &#x60;ListMuteConfigs&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListMuteConfigs&#x60; must match the call that provided the page token. | [optional] 

### Return type

[**ListMuteConfigsResponse**](ListMuteConfigsResponse.md)

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

# **securitycenter_projects_notification_configs_create**
> NotificationConfig securitycenter_projects_notification_configs_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, config_id=config_id, notification_config=notification_config)



Creates a notification config.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.notification_config import NotificationConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. Resource name of the new notification config's parent. Its format is \"organizations/[organization_id]\", \"folders/[folder_id]\", or \"projects/[project_id]\".
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
    config_id = 'config_id_example' # str | Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only. (optional)
    notification_config = openapi_client.NotificationConfig() # NotificationConfig |  (optional)

    try:
        api_response = api_instance.securitycenter_projects_notification_configs_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, config_id=config_id, notification_config=notification_config)
        print("The response of ProjectsApi->securitycenter_projects_notification_configs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_notification_configs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Resource name of the new notification config&#39;s parent. Its format is \&quot;organizations/[organization_id]\&quot;, \&quot;folders/[folder_id]\&quot;, or \&quot;projects/[project_id]\&quot;. | 
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
 **config_id** | **str**| Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only. | [optional] 
 **notification_config** | [**NotificationConfig**](NotificationConfig.md)|  | [optional] 

### Return type

[**NotificationConfig**](NotificationConfig.md)

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

# **securitycenter_projects_notification_configs_list**
> ListNotificationConfigsResponse securitycenter_projects_notification_configs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists notification configs.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_notification_configs_response import ListNotificationConfigsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The name of the parent in which to list the notification configurations. Its format is \"organizations/[organization_id]\", \"folders/[folder_id]\", or \"projects/[project_id]\".
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
    page_size = 56 # int | The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. (optional)
    page_token = 'page_token_example' # str | The value returned by the last `ListNotificationConfigsResponse`; indicates that this is a continuation of a prior `ListNotificationConfigs` call, and that the system should return the next page of data. (optional)

    try:
        api_response = api_instance.securitycenter_projects_notification_configs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->securitycenter_projects_notification_configs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_notification_configs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the parent in which to list the notification configurations. Its format is \&quot;organizations/[organization_id]\&quot;, \&quot;folders/[folder_id]\&quot;, or \&quot;projects/[project_id]\&quot;. | 
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
 **page_size** | **int**| The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. | [optional] 
 **page_token** | **str**| The value returned by the last &#x60;ListNotificationConfigsResponse&#x60;; indicates that this is a continuation of a prior &#x60;ListNotificationConfigs&#x60; call, and that the system should return the next page of data. | [optional] 

### Return type

[**ListNotificationConfigsResponse**](ListNotificationConfigsResponse.md)

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

# **securitycenter_projects_security_health_analytics_settings_custom_modules_create**
> GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule securitycenter_projects_security_health_analytics_settings_custom_modules_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_securitycenter_v1_security_health_analytics_custom_module=google_cloud_securitycenter_v1_security_health_analytics_custom_module)



Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_securitycenter_v1_security_health_analytics_custom_module import GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. Resource name of the new custom module's parent. Its format is \"organizations/{organization}/securityHealthAnalyticsSettings\", \"folders/{folder}/securityHealthAnalyticsSettings\", or \"projects/{project}/securityHealthAnalyticsSettings\"
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
    google_cloud_securitycenter_v1_security_health_analytics_custom_module = openapi_client.GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule() # GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule |  (optional)

    try:
        api_response = api_instance.securitycenter_projects_security_health_analytics_settings_custom_modules_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_securitycenter_v1_security_health_analytics_custom_module=google_cloud_securitycenter_v1_security_health_analytics_custom_module)
        print("The response of ProjectsApi->securitycenter_projects_security_health_analytics_settings_custom_modules_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_security_health_analytics_settings_custom_modules_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Resource name of the new custom module&#39;s parent. Its format is \&quot;organizations/{organization}/securityHealthAnalyticsSettings\&quot;, \&quot;folders/{folder}/securityHealthAnalyticsSettings\&quot;, or \&quot;projects/{project}/securityHealthAnalyticsSettings\&quot; | 
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
 **google_cloud_securitycenter_v1_security_health_analytics_custom_module** | [**GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule**](GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule.md)|  | [optional] 

### Return type

[**GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule**](GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule.md)

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

# **securitycenter_projects_security_health_analytics_settings_custom_modules_delete**
> object securitycenter_projects_security_health_analytics_settings_custom_modules_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    name = 'name_example' # str | Required. Name of the custom module to delete. Its format is \"organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}\", \"folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}\", or \"projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}\"
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
        api_response = api_instance.securitycenter_projects_security_health_analytics_settings_custom_modules_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->securitycenter_projects_security_health_analytics_settings_custom_modules_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_security_health_analytics_settings_custom_modules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. Name of the custom module to delete. Its format is \&quot;organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}\&quot;, \&quot;folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}\&quot;, or \&quot;projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}\&quot; | 
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

# **securitycenter_projects_security_health_analytics_settings_custom_modules_list**
> ListSecurityHealthAnalyticsCustomModulesResponse securitycenter_projects_security_health_analytics_settings_custom_modules_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_security_health_analytics_custom_modules_response import ListSecurityHealthAnalyticsCustomModulesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. Name of parent to list custom modules. Its format is \"organizations/{organization}/securityHealthAnalyticsSettings\", \"folders/{folder}/securityHealthAnalyticsSettings\", or \"projects/{project}/securityHealthAnalyticsSettings\"
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
    page_size = 56 # int | The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. (optional)
    page_token = 'page_token_example' # str | The value returned by the last call indicating a continuation (optional)

    try:
        api_response = api_instance.securitycenter_projects_security_health_analytics_settings_custom_modules_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->securitycenter_projects_security_health_analytics_settings_custom_modules_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_security_health_analytics_settings_custom_modules_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Name of parent to list custom modules. Its format is \&quot;organizations/{organization}/securityHealthAnalyticsSettings\&quot;, \&quot;folders/{folder}/securityHealthAnalyticsSettings\&quot;, or \&quot;projects/{project}/securityHealthAnalyticsSettings\&quot; | 
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
 **page_size** | **int**| The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. | [optional] 
 **page_token** | **str**| The value returned by the last call indicating a continuation | [optional] 

### Return type

[**ListSecurityHealthAnalyticsCustomModulesResponse**](ListSecurityHealthAnalyticsCustomModulesResponse.md)

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

# **securitycenter_projects_security_health_analytics_settings_custom_modules_list_descendant**
> ListDescendantSecurityHealthAnalyticsCustomModulesResponse securitycenter_projects_security_health_analytics_settings_custom_modules_list_descendant(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_descendant_security_health_analytics_custom_modules_response import ListDescendantSecurityHealthAnalyticsCustomModulesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. Name of parent to list descendant custom modules. Its format is \"organizations/{organization}/securityHealthAnalyticsSettings\", \"folders/{folder}/securityHealthAnalyticsSettings\", or \"projects/{project}/securityHealthAnalyticsSettings\"
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
    page_size = 56 # int | The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. (optional)
    page_token = 'page_token_example' # str | The value returned by the last call indicating a continuation (optional)

    try:
        api_response = api_instance.securitycenter_projects_security_health_analytics_settings_custom_modules_list_descendant(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->securitycenter_projects_security_health_analytics_settings_custom_modules_list_descendant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_security_health_analytics_settings_custom_modules_list_descendant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Name of parent to list descendant custom modules. Its format is \&quot;organizations/{organization}/securityHealthAnalyticsSettings\&quot;, \&quot;folders/{folder}/securityHealthAnalyticsSettings\&quot;, or \&quot;projects/{project}/securityHealthAnalyticsSettings\&quot; | 
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
 **page_size** | **int**| The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. | [optional] 
 **page_token** | **str**| The value returned by the last call indicating a continuation | [optional] 

### Return type

[**ListDescendantSecurityHealthAnalyticsCustomModulesResponse**](ListDescendantSecurityHealthAnalyticsCustomModulesResponse.md)

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

# **securitycenter_projects_security_health_analytics_settings_custom_modules_simulate**
> SimulateSecurityHealthAnalyticsCustomModuleResponse securitycenter_projects_security_health_analytics_settings_custom_modules_simulate(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, simulate_security_health_analytics_custom_module_request=simulate_security_health_analytics_custom_module_request)



Simulates a given SecurityHealthAnalyticsCustomModule and Resource.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.simulate_security_health_analytics_custom_module_request import SimulateSecurityHealthAnalyticsCustomModuleRequest
from openapi_client.models.simulate_security_health_analytics_custom_module_response import SimulateSecurityHealthAnalyticsCustomModuleResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: `organizations/{organization_id}`
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
    simulate_security_health_analytics_custom_module_request = openapi_client.SimulateSecurityHealthAnalyticsCustomModuleRequest() # SimulateSecurityHealthAnalyticsCustomModuleRequest |  (optional)

    try:
        api_response = api_instance.securitycenter_projects_security_health_analytics_settings_custom_modules_simulate(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, simulate_security_health_analytics_custom_module_request=simulate_security_health_analytics_custom_module_request)
        print("The response of ProjectsApi->securitycenter_projects_security_health_analytics_settings_custom_modules_simulate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_security_health_analytics_settings_custom_modules_simulate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: &#x60;organizations/{organization_id}&#x60; | 
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
 **simulate_security_health_analytics_custom_module_request** | [**SimulateSecurityHealthAnalyticsCustomModuleRequest**](SimulateSecurityHealthAnalyticsCustomModuleRequest.md)|  | [optional] 

### Return type

[**SimulateSecurityHealthAnalyticsCustomModuleResponse**](SimulateSecurityHealthAnalyticsCustomModuleResponse.md)

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

# **securitycenter_projects_security_health_analytics_settings_effective_custom_modules_get**
> GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule securitycenter_projects_security_health_analytics_settings_effective_custom_modules_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)



Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_securitycenter_v1_effective_security_health_analytics_custom_module import GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    name = 'name_example' # str | Required. Name of the effective custom module to get. Its format is \"organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}\", \"folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}\", or \"projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}\"
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
    filter = 'filter_example' # str | The standard list filter. (optional)
    page_size = 56 # int | The standard list page size. (optional)
    page_token = 'page_token_example' # str | The standard list page token. (optional)

    try:
        api_response = api_instance.securitycenter_projects_security_health_analytics_settings_effective_custom_modules_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->securitycenter_projects_security_health_analytics_settings_effective_custom_modules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_security_health_analytics_settings_effective_custom_modules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. Name of the effective custom module to get. Its format is \&quot;organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}\&quot;, \&quot;folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}\&quot;, or \&quot;projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}\&quot; | 
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
 **filter** | **str**| The standard list filter. | [optional] 
 **page_size** | **int**| The standard list page size. | [optional] 
 **page_token** | **str**| The standard list page token. | [optional] 

### Return type

[**GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule**](GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule.md)

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

# **securitycenter_projects_security_health_analytics_settings_effective_custom_modules_list**
> ListEffectiveSecurityHealthAnalyticsCustomModulesResponse securitycenter_projects_security_health_analytics_settings_effective_custom_modules_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_effective_security_health_analytics_custom_modules_response import ListEffectiveSecurityHealthAnalyticsCustomModulesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. Name of parent to list effective custom modules. Its format is \"organizations/{organization}/securityHealthAnalyticsSettings\", \"folders/{folder}/securityHealthAnalyticsSettings\", or \"projects/{project}/securityHealthAnalyticsSettings\"
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
    page_size = 56 # int | The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. (optional)
    page_token = 'page_token_example' # str | The value returned by the last call indicating a continuation (optional)

    try:
        api_response = api_instance.securitycenter_projects_security_health_analytics_settings_effective_custom_modules_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->securitycenter_projects_security_health_analytics_settings_effective_custom_modules_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_security_health_analytics_settings_effective_custom_modules_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Name of parent to list effective custom modules. Its format is \&quot;organizations/{organization}/securityHealthAnalyticsSettings\&quot;, \&quot;folders/{folder}/securityHealthAnalyticsSettings\&quot;, or \&quot;projects/{project}/securityHealthAnalyticsSettings\&quot; | 
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
 **page_size** | **int**| The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. | [optional] 
 **page_token** | **str**| The value returned by the last call indicating a continuation | [optional] 

### Return type

[**ListEffectiveSecurityHealthAnalyticsCustomModulesResponse**](ListEffectiveSecurityHealthAnalyticsCustomModulesResponse.md)

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

# **securitycenter_projects_sources_findings_external_systems_patch**
> GoogleCloudSecuritycenterV1ExternalSystem securitycenter_projects_sources_findings_external_systems_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, google_cloud_securitycenter_v1_external_system=google_cloud_securitycenter_v1_external_system)



Updates external system. This is for a given finding.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_securitycenter_v1_external_system import GoogleCloudSecuritycenterV1ExternalSystem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    name = 'name_example' # str | Full resource name of the external system, for example: \"organizations/1234/sources/5678/findings/123456/externalSystems/jira\", \"folders/1234/sources/5678/findings/123456/externalSystems/jira\", \"projects/1234/sources/5678/findings/123456/externalSystems/jira\"
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
    update_mask = 'update_mask_example' # str | The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated. (optional)
    google_cloud_securitycenter_v1_external_system = openapi_client.GoogleCloudSecuritycenterV1ExternalSystem() # GoogleCloudSecuritycenterV1ExternalSystem |  (optional)

    try:
        api_response = api_instance.securitycenter_projects_sources_findings_external_systems_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, google_cloud_securitycenter_v1_external_system=google_cloud_securitycenter_v1_external_system)
        print("The response of ProjectsApi->securitycenter_projects_sources_findings_external_systems_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_sources_findings_external_systems_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Full resource name of the external system, for example: \&quot;organizations/1234/sources/5678/findings/123456/externalSystems/jira\&quot;, \&quot;folders/1234/sources/5678/findings/123456/externalSystems/jira\&quot;, \&quot;projects/1234/sources/5678/findings/123456/externalSystems/jira\&quot; | 
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
 **update_mask** | **str**| The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated. | [optional] 
 **google_cloud_securitycenter_v1_external_system** | [**GoogleCloudSecuritycenterV1ExternalSystem**](GoogleCloudSecuritycenterV1ExternalSystem.md)|  | [optional] 

### Return type

[**GoogleCloudSecuritycenterV1ExternalSystem**](GoogleCloudSecuritycenterV1ExternalSystem.md)

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

# **securitycenter_projects_sources_findings_group**
> GroupFindingsResponse securitycenter_projects_sources_findings_group(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, group_findings_request=group_findings_request)



Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.group_findings_request import GroupFindingsRequest
from openapi_client.models.group_findings_response import GroupFindingsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. Name of the source to groupBy. Its format is \"organizations/[organization_id]/sources/[source_id]\", folders/[folder_id]/sources/[source_id], or projects/[project_id]/sources/[source_id]. To groupBy across all sources provide a source_id of `-`. For example: organizations/{organization_id}/sources/-, folders/{folder_id}/sources/-, or projects/{project_id}/sources/-
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
    group_findings_request = openapi_client.GroupFindingsRequest() # GroupFindingsRequest |  (optional)

    try:
        api_response = api_instance.securitycenter_projects_sources_findings_group(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, group_findings_request=group_findings_request)
        print("The response of ProjectsApi->securitycenter_projects_sources_findings_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_sources_findings_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Name of the source to groupBy. Its format is \&quot;organizations/[organization_id]/sources/[source_id]\&quot;, folders/[folder_id]/sources/[source_id], or projects/[project_id]/sources/[source_id]. To groupBy across all sources provide a source_id of &#x60;-&#x60;. For example: organizations/{organization_id}/sources/-, folders/{folder_id}/sources/-, or projects/{project_id}/sources/- | 
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
 **group_findings_request** | [**GroupFindingsRequest**](GroupFindingsRequest.md)|  | [optional] 

### Return type

[**GroupFindingsResponse**](GroupFindingsResponse.md)

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

# **securitycenter_projects_sources_findings_list**
> ListFindingsResponse securitycenter_projects_sources_findings_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, compare_duration=compare_duration, field_mask=field_mask, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, read_time=read_time)



Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_findings_response import ListFindingsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. Name of the source the findings belong to. Its format is \"organizations/[organization_id]/sources/[source_id], folders/[folder_id]/sources/[source_id], or projects/[project_id]/sources/[source_id]\". To list across all sources provide a source_id of `-`. For example: organizations/{organization_id}/sources/-, folders/{folder_id}/sources/- or projects/{projects_id}/sources/-
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
    compare_duration = 'compare_duration_example' # str | When compare_duration is set, the ListFindingsResult's \"state_change\" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible \"state_change\" values when compare_duration is specified: * \"CHANGED\": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * \"UNCHANGED\": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * \"ADDED\": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * \"REMOVED\": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is \"UNUSED\", which will be the state_change set for all findings present at read_time. (optional)
    field_mask = 'field_mask_example' # str | A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields. (optional)
    filter = 'filter_example' # str | Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = \"2019-06-10T16:07:18-07:00\"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : \"\"` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : \"\"` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.display_name: `=`, `:` (optional)
    order_by = 'order_by_example' # str | Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: \"name,resource_properties.a_property\". The default sorting order is ascending. To specify descending order for a field, a suffix \" desc\" should be appended to the field name. For example: \"name desc,source_properties.a_property\". Redundant space characters in the syntax are insignificant. \"name desc,source_properties.a_property\" and \" name desc , source_properties.a_property \" are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks (optional)
    page_size = 56 # int | The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. (optional)
    page_token = 'page_token_example' # str | The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data. (optional)
    read_time = 'read_time_example' # str | Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. (optional)

    try:
        api_response = api_instance.securitycenter_projects_sources_findings_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, compare_duration=compare_duration, field_mask=field_mask, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, read_time=read_time)
        print("The response of ProjectsApi->securitycenter_projects_sources_findings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_sources_findings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Name of the source the findings belong to. Its format is \&quot;organizations/[organization_id]/sources/[source_id], folders/[folder_id]/sources/[source_id], or projects/[project_id]/sources/[source_id]\&quot;. To list across all sources provide a source_id of &#x60;-&#x60;. For example: organizations/{organization_id}/sources/-, folders/{folder_id}/sources/- or projects/{projects_id}/sources/- | 
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
 **compare_duration** | **str**| When compare_duration is set, the ListFindingsResult&#39;s \&quot;state_change\&quot; attribute is updated to indicate whether the finding had its state changed, the finding&#39;s state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don&#39;t affect the result. For example, the results aren&#39;t affected if the finding is made inactive and then active again. Possible \&quot;state_change\&quot; values when compare_duration is specified: * \&quot;CHANGED\&quot;: indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * \&quot;UNCHANGED\&quot;: indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * \&quot;ADDED\&quot;: indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * \&quot;REMOVED\&quot;: indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is \&quot;UNUSED\&quot;, which will be the state_change set for all findings present at read_time. | [optional] 
 **field_mask** | **str**| A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields. | [optional] 
 **filter** | **str**| Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators &#x60;AND&#x60; and &#x60;OR&#x60;. Parentheses are supported, and &#x60;OR&#x60; has higher precedence than &#x60;AND&#x60;. Restrictions have the form &#x60; &#x60; and may have a &#x60;-&#x60; character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * &#x60;&#x3D;&#x60; for all value types. * &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; for integer values. * &#x60;:&#x60;, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals &#x60;true&#x60; and &#x60;false&#x60; without quotes. The following field and operator combinations are supported: * name: &#x60;&#x3D;&#x60; * parent: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * state: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * category: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * external_uri: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * event_time: &#x60;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: &#x60;event_time &#x3D; \&quot;2019-06-10T16:07:18-07:00\&quot;&#x60; &#x60;event_time &#x3D; 1560208038000&#x60; * severity: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * workflow_state: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * security_marks.marks: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * source_properties: &#x60;&#x3D;&#x60;, &#x60;:&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; For example, &#x60;source_properties.size &#x3D; 100&#x60; is a valid filter string. Use a partial match on the empty string to filter based on a property existing: &#x60;source_properties.my_property : \&quot;\&quot;&#x60; Use a negated partial match on the empty string to filter based on a property not existing: &#x60;-source_properties.my_property : \&quot;\&quot;&#x60; * resource: * resource.name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.parent_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.parent_display_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.project_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.project_display_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.type: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.folders.resource_folder: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.display_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; | [optional] 
 **order_by** | **str**| Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: \&quot;name,resource_properties.a_property\&quot;. The default sorting order is ascending. To specify descending order for a field, a suffix \&quot; desc\&quot; should be appended to the field name. For example: \&quot;name desc,source_properties.a_property\&quot;. Redundant space characters in the syntax are insignificant. \&quot;name desc,source_properties.a_property\&quot; and \&quot; name desc , source_properties.a_property \&quot; are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks | [optional] 
 **page_size** | **int**| The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. | [optional] 
 **page_token** | **str**| The value returned by the last &#x60;ListFindingsResponse&#x60;; indicates that this is a continuation of a prior &#x60;ListFindings&#x60; call, and that the system should return the next page of data. | [optional] 
 **read_time** | **str**| Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API&#39;s version of NOW. | [optional] 

### Return type

[**ListFindingsResponse**](ListFindingsResponse.md)

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

# **securitycenter_projects_sources_findings_set_mute**
> Finding securitycenter_projects_sources_findings_set_mute(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, set_mute_request=set_mute_request)



Updates the mute state of a finding.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.finding import Finding
from openapi_client.models.set_mute_request import SetMuteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    name = 'name_example' # str | Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: \"organizations/{organization_id}/sources/{source_id}/findings/{finding_id}\", \"folders/{folder_id}/sources/{source_id}/findings/{finding_id}\", \"projects/{project_id}/sources/{source_id}/findings/{finding_id}\".
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
    set_mute_request = openapi_client.SetMuteRequest() # SetMuteRequest |  (optional)

    try:
        api_response = api_instance.securitycenter_projects_sources_findings_set_mute(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, set_mute_request=set_mute_request)
        print("The response of ProjectsApi->securitycenter_projects_sources_findings_set_mute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_sources_findings_set_mute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: \&quot;organizations/{organization_id}/sources/{source_id}/findings/{finding_id}\&quot;, \&quot;folders/{folder_id}/sources/{source_id}/findings/{finding_id}\&quot;, \&quot;projects/{project_id}/sources/{source_id}/findings/{finding_id}\&quot;. | 
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
 **set_mute_request** | [**SetMuteRequest**](SetMuteRequest.md)|  | [optional] 

### Return type

[**Finding**](Finding.md)

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

# **securitycenter_projects_sources_findings_set_state**
> Finding securitycenter_projects_sources_findings_set_state(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, set_finding_state_request=set_finding_state_request)



Updates the state of a finding.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.finding import Finding
from openapi_client.models.set_finding_state_request import SetFindingStateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    name = 'name_example' # str | Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: \"organizations/{organization_id}/sources/{source_id}/findings/{finding_id}\", \"folders/{folder_id}/sources/{source_id}/findings/{finding_id}\", \"projects/{project_id}/sources/{source_id}/findings/{finding_id}\".
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
    set_finding_state_request = openapi_client.SetFindingStateRequest() # SetFindingStateRequest |  (optional)

    try:
        api_response = api_instance.securitycenter_projects_sources_findings_set_state(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, set_finding_state_request=set_finding_state_request)
        print("The response of ProjectsApi->securitycenter_projects_sources_findings_set_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_sources_findings_set_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: \&quot;organizations/{organization_id}/sources/{source_id}/findings/{finding_id}\&quot;, \&quot;folders/{folder_id}/sources/{source_id}/findings/{finding_id}\&quot;, \&quot;projects/{project_id}/sources/{source_id}/findings/{finding_id}\&quot;. | 
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
 **set_finding_state_request** | [**SetFindingStateRequest**](SetFindingStateRequest.md)|  | [optional] 

### Return type

[**Finding**](Finding.md)

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

# **securitycenter_projects_sources_list**
> ListSourcesResponse securitycenter_projects_sources_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists all sources belonging to an organization.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_sources_response import ListSourcesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://securitycenter.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://securitycenter.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. Resource name of the parent of sources to list. Its format should be \"organizations/[organization_id]\", \"folders/[folder_id]\", or \"projects/[project_id]\".
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
    page_size = 56 # int | The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. (optional)
    page_token = 'page_token_example' # str | The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data. (optional)

    try:
        api_response = api_instance.securitycenter_projects_sources_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->securitycenter_projects_sources_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->securitycenter_projects_sources_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Resource name of the parent of sources to list. Its format should be \&quot;organizations/[organization_id]\&quot;, \&quot;folders/[folder_id]\&quot;, or \&quot;projects/[project_id]\&quot;. | 
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
 **page_size** | **int**| The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. | [optional] 
 **page_token** | **str**| The value returned by the last &#x60;ListSourcesResponse&#x60;; indicates that this is a continuation of a prior &#x60;ListSources&#x60; call, and that the system should return the next page of data. | [optional] 

### Return type

[**ListSourcesResponse**](ListSourcesResponse.md)

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

