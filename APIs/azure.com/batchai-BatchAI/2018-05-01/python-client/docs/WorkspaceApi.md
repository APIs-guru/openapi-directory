# openapi_client.WorkspaceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workspaces_create**](WorkspaceApi.md#workspaces_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName} | 
[**workspaces_delete**](WorkspaceApi.md#workspaces_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName} | 
[**workspaces_get**](WorkspaceApi.md#workspaces_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName} | 
[**workspaces_list**](WorkspaceApi.md#workspaces_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.BatchAI/workspaces | 
[**workspaces_list_by_resource_group**](WorkspaceApi.md#workspaces_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces | 
[**workspaces_update**](WorkspaceApi.md#workspaces_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName} | 


# **workspaces_create**
> Workspace workspaces_create(resource_group_name, workspace_name, api_version, subscription_id, parameters)



Creates a Workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace import Workspace
from openapi_client.models.workspace_create_parameters import WorkspaceCreateParameters
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
    api_instance = openapi_client.WorkspaceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    workspace_name = 'workspace_name_example' # str | The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.
    parameters = openapi_client.WorkspaceCreateParameters() # WorkspaceCreateParameters | Workspace creation parameters.

    try:
        api_response = api_instance.workspaces_create(resource_group_name, workspace_name, api_version, subscription_id, parameters)
        print("The response of WorkspaceApi->workspaces_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->workspaces_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **workspace_name** | **str**| The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 
 **parameters** | [**WorkspaceCreateParameters**](WorkspaceCreateParameters.md)| Workspace creation parameters. | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the workspace entity. |  -  |
**202** | The operation will be completed asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_delete**
> workspaces_delete(resource_group_name, workspace_name, api_version, subscription_id)



Deletes a Workspace.

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
    api_instance = openapi_client.WorkspaceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    workspace_name = 'workspace_name_example' # str | The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.

    try:
        api_instance.workspaces_delete(resource_group_name, workspace_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling WorkspaceApi->workspaces_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **workspace_name** | **str**| The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 

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
**200** | The operation was successful. |  -  |
**202** | The operation will be completed asynchronously. |  -  |
**204** | No content. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_get**
> Workspace workspaces_get(resource_group_name, workspace_name, api_version, subscription_id)



Gets information about a Workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace import Workspace
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
    api_instance = openapi_client.WorkspaceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    workspace_name = 'workspace_name_example' # str | The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.

    try:
        api_response = api_instance.workspaces_get(resource_group_name, workspace_name, api_version, subscription_id)
        print("The response of WorkspaceApi->workspaces_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->workspaces_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **workspace_name** | **str**| The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains information about the Workspace. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_list**
> WorkspaceListResult workspaces_list(api_version, subscription_id, maxresults=maxresults)



Gets a list of Workspaces associated with the given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace_list_result import WorkspaceListResult
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
    api_instance = openapi_client.WorkspaceApi(api_client)
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.
    maxresults = 1000 # int | The maximum number of items to return in the response. A maximum of 1000 files can be returned. (optional) (default to 1000)

    try:
        api_response = api_instance.workspaces_list(api_version, subscription_id, maxresults=maxresults)
        print("The response of WorkspaceApi->workspaces_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->workspaces_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 
 **maxresults** | **int**| The maximum number of items to return in the response. A maximum of 1000 files can be returned. | [optional] [default to 1000]

### Return type

[**WorkspaceListResult**](WorkspaceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains a formatted list of workspaces and their properties. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_list_by_resource_group**
> WorkspaceListResult workspaces_list_by_resource_group(resource_group_name, api_version, subscription_id, maxresults=maxresults)



Gets a list of Workspaces within the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace_list_result import WorkspaceListResult
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
    api_instance = openapi_client.WorkspaceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.
    maxresults = 1000 # int | The maximum number of items to return in the response. A maximum of 1000 files can be returned. (optional) (default to 1000)

    try:
        api_response = api_instance.workspaces_list_by_resource_group(resource_group_name, api_version, subscription_id, maxresults=maxresults)
        print("The response of WorkspaceApi->workspaces_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->workspaces_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 
 **maxresults** | **int**| The maximum number of items to return in the response. A maximum of 1000 files can be returned. | [optional] [default to 1000]

### Return type

[**WorkspaceListResult**](WorkspaceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains a list of workspaces within the resource group. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_update**
> Workspace workspaces_update(resource_group_name, workspace_name, api_version, subscription_id, parameters)



Updates properties of a Workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace import Workspace
from openapi_client.models.workspace_update_parameters import WorkspaceUpdateParameters
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
    api_instance = openapi_client.WorkspaceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    workspace_name = 'workspace_name_example' # str | The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.
    parameters = openapi_client.WorkspaceUpdateParameters() # WorkspaceUpdateParameters | Additional parameters for workspace update.

    try:
        api_response = api_instance.workspaces_update(resource_group_name, workspace_name, api_version, subscription_id, parameters)
        print("The response of WorkspaceApi->workspaces_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->workspaces_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **workspace_name** | **str**| The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 
 **parameters** | [**WorkspaceUpdateParameters**](WorkspaceUpdateParameters.md)| Additional parameters for workspace update. | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the Workspace entity. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

