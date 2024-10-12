# openapi_client.PermissionSchemesApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_permission_grant**](PermissionSchemesApi.md#create_permission_grant) | **POST** /rest/api/3/permissionscheme/{schemeId}/permission | Create permission grant
[**create_permission_scheme**](PermissionSchemesApi.md#create_permission_scheme) | **POST** /rest/api/3/permissionscheme | Create permission scheme
[**delete_permission_scheme**](PermissionSchemesApi.md#delete_permission_scheme) | **DELETE** /rest/api/3/permissionscheme/{schemeId} | Delete permission scheme
[**delete_permission_scheme_entity**](PermissionSchemesApi.md#delete_permission_scheme_entity) | **DELETE** /rest/api/3/permissionscheme/{schemeId}/permission/{permissionId} | Delete permission scheme grant
[**get_all_permission_schemes**](PermissionSchemesApi.md#get_all_permission_schemes) | **GET** /rest/api/3/permissionscheme | Get all permission schemes
[**get_permission_scheme**](PermissionSchemesApi.md#get_permission_scheme) | **GET** /rest/api/3/permissionscheme/{schemeId} | Get permission scheme
[**get_permission_scheme_grant**](PermissionSchemesApi.md#get_permission_scheme_grant) | **GET** /rest/api/3/permissionscheme/{schemeId}/permission/{permissionId} | Get permission scheme grant
[**get_permission_scheme_grants**](PermissionSchemesApi.md#get_permission_scheme_grants) | **GET** /rest/api/3/permissionscheme/{schemeId}/permission | Get permission scheme grants
[**update_permission_scheme**](PermissionSchemesApi.md#update_permission_scheme) | **PUT** /rest/api/3/permissionscheme/{schemeId} | Update permission scheme


# **create_permission_grant**
> PermissionGrant create_permission_grant(scheme_id, permission_grant, expand=expand)

Create permission grant

Creates a permission grant in a permission scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.permission_grant import PermissionGrant
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
    api_instance = openapi_client.PermissionSchemesApi(api_client)
    scheme_id = 56 # int | The ID of the permission scheme in which to create a new permission grant.
    permission_grant = {"holder":{"parameter":"jira-core-users","type":"group","value":"ca85fac0-d974-40ca-a615-7af99c48d24f"},"permission":"ADMINISTER_PROJECTS"} # PermissionGrant | The permission grant to create.
    expand = 'expand_example' # str | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `permissions` Returns all permission grants for each permission scheme.  *  `user` Returns information about the user who is granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `field` Returns information about the custom field granted the permission.  *  `all` Returns all expandable information. (optional)

    try:
        # Create permission grant
        api_response = api_instance.create_permission_grant(scheme_id, permission_grant, expand=expand)
        print("The response of PermissionSchemesApi->create_permission_grant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionSchemesApi->create_permission_grant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme_id** | **int**| The ID of the permission scheme in which to create a new permission grant. | 
 **permission_grant** | [**PermissionGrant**](PermissionGrant.md)| The permission grant to create. | 
 **expand** | **str**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;user&#x60; Returns information about the user who is granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;all&#x60; Returns all expandable information. | [optional] 

### Return type

[**PermissionGrant**](PermissionGrant.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returned if the scheme permission is created. |  -  |
**400** | Returned if the value for expand is invalid or the same permission grant is present. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_permission_scheme**
> PermissionScheme create_permission_scheme(permission_scheme, expand=expand)

Create permission scheme

Creates a new permission scheme. You can create a permission scheme with or without defining a set of permission grants.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.permission_scheme import PermissionScheme
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
    api_instance = openapi_client.PermissionSchemesApi(api_client)
    permission_scheme = {"description":"description","name":"Example permission scheme","permissions":[{"holder":{"parameter":"jira-core-users","type":"group","value":"ca85fac0-d974-40ca-a615-7af99c48d24f"},"permission":"ADMINISTER_PROJECTS"}]} # PermissionScheme | The permission scheme to create.
    expand = 'expand_example' # str | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. (optional)

    try:
        # Create permission scheme
        api_response = api_instance.create_permission_scheme(permission_scheme, expand=expand)
        print("The response of PermissionSchemesApi->create_permission_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionSchemesApi->create_permission_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permission_scheme** | [**PermissionScheme**](PermissionScheme.md)| The permission scheme to create. | 
 **expand** | **str**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [optional] 

### Return type

[**PermissionScheme**](PermissionScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returned if the permission scheme is created. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission or the feature is not available in the Jira plan. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_permission_scheme**
> delete_permission_scheme(scheme_id)

Delete permission scheme

Deletes a permission scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.PermissionSchemesApi(api_client)
    scheme_id = 56 # int | The ID of the permission scheme being deleted.

    try:
        # Delete permission scheme
        api_instance.delete_permission_scheme(scheme_id)
    except Exception as e:
        print("Exception when calling PermissionSchemesApi->delete_permission_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme_id** | **int**| The ID of the permission scheme being deleted. | 

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
**204** | Returned if the permission scheme is deleted. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the permission scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_permission_scheme_entity**
> delete_permission_scheme_entity(scheme_id, permission_id)

Delete permission scheme grant

Deletes a permission grant from a permission scheme. See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more details.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.PermissionSchemesApi(api_client)
    scheme_id = 56 # int | The ID of the permission scheme to delete the permission grant from.
    permission_id = 56 # int | The ID of the permission grant to delete.

    try:
        # Delete permission scheme grant
        api_instance.delete_permission_scheme_entity(scheme_id, permission_id)
    except Exception as e:
        print("Exception when calling PermissionSchemesApi->delete_permission_scheme_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme_id** | **int**| The ID of the permission scheme to delete the permission grant from. | 
 **permission_id** | **int**| The ID of the permission grant to delete. | 

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
**204** | Returned if the permission grant is deleted. |  -  |
**400** | Returned if permission grant with the provided ID is not found. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_permission_schemes**
> PermissionSchemes get_all_permission_schemes(expand=expand)

Get all permission schemes

Returns all permission schemes.  ### About permission schemes and grants ###  A permission scheme is a collection of permission grants. A permission grant consists of a `holder` and a `permission`.  #### Holder object ####  The `holder` object contains information about the user or group being granted the permission. For example, the *Administer projects* permission is granted to a group named *Teams in space administrators*. In this case, the type is `\"type\": \"group\"`, and the parameter is the group name, `\"parameter\": \"Teams in space administrators\"` and the value is group ID, `\"value\": \"ca85fac0-d974-40ca-a615-7af99c48d24f\"`. The `holder` object is defined by the following properties:   *  `type` Identifies the user or group (see the list of types below).  *  `parameter` As a group's name can change, use of `value` is recommended. The value of this property depends on the `type`. For example, if the `type` is a group, then you need to specify the group name.  *  `value` The value of this property depends on the `type`. If the `type` is a group, then you need to specify the group ID. For other `type` it has the same value as `parameter`  The following `types` are available. The expected values for `parameter` and `value` are given in parentheses (some types may not have a `parameter` or `value`):   *  `anyone` Grant for anonymous users.  *  `applicationRole` Grant for users with access to the specified application (application name, application name). See [Update product access settings](https://confluence.atlassian.com/x/3YxjL) for more information.  *  `assignee` Grant for the user currently assigned to an issue.  *  `group` Grant for the specified group (`parameter` : group name, `value` : group ID).  *  `groupCustomField` Grant for a user in the group selected in the specified custom field (`parameter` : custom field ID, `value` : custom field ID).  *  `projectLead` Grant for a project lead.  *  `projectRole` Grant for the specified project role (`parameter` :project role ID, `value` : project role ID).  *  `reporter` Grant for the user who reported the issue.  *  `sd.customer.portal.only` Jira Service Desk only. Grants customers permission to access the customer portal but not Jira. See [Customizing Jira Service Desk permissions](https://confluence.atlassian.com/x/24dKLg) for more information.  *  `user` Grant for the specified user (`parameter` : user ID - historically this was the userkey but that is deprecated and the account ID should be used, `value` : user ID).  *  `userCustomField` Grant for a user selected in the specified custom field (`parameter` : custom field ID, `value` : custom field ID).  #### Built-in permissions ####  The [built-in Jira permissions](https://confluence.atlassian.com/x/yodKLg) are listed below. Apps can also define custom permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information.  **Project permissions**   *  `ADMINISTER_PROJECTS`  *  `BROWSE_PROJECTS`  *  `MANAGE_SPRINTS_PERMISSION` (Jira Software only)  *  `SERVICEDESK_AGENT` (Jira Service Desk only)  *  `VIEW_DEV_TOOLS` (Jira Software only)  *  `VIEW_READONLY_WORKFLOW`  **Issue permissions**   *  `ASSIGNABLE_USER`  *  `ASSIGN_ISSUES`  *  `CLOSE_ISSUES`  *  `CREATE_ISSUES`  *  `DELETE_ISSUES`  *  `EDIT_ISSUES`  *  `LINK_ISSUES`  *  `MODIFY_REPORTER`  *  `MOVE_ISSUES`  *  `RESOLVE_ISSUES`  *  `SCHEDULE_ISSUES`  *  `SET_ISSUE_SECURITY`  *  `TRANSITION_ISSUES`  **Voters and watchers permissions**   *  `MANAGE_WATCHERS`  *  `VIEW_VOTERS_AND_WATCHERS`  **Comments permissions**   *  `ADD_COMMENTS`  *  `DELETE_ALL_COMMENTS`  *  `DELETE_OWN_COMMENTS`  *  `EDIT_ALL_COMMENTS`  *  `EDIT_OWN_COMMENTS`  **Attachments permissions**   *  `CREATE_ATTACHMENTS`  *  `DELETE_ALL_ATTACHMENTS`  *  `DELETE_OWN_ATTACHMENTS`  **Time tracking permissions**   *  `DELETE_ALL_WORKLOGS`  *  `DELETE_OWN_WORKLOGS`  *  `EDIT_ALL_WORKLOGS`  *  `EDIT_OWN_WORKLOGS`  *  `WORK_ON_ISSUES`  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.permission_schemes import PermissionSchemes
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
    api_instance = openapi_client.PermissionSchemesApi(api_client)
    expand = 'expand_example' # str | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. (optional)

    try:
        # Get all permission schemes
        api_response = api_instance.get_all_permission_schemes(expand=expand)
        print("The response of PermissionSchemesApi->get_all_permission_schemes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionSchemesApi->get_all_permission_schemes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expand** | **str**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [optional] 

### Return type

[**PermissionSchemes**](PermissionSchemes.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_permission_scheme**
> PermissionScheme get_permission_scheme(scheme_id, expand=expand)

Get permission scheme

Returns a permission scheme.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.permission_scheme import PermissionScheme
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
    api_instance = openapi_client.PermissionSchemesApi(api_client)
    scheme_id = 56 # int | The ID of the permission scheme to return.
    expand = 'expand_example' # str | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. (optional)

    try:
        # Get permission scheme
        api_response = api_instance.get_permission_scheme(scheme_id, expand=expand)
        print("The response of PermissionSchemesApi->get_permission_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionSchemesApi->get_permission_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme_id** | **int**| The ID of the permission scheme to return. | 
 **expand** | **str**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [optional] 

### Return type

[**PermissionScheme**](PermissionScheme.md)

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
**404** | Returned if the permission scheme is not found or the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_permission_scheme_grant**
> PermissionGrant get_permission_scheme_grant(scheme_id, permission_id, expand=expand)

Get permission scheme grant

Returns a permission grant.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.permission_grant import PermissionGrant
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
    api_instance = openapi_client.PermissionSchemesApi(api_client)
    scheme_id = 56 # int | The ID of the permission scheme.
    permission_id = 56 # int | The ID of the permission grant.
    expand = 'expand_example' # str | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. (optional)

    try:
        # Get permission scheme grant
        api_response = api_instance.get_permission_scheme_grant(scheme_id, permission_id, expand=expand)
        print("The response of PermissionSchemesApi->get_permission_scheme_grant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionSchemesApi->get_permission_scheme_grant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme_id** | **int**| The ID of the permission scheme. | 
 **permission_id** | **int**| The ID of the permission grant. | 
 **expand** | **str**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [optional] 

### Return type

[**PermissionGrant**](PermissionGrant.md)

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
**404** | Returned if the permission scheme or permission grant is not found or the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_permission_scheme_grants**
> PermissionGrants get_permission_scheme_grants(scheme_id, expand=expand)

Get permission scheme grants

Returns all permission grants for a permission scheme.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.permission_grants import PermissionGrants
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
    api_instance = openapi_client.PermissionSchemesApi(api_client)
    scheme_id = 56 # int | The ID of the permission scheme.
    expand = 'expand_example' # str | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `permissions` Returns all permission grants for each permission scheme.  *  `user` Returns information about the user who is granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `field` Returns information about the custom field granted the permission.  *  `all` Returns all expandable information. (optional)

    try:
        # Get permission scheme grants
        api_response = api_instance.get_permission_scheme_grants(scheme_id, expand=expand)
        print("The response of PermissionSchemesApi->get_permission_scheme_grants:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionSchemesApi->get_permission_scheme_grants: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme_id** | **int**| The ID of the permission scheme. | 
 **expand** | **str**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;user&#x60; Returns information about the user who is granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;all&#x60; Returns all expandable information. | [optional] 

### Return type

[**PermissionGrants**](PermissionGrants.md)

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
**404** | Returned if the permission schemes is not found or the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_permission_scheme**
> PermissionScheme update_permission_scheme(scheme_id, permission_scheme, expand=expand)

Update permission scheme

Updates a permission scheme. Below are some important things to note when using this resource:   *  If a permissions list is present in the request, then it is set in the permission scheme, overwriting *all existing* grants.  *  If you want to update only the name and description, then do not send a permissions list in the request.  *  Sending an empty list will remove all permission grants from the permission scheme.  If you want to add or delete a permission grant instead of updating the whole list, see [Create permission grant](#api-rest-api-3-permissionscheme-schemeId-permission-post) or [Delete permission scheme entity](#api-rest-api-3-permissionscheme-schemeId-permission-permissionId-delete).  See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more details.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.permission_scheme import PermissionScheme
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
    api_instance = openapi_client.PermissionSchemesApi(api_client)
    scheme_id = 56 # int | The ID of the permission scheme to update.
    permission_scheme = {"description":"description","name":"Example permission scheme","permissions":[{"holder":{"parameter":"jira-core-users","type":"group","value":"ca85fac0-d974-40ca-a615-7af99c48d24f"},"permission":"ADMINISTER_PROJECTS"}]} # PermissionScheme | 
    expand = 'expand_example' # str | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. (optional)

    try:
        # Update permission scheme
        api_response = api_instance.update_permission_scheme(scheme_id, permission_scheme, expand=expand)
        print("The response of PermissionSchemesApi->update_permission_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionSchemesApi->update_permission_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme_id** | **int**| The ID of the permission scheme to update. | 
 **permission_scheme** | [**PermissionScheme**](PermissionScheme.md)|  | 
 **expand** | **str**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [optional] 

### Return type

[**PermissionScheme**](PermissionScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the scheme is updated. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if:   *  the user does not have the necessary permission to update permission schemes.  *  the Jira instance is Jira Core Free or Jira Software Free. Permission schemes cannot be updated on free plans. |  -  |
**404** | Returned if the permission scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

