# openapi_client.RunArtifactsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**run_artifacts_batch_create_empty_artifacts**](RunArtifactsApi.md#run_artifacts_batch_create_empty_artifacts) | **POST** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts/batch/metadata | Create a batch of empty Artifacts.
[**run_artifacts_get_by_id**](RunArtifactsApi.md#run_artifacts_get_by_id) | **GET** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts/metadata | Get Artifact by Id.
[**run_artifacts_get_content_information**](RunArtifactsApi.md#run_artifacts_get_content_information) | **GET** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts/contentinfo | Get Artifact content information.
[**run_artifacts_get_sas_uri**](RunArtifactsApi.md#run_artifacts_get_sas_uri) | **GET** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts/artifacturi | Get URI of an Artifact.
[**run_artifacts_list_in_container**](RunArtifactsApi.md#run_artifacts_list_in_container) | **GET** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts | Get Artifacts in a container.
[**run_artifacts_list_in_path**](RunArtifactsApi.md#run_artifacts_list_in_path) | **GET** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts/path | Get Artifacts in the provided path.
[**run_artifacts_list_sas_by_prefix**](RunArtifactsApi.md#run_artifacts_list_sas_by_prefix) | **GET** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts/prefix/contentinfo | Get SAS of an Artifact.


# **run_artifacts_batch_create_empty_artifacts**
> BatchArtifactContentInformationResult run_artifacts_batch_create_empty_artifacts(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, artifact_paths=artifact_paths)

Create a batch of empty Artifacts.

Create a batch of empty Artifacts in a specific Run.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.artifact_path_list import ArtifactPathList
from openapi_client.models.batch_artifact_content_information_result import BatchArtifactContentInformationResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RunArtifactsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier of the Run.
    artifact_paths = openapi_client.ArtifactPathList() # ArtifactPathList | The list of artifact paths. (optional)

    try:
        # Create a batch of empty Artifacts.
        api_response = api_instance.run_artifacts_batch_create_empty_artifacts(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, artifact_paths=artifact_paths)
        print("The response of RunArtifactsApi->run_artifacts_batch_create_empty_artifacts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunArtifactsApi->run_artifacts_batch_create_empty_artifacts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier of the Run. | 
 **artifact_paths** | [**ArtifactPathList**](ArtifactPathList.md)| The list of artifact paths. | [optional] 

### Return type

[**BatchArtifactContentInformationResult**](BatchArtifactContentInformationResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Batch Artifacts are created successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_artifacts_get_by_id**
> Artifact run_artifacts_get_by_id(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, path=path)

Get Artifact by Id.

Get Artifact for a specific Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.artifact import Artifact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RunArtifactsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier of the Run.
    path = 'path_example' # str | The Artifact Path. (optional)

    try:
        # Get Artifact by Id.
        api_response = api_instance.run_artifacts_get_by_id(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, path=path)
        print("The response of RunArtifactsApi->run_artifacts_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunArtifactsApi->run_artifacts_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier of the Run. | 
 **path** | **str**| The Artifact Path. | [optional] 

### Return type

[**Artifact**](Artifact.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_artifacts_get_content_information**
> ArtifactContentInformation run_artifacts_get_content_information(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, path=path)

Get Artifact content information.

Get Artifact content information for give Run Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.artifact_content_information import ArtifactContentInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RunArtifactsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier of the Run.
    path = 'path_example' # str | The Artifact Path. (optional)

    try:
        # Get Artifact content information.
        api_response = api_instance.run_artifacts_get_content_information(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, path=path)
        print("The response of RunArtifactsApi->run_artifacts_get_content_information:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunArtifactsApi->run_artifacts_get_content_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier of the Run. | 
 **path** | **str**| The Artifact Path. | [optional] 

### Return type

[**ArtifactContentInformation**](ArtifactContentInformation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Artifact content information is returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_artifacts_get_sas_uri**
> str run_artifacts_get_sas_uri(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, path=path)

Get URI of an Artifact.

Get URI of an Artifact for a specific Run Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RunArtifactsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier of the Run.
    path = 'path_example' # str | The Artifact Path. (optional)

    try:
        # Get URI of an Artifact.
        api_response = api_instance.run_artifacts_get_sas_uri(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, path=path)
        print("The response of RunArtifactsApi->run_artifacts_get_sas_uri:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunArtifactsApi->run_artifacts_get_sas_uri: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier of the Run. | 
 **path** | **str**| The Artifact Path. | [optional] 

### Return type

**str**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_artifacts_list_in_container**
> PaginatedArtifactList run_artifacts_list_in_container(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, continuation_token=continuation_token)

Get Artifacts in a container.

Get Artifacts in container for a specific Run Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.paginated_artifact_list import PaginatedArtifactList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RunArtifactsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier of the Run.
    continuation_token = 'continuation_token_example' # str | The Continuation Token. (optional)

    try:
        # Get Artifacts in a container.
        api_response = api_instance.run_artifacts_list_in_container(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, continuation_token=continuation_token)
        print("The response of RunArtifactsApi->run_artifacts_list_in_container:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunArtifactsApi->run_artifacts_list_in_container: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier of the Run. | 
 **continuation_token** | **str**| The Continuation Token. | [optional] 

### Return type

[**PaginatedArtifactList**](PaginatedArtifactList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Artifacts in Container are returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_artifacts_list_in_path**
> PaginatedArtifactList run_artifacts_list_in_path(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, path=path, continuation_token=continuation_token)

Get Artifacts in the provided path.

Get Artifacts in the provided path for a specific Run Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.paginated_artifact_list import PaginatedArtifactList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RunArtifactsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier of the Run.
    path = 'path_example' # str | The Artifact Path. (optional)
    continuation_token = 'continuation_token_example' # str | The Continuation Token. (optional)

    try:
        # Get Artifacts in the provided path.
        api_response = api_instance.run_artifacts_list_in_path(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, path=path, continuation_token=continuation_token)
        print("The response of RunArtifactsApi->run_artifacts_list_in_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunArtifactsApi->run_artifacts_list_in_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier of the Run. | 
 **path** | **str**| The Artifact Path. | [optional] 
 **continuation_token** | **str**| The Continuation Token. | [optional] 

### Return type

[**PaginatedArtifactList**](PaginatedArtifactList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_artifacts_list_sas_by_prefix**
> PaginatedArtifactContentInformationList run_artifacts_list_sas_by_prefix(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, path=path, continuation_token=continuation_token)

Get SAS of an Artifact.

Get SAS of an Artifact in the specified path.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.paginated_artifact_content_information_list import PaginatedArtifactContentInformationList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RunArtifactsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier of the Run.
    path = 'path_example' # str | The Artifact Path. (optional)
    continuation_token = 'continuation_token_example' # str | The Continuation Token. (optional)

    try:
        # Get SAS of an Artifact.
        api_response = api_instance.run_artifacts_list_sas_by_prefix(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, path=path, continuation_token=continuation_token)
        print("The response of RunArtifactsApi->run_artifacts_list_sas_by_prefix:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunArtifactsApi->run_artifacts_list_sas_by_prefix: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier of the Run. | 
 **path** | **str**| The Artifact Path. | [optional] 
 **continuation_token** | **str**| The Continuation Token. | [optional] 

### Return type

[**PaginatedArtifactContentInformationList**](PaginatedArtifactContentInformationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

