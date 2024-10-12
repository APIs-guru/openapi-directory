# openapi_client.DataStoreDefaultApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_default**](DataStoreDefaultApi.md#get_default) | **GET** /datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/default | Get the default Datastore.
[**set_default**](DataStoreDefaultApi.md#set_default) | **PUT** /datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/default/{name} | Set a default Datastore.


# **get_default**
> DataStore get_default(subscription_id, resource_group_name, workspace_name)

Get the default Datastore.

Get the default Datastore in the workspace.

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
    api_instance = openapi_client.DataStoreDefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.

    try:
        # Get the default Datastore.
        api_response = api_instance.get_default(subscription_id, resource_group_name, workspace_name)
        print("The response of DataStoreDefaultApi->get_default:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataStoreDefaultApi->get_default: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 

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
**200** | The default Datastore is returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_default**
> set_default(subscription_id, resource_group_name, workspace_name, name)

Set a default Datastore.

Set a default Datastore in the workspace.

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
    api_instance = openapi_client.DataStoreDefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    name = 'name_example' # str | The Datastore name.

    try:
        # Set a default Datastore.
        api_instance.set_default(subscription_id, resource_group_name, workspace_name, name)
    except Exception as e:
        print("Exception when calling DataStoreDefaultApi->set_default: %s\n" % e)
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
**200** | The default Datastore is set successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

