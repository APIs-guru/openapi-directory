# openapi_client.ShipmentsApi

All URIs are relative to *https://app.billbee.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**shipment_get_list**](ShipmentsApi.md#shipment_get_list) | **GET** /api/v1/shipment/shipments | Get a list of all shipments optionally filtered by date. All parameters are optional.
[**shipment_get_ping**](ShipmentsApi.md#shipment_get_ping) | **GET** /api/v1/shipment/ping | 
[**shipment_get_shipping_carrier**](ShipmentsApi.md#shipment_get_shipping_carrier) | **GET** /api/v1/shipment/shippingcarriers | Queries the currently available shipping carriers.
[**shipment_get_shippingproviders**](ShipmentsApi.md#shipment_get_shippingproviders) | **GET** /api/v1/shipment/shippingproviders | Query all defined shipping providers
[**shipment_post_shipment**](ShipmentsApi.md#shipment_post_shipment) | **POST** /api/v1/shipment/shipment | Creates a new shipment with the selected Shippingprovider
[**shipment_ship_with_label**](ShipmentsApi.md#shipment_ship_with_label) | **POST** /api/v1/shipment/shipwithlabel | Creates a shipment for an order in billbee


# **shipment_get_list**
> RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment shipment_get_list(page=page, page_size=page_size, created_at_min=created_at_min, created_at_max=created_at_max, order_id=order_id, minimum_shipment_id=minimum_shipment_id, shipping_provider_id=shipping_provider_id)

Get a list of all shipments optionally filtered by date. All parameters are optional.

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_paged_result_system_collections_generic_list_billbee_interfaces_billbee_api_model_shipment import RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment
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
    api_instance = openapi_client.ShipmentsApi(api_client)
    page = 56 # int | Specifies the page to request. (optional)
    page_size = 56 # int | Specifies the pagesize. Defaults to 50, max value is 250 (optional)
    created_at_min = '2013-10-20T19:20:30+01:00' # datetime | Specifies the oldest shipment date to include in the response (optional)
    created_at_max = '2013-10-20T19:20:30+01:00' # datetime | Specifies the newest shipment date to include in the response (optional)
    order_id = 56 # int | Get shipments for this order only. (optional)
    minimum_shipment_id = 56 # int | Get Shipments with a shipment greater or equal than this id. New shipments have a greater id than older shipments. (optional)
    shipping_provider_id = 56 # int | Get Shippings for the specified shipping provider only. <seealso cref=\"M:Rechnungsdruck.WebApp.Controllers.Api.ShipmentController.GetShippingproviders\" /> (optional)

    try:
        # Get a list of all shipments optionally filtered by date. All parameters are optional.
        api_response = api_instance.shipment_get_list(page=page, page_size=page_size, created_at_min=created_at_min, created_at_max=created_at_max, order_id=order_id, minimum_shipment_id=minimum_shipment_id, shipping_provider_id=shipping_provider_id)
        print("The response of ShipmentsApi->shipment_get_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->shipment_get_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Specifies the page to request. | [optional] 
 **page_size** | **int**| Specifies the pagesize. Defaults to 50, max value is 250 | [optional] 
 **created_at_min** | **datetime**| Specifies the oldest shipment date to include in the response | [optional] 
 **created_at_max** | **datetime**| Specifies the newest shipment date to include in the response | [optional] 
 **order_id** | **int**| Get shipments for this order only. | [optional] 
 **minimum_shipment_id** | **int**| Get Shipments with a shipment greater or equal than this id. New shipments have a greater id than older shipments. | [optional] 
 **shipping_provider_id** | **int**| Get Shippings for the specified shipping provider only. &lt;seealso cref&#x3D;\&quot;M:Rechnungsdruck.WebApp.Controllers.Api.ShipmentController.GetShippingproviders\&quot; /&gt; | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment**](RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shipment_get_ping**
> object shipment_get_ping()



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
    api_instance = openapi_client.ShipmentsApi(api_client)

    try:
        api_response = api_instance.shipment_get_ping()
        print("The response of ShipmentsApi->shipment_get_ping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->shipment_get_ping: %s\n" % e)
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

# **shipment_get_shipping_carrier**
> object shipment_get_shipping_carrier()

Queries the currently available shipping carriers.

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
    api_instance = openapi_client.ShipmentsApi(api_client)

    try:
        # Queries the currently available shipping carriers.
        api_response = api_instance.shipment_get_shipping_carrier()
        print("The response of ShipmentsApi->shipment_get_shipping_carrier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->shipment_get_shipping_carrier: %s\n" % e)
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

# **shipment_get_shippingproviders**
> object shipment_get_shippingproviders()

Query all defined shipping providers

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
    api_instance = openapi_client.ShipmentsApi(api_client)

    try:
        # Query all defined shipping providers
        api_response = api_instance.shipment_get_shippingproviders()
        print("The response of ShipmentsApi->shipment_get_shippingproviders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->shipment_get_shippingproviders: %s\n" % e)
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

# **shipment_post_shipment**
> object shipment_post_shipment(billbee_interfaces_billbee_api_model_create_shipment_api_model)

Creates a new shipment with the selected Shippingprovider

### Example


```python
import openapi_client
from openapi_client.models.billbee_interfaces_billbee_api_model_create_shipment_api_model import BillbeeInterfacesBillbeeAPIModelCreateShipmentApiModel
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
    api_instance = openapi_client.ShipmentsApi(api_client)
    billbee_interfaces_billbee_api_model_create_shipment_api_model = openapi_client.BillbeeInterfacesBillbeeAPIModelCreateShipmentApiModel() # BillbeeInterfacesBillbeeAPIModelCreateShipmentApiModel | Data to specify shipment parameters

    try:
        # Creates a new shipment with the selected Shippingprovider
        api_response = api_instance.shipment_post_shipment(billbee_interfaces_billbee_api_model_create_shipment_api_model)
        print("The response of ShipmentsApi->shipment_post_shipment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->shipment_post_shipment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billbee_interfaces_billbee_api_model_create_shipment_api_model** | [**BillbeeInterfacesBillbeeAPIModelCreateShipmentApiModel**](BillbeeInterfacesBillbeeAPIModelCreateShipmentApiModel.md)| Data to specify shipment parameters | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shipment_ship_with_label**
> RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult shipment_ship_with_label(rechnungsdruck_web_app_controllers_api_shipment_with_label)

Creates a shipment for an order in billbee

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_rechnungsdruck_web_app_controllers_api_shipment_with_label_result import RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult
from openapi_client.models.rechnungsdruck_web_app_controllers_api_shipment_with_label import RechnungsdruckWebAppControllersApiShipmentWithLabel
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
    api_instance = openapi_client.ShipmentsApi(api_client)
    rechnungsdruck_web_app_controllers_api_shipment_with_label = openapi_client.RechnungsdruckWebAppControllersApiShipmentWithLabel() # RechnungsdruckWebAppControllersApiShipmentWithLabel | Details on the order and the shipping methods, that should be used.

    try:
        # Creates a shipment for an order in billbee
        api_response = api_instance.shipment_ship_with_label(rechnungsdruck_web_app_controllers_api_shipment_with_label)
        print("The response of ShipmentsApi->shipment_ship_with_label:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->shipment_ship_with_label: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rechnungsdruck_web_app_controllers_api_shipment_with_label** | [**RechnungsdruckWebAppControllersApiShipmentWithLabel**](RechnungsdruckWebAppControllersApiShipmentWithLabel.md)| Details on the order and the shipping methods, that should be used. | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult**](RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

