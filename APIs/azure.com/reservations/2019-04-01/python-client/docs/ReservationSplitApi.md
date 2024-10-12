# openapi_client.ReservationSplitApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reservation_split**](ReservationSplitApi.md#reservation_split) | **POST** /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/split | Split the &#x60;Reservation&#x60;.


# **reservation_split**
> List[ReservationResponse] reservation_split(reservation_order_id, api_version, body)

Split the `Reservation`.

Split a `Reservation` into two `Reservation`s with specified quantity distribution.

### Example


```python
import openapi_client
from openapi_client.models.reservation_response import ReservationResponse
from openapi_client.models.split_request import SplitRequest
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
    api_instance = openapi_client.ReservationSplitApi(api_client)
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation
    api_version = 'api_version_example' # str | Supported version for this document is 2019-04-01
    body = openapi_client.SplitRequest() # SplitRequest | Information needed to Split a reservation item

    try:
        # Split the `Reservation`.
        api_response = api_instance.reservation_split(reservation_order_id, api_version, body)
        print("The response of ReservationSplitApi->reservation_split:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationSplitApi->reservation_split: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_order_id** | **str**| Order Id of the reservation | 
 **api_version** | **str**| Supported version for this document is 2019-04-01 | 
 **body** | [**SplitRequest**](SplitRequest.md)| Information needed to Split a reservation item | 

### Return type

[**List[ReservationResponse]**](ReservationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of &#x60;Reservation&#x60;s created after the split operation. |  -  |
**202** | The request is accepted and is being processed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

