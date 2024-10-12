# openapi_client.AirportIATAApi

All URIs are relative to *https://api.aviationdata.systems*

Method | HTTP request | Description
------------- | ------------- | -------------
[**airport_iata_airport_iata_search**](AirportIATAApi.md#airport_iata_airport_iata_search) | **GET** /v1/airport/iata/{airport_iata} | Search for airport by IATA code


# **airport_iata_airport_iata_search**
> AirportsAPIControllersAirportIATAControllerResponse airport_iata_airport_iata_search(airport_iata)

Search for airport by IATA code

Required parameters: airport_iata

### Example


```python
import openapi_client
from openapi_client.models.airports_api_controllers_airport_iata_controller_response import AirportsAPIControllersAirportIATAControllerResponse
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
    api_instance = openapi_client.AirportIATAApi(api_client)
    airport_iata = 'airport_iata_example' # str | Required: The airports IATA code

    try:
        # Search for airport by IATA code
        api_response = api_instance.airport_iata_airport_iata_search(airport_iata)
        print("The response of AirportIATAApi->airport_iata_airport_iata_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AirportIATAApi->airport_iata_airport_iata_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **airport_iata** | **str**| Required: The airports IATA code | 

### Return type

[**AirportsAPIControllersAirportIATAControllerResponse**](AirportsAPIControllersAirportIATAControllerResponse.md)

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

