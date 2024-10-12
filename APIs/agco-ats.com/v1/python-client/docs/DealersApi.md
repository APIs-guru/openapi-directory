# openapi_client.DealersApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dealers_get_dealerby_dealer_code**](DealersApi.md#dealers_get_dealerby_dealer_code) | **GET** /api/v2/Dealers/{DealerCode} | Lookup a dealer using a dealer code.
[**dealers_get_dealers**](DealersApi.md#dealers_get_dealers) | **GET** /api/v2/Dealers | Get a list of dealers.


# **dealers_get_dealerby_dealer_code**
> DealerDBModelsDealer dealers_get_dealerby_dealer_code(dealer_code)

Lookup a dealer using a dealer code.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.dealer_db_models_dealer import DealerDBModelsDealer
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
    api_instance = openapi_client.DealersApi(api_client)
    dealer_code = 'dealer_code_example' # str | The Dealer Code to Search for

    try:
        # Lookup a dealer using a dealer code.
        api_response = api_instance.dealers_get_dealerby_dealer_code(dealer_code)
        print("The response of DealersApi->dealers_get_dealerby_dealer_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealersApi->dealers_get_dealerby_dealer_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealer_code** | **str**| The Dealer Code to Search for | 

### Return type

[**DealerDBModelsDealer**](DealerDBModelsDealer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dealers_get_dealers**
> APIPagedResponseDealerDBModelsDealer dealers_get_dealers(brand=brand, shipping_country=shipping_country, dealer_name=dealer_name, limit=limit, offset=offset)

Get a list of dealers.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_dealer_db_models_dealer import APIPagedResponseDealerDBModelsDealer
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
    api_instance = openapi_client.DealersApi(api_client)
    brand = 'brand_example' # str | The brand to filter by. (optional)
    shipping_country = 'shipping_country_example' # str | The country to filter by. (optional)
    dealer_name = 'dealer_name_example' # str | The partial Dealer Name to filter by. Wildcard supported (*). (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a list of dealers.
        api_response = api_instance.dealers_get_dealers(brand=brand, shipping_country=shipping_country, dealer_name=dealer_name, limit=limit, offset=offset)
        print("The response of DealersApi->dealers_get_dealers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealersApi->dealers_get_dealers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brand** | **str**| The brand to filter by. | [optional] 
 **shipping_country** | **str**| The country to filter by. | [optional] 
 **dealer_name** | **str**| The partial Dealer Name to filter by. Wildcard supported (*). | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseDealerDBModelsDealer**](APIPagedResponseDealerDBModelsDealer.md)

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

