# openapi_client.ProjectsApi

All URIs are relative to *https://api.swaggerhub.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_spec_to_project_v2**](ProjectsApi.md#add_spec_to_project_v2) | **PUT** /projects/{owner}/{projectId}/{specType}/{name} | Add an API or domain to a project
[**create_project**](ProjectsApi.md#create_project) | **POST** /projects/{owner} | Create a project in an organization
[**delete_project_v2**](ProjectsApi.md#delete_project_v2) | **DELETE** /projects/{owner}/{projectId} | Delete a project
[**get_org_projects_v2**](ProjectsApi.md#get_org_projects_v2) | **GET** /projects/{owner} | Get all projects of an organization
[**get_project_members_v2**](ProjectsApi.md#get_project_members_v2) | **GET** /projects/{owner}/{projectId}/members | Get project members
[**get_project_v2**](ProjectsApi.md#get_project_v2) | **GET** /projects/{owner}/{projectId} | Get project information
[**get_user_projects**](ProjectsApi.md#get_user_projects) | **GET** /projects | Get all projects that a user has access to
[**save_project_v2**](ProjectsApi.md#save_project_v2) | **PUT** /projects/{owner}/{projectId} | Update a project
[**update_project_members_v2**](ProjectsApi.md#update_project_members_v2) | **PUT** /projects/{owner}/{projectId}/members | Update a project&#39;s members list


# **add_spec_to_project_v2**
> add_spec_to_project_v2(owner, project_id, spec_type, name)

Add an API or domain to a project

Use this operation to add a single API or domain to the specified project.  To add multiple APIs or domains at once, use `PUT /projects/{owner}/{projectId}`.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    owner = 'owner_example' # str | Organization name (case-sensitive)
    project_id = 'project_id_example' # str | Project name (case-sensitive)
    spec_type = 'spec_type_example' # str | Definition type - `apis` or `domains`.
    name = 'name_example' # str | The name of an API or domain that you want to add to the project. Case-sensitive.

    try:
        # Add an API or domain to a project
        api_instance.add_spec_to_project_v2(owner, project_id, spec_type, name)
    except Exception as e:
        print("Exception when calling ProjectsApi->add_spec_to_project_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Organization name (case-sensitive) | 
 **project_id** | **str**| Project name (case-sensitive) | 
 **spec_type** | **str**| Definition type - &#x60;apis&#x60; or &#x60;domains&#x60;. | 
 **name** | **str**| The name of an API or domain that you want to add to the project. Case-sensitive. | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified API or domain was successfully added to the project |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The projects feature is not available for the organization&#39;s plan, or the authenticating user does not have permissions to add definitions to this project  |  -  |
**404** | The specified organization or project name was not found |  -  |
**409** | The project already contains this API or domain |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_project**
> create_project(owner, project_request)

Create a project in an organization

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.project import Project
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    owner = 'owner_example' # str | Organization name (case-sensitive)
    project_request = openapi_client.Project() # Project | The project data. Properties that are not provided are set to empty values. 

    try:
        # Create a project in an organization
        api_instance.create_project(owner, project_request)
    except Exception as e:
        print("Exception when calling ProjectsApi->create_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Organization name (case-sensitive) | 
 **project_request** | [**Project**](Project.md)| The project data. Properties that are not provided are set to empty values.  | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The project has been created successfully |  -  |
**400** | Bad request. For example, some of the specified &#x60;apis&#x60; or &#x60;domains&#x60; do not exist in the organization.  |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Projects are not available in the organization&#39;s plan |  -  |
**404** | The specified organization was not found |  -  |
**409** | A project with this name already exists in the organization |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_project_v2**
> delete_project_v2(owner, project_id)

Delete a project

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    owner = 'owner_example' # str | Organization name (case-sensitive)
    project_id = 'project_id_example' # str | Project name (case-sensitive)

    try:
        # Delete a project
        api_instance.delete_project_v2(owner, project_id)
    except Exception as e:
        print("Exception when calling ProjectsApi->delete_project_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Organization name (case-sensitive) | 
 **project_id** | **str**| Project name (case-sensitive) | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The project has been deleted successfully |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Projects are not available in the organization&#39;s plan, or you are not a member of the specified project. |  -  |
**404** | The specified organization or project name was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_org_projects_v2**
> ProjectsJson get_org_projects_v2(owner, name_only=name_only, page=page, limit=limit, order=order)

Get all projects of an organization

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.projects_json import ProjectsJson
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    owner = 'owner_example' # str | Organization name (case-sensitive)
    name_only = False # bool | Return the project information excluding APIs and domains (optional) (default to False)
    page = 0 # int | Page to return (optional) (default to 0)
    limit = 10 # int | Number of results per page (1 .. 100) (optional) (default to 10)
    order = ASC # str | Sort order (optional) (default to ASC)

    try:
        # Get all projects of an organization
        api_response = api_instance.get_org_projects_v2(owner, name_only=name_only, page=page, limit=limit, order=order)
        print("The response of ProjectsApi->get_org_projects_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->get_org_projects_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Organization name (case-sensitive) | 
 **name_only** | **bool**| Return the project information excluding APIs and domains | [optional] [default to False]
 **page** | **int**| Page to return | [optional] [default to 0]
 **limit** | **int**| Number of results per page (1 .. 100) | [optional] [default to 10]
 **order** | **str**| Sort order | [optional] [default to ASC]

### Return type

[**ProjectsJson**](ProjectsJson.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project belonging to the specified organization |  -  |
**403** | Projects are not available in the organization&#39;s plan |  -  |
**404** | The specified organization was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_members_v2**
> ProjectMemberList get_project_members_v2(owner, project_id)

Get project members

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.project_member_list import ProjectMemberList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    owner = 'owner_example' # str | Organization name (case-sensitive)
    project_id = 'project_id_example' # str | Project name (case-sensitive)

    try:
        # Get project members
        api_response = api_instance.get_project_members_v2(owner, project_id)
        print("The response of ProjectsApi->get_project_members_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->get_project_members_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Organization name (case-sensitive) | 
 **project_id** | **str**| Project name (case-sensitive) | 

### Return type

[**ProjectMemberList**](ProjectMemberList.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of project members (users and teams) |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Projects are not available in the organization&#39;s plan, or you are not a member of the specified project.  |  -  |
**404** | The specified organization or project name was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_v2**
> Project get_project_v2(owner, project_id)

Get project information

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.project import Project
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    owner = 'owner_example' # str | Organization name (case-sensitive)
    project_id = 'project_id_example' # str | Project name (case-sensitive)

    try:
        # Get project information
        api_response = api_instance.get_project_v2(owner, project_id)
        print("The response of ProjectsApi->get_project_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->get_project_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Organization name (case-sensitive) | 
 **project_id** | **str**| Project name (case-sensitive) | 

### Return type

[**Project**](Project.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project information |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Projects are not available in the organization&#39;s plan, or you are not a member of the specified project  |  -  |
**404** | The specified organization or project name was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_projects**
> ProjectsJson get_user_projects(name_only=name_only, page=page, limit=limit, sort=sort, order=order)

Get all projects that a user has access to

Returns all projects that the authenticating user has access to. Organization owners get a list of all projects in owned organizations. Other members get a list of just the projects they are member of.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.projects_json import ProjectsJson
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    name_only = False # bool | Return the project information excluding APIs and domains (optional) (default to False)
    page = 0 # int | Page to return (optional) (default to 0)
    limit = 10 # int | Number of results per page (1 .. 100) (optional) (default to 10)
    sort = NAME # str | Sort criteria or result set: * NAME * OWNER  (optional) (default to NAME)
    order = ASC # str | Sort order (optional) (default to ASC)

    try:
        # Get all projects that a user has access to
        api_response = api_instance.get_user_projects(name_only=name_only, page=page, limit=limit, sort=sort, order=order)
        print("The response of ProjectsApi->get_user_projects:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->get_user_projects: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name_only** | **bool**| Return the project information excluding APIs and domains | [optional] [default to False]
 **page** | **int**| Page to return | [optional] [default to 0]
 **limit** | **int**| Number of results per page (1 .. 100) | [optional] [default to 10]
 **sort** | **str**| Sort criteria or result set: * NAME * OWNER  | [optional] [default to NAME]
 **order** | **str**| Sort order | [optional] [default to ASC]

### Return type

[**ProjectsJson**](ProjectsJson.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All projects accessible to the current user |  -  |
**401** | Access token is not set or invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **save_project_v2**
> save_project_v2(owner, project_id, project_request)

Update a project

Use this operation to update an existing project, for example, add or remove APIs, or change the project description.  When updating a project, the `apis` and `domains` lists _replace_ the existing ones. This means that to add new APIs and domains to a project, you need to send the `apis` and `domains` lists containing both the existing and new APIs and domains.  To add a single API or domain to a project, you can use `PUT /projects/{owner}/{projectId}/{specType}/{name}` instead.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.project import Project
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    owner = 'owner_example' # str | Organization name (case-sensitive)
    project_id = 'project_id_example' # str | Project name (case-sensitive)
    project_request = openapi_client.Project() # Project | The project data. Properties that are not provided are set to empty values. 

    try:
        # Update a project
        api_instance.save_project_v2(owner, project_id, project_request)
    except Exception as e:
        print("Exception when calling ProjectsApi->save_project_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Organization name (case-sensitive) | 
 **project_id** | **str**| Project name (case-sensitive) | 
 **project_request** | [**Project**](Project.md)| The project data. Properties that are not provided are set to empty values.  | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The project has been updated successfully |  -  |
**400** | Bad request. For example, some of the specified &#x60;apis&#x60; or &#x60;domains&#x60; do not exist in the organization to which the project belongs.  |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Projects are not available in the organization&#39;s plan, or you are not a member of the specified project  |  -  |
**404** | The specified organization or project name was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_project_members_v2**
> update_project_members_v2(owner, project_id, project_member_list)

Update a project's members list

When updating a project, the `members` list _replaces_ the existing one. This means that to add new members to a project, you need to send the `members` list containing both the existing and new members. 

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.project_member_list import ProjectMemberList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    owner = 'owner_example' # str | Organization name (case-sensitive)
    project_id = 'project_id_example' # str | Project name (case-sensitive)
    project_member_list = openapi_client.ProjectMemberList() # ProjectMemberList | A list of users and teams to add to the project

    try:
        # Update a project's members list
        api_instance.update_project_members_v2(owner, project_id, project_member_list)
    except Exception as e:
        print("Exception when calling ProjectsApi->update_project_members_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Organization name (case-sensitive) | 
 **project_id** | **str**| Project name (case-sensitive) | 
 **project_member_list** | [**ProjectMemberList**](ProjectMemberList.md)| A list of users and teams to add to the project | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The project members list has been updated successfully |  -  |
**403** | Projects are not available in the organization&#39;s plan, or you are not a member of the specified project.  |  -  |
**404** | The specified organization or project name was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

