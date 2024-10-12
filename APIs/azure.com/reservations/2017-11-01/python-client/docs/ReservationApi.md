# openapi_client.ReservationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reservation_get**](ReservationApi.md#reservation_get) | **GET** /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId} | Get &#x60;Reservation&#x60; details.
[**reservation_list**](ReservationApi.md#reservation_list) | **GET** /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations | Get &#x60;Reservation&#x60;s in a given reservation Order
[**reservation_list_revisions**](ReservationApi.md#reservation_list_revisions) | **GET** /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}/revisions | Get &#x60;Reservation&#x60; revisions.
[**reservation_order_get**](ReservationApi.md#reservation_order_get) | **GET** /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId} | Get a specific &#x60;ReservationOrder&#x60;.
[**reservation_order_list**](ReservationApi.md#reservation_order_list) | **GET** /providers/Microsoft.Capacity/reservationOrders | Get all &#x60;ReservationOrder&#x60;s.
[**reservation_update**](ReservationApi.md#reservation_update) | **PATCH** /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId} | Updates a &#x60;Reservation&#x60;.


# **reservation_get**
> ReservationResponse reservation_get(reservation_id, reservation_order_id, api_version)

Get `Reservation` details.

Get specific `Reservation` details.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.ReservationApi(api_client)
    reservation_id = 'reservation_id_example' # str | Id of the Reservation Item
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation 
    api_version = 'api_version_example' # str | Supported version.

    try:
        # Get `Reservation` details.
        api_response = api_instance.reservation_get(reservation_id, reservation_order_id, api_version)
        print("The response of ReservationApi->reservation_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationApi->reservation_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_id** | **str**| Id of the Reservation Item | 
 **reservation_order_id** | **str**| Order Id of the reservation  | 
 **api_version** | **str**| Supported version. | 

### Return type

[**ReservationResponse**](ReservationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get &#x60;Reservation&#x60; details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reservation_list**
> ReservationList reservation_list(reservation_order_id, api_version)

Get `Reservation`s in a given reservation Order

List `Reservation`s within a single `ReservationOrder`.

### Example


```python
import openapi_client
from openapi_client.models.reservation_list import ReservationList
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
    api_instance = openapi_client.ReservationApi(api_client)
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation 
    api_version = 'api_version_example' # str | Supported version.

    try:
        # Get `Reservation`s in a given reservation Order
        api_response = api_instance.reservation_list(reservation_order_id, api_version)
        print("The response of ReservationApi->reservation_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationApi->reservation_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_order_id** | **str**| Order Id of the reservation  | 
 **api_version** | **str**| Supported version. | 

### Return type

[**ReservationList**](ReservationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List &#x60;Reservation&#x60;s within a single &#x60;ReservationOrder&#x60;. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reservation_list_revisions**
> ReservationList reservation_list_revisions(reservation_id, reservation_order_id, api_version)

Get `Reservation` revisions.

List of all the revisions for the `Reservation`. 

### Example


```python
import openapi_client
from openapi_client.models.reservation_list import ReservationList
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
    api_instance = openapi_client.ReservationApi(api_client)
    reservation_id = 'reservation_id_example' # str | Id of the Reservation Item
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation 
    api_version = 'api_version_example' # str | Supported version.

    try:
        # Get `Reservation` revisions.
        api_response = api_instance.reservation_list_revisions(reservation_id, reservation_order_id, api_version)
        print("The response of ReservationApi->reservation_list_revisions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationApi->reservation_list_revisions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_id** | **str**| Id of the Reservation Item | 
 **reservation_order_id** | **str**| Order Id of the reservation  | 
 **api_version** | **str**| Supported version. | 

### Return type

[**ReservationList**](ReservationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all the revisions for the &#x60;Reservation&#x60;. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reservation_order_get**
> ReservationOrderResponse reservation_order_get(reservation_order_id, api_version)

Get a specific `ReservationOrder`.

Get the details of the `ReservationOrder`.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.ReservationApi(api_client)
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation 
    api_version = 'api_version_example' # str | Supported version.

    try:
        # Get a specific `ReservationOrder`.
        api_response = api_instance.reservation_order_get(reservation_order_id, api_version)
        print("The response of ReservationApi->reservation_order_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationApi->reservation_order_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_order_id** | **str**| Order Id of the reservation  | 
 **api_version** | **str**| Supported version. | 

### Return type

[**ReservationOrderResponse**](ReservationOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get the details of the &#x60;ReservationOrder&#x60;. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reservation_order_list**
> ReservationOrderList reservation_order_list(api_version)

Get all `ReservationOrder`s.

List of all the `ReservationOrder`s that the user has access to in the current tenant.

### Example


```python
import openapi_client
from openapi_client.models.reservation_order_list import ReservationOrderList
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
    api_instance = openapi_client.ReservationApi(api_client)
    api_version = 'api_version_example' # str | Supported version.

    try:
        # Get all `ReservationOrder`s.
        api_response = api_instance.reservation_order_list(api_version)
        print("The response of ReservationApi->reservation_order_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationApi->reservation_order_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Supported version. | 

### Return type

[**ReservationOrderList**](ReservationOrderList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of &#x60;ReservationOrder&#x60;s |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reservation_update**
> ReservationResponse reservation_update(reservation_order_id, reservation_id, api_version, parameters)

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
    api_instance = openapi_client.ReservationApi(api_client)
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation 
    reservation_id = 'reservation_id_example' # str | Id of the Reservation Item
    api_version = 'api_version_example' # str | Supported version.
    parameters = openapi_client.Patch() # Patch | Information needed to patch a reservation item

    try:
        # Updates a `Reservation`.
        api_response = api_instance.reservation_update(reservation_order_id, reservation_id, api_version, parameters)
        print("The response of ReservationApi->reservation_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationApi->reservation_update: %s\n" % e)
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

