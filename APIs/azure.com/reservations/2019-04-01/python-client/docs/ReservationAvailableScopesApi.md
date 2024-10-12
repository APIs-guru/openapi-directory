# openapi_client.ReservationAvailableScopesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reservation_available_scopes**](ReservationAvailableScopesApi.md#reservation_available_scopes) | **POST** /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}/availableScopes | Get Available Scopes for &#x60;Reservation&#x60;.


# **reservation_available_scopes**
> Properties reservation_available_scopes(reservation_order_id, reservation_id, api_version, body)

Get Available Scopes for `Reservation`.

Get Available Scopes for `Reservation`. 

### Example


```python
import openapi_client
from openapi_client.models.properties import Properties
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
    api_instance = openapi_client.ReservationAvailableScopesApi(api_client)
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation
    reservation_id = 'reservation_id_example' # str | Id of the Reservation Item
    api_version = 'api_version_example' # str | Supported version for this document is 2019-04-01
    body = ['body_example'] # List[str] | 

    try:
        # Get Available Scopes for `Reservation`.
        api_response = api_instance.reservation_available_scopes(reservation_order_id, reservation_id, api_version, body)
        print("The response of ReservationAvailableScopesApi->reservation_available_scopes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationAvailableScopesApi->reservation_available_scopes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_order_id** | **str**| Order Id of the reservation | 
 **reservation_id** | **str**| Id of the Reservation Item | 
 **api_version** | **str**| Supported version for this document is 2019-04-01 | 
 **body** | [**List[str]**](str.md)|  | 

### Return type

[**Properties**](Properties.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of &#x60;Subscription&#x60;s created after the filter. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

