# openapi_client.CountryListApi

All URIs are relative to *https://api.aviationdata.systems*

Method | HTTP request | Description
------------- | ------------- | -------------
[**country_list_country_airport_list**](CountryListApi.md#country_list_country_airport_list) | **GET** /v1/country_list | Country list. Returns a list of countries where airport data is available


# **country_list_country_airport_list**
> AirportsAPIControllersCountryListControllerCountryListResponse country_list_country_airport_list()

Country list. Returns a list of countries where airport data is available

### Example


```python
import openapi_client
from openapi_client.models.airports_api_controllers_country_list_controller_country_list_response import AirportsAPIControllersCountryListControllerCountryListResponse
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
    api_instance = openapi_client.CountryListApi(api_client)

    try:
        # Country list. Returns a list of countries where airport data is available
        api_response = api_instance.country_list_country_airport_list()
        print("The response of CountryListApi->country_list_country_airport_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountryListApi->country_list_country_airport_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AirportsAPIControllersCountryListControllerCountryListResponse**](AirportsAPIControllersCountryListControllerCountryListResponse.md)

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

