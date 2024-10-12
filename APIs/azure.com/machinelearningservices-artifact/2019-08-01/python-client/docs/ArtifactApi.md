# openapi_client.ArtifactApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**artifacts_batch_create_empty_artifacts**](ArtifactApi.md#artifacts_batch_create_empty_artifacts) | **POST** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/batch/metadata | Create a batch of empty Artifacts.
[**artifacts_batch_get_by_id**](ArtifactApi.md#artifacts_batch_get_by_id) | **POST** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/batch/metadata | Get Batch Artifacts by Ids.
[**artifacts_batch_get_storage_by_id**](ArtifactApi.md#artifacts_batch_get_storage_by_id) | **POST** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/storageuri/batch/metadata | Get Batch Artifacts storage by Ids.
[**artifacts_batch_ingest_from_sas**](ArtifactApi.md#artifacts_batch_ingest_from_sas) | **POST** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/batch/ingest/containersas | Batch ingest using shared access signature.
[**artifacts_create**](ArtifactApi.md#artifacts_create) | **POST** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/metadata | Create Artifact.
[**artifacts_delete_batch_meta_data**](ArtifactApi.md#artifacts_delete_batch_meta_data) | **POST** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/batch/metadata:delete | Delete Batch of Artifact Metadata.
[**artifacts_delete_meta_data**](ArtifactApi.md#artifacts_delete_meta_data) | **DELETE** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/metadata | Delete Artifact Metadata.
[**artifacts_delete_meta_data_in_container**](ArtifactApi.md#artifacts_delete_meta_data_in_container) | **DELETE** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/batch | Delete Artifact Metadata.
[**artifacts_download**](ArtifactApi.md#artifacts_download) | **GET** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/content | Get Artifact content by Id.
[**artifacts_get**](ArtifactApi.md#artifacts_get) | **GET** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/metadata | Get Artifact metadata by Id.
[**artifacts_get_content_information**](ArtifactApi.md#artifacts_get_content_information) | **GET** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/contentinfo | Get Artifact content information.
[**artifacts_get_sas**](ArtifactApi.md#artifacts_get_sas) | **GET** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/write | Get writable shared access signature for Artifact.
[**artifacts_get_storage_content_information**](ArtifactApi.md#artifacts_get_storage_content_information) | **GET** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/contentinfo/storageuri | Get Artifact storage content information.
[**artifacts_list_in_container**](ArtifactApi.md#artifacts_list_in_container) | **GET** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container} | Get Artifacts metadata in a container or path.
[**artifacts_list_sas_by_prefix**](ArtifactApi.md#artifacts_list_sas_by_prefix) | **GET** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/prefix/contentinfo | Get shared access signature for an Artifact
[**artifacts_list_storage_uri_by_prefix**](ArtifactApi.md#artifacts_list_storage_uri_by_prefix) | **GET** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/prefix/contentinfo/storageuri | Get storage Uri for Artifacts in a path.
[**artifacts_register**](ArtifactApi.md#artifacts_register) | **POST** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/register | Create an Artifact for an existing data location.
[**artifacts_upload**](ArtifactApi.md#artifacts_upload) | **POST** /artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/content | Upload Artifact content.


# **artifacts_batch_create_empty_artifacts**
> BatchArtifactContentInformationResult artifacts_batch_create_empty_artifacts(subscription_id, resource_group_name, workspace_name, origin, container, artifact_paths)

Create a batch of empty Artifacts.

Create a Batch of empty Artifacts from the supplied paths.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    artifact_paths = openapi_client.ArtifactPathList() # ArtifactPathList | The list of Artifact paths to create.

    try:
        # Create a batch of empty Artifacts.
        api_response = api_instance.artifacts_batch_create_empty_artifacts(subscription_id, resource_group_name, workspace_name, origin, container, artifact_paths)
        print("The response of ArtifactApi->artifacts_batch_create_empty_artifacts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_batch_create_empty_artifacts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
 **artifact_paths** | [**ArtifactPathList**](ArtifactPathList.md)| The list of Artifact paths to create. | 

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
**200** | The Batch of empty Artifacts created successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_batch_get_by_id**
> BatchArtifactContentInformationResult artifacts_batch_get_by_id(subscription_id, resource_group_name, workspace_name, artifact_ids)

Get Batch Artifacts by Ids.

Get Batch Artifacts by the specific Ids.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.artifact_id_list import ArtifactIdList
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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    artifact_ids = openapi_client.ArtifactIdList() # ArtifactIdList | The command for Batch Artifact get request.

    try:
        # Get Batch Artifacts by Ids.
        api_response = api_instance.artifacts_batch_get_by_id(subscription_id, resource_group_name, workspace_name, artifact_ids)
        print("The response of ArtifactApi->artifacts_batch_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_batch_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **artifact_ids** | [**ArtifactIdList**](ArtifactIdList.md)| The command for Batch Artifact get request. | 

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
**200** | The requested Batch Artifacts are returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_batch_get_storage_by_id**
> BatchArtifactContentInformationResult artifacts_batch_get_storage_by_id(subscription_id, resource_group_name, workspace_name, artifact_ids)

Get Batch Artifacts storage by Ids.

Get Batch Artifacts storage by specific Ids.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.artifact_id_list import ArtifactIdList
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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    artifact_ids = openapi_client.ArtifactIdList() # ArtifactIdList | The list of artifactIds to get.

    try:
        # Get Batch Artifacts storage by Ids.
        api_response = api_instance.artifacts_batch_get_storage_by_id(subscription_id, resource_group_name, workspace_name, artifact_ids)
        print("The response of ArtifactApi->artifacts_batch_get_storage_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_batch_get_storage_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **artifact_ids** | [**ArtifactIdList**](ArtifactIdList.md)| The list of artifactIds to get. | 

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
**200** | The Batch Artifact&#39;s storage are returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_batch_ingest_from_sas**
> PaginatedArtifactList artifacts_batch_ingest_from_sas(subscription_id, resource_group_name, workspace_name, origin, container, artifact_container_sas)

Batch ingest using shared access signature.

Ingest Batch Artifacts using shared access signature.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.artifact_container_sas import ArtifactContainerSas
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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    artifact_container_sas = openapi_client.ArtifactContainerSas() # ArtifactContainerSas | The artifact container shared access signature to use for batch ingest.

    try:
        # Batch ingest using shared access signature.
        api_response = api_instance.artifacts_batch_ingest_from_sas(subscription_id, resource_group_name, workspace_name, origin, container, artifact_container_sas)
        print("The response of ArtifactApi->artifacts_batch_ingest_from_sas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_batch_ingest_from_sas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
 **artifact_container_sas** | [**ArtifactContainerSas**](ArtifactContainerSas.md)| The artifact container shared access signature to use for batch ingest. | 

### Return type

[**PaginatedArtifactList**](PaginatedArtifactList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Batch is ingested using shared access signature successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_create**
> Artifact artifacts_create(subscription_id, resource_group_name, workspace_name, artifact)

Create Artifact.

Create an Artifact.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    artifact = openapi_client.Artifact() # Artifact | The Artifact details.

    try:
        # Create Artifact.
        api_response = api_instance.artifacts_create(subscription_id, resource_group_name, workspace_name, artifact)
        print("The response of ArtifactApi->artifacts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **artifact** | [**Artifact**](Artifact.md)| The Artifact details. | 

### Return type

[**Artifact**](Artifact.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Artifact is created successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_delete_batch_meta_data**
> artifacts_delete_batch_meta_data(subscription_id, resource_group_name, workspace_name, origin, container, artifact_paths, hard_delete=hard_delete)

Delete Batch of Artifact Metadata.

Delete a Batch of Artifact Metadata.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.artifact_path_list import ArtifactPathList
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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    artifact_paths = openapi_client.ArtifactPathList() # ArtifactPathList | The list of Artifact paths to delete.
    hard_delete = False # bool | If set to true, the delete cannot be reverted at a later time. (optional) (default to False)

    try:
        # Delete Batch of Artifact Metadata.
        api_instance.artifacts_delete_batch_meta_data(subscription_id, resource_group_name, workspace_name, origin, container, artifact_paths, hard_delete=hard_delete)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_delete_batch_meta_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
 **artifact_paths** | [**ArtifactPathList**](ArtifactPathList.md)| The list of Artifact paths to delete. | 
 **hard_delete** | **bool**| If set to true, the delete cannot be reverted at a later time. | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The batch delete of Artifact metadata completed successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_delete_meta_data**
> artifacts_delete_meta_data(subscription_id, resource_group_name, workspace_name, origin, container, path=path, hard_delete=hard_delete)

Delete Artifact Metadata.

Delete an Artifact Metadata.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    path = 'path_example' # str | The Artifact Path. (optional)
    hard_delete = False # bool | If set to true. The delete cannot be revert at later time. (optional) (default to False)

    try:
        # Delete Artifact Metadata.
        api_instance.artifacts_delete_meta_data(subscription_id, resource_group_name, workspace_name, origin, container, path=path, hard_delete=hard_delete)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_delete_meta_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
 **path** | **str**| The Artifact Path. | [optional] 
 **hard_delete** | **bool**| If set to true. The delete cannot be revert at later time. | [optional] [default to False]

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
**200** | The Artifact metadata deleted successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_delete_meta_data_in_container**
> artifacts_delete_meta_data_in_container(subscription_id, resource_group_name, workspace_name, origin, container, hard_delete=hard_delete)

Delete Artifact Metadata.

Delete Artifact Metadata in a specific container.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    hard_delete = False # bool | If set to true. The delete cannot be revert at later time. (optional) (default to False)

    try:
        # Delete Artifact Metadata.
        api_instance.artifacts_delete_meta_data_in_container(subscription_id, resource_group_name, workspace_name, origin, container, hard_delete=hard_delete)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_delete_meta_data_in_container: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
 **hard_delete** | **bool**| If set to true. The delete cannot be revert at later time. | [optional] [default to False]

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
**200** | The Artifact metadata deleted successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_download**
> bytearray artifacts_download(subscription_id, resource_group_name, workspace_name, origin, container, path=path)

Get Artifact content by Id.

Get Artifact content of a specific Id.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    path = 'path_example' # str | The Artifact Path. (optional)

    try:
        # Get Artifact content by Id.
        api_response = api_instance.artifacts_download(subscription_id, resource_group_name, workspace_name, origin, container, path=path)
        print("The response of ArtifactApi->artifacts_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
 **path** | **str**| The Artifact Path. | [optional] 

### Return type

**bytearray**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File Response |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_get**
> Artifact artifacts_get(subscription_id, resource_group_name, workspace_name, origin, container, path)

Get Artifact metadata by Id.

Get Artifact metadata for a specific Id.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    path = 'path_example' # str | The Artifact Path.

    try:
        # Get Artifact metadata by Id.
        api_response = api_instance.artifacts_get(subscription_id, resource_group_name, workspace_name, origin, container, path)
        print("The response of ArtifactApi->artifacts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
 **path** | **str**| The Artifact Path. | 

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
**200** | The details of the Artifact are returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_get_content_information**
> ArtifactContentInformation artifacts_get_content_information(subscription_id, resource_group_name, workspace_name, origin, container, path=path)

Get Artifact content information.

Get content information of an Artifact.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    path = 'path_example' # str | The Artifact Path. (optional)

    try:
        # Get Artifact content information.
        api_response = api_instance.artifacts_get_content_information(subscription_id, resource_group_name, workspace_name, origin, container, path=path)
        print("The response of ArtifactApi->artifacts_get_content_information:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_get_content_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
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

# **artifacts_get_sas**
> ArtifactContentInformation artifacts_get_sas(subscription_id, resource_group_name, workspace_name, origin, container, path=path)

Get writable shared access signature for Artifact.

Get writable shared access signature for a specific Artifact.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    path = 'path_example' # str | The Artifact Path. (optional)

    try:
        # Get writable shared access signature for Artifact.
        api_response = api_instance.artifacts_get_sas(subscription_id, resource_group_name, workspace_name, origin, container, path=path)
        print("The response of ArtifactApi->artifacts_get_sas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_get_sas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
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
**200** | The Artifact writable shared access signature is returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_get_storage_content_information**
> ArtifactContentInformation artifacts_get_storage_content_information(subscription_id, resource_group_name, workspace_name, origin, container, path=path)

Get Artifact storage content information.

Get storage content information of an Artifact.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    path = 'path_example' # str | The Artifact Path. (optional)

    try:
        # Get Artifact storage content information.
        api_response = api_instance.artifacts_get_storage_content_information(subscription_id, resource_group_name, workspace_name, origin, container, path=path)
        print("The response of ArtifactApi->artifacts_get_storage_content_information:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_get_storage_content_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
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
**200** | The Artifact storage content information is returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_list_in_container**
> PaginatedArtifactList artifacts_list_in_container(subscription_id, resource_group_name, workspace_name, origin, container, path=path, continuation_token=continuation_token)

Get Artifacts metadata in a container or path.

Get Artifacts metadata in a specific container or path.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    path = 'path_example' # str | The Artifact Path. (optional)
    continuation_token = 'continuation_token_example' # str | The continuation token. (optional)

    try:
        # Get Artifacts metadata in a container or path.
        api_response = api_instance.artifacts_list_in_container(subscription_id, resource_group_name, workspace_name, origin, container, path=path, continuation_token=continuation_token)
        print("The response of ArtifactApi->artifacts_list_in_container:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_list_in_container: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
 **path** | **str**| The Artifact Path. | [optional] 
 **continuation_token** | **str**| The continuation token. | [optional] 

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
**200** | The details of the Artifacts are returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_list_sas_by_prefix**
> PaginatedArtifactContentInformationList artifacts_list_sas_by_prefix(subscription_id, resource_group_name, workspace_name, origin, container, path=path, continuation_token=continuation_token)

Get shared access signature for an Artifact

Get shared access signature for an Artifact in specific path.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    path = 'path_example' # str | The Artifact Path. (optional)
    continuation_token = 'continuation_token_example' # str | The continuation token. (optional)

    try:
        # Get shared access signature for an Artifact
        api_response = api_instance.artifacts_list_sas_by_prefix(subscription_id, resource_group_name, workspace_name, origin, container, path=path, continuation_token=continuation_token)
        print("The response of ArtifactApi->artifacts_list_sas_by_prefix:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_list_sas_by_prefix: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
 **path** | **str**| The Artifact Path. | [optional] 
 **continuation_token** | **str**| The continuation token. | [optional] 

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
**200** | The Artifact writable shared access signature is returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_list_storage_uri_by_prefix**
> PaginatedArtifactContentInformationList artifacts_list_storage_uri_by_prefix(subscription_id, resource_group_name, workspace_name, origin, container, path=path, continuation_token=continuation_token)

Get storage Uri for Artifacts in a path.

Get storage Uri for Artifacts in a specific path.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    path = 'path_example' # str | The Artifact Path. (optional)
    continuation_token = 'continuation_token_example' # str | The continuation token. (optional)

    try:
        # Get storage Uri for Artifacts in a path.
        api_response = api_instance.artifacts_list_storage_uri_by_prefix(subscription_id, resource_group_name, workspace_name, origin, container, path=path, continuation_token=continuation_token)
        print("The response of ArtifactApi->artifacts_list_storage_uri_by_prefix:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_list_storage_uri_by_prefix: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
 **path** | **str**| The Artifact Path. | [optional] 
 **continuation_token** | **str**| The continuation token. | [optional] 

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
**200** | The Artifact storage uri is returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_register**
> Artifact artifacts_register(subscription_id, resource_group_name, workspace_name, artifact)

Create an Artifact for an existing data location.

Create an Artifact for an existing dataPath.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    artifact = openapi_client.Artifact() # Artifact | The Artifact creation details.

    try:
        # Create an Artifact for an existing data location.
        api_response = api_instance.artifacts_register(subscription_id, resource_group_name, workspace_name, artifact)
        print("The response of ArtifactApi->artifacts_register:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_register: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **artifact** | [**Artifact**](Artifact.md)| The Artifact creation details. | 

### Return type

[**Artifact**](Artifact.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Artifact is created successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_upload**
> Artifact artifacts_upload(subscription_id, resource_group_name, workspace_name, origin, container, content, path=path, index=index, append=append, allow_overwrite=allow_overwrite)

Upload Artifact content.

Upload content to an Artifact.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    origin = 'origin_example' # str | The origin of the Artifact.
    container = 'container_example' # str | The container name.
    content = None # bytearray | The file upload.
    path = 'path_example' # str | The Artifact Path. (optional)
    index = 56 # int | The index. (optional)
    append = False # bool | Whether or not to append the content or replace it. (optional) (default to False)
    allow_overwrite = False # bool | whether to allow overwrite if Artifact Content exist already. when set to true, Overwrite happens if Artifact Content already exists (optional) (default to False)

    try:
        # Upload Artifact content.
        api_response = api_instance.artifacts_upload(subscription_id, resource_group_name, workspace_name, origin, container, content, path=path, index=index, append=append, allow_overwrite=allow_overwrite)
        print("The response of ArtifactApi->artifacts_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **origin** | **str**| The origin of the Artifact. | 
 **container** | **str**| The container name. | 
 **content** | **bytearray**| The file upload. | 
 **path** | **str**| The Artifact Path. | [optional] 
 **index** | **int**| The index. | [optional] 
 **append** | **bool**| Whether or not to append the content or replace it. | [optional] [default to False]
 **allow_overwrite** | **bool**| whether to allow overwrite if Artifact Content exist already. when set to true, Overwrite happens if Artifact Content already exists | [optional] [default to False]

### Return type

[**Artifact**](Artifact.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Artifact content is uploaded successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

