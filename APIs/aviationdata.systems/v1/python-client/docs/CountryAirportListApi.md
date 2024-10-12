# openapi_client.CountryAirportListApi

All URIs are relative to *https://api.aviationdata.systems*

Method | HTTP request | Description
------------- | ------------- | -------------
[**country_airport_list_country_airport_list**](CountryAirportListApi.md#country_airport_list_country_airport_list) | **GET** /v1/country/code/{country_code} | Country airports. Returns a list of airports for a country code(ISO 3166-1 alpha-2 code)


# **country_airport_list_country_airport_list**
> AirportsAPIControllersCountryAirportListControllerAirportListResponse country_airport_list_country_airport_list(country_code, airport_service_type)

Country airports. Returns a list of airports for a country code(ISO 3166-1 alpha-2 code)

Required parameters: country code (ISO 3166-1), airport_service_type.

### Example


```python
import openapi_client
from openapi_client.models.airports_api_controllers_country_airport_list_controller_airport_list_response import AirportsAPIControllersCountryAirportListControllerAirportListResponse
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
    api_instance = openapi_client.CountryAirportListApi(api_client)
    country_code = 'country_code_example' # str | Country code (ISO 3166-1). This can be found via /countries
    airport_service_type = 'airport_service_type_example' # str | Required: Needs to be: All, Scheduled or NonScheduled

    try:
        # Country airports. Returns a list of airports for a country code(ISO 3166-1 alpha-2 code)
        api_response = api_instance.country_airport_list_country_airport_list(country_code, airport_service_type)
        print("The response of CountryAirportListApi->country_airport_list_country_airport_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountryAirportListApi->country_airport_list_country_airport_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_code** | **str**| Country code (ISO 3166-1). This can be found via /countries | 
 **airport_service_type** | **str**| Required: Needs to be: All, Scheduled or NonScheduled | 

### Return type

[**AirportsAPIControllersCountryAirportListControllerAirportListResponse**](AirportsAPIControllersCountryAirportListControllerAirportListResponse.md)

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

