# openapi_client.ATMCountriesApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atms_v1_country_get**](ATMCountriesApi.md#atms_v1_country_get) | **GET** /atms/v1/country | Returns countries with valid ATM locations.


# **atms_v1_country_get**
> CountriesResponse atms_v1_country_get()

Returns countries with valid ATM locations.

Returns countries with valid ATM locations. 

### Example


```python
import openapi_client
from openapi_client.models.countries_response import CountriesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ATMCountriesApi(api_client)

    try:
        # Returns countries with valid ATM locations.
        api_response = api_instance.atms_v1_country_get()
        print("The response of ATMCountriesApi->atms_v1_country_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ATMCountriesApi->atms_v1_country_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CountriesResponse**](CountriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all the countries that contain ATMs |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

