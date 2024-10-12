# openapi_client.OrderApi

All URIs are relative to *https://api.brandlovers.com/marketplace/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**order_order_id_get**](OrderApi.md#order_order_id_get) | **GET** /order/{orderId} | Returns all details of a order
[**order_order_id_shipment_cancel_post**](OrderApi.md#order_order_id_shipment_cancel_post) | **POST** /order/{orderId}/shipment/cancel | Confirm shipment canceletion (when requested by the customer) or failure to deliver
[**order_order_id_shipment_delivered_post**](OrderApi.md#order_order_id_shipment_delivered_post) | **POST** /order/{orderId}/shipment/delivered | Confirms that a shipment was delivered
[**order_order_id_shipment_exchange_post**](OrderApi.md#order_order_id_shipment_exchange_post) | **POST** /order/{orderId}/shipment/exchange | Confirm item exchange
[**order_order_id_shipment_return_post**](OrderApi.md#order_order_id_shipment_return_post) | **POST** /order/{orderId}/shipment/return | Confirm order item return and refund
[**order_order_id_shipment_sent_post**](OrderApi.md#order_order_id_shipment_sent_post) | **POST** /order/{orderId}/shipment/sent | Update new order to include shipment information


# **order_order_id_get**
> Order order_order_id_get(authorization, order_id)

Returns all details of a order

Returns all details of a single order, including last status, items shipped or not.

### Example


```python
import openapi_client
from openapi_client.models.order import Order
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.brandlovers.com/marketplace/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.brandlovers.com/marketplace/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    order_id = 'order_id_example' # str | Unique Id of this order.

    try:
        # Returns all details of a order
        api_response = api_instance.order_order_id_get(authorization, order_id)
        print("The response of OrderApi->order_order_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_order_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **order_id** | **str**| Unique Id of this order. | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |
**400** | Bad request. |  -  |
**401** | Access denied. You&#39;re not authenticated or token expired. Check your request header the &#x60;authorization&#x60; field is required. |  -  |
**403** | Server refused to process your request. Please check the API SLA and reduce number of requests per second. |  -  |
**404** | Object not found. Was not able to find orderId |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_order_id_shipment_cancel_post**
> order_order_id_shipment_cancel_post(authorization, order_id, body)

Confirm shipment canceletion (when requested by the customer) or failure to deliver

Confirm shipment canceletion (when requested by the customer) or failure to deliver one shipment

### Example


```python
import openapi_client
from openapi_client.models.new_tracking_refund import NewTrackingRefund
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.brandlovers.com/marketplace/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.brandlovers.com/marketplace/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    order_id = 'order_id_example' # str | Unique Order Id
    body = openapi_client.NewTrackingRefund() # NewTrackingRefund | 

    try:
        # Confirm shipment canceletion (when requested by the customer) or failure to deliver
        api_instance.order_order_id_shipment_cancel_post(authorization, order_id, body)
    except Exception as e:
        print("Exception when calling OrderApi->order_order_id_shipment_cancel_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **order_id** | **str**| Unique Order Id | 
 **body** | [**NewTrackingRefund**](NewTrackingRefund.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success. |  -  |
**400** | Bad request. |  -  |
**401** | Access denied. You&#39;re not authenticated or token expired. Check your request header the &#x60;authorization&#x60; field is required. |  -  |
**404** | Object not found. Was not able to find orderId |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_order_id_shipment_delivered_post**
> order_order_id_shipment_delivered_post(authorization, order_id, body)

Confirms that a shipment was delivered

Confirms that a shipment was delivered. Must inform quantity of successfully deliverd items even if items deliverd was less than the original order

### Example


```python
import openapi_client
from openapi_client.models.newshipmentstatus import Newshipmentstatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.brandlovers.com/marketplace/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.brandlovers.com/marketplace/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    order_id = 'order_id_example' # str | Unique Order Id
    body = openapi_client.Newshipmentstatus() # Newshipmentstatus | 

    try:
        # Confirms that a shipment was delivered
        api_instance.order_order_id_shipment_delivered_post(authorization, order_id, body)
    except Exception as e:
        print("Exception when calling OrderApi->order_order_id_shipment_delivered_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **order_id** | **str**| Unique Order Id | 
 **body** | [**Newshipmentstatus**](Newshipmentstatus.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucess! |  -  |
**400** | Bad request. |  -  |
**401** | Access denied. You&#39;re not authenticated or token expired. Check your request header the &#x60;authorization&#x60; field is required. |  -  |
**404** | Object not found. Was not able to find orderId |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_order_id_shipment_exchange_post**
> order_order_id_shipment_exchange_post(authorization, order_id, body)

Confirm item exchange

This enpoint to confirm item exchange when failure to deliver or requested by the customer. All customer requests are tracket via trouble tickets

### Example


```python
import openapi_client
from openapi_client.models.new_tracking_refund import NewTrackingRefund
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.brandlovers.com/marketplace/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.brandlovers.com/marketplace/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    order_id = 'order_id_example' # str | Unique Order Id
    body = openapi_client.NewTrackingRefund() # NewTrackingRefund | 

    try:
        # Confirm item exchange
        api_instance.order_order_id_shipment_exchange_post(authorization, order_id, body)
    except Exception as e:
        print("Exception when calling OrderApi->order_order_id_shipment_exchange_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **order_id** | **str**| Unique Order Id | 
 **body** | [**NewTrackingRefund**](NewTrackingRefund.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucess! |  -  |
**400** | Bad request. |  -  |
**401** | Access denied. You&#39;re not authenticated or token expired. Check your request header the &#x60;authorization&#x60; field is required. |  -  |
**404** | Object not found. Was not able to find orderId |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_order_id_shipment_return_post**
> order_order_id_shipment_return_post(authorization, order_id, body)

Confirm order item return and refund

Use this endpoint to return and refund items froma a order. In order to fully return an order list all items and applicate quantity.

### Example


```python
import openapi_client
from openapi_client.models.new_tracking_refund import NewTrackingRefund
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.brandlovers.com/marketplace/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.brandlovers.com/marketplace/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    order_id = 'order_id_example' # str | Order unique Id
    body = openapi_client.NewTrackingRefund() # NewTrackingRefund | 

    try:
        # Confirm order item return and refund
        api_instance.order_order_id_shipment_return_post(authorization, order_id, body)
    except Exception as e:
        print("Exception when calling OrderApi->order_order_id_shipment_return_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **order_id** | **str**| Order unique Id | 
 **body** | [**NewTrackingRefund**](NewTrackingRefund.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucess! |  -  |
**400** | Bad request. |  -  |
**401** | Access denied. You&#39;re not authenticated or token expired. Check your request header the &#x60;authorization&#x60; field is required. |  -  |
**404** | Object not found. Was not able to find orderId |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_order_id_shipment_sent_post**
> order_order_id_shipment_sent_post(authorization, order_id, body)

Update new order to include shipment information

Updates order to include shipment shiped information. This endpoint can be used to include a single or multiple shipments for any give order. In order to inform that all items of a order where shipped list all of them, including applicable quantities in the payload.

### Example


```python
import openapi_client
from openapi_client.models.newshipmentstatus import Newshipmentstatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.brandlovers.com/marketplace/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.brandlovers.com/marketplace/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    order_id = 'order_id_example' # str | Unique Order Id
    body = openapi_client.Newshipmentstatus() # Newshipmentstatus | 

    try:
        # Update new order to include shipment information
        api_instance.order_order_id_shipment_sent_post(authorization, order_id, body)
    except Exception as e:
        print("Exception when calling OrderApi->order_order_id_shipment_sent_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **order_id** | **str**| Unique Order Id | 
 **body** | [**Newshipmentstatus**](Newshipmentstatus.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sucess! |  -  |
**400** | Bad request. |  -  |
**401** | Access denied. You&#39;re not authenticated or token expired. Check your request header the &#x60;authorization&#x60; field is required. |  -  |
**404** | Object not found. Was not able to find orderId |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

