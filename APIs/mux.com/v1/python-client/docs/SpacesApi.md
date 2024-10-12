# openapi_client.SpacesApi

All URIs are relative to *https://api.mux.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_space**](SpacesApi.md#create_space) | **POST** /video/v1/spaces | Create a space
[**create_space_broadcast**](SpacesApi.md#create_space_broadcast) | **POST** /video/v1/spaces/{SPACE_ID}/broadcasts | Create a space broadcast
[**delete_space**](SpacesApi.md#delete_space) | **DELETE** /video/v1/spaces/{SPACE_ID} | Delete a space
[**delete_space_broadcast**](SpacesApi.md#delete_space_broadcast) | **DELETE** /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID} | Delete a space broadcast
[**get_space**](SpacesApi.md#get_space) | **GET** /video/v1/spaces/{SPACE_ID} | Retrieve a space
[**get_space_broadcast**](SpacesApi.md#get_space_broadcast) | **GET** /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID} | Retrieve space broadcast
[**list_spaces**](SpacesApi.md#list_spaces) | **GET** /video/v1/spaces | List spaces
[**start_space_broadcast**](SpacesApi.md#start_space_broadcast) | **POST** /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}/start | Start a space broadcast
[**stop_space_broadcast**](SpacesApi.md#stop_space_broadcast) | **POST** /video/v1/spaces/{SPACE_ID}/broadcasts/{BROADCAST_ID}/stop | Stop a space broadcast


# **create_space**
> SpaceResponse create_space(create_space_request)

Create a space

Create a new space. Spaces are used to build [real-time video applications.](https://mux.com/real-time-video)

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.create_space_request import CreateSpaceRequest
from openapi_client.models.space_response import SpaceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpacesApi(api_client)
    create_space_request = {"type":"server"} # CreateSpaceRequest | 

    try:
        # Create a space
        api_response = api_instance.create_space(create_space_request)
        print("The response of SpacesApi->create_space:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->create_space: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_space_request** | [**CreateSpaceRequest**](CreateSpaceRequest.md)|  | 

### Return type

[**SpaceResponse**](SpaceResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Space Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_space_broadcast**
> BroadcastResponse create_space_broadcast(space_id, create_broadcast_request)

Create a space broadcast

Creates a new broadcast. Broadcasts are used to create composited versions of your space, which can be broadcast to live streams. **Note:** By default only a single broadcast destination can be specified. Contact Mux support if you need more.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.broadcast_response import BroadcastResponse
from openapi_client.models.create_broadcast_request import CreateBroadcastRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | The space ID.
    create_broadcast_request = {"live_stream_id":"GQ9025mPqzyjOy3kKQW006qKTqmULW9vFO"} # CreateBroadcastRequest | 

    try:
        # Create a space broadcast
        api_response = api_instance.create_space_broadcast(space_id, create_broadcast_request)
        print("The response of SpacesApi->create_space_broadcast:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->create_space_broadcast: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| The space ID. | 
 **create_broadcast_request** | [**CreateBroadcastRequest**](CreateBroadcastRequest.md)|  | 

### Return type

[**BroadcastResponse**](BroadcastResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Broadcast Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_space**
> delete_space(space_id)

Delete a space

Deletes a space. Spaces can only be deleted when `idle`.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | The space ID.

    try:
        # Delete a space
        api_instance.delete_space(space_id)
    except Exception as e:
        print("Exception when calling SpacesApi->delete_space: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| The space ID. | 

### Return type

void (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_space_broadcast**
> delete_space_broadcast(space_id, broadcast_id)

Delete a space broadcast

Deletes a single broadcast of a specific space. Broadcasts can only be deleted when `idle`.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | The space ID.
    broadcast_id = 'broadcast_id_example' # str | The broadcast ID.

    try:
        # Delete a space broadcast
        api_instance.delete_space_broadcast(space_id, broadcast_id)
    except Exception as e:
        print("Exception when calling SpacesApi->delete_space_broadcast: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| The space ID. | 
 **broadcast_id** | **str**| The broadcast ID. | 

### Return type

void (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_space**
> SpaceResponse get_space(space_id)

Retrieve a space

Retrieves the details of a space that has previously been created. Supply the unique space ID that was returned from your create space request, and Mux will return the information about the corresponding space. The same information is returned when creating a space.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.space_response import SpaceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | The space ID.

    try:
        # Retrieve a space
        api_response = api_instance.get_space(space_id)
        print("The response of SpacesApi->get_space:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_space: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| The space ID. | 

### Return type

[**SpaceResponse**](SpaceResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_space_broadcast**
> BroadcastResponse get_space_broadcast(space_id, broadcast_id)

Retrieve space broadcast

Retrieves the details of a broadcast of a specific space.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.broadcast_response import BroadcastResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | The space ID.
    broadcast_id = 'broadcast_id_example' # str | The broadcast ID.

    try:
        # Retrieve space broadcast
        api_response = api_instance.get_space_broadcast(space_id, broadcast_id)
        print("The response of SpacesApi->get_space_broadcast:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_space_broadcast: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| The space ID. | 
 **broadcast_id** | **str**| The broadcast ID. | 

### Return type

[**BroadcastResponse**](BroadcastResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_spaces**
> ListSpacesResponse list_spaces(limit=limit, page=page)

List spaces

List all spaces in the current enviroment.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_spaces_response import ListSpacesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpacesApi(api_client)
    limit = 25 # int | Number of items to include in the response (optional) (default to 25)
    page = 1 # int | Offset by this many pages, of the size of `limit` (optional) (default to 1)

    try:
        # List spaces
        api_response = api_instance.list_spaces(limit=limit, page=page)
        print("The response of SpacesApi->list_spaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->list_spaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of items to include in the response | [optional] [default to 25]
 **page** | **int**| Offset by this many pages, of the size of &#x60;limit&#x60; | [optional] [default to 1]

### Return type

[**ListSpacesResponse**](ListSpacesResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_space_broadcast**
> StartSpaceBroadcastResponse start_space_broadcast(space_id, broadcast_id)

Start a space broadcast

Starts broadcasting a space to the associated destination. Broadcasts can only be started when the space is `active` (when there are participants connected).

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.start_space_broadcast_response import StartSpaceBroadcastResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | The space ID.
    broadcast_id = 'broadcast_id_example' # str | The broadcast ID.

    try:
        # Start a space broadcast
        api_response = api_instance.start_space_broadcast(space_id, broadcast_id)
        print("The response of SpacesApi->start_space_broadcast:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->start_space_broadcast: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| The space ID. | 
 **broadcast_id** | **str**| The broadcast ID. | 

### Return type

[**StartSpaceBroadcastResponse**](StartSpaceBroadcastResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stop_space_broadcast**
> StopSpaceBroadcastResponse stop_space_broadcast(space_id, broadcast_id)

Stop a space broadcast

Stops broadcasting a space, causing the destination live stream to become idle. This API also automatically calls `complete` on the destination live stream. Broadcasts are also automatically stopped when a space becomes idle.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.stop_space_broadcast_response import StopSpaceBroadcastResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | The space ID.
    broadcast_id = 'broadcast_id_example' # str | The broadcast ID.

    try:
        # Stop a space broadcast
        api_response = api_instance.stop_space_broadcast(space_id, broadcast_id)
        print("The response of SpacesApi->stop_space_broadcast:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->stop_space_broadcast: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| The space ID. | 
 **broadcast_id** | **str**| The broadcast ID. | 

### Return type

[**StopSpaceBroadcastResponse**](StopSpaceBroadcastResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

