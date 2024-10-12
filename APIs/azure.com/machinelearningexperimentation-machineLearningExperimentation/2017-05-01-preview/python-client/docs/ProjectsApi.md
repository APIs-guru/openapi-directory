# openapi_client.ProjectsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projects_create_or_update**](ProjectsApi.md#projects_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces/{workspaceName}/projects/{projectName} | 
[**projects_delete**](ProjectsApi.md#projects_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces/{workspaceName}/projects/{projectName} | 
[**projects_get**](ProjectsApi.md#projects_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces/{workspaceName}/projects/{projectName} | 
[**projects_list_by_workspace**](ProjectsApi.md#projects_list_by_workspace) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces{workspaceName}/projects | 
[**projects_update**](ProjectsApi.md#projects_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces/{workspaceName}/projects/{projectName} | 


# **projects_create_or_update**
> Project projects_create_or_update(api_version, subscription_id, resource_group_name, account_name, workspace_name, project_name, parameters)



Creates or updates a project with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project import Project
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the machine learning team account belongs.
    account_name = 'account_name_example' # str | The name of the machine learning team account.
    workspace_name = 'workspace_name_example' # str | The name of the machine learning team account workspace.
    project_name = 'project_name_example' # str | The name of the machine learning project under a team account workspace.
    parameters = openapi_client.Project() # Project | The parameters for creating or updating a project.

    try:
        api_response = api_instance.projects_create_or_update(api_version, subscription_id, resource_group_name, account_name, workspace_name, project_name, parameters)
        print("The response of ProjectsApi->projects_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->projects_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the machine learning team account belongs. | 
 **account_name** | **str**| The name of the machine learning team account. | 
 **workspace_name** | **str**| The name of the machine learning team account workspace. | 
 **project_name** | **str**| The name of the machine learning project under a team account workspace. | 
 **parameters** | [**Project**](Project.md)| The parameters for creating or updating a project. | 

### Return type

[**Project**](Project.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the resource already exists and was updated. |  -  |
**201** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_delete**
> projects_delete(api_version, subscription_id, resource_group_name, account_name, workspace_name, project_name)



Deletes a project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the machine learning team account belongs.
    account_name = 'account_name_example' # str | The name of the machine learning team account.
    workspace_name = 'workspace_name_example' # str | The name of the machine learning team account workspace.
    project_name = 'project_name_example' # str | The name of the machine learning project under a team account workspace.

    try:
        api_instance.projects_delete(api_version, subscription_id, resource_group_name, account_name, workspace_name, project_name)
    except Exception as e:
        print("Exception when calling ProjectsApi->projects_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the machine learning team account belongs. | 
 **account_name** | **str**| The name of the machine learning team account. | 
 **workspace_name** | **str**| The name of the machine learning team account workspace. | 
 **project_name** | **str**| The name of the machine learning project under a team account workspace. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**204** | The machine learning team account does not exist in the subscription. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_get**
> Project projects_get(api_version, subscription_id, resource_group_name, account_name, workspace_name, project_name)



Gets the properties of the specified machine learning project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project import Project
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the machine learning team account belongs.
    account_name = 'account_name_example' # str | The name of the machine learning team account.
    workspace_name = 'workspace_name_example' # str | The name of the machine learning team account workspace.
    project_name = 'project_name_example' # str | The name of the machine learning project under a team account workspace.

    try:
        api_response = api_instance.projects_get(api_version, subscription_id, resource_group_name, account_name, workspace_name, project_name)
        print("The response of ProjectsApi->projects_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->projects_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the machine learning team account belongs. | 
 **account_name** | **str**| The name of the machine learning team account. | 
 **workspace_name** | **str**| The name of the machine learning team account workspace. | 
 **project_name** | **str**| The name of the machine learning project under a team account workspace. | 

### Return type

[**Project**](Project.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_list_by_workspace**
> ProjectListResult projects_list_by_workspace(api_version, subscription_id, account_name, workspace_name, resource_group_name)



Lists all the available machine learning projects under the specified workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project_list_result import ProjectListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    account_name = 'account_name_example' # str | The name of the machine learning team account.
    workspace_name = 'workspace_name_example' # str | The name of the machine learning team account workspace.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the machine learning team account belongs.

    try:
        api_response = api_instance.projects_list_by_workspace(api_version, subscription_id, account_name, workspace_name, resource_group_name)
        print("The response of ProjectsApi->projects_list_by_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->projects_list_by_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **account_name** | **str**| The name of the machine learning team account. | 
 **workspace_name** | **str**| The name of the machine learning team account workspace. | 
 **resource_group_name** | **str**| The name of the resource group to which the machine learning team account belongs. | 

### Return type

[**ProjectListResult**](ProjectListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_update**
> Project projects_update(api_version, subscription_id, resource_group_name, account_name, workspace_name, project_name, parameters)



Updates a project with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project import Project
from openapi_client.models.project_update_parameters import ProjectUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the machine learning team account belongs.
    account_name = 'account_name_example' # str | The name of the machine learning team account.
    workspace_name = 'workspace_name_example' # str | The name of the machine learning team account workspace.
    project_name = 'project_name_example' # str | The name of the machine learning project under a team account workspace.
    parameters = openapi_client.ProjectUpdateParameters() # ProjectUpdateParameters | The parameters for updating a machine learning team account.

    try:
        api_response = api_instance.projects_update(api_version, subscription_id, resource_group_name, account_name, workspace_name, project_name, parameters)
        print("The response of ProjectsApi->projects_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->projects_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the machine learning team account belongs. | 
 **account_name** | **str**| The name of the machine learning team account. | 
 **workspace_name** | **str**| The name of the machine learning team account workspace. | 
 **project_name** | **str**| The name of the machine learning project under a team account workspace. | 
 **parameters** | [**ProjectUpdateParameters**](ProjectUpdateParameters.md)| The parameters for updating a machine learning team account. | 

### Return type

[**Project**](Project.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

