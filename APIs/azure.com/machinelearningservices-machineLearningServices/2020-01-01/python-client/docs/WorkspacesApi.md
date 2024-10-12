# openapi_client.WorkspacesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workspace_features_list**](WorkspacesApi.md#workspace_features_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/features | 
[**workspaces_create_or_update**](WorkspacesApi.md#workspaces_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName} | 
[**workspaces_delete**](WorkspacesApi.md#workspaces_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName} | 
[**workspaces_get**](WorkspacesApi.md#workspaces_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName} | 
[**workspaces_list_by_resource_group**](WorkspacesApi.md#workspaces_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces | 
[**workspaces_list_by_subscription**](WorkspacesApi.md#workspaces_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningServices/workspaces | 
[**workspaces_list_keys**](WorkspacesApi.md#workspaces_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/listKeys | 
[**workspaces_resync_keys**](WorkspacesApi.md#workspaces_resync_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/resyncKeys | 
[**workspaces_update**](WorkspacesApi.md#workspaces_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName} | 


# **workspace_features_list**
> ListAmlUserFeatureResult workspace_features_list(api_version, subscription_id, resource_group_name, workspace_name)



Lists all enabled features for a workspace

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_aml_user_feature_result import ListAmlUserFeatureResult
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
    api_instance = openapi_client.WorkspacesApi(api_client)
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.

    try:
        api_response = api_instance.workspace_features_list(api_version, subscription_id, resource_group_name, workspace_name)
        print("The response of WorkspacesApi->workspace_features_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspace_features_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 

### Return type

[**ListAmlUserFeatureResult**](ListAmlUserFeatureResult.md)

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

# **workspaces_create_or_update**
> Workspace workspaces_create_or_update(api_version, subscription_id, resource_group_name, workspace_name, parameters)



Creates or updates a workspace with the specified parameters.

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
    api_instance = openapi_client.WorkspacesApi(api_client)
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.
    parameters = openapi_client.Workspace() # Workspace | The parameters for creating or updating a machine learning workspace.

    try:
        api_response = api_instance.workspaces_create_or_update(api_version, subscription_id, resource_group_name, workspace_name, parameters)
        print("The response of WorkspacesApi->workspaces_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 
 **parameters** | [**Workspace**](Workspace.md)| The parameters for creating or updating a machine learning workspace. | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**201** | The request was successful; the request was well-formed and received properly. |  -  |
**202** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_delete**
> workspaces_delete(api_version, subscription_id, resource_group_name, workspace_name)



Deletes a machine learning workspace.

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
    api_instance = openapi_client.WorkspacesApi(api_client)
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.

    try:
        api_instance.workspaces_delete(api_version, subscription_id, resource_group_name, workspace_name)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 

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
**204** | The machine learning workspace does not exist in the subscription. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_get**
> Workspace workspaces_get(api_version, subscription_id, resource_group_name, workspace_name)



Gets the properties of the specified machine learning workspace.

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
    api_instance = openapi_client.WorkspacesApi(api_client)
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.

    try:
        api_response = api_instance.workspaces_get(api_version, subscription_id, resource_group_name, workspace_name)
        print("The response of WorkspacesApi->workspaces_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_list_by_resource_group**
> WorkspaceListResult workspaces_list_by_resource_group(api_version, subscription_id, resource_group_name, skiptoken=skiptoken)



Lists all the available machine learning workspaces under the specified resource group.

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
    api_instance = openapi_client.WorkspacesApi(api_client)
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    skiptoken = 'skiptoken_example' # str | Continuation token for pagination. (optional)

    try:
        api_response = api_instance.workspaces_list_by_resource_group(api_version, subscription_id, resource_group_name, skiptoken=skiptoken)
        print("The response of WorkspacesApi->workspaces_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **skiptoken** | **str**| Continuation token for pagination. | [optional] 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_list_by_subscription**
> WorkspaceListResult workspaces_list_by_subscription(api_version, subscription_id, skiptoken=skiptoken)



Lists all the available machine learning workspaces under the specified subscription.

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
    api_instance = openapi_client.WorkspacesApi(api_client)
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    skiptoken = 'skiptoken_example' # str | Continuation token for pagination. (optional)

    try:
        api_response = api_instance.workspaces_list_by_subscription(api_version, subscription_id, skiptoken=skiptoken)
        print("The response of WorkspacesApi->workspaces_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 
 **subscription_id** | **str**| Azure subscription identifier. | 
 **skiptoken** | **str**| Continuation token for pagination. | [optional] 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_list_keys**
> ListWorkspaceKeysResult workspaces_list_keys(api_version, subscription_id, resource_group_name, workspace_name)



Lists all the keys associated with this workspace. This includes keys for the storage account, app insights and password for container registry

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_workspace_keys_result import ListWorkspaceKeysResult
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
    api_instance = openapi_client.WorkspacesApi(api_client)
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.

    try:
        api_response = api_instance.workspaces_list_keys(api_version, subscription_id, resource_group_name, workspace_name)
        print("The response of WorkspacesApi->workspaces_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 

### Return type

[**ListWorkspaceKeysResult**](ListWorkspaceKeysResult.md)

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

# **workspaces_resync_keys**
> workspaces_resync_keys(api_version, subscription_id, resource_group_name, workspace_name)



Resync all the keys associated with this workspace. This includes keys for the storage account, app insights and password for container registry

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
    api_instance = openapi_client.WorkspacesApi(api_client)
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.

    try:
        api_instance.workspaces_resync_keys(api_version, subscription_id, resource_group_name, workspace_name)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_resync_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 

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
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_update**
> Workspace workspaces_update(api_version, subscription_id, resource_group_name, workspace_name, parameters)



Updates a machine learning workspace with the specified parameters.

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
    api_instance = openapi_client.WorkspacesApi(api_client)
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.
    parameters = openapi_client.WorkspaceUpdateParameters() # WorkspaceUpdateParameters | The parameters for updating a machine learning workspace.

    try:
        api_response = api_instance.workspaces_update(api_version, subscription_id, resource_group_name, workspace_name, parameters)
        print("The response of WorkspacesApi->workspaces_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 
 **parameters** | [**WorkspaceUpdateParameters**](WorkspaceUpdateParameters.md)| The parameters for updating a machine learning workspace. | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

