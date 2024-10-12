# openapi_client.ProjectRolesApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_project_role**](ProjectRolesApi.md#create_project_role) | **POST** /rest/api/3/role | Create project role
[**delete_project_role**](ProjectRolesApi.md#delete_project_role) | **DELETE** /rest/api/3/role/{id} | Delete project role
[**fully_update_project_role**](ProjectRolesApi.md#fully_update_project_role) | **PUT** /rest/api/3/role/{id} | Fully update project role
[**get_all_project_roles**](ProjectRolesApi.md#get_all_project_roles) | **GET** /rest/api/3/role | Get all project roles
[**get_project_role**](ProjectRolesApi.md#get_project_role) | **GET** /rest/api/3/project/{projectIdOrKey}/role/{id} | Get project role for project
[**get_project_role_by_id**](ProjectRolesApi.md#get_project_role_by_id) | **GET** /rest/api/3/role/{id} | Get project role by ID
[**get_project_role_details**](ProjectRolesApi.md#get_project_role_details) | **GET** /rest/api/3/project/{projectIdOrKey}/roledetails | Get project role details
[**get_project_roles**](ProjectRolesApi.md#get_project_roles) | **GET** /rest/api/3/project/{projectIdOrKey}/role | Get project roles for project
[**partial_update_project_role**](ProjectRolesApi.md#partial_update_project_role) | **POST** /rest/api/3/role/{id} | Partial update project role


# **create_project_role**
> ProjectRole create_project_role(create_update_role_request_bean)

Create project role

Creates a new project role with no [default actors](#api-rest-api-3-resolution-get). You can use the [Add default actors to project role](#api-rest-api-3-role-id-actors-post) operation to add default actors to the project role after creating it.  *Note that although a new project role is available to all projects upon creation, any default actors that are associated with the project role are not added to projects that existed prior to the role being created.*<  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.create_update_role_request_bean import CreateUpdateRoleRequestBean
from openapi_client.models.project_role import ProjectRole
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
    api_instance = openapi_client.ProjectRolesApi(api_client)
    create_update_role_request_bean = {"description":"A project role that represents developers in a project","name":"Developers"} # CreateUpdateRoleRequestBean | 

    try:
        # Create project role
        api_response = api_instance.create_project_role(create_update_role_request_bean)
        print("The response of ProjectRolesApi->create_project_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectRolesApi->create_project_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_update_role_request_bean** | [**CreateUpdateRoleRequestBean**](CreateUpdateRoleRequestBean.md)|  | 

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. The &#x60;name&#x60; cannot be empty or start or end with whitespace. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have administrative permissions. |  -  |
**409** | Returned if a project role with the provided name already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_project_role**
> delete_project_role(id, swap=swap)

Delete project role

Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.ProjectRolesApi(api_client)
    id = 56 # int | The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    swap = 56 # int | The ID of the project role that will replace the one being deleted. (optional)

    try:
        # Delete project role
        api_instance.delete_project_role(id, swap=swap)
    except Exception as e:
        print("Exception when calling ProjectRolesApi->delete_project_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | 
 **swap** | **int**| The ID of the project role that will replace the one being deleted. | [optional] 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid or if the replacement project role is not found. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have administrative permissions. |  -  |
**404** | Returned if the project role being deleted is not found. |  -  |
**409** | Returned if the project role being deleted is in use and a replacement project role is not specified in the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fully_update_project_role**
> ProjectRole fully_update_project_role(id, create_update_role_request_bean)

Fully update project role

Updates the project role's name and description. You must include both a name and a description in the request.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.create_update_role_request_bean import CreateUpdateRoleRequestBean
from openapi_client.models.project_role import ProjectRole
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
    api_instance = openapi_client.ProjectRolesApi(api_client)
    id = 56 # int | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    create_update_role_request_bean = {"description":"A project role that represents developers in a project","name":"Developers"} # CreateUpdateRoleRequestBean | 

    try:
        # Fully update project role
        api_response = api_instance.fully_update_project_role(id, create_update_role_request_bean)
        print("The response of ProjectRolesApi->fully_update_project_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectRolesApi->fully_update_project_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | 
 **create_update_role_request_bean** | [**CreateUpdateRoleRequestBean**](CreateUpdateRoleRequestBean.md)|  | 

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. The &#x60;name&#x60; cannot be empty or start or end with whitespace. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have administrative permissions. |  -  |
**404** | Returned if the project role is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_project_roles**
> List[ProjectRole] get_all_project_roles()

Get all project roles

Gets a list of all project roles, complete with project role details and default actors.  ### About project roles ###  [Project roles](https://confluence.atlassian.com/x/3odKLg) are a flexible way to to associate users and groups with projects. In Jira Cloud, the list of project roles is shared globally with all projects, but each project can have a different set of actors associated with it (unlike groups, which have the same membership throughout all Jira applications).  Project roles are used in [permission schemes](#api-rest-api-3-permissionscheme-get), [email notification schemes](#api-rest-api-3-notificationscheme-get), [issue security levels](#api-rest-api-3-issuesecurityschemes-get), [comment visibility](#api-rest-api-3-comment-list-post), and workflow conditions.  #### Members and actors ####  In the Jira REST API, a member of a project role is called an *actor*. An *actor* is a group or user associated with a project role.  Actors may be set as [default members](https://confluence.atlassian.com/x/3odKLg#Managingprojectroles-Specifying'defaultmembers'foraprojectrole) of the project role or set at the project level:   *  Default actors: Users and groups that are assigned to the project role for all newly created projects. The default actors can be removed at the project level later if desired.  *  Actors: Users and groups that are associated with a project role for a project, which may differ from the default actors. This enables you to assign a user to different roles in different projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.project_role import ProjectRole
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
    api_instance = openapi_client.ProjectRolesApi(api_client)

    try:
        # Get all project roles
        api_response = api_instance.get_all_project_roles()
        print("The response of ProjectRolesApi->get_all_project_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectRolesApi->get_all_project_roles: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ProjectRole]**](ProjectRole.md)

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
**403** | Returned if the user does not have administrative permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_role**
> ProjectRole get_project_role(project_id_or_key, id, exclude_inactive_users=exclude_inactive_users)

Get project role for project

Returns a project role's details and actors associated with the project. The list of actors is sorted by display name.  To check whether a user belongs to a role based on their group memberships, use [Get user](#api-rest-api-3-user-get) with the `groups` expand parameter selected. Then check whether the user keys and groups match with the actors returned for the project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.project_role import ProjectRole
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
    api_instance = openapi_client.ProjectRolesApi(api_client)
    project_id_or_key = 'project_id_or_key_example' # str | The project ID or project key (case sensitive).
    id = 56 # int | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    exclude_inactive_users = False # bool | Exclude inactive users. (optional) (default to False)

    try:
        # Get project role for project
        api_response = api_instance.get_project_role(project_id_or_key, id, exclude_inactive_users=exclude_inactive_users)
        print("The response of ProjectRolesApi->get_project_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectRolesApi->get_project_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id_or_key** | **str**| The project ID or project key (case sensitive). | 
 **id** | **int**| The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | 
 **exclude_inactive_users** | **bool**| Exclude inactive users. | [optional] [default to False]

### Return type

[**ProjectRole**](ProjectRole.md)

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
**404** | Returned if:   *  the project or project role is not found.  *  the user does not have administrative permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_role_by_id**
> ProjectRole get_project_role_by_id(id)

Get project role by ID

Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.project_role import ProjectRole
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
    api_instance = openapi_client.ProjectRolesApi(api_client)
    id = 56 # int | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.

    try:
        # Get project role by ID
        api_response = api_instance.get_project_role_by_id(id)
        print("The response of ProjectRolesApi->get_project_role_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectRolesApi->get_project_role_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | 

### Return type

[**ProjectRole**](ProjectRole.md)

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
**403** | Returned if the user does not have administrative permissions. |  -  |
**404** | Returned if the project role is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_role_details**
> List[ProjectRoleDetails] get_project_role_details(project_id_or_key, current_member=current_member, exclude_connect_addons=exclude_connect_addons)

Get project role details

Returns all [project roles](https://confluence.atlassian.com/x/3odKLg) and the details for each role. Note that the list of project roles is common to all projects.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.project_role_details import ProjectRoleDetails
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
    api_instance = openapi_client.ProjectRolesApi(api_client)
    project_id_or_key = 'project_id_or_key_example' # str | The project ID or project key (case sensitive).
    current_member = False # bool | Whether the roles should be filtered to include only those the user is assigned to. (optional) (default to False)
    exclude_connect_addons = False # bool |  (optional) (default to False)

    try:
        # Get project role details
        api_response = api_instance.get_project_role_details(project_id_or_key, current_member=current_member, exclude_connect_addons=exclude_connect_addons)
        print("The response of ProjectRolesApi->get_project_role_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectRolesApi->get_project_role_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id_or_key** | **str**| The project ID or project key (case sensitive). | 
 **current_member** | **bool**| Whether the roles should be filtered to include only those the user is assigned to. | [optional] [default to False]
 **exclude_connect_addons** | **bool**|  | [optional] [default to False]

### Return type

[**List[ProjectRoleDetails]**](ProjectRoleDetails.md)

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
**404** | Returned if the project is not found or if the user does not have the necessary permissions for the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_roles**
> Dict[str, str] get_project_roles(project_id_or_key)

Get project roles for project

Returns a list of [project roles](https://confluence.atlassian.com/x/3odKLg) for the project returning the name and self URL for each role.  Note that all project roles are shared with all projects in Jira Cloud. See [Get all project roles](#api-rest-api-3-role-get) for more information.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for any project on the site or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.ProjectRolesApi(api_client)
    project_id_or_key = 'project_id_or_key_example' # str | The project ID or project key (case sensitive).

    try:
        # Get project roles for project
        api_response = api_instance.get_project_roles(project_id_or_key)
        print("The response of ProjectRolesApi->get_project_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectRolesApi->get_project_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id_or_key** | **str**| The project ID or project key (case sensitive). | 

### Return type

**Dict[str, str]**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing or if the user lacks administrative permissions for the project. |  -  |
**404** | Returned if the project is not found or or if the user does not have administrative permissions for the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partial_update_project_role**
> ProjectRole partial_update_project_role(id, create_update_role_request_bean)

Partial update project role

Updates either the project role's name or its description.  You cannot update both the name and description at the same time using this operation. If you send a request with a name and a description only the name is updated.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.create_update_role_request_bean import CreateUpdateRoleRequestBean
from openapi_client.models.project_role import ProjectRole
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
    api_instance = openapi_client.ProjectRolesApi(api_client)
    id = 56 # int | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    create_update_role_request_bean = {"description":"A project role that represents developers in a project","name":"Developers"} # CreateUpdateRoleRequestBean | 

    try:
        # Partial update project role
        api_response = api_instance.partial_update_project_role(id, create_update_role_request_bean)
        print("The response of ProjectRolesApi->partial_update_project_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectRolesApi->partial_update_project_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | 
 **create_update_role_request_bean** | [**CreateUpdateRoleRequestBean**](CreateUpdateRoleRequestBean.md)|  | 

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have administrative permissions. |  -  |
**404** | Returned if the project role is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

