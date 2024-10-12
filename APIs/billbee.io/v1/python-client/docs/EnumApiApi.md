# openapi_client.EnumApiApi

All URIs are relative to *https://app.billbee.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enum_api_get_order_states**](EnumApiApi.md#enum_api_get_order_states) | **GET** /api/v1/enums/orderstates | Returns a list with all defined orderstates
[**enum_api_get_payment_types**](EnumApiApi.md#enum_api_get_payment_types) | **GET** /api/v1/enums/paymenttypes | Returns a list with all defined paymenttypes
[**enum_api_get_shipment_types**](EnumApiApi.md#enum_api_get_shipment_types) | **GET** /api/v1/enums/shipmenttypes | Returns a list with all defined shipmenttypes
[**enum_api_get_shipping_carriers**](EnumApiApi.md#enum_api_get_shipping_carriers) | **GET** /api/v1/enums/shippingcarriers | Returns a list with all defined shippingcarriers


# **enum_api_get_order_states**
> object enum_api_get_order_states()

Returns a list with all defined orderstates

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EnumApiApi(api_client)

    try:
        # Returns a list with all defined orderstates
        api_response = api_instance.enum_api_get_order_states()
        print("The response of EnumApiApi->enum_api_get_order_states:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnumApiApi->enum_api_get_order_states: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enum_api_get_payment_types**
> object enum_api_get_payment_types()

Returns a list with all defined paymenttypes

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EnumApiApi(api_client)

    try:
        # Returns a list with all defined paymenttypes
        api_response = api_instance.enum_api_get_payment_types()
        print("The response of EnumApiApi->enum_api_get_payment_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnumApiApi->enum_api_get_payment_types: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enum_api_get_shipment_types**
> object enum_api_get_shipment_types()

Returns a list with all defined shipmenttypes

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EnumApiApi(api_client)

    try:
        # Returns a list with all defined shipmenttypes
        api_response = api_instance.enum_api_get_shipment_types()
        print("The response of EnumApiApi->enum_api_get_shipment_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnumApiApi->enum_api_get_shipment_types: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enum_api_get_shipping_carriers**
> object enum_api_get_shipping_carriers()

Returns a list with all defined shippingcarriers

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EnumApiApi(api_client)

    try:
        # Returns a list with all defined shippingcarriers
        api_response = api_instance.enum_api_get_shipping_carriers()
        print("The response of EnumApiApi->enum_api_get_shipping_carriers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnumApiApi->enum_api_get_shipping_carriers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

