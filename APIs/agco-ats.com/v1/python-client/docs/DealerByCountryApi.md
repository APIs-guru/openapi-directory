# openapi_client.DealerByCountryApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dealer_by_country_get_countries**](DealerByCountryApi.md#dealer_by_country_get_countries) | **GET** /api/v2/DealerByCountry | Get a total count of dealers per country


# **dealer_by_country_get_countries**
> APIPagedResponseDealerDBModelsDealersPerCountry dealer_by_country_get_countries(limit=limit, offset=offset)

Get a total count of dealers per country

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_dealer_db_models_dealers_per_country import APIPagedResponseDealerDBModelsDealersPerCountry
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DealerByCountryApi(api_client)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a total count of dealers per country
        api_response = api_instance.dealer_by_country_get_countries(limit=limit, offset=offset)
        print("The response of DealerByCountryApi->dealer_by_country_get_countries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealerByCountryApi->dealer_by_country_get_countries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseDealerDBModelsDealersPerCountry**](APIPagedResponseDealerDBModelsDealersPerCountry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

