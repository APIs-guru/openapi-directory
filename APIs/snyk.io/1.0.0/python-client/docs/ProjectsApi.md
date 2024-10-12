# openapi_client.ProjectsApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate**](ProjectsApi.md#activate) | **POST** /org/{orgId}/project/{projectId}/activate | Activate
[**add_a_tag_to_a_project**](ProjectsApi.md#add_a_tag_to_a_project) | **POST** /org/{orgId}/project/{projectId}/tags | Add a tag to a project
[**add_ignore**](ProjectsApi.md#add_ignore) | **POST** /org/{orgId}/project/{projectId}/ignore/{issueId} | Add ignore
[**applying_attributes**](ProjectsApi.md#applying_attributes) | **POST** /org/{orgId}/project/{projectId}/attributes | Applying attributes
[**create_jira_issue**](ProjectsApi.md#create_jira_issue) | **POST** /org/{orgId}/project/{projectId}/issue/{issueId}/jira-issue | Create jira issue
[**deactivate**](ProjectsApi.md#deactivate) | **POST** /org/{orgId}/project/{projectId}/deactivate | Deactivate
[**delete_a_project**](ProjectsApi.md#delete_a_project) | **DELETE** /org/{orgId}/project/{projectId} | Delete a project
[**delete_ignores**](ProjectsApi.md#delete_ignores) | **DELETE** /org/{orgId}/project/{projectId}/ignore/{issueId} | Delete ignores
[**delete_project_settings**](ProjectsApi.md#delete_project_settings) | **DELETE** /org/{orgId}/project/{projectId}/settings | Delete project settings
[**get_project_dependency_graph**](ProjectsApi.md#get_project_dependency_graph) | **GET** /org/{orgId}/project/{projectId}/dep-graph | Get Project dependency graph
[**list_all_aggregated_issues**](ProjectsApi.md#list_all_aggregated_issues) | **POST** /org/{orgId}/project/{projectId}/aggregated-issues | List all Aggregated issues
[**list_all_ignores**](ProjectsApi.md#list_all_ignores) | **GET** /org/{orgId}/project/{projectId}/ignores | List all ignores
[**list_all_jira_issues**](ProjectsApi.md#list_all_jira_issues) | **GET** /org/{orgId}/project/{projectId}/jira-issues | List all jira issues
[**list_all_project_issue_paths**](ProjectsApi.md#list_all_project_issue_paths) | **GET** /org/{orgId}/project/{projectId}/issue/{issueId}/paths | List all project issue paths
[**list_all_project_snapshot_aggregated_issues**](ProjectsApi.md#list_all_project_snapshot_aggregated_issues) | **POST** /org/{orgId}/project/{projectId}/history/{snapshotId}/aggregated-issues | List all project snapshot aggregated issues
[**list_all_project_snapshot_issue_paths**](ProjectsApi.md#list_all_project_snapshot_issue_paths) | **GET** /org/{orgId}/project/{projectId}/history/{snapshotId}/issue/{issueId}/paths | List all project snapshot issue paths
[**list_all_project_snapshots**](ProjectsApi.md#list_all_project_snapshots) | **POST** /org/{orgId}/project/{projectId}/history | List all project snapshots
[**list_all_projects**](ProjectsApi.md#list_all_projects) | **POST** /org/{orgId}/projects | List all projects
[**list_project_settings**](ProjectsApi.md#list_project_settings) | **GET** /org/{orgId}/project/{projectId}/settings | List project settings
[**move_project_to_a_different_organization**](ProjectsApi.md#move_project_to_a_different_organization) | **PUT** /org/{orgId}/project/{projectId}/move | Move project to a different organization
[**remove_a_tag_from_a_project**](ProjectsApi.md#remove_a_tag_from_a_project) | **POST** /org/{orgId}/project/{projectId}/tags/remove | Remove a tag from a project
[**replace_ignores**](ProjectsApi.md#replace_ignores) | **PUT** /org/{orgId}/project/{projectId}/ignore/{issueId} | Replace ignores
[**retrieve_a_single_project**](ProjectsApi.md#retrieve_a_single_project) | **GET** /org/{orgId}/project/{projectId} | Retrieve a single project
[**retrieve_ignore**](ProjectsApi.md#retrieve_ignore) | **GET** /org/{orgId}/project/{projectId}/ignore/{issueId} | Retrieve ignore
[**update_a_project**](ProjectsApi.md#update_a_project) | **PUT** /org/{orgId}/project/{projectId} | Update a project
[**update_project_settings**](ProjectsApi.md#update_project_settings) | **PUT** /org/{orgId}/project/{projectId}/settings | Update project settings


# **activate**
> activate(org_id, project_id)

Activate

Activating a project will:  - Add a repository webhook for supported integrations.  - Enable pull request tests for new vulnerabilities.  - Open Fix pull request for newly disclosed vulnerabilities.  - Enable recurring tests, sending email alerts about newly disclosed vulnerabilities.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID the project belongs to. The `API_KEY` must have access to this organization.
    project_id = '463c1ee5-31bc-428c-b451-b79a3270db08' # str | The project ID.

    try:
        # Activate
        api_instance.activate(org_id, project_id)
    except Exception as e:
        print("Exception when calling ProjectsApi->activate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID the project belongs to. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_a_tag_to_a_project**
> AddATagToAProject200Response add_a_tag_to_a_project(org_id, project_id, add_a_tag_to_a_project_request=add_a_tag_to_a_project_request)

Add a tag to a project

​

### Example


```python
import openapi_client
from openapi_client.models.add_a_tag_to_a_project200_response import AddATagToAProject200Response
from openapi_client.models.add_a_tag_to_a_project_request import AddATagToAProjectRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have access to this organization.
    project_id = '6d5813be-7e6d-4ab8-80c2-1e3e2a454545' # str | The project ID to apply the tag to
    add_a_tag_to_a_project_request = openapi_client.AddATagToAProjectRequest() # AddATagToAProjectRequest |  (optional)

    try:
        # Add a tag to a project
        api_response = api_instance.add_a_tag_to_a_project(org_id, project_id, add_a_tag_to_a_project_request=add_a_tag_to_a_project_request)
        print("The response of ProjectsApi->add_a_tag_to_a_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->add_a_tag_to_a_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID to apply the tag to | 
 **add_a_tag_to_a_project_request** | [**AddATagToAProjectRequest**](AddATagToAProjectRequest.md)|  | [optional] 

### Return type

[**AddATagToAProject200Response**](AddATagToAProject200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_ignore**
> object add_ignore(org_id, project_id, issue_id, add_ignore_request=add_ignore_request)

Add ignore



### Example


```python
import openapi_client
from openapi_client.models.add_ignore_request import AddIgnoreRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = 'org_id_example' # str | Automatically added
    project_id = 'project_id_example' # str | Automatically added
    issue_id = 'issue_id_example' # str | Automatically added
    add_ignore_request = openapi_client.AddIgnoreRequest() # AddIgnoreRequest |  (optional)

    try:
        # Add ignore
        api_response = api_instance.add_ignore(org_id, project_id, issue_id, add_ignore_request=add_ignore_request)
        print("The response of ProjectsApi->add_ignore:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->add_ignore: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Automatically added | 
 **project_id** | **str**| Automatically added | 
 **issue_id** | **str**| Automatically added | 
 **add_ignore_request** | [**AddIgnoreRequest**](AddIgnoreRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applying_attributes**
> ApplyingAttributes200Response applying_attributes(org_id, project_id, applying_attributes_request=applying_attributes_request)

Applying attributes

Applies an attribute to the provided project. It is possible to assign multiple values to each attribute, but you can only assign values to one of the predefined attribute categories, using the predefined options for this category. Assigning an attribute requires the caller to be either an Organization Administrator or a Group Administrator. Assigning an attribute will override any existing values that the specific attribute already has set. In order to clear out an attribute value, an empty array can be set.

### Example


```python
import openapi_client
from openapi_client.models.applying_attributes200_response import ApplyingAttributes200Response
from openapi_client.models.applying_attributes_request import ApplyingAttributesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have access to this organization.
    project_id = '6d5813be-7e6d-4ab8-80c2-1e3e2a454545' # str | The project ID to remove a tag from
    applying_attributes_request = openapi_client.ApplyingAttributesRequest() # ApplyingAttributesRequest |  (optional)

    try:
        # Applying attributes
        api_response = api_instance.applying_attributes(org_id, project_id, applying_attributes_request=applying_attributes_request)
        print("The response of ProjectsApi->applying_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->applying_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID to remove a tag from | 
 **applying_attributes_request** | [**ApplyingAttributesRequest**](ApplyingAttributesRequest.md)|  | [optional] 

### Return type

[**ApplyingAttributes200Response**](ApplyingAttributes200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_jira_issue**
> CreateJiraIssue200Response create_jira_issue(issue_id, org_id, project_id, create_jira_issue_request=create_jira_issue_request)

Create jira issue



### Example


```python
import openapi_client
from openapi_client.models.create_jira_issue200_response import CreateJiraIssue200Response
from openapi_client.models.create_jira_issue_request import CreateJiraIssueRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    issue_id = 'npm:qs:20140806-1' # str | The issue ID to create Jira issue for.
    org_id = 'org_id_example' # str | Automatically added
    project_id = 'project_id_example' # str | Automatically added
    create_jira_issue_request = openapi_client.CreateJiraIssueRequest() # CreateJiraIssueRequest |  (optional)

    try:
        # Create jira issue
        api_response = api_instance.create_jira_issue(issue_id, org_id, project_id, create_jira_issue_request=create_jira_issue_request)
        print("The response of ProjectsApi->create_jira_issue:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->create_jira_issue: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_id** | **str**| The issue ID to create Jira issue for. | 
 **org_id** | **str**| Automatically added | 
 **project_id** | **str**| Automatically added | 
 **create_jira_issue_request** | [**CreateJiraIssueRequest**](CreateJiraIssueRequest.md)|  | [optional] 

### Return type

[**CreateJiraIssue200Response**](CreateJiraIssue200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivate**
> deactivate(org_id, project_id)

Deactivate

Deactivating a project will:  - Disable pull request tests for new vulnerabilities.  - Disable Fix pull request from being opened for newly disclosed vulnerabilities.  - Disable recurring tests - email alerts about newly disclosed vulnerabilities will be turned off.  - If the repository has no other active projects, then remove any webhooks related to the project.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID the project belongs to. The `API_KEY` must have access to this organization.
    project_id = '463c1ee5-31bc-428c-b451-b79a3270db08' # str | The project ID.

    try:
        # Deactivate
        api_instance.deactivate(org_id, project_id)
    except Exception as e:
        print("Exception when calling ProjectsApi->deactivate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID the project belongs to. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_a_project**
> delete_a_project(org_id, project_id)

Delete a project



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = 'org_id_example' # str | Automatically added
    project_id = 'project_id_example' # str | Automatically added

    try:
        # Delete a project
        api_instance.delete_a_project(org_id, project_id)
    except Exception as e:
        print("Exception when calling ProjectsApi->delete_a_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Automatically added | 
 **project_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_ignores**
> delete_ignores(org_id, project_id, issue_id)

Delete ignores



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = 'org_id_example' # str | Automatically added
    project_id = 'project_id_example' # str | Automatically added
    issue_id = 'issue_id_example' # str | Automatically added

    try:
        # Delete ignores
        api_instance.delete_ignores(org_id, project_id, issue_id)
    except Exception as e:
        print("Exception when calling ProjectsApi->delete_ignores: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Automatically added | 
 **project_id** | **str**| Automatically added | 
 **issue_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_project_settings**
> delete_project_settings(org_id, project_id)

Delete project settings

Deleting project settings will set the project to inherit default settings from its integration.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = 'org_id_example' # str | Automatically added
    project_id = 'project_id_example' # str | Automatically added

    try:
        # Delete project settings
        api_instance.delete_project_settings(org_id, project_id)
    except Exception as e:
        print("Exception when calling ProjectsApi->delete_project_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Automatically added | 
 **project_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_dependency_graph**
> GetProjectDependencyGraph200Response get_project_dependency_graph(org_id, project_id)

Get Project dependency graph



### Example


```python
import openapi_client
from openapi_client.models.get_project_dependency_graph200_response import GetProjectDependencyGraph200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have access to this organization.
    project_id = '6d5813be-7e6d-4ab8-80c2-1e3e2a454545' # str | The project ID to return issues for.

    try:
        # Get Project dependency graph
        api_response = api_instance.get_project_dependency_graph(org_id, project_id)
        print("The response of ProjectsApi->get_project_dependency_graph:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->get_project_dependency_graph: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID to return issues for. | 

### Return type

[**GetProjectDependencyGraph200Response**](GetProjectDependencyGraph200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | * A reference implementation of the graph, as well as conversion functions to/from legacy tree format, can be found at: https://github.com/snyk/dep-graph.  * The object might contain additional fields in the future, in a backward-compatible way (&#x60;schemaVersion&#x60; will change accordingly). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_aggregated_issues**
> ListAllAggregatedIssues200Response list_all_aggregated_issues(org_id, project_id, list_all_aggregated_issues_request=list_all_aggregated_issues_request)

List all Aggregated issues



### Example


```python
import openapi_client
from openapi_client.models.list_all_aggregated_issues200_response import ListAllAggregatedIssues200Response
from openapi_client.models.list_all_aggregated_issues_request import ListAllAggregatedIssuesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have access to this organization.
    project_id = '6d5813be-7e6d-4ab8-80c2-1e3e2a454545' # str | The project ID to return issues for.
    list_all_aggregated_issues_request = openapi_client.ListAllAggregatedIssuesRequest() # ListAllAggregatedIssuesRequest |  (optional)

    try:
        # List all Aggregated issues
        api_response = api_instance.list_all_aggregated_issues(org_id, project_id, list_all_aggregated_issues_request=list_all_aggregated_issues_request)
        print("The response of ProjectsApi->list_all_aggregated_issues:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->list_all_aggregated_issues: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID to return issues for. | 
 **list_all_aggregated_issues_request** | [**ListAllAggregatedIssuesRequest**](ListAllAggregatedIssuesRequest.md)|  | [optional] 

### Return type

[**ListAllAggregatedIssues200Response**](ListAllAggregatedIssues200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_ignores**
> object list_all_ignores(org_id, project_id)

List all ignores

Temporary ignores include an `expires` attribute, while permanent ignores do not.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID to list ignores for. The `API_KEY` must have access to this organization.
    project_id = '463c1ee5-31bc-428c-b451-b79a3270db08' # str | The project ID to list ignores for.

    try:
        # List all ignores
        api_response = api_instance.list_all_ignores(org_id, project_id)
        print("The response of ProjectsApi->list_all_ignores:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->list_all_ignores: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID to list ignores for. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID to list ignores for. | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_jira_issues**
> object list_all_jira_issues(org_id, project_id)

List all jira issues



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID to list Jira issues for. The `API_KEY` must have access to this organization.
    project_id = '463c1ee5-31bc-428c-b451-b79a3270db08' # str | The project ID to list Jira issues for.

    try:
        # List all jira issues
        api_response = api_instance.list_all_jira_issues(org_id, project_id)
        print("The response of ProjectsApi->list_all_jira_issues:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->list_all_jira_issues: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID to list Jira issues for. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID to list Jira issues for. | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_project_issue_paths**
> ListAllProjectSnapshotIssuePaths200Response list_all_project_issue_paths(org_id, project_id, issue_id, snapshot_id=snapshot_id, per_page=per_page, page=page)

List all project issue paths



### Example


```python
import openapi_client
from openapi_client.models.list_all_project_snapshot_issue_paths200_response import ListAllProjectSnapshotIssuePaths200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have access to this organization.
    project_id = '6d5813be-7e6d-4ab8-80c2-1e3e2a454545' # str | The project ID for which to return issue paths.
    issue_id = 'SNYK-JS-LODASH-590103' # str | The issue ID for which to return issue paths.
    snapshot_id = 'latest' # str | The project snapshot ID for which to return issue paths. If set to `latest`, the most recent snapshot will be used. Use the \"List all project snapshots\" endpoint to find suitable values for this. (optional) (default to 'latest')
    per_page = 100 # float | The number of results to return per page (1 - 1000, inclusive). (optional) (default to 100)
    page = 1 # float | The page of results to return. (optional) (default to 1)

    try:
        # List all project issue paths
        api_response = api_instance.list_all_project_issue_paths(org_id, project_id, issue_id, snapshot_id=snapshot_id, per_page=per_page, page=page)
        print("The response of ProjectsApi->list_all_project_issue_paths:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->list_all_project_issue_paths: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID for which to return issue paths. | 
 **issue_id** | **str**| The issue ID for which to return issue paths. | 
 **snapshot_id** | **str**| The project snapshot ID for which to return issue paths. If set to &#x60;latest&#x60;, the most recent snapshot will be used. Use the \&quot;List all project snapshots\&quot; endpoint to find suitable values for this. | [optional] [default to &#39;latest&#39;]
 **per_page** | **float**| The number of results to return per page (1 - 1000, inclusive). | [optional] [default to 100]
 **page** | **float**| The page of results to return. | [optional] [default to 1]

### Return type

[**ListAllProjectSnapshotIssuePaths200Response**](ListAllProjectSnapshotIssuePaths200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Link -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_project_snapshot_aggregated_issues**
> ListAllAggregatedIssues200Response list_all_project_snapshot_aggregated_issues(org_id, project_id, snapshot_id, list_all_aggregated_issues_request=list_all_aggregated_issues_request)

List all project snapshot aggregated issues



### Example


```python
import openapi_client
from openapi_client.models.list_all_aggregated_issues200_response import ListAllAggregatedIssues200Response
from openapi_client.models.list_all_aggregated_issues_request import ListAllAggregatedIssuesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '2d5c4d0c-c6d6-4658-a703-c2721c135b26' # str | The organization ID. The `API_KEY` must have access to this organization.
    project_id = '6d5813be-7e6d-4ab8-80c2-1e3e2a454545' # str | The project ID.
    snapshot_id = '6d5813be-7e6d-4ab8-80c2-1e3e2a454553' # str | The snapshot ID. If set to latest, the most recent snapshot will be used.
    list_all_aggregated_issues_request = openapi_client.ListAllAggregatedIssuesRequest() # ListAllAggregatedIssuesRequest |  (optional)

    try:
        # List all project snapshot aggregated issues
        api_response = api_instance.list_all_project_snapshot_aggregated_issues(org_id, project_id, snapshot_id, list_all_aggregated_issues_request=list_all_aggregated_issues_request)
        print("The response of ProjectsApi->list_all_project_snapshot_aggregated_issues:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->list_all_project_snapshot_aggregated_issues: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID. | 
 **snapshot_id** | **str**| The snapshot ID. If set to latest, the most recent snapshot will be used. | 
 **list_all_aggregated_issues_request** | [**ListAllAggregatedIssuesRequest**](ListAllAggregatedIssuesRequest.md)|  | [optional] 

### Return type

[**ListAllAggregatedIssues200Response**](ListAllAggregatedIssues200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_project_snapshot_issue_paths**
> ListAllProjectSnapshotIssuePaths200Response list_all_project_snapshot_issue_paths(org_id, project_id, snapshot_id, issue_id, per_page=per_page, page=page)

List all project snapshot issue paths



### Example


```python
import openapi_client
from openapi_client.models.list_all_project_snapshot_issue_paths200_response import ListAllProjectSnapshotIssuePaths200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have access to this organization.
    project_id = '6d5813be-7e6d-4ab8-80c2-1e3e2a454545' # str | The project ID for which to return issue paths.
    snapshot_id = '6d5813be-7e6d-4ab8-80c2-1e3e2a454553' # str | The project snapshot ID for which to return issue paths. If set to `latest`, the most recent snapshot will be used. Use the \"List all project snapshots\" endpoint to find suitable values for this.
    issue_id = 'SNYK-JS-LODASH-590103' # str | The issue ID for which to return issue paths.
    per_page = 100 # float | The number of results to return per page (1 - 1000, inclusive). (optional) (default to 100)
    page = 1 # float | The page of results to return. (optional) (default to 1)

    try:
        # List all project snapshot issue paths
        api_response = api_instance.list_all_project_snapshot_issue_paths(org_id, project_id, snapshot_id, issue_id, per_page=per_page, page=page)
        print("The response of ProjectsApi->list_all_project_snapshot_issue_paths:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->list_all_project_snapshot_issue_paths: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID for which to return issue paths. | 
 **snapshot_id** | **str**| The project snapshot ID for which to return issue paths. If set to &#x60;latest&#x60;, the most recent snapshot will be used. Use the \&quot;List all project snapshots\&quot; endpoint to find suitable values for this. | 
 **issue_id** | **str**| The issue ID for which to return issue paths. | 
 **per_page** | **float**| The number of results to return per page (1 - 1000, inclusive). | [optional] [default to 100]
 **page** | **float**| The page of results to return. | [optional] [default to 1]

### Return type

[**ListAllProjectSnapshotIssuePaths200Response**](ListAllProjectSnapshotIssuePaths200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Link -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_project_snapshots**
> ListAllProjectSnapshots200Response list_all_project_snapshots(org_id, project_id, per_page=per_page, page=page, list_all_project_snapshots_request=list_all_project_snapshots_request)

List all project snapshots



### Example


```python
import openapi_client
from openapi_client.models.list_all_project_snapshots200_response import ListAllProjectSnapshots200Response
from openapi_client.models.list_all_project_snapshots_request import ListAllProjectSnapshotsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have access to this organization.
    project_id = '6d5813be-7e6d-4ab8-80c2-1e3e2a454545' # str | The project ID to return snapshots for.
    per_page = 10 # float | The number of results to return (the default is 10, the maximum is 100). (optional)
    page = 1 # float | The offset from which to start returning results from. (optional)
    list_all_project_snapshots_request = openapi_client.ListAllProjectSnapshotsRequest() # ListAllProjectSnapshotsRequest |  (optional)

    try:
        # List all project snapshots
        api_response = api_instance.list_all_project_snapshots(org_id, project_id, per_page=per_page, page=page, list_all_project_snapshots_request=list_all_project_snapshots_request)
        print("The response of ProjectsApi->list_all_project_snapshots:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->list_all_project_snapshots: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID to return snapshots for. | 
 **per_page** | **float**| The number of results to return (the default is 10, the maximum is 100). | [optional] 
 **page** | **float**| The offset from which to start returning results from. | [optional] 
 **list_all_project_snapshots_request** | [**ListAllProjectSnapshotsRequest**](ListAllProjectSnapshotsRequest.md)|  | [optional] 

### Return type

[**ListAllProjectSnapshots200Response**](ListAllProjectSnapshots200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Link -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_projects**
> ListAllProjects200Response list_all_projects(org_id, list_all_projects_request=list_all_projects_request)

List all projects



### Example


```python
import openapi_client
from openapi_client.models.list_all_projects200_response import ListAllProjects200Response
from openapi_client.models.list_all_projects_request import ListAllProjectsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID to list projects for. The `API_KEY` must have access to this organization.
    list_all_projects_request = openapi_client.ListAllProjectsRequest() # ListAllProjectsRequest |  (optional)

    try:
        # List all projects
        api_response = api_instance.list_all_projects(org_id, list_all_projects_request=list_all_projects_request)
        print("The response of ProjectsApi->list_all_projects:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->list_all_projects: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID to list projects for. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **list_all_projects_request** | [**ListAllProjectsRequest**](ListAllProjectsRequest.md)|  | [optional] 

### Return type

[**ListAllProjects200Response**](ListAllProjects200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_project_settings**
> ListProjectSettings200Response list_project_settings(org_id, project_id)

List project settings



### Example


```python
import openapi_client
from openapi_client.models.list_project_settings200_response import ListProjectSettings200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID to which the project belongs. The API_KEY must have access to this organization.
    project_id = '463c1ee5-31bc-428c-b451-b79a3270db08' # str | The project ID

    try:
        # List project settings
        api_response = api_instance.list_project_settings(org_id, project_id)
        print("The response of ProjectsApi->list_project_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->list_project_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID to which the project belongs. The API_KEY must have access to this organization. | 
 **project_id** | **str**| The project ID | 

### Return type

[**ListProjectSettings200Response**](ListProjectSettings200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response will contain only attributes that can be updated (see &#x60;ATTRIBUTES&#x60; section in &#x60;Update project settings&#x60;) and that have been previously set. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **move_project_to_a_different_organization**
> move_project_to_a_different_organization(org_id, project_id, move_project_to_a_different_organization_request=move_project_to_a_different_organization_request)

Move project to a different organization

Note: when moving a project to a new organization, the historical data used for reporting does not move with it.

### Example


```python
import openapi_client
from openapi_client.models.move_project_to_a_different_organization_request import MoveProjectToADifferentOrganizationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID to which the project belongs. The API_KEY must have group admin permissions. If the project is moved to a new group, a personal level API key is needed.
    project_id = '463c1ee5-31bc-428c-b451-b79a3270db08' # str | The project ID.
    move_project_to_a_different_organization_request = openapi_client.MoveProjectToADifferentOrganizationRequest() # MoveProjectToADifferentOrganizationRequest |  (optional)

    try:
        # Move project to a different organization
        api_instance.move_project_to_a_different_organization(org_id, project_id, move_project_to_a_different_organization_request=move_project_to_a_different_organization_request)
    except Exception as e:
        print("Exception when calling ProjectsApi->move_project_to_a_different_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID to which the project belongs. The API_KEY must have group admin permissions. If the project is moved to a new group, a personal level API key is needed. | 
 **project_id** | **str**| The project ID. | 
 **move_project_to_a_different_organization_request** | [**MoveProjectToADifferentOrganizationRequest**](MoveProjectToADifferentOrganizationRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_a_tag_from_a_project**
> AddATagToAProject200Response remove_a_tag_from_a_project(org_id, project_id, add_a_tag_to_a_project_request=add_a_tag_to_a_project_request)

Remove a tag from a project



### Example


```python
import openapi_client
from openapi_client.models.add_a_tag_to_a_project200_response import AddATagToAProject200Response
from openapi_client.models.add_a_tag_to_a_project_request import AddATagToAProjectRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have access to this organization.
    project_id = '6d5813be-7e6d-4ab8-80c2-1e3e2a454545' # str | The project ID to remove a tag from
    add_a_tag_to_a_project_request = openapi_client.AddATagToAProjectRequest() # AddATagToAProjectRequest |  (optional)

    try:
        # Remove a tag from a project
        api_response = api_instance.remove_a_tag_from_a_project(org_id, project_id, add_a_tag_to_a_project_request=add_a_tag_to_a_project_request)
        print("The response of ProjectsApi->remove_a_tag_from_a_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->remove_a_tag_from_a_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID to remove a tag from | 
 **add_a_tag_to_a_project_request** | [**AddATagToAProjectRequest**](AddATagToAProjectRequest.md)|  | [optional] 

### Return type

[**AddATagToAProject200Response**](AddATagToAProject200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_ignores**
> List[object] replace_ignores(org_id, project_id, issue_id)

Replace ignores



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = 'org_id_example' # str | Automatically added
    project_id = 'project_id_example' # str | Automatically added
    issue_id = 'issue_id_example' # str | Automatically added

    try:
        # Replace ignores
        api_response = api_instance.replace_ignores(org_id, project_id, issue_id)
        print("The response of ProjectsApi->replace_ignores:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->replace_ignores: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Automatically added | 
 **project_id** | **str**| Automatically added | 
 **issue_id** | **str**| Automatically added | 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_a_single_project**
> RetrieveASingleProject200Response retrieve_a_single_project(org_id, project_id)

Retrieve a single project



### Example


```python
import openapi_client
from openapi_client.models.retrieve_a_single_project200_response import RetrieveASingleProject200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID the project belongs to. The `API_KEY` must have access to this organization.
    project_id = '463c1ee5-31bc-428c-b451-b79a3270db08' # str | The project ID.

    try:
        # Retrieve a single project
        api_response = api_instance.retrieve_a_single_project(org_id, project_id)
        print("The response of ProjectsApi->retrieve_a_single_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retrieve_a_single_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID the project belongs to. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID. | 

### Return type

[**RetrieveASingleProject200Response**](RetrieveASingleProject200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_ignore**
> object retrieve_ignore(org_id, project_id, issue_id)

Retrieve ignore



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID to modify ignores for. The `API_KEY` must have access to this organization.
    project_id = '463c1ee5-31bc-428c-b451-b79a3270db08' # str | The project ID to modify ignores for.
    issue_id = 'npm:qs:20140806-1' # str | The issue ID to modify ignores for. Can be a vulnerability or a license Issue.

    try:
        # Retrieve ignore
        api_response = api_instance.retrieve_ignore(org_id, project_id, issue_id)
        print("The response of ProjectsApi->retrieve_ignore:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retrieve_ignore: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID to modify ignores for. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID to modify ignores for. | 
 **issue_id** | **str**| The issue ID to modify ignores for. Can be a vulnerability or a license Issue. | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_a_project**
> RetrieveASingleProject200Response update_a_project(org_id, project_id, update_a_project_request=update_a_project_request)

Update a project



### Example


```python
import openapi_client
from openapi_client.models.retrieve_a_single_project200_response import RetrieveASingleProject200Response
from openapi_client.models.update_a_project_request import UpdateAProjectRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = 'org_id_example' # str | Automatically added
    project_id = 'project_id_example' # str | Automatically added
    update_a_project_request = openapi_client.UpdateAProjectRequest() # UpdateAProjectRequest |  (optional)

    try:
        # Update a project
        api_response = api_instance.update_a_project(org_id, project_id, update_a_project_request=update_a_project_request)
        print("The response of ProjectsApi->update_a_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->update_a_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Automatically added | 
 **project_id** | **str**| Automatically added | 
 **update_a_project_request** | [**UpdateAProjectRequest**](UpdateAProjectRequest.md)|  | [optional] 

### Return type

[**RetrieveASingleProject200Response**](RetrieveASingleProject200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_project_settings**
> ListProjectSettings200Response update_project_settings(org_id, project_id, update_project_settings_request=update_project_settings_request)

Update project settings



### Example


```python
import openapi_client
from openapi_client.models.list_project_settings200_response import ListProjectSettings200Response
from openapi_client.models.update_project_settings_request import UpdateProjectSettingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    org_id = 'org_id_example' # str | Automatically added
    project_id = 'project_id_example' # str | Automatically added
    update_project_settings_request = openapi_client.UpdateProjectSettingsRequest() # UpdateProjectSettingsRequest |  (optional)

    try:
        # Update project settings
        api_response = api_instance.update_project_settings(org_id, project_id, update_project_settings_request=update_project_settings_request)
        print("The response of ProjectsApi->update_project_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->update_project_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Automatically added | 
 **project_id** | **str**| Automatically added | 
 **update_project_settings_request** | [**UpdateProjectSettingsRequest**](UpdateProjectSettingsRequest.md)|  | [optional] 

### Return type

[**ListProjectSettings200Response**](ListProjectSettings200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response will contain the attributes and values that have been sent in the request and successfully updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

