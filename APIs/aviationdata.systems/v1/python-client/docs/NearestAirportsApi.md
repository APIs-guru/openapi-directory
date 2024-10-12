# openapi_client.NearestAirportsApi

All URIs are relative to *https://api.aviationdata.systems*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nearest_airports_nearest_airport_list**](NearestAirportsApi.md#nearest_airports_nearest_airport_list) | **GET** /v1/airport/nearest/{result_count}/{latitude}/{longitude} | Search for airports by location


# **nearest_airports_nearest_airport_list**
> AirportsAPIControllersNearestAirportsControllerResponse nearest_airports_nearest_airport_list(result_count, latitude, longitude)

Search for airports by location

Required parameters: result_count, latitude, longitude, airport_service_type

### Example


```python
import openapi_client
from openapi_client.models.airports_api_controllers_nearest_airports_controller_response import AirportsAPIControllersNearestAirportsControllerResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.aviationdata.systems
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.aviationdata.systems"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NearestAirportsApi(api_client)
    result_count = 56 # int | Required: Number of airports to return. Min: 1 Max: 20
    latitude = 3.4 # float | Required: Latitude
    longitude = 3.4 # float | Required: Longitude

    try:
        # Search for airports by location
        api_response = api_instance.nearest_airports_nearest_airport_list(result_count, latitude, longitude)
        print("The response of NearestAirportsApi->nearest_airports_nearest_airport_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NearestAirportsApi->nearest_airports_nearest_airport_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **result_count** | **int**| Required: Number of airports to return. Min: 1 Max: 20 | 
 **latitude** | **float**| Required: Latitude | 
 **longitude** | **float**| Required: Longitude | 

### Return type

[**AirportsAPIControllersNearestAirportsControllerResponse**](AirportsAPIControllersNearestAirportsControllerResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

