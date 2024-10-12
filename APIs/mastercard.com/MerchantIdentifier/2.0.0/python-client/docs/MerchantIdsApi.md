# openapi_client.MerchantIdsApi

All URIs are relative to *http://api.mastercard.com/merchant-id/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_merchant_identifiers**](MerchantIdsApi.md#get_merchant_identifiers) | **GET** /merchant-ids | Returns merchant descriptor and locator information based on the criteria you provide.  Information returned includes merchant DBA name, merchant category code (MCC), street address, city, state, postal code, country, and sales channels.


# **get_merchant_identifiers**
> MerchantIds get_merchant_identifiers(merchant_id=merchant_id, type=type)

Returns merchant descriptor and locator information based on the criteria you provide.  Information returned includes merchant DBA name, merchant category code (MCC), street address, city, state, postal code, country, and sales channels.

### Example


```python
import openapi_client
from openapi_client.models.merchant_ids import MerchantIds
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.mastercard.com/merchant-id/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.mastercard.com/merchant-id/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MerchantIdsApi(api_client)
    merchant_id = 'DOLIUMPTYLTDWELSHPOOLWA' # str | Merchant's name as provided by the issuer found on a cardholder statement. __Important: Please remove all spaces before submitting a API request.__    (optional)
    type = 'ExactMatch' # str | Determines how the search is performed.              ExactMatch returns either the one merchant that best fits the description or no results at all.              FuzzyMatch returns 0-20 merchants that are similar to the transaction descriptor.               If Type is not provided, defaults to ExactMatch.              Example: FuzzyMatch (optional) (default to 'ExactMatch')

    try:
        # Returns merchant descriptor and locator information based on the criteria you provide.  Information returned includes merchant DBA name, merchant category code (MCC), street address, city, state, postal code, country, and sales channels.
        api_response = api_instance.get_merchant_identifiers(merchant_id=merchant_id, type=type)
        print("The response of MerchantIdsApi->get_merchant_identifiers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerchantIdsApi->get_merchant_identifiers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_id** | **str**| Merchant&#39;s name as provided by the issuer found on a cardholder statement. __Important: Please remove all spaces before submitting a API request.__    | [optional] 
 **type** | **str**| Determines how the search is performed.              ExactMatch returns either the one merchant that best fits the description or no results at all.              FuzzyMatch returns 0-20 merchants that are similar to the transaction descriptor.               If Type is not provided, defaults to ExactMatch.              Example: FuzzyMatch | [optional] [default to &#39;ExactMatch&#39;]

### Return type

[**MerchantIds**](MerchantIds.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

