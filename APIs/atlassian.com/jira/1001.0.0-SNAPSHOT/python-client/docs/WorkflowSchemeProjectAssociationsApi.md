# openapi_client.WorkflowSchemeProjectAssociationsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assign_scheme_to_project**](WorkflowSchemeProjectAssociationsApi.md#assign_scheme_to_project) | **PUT** /rest/api/3/workflowscheme/project | Assign workflow scheme to project
[**get_workflow_scheme_project_associations**](WorkflowSchemeProjectAssociationsApi.md#get_workflow_scheme_project_associations) | **GET** /rest/api/3/workflowscheme/project | Get workflow scheme project associations


# **assign_scheme_to_project**
> object assign_scheme_to_project(workflow_scheme_project_association)

Assign workflow scheme to project

Assigns a workflow scheme to a project. This operation is performed only when there are no issues in the project.  Workflow schemes can only be assigned to classic projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.workflow_scheme_project_association import WorkflowSchemeProjectAssociation
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
    api_instance = openapi_client.WorkflowSchemeProjectAssociationsApi(api_client)
    workflow_scheme_project_association = {"projectId":"10001","workflowSchemeId":"10032"} # WorkflowSchemeProjectAssociation | 

    try:
        # Assign workflow scheme to project
        api_response = api_instance.assign_scheme_to_project(workflow_scheme_project_association)
        print("The response of WorkflowSchemeProjectAssociationsApi->assign_scheme_to_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowSchemeProjectAssociationsApi->assign_scheme_to_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_scheme_project_association** | [**WorkflowSchemeProjectAssociation**](WorkflowSchemeProjectAssociation.md)|  | 

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
**404** | Returned if the workflow scheme or the project are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workflow_scheme_project_associations**
> ContainerOfWorkflowSchemeAssociations get_workflow_scheme_project_associations(project_id)

Get workflow scheme project associations

Returns a list of the workflow schemes associated with a list of projects. Each returned workflow scheme includes a list of the requested projects associated with it. Any team-managed or non-existent projects in the request are ignored and no errors are returned.  If the project is associated with the `Default Workflow Scheme` no ID is returned. This is because the way the `Default Workflow Scheme` is stored means it has no ID.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.container_of_workflow_scheme_associations import ContainerOfWorkflowSchemeAssociations
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
    api_instance = openapi_client.WorkflowSchemeProjectAssociationsApi(api_client)
    project_id = [56] # List[int] | The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, `projectId=10000&projectId=10001`.

    try:
        # Get workflow scheme project associations
        api_response = api_instance.get_workflow_scheme_project_associations(project_id)
        print("The response of WorkflowSchemeProjectAssociationsApi->get_workflow_scheme_project_associations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowSchemeProjectAssociationsApi->get_workflow_scheme_project_associations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**List[int]**](int.md)| The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. | 

### Return type

[**ContainerOfWorkflowSchemeAssociations**](ContainerOfWorkflowSchemeAssociations.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

