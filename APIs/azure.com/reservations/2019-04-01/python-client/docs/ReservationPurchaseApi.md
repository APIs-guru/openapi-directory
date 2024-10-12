# openapi_client.ReservationPurchaseApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reservation_order_purchase**](ReservationPurchaseApi.md#reservation_order_purchase) | **PUT** /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId} | Purchase &#x60;ReservationOrder&#x60;


# **reservation_order_purchase**
> ReservationOrderResponse reservation_order_purchase(reservation_order_id, api_version, body)

Purchase `ReservationOrder`

Purchase `ReservationOrder` and create resource under the specified URI.

### Example


```python
import openapi_client
from openapi_client.models.purchase_request import PurchaseRequest
from openapi_client.models.reservation_order_response import ReservationOrderResponse
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
    api_instance = openapi_client.ReservationPurchaseApi(api_client)
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation
    api_version = 'api_version_example' # str | Supported version for this document is 2019-04-01
    body = openapi_client.PurchaseRequest() # PurchaseRequest | Information needed for calculate or purchase reservation

    try:
        # Purchase `ReservationOrder`
        api_response = api_instance.reservation_order_purchase(reservation_order_id, api_version, body)
        print("The response of ReservationPurchaseApi->reservation_order_purchase:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationPurchaseApi->reservation_order_purchase: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_order_id** | **str**| Order Id of the reservation | 
 **api_version** | **str**| Supported version for this document is 2019-04-01 | 
 **body** | [**PurchaseRequest**](PurchaseRequest.md)| Information needed for calculate or purchase reservation | 

### Return type

[**ReservationOrderResponse**](ReservationOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource has been created |  -  |
**202** | The request is accepted and is being processed. Operation result link is in location header. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

