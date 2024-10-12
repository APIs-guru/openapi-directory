# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**media_graphs_create_or_update**](DefaultApi.md#media_graphs_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/mediaGraphs/{mediaGraphName} | Create or update a Media Graph
[**media_graphs_delete**](DefaultApi.md#media_graphs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/mediaGraphs/{mediaGraphName} | Delete a Media Graph
[**media_graphs_get**](DefaultApi.md#media_graphs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/mediaGraphs/{mediaGraphName} | Get a Media Graph
[**media_graphs_list**](DefaultApi.md#media_graphs_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/mediaGraphs | List Media Graphs
[**media_graphs_start**](DefaultApi.md#media_graphs_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/mediaGraphs/{mediaGraphName}/start | Start a Media Graph
[**media_graphs_stop**](DefaultApi.md#media_graphs_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/mediaGraphs/{mediaGraphName}/stop | Stop a Media Graph
[**operation_results_get**](DefaultApi.md#operation_results_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/mediaGraphs/{mediaGraphName}/operationResults/{operationId} | Get the operation result
[**operations_status_get**](DefaultApi.md#operations_status_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/mediaGraphs/{mediaGraphName}/operationsStatus/{operationId} | Get the operation status


# **media_graphs_create_or_update**
> MediaGraph media_graphs_create_or_update(subscription_id, resource_group_name, account_name, media_graph_name, api_version, parameters)

Create or update a Media Graph

Create or update a Media Graph in the Media Services account

### Example


```python
import openapi_client
from openapi_client.models.media_graph import MediaGraph
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    media_graph_name = 'media_graph_name_example' # str | The Media Graph name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.MediaGraph() # MediaGraph | The request parameters

    try:
        # Create or update a Media Graph
        api_response = api_instance.media_graphs_create_or_update(subscription_id, resource_group_name, account_name, media_graph_name, api_version, parameters)
        print("The response of DefaultApi->media_graphs_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->media_graphs_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **media_graph_name** | **str**| The Media Graph name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**MediaGraph**](MediaGraph.md)| The request parameters | 

### Return type

[**MediaGraph**](MediaGraph.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_graphs_delete**
> media_graphs_delete(subscription_id, resource_group_name, account_name, media_graph_name, api_version)

Delete a Media Graph

Deletes a Media Graph in the Media Services account

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    media_graph_name = 'media_graph_name_example' # str | The Media Graph name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Delete a Media Graph
        api_instance.media_graphs_delete(subscription_id, resource_group_name, account_name, media_graph_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->media_graphs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **media_graph_name** | **str**| The Media Graph name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | NoContent |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_graphs_get**
> MediaGraph media_graphs_get(subscription_id, resource_group_name, account_name, media_graph_name, api_version)

Get a Media Graph

Get the details of a Media Graph in the Media Services account

### Example


```python
import openapi_client
from openapi_client.models.media_graph import MediaGraph
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    media_graph_name = 'media_graph_name_example' # str | The Media Graph name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get a Media Graph
        api_response = api_instance.media_graphs_get(subscription_id, resource_group_name, account_name, media_graph_name, api_version)
        print("The response of DefaultApi->media_graphs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->media_graphs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **media_graph_name** | **str**| The Media Graph name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**MediaGraph**](MediaGraph.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NotFound |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_graphs_list**
> MediaGraphCollection media_graphs_list(subscription_id, resource_group_name, account_name, api_version, top=top)

List Media Graphs

Lists Media Graphs in the Media Services account

### Example


```python
import openapi_client
from openapi_client.models.media_graph_collection import MediaGraphCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    top = 56 # int | Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. (optional)

    try:
        # List Media Graphs
        api_response = api_instance.media_graphs_list(subscription_id, resource_group_name, account_name, api_version, top=top)
        print("The response of DefaultApi->media_graphs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->media_graphs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **top** | **int**| Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. | [optional] 

### Return type

[**MediaGraphCollection**](MediaGraphCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_graphs_start**
> media_graphs_start(subscription_id, resource_group_name, account_name, media_graph_name, api_version)

Start a Media Graph

Start a Media Graph in the Media Services account

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    media_graph_name = 'media_graph_name_example' # str | The Media Graph name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Start a Media Graph
        api_instance.media_graphs_start(subscription_id, resource_group_name, account_name, media_graph_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->media_graphs_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **media_graph_name** | **str**| The Media Graph name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_graphs_stop**
> media_graphs_stop(subscription_id, resource_group_name, account_name, media_graph_name, api_version)

Stop a Media Graph

Stop a Media Graph in the Media Services account

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    media_graph_name = 'media_graph_name_example' # str | The Media Graph name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Stop a Media Graph
        api_instance.media_graphs_stop(subscription_id, resource_group_name, account_name, media_graph_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->media_graphs_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **media_graph_name** | **str**| The Media Graph name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operation_results_get**
> object operation_results_get(subscription_id, resource_group_name, account_name, media_graph_name, operation_id, api_version)

Get the operation result

Get the operation result of a Media Graph in the Media Services account

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    media_graph_name = 'media_graph_name_example' # str | The Media Graph name.
    operation_id = 'operation_id_example' # str | The operation ID
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get the operation result
        api_response = api_instance.operation_results_get(subscription_id, resource_group_name, account_name, media_graph_name, operation_id, api_version)
        print("The response of DefaultApi->operation_results_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->operation_results_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **media_graph_name** | **str**| The Media Graph name. | 
 **operation_id** | **str**| The operation ID | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operations_status_get**
> MediaGraphOperationStatus operations_status_get(subscription_id, resource_group_name, account_name, media_graph_name, operation_id, api_version)

Get the operation status

Get the operation status of a Media Graph in the media services account

### Example


```python
import openapi_client
from openapi_client.models.media_graph_operation_status import MediaGraphOperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    media_graph_name = 'media_graph_name_example' # str | The Media Graph name.
    operation_id = 'operation_id_example' # str | The operation ID
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get the operation status
        api_response = api_instance.operations_status_get(subscription_id, resource_group_name, account_name, media_graph_name, operation_id, api_version)
        print("The response of DefaultApi->operations_status_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->operations_status_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **media_graph_name** | **str**| The Media Graph name. | 
 **operation_id** | **str**| The operation ID | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**MediaGraphOperationStatus**](MediaGraphOperationStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

