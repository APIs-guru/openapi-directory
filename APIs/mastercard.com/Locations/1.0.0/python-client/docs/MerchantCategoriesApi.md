# openapi_client.MerchantCategoriesApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**merchants_v1_category_get**](MerchantCategoriesApi.md#merchants_v1_category_get) | **GET** /merchants/v1/category | Returns a list of all merchant categories for contactless and cash back merchants (example:  Airline, Retail, etc.). 


# **merchants_v1_category_get**
> CategoriesResponse merchants_v1_category_get()

Returns a list of all merchant categories for contactless and cash back merchants (example:  Airline, Retail, etc.). 

Returns a list of all merchant categories for contactless and cash back merchants (example:  Airline, Retail, etc.). 

### Example


```python
import openapi_client
from openapi_client.models.categories_response import CategoriesResponse
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
    api_instance = openapi_client.MerchantCategoriesApi(api_client)

    try:
        # Returns a list of all merchant categories for contactless and cash back merchants (example:  Airline, Retail, etc.). 
        api_response = api_instance.merchants_v1_category_get()
        print("The response of MerchantCategoriesApi->merchants_v1_category_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerchantCategoriesApi->merchants_v1_category_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CategoriesResponse**](CategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all the categories supported |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

