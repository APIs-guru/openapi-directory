# openapi_client.PackagePickupsApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_scheduled_pickup**](PackagePickupsApi.md#delete_scheduled_pickup) | **DELETE** /v1/pickups/{pickup_id} | Delete a Scheduled Pickup
[**get_pickup_by_id**](PackagePickupsApi.md#get_pickup_by_id) | **GET** /v1/pickups/{pickup_id} | Get Pickup By ID
[**list_scheduled_pickups**](PackagePickupsApi.md#list_scheduled_pickups) | **GET** /v1/pickups | List Scheduled Pickups
[**schedule_pickup**](PackagePickupsApi.md#schedule_pickup) | **POST** /v1/pickups | Schedule a Pickup


# **delete_scheduled_pickup**
> DeletePickupByIdResponseBody delete_scheduled_pickup(pickup_id)

Delete a Scheduled Pickup

Delete a previously-scheduled pickup by ID

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.delete_pickup_by_id_response_body import DeletePickupByIdResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PackagePickupsApi(api_client)
    pickup_id = 'pickup_id_example' # str | 

    try:
        # Delete a Scheduled Pickup
        api_response = api_instance.delete_scheduled_pickup(pickup_id)
        print("The response of PackagePickupsApi->delete_scheduled_pickup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackagePickupsApi->delete_scheduled_pickup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickup_id** | **str**|  | 

### Return type

[**DeletePickupByIdResponseBody**](DeletePickupByIdResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the &#x60;pickup_id&#x60; of the scheduled pickup that was successfully deleted  |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pickup_by_id**
> GetPickupByIdResponseBody get_pickup_by_id(pickup_id)

Get Pickup By ID

Get Pickup By ID

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_pickup_by_id_response_body import GetPickupByIdResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PackagePickupsApi(api_client)
    pickup_id = 'pickup_id_example' # str | 

    try:
        # Get Pickup By ID
        api_response = api_instance.get_pickup_by_id(pickup_id)
        print("The response of PackagePickupsApi->get_pickup_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackagePickupsApi->get_pickup_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickup_id** | **str**|  | 

### Return type

[**GetPickupByIdResponseBody**](GetPickupByIdResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_scheduled_pickups**
> GetPickupsResponseBody list_scheduled_pickups(carrier_id=carrier_id, warehouse_id=warehouse_id, created_at_start=created_at_start, created_at_end=created_at_end, page=page, page_size=page_size)

List Scheduled Pickups

List all pickups that have been scheduled for this carrier

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_pickups_response_body import GetPickupsResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PackagePickupsApi(api_client)
    carrier_id = 'carrier_id_example' # str | Carrier ID (optional)
    warehouse_id = 'warehouse_id_example' # str | Warehouse ID (optional)
    created_at_start = '2019-03-12T19:24:13.657Z' # datetime | Only return scheduled pickups that were created on or after a specific date/time (optional)
    created_at_end = '2019-03-12T19:24:13.657Z' # datetime | Only return scheduled pickups that were created on or before a specific date/time (optional)
    page = 1 # int | Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.  (optional) (default to 1)
    page_size = 25 # int | The number of results to return per response. (optional) (default to 25)

    try:
        # List Scheduled Pickups
        api_response = api_instance.list_scheduled_pickups(carrier_id=carrier_id, warehouse_id=warehouse_id, created_at_start=created_at_start, created_at_end=created_at_end, page=page, page_size=page_size)
        print("The response of PackagePickupsApi->list_scheduled_pickups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackagePickupsApi->list_scheduled_pickups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_id** | **str**| Carrier ID | [optional] 
 **warehouse_id** | **str**| Warehouse ID | [optional] 
 **created_at_start** | **datetime**| Only return scheduled pickups that were created on or after a specific date/time | [optional] 
 **created_at_end** | **datetime**| Only return scheduled pickups that were created on or before a specific date/time | [optional] 
 **page** | **int**| Return a specific page of results. Defaults to the first page. If set to a number that&#39;s greater than the number of pages of results, an empty page is returned.  | [optional] [default to 1]
 **page_size** | **int**| The number of results to return per response. | [optional] [default to 25]

### Return type

[**GetPickupsResponseBody**](GetPickupsResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_pickup**
> SchedulePickupResponseBody schedule_pickup(schedule_pickup_request_body)

Schedule a Pickup

Schedule a package pickup with a carrier

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.schedule_pickup_request_body import SchedulePickupRequestBody
from openapi_client.models.schedule_pickup_response_body import SchedulePickupResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PackagePickupsApi(api_client)
    schedule_pickup_request_body = openapi_client.SchedulePickupRequestBody() # SchedulePickupRequestBody | 

    try:
        # Schedule a Pickup
        api_response = api_instance.schedule_pickup(schedule_pickup_request_body)
        print("The response of PackagePickupsApi->schedule_pickup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackagePickupsApi->schedule_pickup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule_pickup_request_body** | [**SchedulePickupRequestBody**](SchedulePickupRequestBody.md)|  | 

### Return type

[**SchedulePickupResponseBody**](SchedulePickupResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

