# openapi_client.AnalyticsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_camera_analytics_live_1**](AnalyticsApi.md#get_device_camera_analytics_live_1) | **GET** /devices/{serial}/camera/analytics/live | Returns live state from camera of analytics zones
[**get_device_camera_analytics_overview_1**](AnalyticsApi.md#get_device_camera_analytics_overview_1) | **GET** /devices/{serial}/camera/analytics/overview | Returns an overview of aggregate analytics data for a timespan
[**get_device_camera_analytics_recent_1**](AnalyticsApi.md#get_device_camera_analytics_recent_1) | **GET** /devices/{serial}/camera/analytics/recent | Returns most recent record for analytics zones
[**get_device_camera_analytics_zone_history_1**](AnalyticsApi.md#get_device_camera_analytics_zone_history_1) | **GET** /devices/{serial}/camera/analytics/zones/{zoneId}/history | Return historical records for analytic zones
[**get_device_camera_analytics_zones_1**](AnalyticsApi.md#get_device_camera_analytics_zones_1) | **GET** /devices/{serial}/camera/analytics/zones | Returns all configured analytic zones for this camera


# **get_device_camera_analytics_live_1**
> object get_device_camera_analytics_live_1(serial)

Returns live state from camera of analytics zones

Returns live state from camera of analytics zones

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalyticsApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns live state from camera of analytics zones
        api_response = api_instance.get_device_camera_analytics_live_1(serial)
        print("The response of AnalyticsApi->get_device_camera_analytics_live_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->get_device_camera_analytics_live_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_analytics_overview_1**
> List[object] get_device_camera_analytics_overview_1(serial, t0=t0, t1=t1, timespan=timespan, object_type=object_type)

Returns an overview of aggregate analytics data for a timespan

Returns an overview of aggregate analytics data for a timespan

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalyticsApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour. (optional)
    object_type = 'object_type_example' # str | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. (optional)

    try:
        # Returns an overview of aggregate analytics data for a timespan
        api_response = api_instance.get_device_camera_analytics_overview_1(serial, t0=t0, t1=t1, timespan=timespan, object_type=object_type)
        print("The response of AnalyticsApi->get_device_camera_analytics_overview_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->get_device_camera_analytics_overview_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour. | [optional] 
 **object_type** | **str**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_analytics_recent_1**
> List[object] get_device_camera_analytics_recent_1(serial, object_type=object_type)

Returns most recent record for analytics zones

Returns most recent record for analytics zones

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalyticsApi(api_client)
    serial = 'serial_example' # str | 
    object_type = 'object_type_example' # str | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. (optional)

    try:
        # Returns most recent record for analytics zones
        api_response = api_instance.get_device_camera_analytics_recent_1(serial, object_type=object_type)
        print("The response of AnalyticsApi->get_device_camera_analytics_recent_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->get_device_camera_analytics_recent_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **object_type** | **str**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_analytics_zone_history_1**
> List[object] get_device_camera_analytics_zone_history_1(serial, zone_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, object_type=object_type)

Return historical records for analytic zones

Return historical records for analytic zones

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalyticsApi(api_client)
    serial = 'serial_example' # str | 
    zone_id = 'zone_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 14 hours after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60. (optional)
    object_type = 'object_type_example' # str | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. (optional)

    try:
        # Return historical records for analytic zones
        api_response = api_instance.get_device_camera_analytics_zone_history_1(serial, zone_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, object_type=object_type)
        print("The response of AnalyticsApi->get_device_camera_analytics_zone_history_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->get_device_camera_analytics_zone_history_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **zone_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 14 hours after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60. | [optional] 
 **object_type** | **str**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_analytics_zones_1**
> List[object] get_device_camera_analytics_zones_1(serial)

Returns all configured analytic zones for this camera

Returns all configured analytic zones for this camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalyticsApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns all configured analytic zones for this camera
        api_response = api_instance.get_device_camera_analytics_zones_1(serial)
        print("The response of AnalyticsApi->get_device_camera_analytics_zones_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->get_device_camera_analytics_zones_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

