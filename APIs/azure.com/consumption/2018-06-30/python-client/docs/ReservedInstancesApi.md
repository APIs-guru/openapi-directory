# openapi_client.ReservedInstancesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reservations_details_list_by_reservation_order**](ReservedInstancesApi.md#reservations_details_list_by_reservation_order) | **GET** /providers/Microsoft.Capacity/reservationorders/{reservationOrderId}/providers/Microsoft.Consumption/reservationDetails | 
[**reservations_details_list_by_reservation_order_and_reservation**](ReservedInstancesApi.md#reservations_details_list_by_reservation_order_and_reservation) | **GET** /providers/Microsoft.Capacity/reservationorders/{reservationOrderId}/reservations/{reservationId}/providers/Microsoft.Consumption/reservationDetails | 
[**reservations_summaries_list_by_reservation_order**](ReservedInstancesApi.md#reservations_summaries_list_by_reservation_order) | **GET** /providers/Microsoft.Capacity/reservationorders/{reservationOrderId}/providers/Microsoft.Consumption/reservationSummaries | 
[**reservations_summaries_list_by_reservation_order_and_reservation**](ReservedInstancesApi.md#reservations_summaries_list_by_reservation_order_and_reservation) | **GET** /providers/Microsoft.Capacity/reservationorders/{reservationOrderId}/reservations/{reservationId}/providers/Microsoft.Consumption/reservationSummaries | 


# **reservations_details_list_by_reservation_order**
> ReservationDetailsListResult reservations_details_list_by_reservation_order(reservation_order_id, filter, api_version)



Lists the reservations details for provided date range.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.reservation_details_list_result import ReservationDetailsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReservedInstancesApi(api_client)
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation
    filter = 'filter_example' # str | Filter reservation details by date range. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge' 
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.

    try:
        api_response = api_instance.reservations_details_list_by_reservation_order(reservation_order_id, filter, api_version)
        print("The response of ReservedInstancesApi->reservations_details_list_by_reservation_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservedInstancesApi->reservations_details_list_by_reservation_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_order_id** | **str**| Order Id of the reservation | 
 **filter** | **str**| Filter reservation details by date range. The properties/UsageDate for start date and end date. The filter supports &#39;le&#39; and  &#39;ge&#39;  | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 

### Return type

[**ReservationDetailsListResult**](ReservationDetailsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reservations_details_list_by_reservation_order_and_reservation**
> ReservationDetailsListResult reservations_details_list_by_reservation_order_and_reservation(reservation_order_id, reservation_id, filter, api_version)



Lists the reservations details for provided date range.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.reservation_details_list_result import ReservationDetailsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReservedInstancesApi(api_client)
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation
    reservation_id = 'reservation_id_example' # str | Id of the reservation
    filter = 'filter_example' # str | Filter reservation details by date range. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge' 
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.

    try:
        api_response = api_instance.reservations_details_list_by_reservation_order_and_reservation(reservation_order_id, reservation_id, filter, api_version)
        print("The response of ReservedInstancesApi->reservations_details_list_by_reservation_order_and_reservation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservedInstancesApi->reservations_details_list_by_reservation_order_and_reservation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_order_id** | **str**| Order Id of the reservation | 
 **reservation_id** | **str**| Id of the reservation | 
 **filter** | **str**| Filter reservation details by date range. The properties/UsageDate for start date and end date. The filter supports &#39;le&#39; and  &#39;ge&#39;  | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 

### Return type

[**ReservationDetailsListResult**](ReservationDetailsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reservations_summaries_list_by_reservation_order**
> ReservationSummariesListResult reservations_summaries_list_by_reservation_order(reservation_order_id, grain, api_version, filter=filter)



Lists the reservations summaries for daily or monthly grain.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.reservation_summaries_list_result import ReservationSummariesListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReservedInstancesApi(api_client)
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation
    grain = 'grain_example' # str | Can be daily or monthly
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.
    filter = 'filter_example' # str | Required only for daily grain. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge' (optional)

    try:
        api_response = api_instance.reservations_summaries_list_by_reservation_order(reservation_order_id, grain, api_version, filter=filter)
        print("The response of ReservedInstancesApi->reservations_summaries_list_by_reservation_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservedInstancesApi->reservations_summaries_list_by_reservation_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_order_id** | **str**| Order Id of the reservation | 
 **grain** | **str**| Can be daily or monthly | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 
 **filter** | **str**| Required only for daily grain. The properties/UsageDate for start date and end date. The filter supports &#39;le&#39; and  &#39;ge&#39; | [optional] 

### Return type

[**ReservationSummariesListResult**](ReservationSummariesListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reservations_summaries_list_by_reservation_order_and_reservation**
> ReservationSummariesListResult reservations_summaries_list_by_reservation_order_and_reservation(reservation_order_id, reservation_id, grain, api_version, filter=filter)



Lists the reservations summaries for daily or monthly grain.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.reservation_summaries_list_result import ReservationSummariesListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReservedInstancesApi(api_client)
    reservation_order_id = 'reservation_order_id_example' # str | Order Id of the reservation
    reservation_id = 'reservation_id_example' # str | Id of the reservation
    grain = 'grain_example' # str | Can be daily or monthly
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-06-30.
    filter = 'filter_example' # str | Required only for daily grain. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge' (optional)

    try:
        api_response = api_instance.reservations_summaries_list_by_reservation_order_and_reservation(reservation_order_id, reservation_id, grain, api_version, filter=filter)
        print("The response of ReservedInstancesApi->reservations_summaries_list_by_reservation_order_and_reservation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservedInstancesApi->reservations_summaries_list_by_reservation_order_and_reservation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_order_id** | **str**| Order Id of the reservation | 
 **reservation_id** | **str**| Id of the reservation | 
 **grain** | **str**| Can be daily or monthly | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-06-30. | 
 **filter** | **str**| Required only for daily grain. The properties/UsageDate for start date and end date. The filter supports &#39;le&#39; and  &#39;ge&#39; | [optional] 

### Return type

[**ReservationSummariesListResult**](ReservationSummariesListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

