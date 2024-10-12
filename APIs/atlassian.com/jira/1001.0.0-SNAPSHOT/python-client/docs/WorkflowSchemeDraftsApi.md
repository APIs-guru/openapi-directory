# openapi_client.WorkflowSchemeDraftsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_workflow_scheme_draft_from_parent**](WorkflowSchemeDraftsApi.md#create_workflow_scheme_draft_from_parent) | **POST** /rest/api/3/workflowscheme/{id}/createdraft | Create draft workflow scheme
[**delete_draft_default_workflow**](WorkflowSchemeDraftsApi.md#delete_draft_default_workflow) | **DELETE** /rest/api/3/workflowscheme/{id}/draft/default | Delete draft default workflow
[**delete_draft_workflow_mapping**](WorkflowSchemeDraftsApi.md#delete_draft_workflow_mapping) | **DELETE** /rest/api/3/workflowscheme/{id}/draft/workflow | Delete issue types for workflow in draft workflow scheme
[**delete_workflow_scheme_draft**](WorkflowSchemeDraftsApi.md#delete_workflow_scheme_draft) | **DELETE** /rest/api/3/workflowscheme/{id}/draft | Delete draft workflow scheme
[**delete_workflow_scheme_draft_issue_type**](WorkflowSchemeDraftsApi.md#delete_workflow_scheme_draft_issue_type) | **DELETE** /rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType} | Delete workflow for issue type in draft workflow scheme
[**get_draft_default_workflow**](WorkflowSchemeDraftsApi.md#get_draft_default_workflow) | **GET** /rest/api/3/workflowscheme/{id}/draft/default | Get draft default workflow
[**get_draft_workflow**](WorkflowSchemeDraftsApi.md#get_draft_workflow) | **GET** /rest/api/3/workflowscheme/{id}/draft/workflow | Get issue types for workflows in draft workflow scheme
[**get_workflow_scheme_draft**](WorkflowSchemeDraftsApi.md#get_workflow_scheme_draft) | **GET** /rest/api/3/workflowscheme/{id}/draft | Get draft workflow scheme
[**get_workflow_scheme_draft_issue_type**](WorkflowSchemeDraftsApi.md#get_workflow_scheme_draft_issue_type) | **GET** /rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType} | Get workflow for issue type in draft workflow scheme
[**publish_draft_workflow_scheme**](WorkflowSchemeDraftsApi.md#publish_draft_workflow_scheme) | **POST** /rest/api/3/workflowscheme/{id}/draft/publish | Publish draft workflow scheme
[**set_workflow_scheme_draft_issue_type**](WorkflowSchemeDraftsApi.md#set_workflow_scheme_draft_issue_type) | **PUT** /rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType} | Set workflow for issue type in draft workflow scheme
[**update_draft_default_workflow**](WorkflowSchemeDraftsApi.md#update_draft_default_workflow) | **PUT** /rest/api/3/workflowscheme/{id}/draft/default | Update draft default workflow
[**update_draft_workflow_mapping**](WorkflowSchemeDraftsApi.md#update_draft_workflow_mapping) | **PUT** /rest/api/3/workflowscheme/{id}/draft/workflow | Set issue types for workflow in workflow scheme
[**update_workflow_scheme_draft**](WorkflowSchemeDraftsApi.md#update_workflow_scheme_draft) | **PUT** /rest/api/3/workflowscheme/{id}/draft | Update draft workflow scheme


# **create_workflow_scheme_draft_from_parent**
> WorkflowScheme create_workflow_scheme_draft_from_parent(id)

Create draft workflow scheme

Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an active workflow scheme can only have one draft workflow scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.workflow_scheme import WorkflowScheme
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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the active workflow scheme that the draft is created from.

    try:
        # Create draft workflow scheme
        api_response = api_instance.create_workflow_scheme_draft_from_parent(id)
        print("The response of WorkflowSchemeDraftsApi->create_workflow_scheme_draft_from_parent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->create_workflow_scheme_draft_from_parent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the active workflow scheme that the draft is created from. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_draft_default_workflow**
> WorkflowScheme delete_draft_default_workflow(id)

Delete draft default workflow

Resets the default workflow for a workflow scheme's draft. That is, the default workflow is set to Jira's system workflow (the *jira* workflow).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.workflow_scheme import WorkflowScheme
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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the workflow scheme that the draft belongs to.

    try:
        # Delete draft default workflow
        api_response = api_instance.delete_draft_default_workflow(id)
        print("The response of WorkflowSchemeDraftsApi->delete_draft_default_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->delete_draft_default_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the workflow scheme that the draft belongs to. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

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
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if any of the following is true:   *  The workflow scheme is not found.  *  The workflow scheme does not have a draft. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_draft_workflow_mapping**
> delete_draft_workflow_mapping(id, workflow_name)

Delete issue types for workflow in draft workflow scheme

Deletes the workflow-issue type mapping for a workflow in a workflow scheme's draft.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the workflow scheme that the draft belongs to.
    workflow_name = 'workflow_name_example' # str | The name of the workflow.

    try:
        # Delete issue types for workflow in draft workflow scheme
        api_instance.delete_draft_workflow_mapping(id, workflow_name)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->delete_draft_workflow_mapping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the workflow scheme that the draft belongs to. | 
 **workflow_name** | **str**| The name of the workflow. | 

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
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if any of the following is true:   *  The workflow scheme is not found.  *  The workflow scheme does not have a draft.  *  The workflow is not found.  *  The workflow is not specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_workflow_scheme_draft**
> delete_workflow_scheme_draft(id)

Delete draft workflow scheme

Deletes a draft workflow scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the active workflow scheme that the draft was created from.

    try:
        # Delete draft workflow scheme
        api_instance.delete_workflow_scheme_draft(id)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->delete_workflow_scheme_draft: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the active workflow scheme that the draft was created from. | 

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
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission.. |  -  |
**404** | Returned if:   *  the original active workflow scheme is not found.  *  the original active workflow scheme does not have a draft. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_workflow_scheme_draft_issue_type**
> WorkflowScheme delete_workflow_scheme_draft_issue_type(id, issue_type)

Delete workflow for issue type in draft workflow scheme

Deletes the issue type-workflow mapping for an issue type in a workflow scheme's draft.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.workflow_scheme import WorkflowScheme
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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the workflow scheme that the draft belongs to.
    issue_type = 'issue_type_example' # str | The ID of the issue type.

    try:
        # Delete workflow for issue type in draft workflow scheme
        api_response = api_instance.delete_workflow_scheme_draft_issue_type(id, issue_type)
        print("The response of WorkflowSchemeDraftsApi->delete_workflow_scheme_draft_issue_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->delete_workflow_scheme_draft_issue_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the workflow scheme that the draft belongs to. | 
 **issue_type** | **str**| The ID of the issue type. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

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
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the workflow scheme or issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_draft_default_workflow**
> DefaultWorkflow get_draft_default_workflow(id)

Get draft default workflow

Returns the default workflow for a workflow scheme's draft. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has *All Unassigned Issue Types* listed in its issue types for the workflow scheme in Jira.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.default_workflow import DefaultWorkflow
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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the workflow scheme that the draft belongs to.

    try:
        # Get draft default workflow
        api_response = api_instance.get_draft_default_workflow(id)
        print("The response of WorkflowSchemeDraftsApi->get_draft_default_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->get_draft_default_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the workflow scheme that the draft belongs to. | 

### Return type

[**DefaultWorkflow**](DefaultWorkflow.md)

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
**403** | Returned if the user does not have the necessary permission.. |  -  |
**404** | Returned if any of the following is true:   *  The workflow scheme is not found.  *  The workflow scheme does not have a draft. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_draft_workflow**
> IssueTypesWorkflowMapping get_draft_workflow(id, workflow_name=workflow_name)

Get issue types for workflows in draft workflow scheme

Returns the workflow-issue type mappings for a workflow scheme's draft.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.issue_types_workflow_mapping import IssueTypesWorkflowMapping
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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the workflow scheme that the draft belongs to.
    workflow_name = 'workflow_name_example' # str | The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow. (optional)

    try:
        # Get issue types for workflows in draft workflow scheme
        api_response = api_instance.get_draft_workflow(id, workflow_name=workflow_name)
        print("The response of WorkflowSchemeDraftsApi->get_draft_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->get_draft_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the workflow scheme that the draft belongs to. | 
 **workflow_name** | **str**| The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow. | [optional] 

### Return type

[**IssueTypesWorkflowMapping**](IssueTypesWorkflowMapping.md)

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
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if either the workflow scheme or workflow (if specified) is not found. session. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workflow_scheme_draft**
> WorkflowScheme get_workflow_scheme_draft(id)

Get draft workflow scheme

Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is modified, then the changes in the draft are copied back to the active workflow scheme. See [Configuring workflow schemes](https://confluence.atlassian.com/x/tohKLg) for more information.   Note that:   *  Only active workflow schemes can have draft workflow schemes.  *  An active workflow scheme can only have one draft workflow scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.workflow_scheme import WorkflowScheme
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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the active workflow scheme that the draft was created from.

    try:
        # Get draft workflow scheme
        api_response = api_instance.get_workflow_scheme_draft(id)
        print("The response of WorkflowSchemeDraftsApi->get_workflow_scheme_draft:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->get_workflow_scheme_draft: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the active workflow scheme that the draft was created from. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

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
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if:   *  the original active workflow scheme is not found.  *  the original active workflow scheme does not have a draft. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workflow_scheme_draft_issue_type**
> IssueTypeWorkflowMapping get_workflow_scheme_draft_issue_type(id, issue_type)

Get workflow for issue type in draft workflow scheme

Returns the issue type-workflow mapping for an issue type in a workflow scheme's draft.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.issue_type_workflow_mapping import IssueTypeWorkflowMapping
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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the workflow scheme that the draft belongs to.
    issue_type = 'issue_type_example' # str | The ID of the issue type.

    try:
        # Get workflow for issue type in draft workflow scheme
        api_response = api_instance.get_workflow_scheme_draft_issue_type(id, issue_type)
        print("The response of WorkflowSchemeDraftsApi->get_workflow_scheme_draft_issue_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->get_workflow_scheme_draft_issue_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the workflow scheme that the draft belongs to. | 
 **issue_type** | **str**| The ID of the issue type. | 

### Return type

[**IssueTypeWorkflowMapping**](IssueTypeWorkflowMapping.md)

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
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the workflow scheme or issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publish_draft_workflow_scheme**
> publish_draft_workflow_scheme(id, publish_draft_workflow_scheme, validate_only=validate_only)

Publish draft workflow scheme

Publishes a draft workflow scheme.  Where the draft workflow includes new workflow statuses for an issue type, mappings are provided to update issues with the original workflow status to the new workflow status.  This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain updates.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.publish_draft_workflow_scheme import PublishDraftWorkflowScheme
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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the workflow scheme that the draft belongs to.
    publish_draft_workflow_scheme = {"statusMappings":[{"issueTypeId":"10001","newStatusId":"1","statusId":"3"},{"issueTypeId":"10001","newStatusId":"2","statusId":"2"},{"issueTypeId":"10002","newStatusId":"10003","statusId":"10005"},{"issueTypeId":"10003","newStatusId":"1","statusId":"4"}]} # PublishDraftWorkflowScheme | Details of the status mappings.
    validate_only = False # bool | Whether the request only performs a validation. (optional) (default to False)

    try:
        # Publish draft workflow scheme
        api_instance.publish_draft_workflow_scheme(id, publish_draft_workflow_scheme, validate_only=validate_only)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->publish_draft_workflow_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the workflow scheme that the draft belongs to. | 
 **publish_draft_workflow_scheme** | [**PublishDraftWorkflowScheme**](PublishDraftWorkflowScheme.md)| Details of the status mappings. | 
 **validate_only** | **bool**| Whether the request only performs a validation. | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is only for validation and is successful. |  -  |
**303** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if any of these are true:   *  The workflow scheme is not found.  *  The workflow scheme does not have a draft.  *  A new status in the draft workflow scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_workflow_scheme_draft_issue_type**
> WorkflowScheme set_workflow_scheme_draft_issue_type(id, issue_type, issue_type_workflow_mapping)

Set workflow for issue type in draft workflow scheme

Sets the workflow for an issue type in a workflow scheme's draft.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.issue_type_workflow_mapping import IssueTypeWorkflowMapping
from openapi_client.models.workflow_scheme import WorkflowScheme
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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the workflow scheme that the draft belongs to.
    issue_type = 'issue_type_example' # str | The ID of the issue type.
    issue_type_workflow_mapping = {"issueType":"10000","updateDraftIfNeeded":false,"workflow":"jira"} # IssueTypeWorkflowMapping | The issue type-project mapping.

    try:
        # Set workflow for issue type in draft workflow scheme
        api_response = api_instance.set_workflow_scheme_draft_issue_type(id, issue_type, issue_type_workflow_mapping)
        print("The response of WorkflowSchemeDraftsApi->set_workflow_scheme_draft_issue_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->set_workflow_scheme_draft_issue_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the workflow scheme that the draft belongs to. | 
 **issue_type** | **str**| The ID of the issue type. | 
 **issue_type_workflow_mapping** | [**IssueTypeWorkflowMapping**](IssueTypeWorkflowMapping.md)| The issue type-project mapping. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

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
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the workflow scheme or issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_draft_default_workflow**
> WorkflowScheme update_draft_default_workflow(id, default_workflow)

Update draft default workflow

Sets the default workflow for a workflow scheme's draft.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.default_workflow import DefaultWorkflow
from openapi_client.models.workflow_scheme import WorkflowScheme
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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the workflow scheme that the draft belongs to.
    default_workflow = {"updateDraftIfNeeded":false,"workflow":"jira"} # DefaultWorkflow | The object for the new default workflow.

    try:
        # Update draft default workflow
        api_response = api_instance.update_draft_default_workflow(id, default_workflow)
        print("The response of WorkflowSchemeDraftsApi->update_draft_default_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->update_draft_default_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the workflow scheme that the draft belongs to. | 
 **default_workflow** | [**DefaultWorkflow**](DefaultWorkflow.md)| The object for the new default workflow. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

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
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if any of the following is true:   *  The workflow scheme is not found.  *  The workflow scheme does not have a draft. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_draft_workflow_mapping**
> WorkflowScheme update_draft_workflow_mapping(id, workflow_name, issue_types_workflow_mapping)

Set issue types for workflow in workflow scheme

Sets the issue types for a workflow in a workflow scheme's draft. The workflow can also be set as the default workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.issue_types_workflow_mapping import IssueTypesWorkflowMapping
from openapi_client.models.workflow_scheme import WorkflowScheme
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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the workflow scheme that the draft belongs to.
    workflow_name = 'workflow_name_example' # str | The name of the workflow.
    issue_types_workflow_mapping = {"issueTypes":["10000"],"updateDraftIfNeeded":true,"workflow":"jira"} # IssueTypesWorkflowMapping | 

    try:
        # Set issue types for workflow in workflow scheme
        api_response = api_instance.update_draft_workflow_mapping(id, workflow_name, issue_types_workflow_mapping)
        print("The response of WorkflowSchemeDraftsApi->update_draft_workflow_mapping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->update_draft_workflow_mapping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the workflow scheme that the draft belongs to. | 
 **workflow_name** | **str**| The name of the workflow. | 
 **issue_types_workflow_mapping** | [**IssueTypesWorkflowMapping**](IssueTypesWorkflowMapping.md)|  | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

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
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if any of the following is true:   *  The workflow scheme is not found.  *  The workflow scheme does not have a draft.  *  The workflow is not found.  *  The workflow is not specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_workflow_scheme_draft**
> WorkflowScheme update_workflow_scheme_draft(id, workflow_scheme)

Update draft workflow scheme

Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a draft is created. Note that an active workflow scheme can only have one draft workflow scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.workflow_scheme import WorkflowScheme
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
    api_instance = openapi_client.WorkflowSchemeDraftsApi(api_client)
    id = 56 # int | The ID of the active workflow scheme that the draft was created from.
    workflow_scheme = {"defaultWorkflow":"jira","description":"The description of the example workflow scheme.","issueTypeMappings":{"10000":"scrum workflow"},"name":"Example workflow scheme","updateDraftIfNeeded":false} # WorkflowScheme | 

    try:
        # Update draft workflow scheme
        api_response = api_instance.update_workflow_scheme_draft(id, workflow_scheme)
        print("The response of WorkflowSchemeDraftsApi->update_workflow_scheme_draft:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowSchemeDraftsApi->update_workflow_scheme_draft: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the active workflow scheme that the draft was created from. | 
 **workflow_scheme** | [**WorkflowScheme**](WorkflowScheme.md)|  | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

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
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if:   *  the original active workflow scheme is not found.  *  the original active workflow scheme does not have a draft. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

