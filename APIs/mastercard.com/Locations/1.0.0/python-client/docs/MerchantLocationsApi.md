# openapi_client.MerchantLocationsApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**merchants_v1_merchant_get**](MerchantLocationsApi.md#merchants_v1_merchant_get) | **GET** /merchants/v1/merchant | Returns merchant location information for merchants offering the following services: accept contactless-enabled cards and devices, allow customers to add money to an eligible MasterCard or Maestro prepaid card, issue MasterCard Prepaid Travel cards, participate in the MasterCard Easy Savings program, and offer cash at checkout when paying with a Debit MasterCard or Maestro Card. 


# **merchants_v1_merchant_get**
> MerchantsResponse merchants_v1_merchant_get(details, page_offset, page_length, category=category, address_line1=address_line1, address_line2=address_line2, city=city, country_subdivision=country_subdivision, postal_code=postal_code, country=country, latitude=latitude, longitude=longitude, distance_unit=distance_unit, radius=radius, offer_merchant_id=offer_merchant_id)

Returns merchant location information for merchants offering the following services: accept contactless-enabled cards and devices, allow customers to add money to an eligible MasterCard or Maestro prepaid card, issue MasterCard Prepaid Travel cards, participate in the MasterCard Easy Savings program, and offer cash at checkout when paying with a Debit MasterCard or Maestro Card. 

Returns merchant location information for merchants offering the following services: accept contactless-enabled cards and devices, allow customers to add money to an eligible MasterCard or Maestro prepaid card, issue MasterCard Prepaid Travel cards, participate in the MasterCard Easy Savings program, and offer cash at checkout when paying with a Debit MasterCard or Maestro Card. 

### Example


```python
import openapi_client
from openapi_client.models.merchants_response import MerchantsResponse
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
    api_instance = openapi_client.MerchantLocationsApi(api_client)
    details = 'acceptance.paypass' # str | Type of merchant location. Options are \"acceptance.paypass\" \"topup.repower\" \"products.prepaidtravelcard\" \"offers.easysavings\" and \"features.cashback\". Cash Back is currently only available in the US.
    page_offset = 0 # int | Zero-based offset where the response will start. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests.
    page_length = 5 # int | Maximum number of items to retrieve within the current \"page\" of results.
    category = 'features.cashback' # str | Category of the merchant location. See the Categories (Merchant) resource for a list of valid categories. This parameter is only valid for merchant queries with Details = \"acceptance.paypass\" or \"features.cashback\". (optional)
    address_line1 = '42 Elm Street' # str | Line 1 of the street address for the merchant location.  Usually includes the street number and name. This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter and either City parameter or PostalCode parameter. (optional)
    address_line2 = 'Suite 101' # str | Line 2 of the street address usually an apartment number or suite number. This parameter is used rarely and is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter and either City parameter or PostalCode parameter. (optional)
    city = 'New York' # str | Name of the city for a merchant location.  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter. (optional)
    country_subdivision = 'NY' # str | State or province for a merchant location (only supported for US and Canada locations).  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter. (optional)
    postal_code = '11001' # str | Zip code or postal code for a merchant location.  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter. (optional)
    country = 'USA' # str | Any three digit country code for an ATM location.  Valid values are Three digit alpha country code as defined in ISO 3166-1.  This parameter is ignored if latitude and longitude are provided. This parameter is required if any other address information is provided including AddressLine1 AddressLine2 City PostalCode or CountrySubdivision. By default we supply ATM location data for United States ATMs for up to twenty-five records per request. (optional)
    latitude = 38.53463 # float | Latitude of a merchant location.  If latitude is provided longitude must also be provided. (optional)
    longitude = -90.286781 # float | Longitude of a merchant location.  If longitude is provided latitude must also be provided. (optional)
    distance_unit = 'MILE' # str | Indicates the unit for the radius as well as the units of the distance of each location from the basepoint in the response. (optional)
    radius = 25 # int | This is the radius from the search point in the distance unit you set.  For example if you want to search for locations within 50 miles of a certain point you would set DistanceUnit=mile and Radius=50.  This parameter is ignored in non-geocoded countries. (optional)
    offer_merchant_id = '34760' # str | Unique identifier that represents the merhcant sponsor of an offer. Any valid merchant ID. (optional)

    try:
        # Returns merchant location information for merchants offering the following services: accept contactless-enabled cards and devices, allow customers to add money to an eligible MasterCard or Maestro prepaid card, issue MasterCard Prepaid Travel cards, participate in the MasterCard Easy Savings program, and offer cash at checkout when paying with a Debit MasterCard or Maestro Card. 
        api_response = api_instance.merchants_v1_merchant_get(details, page_offset, page_length, category=category, address_line1=address_line1, address_line2=address_line2, city=city, country_subdivision=country_subdivision, postal_code=postal_code, country=country, latitude=latitude, longitude=longitude, distance_unit=distance_unit, radius=radius, offer_merchant_id=offer_merchant_id)
        print("The response of MerchantLocationsApi->merchants_v1_merchant_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerchantLocationsApi->merchants_v1_merchant_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **details** | **str**| Type of merchant location. Options are \&quot;acceptance.paypass\&quot; \&quot;topup.repower\&quot; \&quot;products.prepaidtravelcard\&quot; \&quot;offers.easysavings\&quot; and \&quot;features.cashback\&quot;. Cash Back is currently only available in the US. | 
 **page_offset** | **int**| Zero-based offset where the response will start. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests. | 
 **page_length** | **int**| Maximum number of items to retrieve within the current \&quot;page\&quot; of results. | 
 **category** | **str**| Category of the merchant location. See the Categories (Merchant) resource for a list of valid categories. This parameter is only valid for merchant queries with Details &#x3D; \&quot;acceptance.paypass\&quot; or \&quot;features.cashback\&quot;. | [optional] 
 **address_line1** | **str**| Line 1 of the street address for the merchant location.  Usually includes the street number and name. This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter and either City parameter or PostalCode parameter. | [optional] 
 **address_line2** | **str**| Line 2 of the street address usually an apartment number or suite number. This parameter is used rarely and is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter and either City parameter or PostalCode parameter. | [optional] 
 **city** | **str**| Name of the city for a merchant location.  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter. | [optional] 
 **country_subdivision** | **str**| State or province for a merchant location (only supported for US and Canada locations).  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter. | [optional] 
 **postal_code** | **str**| Zip code or postal code for a merchant location.  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter. | [optional] 
 **country** | **str**| Any three digit country code for an ATM location.  Valid values are Three digit alpha country code as defined in ISO 3166-1.  This parameter is ignored if latitude and longitude are provided. This parameter is required if any other address information is provided including AddressLine1 AddressLine2 City PostalCode or CountrySubdivision. By default we supply ATM location data for United States ATMs for up to twenty-five records per request. | [optional] 
 **latitude** | **float**| Latitude of a merchant location.  If latitude is provided longitude must also be provided. | [optional] 
 **longitude** | **float**| Longitude of a merchant location.  If longitude is provided latitude must also be provided. | [optional] 
 **distance_unit** | **str**| Indicates the unit for the radius as well as the units of the distance of each location from the basepoint in the response. | [optional] 
 **radius** | **int**| This is the radius from the search point in the distance unit you set.  For example if you want to search for locations within 50 miles of a certain point you would set DistanceUnit&#x3D;mile and Radius&#x3D;50.  This parameter is ignored in non-geocoded countries. | [optional] 
 **offer_merchant_id** | **str**| Unique identifier that represents the merhcant sponsor of an offer. Any valid merchant ID. | [optional] 

### Return type

[**MerchantsResponse**](MerchantsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Merchant locations |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

