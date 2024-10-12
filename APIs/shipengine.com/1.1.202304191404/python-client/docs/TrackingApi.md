# openapi_client.TrackingApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_tracking_log**](TrackingApi.md#get_tracking_log) | **GET** /v1/tracking | Get Tracking Information
[**start_tracking**](TrackingApi.md#start_tracking) | **POST** /v1/tracking/start | Start Tracking a Package
[**stop_tracking**](TrackingApi.md#stop_tracking) | **POST** /v1/tracking/stop | Stop Tracking a Package


# **get_tracking_log**
> GetTrackingLogResponseBody get_tracking_log(carrier_code=carrier_code, tracking_number=tracking_number)

Get Tracking Information

Retrieve package tracking information

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_tracking_log_response_body import GetTrackingLogResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TrackingApi(api_client)
    carrier_code = 'stamps_com' # str | Carrier code used to retrieve tracking information (optional)
    tracking_number = '9405511899223197428490' # str | The tracking number associated with a shipment (optional)

    try:
        # Get Tracking Information
        api_response = api_instance.get_tracking_log(carrier_code=carrier_code, tracking_number=tracking_number)
        print("The response of TrackingApi->get_tracking_log:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrackingApi->get_tracking_log: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_code** | **str**| Carrier code used to retrieve tracking information | [optional] 
 **tracking_number** | **str**| The tracking number associated with a shipment | [optional] 

### Return type

[**GetTrackingLogResponseBody**](GetTrackingLogResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_tracking**
> str start_tracking(carrier_code=carrier_code, tracking_number=tracking_number)

Start Tracking a Package

Allows you to subscribe to tracking updates for a package. You specify the carrier_code and tracking_number of the package, and receive notifications via webhooks whenever the shipping status changes. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TrackingApi(api_client)
    carrier_code = 'stamps_com' # str | Carrier code used to retrieve tracking information (optional)
    tracking_number = '9405511899223197428490' # str | The tracking number associated with a shipment (optional)

    try:
        # Start Tracking a Package
        api_response = api_instance.start_tracking(carrier_code=carrier_code, tracking_number=tracking_number)
        print("The response of TrackingApi->start_tracking:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrackingApi->start_tracking: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_code** | **str**| Carrier code used to retrieve tracking information | [optional] 
 **tracking_number** | **str**| The tracking number associated with a shipment | [optional] 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The request was successful. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stop_tracking**
> str stop_tracking(carrier_code=carrier_code, tracking_number=tracking_number)

Stop Tracking a Package

Unsubscribe from tracking updates for a package.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TrackingApi(api_client)
    carrier_code = 'stamps_com' # str | Carrier code used to retrieve tracking information (optional)
    tracking_number = '9405511899223197428490' # str | The tracking number associated with a shipment (optional)

    try:
        # Stop Tracking a Package
        api_response = api_instance.stop_tracking(carrier_code=carrier_code, tracking_number=tracking_number)
        print("The response of TrackingApi->stop_tracking:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrackingApi->stop_tracking: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_code** | **str**| Carrier code used to retrieve tracking information | [optional] 
 **tracking_number** | **str**| The tracking number associated with a shipment | [optional] 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The request was successful. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

