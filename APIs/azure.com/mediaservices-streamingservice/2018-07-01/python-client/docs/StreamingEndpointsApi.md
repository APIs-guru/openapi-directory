# openapi_client.StreamingEndpointsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**streaming_endpoints_create**](StreamingEndpointsApi.md#streaming_endpoints_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName} | Create StreamingEndpoint
[**streaming_endpoints_delete**](StreamingEndpointsApi.md#streaming_endpoints_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName} | Delete StreamingEndpoint
[**streaming_endpoints_get**](StreamingEndpointsApi.md#streaming_endpoints_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName} | Get StreamingEndpoint
[**streaming_endpoints_list**](StreamingEndpointsApi.md#streaming_endpoints_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints | List StreamingEndpoints
[**streaming_endpoints_scale**](StreamingEndpointsApi.md#streaming_endpoints_scale) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName}/scale | Scale StreamingEndpoint
[**streaming_endpoints_start**](StreamingEndpointsApi.md#streaming_endpoints_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName}/start | Start StreamingEndpoint
[**streaming_endpoints_stop**](StreamingEndpointsApi.md#streaming_endpoints_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName}/stop | Stop StreamingEndpoint


# **streaming_endpoints_create**
> StreamingEndpoint streaming_endpoints_create(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version, parameters, auto_start=auto_start)

Create StreamingEndpoint

Creates a StreamingEndpoint.

### Example


```python
import openapi_client
from openapi_client.models.streaming_endpoint import StreamingEndpoint
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
    api_instance = openapi_client.StreamingEndpointsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_endpoint_name = 'streaming_endpoint_name_example' # str | The name of the StreamingEndpoint.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.StreamingEndpoint() # StreamingEndpoint | StreamingEndpoint properties needed for creation.
    auto_start = True # bool | The flag indicates if the resource should be automatically started on creation. (optional)

    try:
        # Create StreamingEndpoint
        api_response = api_instance.streaming_endpoints_create(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version, parameters, auto_start=auto_start)
        print("The response of StreamingEndpointsApi->streaming_endpoints_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamingEndpointsApi->streaming_endpoints_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_endpoint_name** | **str**| The name of the StreamingEndpoint. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**StreamingEndpoint**](StreamingEndpoint.md)| StreamingEndpoint properties needed for creation. | 
 **auto_start** | **bool**| The flag indicates if the resource should be automatically started on creation. | [optional] 

### Return type

[**StreamingEndpoint**](StreamingEndpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. See https://go.microsoft.com/fwlink/?linkid&#x3D;2087017 for details on the monitoring asynchronous Azure Operations. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_endpoints_delete**
> streaming_endpoints_delete(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version)

Delete StreamingEndpoint

Deletes a StreamingEndpoint.

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
    api_instance = openapi_client.StreamingEndpointsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_endpoint_name = 'streaming_endpoint_name_example' # str | The name of the StreamingEndpoint.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Delete StreamingEndpoint
        api_instance.streaming_endpoints_delete(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version)
    except Exception as e:
        print("Exception when calling StreamingEndpointsApi->streaming_endpoints_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_endpoint_name** | **str**| The name of the StreamingEndpoint. | 
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
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. See https://go.microsoft.com/fwlink/?linkid&#x3D;2087017 for details on the monitoring asynchronous Azure Operations. |  -  |
**204** | No content. The request has been accepted but the Streaming Endpoint was not found. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_endpoints_get**
> StreamingEndpoint streaming_endpoints_get(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version)

Get StreamingEndpoint

Gets a StreamingEndpoint.

### Example


```python
import openapi_client
from openapi_client.models.streaming_endpoint import StreamingEndpoint
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
    api_instance = openapi_client.StreamingEndpointsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_endpoint_name = 'streaming_endpoint_name_example' # str | The name of the StreamingEndpoint.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get StreamingEndpoint
        api_response = api_instance.streaming_endpoints_get(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version)
        print("The response of StreamingEndpointsApi->streaming_endpoints_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamingEndpointsApi->streaming_endpoints_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_endpoint_name** | **str**| The name of the StreamingEndpoint. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**StreamingEndpoint**](StreamingEndpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**404** | NotFound |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_endpoints_list**
> StreamingEndpointListResult streaming_endpoints_list(subscription_id, resource_group_name, account_name, api_version)

List StreamingEndpoints

Lists the StreamingEndpoints in the account.

### Example


```python
import openapi_client
from openapi_client.models.streaming_endpoint_list_result import StreamingEndpointListResult
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
    api_instance = openapi_client.StreamingEndpointsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # List StreamingEndpoints
        api_response = api_instance.streaming_endpoints_list(subscription_id, resource_group_name, account_name, api_version)
        print("The response of StreamingEndpointsApi->streaming_endpoints_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamingEndpointsApi->streaming_endpoints_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**StreamingEndpointListResult**](StreamingEndpointListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_endpoints_scale**
> streaming_endpoints_scale(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version, parameters)

Scale StreamingEndpoint

Scales an existing StreamingEndpoint.

### Example


```python
import openapi_client
from openapi_client.models.streaming_entity_scale_unit import StreamingEntityScaleUnit
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
    api_instance = openapi_client.StreamingEndpointsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_endpoint_name = 'streaming_endpoint_name_example' # str | The name of the StreamingEndpoint.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.StreamingEntityScaleUnit() # StreamingEntityScaleUnit | StreamingEndpoint scale parameters

    try:
        # Scale StreamingEndpoint
        api_instance.streaming_endpoints_scale(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling StreamingEndpointsApi->streaming_endpoints_scale: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_endpoint_name** | **str**| The name of the StreamingEndpoint. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**StreamingEntityScaleUnit**](StreamingEntityScaleUnit.md)| StreamingEndpoint scale parameters | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. See https://go.microsoft.com/fwlink/?linkid&#x3D;2087017 for details on the monitoring asynchronous Azure Operations. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_endpoints_start**
> streaming_endpoints_start(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version)

Start StreamingEndpoint

Starts an existing StreamingEndpoint.

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
    api_instance = openapi_client.StreamingEndpointsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_endpoint_name = 'streaming_endpoint_name_example' # str | The name of the StreamingEndpoint.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Start StreamingEndpoint
        api_instance.streaming_endpoints_start(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version)
    except Exception as e:
        print("Exception when calling StreamingEndpointsApi->streaming_endpoints_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_endpoint_name** | **str**| The name of the StreamingEndpoint. | 
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
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. See https://go.microsoft.com/fwlink/?linkid&#x3D;2087017 for details on the monitoring asynchronous Azure Operations. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_endpoints_stop**
> streaming_endpoints_stop(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version)

Stop StreamingEndpoint

Stops an existing StreamingEndpoint.

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
    api_instance = openapi_client.StreamingEndpointsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_endpoint_name = 'streaming_endpoint_name_example' # str | The name of the StreamingEndpoint.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Stop StreamingEndpoint
        api_instance.streaming_endpoints_stop(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version)
    except Exception as e:
        print("Exception when calling StreamingEndpointsApi->streaming_endpoints_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_endpoint_name** | **str**| The name of the StreamingEndpoint. | 
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
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. See https://go.microsoft.com/fwlink/?linkid&#x3D;2087017 for details on the monitoring asynchronous Azure Operations. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

