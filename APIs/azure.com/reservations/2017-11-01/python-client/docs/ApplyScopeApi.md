# openapi_client.ApplyScopeApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reservation_update_0**](ApplyScopeApi.md#reservation_update_0) | **PATCH** /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId} | Updates a &#x60;Reservation&#x60;.


# **reservation_update_0**
> ReservationResponse reservation_update_0(reservation_order_id, reservation_id, api_version, parameters)

Updates a `Reservation`.

Updates the applied scopes of the `Reservation`.

### Example


```python
import openapi_client
from openapi_client.models.patch import Patch
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
    api_instance = openapi_client.ApplyScopeApi(api_client)
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation 
    reservation_id = 'reservation_id_example' # str | Id of the Reservation Item
    api_version = 'api_version_example' # str | Supported version.
    parameters = openapi_client.Patch() # Patch | Information needed to patch a reservation item

    try:
        # Updates a `Reservation`.
        api_response = api_instance.reservation_update_0(reservation_order_id, reservation_id, api_version, parameters)
        print("The response of ApplyScopeApi->reservation_update_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplyScopeApi->reservation_update_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_order_id** | **str**| Order Id of the reservation  | 
 **reservation_id** | **str**| Id of the Reservation Item | 
 **api_version** | **str**| Supported version. | 
 **parameters** | [**Patch**](Patch.md)| Information needed to patch a reservation item | 

### Return type

[**ReservationResponse**](ReservationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the updated &#x60;Reservation&#x60;. |  -  |
**202** | The request is accepted and is being processed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

