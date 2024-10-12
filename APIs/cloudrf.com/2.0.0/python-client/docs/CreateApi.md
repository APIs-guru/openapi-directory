# openapi_client.CreateApi

All URIs are relative to *https://api.cloudrf.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**area**](CreateApi.md#area) | **POST** /area | Create a point-to-multipoint heatmap
[**path**](CreateApi.md#path) | **POST** /path | Point-to-point path profile analysis (Tx to Rx)
[**points**](CreateApi.md#points) | **POST** /points | Point-to-multipoint path profile analysis (Many Tx, one Rx)


# **area**
> area(area_request)

Create a point-to-multipoint heatmap

An area coverage assumes the same receiver height at all locations out to fixed radius (maximum 300km). Due to it's exhaustive processing it is the slowest of all the API calls. Speed can be improved significantly by adjusting the resolution 'res' parameter. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.area_request import AreaRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.cloudrf.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.cloudrf.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CreateApi(api_client)
    area_request = openapi_client.AreaRequest() # AreaRequest | A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.

    try:
        # Create a point-to-multipoint heatmap
        api_instance.area(area_request)
    except Exception as e:
        print("Exception when calling CreateApi->area: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area_request** | [**AreaRequest**](AreaRequest.md)| A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy. | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **path**
> path(path_request)

Point-to-point path profile analysis (Tx to Rx)

A path profile is a single link from A to B. It is much faster than an area calculation and can be used out to 300km. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.path_request import PathRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.cloudrf.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.cloudrf.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CreateApi(api_client)
    path_request = openapi_client.PathRequest() # PathRequest | A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.

    try:
        # Point-to-point path profile analysis (Tx to Rx)
        api_instance.path(path_request)
    except Exception as e:
        print("Exception when calling CreateApi->path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_request** | [**PathRequest**](PathRequest.md)| A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy. | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **points**
> points(points_request)

Point-to-multipoint path profile analysis (Many Tx, one Rx)

The points function tests many transmitters and one receiver and is designed for route analysis. A minimal request needs a transmitters array of (latitude,longitude,altitude) locations, antenna, receiver and output objects defined as a minimum. Model and environment options will enhance accuracy.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.points_request import PointsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.cloudrf.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.cloudrf.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CreateApi(api_client)
    points_request = openapi_client.PointsRequest() # PointsRequest | A minimal request needs a transmitters array of (latitude,longitude,altitude) locations, antenna, receiver and output objects defined as a minimum. Model and environment options will enhance accuracy.

    try:
        # Point-to-multipoint path profile analysis (Many Tx, one Rx)
        api_instance.points(points_request)
    except Exception as e:
        print("Exception when calling CreateApi->points: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **points_request** | [**PointsRequest**](PointsRequest.md)| A minimal request needs a transmitters array of (latitude,longitude,altitude) locations, antenna, receiver and output objects defined as a minimum. Model and environment options will enhance accuracy. | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

