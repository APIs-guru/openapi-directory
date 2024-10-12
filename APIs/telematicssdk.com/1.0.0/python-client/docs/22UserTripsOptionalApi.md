# openapi_client.22UserTripsOptionalApi

All URIs are relative to *https://api.telematicssdk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trips_trip_details_0**](22UserTripsOptionalApi.md#trips_trip_details_0) | **GET** /mobilesdk/stage/track/get_track/v1 | Trips - trip details


# **trips_trip_details_0**
> TripsTripDetails200Response trips_trip_details_0(track_token=track_token)

Trips - trip details

Trips - trip details

### Example


```python
import openapi_client
from openapi_client.models.trips_trip_details200_response import TripsTripDetails200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.telematicssdk.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.telematicssdk.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.22UserTripsOptionalApi(api_client)
    track_token = '' # str |  (optional)

    try:
        # Trips - trip details
        api_response = api_instance.trips_trip_details_0(track_token=track_token)
        print("The response of 22UserTripsOptionalApi->trips_trip_details_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling 22UserTripsOptionalApi->trips_trip_details_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **track_token** | **str**|  | [optional] 

### Return type

[**TripsTripDetails200Response**](TripsTripDetails200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * CF-Cache-Status -  <br>  * CF-Ray -  <br>  * Code -  <br>  * Connection -  <br>  * Content-Encoding -  <br>  * Date -  <br>  * EnableLogging -  <br>  * EnableRealTimeLocation -  <br>  * EnableTracking -  <br>  * Expect-CT -  <br>  * NEL -  <br>  * Report-To -  <br>  * Server -  <br>  * Set-Cookie -  <br>  * Transfer-Encoding -  <br>  * Vary -  <br>  * X-Powered-By -  <br>  * X-StackifyID -  <br>  * cf-apo-via -  <br>  * cf-request-id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

