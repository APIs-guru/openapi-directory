# openapi_client.ModelApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**m_l_models_delete**](ModelApi.md#m_l_models_delete) | **DELETE** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/models/{id} | Delete the specified Model.
[**m_l_models_get_metrics**](ModelApi.md#m_l_models_get_metrics) | **GET** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/models/{id}/metrics | Retrieve the metrics for a Model.
[**m_l_models_list_query**](ModelApi.md#m_l_models_list_query) | **GET** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/models | Query the list of Models in a workspace.
[**m_l_models_patch**](ModelApi.md#m_l_models_patch) | **PATCH** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/models/{id} | Patch a specific model.
[**m_l_models_query_by_id**](ModelApi.md#m_l_models_query_by_id) | **GET** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/models/{id} | Gets a model.
[**m_l_models_register**](ModelApi.md#m_l_models_register) | **POST** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/models | Register a model.


# **m_l_models_delete**
> m_l_models_delete(subscription_id, resource_group, workspace, id)

Delete the specified Model.

Deletes a model if it exists.

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
    api_instance = openapi_client.ModelApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The model id.

    try:
        # Delete the specified Model.
        api_instance.m_l_models_delete(subscription_id, resource_group, workspace, id)
    except Exception as e:
        print("Exception when calling ModelApi->m_l_models_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The model id. | 

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
**200** | The resource exists and was deleted successfully. |  -  |
**204** | The resource does not exist and the request was well formed. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **m_l_models_get_metrics**
> ModelOperationalState m_l_models_get_metrics(subscription_id, resource_group, workspace, id, start_date=start_date, end_date=end_date)

Retrieve the metrics for a Model.

The operational events collected for the Model are returned.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.model_operational_state import ModelOperationalState
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
    api_instance = openapi_client.ModelApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The Model Id.
    start_date = 'start_date_example' # str | The start date from which to retrieve metrics, ISO 8601 literal format. (optional)
    end_date = 'end_date_example' # str | The end date from which to retrieve metrics, ISO 8601 literal format. (optional)

    try:
        # Retrieve the metrics for a Model.
        api_response = api_instance.m_l_models_get_metrics(subscription_id, resource_group, workspace, id, start_date=start_date, end_date=end_date)
        print("The response of ModelApi->m_l_models_get_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->m_l_models_get_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The Model Id. | 
 **start_date** | **str**| The start date from which to retrieve metrics, ISO 8601 literal format. | [optional] 
 **end_date** | **str**| The end date from which to retrieve metrics, ISO 8601 literal format. | [optional] 

### Return type

[**ModelOperationalState**](ModelOperationalState.md)

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

# **m_l_models_list_query**
> PaginatedModelList m_l_models_list_query(subscription_id, resource_group, workspace, name=name, framework=framework, description=description, count=count, skip_token=skip_token, tags=tags, properties=properties, run_id=run_id, order_by=order_by)

Query the list of Models in a workspace.

The result list can be filtered using tag and name. If no filter is passed, the query lists all the Models in the given workspace. The returned list is paginated and the count of items in each page is an optional parameter.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.paginated_model_list import PaginatedModelList
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
    api_instance = openapi_client.ModelApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    name = 'name_example' # str | The object name. (optional)
    framework = 'framework_example' # str | The framework. (optional)
    description = 'description_example' # str | The object description. (optional)
    count = 56 # int | The number of items to retrieve in a page. (optional)
    skip_token = 'skip_token_example' # str | The continuation token to retrieve the next page. (optional)
    tags = 'tags_example' # str | A set of tags with which to filter the returned models.              It is a comma separated string of tags key or tags key=value              Example: tagKey1,tagKey2,tagKey3=value3 (optional)
    properties = 'properties_example' # str | A set of properties with which to filter the returned models.              It is a comma separated string of properties key and/or properties key=value              Example: propKey1,propKey2,propKey3=value3 (optional)
    run_id = 'run_id_example' # str | The runId which created the model. (optional)
    order_by = CreatedAtDesc # str | An option to specify how the models are ordered in the response. (optional) (default to CreatedAtDesc)

    try:
        # Query the list of Models in a workspace.
        api_response = api_instance.m_l_models_list_query(subscription_id, resource_group, workspace, name=name, framework=framework, description=description, count=count, skip_token=skip_token, tags=tags, properties=properties, run_id=run_id, order_by=order_by)
        print("The response of ModelApi->m_l_models_list_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->m_l_models_list_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **name** | **str**| The object name. | [optional] 
 **framework** | **str**| The framework. | [optional] 
 **description** | **str**| The object description. | [optional] 
 **count** | **int**| The number of items to retrieve in a page. | [optional] 
 **skip_token** | **str**| The continuation token to retrieve the next page. | [optional] 
 **tags** | **str**| A set of tags with which to filter the returned models.              It is a comma separated string of tags key or tags key&#x3D;value              Example: tagKey1,tagKey2,tagKey3&#x3D;value3 | [optional] 
 **properties** | **str**| A set of properties with which to filter the returned models.              It is a comma separated string of properties key and/or properties key&#x3D;value              Example: propKey1,propKey2,propKey3&#x3D;value3 | [optional] 
 **run_id** | **str**| The runId which created the model. | [optional] 
 **order_by** | **str**| An option to specify how the models are ordered in the response. | [optional] [default to CreatedAtDesc]

### Return type

[**PaginatedModelList**](PaginatedModelList.md)

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

# **m_l_models_patch**
> Model m_l_models_patch(subscription_id, resource_group, workspace, id, patch)

Patch a specific model.

Updates an existing model with the specified patch.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.json_patch_operation import JsonPatchOperation
from openapi_client.models.model import Model
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
    api_instance = openapi_client.ModelApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The model id.
    patch = [openapi_client.JsonPatchOperation()] # List[JsonPatchOperation] | The payload that is used to patch the model.

    try:
        # Patch a specific model.
        api_response = api_instance.m_l_models_patch(subscription_id, resource_group, workspace, id, patch)
        print("The response of ModelApi->m_l_models_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->m_l_models_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The model id. | 
 **patch** | [**List[JsonPatchOperation]**](JsonPatchOperation.md)| The payload that is used to patch the model. | 

### Return type

[**Model**](Model.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **m_l_models_query_by_id**
> Model m_l_models_query_by_id(subscription_id, resource_group, workspace, id)

Gets a model.

Gets a model by model id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.model import Model
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
    api_instance = openapi_client.ModelApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The model id.

    try:
        # Gets a model.
        api_response = api_instance.m_l_models_query_by_id(subscription_id, resource_group, workspace, id)
        print("The response of ModelApi->m_l_models_query_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->m_l_models_query_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The model id. | 

### Return type

[**Model**](Model.md)

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

# **m_l_models_register**
> Model m_l_models_register(subscription_id, resource_group, workspace, model)

Register a model.

Register the model provided.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.model import Model
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
    api_instance = openapi_client.ModelApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    model = openapi_client.Model() # Model | The payload that is used to register the model.

    try:
        # Register a model.
        api_response = api_instance.m_l_models_register(subscription_id, resource_group, workspace, model)
        print("The response of ModelApi->m_l_models_register:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->m_l_models_register: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **model** | [**Model**](Model.md)| The payload that is used to register the model. | 

### Return type

[**Model**](Model.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The model registration was successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

