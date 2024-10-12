# openapi_client.AutoCompleteAirportNameApi

All URIs are relative to *https://api.aviationdata.systems*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auto_complete_airport_name_airport_name_search**](AutoCompleteAirportNameApi.md#auto_complete_airport_name_airport_name_search) | **GET** /v1/airport/autocomplete/{airport_name} | Autocomplete airport names. Returns a maximum of 10 airport names.


# **auto_complete_airport_name_airport_name_search**
> AirportsAPIControllersAutoCompleteAirportNameControllerResponse auto_complete_airport_name_airport_name_search(airport_name, airport_service_type, optional_country_code=optional_country_code)

Autocomplete airport names. Returns a maximum of 10 airport names.

Required parameters: airport_name, airport_service_type. Optional parameter: country code (ISO 3166-1).

### Example


```python
import openapi_client
from openapi_client.models.airports_api_controllers_auto_complete_airport_name_controller_response import AirportsAPIControllersAutoCompleteAirportNameControllerResponse
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
    api_instance = openapi_client.AutoCompleteAirportNameApi(api_client)
    airport_name = 'airport_name_example' # str | Required: The airports name
    airport_service_type = 'airport_service_type_example' # str | Required: Needs to be: All, Scheduled or NonScheduled
    optional_country_code = 'optional_country_code_example' # str | Optional: Country code (ISO 3166-1). This can be found via /countries (optional)

    try:
        # Autocomplete airport names. Returns a maximum of 10 airport names.
        api_response = api_instance.auto_complete_airport_name_airport_name_search(airport_name, airport_service_type, optional_country_code=optional_country_code)
        print("The response of AutoCompleteAirportNameApi->auto_complete_airport_name_airport_name_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutoCompleteAirportNameApi->auto_complete_airport_name_airport_name_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **airport_name** | **str**| Required: The airports name | 
 **airport_service_type** | **str**| Required: Needs to be: All, Scheduled or NonScheduled | 
 **optional_country_code** | **str**| Optional: Country code (ISO 3166-1). This can be found via /countries | [optional] 

### Return type

[**AirportsAPIControllersAutoCompleteAirportNameControllerResponse**](AirportsAPIControllersAutoCompleteAirportNameControllerResponse.md)

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

