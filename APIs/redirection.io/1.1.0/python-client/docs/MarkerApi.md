# openapi_client.MarkerApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_marker_item**](MarkerApi.md#delete_marker_item) | **DELETE** /markers/{id} | Removes the Marker resource.
[**get_marker_item**](MarkerApi.md#get_marker_item) | **GET** /markers/{id} | Retrieves a Marker resource.
[**post_marker_collection**](MarkerApi.md#post_marker_collection) | **POST** /markers | Creates a Marker resource.
[**put_marker_item**](MarkerApi.md#put_marker_item) | **PUT** /markers/{id} | Replaces the Marker resource.


# **delete_marker_item**
> delete_marker_item(id)

Removes the Marker resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MarkerApi(api_client)
    id = 'id_example' # str | 

    try:
        # Removes the Marker resource.
        api_instance.delete_marker_item(id)
    except Exception as e:
        print("Exception when calling MarkerApi->delete_marker_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Marker resource deleted |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_marker_item**
> Marker get_marker_item(id)

Retrieves a Marker resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.marker import Marker
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MarkerApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a Marker resource.
        api_response = api_instance.get_marker_item(id)
        print("The response of MarkerApi->get_marker_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarkerApi->get_marker_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**Marker**](Marker.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Marker resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_marker_collection**
> Marker post_marker_collection(marker=marker)

Creates a Marker resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.marker import Marker
from openapi_client.models.marker_write import MarkerWrite
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MarkerApi(api_client)
    marker = openapi_client.MarkerWrite() # MarkerWrite | The new Marker resource (optional)

    try:
        # Creates a Marker resource.
        api_response = api_instance.post_marker_collection(marker=marker)
        print("The response of MarkerApi->post_marker_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarkerApi->post_marker_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marker** | [**MarkerWrite**](MarkerWrite.md)| The new Marker resource | [optional] 

### Return type

[**Marker**](Marker.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Marker resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_marker_item**
> Marker put_marker_item(id, marker=marker)

Replaces the Marker resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.marker import Marker
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MarkerApi(api_client)
    id = 'id_example' # str | 
    marker = openapi_client.Marker() # Marker | The updated Marker resource (optional)

    try:
        # Replaces the Marker resource.
        api_response = api_instance.put_marker_item(id, marker=marker)
        print("The response of MarkerApi->put_marker_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarkerApi->put_marker_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **marker** | [**Marker**](Marker.md)| The updated Marker resource | [optional] 

### Return type

[**Marker**](Marker.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Marker resource updated |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

