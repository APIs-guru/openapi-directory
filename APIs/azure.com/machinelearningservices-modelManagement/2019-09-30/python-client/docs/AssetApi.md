# openapi_client.AssetApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_create**](AssetApi.md#assets_create) | **POST** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/assets | Create an Asset.
[**assets_delete**](AssetApi.md#assets_delete) | **DELETE** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/assets/{id} | Delete an Asset.
[**assets_list_query**](AssetApi.md#assets_list_query) | **GET** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/assets | Query the list of Assets in a workspace.
[**assets_patch**](AssetApi.md#assets_patch) | **PATCH** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/assets/{id} | Update an Asset.
[**assets_query_by_id**](AssetApi.md#assets_query_by_id) | **GET** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/assets/{id} | Get an Asset.


# **assets_create**
> Asset assets_create(subscription_id, resource_group, workspace, asset=asset)

Create an Asset.

Create an Asset from the provided payload.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.asset import Asset
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
    api_instance = openapi_client.AssetApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    asset = openapi_client.Asset() # Asset | The Asset to be created. (optional)

    try:
        # Create an Asset.
        api_response = api_instance.assets_create(subscription_id, resource_group, workspace, asset=asset)
        print("The response of AssetApi->assets_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->assets_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **asset** | [**Asset**](Asset.md)| The Asset to be created. | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assets_delete**
> assets_delete(subscription_id, resource_group, workspace, id)

Delete an Asset.

Delete the specified Asset.

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
    api_instance = openapi_client.AssetApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The Id of the Asset to delete.

    try:
        # Delete an Asset.
        api_instance.assets_delete(subscription_id, resource_group, workspace, id)
    except Exception as e:
        print("Exception when calling AssetApi->assets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The Id of the Asset to delete. | 

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

# **assets_list_query**
> PaginatedAssetList assets_list_query(subscription_id, resource_group, workspace, run_id=run_id, name=name, count=count, skip_token=skip_token, tags=tags, properties=properties, orderby=orderby)

Query the list of Assets in a workspace.

If no filter is passed, the query lists all the Assets in the given workspace. The returned list is paginated and the count of items in each page is an optional parameter.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.paginated_asset_list import PaginatedAssetList
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
    api_instance = openapi_client.AssetApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    run_id = 'run_id_example' # str | The run Id associated with the Assets. (optional)
    name = 'name_example' # str | The object name. (optional)
    count = 56 # int | The number of items to retrieve in a page. (optional)
    skip_token = 'skip_token_example' # str | The continuation token to retrieve the next page. (optional)
    tags = 'tags_example' # str | A set of tags with which to filter the returned models.              It is a comma separated string of tags key or tags key=value              Example: tagKey1,tagKey2,tagKey3=value3 (optional)
    properties = 'properties_example' # str | A set of properties with which to filter the returned models.              It is a comma separated string of properties key and/or properties key=value              Example: propKey1,propKey2,propKey3=value3 (optional)
    orderby = CreatedAtDesc # str | An option for specifying how to order the list. (optional) (default to CreatedAtDesc)

    try:
        # Query the list of Assets in a workspace.
        api_response = api_instance.assets_list_query(subscription_id, resource_group, workspace, run_id=run_id, name=name, count=count, skip_token=skip_token, tags=tags, properties=properties, orderby=orderby)
        print("The response of AssetApi->assets_list_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->assets_list_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **run_id** | **str**| The run Id associated with the Assets. | [optional] 
 **name** | **str**| The object name. | [optional] 
 **count** | **int**| The number of items to retrieve in a page. | [optional] 
 **skip_token** | **str**| The continuation token to retrieve the next page. | [optional] 
 **tags** | **str**| A set of tags with which to filter the returned models.              It is a comma separated string of tags key or tags key&#x3D;value              Example: tagKey1,tagKey2,tagKey3&#x3D;value3 | [optional] 
 **properties** | **str**| A set of properties with which to filter the returned models.              It is a comma separated string of properties key and/or properties key&#x3D;value              Example: propKey1,propKey2,propKey3&#x3D;value3 | [optional] 
 **orderby** | **str**| An option for specifying how to order the list. | [optional] [default to CreatedAtDesc]

### Return type

[**PaginatedAssetList**](PaginatedAssetList.md)

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

# **assets_patch**
> Asset assets_patch(subscription_id, resource_group, workspace, id, patch)

Update an Asset.

Patch a specific Asset.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.asset import Asset
from openapi_client.models.json_patch_operation import JsonPatchOperation
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
    api_instance = openapi_client.AssetApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The Id of the Asset to patch.
    patch = [openapi_client.JsonPatchOperation()] # List[JsonPatchOperation] | The payload that is used to patch an Asset.

    try:
        # Update an Asset.
        api_response = api_instance.assets_patch(subscription_id, resource_group, workspace, id, patch)
        print("The response of AssetApi->assets_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->assets_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The Id of the Asset to patch. | 
 **patch** | [**List[JsonPatchOperation]**](JsonPatchOperation.md)| The payload that is used to patch an Asset. | 

### Return type

[**Asset**](Asset.md)

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

# **assets_query_by_id**
> Asset assets_query_by_id(subscription_id, resource_group, workspace, id)

Get an Asset.

Get an Asset by Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.asset import Asset
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
    api_instance = openapi_client.AssetApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The Asset Id.

    try:
        # Get an Asset.
        api_response = api_instance.assets_query_by_id(subscription_id, resource_group, workspace, id)
        print("The response of AssetApi->assets_query_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->assets_query_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The Asset Id. | 

### Return type

[**Asset**](Asset.md)

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

