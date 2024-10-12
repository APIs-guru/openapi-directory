# openapi_client.ReservationMergeApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reservation_merge**](ReservationMergeApi.md#reservation_merge) | **POST** /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/merge | Merges two &#x60;Reservation&#x60;s.


# **reservation_merge**
> List[ReservationResponse] reservation_merge(reservation_order_id, api_version, body)

Merges two `Reservation`s.

Merge the specified `Reservation`s into a new `Reservation`. The two `Reservation`s being merged must have same properties.

### Example


```python
import openapi_client
from openapi_client.models.merge_request import MergeRequest
from openapi_client.models.reservation_response import ReservationResponse
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
    api_instance = openapi_client.ReservationMergeApi(api_client)
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation
    api_version = 'api_version_example' # str | Supported version for this document is 2019-04-01
    body = openapi_client.MergeRequest() # MergeRequest | Information needed for commercial request for a reservation

    try:
        # Merges two `Reservation`s.
        api_response = api_instance.reservation_merge(reservation_order_id, api_version, body)
        print("The response of ReservationMergeApi->reservation_merge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationMergeApi->reservation_merge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_order_id** | **str**| Order Id of the reservation | 
 **api_version** | **str**| Supported version for this document is 2019-04-01 | 
 **body** | [**MergeRequest**](MergeRequest.md)| Information needed for commercial request for a reservation | 

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
**200** | Returns the &#x60;Reservation&#x60; created after the merge. |  -  |
**202** | The request is accepted and is being processed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

