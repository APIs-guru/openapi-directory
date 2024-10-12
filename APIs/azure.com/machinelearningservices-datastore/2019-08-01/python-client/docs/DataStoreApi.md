# openapi_client.DataStoreApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](DataStoreApi.md#create) | **POST** /datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores | Create or update a Datastore.
[**delete**](DataStoreApi.md#delete) | **DELETE** /datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores/{name} | Delete a Datastore.
[**delete_all**](DataStoreApi.md#delete_all) | **DELETE** /datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores | Delete all Datastores.
[**get**](DataStoreApi.md#get) | **GET** /datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores/{name} | Get Datastore details.
[**list**](DataStoreApi.md#list) | **GET** /datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores | Get Datastores list.
[**update**](DataStoreApi.md#update) | **PUT** /datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores/{name} | Update or create a Datastore.


# **create**
> create(subscription_id, resource_group_name, workspace_name, create_if_not_exists=create_if_not_exists, skip_validation=skip_validation, dto=dto)

Create or update a Datastore.

Create or update a Datastore in the given workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_store import DataStore
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
    api_instance = openapi_client.DataStoreApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    create_if_not_exists = False # bool | If set to true, the call will create an Datastore if it doesn't exist. (optional) (default to False)
    skip_validation = False # bool | If set to true, the call will skip Datastore validation. (optional) (default to False)
    dto = openapi_client.DataStore() # DataStore | The Datastore details. (optional)

    try:
        # Create or update a Datastore.
        api_instance.create(subscription_id, resource_group_name, workspace_name, create_if_not_exists=create_if_not_exists, skip_validation=skip_validation, dto=dto)
    except Exception as e:
        print("Exception when calling DataStoreApi->create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **create_if_not_exists** | **bool**| If set to true, the call will create an Datastore if it doesn&#39;t exist. | [optional] [default to False]
 **skip_validation** | **bool**| If set to true, the call will skip Datastore validation. | [optional] [default to False]
 **dto** | [**DataStore**](DataStore.md)| The Datastore details. | [optional] 

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
**200** | The Datastore is created/updated successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete**
> delete(subscription_id, resource_group_name, workspace_name, name)

Delete a Datastore.

Delete a Datastore with a specific name.

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
    api_instance = openapi_client.DataStoreApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    name = 'name_example' # str | The Datastore name.

    try:
        # Delete a Datastore.
        api_instance.delete(subscription_id, resource_group_name, workspace_name, name)
    except Exception as e:
        print("Exception when calling DataStoreApi->delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **name** | **str**| The Datastore name. | 

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
**200** | The Datastore is deleted successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_all**
> delete_all(subscription_id, resource_group_name, workspace_name)

Delete all Datastores.

Delete all Datastores in the workspace.

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
    api_instance = openapi_client.DataStoreApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.

    try:
        # Delete all Datastores.
        api_instance.delete_all(subscription_id, resource_group_name, workspace_name)
    except Exception as e:
        print("Exception when calling DataStoreApi->delete_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 

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
**200** | All the Datastores in the workspace are deleted successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get**
> DataStore get(subscription_id, resource_group_name, workspace_name, name)

Get Datastore details.

Get details of a Datastore with a specific name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_store import DataStore
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
    api_instance = openapi_client.DataStoreApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    name = 'name_example' # str | The Datastore name.

    try:
        # Get Datastore details.
        api_response = api_instance.get(subscription_id, resource_group_name, workspace_name, name)
        print("The response of DataStoreApi->get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataStoreApi->get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **name** | **str**| The Datastore name. | 

### Return type

[**DataStore**](DataStore.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Datastore details are returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
> PaginatedDataStoreList list(subscription_id, resource_group_name, workspace_name, data_store_names=data_store_names, continuation_token=continuation_token, count=count, include_secret=include_secret)

Get Datastores list.

Get the list of Datastores attached to the workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.paginated_data_store_list import PaginatedDataStoreList
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
    api_instance = openapi_client.DataStoreApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    data_store_names = ['data_store_names_example'] # List[str] | List of Datastore names. (optional)
    continuation_token = 'continuation_token_example' # str | The Continuation Token. (optional)
    count = 30 # int | Count of Datastores to be returned. (optional) (default to 30)
    include_secret = True # bool | Whether to include the datastore secret in the response. (optional) (default to True)

    try:
        # Get Datastores list.
        api_response = api_instance.list(subscription_id, resource_group_name, workspace_name, data_store_names=data_store_names, continuation_token=continuation_token, count=count, include_secret=include_secret)
        print("The response of DataStoreApi->list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataStoreApi->list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **data_store_names** | [**List[str]**](str.md)| List of Datastore names. | [optional] 
 **continuation_token** | **str**| The Continuation Token. | [optional] 
 **count** | **int**| Count of Datastores to be returned. | [optional] [default to 30]
 **include_secret** | **bool**| Whether to include the datastore secret in the response. | [optional] [default to True]

### Return type

[**PaginatedDataStoreList**](PaginatedDataStoreList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of Datastores are returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update**
> update(subscription_id, resource_group_name, workspace_name, name, create_if_not_exists=create_if_not_exists, skip_validation=skip_validation, dto=dto)

Update or create a Datastore.

Update or create a Datastore in the given workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_store import DataStore
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
    api_instance = openapi_client.DataStoreApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    name = 'name_example' # str | The Datastore name.
    create_if_not_exists = False # bool | If set to true, the call will create an Datastore if it doesn't exist. (optional) (default to False)
    skip_validation = False # bool | If set to true, the call will skip Datastore validation. (optional) (default to False)
    dto = openapi_client.DataStore() # DataStore | The Datastore details. (optional)

    try:
        # Update or create a Datastore.
        api_instance.update(subscription_id, resource_group_name, workspace_name, name, create_if_not_exists=create_if_not_exists, skip_validation=skip_validation, dto=dto)
    except Exception as e:
        print("Exception when calling DataStoreApi->update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **name** | **str**| The Datastore name. | 
 **create_if_not_exists** | **bool**| If set to true, the call will create an Datastore if it doesn&#39;t exist. | [optional] [default to False]
 **skip_validation** | **bool**| If set to true, the call will skip Datastore validation. | [optional] [default to False]
 **dto** | [**DataStore**](DataStore.md)| The Datastore details. | [optional] 

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
**200** | The Datastore is created/updated successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

