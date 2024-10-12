# openapi_client.AppliedReservationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_applied_reservation_list**](AppliedReservationApi.md#get_applied_reservation_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Capacity/appliedReservations | Get list of applicable &#x60;Reservation&#x60;s.


# **get_applied_reservation_list**
> AppliedReservations get_applied_reservation_list(api_version, subscription_id)

Get list of applicable `Reservation`s.

Get applicable `Reservation`s that are applied to this subscription or a resource group under this subscription.

### Example


```python
import openapi_client
from openapi_client.models.applied_reservations import AppliedReservations
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
    api_instance = openapi_client.AppliedReservationApi(api_client)
    api_version = 'api_version_example' # str | Supported version for this document is 2019-04-01
    subscription_id = 'subscription_id_example' # str | Id of the subscription

    try:
        # Get list of applicable `Reservation`s.
        api_response = api_instance.get_applied_reservation_list(api_version, subscription_id)
        print("The response of AppliedReservationApi->get_applied_reservation_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppliedReservationApi->get_applied_reservation_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Supported version for this document is 2019-04-01 | 
 **subscription_id** | **str**| Id of the subscription | 

### Return type

[**AppliedReservations**](AppliedReservations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Applicable &#x60;Reservation&#x60;s. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

