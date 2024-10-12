# openapi_client.ATMLocationsApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atms_v1_atm_get**](ATMLocationsApi.md#atms_v1_atm_get) | **GET** /atms/v1/atm | Returns detailed information about an ATM location.  This information can be used to display ATMs on a map, provide driving directions, or show special ATM features.


# **atms_v1_atm_get**
> AtmsResponse atms_v1_atm_get(page_offset, page_length, address_line1=address_line1, address_line2=address_line2, city=city, country_subdivision=country_subdivision, postal_code=postal_code, country=country, latitude=latitude, longitude=longitude, distance_unit=distance_unit, radius=radius, support_emv=support_emv, international_maestro_accepted=international_maestro_accepted)

Returns detailed information about an ATM location.  This information can be used to display ATMs on a map, provide driving directions, or show special ATM features.

Returns detailed information about an ATM location.  This information can be used to display ATMs on a map, provide driving directions, or show special ATM features. 

### Example


```python
import openapi_client
from openapi_client.models.atms_response import AtmsResponse
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
    api_instance = openapi_client.ATMLocationsApi(api_client)
    page_offset = 0 # int | Zero-based offset where the response will start. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests.
    page_length = 5 # int | Maximum number of items to retrieve within the current \"page\" of results.
    address_line1 = '114 Fifth Avenue' # str | Line 1 of the street address for the merchant location.  Usually includes the street number and name. This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter and either City parameter or PostalCode parameter. (optional)
    address_line2 = 'Apartment 1' # str | Line 2 of the street address usually an apartment number or suite number. This parameter is used rarely and is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter and either City parameter or PostalCode parameter. (optional)
    city = 'New York City' # str | The name of the city for a merchant location.  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter. (optional)
    country_subdivision = 'NY' # str | The state or province for a merchant location (only supported for US and Canada locations).  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter. (optional)
    postal_code = '11101' # str | The zip code or postal code for a merchant location.  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter. (optional)
    country = 'USA' # str | Any three digit country code for an ATM location.  Valid values are Three digit alpha country code as defined in ISO 3166-1.  This parameter is ignored if latitude and longitude are provided. This parameter is required if any other address information is provided including AddressLine1 AddressLine2 City PostalCode or CountrySubdivision. (optional)
    latitude = 38.76006576913497 # float | The latitude of a merchant location.  If latitude is provided longitude must also be provided. (optional)
    longitude = -90.74615107952418 # float | The longitude of a merchant location.  If longitude is provided latitude must also be provided. (optional)
    distance_unit = 'MILE' # str | Indicates the unit for the radius as well as the units of the distance of each location from the basepoint in the response. (optional)
    radius = 25 # int | This is the radius from the search point in the distance unit you set.  For example if you want to search for locations within 50 miles of a certain point you would set DistanceUnit=mile and Radius=50.  This parameter is ignored in non-geocoded countries. (optional)
    support_emv = 1 # int | This indicates whether the ATM should have the ability to read chip cards or not. (optional)
    international_maestro_accepted = 1 # int | This field will provide ATM Terminals which can still process Maestro transactions but are not yet EMV chip reader enabled. Information available only for USA and Argentina till October 2014. (optional)

    try:
        # Returns detailed information about an ATM location.  This information can be used to display ATMs on a map, provide driving directions, or show special ATM features.
        api_response = api_instance.atms_v1_atm_get(page_offset, page_length, address_line1=address_line1, address_line2=address_line2, city=city, country_subdivision=country_subdivision, postal_code=postal_code, country=country, latitude=latitude, longitude=longitude, distance_unit=distance_unit, radius=radius, support_emv=support_emv, international_maestro_accepted=international_maestro_accepted)
        print("The response of ATMLocationsApi->atms_v1_atm_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ATMLocationsApi->atms_v1_atm_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_offset** | **int**| Zero-based offset where the response will start. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests. | 
 **page_length** | **int**| Maximum number of items to retrieve within the current \&quot;page\&quot; of results. | 
 **address_line1** | **str**| Line 1 of the street address for the merchant location.  Usually includes the street number and name. This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter and either City parameter or PostalCode parameter. | [optional] 
 **address_line2** | **str**| Line 2 of the street address usually an apartment number or suite number. This parameter is used rarely and is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter and either City parameter or PostalCode parameter. | [optional] 
 **city** | **str**| The name of the city for a merchant location.  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter. | [optional] 
 **country_subdivision** | **str**| The state or province for a merchant location (only supported for US and Canada locations).  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter. | [optional] 
 **postal_code** | **str**| The zip code or postal code for a merchant location.  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter. | [optional] 
 **country** | **str**| Any three digit country code for an ATM location.  Valid values are Three digit alpha country code as defined in ISO 3166-1.  This parameter is ignored if latitude and longitude are provided. This parameter is required if any other address information is provided including AddressLine1 AddressLine2 City PostalCode or CountrySubdivision. | [optional] 
 **latitude** | **float**| The latitude of a merchant location.  If latitude is provided longitude must also be provided. | [optional] 
 **longitude** | **float**| The longitude of a merchant location.  If longitude is provided latitude must also be provided. | [optional] 
 **distance_unit** | **str**| Indicates the unit for the radius as well as the units of the distance of each location from the basepoint in the response. | [optional] 
 **radius** | **int**| This is the radius from the search point in the distance unit you set.  For example if you want to search for locations within 50 miles of a certain point you would set DistanceUnit&#x3D;mile and Radius&#x3D;50.  This parameter is ignored in non-geocoded countries. | [optional] 
 **support_emv** | **int**| This indicates whether the ATM should have the ability to read chip cards or not. | [optional] 
 **international_maestro_accepted** | **int**| This field will provide ATM Terminals which can still process Maestro transactions but are not yet EMV chip reader enabled. Information available only for USA and Argentina till October 2014. | [optional] 

### Return type

[**AtmsResponse**](AtmsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of ATM locations |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

