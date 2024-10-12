# openapi_client.CargoApi

All URIs are relative to *https://api.lufthansa.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cargo_get_route_from_date_product_code_by_origin_and_destination_get**](CargoApi.md#cargo_get_route_from_date_product_code_by_origin_and_destination_get) | **GET** /cargo/getRoute/{origin}-{destination}/{fromDate}/{productCode} | Retrieve all flights
[**cargo_shipment_tracking_by_awb_prefix_and_awb_number_get**](CargoApi.md#cargo_shipment_tracking_by_awb_prefix_and_awb_number_get) | **GET** /cargo/shipmentTracking/{aWBPrefix}-{aWBNumber} | Shipment Tracking


# **cargo_get_route_from_date_product_code_by_origin_and_destination_get**
> object cargo_get_route_from_date_product_code_by_origin_and_destination_get(origin, destination, from_date, product_code, accept)

Retrieve all flights

Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CargoApi(api_client)
    origin = 'origin_example' # str | Departure Airport : 3-letter IATA airport code, e.g. FRA.
    destination = 'destination_example' # str | Arrival airport : 3-letter IATA airport code, e.g. HKG.
    from_date = 'from_date_example' # str | Departure date in the local time of the departure airport. Based on LAT (Latest Acceptance Time). format : yyyy-MM-dd eg : 2017-07-15
    product_code = 'product_code_example' # str | Product code for requested service and specials : 3-letter eg: YNZ
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")

    try:
        # Retrieve all flights
        api_response = api_instance.cargo_get_route_from_date_product_code_by_origin_and_destination_get(origin, destination, from_date, product_code, accept)
        print("The response of CargoApi->cargo_get_route_from_date_product_code_by_origin_and_destination_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CargoApi->cargo_get_route_from_date_product_code_by_origin_and_destination_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **origin** | **str**| Departure Airport : 3-letter IATA airport code, e.g. FRA. | 
 **destination** | **str**| Arrival airport : 3-letter IATA airport code, e.g. HKG. | 
 **from_date** | **str**| Departure date in the local time of the departure airport. Based on LAT (Latest Acceptance Time). format : yyyy-MM-dd eg : 2017-07-15 | 
 **product_code** | **str**| Product code for requested service and specials : 3-letter eg: YNZ | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 

### Return type

**object**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cargo_shipment_tracking_by_awb_prefix_and_awb_number_get**
> object cargo_shipment_tracking_by_awb_prefix_and_awb_number_get(a_wb_prefix, a_wb_number, accept)

Shipment Tracking

With this tracking service you can easily retrieve your shipment or flight status information.

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CargoApi(api_client)
    a_wb_prefix = 'a_wb_prefix_example' # str | aWBPrefix : Represents the airline that is the owner of this AWB, i.e. \"020\" = Lufthansa Cargo, format : [0-9]{3} e.g. 020
    a_wb_number = 'a_wb_number_example' # str | aWBNumber : The Air Waybill Number , format : [0-9]{8} e.g. 08002050
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")

    try:
        # Shipment Tracking
        api_response = api_instance.cargo_shipment_tracking_by_awb_prefix_and_awb_number_get(a_wb_prefix, a_wb_number, accept)
        print("The response of CargoApi->cargo_shipment_tracking_by_awb_prefix_and_awb_number_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CargoApi->cargo_shipment_tracking_by_awb_prefix_and_awb_number_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **a_wb_prefix** | **str**| aWBPrefix : Represents the airline that is the owner of this AWB, i.e. \&quot;020\&quot; &#x3D; Lufthansa Cargo, format : [0-9]{3} e.g. 020 | 
 **a_wb_number** | **str**| aWBNumber : The Air Waybill Number , format : [0-9]{8} e.g. 08002050 | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 

### Return type

**object**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

