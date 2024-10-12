# openapi_client.IssueCustomFieldContextsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_issue_types_to_context**](IssueCustomFieldContextsApi.md#add_issue_types_to_context) | **PUT** /rest/api/3/field/{fieldId}/context/{contextId}/issuetype | Add issue types to context
[**assign_projects_to_custom_field_context**](IssueCustomFieldContextsApi.md#assign_projects_to_custom_field_context) | **PUT** /rest/api/3/field/{fieldId}/context/{contextId}/project | Assign custom field context to projects
[**create_custom_field_context**](IssueCustomFieldContextsApi.md#create_custom_field_context) | **POST** /rest/api/3/field/{fieldId}/context | Create custom field context
[**delete_custom_field_context**](IssueCustomFieldContextsApi.md#delete_custom_field_context) | **DELETE** /rest/api/3/field/{fieldId}/context/{contextId} | Delete custom field context
[**get_contexts_for_field**](IssueCustomFieldContextsApi.md#get_contexts_for_field) | **GET** /rest/api/3/field/{fieldId}/context | Get custom field contexts
[**get_custom_field_contexts_for_projects_and_issue_types**](IssueCustomFieldContextsApi.md#get_custom_field_contexts_for_projects_and_issue_types) | **POST** /rest/api/3/field/{fieldId}/context/mapping | Get custom field contexts for projects and issue types
[**get_default_values**](IssueCustomFieldContextsApi.md#get_default_values) | **GET** /rest/api/3/field/{fieldId}/context/defaultValue | Get custom field contexts default values
[**get_issue_type_mappings_for_contexts**](IssueCustomFieldContextsApi.md#get_issue_type_mappings_for_contexts) | **GET** /rest/api/3/field/{fieldId}/context/issuetypemapping | Get issue types for custom field context
[**get_project_context_mapping**](IssueCustomFieldContextsApi.md#get_project_context_mapping) | **GET** /rest/api/3/field/{fieldId}/context/projectmapping | Get project mappings for custom field context
[**remove_custom_field_context_from_projects**](IssueCustomFieldContextsApi.md#remove_custom_field_context_from_projects) | **POST** /rest/api/3/field/{fieldId}/context/{contextId}/project/remove | Remove custom field context from projects
[**remove_issue_types_from_context**](IssueCustomFieldContextsApi.md#remove_issue_types_from_context) | **POST** /rest/api/3/field/{fieldId}/context/{contextId}/issuetype/remove | Remove issue types from context
[**set_default_values**](IssueCustomFieldContextsApi.md#set_default_values) | **PUT** /rest/api/3/field/{fieldId}/context/defaultValue | Set custom field contexts default values
[**update_custom_field_context**](IssueCustomFieldContextsApi.md#update_custom_field_context) | **PUT** /rest/api/3/field/{fieldId}/context/{contextId} | Update custom field context


# **add_issue_types_to_context**
> object add_issue_types_to_context(field_id, context_id, issue_type_ids)

Add issue types to context

Adds issue types to a custom field context, appending the issue types to the issue types list.  A custom field context without any issue types applies to all issue types. Adding issue types to such a custom field context would result in it applying to only the listed issue types.  If any of the issue types exists in the custom field context, the operation fails and no issue types are added.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.issue_type_ids import IssueTypeIds
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
    api_instance = openapi_client.IssueCustomFieldContextsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field.
    context_id = 56 # int | The ID of the context.
    issue_type_ids = {"issueTypeIds":["10001","10005","10006"]} # IssueTypeIds | 

    try:
        # Add issue types to context
        api_response = api_instance.add_issue_types_to_context(field_id, context_id, issue_type_ids)
        print("The response of IssueCustomFieldContextsApi->add_issue_types_to_context:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldContextsApi->add_issue_types_to_context: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field. | 
 **context_id** | **int**| The ID of the context. | 
 **issue_type_ids** | [**IssueTypeIds**](IssueTypeIds.md)|  | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if operation is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the custom field, context, or one or more issue types are not found. |  -  |
**409** | Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assign_projects_to_custom_field_context**
> object assign_projects_to_custom_field_context(field_id, context_id, project_ids)

Assign custom field context to projects

Assigns a custom field context to projects.  If any project in the request is assigned to any context of the custom field, the operation fails.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.project_ids import ProjectIds
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
    api_instance = openapi_client.IssueCustomFieldContextsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field.
    context_id = 56 # int | The ID of the context.
    project_ids = {"projectIds":["10001","10005","10006"]} # ProjectIds | 

    try:
        # Assign custom field context to projects
        api_response = api_instance.assign_projects_to_custom_field_context(field_id, context_id, project_ids)
        print("The response of IssueCustomFieldContextsApi->assign_projects_to_custom_field_context:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldContextsApi->assign_projects_to_custom_field_context: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field. | 
 **context_id** | **int**| The ID of the context. | 
 **project_ids** | [**ProjectIds**](ProjectIds.md)|  | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if operation is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the custom field, context, or project is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_custom_field_context**
> CreateCustomFieldContext create_custom_field_context(field_id, create_custom_field_context)

Create custom field context

Creates a custom field context.  If `projectIds` is empty, a global context is created. A global context is one that applies to all project. If `issueTypeIds` is empty, the context applies to all issue types.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.create_custom_field_context import CreateCustomFieldContext
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
    api_instance = openapi_client.IssueCustomFieldContextsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field.
    create_custom_field_context = {"description":"A context used to define the custom field options for bugs.","issueTypeIds":["10010"],"name":"Bug fields context","projectIds":[]} # CreateCustomFieldContext | 

    try:
        # Create custom field context
        api_response = api_instance.create_custom_field_context(field_id, create_custom_field_context)
        print("The response of IssueCustomFieldContextsApi->create_custom_field_context:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldContextsApi->create_custom_field_context: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field. | 
 **create_custom_field_context** | [**CreateCustomFieldContext**](CreateCustomFieldContext.md)|  | 

### Return type

[**CreateCustomFieldContext**](CreateCustomFieldContext.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returned if the custom field context is created. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**404** | Returned if the field, project, or issue type is not found. |  -  |
**409** | Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_custom_field_context**
> object delete_custom_field_context(field_id, context_id)

Delete custom field context

Deletes a [ custom field context](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
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
    api_instance = openapi_client.IssueCustomFieldContextsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field.
    context_id = 56 # int | The ID of the context.

    try:
        # Delete custom field context
        api_response = api_instance.delete_custom_field_context(field_id, context_id)
        print("The response of IssueCustomFieldContextsApi->delete_custom_field_context:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldContextsApi->delete_custom_field_context: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field. | 
 **context_id** | **int**| The ID of the context. | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the context is deleted. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the custom field or the context is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_contexts_for_field**
> PageBeanCustomFieldContext get_contexts_for_field(field_id, is_any_issue_type=is_any_issue_type, is_global_context=is_global_context, context_id=context_id, start_at=start_at, max_results=max_results)

Get custom field contexts

Returns a [paginated](#pagination) list of [ contexts](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html) for a custom field. Contexts can be returned as follows:   *  With no other parameters set, all contexts.  *  By defining `id` only, all contexts from the list of IDs.  *  By defining `isAnyIssueType`, limit the list of contexts returned to either those that apply to all issue types (true) or those that apply to only a subset of issue types (false)  *  By defining `isGlobalContext`, limit the list of contexts return to either those that apply to all projects (global contexts) (true) or those that apply to only a subset of projects (false).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_custom_field_context import PageBeanCustomFieldContext
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
    api_instance = openapi_client.IssueCustomFieldContextsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field.
    is_any_issue_type = True # bool | Whether to return contexts that apply to all issue types. (optional)
    is_global_context = True # bool | Whether to return contexts that apply to all projects. (optional)
    context_id = [56] # List[int] | The list of context IDs. To include multiple contexts, separate IDs with ampersand: `contextId=10000&contextId=10001`. (optional)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)

    try:
        # Get custom field contexts
        api_response = api_instance.get_contexts_for_field(field_id, is_any_issue_type=is_any_issue_type, is_global_context=is_global_context, context_id=context_id, start_at=start_at, max_results=max_results)
        print("The response of IssueCustomFieldContextsApi->get_contexts_for_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldContextsApi->get_contexts_for_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field. | 
 **is_any_issue_type** | **bool**| Whether to return contexts that apply to all issue types. | [optional] 
 **is_global_context** | **bool**| Whether to return contexts that apply to all projects. | [optional] 
 **context_id** | [**List[int]**](int.md)| The list of context IDs. To include multiple contexts, separate IDs with ampersand: &#x60;contextId&#x3D;10000&amp;contextId&#x3D;10001&#x60;. | [optional] 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]

### Return type

[**PageBeanCustomFieldContext**](PageBeanCustomFieldContext.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the custom field was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_custom_field_contexts_for_projects_and_issue_types**
> PageBeanContextForProjectAndIssueType get_custom_field_contexts_for_projects_and_issue_types(field_id, project_issue_type_mappings, start_at=start_at, max_results=max_results)

Get custom field contexts for projects and issue types

Returns a [paginated](#pagination) list of project and issue type mappings and, for each mapping, the ID of a [custom field context](https://confluence.atlassian.com/x/k44fOw) that applies to the project and issue type.  If there is no custom field context assigned to the project then, if present, the custom field context that applies to all projects is returned if it also applies to the issue type or all issue types. If a custom field context is not found, the returned custom field context ID is `null`.  Duplicate project and issue type mappings cannot be provided in the request.  The order of the returned values is the same as provided in the request.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_context_for_project_and_issue_type import PageBeanContextForProjectAndIssueType
from openapi_client.models.project_issue_type_mappings import ProjectIssueTypeMappings
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
    api_instance = openapi_client.IssueCustomFieldContextsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field.
    project_issue_type_mappings = {"mappings":[{"issueTypeId":"10000","projectId":"10000"},{"issueTypeId":"10001","projectId":"10000"},{"issueTypeId":"10002","projectId":"10001"}]} # ProjectIssueTypeMappings | The list of project and issue type mappings.
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)

    try:
        # Get custom field contexts for projects and issue types
        api_response = api_instance.get_custom_field_contexts_for_projects_and_issue_types(field_id, project_issue_type_mappings, start_at=start_at, max_results=max_results)
        print("The response of IssueCustomFieldContextsApi->get_custom_field_contexts_for_projects_and_issue_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldContextsApi->get_custom_field_contexts_for_projects_and_issue_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field. | 
 **project_issue_type_mappings** | [**ProjectIssueTypeMappings**](ProjectIssueTypeMappings.md)| The list of project and issue type mappings. | 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]

### Return type

[**PageBeanContextForProjectAndIssueType**](PageBeanContextForProjectAndIssueType.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the custom field, project, or issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_default_values**
> PageBeanCustomFieldContextDefaultValue get_default_values(field_id, context_id=context_id, start_at=start_at, max_results=max_results)

Get custom field contexts default values

Returns a [paginated](#pagination) list of defaults for a custom field. The results can be filtered by `contextId`, otherwise all values are returned. If no defaults are set for a context, nothing is returned.   The returned object depends on type of the custom field:   *  `CustomFieldContextDefaultValueDate` (type `datepicker`) for date fields.  *  `CustomFieldContextDefaultValueDateTime` (type `datetimepicker`) for date-time fields.  *  `CustomFieldContextDefaultValueSingleOption` (type `option.single`) for single choice select lists and radio buttons.  *  `CustomFieldContextDefaultValueMultipleOption` (type `option.multiple`) for multiple choice select lists and checkboxes.  *  `CustomFieldContextDefaultValueCascadingOption` (type `option.cascading`) for cascading select lists.  *  `CustomFieldContextSingleUserPickerDefaults` (type `single.user.select`) for single users.  *  `CustomFieldContextDefaultValueMultiUserPicker` (type `multi.user.select`) for user lists.  *  `CustomFieldContextDefaultValueSingleGroupPicker` (type `grouppicker.single`) for single choice group pickers.  *  `CustomFieldContextDefaultValueMultipleGroupPicker` (type `grouppicker.multiple`) for multiple choice group pickers.  *  `CustomFieldContextDefaultValueURL` (type `url`) for URLs.  *  `CustomFieldContextDefaultValueProject` (type `project`) for project pickers.  *  `CustomFieldContextDefaultValueFloat` (type `float`) for floats (floating-point numbers).  *  `CustomFieldContextDefaultValueLabels` (type `labels`) for labels.  *  `CustomFieldContextDefaultValueTextField` (type `textfield`) for text fields.  *  `CustomFieldContextDefaultValueTextArea` (type `textarea`) for text area fields.  *  `CustomFieldContextDefaultValueReadOnly` (type `readonly`) for read only (text) fields.  *  `CustomFieldContextDefaultValueMultipleVersion` (type `version.multiple`) for single choice version pickers.  *  `CustomFieldContextDefaultValueSingleVersion` (type `version.single`) for multiple choice version pickers.  Forge custom fields [types](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/#data-types) are also supported, returning:   *  `CustomFieldContextDefaultValueForgeStringFieldBean` (type `forge.string`) for Forge string fields.  *  `CustomFieldContextDefaultValueForgeMultiStringFieldBean` (type `forge.string.list`) for Forge string collection fields.  *  `CustomFieldContextDefaultValueForgeObjectFieldBean` (type `forge.object`) for Forge object fields.  *  `CustomFieldContextDefaultValueForgeDateTimeFieldBean` (type `forge.datetime`) for Forge date-time fields.  *  `CustomFieldContextDefaultValueForgeGroupFieldBean` (type `forge.group`) for Forge group fields.  *  `CustomFieldContextDefaultValueForgeMultiGroupFieldBean` (type `forge.group.list`) for Forge group collection fields.  *  `CustomFieldContextDefaultValueForgeNumberFieldBean` (type `forge.number`) for Forge number fields.  *  `CustomFieldContextDefaultValueForgeUserFieldBean` (type `forge.user`) for Forge user fields.  *  `CustomFieldContextDefaultValueForgeMultiUserFieldBean` (type `forge.user.list`) for Forge user collection fields.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_custom_field_context_default_value import PageBeanCustomFieldContextDefaultValue
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
    api_instance = openapi_client.IssueCustomFieldContextsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field, for example `customfield\\_10000`.
    context_id = [56] # List[int] | The IDs of the contexts. (optional)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)

    try:
        # Get custom field contexts default values
        api_response = api_instance.get_default_values(field_id, context_id=context_id, start_at=start_at, max_results=max_results)
        print("The response of IssueCustomFieldContextsApi->get_default_values:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldContextsApi->get_default_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field, for example &#x60;customfield\\_10000&#x60;. | 
 **context_id** | [**List[int]**](int.md)| The IDs of the contexts. | [optional] 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]

### Return type

[**PageBeanCustomFieldContextDefaultValue**](PageBeanCustomFieldContextDefaultValue.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the custom field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_issue_type_mappings_for_contexts**
> PageBeanIssueTypeToContextMapping get_issue_type_mappings_for_contexts(field_id, context_id=context_id, start_at=start_at, max_results=max_results)

Get issue types for custom field context

Returns a [paginated](#pagination) list of context to issue type mappings for a custom field. Mappings are returned for all contexts or a list of contexts. Mappings are ordered first by context ID and then by issue type ID.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_issue_type_to_context_mapping import PageBeanIssueTypeToContextMapping
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
    api_instance = openapi_client.IssueCustomFieldContextsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field.
    context_id = [56] # List[int] | The ID of the context. To include multiple contexts, provide an ampersand-separated list. For example, `contextId=10001&contextId=10002`. (optional)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)

    try:
        # Get issue types for custom field context
        api_response = api_instance.get_issue_type_mappings_for_contexts(field_id, context_id=context_id, start_at=start_at, max_results=max_results)
        print("The response of IssueCustomFieldContextsApi->get_issue_type_mappings_for_contexts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldContextsApi->get_issue_type_mappings_for_contexts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field. | 
 **context_id** | [**List[int]**](int.md)| The ID of the context. To include multiple contexts, provide an ampersand-separated list. For example, &#x60;contextId&#x3D;10001&amp;contextId&#x3D;10002&#x60;. | [optional] 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]

### Return type

[**PageBeanIssueTypeToContextMapping**](PageBeanIssueTypeToContextMapping.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if operation is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_context_mapping**
> PageBeanCustomFieldContextProjectMapping get_project_context_mapping(field_id, context_id=context_id, start_at=start_at, max_results=max_results)

Get project mappings for custom field context

Returns a [paginated](#pagination) list of context to project mappings for a custom field. The result can be filtered by `contextId`. Otherwise, all mappings are returned. Invalid IDs are ignored.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_custom_field_context_project_mapping import PageBeanCustomFieldContextProjectMapping
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
    api_instance = openapi_client.IssueCustomFieldContextsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field, for example `customfield\\_10000`.
    context_id = [56] # List[int] | The list of context IDs. To include multiple context, separate IDs with ampersand: `contextId=10000&contextId=10001`. (optional)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)

    try:
        # Get project mappings for custom field context
        api_response = api_instance.get_project_context_mapping(field_id, context_id=context_id, start_at=start_at, max_results=max_results)
        print("The response of IssueCustomFieldContextsApi->get_project_context_mapping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldContextsApi->get_project_context_mapping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field, for example &#x60;customfield\\_10000&#x60;. | 
 **context_id** | [**List[int]**](int.md)| The list of context IDs. To include multiple context, separate IDs with ampersand: &#x60;contextId&#x3D;10000&amp;contextId&#x3D;10001&#x60;. | [optional] 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]

### Return type

[**PageBeanCustomFieldContextProjectMapping**](PageBeanCustomFieldContextProjectMapping.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the custom field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_custom_field_context_from_projects**
> object remove_custom_field_context_from_projects(field_id, context_id, project_ids)

Remove custom field context from projects

Removes a custom field context from projects.  A custom field context without any projects applies to all projects. Removing all projects from a custom field context would result in it applying to all projects.  If any project in the request is not assigned to the context, or the operation would result in two global contexts for the field, the operation fails.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.project_ids import ProjectIds
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
    api_instance = openapi_client.IssueCustomFieldContextsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field.
    context_id = 56 # int | The ID of the context.
    project_ids = {"projectIds":["10001","10005","10006"]} # ProjectIds | 

    try:
        # Remove custom field context from projects
        api_response = api_instance.remove_custom_field_context_from_projects(field_id, context_id, project_ids)
        print("The response of IssueCustomFieldContextsApi->remove_custom_field_context_from_projects:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldContextsApi->remove_custom_field_context_from_projects: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field. | 
 **context_id** | **int**| The ID of the context. | 
 **project_ids** | [**ProjectIds**](ProjectIds.md)|  | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the custom field context is removed from the projects. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the custom field, context, or one or more projects are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_issue_types_from_context**
> object remove_issue_types_from_context(field_id, context_id, issue_type_ids)

Remove issue types from context

Removes issue types from a custom field context.  A custom field context without any issue types applies to all issue types.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.issue_type_ids import IssueTypeIds
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
    api_instance = openapi_client.IssueCustomFieldContextsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field.
    context_id = 56 # int | The ID of the context.
    issue_type_ids = {"issueTypeIds":["10001","10005","10006"]} # IssueTypeIds | 

    try:
        # Remove issue types from context
        api_response = api_instance.remove_issue_types_from_context(field_id, context_id, issue_type_ids)
        print("The response of IssueCustomFieldContextsApi->remove_issue_types_from_context:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldContextsApi->remove_issue_types_from_context: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field. | 
 **context_id** | **int**| The ID of the context. | 
 **issue_type_ids** | [**IssueTypeIds**](IssueTypeIds.md)|  | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if operation is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the custom field, context, or one or more issue types are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_default_values**
> object set_default_values(field_id, custom_field_context_default_value_update)

Set custom field contexts default values

Sets default for contexts of a custom field. Default are defined using these objects:   *  `CustomFieldContextDefaultValueDate` (type `datepicker`) for date fields.  *  `CustomFieldContextDefaultValueDateTime` (type `datetimepicker`) for date-time fields.  *  `CustomFieldContextDefaultValueSingleOption` (type `option.single`) for single choice select lists and radio buttons.  *  `CustomFieldContextDefaultValueMultipleOption` (type `option.multiple`) for multiple choice select lists and checkboxes.  *  `CustomFieldContextDefaultValueCascadingOption` (type `option.cascading`) for cascading select lists.  *  `CustomFieldContextSingleUserPickerDefaults` (type `single.user.select`) for single users.  *  `CustomFieldContextDefaultValueMultiUserPicker` (type `multi.user.select`) for user lists.  *  `CustomFieldContextDefaultValueSingleGroupPicker` (type `grouppicker.single`) for single choice group pickers.  *  `CustomFieldContextDefaultValueMultipleGroupPicker` (type `grouppicker.multiple`) for multiple choice group pickers.  *  `CustomFieldContextDefaultValueURL` (type `url`) for URLs.  *  `CustomFieldContextDefaultValueProject` (type `project`) for project pickers.  *  `CustomFieldContextDefaultValueFloat` (type `float`) for floats (floating-point numbers).  *  `CustomFieldContextDefaultValueLabels` (type `labels`) for labels.  *  `CustomFieldContextDefaultValueTextField` (type `textfield`) for text fields.  *  `CustomFieldContextDefaultValueTextArea` (type `textarea`) for text area fields.  *  `CustomFieldContextDefaultValueReadOnly` (type `readonly`) for read only (text) fields.  *  `CustomFieldContextDefaultValueMultipleVersion` (type `version.multiple`) for single choice version pickers.  *  `CustomFieldContextDefaultValueSingleVersion` (type `version.single`) for multiple choice version pickers.  Forge custom fields [types](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/#data-types) are also supported, returning:   *  `CustomFieldContextDefaultValueForgeStringFieldBean` (type `forge.string`) for Forge string fields.  *  `CustomFieldContextDefaultValueForgeMultiStringFieldBean` (type `forge.string.list`) for Forge string collection fields.  *  `CustomFieldContextDefaultValueForgeObjectFieldBean` (type `forge.object`) for Forge object fields.  *  `CustomFieldContextDefaultValueForgeDateTimeFieldBean` (type `forge.datetime`) for Forge date-time fields.  *  `CustomFieldContextDefaultValueForgeGroupFieldBean` (type `forge.group`) for Forge group fields.  *  `CustomFieldContextDefaultValueForgeMultiGroupFieldBean` (type `forge.group.list`) for Forge group collection fields.  *  `CustomFieldContextDefaultValueForgeNumberFieldBean` (type `forge.number`) for Forge number fields.  *  `CustomFieldContextDefaultValueForgeUserFieldBean` (type `forge.user`) for Forge user fields.  *  `CustomFieldContextDefaultValueForgeMultiUserFieldBean` (type `forge.user.list`) for Forge user collection fields.  Only one type of default object can be included in a request. To remove a default for a context, set the default parameter to `null`.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.custom_field_context_default_value_update import CustomFieldContextDefaultValueUpdate
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
    api_instance = openapi_client.IssueCustomFieldContextsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field.
    custom_field_context_default_value_update = {"defaultValues":[{"contextId":"10100","optionId":"10001","type":"option.single"},{"contextId":"10101","optionId":"10003","type":"option.single"},{"contextId":"10103","optionId":"10005","type":"option.single"}]} # CustomFieldContextDefaultValueUpdate | 

    try:
        # Set custom field contexts default values
        api_response = api_instance.set_default_values(field_id, custom_field_context_default_value_update)
        print("The response of IssueCustomFieldContextsApi->set_default_values:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldContextsApi->set_default_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field. | 
 **custom_field_context_default_value_update** | [**CustomFieldContextDefaultValueUpdate**](CustomFieldContextDefaultValueUpdate.md)|  | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if operation is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the custom field, a context, an option, or a cascading option is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_custom_field_context**
> object update_custom_field_context(field_id, context_id, custom_field_context_update_details)

Update custom field context

Updates a [ custom field context](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.custom_field_context_update_details import CustomFieldContextUpdateDetails
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
    api_instance = openapi_client.IssueCustomFieldContextsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field.
    context_id = 56 # int | The ID of the context.
    custom_field_context_update_details = {"description":"A context used to define the custom field options for bugs.","name":"Bug fields context"} # CustomFieldContextUpdateDetails | 

    try:
        # Update custom field context
        api_response = api_instance.update_custom_field_context(field_id, context_id, custom_field_context_update_details)
        print("The response of IssueCustomFieldContextsApi->update_custom_field_context:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldContextsApi->update_custom_field_context: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field. | 
 **context_id** | **int**| The ID of the context. | 
 **custom_field_context_update_details** | [**CustomFieldContextUpdateDetails**](CustomFieldContextUpdateDetails.md)|  | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the context is updated. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the custom field or the context is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

