# openapi_client.GroupAndUserPickerApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_users_and_groups**](GroupAndUserPickerApi.md#find_users_and_groups) | **GET** /rest/api/3/groupuserpicker | Find users and groups


# **find_users_and_groups**
> FoundUsersAndGroups find_users_and_groups(query, max_results=max_results, show_avatar=show_avatar, field_id=field_id, project_id=project_id, issue_type_id=issue_type_id, avatar_size=avatar_size, case_insensitive=case_insensitive, exclude_connect_addons=exclude_connect_addons)

Find users and groups

Returns a list of users and groups matching a string. The string is used:   *  for users, to find a case-insensitive match with display name and e-mail address. Note that if a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required.  *  for groups, to find a case-sensitive match with group name.  For example, if the string *tin* is used, records with the display name *Tina*, email address *sarah@tinplatetraining.com*, and the group *accounting* would be returned.  Optionally, the search can be refined to:   *  the projects and issue types associated with a custom field, such as a user picker. The search can then be further refined to return only users and groups that have permission to view specific:           *  projects.      *  issue types.          If multiple projects or issue types are specified, they must be a subset of those enabled for the custom field or no results are returned. For example, if a field is enabled for projects A, B, and C then the search could be limited to projects B and C. However, if the search is limited to projects B and D, nothing is returned.  *  not return Connect app users and groups.  *  return groups that have a case-insensitive match with the query.  The primary use case for this resource is to populate a picker field suggestion list with users or groups. To this end, the returned object includes an `html` field for each list. This field highlights the matched query term in the item name with the HTML strong tag. Also, each list is wrapped in a response object that contains a header for use in a picker, specifically *Showing X of Y matching groups*.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/yodKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.found_users_and_groups import FoundUsersAndGroups
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupAndUserPickerApi(api_client)
    query = 'query_example' # str | The search string.
    max_results = 50 # int | The maximum number of items to return in each list. (optional) (default to 50)
    show_avatar = False # bool | Whether the user avatar should be returned. If an invalid value is provided, the default value is used. (optional) (default to False)
    field_id = 'field_id_example' # str | The custom field ID of the field this request is for. (optional)
    project_id = ['project_id_example'] # List[str] | The ID of a project that returned users and groups must have permission to view. To include multiple projects, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`. This parameter is only used when `fieldId` is present. (optional)
    issue_type_id = ['issue_type_id_example'] # List[str] | The ID of an issue type that returned users and groups must have permission to view. To include multiple issue types, provide an ampersand-separated list. For example, `issueTypeId=10000&issueTypeId=10001`. Special values, such as `-1` (all standard issue types) and `-2` (all subtask issue types), are supported. This parameter is only used when `fieldId` is present. (optional)
    avatar_size = xsmall # str | The size of the avatar to return. If an invalid value is provided, the default value is used. (optional) (default to xsmall)
    case_insensitive = False # bool | Whether the search for groups should be case insensitive. (optional) (default to False)
    exclude_connect_addons = False # bool | Whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used. (optional) (default to False)

    try:
        # Find users and groups
        api_response = api_instance.find_users_and_groups(query, max_results=max_results, show_avatar=show_avatar, field_id=field_id, project_id=project_id, issue_type_id=issue_type_id, avatar_size=avatar_size, case_insensitive=case_insensitive, exclude_connect_addons=exclude_connect_addons)
        print("The response of GroupAndUserPickerApi->find_users_and_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupAndUserPickerApi->find_users_and_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The search string. | 
 **max_results** | **int**| The maximum number of items to return in each list. | [optional] [default to 50]
 **show_avatar** | **bool**| Whether the user avatar should be returned. If an invalid value is provided, the default value is used. | [optional] [default to False]
 **field_id** | **str**| The custom field ID of the field this request is for. | [optional] 
 **project_id** | [**List[str]**](str.md)| The ID of a project that returned users and groups must have permission to view. To include multiple projects, provide an ampersand-separated list. For example, &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. This parameter is only used when &#x60;fieldId&#x60; is present. | [optional] 
 **issue_type_id** | [**List[str]**](str.md)| The ID of an issue type that returned users and groups must have permission to view. To include multiple issue types, provide an ampersand-separated list. For example, &#x60;issueTypeId&#x3D;10000&amp;issueTypeId&#x3D;10001&#x60;. Special values, such as &#x60;-1&#x60; (all standard issue types) and &#x60;-2&#x60; (all subtask issue types), are supported. This parameter is only used when &#x60;fieldId&#x60; is present. | [optional] 
 **avatar_size** | **str**| The size of the avatar to return. If an invalid value is provided, the default value is used. | [optional] [default to xsmall]
 **case_insensitive** | **bool**| Whether the search for groups should be case insensitive. | [optional] [default to False]
 **exclude_connect_addons** | **bool**| Whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used. | [optional] [default to False]

### Return type

[**FoundUsersAndGroups**](FoundUsersAndGroups.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the query parameter is not provided. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**429** | Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira&#39;s normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

