# openapi_client.ServiceApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**services_create**](ServiceApi.md#services_create) | **POST** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services | Create a Service.
[**services_delete**](ServiceApi.md#services_delete) | **DELETE** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services/{id} | Delete a Service.
[**services_get_service_token**](ServiceApi.md#services_get_service_token) | **POST** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services/{id}/token | Generate Service Access Token.
[**services_list_query**](ServiceApi.md#services_list_query) | **GET** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services | Query the list of Services in a Workspace.
[**services_list_service_keys**](ServiceApi.md#services_list_service_keys) | **POST** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services/{id}/listkeys | Lists Service keys.
[**services_patch**](ServiceApi.md#services_patch) | **PATCH** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services/{id} | Patch a Service.
[**services_query_by_id**](ServiceApi.md#services_query_by_id) | **GET** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services/{id} | Get a Service.
[**services_regenerate_service_keys**](ServiceApi.md#services_regenerate_service_keys) | **POST** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services/{id}/regenerateKeys | Regenerate Service Keys.


# **services_create**
> services_create(subscription_id, resource_group, workspace, request)

Create a Service.

Create a Service with the specified payload.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_service_request import CreateServiceRequest
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    request = openapi_client.CreateServiceRequest() # CreateServiceRequest | The payload that is used to create the Service.

    try:
        # Create a Service.
        api_instance.services_create(subscription_id, resource_group, workspace, request)
    except Exception as e:
        print("Exception when calling ServiceApi->services_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **request** | [**CreateServiceRequest**](CreateServiceRequest.md)| The payload that is used to create the Service. | 

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
**202** | The request was accepted.  The header &#39;Operation-Location&#39; contains the async operation location URL.  Accessing this URL with a GET call will return the status of the background task. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_delete**
> services_delete(subscription_id, resource_group, workspace, id)

Delete a Service.

Delete a specific Service.

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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The Service Id.

    try:
        # Delete a Service.
        api_instance.services_delete(subscription_id, resource_group, workspace, id)
    except Exception as e:
        print("Exception when calling ServiceApi->services_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The Service Id. | 

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
**202** | Success |  -  |
**204** | The resource does not exist and the request was well formed. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_get_service_token**
> AuthToken services_get_service_token(subscription_id, resource_group, workspace, id)

Generate Service Access Token.

Gets access token that can be used for calling service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.auth_token import AuthToken
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The Service Id.

    try:
        # Generate Service Access Token.
        api_response = api_instance.services_get_service_token(subscription_id, resource_group, workspace, id)
        print("The response of ServiceApi->services_get_service_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->services_get_service_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The Service Id. | 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_query**
> PaginatedServiceList services_list_query(subscription_id, resource_group, workspace, image_id=image_id, image_name=image_name, model_id=model_id, model_name=model_name, name=name, count=count, compute_type=compute_type, skip_token=skip_token, tags=tags, properties=properties, expand=expand, orderby=orderby)

Query the list of Services in a Workspace.

If no filter is passed, the query lists all Services in the Workspace. The returned list is paginated and the count of item in each page is an optional parameter.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.paginated_service_list import PaginatedServiceList
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    image_id = 'image_id_example' # str | The Image Id. (optional)
    image_name = 'image_name_example' # str | The Image name. (optional)
    model_id = 'model_id_example' # str | The Model Id. (optional)
    model_name = 'model_name_example' # str | The Model name. (optional)
    name = 'name_example' # str | The object name. (optional)
    count = 56 # int | The number of items to retrieve in a page. (optional)
    compute_type = 'compute_type_example' # str | The compute environment type. (optional)
    skip_token = 'skip_token_example' # str | The continuation token to retrieve the next page. (optional)
    tags = 'tags_example' # str | A set of tags with which to filter the returned models.              It is a comma separated string of tags key or tags key=value              Example: tagKey1,tagKey2,tagKey3=value3 (optional)
    properties = 'properties_example' # str | A set of properties with which to filter the returned models.              It is a comma separated string of properties key and/or properties key=value              Example: propKey1,propKey2,propKey3=value3 (optional)
    expand = False # bool | Set to True to include Model details. (optional) (default to False)
    orderby = UpdatedAtDesc # str | The option to order the response. (optional) (default to UpdatedAtDesc)

    try:
        # Query the list of Services in a Workspace.
        api_response = api_instance.services_list_query(subscription_id, resource_group, workspace, image_id=image_id, image_name=image_name, model_id=model_id, model_name=model_name, name=name, count=count, compute_type=compute_type, skip_token=skip_token, tags=tags, properties=properties, expand=expand, orderby=orderby)
        print("The response of ServiceApi->services_list_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->services_list_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **image_id** | **str**| The Image Id. | [optional] 
 **image_name** | **str**| The Image name. | [optional] 
 **model_id** | **str**| The Model Id. | [optional] 
 **model_name** | **str**| The Model name. | [optional] 
 **name** | **str**| The object name. | [optional] 
 **count** | **int**| The number of items to retrieve in a page. | [optional] 
 **compute_type** | **str**| The compute environment type. | [optional] 
 **skip_token** | **str**| The continuation token to retrieve the next page. | [optional] 
 **tags** | **str**| A set of tags with which to filter the returned models.              It is a comma separated string of tags key or tags key&#x3D;value              Example: tagKey1,tagKey2,tagKey3&#x3D;value3 | [optional] 
 **properties** | **str**| A set of properties with which to filter the returned models.              It is a comma separated string of properties key and/or properties key&#x3D;value              Example: propKey1,propKey2,propKey3&#x3D;value3 | [optional] 
 **expand** | **bool**| Set to True to include Model details. | [optional] [default to False]
 **orderby** | **str**| The option to order the response. | [optional] [default to UpdatedAtDesc]

### Return type

[**PaginatedServiceList**](PaginatedServiceList.md)

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

# **services_list_service_keys**
> AuthKeys services_list_service_keys(subscription_id, resource_group, workspace, id)

Lists Service keys.

Gets a list of Service keys.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.auth_keys import AuthKeys
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The Service Id.

    try:
        # Lists Service keys.
        api_response = api_instance.services_list_service_keys(subscription_id, resource_group, workspace, id)
        print("The response of ServiceApi->services_list_service_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->services_list_service_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The Service Id. | 

### Return type

[**AuthKeys**](AuthKeys.md)

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

# **services_patch**
> services_patch(subscription_id, resource_group, workspace, id, patch)

Patch a Service.

Patch a specific Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The Service Id.
    patch = [openapi_client.JsonPatchOperation()] # List[JsonPatchOperation] | The payload that is used to patch the Service.

    try:
        # Patch a Service.
        api_instance.services_patch(subscription_id, resource_group, workspace, id, patch)
    except Exception as e:
        print("Exception when calling ServiceApi->services_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The Service Id. | 
 **patch** | [**List[JsonPatchOperation]**](JsonPatchOperation.md)| The payload that is used to patch the Service. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**202** | The request was accepted.  The header &#39;Operation-Location&#39; contains the async operation location URL.  Accessing this URL with a GET call will return the status of the background task. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_query_by_id**
> ServiceResponseBase services_query_by_id(subscription_id, resource_group, workspace, id, expand=expand)

Get a Service.

Get a Service by Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_response_base import ServiceResponseBase
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The Service Id.
    expand = False # bool | Set to True to include Model details. (optional) (default to False)

    try:
        # Get a Service.
        api_response = api_instance.services_query_by_id(subscription_id, resource_group, workspace, id, expand=expand)
        print("The response of ServiceApi->services_query_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->services_query_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The Service Id. | 
 **expand** | **bool**| Set to True to include Model details. | [optional] [default to False]

### Return type

[**ServiceResponseBase**](ServiceResponseBase.md)

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

# **services_regenerate_service_keys**
> AuthKeys services_regenerate_service_keys(subscription_id, resource_group, workspace, id, request)

Regenerate Service Keys.

Regenerate and return the Service keys.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.auth_keys import AuthKeys
from openapi_client.models.regenerate_service_keys_request import RegenerateServiceKeysRequest
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    id = 'id_example' # str | The Service Id.
    request = openapi_client.RegenerateServiceKeysRequest() # RegenerateServiceKeysRequest | The payload that is used to regenerate keys.

    try:
        # Regenerate Service Keys.
        api_response = api_instance.services_regenerate_service_keys(subscription_id, resource_group, workspace, id, request)
        print("The response of ServiceApi->services_regenerate_service_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->services_regenerate_service_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **id** | **str**| The Service Id. | 
 **request** | [**RegenerateServiceKeysRequest**](RegenerateServiceKeysRequest.md)| The payload that is used to regenerate keys. | 

### Return type

[**AuthKeys**](AuthKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**202** | The request was accepted. The header &#39;Operation-Location&#39; contains the async operation location URL.  Accessing this URL with a GET call will return the status of the background task. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

