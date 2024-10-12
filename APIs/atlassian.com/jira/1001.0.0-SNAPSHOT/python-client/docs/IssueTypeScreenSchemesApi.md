# openapi_client.IssueTypeScreenSchemesApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**append_mappings_for_issue_type_screen_scheme**](IssueTypeScreenSchemesApi.md#append_mappings_for_issue_type_screen_scheme) | **PUT** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping | Append mappings to issue type screen scheme
[**assign_issue_type_screen_scheme_to_project**](IssueTypeScreenSchemesApi.md#assign_issue_type_screen_scheme_to_project) | **PUT** /rest/api/3/issuetypescreenscheme/project | Assign issue type screen scheme to project
[**create_issue_type_screen_scheme**](IssueTypeScreenSchemesApi.md#create_issue_type_screen_scheme) | **POST** /rest/api/3/issuetypescreenscheme | Create issue type screen scheme
[**delete_issue_type_screen_scheme**](IssueTypeScreenSchemesApi.md#delete_issue_type_screen_scheme) | **DELETE** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId} | Delete issue type screen scheme
[**get_issue_type_screen_scheme_mappings**](IssueTypeScreenSchemesApi.md#get_issue_type_screen_scheme_mappings) | **GET** /rest/api/3/issuetypescreenscheme/mapping | Get issue type screen scheme items
[**get_issue_type_screen_scheme_project_associations**](IssueTypeScreenSchemesApi.md#get_issue_type_screen_scheme_project_associations) | **GET** /rest/api/3/issuetypescreenscheme/project | Get issue type screen schemes for projects
[**get_issue_type_screen_schemes**](IssueTypeScreenSchemesApi.md#get_issue_type_screen_schemes) | **GET** /rest/api/3/issuetypescreenscheme | Get issue type screen schemes
[**get_projects_for_issue_type_screen_scheme**](IssueTypeScreenSchemesApi.md#get_projects_for_issue_type_screen_scheme) | **GET** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/project | Get issue type screen scheme projects
[**remove_mappings_from_issue_type_screen_scheme**](IssueTypeScreenSchemesApi.md#remove_mappings_from_issue_type_screen_scheme) | **POST** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/remove | Remove mappings from issue type screen scheme
[**update_default_screen_scheme**](IssueTypeScreenSchemesApi.md#update_default_screen_scheme) | **PUT** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/default | Update issue type screen scheme default screen scheme
[**update_issue_type_screen_scheme**](IssueTypeScreenSchemesApi.md#update_issue_type_screen_scheme) | **PUT** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId} | Update issue type screen scheme


# **append_mappings_for_issue_type_screen_scheme**
> object append_mappings_for_issue_type_screen_scheme(issue_type_screen_scheme_id, issue_type_screen_scheme_mapping_details)

Append mappings to issue type screen scheme

Appends issue type to screen scheme mappings to an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.issue_type_screen_scheme_mapping_details import IssueTypeScreenSchemeMappingDetails
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
    api_instance = openapi_client.IssueTypeScreenSchemesApi(api_client)
    issue_type_screen_scheme_id = 'issue_type_screen_scheme_id_example' # str | The ID of the issue type screen scheme.
    issue_type_screen_scheme_mapping_details = {"issueTypeMappings":[{"issueTypeId":"10000","screenSchemeId":"10001"},{"issueTypeId":"10001","screenSchemeId":"10002"},{"issueTypeId":"10002","screenSchemeId":"10002"}]} # IssueTypeScreenSchemeMappingDetails | 

    try:
        # Append mappings to issue type screen scheme
        api_response = api_instance.append_mappings_for_issue_type_screen_scheme(issue_type_screen_scheme_id, issue_type_screen_scheme_mapping_details)
        print("The response of IssueTypeScreenSchemesApi->append_mappings_for_issue_type_screen_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypeScreenSchemesApi->append_mappings_for_issue_type_screen_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_type_screen_scheme_id** | **str**| The ID of the issue type screen scheme. | 
 **issue_type_screen_scheme_mapping_details** | [**IssueTypeScreenSchemeMappingDetails**](IssueTypeScreenSchemeMappingDetails.md)|  | 

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
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the issue type screen scheme, issue type, or screen scheme is not found. |  -  |
**409** | Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assign_issue_type_screen_scheme_to_project**
> object assign_issue_type_screen_scheme_to_project(issue_type_screen_scheme_project_association)

Assign issue type screen scheme to project

Assigns an issue type screen scheme to a project.  Issue type screen schemes can only be assigned to classic projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.issue_type_screen_scheme_project_association import IssueTypeScreenSchemeProjectAssociation
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
    api_instance = openapi_client.IssueTypeScreenSchemesApi(api_client)
    issue_type_screen_scheme_project_association = {"issueTypeScreenSchemeId":"10001","projectId":"10002"} # IssueTypeScreenSchemeProjectAssociation | 

    try:
        # Assign issue type screen scheme to project
        api_response = api_instance.assign_issue_type_screen_scheme_to_project(issue_type_screen_scheme_project_association)
        print("The response of IssueTypeScreenSchemesApi->assign_issue_type_screen_scheme_to_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypeScreenSchemesApi->assign_issue_type_screen_scheme_to_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_type_screen_scheme_project_association** | [**IssueTypeScreenSchemeProjectAssociation**](IssueTypeScreenSchemeProjectAssociation.md)|  | 

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
**204** | Returned if the request is successful. |  -  |
**400** | Returned if:   *  project is not found.  *  issue type screen scheme is not found.  *  the project is not a classic project. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the issue type screen scheme or the project are missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_issue_type_screen_scheme**
> IssueTypeScreenSchemeId create_issue_type_screen_scheme(issue_type_screen_scheme_details)

Create issue type screen scheme

Creates an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.issue_type_screen_scheme_details import IssueTypeScreenSchemeDetails
from openapi_client.models.issue_type_screen_scheme_id import IssueTypeScreenSchemeId
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
    api_instance = openapi_client.IssueTypeScreenSchemesApi(api_client)
    issue_type_screen_scheme_details = {"issueTypeMappings":[{"issueTypeId":"default","screenSchemeId":"10001"},{"issueTypeId":"10001","screenSchemeId":"10002"},{"issueTypeId":"10002","screenSchemeId":"10002"}],"name":"Scrum issue type screen scheme"} # IssueTypeScreenSchemeDetails | An issue type screen scheme bean.

    try:
        # Create issue type screen scheme
        api_response = api_instance.create_issue_type_screen_scheme(issue_type_screen_scheme_details)
        print("The response of IssueTypeScreenSchemesApi->create_issue_type_screen_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypeScreenSchemesApi->create_issue_type_screen_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_type_screen_scheme_details** | [**IssueTypeScreenSchemeDetails**](IssueTypeScreenSchemeDetails.md)| An issue type screen scheme bean. | 

### Return type

[**IssueTypeScreenSchemeId**](IssueTypeScreenSchemeId.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the issue type or screen scheme is not found. |  -  |
**409** | Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_issue_type_screen_scheme**
> object delete_issue_type_screen_scheme(issue_type_screen_scheme_id)

Delete issue type screen scheme

Deletes an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.IssueTypeScreenSchemesApi(api_client)
    issue_type_screen_scheme_id = 'issue_type_screen_scheme_id_example' # str | The ID of the issue type screen scheme.

    try:
        # Delete issue type screen scheme
        api_response = api_instance.delete_issue_type_screen_scheme(issue_type_screen_scheme_id)
        print("The response of IssueTypeScreenSchemesApi->delete_issue_type_screen_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypeScreenSchemesApi->delete_issue_type_screen_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_type_screen_scheme_id** | **str**| The ID of the issue type screen scheme. | 

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
**204** | Returned if the issue type screen scheme is deleted. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the issue type screen scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_issue_type_screen_scheme_mappings**
> PageBeanIssueTypeScreenSchemeItem get_issue_type_screen_scheme_mappings(start_at=start_at, max_results=max_results, issue_type_screen_scheme_id=issue_type_screen_scheme_id)

Get issue type screen scheme items

Returns a [paginated](#pagination) list of issue type screen scheme items.  Only issue type screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_issue_type_screen_scheme_item import PageBeanIssueTypeScreenSchemeItem
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
    api_instance = openapi_client.IssueTypeScreenSchemesApi(api_client)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)
    issue_type_screen_scheme_id = [56] # List[int] | The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: `issueTypeScreenSchemeId=10000&issueTypeScreenSchemeId=10001`. (optional)

    try:
        # Get issue type screen scheme items
        api_response = api_instance.get_issue_type_screen_scheme_mappings(start_at=start_at, max_results=max_results, issue_type_screen_scheme_id=issue_type_screen_scheme_id)
        print("The response of IssueTypeScreenSchemesApi->get_issue_type_screen_scheme_mappings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypeScreenSchemesApi->get_issue_type_screen_scheme_mappings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]
 **issue_type_screen_scheme_id** | [**List[int]**](int.md)| The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: &#x60;issueTypeScreenSchemeId&#x3D;10000&amp;issueTypeScreenSchemeId&#x3D;10001&#x60;. | [optional] 

### Return type

[**PageBeanIssueTypeScreenSchemeItem**](PageBeanIssueTypeScreenSchemeItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_issue_type_screen_scheme_project_associations**
> PageBeanIssueTypeScreenSchemesProjects get_issue_type_screen_scheme_project_associations(project_id, start_at=start_at, max_results=max_results)

Get issue type screen schemes for projects

Returns a [paginated](#pagination) list of issue type screen schemes and, for each issue type screen scheme, a list of the projects that use it.  Only issue type screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_issue_type_screen_schemes_projects import PageBeanIssueTypeScreenSchemesProjects
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
    api_instance = openapi_client.IssueTypeScreenSchemesApi(api_client)
    project_id = [56] # List[int] | The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)

    try:
        # Get issue type screen schemes for projects
        api_response = api_instance.get_issue_type_screen_scheme_project_associations(project_id, start_at=start_at, max_results=max_results)
        print("The response of IssueTypeScreenSchemesApi->get_issue_type_screen_scheme_project_associations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypeScreenSchemesApi->get_issue_type_screen_scheme_project_associations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**List[int]**](int.md)| The list of project IDs. To include multiple projects, separate IDs with ampersand: &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. | 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]

### Return type

[**PageBeanIssueTypeScreenSchemesProjects**](PageBeanIssueTypeScreenSchemesProjects.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_issue_type_screen_schemes**
> PageBeanIssueTypeScreenScheme get_issue_type_screen_schemes(start_at=start_at, max_results=max_results, id=id, query_string=query_string, order_by=order_by, expand=expand)

Get issue type screen schemes

Returns a [paginated](#pagination) list of issue type screen schemes.  Only issue type screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_issue_type_screen_scheme import PageBeanIssueTypeScreenScheme
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
    api_instance = openapi_client.IssueTypeScreenSchemesApi(api_client)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)
    id = [56] # List[int] | The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. (optional)
    query_string = '' # str | String used to perform a case-insensitive partial match with issue type screen scheme name. (optional) (default to '')
    order_by = id # str | [Order](#ordering) the results by a field:   *  `name` Sorts by issue type screen scheme name.  *  `id` Sorts by issue type screen scheme ID. (optional) (default to id)
    expand = '' # str | Use [expand](#expansion) to include additional information in the response. This parameter accepts `projects` that, for each issue type screen schemes, returns information about the projects the issue type screen scheme is assigned to. (optional) (default to '')

    try:
        # Get issue type screen schemes
        api_response = api_instance.get_issue_type_screen_schemes(start_at=start_at, max_results=max_results, id=id, query_string=query_string, order_by=order_by, expand=expand)
        print("The response of IssueTypeScreenSchemesApi->get_issue_type_screen_schemes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypeScreenSchemesApi->get_issue_type_screen_schemes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]
 **id** | [**List[int]**](int.md)| The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [optional] 
 **query_string** | **str**| String used to perform a case-insensitive partial match with issue type screen scheme name. | [optional] [default to &#39;&#39;]
 **order_by** | **str**| [Order](#ordering) the results by a field:   *  &#x60;name&#x60; Sorts by issue type screen scheme name.  *  &#x60;id&#x60; Sorts by issue type screen scheme ID. | [optional] [default to id]
 **expand** | **str**| Use [expand](#expansion) to include additional information in the response. This parameter accepts &#x60;projects&#x60; that, for each issue type screen schemes, returns information about the projects the issue type screen scheme is assigned to. | [optional] [default to &#39;&#39;]

### Return type

[**PageBeanIssueTypeScreenScheme**](PageBeanIssueTypeScreenScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_projects_for_issue_type_screen_scheme**
> PageBeanProjectDetails get_projects_for_issue_type_screen_scheme(issue_type_screen_scheme_id, start_at=start_at, max_results=max_results, query=query)

Get issue type screen scheme projects

Returns a [paginated](#pagination) list of projects associated with an issue type screen scheme.  Only company-managed projects associated with an issue type screen scheme are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_project_details import PageBeanProjectDetails
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
    api_instance = openapi_client.IssueTypeScreenSchemesApi(api_client)
    issue_type_screen_scheme_id = 56 # int | The ID of the issue type screen scheme.
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)
    query = '' # str |  (optional) (default to '')

    try:
        # Get issue type screen scheme projects
        api_response = api_instance.get_projects_for_issue_type_screen_scheme(issue_type_screen_scheme_id, start_at=start_at, max_results=max_results, query=query)
        print("The response of IssueTypeScreenSchemesApi->get_projects_for_issue_type_screen_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypeScreenSchemesApi->get_projects_for_issue_type_screen_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_type_screen_scheme_id** | **int**| The ID of the issue type screen scheme. | 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]
 **query** | **str**|  | [optional] [default to &#39;&#39;]

### Return type

[**PageBeanProjectDetails**](PageBeanProjectDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_mappings_from_issue_type_screen_scheme**
> object remove_mappings_from_issue_type_screen_scheme(issue_type_screen_scheme_id, issue_type_ids)

Remove mappings from issue type screen scheme

Removes issue type to screen scheme mappings from an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.IssueTypeScreenSchemesApi(api_client)
    issue_type_screen_scheme_id = 'issue_type_screen_scheme_id_example' # str | The ID of the issue type screen scheme.
    issue_type_ids = {"issueTypeIds":["10000","10001","10004"]} # IssueTypeIds | 

    try:
        # Remove mappings from issue type screen scheme
        api_response = api_instance.remove_mappings_from_issue_type_screen_scheme(issue_type_screen_scheme_id, issue_type_ids)
        print("The response of IssueTypeScreenSchemesApi->remove_mappings_from_issue_type_screen_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypeScreenSchemesApi->remove_mappings_from_issue_type_screen_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_type_screen_scheme_id** | **str**| The ID of the issue type screen scheme. | 
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
**204** | Returned if the screen scheme mappings are removed from the issue type screen scheme. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the issue type screen scheme or one or more issue type mappings are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_default_screen_scheme**
> object update_default_screen_scheme(issue_type_screen_scheme_id, update_default_screen_scheme)

Update issue type screen scheme default screen scheme

Updates the default screen scheme of an issue type screen scheme. The default screen scheme is used for all unmapped issue types.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.update_default_screen_scheme import UpdateDefaultScreenScheme
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
    api_instance = openapi_client.IssueTypeScreenSchemesApi(api_client)
    issue_type_screen_scheme_id = 'issue_type_screen_scheme_id_example' # str | The ID of the issue type screen scheme.
    update_default_screen_scheme = {"screenSchemeId":"10010"} # UpdateDefaultScreenScheme | 

    try:
        # Update issue type screen scheme default screen scheme
        api_response = api_instance.update_default_screen_scheme(issue_type_screen_scheme_id, update_default_screen_scheme)
        print("The response of IssueTypeScreenSchemesApi->update_default_screen_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypeScreenSchemesApi->update_default_screen_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_type_screen_scheme_id** | **str**| The ID of the issue type screen scheme. | 
 **update_default_screen_scheme** | [**UpdateDefaultScreenScheme**](UpdateDefaultScreenScheme.md)|  | 

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
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the issue type screen scheme or the screen screen is not found, or the screen scheme isn&#39;t used in classic projects. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_issue_type_screen_scheme**
> object update_issue_type_screen_scheme(issue_type_screen_scheme_id, issue_type_screen_scheme_update_details)

Update issue type screen scheme

Updates an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.issue_type_screen_scheme_update_details import IssueTypeScreenSchemeUpdateDetails
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
    api_instance = openapi_client.IssueTypeScreenSchemesApi(api_client)
    issue_type_screen_scheme_id = 'issue_type_screen_scheme_id_example' # str | The ID of the issue type screen scheme.
    issue_type_screen_scheme_update_details = {"description":"Screens for scrum issue types.","name":"Scrum scheme"} # IssueTypeScreenSchemeUpdateDetails | The issue type screen scheme update details.

    try:
        # Update issue type screen scheme
        api_response = api_instance.update_issue_type_screen_scheme(issue_type_screen_scheme_id, issue_type_screen_scheme_update_details)
        print("The response of IssueTypeScreenSchemesApi->update_issue_type_screen_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypeScreenSchemesApi->update_issue_type_screen_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_type_screen_scheme_id** | **str**| The ID of the issue type screen scheme. | 
 **issue_type_screen_scheme_update_details** | [**IssueTypeScreenSchemeUpdateDetails**](IssueTypeScreenSchemeUpdateDetails.md)| The issue type screen scheme update details. | 

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
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the issue type screen scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

