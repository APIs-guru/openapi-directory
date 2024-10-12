# openapi_client.ReservationCalculateApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reservation_order_calculate**](ReservationCalculateApi.md#reservation_order_calculate) | **POST** /providers/Microsoft.Capacity/calculatePrice | Calculate price for a &#x60;ReservationOrder&#x60;.


# **reservation_order_calculate**
> CalculatePriceResponse reservation_order_calculate(api_version, body)

Calculate price for a `ReservationOrder`.

Calculate price for placing a `ReservationOrder`.

### Example


```python
import openapi_client
from openapi_client.models.calculate_price_response import CalculatePriceResponse
from openapi_client.models.purchase_request import PurchaseRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReservationCalculateApi(api_client)
    api_version = 'api_version_example' # str | Supported version for this document is 2019-04-01
    body = openapi_client.PurchaseRequest() # PurchaseRequest | Information needed for calculate or purchase reservation

    try:
        # Calculate price for a `ReservationOrder`.
        api_response = api_instance.reservation_order_calculate(api_version, body)
        print("The response of ReservationCalculateApi->reservation_order_calculate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationCalculateApi->reservation_order_calculate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Supported version for this document is 2019-04-01 | 
 **body** | [**PurchaseRequest**](PurchaseRequest.md)| Information needed for calculate or purchase reservation | 

### Return type

[**CalculatePriceResponse**](CalculatePriceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detailed price info for purchasing &#x60;ReservationOrder&#x60; |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

