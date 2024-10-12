# openapi_client.AirportDetailsApi

All URIs are relative to *https://api.aviationdata.systems*

Method | HTTP request | Description
------------- | ------------- | -------------
[**airport_details_airport_name_search**](AirportDetailsApi.md#airport_details_airport_name_search) | **GET** /v1/airport/name/{airport_name} | Search for airport by name


# **airport_details_airport_name_search**
> AirportsAPIControllersAirportDetailsControllerResponse airport_details_airport_name_search(airport_name)

Search for airport by name

Required parameters: airport_name, api_mode

### Example


```python
import openapi_client
from openapi_client.models.airports_api_controllers_airport_details_controller_response import AirportsAPIControllersAirportDetailsControllerResponse
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
    api_instance = openapi_client.AirportDetailsApi(api_client)
    airport_name = 'airport_name_example' # str | Required: The airports name

    try:
        # Search for airport by name
        api_response = api_instance.airport_details_airport_name_search(airport_name)
        print("The response of AirportDetailsApi->airport_details_airport_name_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AirportDetailsApi->airport_details_airport_name_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **airport_name** | **str**| Required: The airports name | 

### Return type

[**AirportsAPIControllersAirportDetailsControllerResponse**](AirportsAPIControllersAirportDetailsControllerResponse.md)

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

