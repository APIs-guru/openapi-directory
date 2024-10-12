# openapi_client.ATMCountrySubdivisionsApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atms_v1_countrysubdivision_get**](ATMCountrySubdivisionsApi.md#atms_v1_countrysubdivision_get) | **GET** /atms/v1/countrysubdivision | Returns country subdivisions that have ATM locations.  A country subdivision is a segment within a country (ex  state or province). Country subdivisions are only available for the US and Canada.


# **atms_v1_countrysubdivision_get**
> CountrySubdivisionResponse atms_v1_countrysubdivision_get(country)

Returns country subdivisions that have ATM locations.  A country subdivision is a segment within a country (ex  state or province). Country subdivisions are only available for the US and Canada.

Returns country subdivisions that have ATM locations.  A country subdivision is a segment within a country (ex  state or province). Country subdivisions are only available for the US and Canada. 

### Example


```python
import openapi_client
from openapi_client.models.country_subdivision_response import CountrySubdivisionResponse
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
    api_instance = openapi_client.ATMCountrySubdivisionsApi(api_client)
    country = 'USA' # str | Any three digit country code as defined in ISO 3166-1.  \"USA\" or \"CAN\"

    try:
        # Returns country subdivisions that have ATM locations.  A country subdivision is a segment within a country (ex  state or province). Country subdivisions are only available for the US and Canada.
        api_response = api_instance.atms_v1_countrysubdivision_get(country)
        print("The response of ATMCountrySubdivisionsApi->atms_v1_countrysubdivision_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ATMCountrySubdivisionsApi->atms_v1_countrysubdivision_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| Any three digit country code as defined in ISO 3166-1.  \&quot;USA\&quot; or \&quot;CAN\&quot; | 

### Return type

[**CountrySubdivisionResponse**](CountrySubdivisionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all the CountrySubdivisions |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

