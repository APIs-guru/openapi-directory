# openapi_client.OperationalizationClustersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**machine_learning_compute_create_or_update**](OperationalizationClustersApi.md#machine_learning_compute_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName} | 
[**machine_learning_compute_delete**](OperationalizationClustersApi.md#machine_learning_compute_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName} | 
[**machine_learning_compute_get**](OperationalizationClustersApi.md#machine_learning_compute_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName} | 
[**machine_learning_compute_list_by_workspace**](OperationalizationClustersApi.md#machine_learning_compute_list_by_workspace) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes | 
[**machine_learning_compute_list_keys**](OperationalizationClustersApi.md#machine_learning_compute_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/listKeys | 
[**machine_learning_compute_system_update**](OperationalizationClustersApi.md#machine_learning_compute_system_update) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName} | 


# **machine_learning_compute_create_or_update**
> ComputeResource machine_learning_compute_create_or_update(subscription_id, resource_group_name, workspace_name, compute_name, api_version, parameters)



Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.compute_resource import ComputeResource
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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.
    compute_name = 'compute_name_example' # str | Name of the Azure Machine Learning compute.
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.
    parameters = openapi_client.ComputeResource() # ComputeResource | Payload with Machine Learning compute definition.

    try:
        api_response = api_instance.machine_learning_compute_create_or_update(subscription_id, resource_group_name, workspace_name, compute_name, api_version, parameters)
        print("The response of OperationalizationClustersApi->machine_learning_compute_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->machine_learning_compute_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 
 **compute_name** | **str**| Name of the Azure Machine Learning compute. | 
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 
 **parameters** | [**ComputeResource**](ComputeResource.md)| Payload with Machine Learning compute definition. | 

### Return type

[**ComputeResource**](ComputeResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Compute creation or update initiated. |  -  |
**201** | Compute creation or update initiated. |  * Azure-AsyncOperation - URI to poll for asynchronous operation status. <br>  |
**0** | Error response describing why the request failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machine_learning_compute_delete**
> machine_learning_compute_delete(subscription_id, resource_group_name, workspace_name, compute_name, api_version)



Deletes specified Machine Learning compute.

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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.
    compute_name = 'compute_name_example' # str | Name of the Azure Machine Learning compute.
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.

    try:
        api_instance.machine_learning_compute_delete(subscription_id, resource_group_name, workspace_name, compute_name, api_version)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->machine_learning_compute_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 
 **compute_name** | **str**| Name of the Azure Machine Learning compute. | 
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 

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
**202** | Compute deletion initiated. |  * Azure-AsyncOperation - URI to poll for asynchronous operation status. <br>  * Location - URI to poll for asynchronous operation result. <br>  |
**0** | Error response describing why the request failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machine_learning_compute_get**
> ComputeResource machine_learning_compute_get(subscription_id, resource_group_name, workspace_name, compute_name, api_version)



Gets compute definition by its name. Any secrets (storage keys, service credentials, etc) are not returned - use 'keys' nested resource to get them.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.compute_resource import ComputeResource
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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.
    compute_name = 'compute_name_example' # str | Name of the Azure Machine Learning compute.
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.

    try:
        api_response = api_instance.machine_learning_compute_get(subscription_id, resource_group_name, workspace_name, compute_name, api_version)
        print("The response of OperationalizationClustersApi->machine_learning_compute_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->machine_learning_compute_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 
 **compute_name** | **str**| Name of the Azure Machine Learning compute. | 
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 

### Return type

[**ComputeResource**](ComputeResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**0** | Error response describing why the request failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machine_learning_compute_list_by_workspace**
> PaginatedComputeResourcesList machine_learning_compute_list_by_workspace(subscription_id, resource_group_name, workspace_name, api_version, skiptoken=skiptoken)



Gets computes in specified workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.paginated_compute_resources_list import PaginatedComputeResourcesList
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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.
    skiptoken = 'skiptoken_example' # str | Continuation token for pagination. (optional)

    try:
        api_response = api_instance.machine_learning_compute_list_by_workspace(subscription_id, resource_group_name, workspace_name, api_version, skiptoken=skiptoken)
        print("The response of OperationalizationClustersApi->machine_learning_compute_list_by_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->machine_learning_compute_list_by_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 
 **skiptoken** | **str**| Continuation token for pagination. | [optional] 

### Return type

[**PaginatedComputeResourcesList**](PaginatedComputeResourcesList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response includes a paginated array of Machine Learning computes and a URI to the next set of results, if any. For the more information the limits of the number of items in a resource group, see https://azure.microsoft.com/en-us/documentation/articles/azure-subscription-service-limits/. |  -  |
**0** | Error response describing why the request failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machine_learning_compute_list_keys**
> ComputeSecrets machine_learning_compute_list_keys(subscription_id, resource_group_name, workspace_name, compute_name, api_version)



Gets secrets related to Machine Learning compute (storage keys, service credentials, etc).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.compute_secrets import ComputeSecrets
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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.
    compute_name = 'compute_name_example' # str | Name of the Azure Machine Learning compute.
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.

    try:
        api_response = api_instance.machine_learning_compute_list_keys(subscription_id, resource_group_name, workspace_name, compute_name, api_version)
        print("The response of OperationalizationClustersApi->machine_learning_compute_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->machine_learning_compute_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 
 **compute_name** | **str**| Name of the Azure Machine Learning compute. | 
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 

### Return type

[**ComputeSecrets**](ComputeSecrets.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machine_learning_compute_system_update**
> machine_learning_compute_system_update(subscription_id, resource_group_name, workspace_name, compute_name, api_version)



System Update On Machine Learning compute.

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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.
    compute_name = 'compute_name_example' # str | Name of the Azure Machine Learning compute.
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.

    try:
        api_instance.machine_learning_compute_system_update(subscription_id, resource_group_name, workspace_name, compute_name, api_version)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->machine_learning_compute_system_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 
 **compute_name** | **str**| Name of the Azure Machine Learning compute. | 
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 

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
**200** | Compute System updated. |  -  |
**202** | Compute System Update initiated. |  * Azure-AsyncOperation - URI to poll for asynchronous operation status. <br>  * Location - URI to poll for asynchronous operation result. <br>  |
**0** | Error response describing why the request failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

