# openapi_client.Version3Api

All URIs are relative to *https://developer.walmart.com/orderProxy/order-api-doc-app/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledge_orders**](Version3Api.md#acknowledge_orders) | **POST** /v3/orders/{purchaseOrderId}/acknowledge | Acknowledge orders
[**cancel_order**](Version3Api.md#cancel_order) | **POST** /v3/orders/{purchaseOrderId}/cancel | Cancel order lines
[**get_all_orders**](Version3Api.md#get_all_orders) | **GET** /v3/orders | Get all orders
[**get_all_orders_next**](Version3Api.md#get_all_orders_next) | **GET** /v3/orders{nextCursor} | Get orders for next page
[**get_next_cursor_released_orders**](Version3Api.md#get_next_cursor_released_orders) | **GET** /v3/orders/released{nextCursor} | Get released orders for next page
[**get_order_by_purchase_order_id**](Version3Api.md#get_order_by_purchase_order_id) | **GET** /v3/orders/{purchaseOrderId} | Get an order
[**get_released_orders**](Version3Api.md#get_released_orders) | **GET** /v3/orders/released | Get all released orders
[**refund_order**](Version3Api.md#refund_order) | **POST** /v3/orders/{purchaseOrderId}/refund | Refund order lines
[**shipping_order**](Version3Api.md#shipping_order) | **POST** /v3/orders/{purchaseOrderId}/shipping | Shipping updates


# **acknowledge_orders**
> acknowledge_orders(purchase_order_id, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, ship_node=ship_node)

Acknowledge orders

You can acknowledge an entire order, including all of its order lines. Walmart business rules require to acknowledge orders within four hour of receipt of the order, except in extenuating circumstances.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.walmart.com/orderProxy/order-api-doc-app/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.walmart.com/orderProxy/order-api-doc-app/rest"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.Version3Api(api_client)
    purchase_order_id = 'purchase_order_id_example' # str | Purchase Order ID
    content_type = application/xml # str | application/xml, application/json (default to application/xml)
    accept = application/xml # str | application/xml, application/json (default to application/xml)
    wm_consumer_channel_type = SWAGGER_CHANNEL_TYPE # str | Channel Type (default to SWAGGER_CHANNEL_TYPE)
    wm_consumer_id = 'wm_consumer_id_example' # str | Your Consumer ID
    wm_sec_timestamp = 'Auto populated' # str | Epoch timestamp (default to 'Auto populated')
    wm_sec_auth_signature = 'Auto populated' # str | Authentication signature (default to 'Auto populated')
    wm_svc_name = 'Walmart Marketplace' # str | The Service name (default to 'Walmart Marketplace')
    wm_qos_correlation_id = '123456abcdef' # str | A Transaction ID (default to '123456abcdef')
    ship_node = 'ship_node_example' # str | Ship Node (optional)

    try:
        # Acknowledge orders
        api_instance.acknowledge_orders(purchase_order_id, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, ship_node=ship_node)
    except Exception as e:
        print("Exception when calling Version3Api->acknowledge_orders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchase_order_id** | **str**| Purchase Order ID | 
 **content_type** | **str**| application/xml, application/json | [default to application/xml]
 **accept** | **str**| application/xml, application/json | [default to application/xml]
 **wm_consumer_channel_type** | **str**| Channel Type | [default to SWAGGER_CHANNEL_TYPE]
 **wm_consumer_id** | **str**| Your Consumer ID | 
 **wm_sec_timestamp** | **str**| Epoch timestamp | [default to &#39;Auto populated&#39;]
 **wm_sec_auth_signature** | **str**| Authentication signature | [default to &#39;Auto populated&#39;]
 **wm_svc_name** | **str**| The Service name | [default to &#39;Walmart Marketplace&#39;]
 **wm_qos_correlation_id** | **str**| A Transaction ID | [default to &#39;123456abcdef&#39;]
 **ship_node** | **str**| Ship Node | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancel_order**
> cancel_order(purchase_order_id, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, request_body, ship_node=ship_node)

Cancel order lines

You can cancel one or more order lines. You must include a purchaseOrderLineNumber when cancelling an order. After cancelling your order, update the inventory for the cancelled order and send it in the next inventory feed.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.walmart.com/orderProxy/order-api-doc-app/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.walmart.com/orderProxy/order-api-doc-app/rest"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.Version3Api(api_client)
    purchase_order_id = 'purchase_order_id_example' # str | Purchase Order ID
    content_type = application/xml # str | application/xml, application/json (default to application/xml)
    accept = application/xml # str | application/xml, application/json (default to application/xml)
    wm_consumer_channel_type = SWAGGER_CHANNEL_TYPE # str | Channel Type (default to SWAGGER_CHANNEL_TYPE)
    wm_consumer_id = 'wm_consumer_id_example' # str | Your Consumer ID
    wm_sec_timestamp = 'Auto populated' # str | Epoch timestamp (default to 'Auto populated')
    wm_sec_auth_signature = 'Auto populated' # str | Authentication signature (default to 'Auto populated')
    wm_svc_name = 'Walmart Marketplace' # str | The Service name (default to 'Walmart Marketplace')
    wm_qos_correlation_id = '123456abcdef' # str | A Transaction ID (default to '123456abcdef')
    request_body = 'request_body_example' # str | Request body
    ship_node = 'ship_node_example' # str | Ship Node (optional)

    try:
        # Cancel order lines
        api_instance.cancel_order(purchase_order_id, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, request_body, ship_node=ship_node)
    except Exception as e:
        print("Exception when calling Version3Api->cancel_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchase_order_id** | **str**| Purchase Order ID | 
 **content_type** | **str**| application/xml, application/json | [default to application/xml]
 **accept** | **str**| application/xml, application/json | [default to application/xml]
 **wm_consumer_channel_type** | **str**| Channel Type | [default to SWAGGER_CHANNEL_TYPE]
 **wm_consumer_id** | **str**| Your Consumer ID | 
 **wm_sec_timestamp** | **str**| Epoch timestamp | [default to &#39;Auto populated&#39;]
 **wm_sec_auth_signature** | **str**| Authentication signature | [default to &#39;Auto populated&#39;]
 **wm_svc_name** | **str**| The Service name | [default to &#39;Walmart Marketplace&#39;]
 **wm_qos_correlation_id** | **str**| A Transaction ID | [default to &#39;123456abcdef&#39;]
 **request_body** | **str**| Request body | 
 **ship_node** | **str**| Ship Node | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_orders**
> get_all_orders(content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, ship_node=ship_node, sku=sku, customer_order_id=customer_order_id, purchase_order_id=purchase_order_id, status=status, created_start_date=created_start_date, created_end_date=created_end_date, from_expected_ship_date=from_expected_ship_date, to_expected_ship_date=to_expected_ship_date, limit=limit)

Get all orders

You can display a list of all orders with the query parameter filter criteria.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.walmart.com/orderProxy/order-api-doc-app/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.walmart.com/orderProxy/order-api-doc-app/rest"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.Version3Api(api_client)
    content_type = application/xml # str | application/xml, application/json (default to application/xml)
    accept = application/xml # str | application/xml, application/json (default to application/xml)
    wm_consumer_channel_type = SWAGGER_CHANNEL_TYPE # str | Channel Type (default to SWAGGER_CHANNEL_TYPE)
    wm_consumer_id = 'wm_consumer_id_example' # str | Your Consumer ID
    wm_sec_timestamp = 'Auto populated' # str | Epoch timestamp (default to 'Auto populated')
    wm_sec_auth_signature = 'Auto populated' # str | Authentication signature (default to 'Auto populated')
    wm_svc_name = 'Walmart Marketplace' # str | The Service name (default to 'Walmart Marketplace')
    wm_qos_correlation_id = '123456abcdef' # str | A Transaction ID (default to '123456abcdef')
    ship_node = 'ship_node_example' # str | Ship Node (optional)
    sku = 'sku_example' # str | Retrieves all orders with the specified SKU. (optional)
    customer_order_id = 'customer_order_id_example' # str | Retrives the details of the specified customerOrderId. (optional)
    purchase_order_id = 'purchase_order_id_example' # str | The purchase order ID associated with the order to retrieve. One customer order can have multiple purchase orders associated with it. (optional)
    status = 'status_example' # str | The list of orders corresponding to the requested status. (optional)
    created_start_date = 'created_start_date_example' # str | Limit orders to those created after this date or a timestamp. (optional)
    created_end_date = 'created_end_date_example' # str | Limit orders to those created before this date or timestamp. (optional)
    from_expected_ship_date = 'from_expected_ship_date_example' # str | Limit orders to those that have order lines with an expected ship date after this date. (optional)
    to_expected_ship_date = 'to_expected_ship_date_example' # str | Limit orders to those that have order lines with an expected ship date before this date.  (optional)
    limit = 10 # int | The number of orders to be returned. Do not set this parameter to over 200 orders. (optional) (default to 10)

    try:
        # Get all orders
        api_instance.get_all_orders(content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, ship_node=ship_node, sku=sku, customer_order_id=customer_order_id, purchase_order_id=purchase_order_id, status=status, created_start_date=created_start_date, created_end_date=created_end_date, from_expected_ship_date=from_expected_ship_date, to_expected_ship_date=to_expected_ship_date, limit=limit)
    except Exception as e:
        print("Exception when calling Version3Api->get_all_orders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| application/xml, application/json | [default to application/xml]
 **accept** | **str**| application/xml, application/json | [default to application/xml]
 **wm_consumer_channel_type** | **str**| Channel Type | [default to SWAGGER_CHANNEL_TYPE]
 **wm_consumer_id** | **str**| Your Consumer ID | 
 **wm_sec_timestamp** | **str**| Epoch timestamp | [default to &#39;Auto populated&#39;]
 **wm_sec_auth_signature** | **str**| Authentication signature | [default to &#39;Auto populated&#39;]
 **wm_svc_name** | **str**| The Service name | [default to &#39;Walmart Marketplace&#39;]
 **wm_qos_correlation_id** | **str**| A Transaction ID | [default to &#39;123456abcdef&#39;]
 **ship_node** | **str**| Ship Node | [optional] 
 **sku** | **str**| Retrieves all orders with the specified SKU. | [optional] 
 **customer_order_id** | **str**| Retrives the details of the specified customerOrderId. | [optional] 
 **purchase_order_id** | **str**| The purchase order ID associated with the order to retrieve. One customer order can have multiple purchase orders associated with it. | [optional] 
 **status** | **str**| The list of orders corresponding to the requested status. | [optional] 
 **created_start_date** | **str**| Limit orders to those created after this date or a timestamp. | [optional] 
 **created_end_date** | **str**| Limit orders to those created before this date or timestamp. | [optional] 
 **from_expected_ship_date** | **str**| Limit orders to those that have order lines with an expected ship date after this date. | [optional] 
 **to_expected_ship_date** | **str**| Limit orders to those that have order lines with an expected ship date before this date.  | [optional] 
 **limit** | **int**| The number of orders to be returned. Do not set this parameter to over 200 orders. | [optional] [default to 10]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_orders_next**
> get_all_orders_next(next_cursor, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id)

Get orders for next page

You can display a list of all orders with nextCursor path parameter pagination criteria.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.walmart.com/orderProxy/order-api-doc-app/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.walmart.com/orderProxy/order-api-doc-app/rest"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.Version3Api(api_client)
    next_cursor = 'next_cursor_example' # str | Used for pagination when there are more than 200 orders to retrieve. The nextCursor value of the returned response includes a link to another GET call to retrieve the next page. Copy the link and paste it in the next call.
    content_type = application/xml # str | application/xml, application/json (default to application/xml)
    accept = application/xml # str | application/xml, application/json (default to application/xml)
    wm_consumer_channel_type = SWAGGER_CHANNEL_TYPE # str | Channel Type (default to SWAGGER_CHANNEL_TYPE)
    wm_consumer_id = 'wm_consumer_id_example' # str | Your Consumer ID
    wm_sec_timestamp = 'Auto populated' # str | Epoch timestamp (default to 'Auto populated')
    wm_sec_auth_signature = 'Auto populated' # str | Authentication signature (default to 'Auto populated')
    wm_svc_name = 'Walmart Marketplace' # str | The Service name (default to 'Walmart Marketplace')
    wm_qos_correlation_id = '123456abcdef' # str | A Transaction ID (default to '123456abcdef')

    try:
        # Get orders for next page
        api_instance.get_all_orders_next(next_cursor, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id)
    except Exception as e:
        print("Exception when calling Version3Api->get_all_orders_next: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **next_cursor** | **str**| Used for pagination when there are more than 200 orders to retrieve. The nextCursor value of the returned response includes a link to another GET call to retrieve the next page. Copy the link and paste it in the next call. | 
 **content_type** | **str**| application/xml, application/json | [default to application/xml]
 **accept** | **str**| application/xml, application/json | [default to application/xml]
 **wm_consumer_channel_type** | **str**| Channel Type | [default to SWAGGER_CHANNEL_TYPE]
 **wm_consumer_id** | **str**| Your Consumer ID | 
 **wm_sec_timestamp** | **str**| Epoch timestamp | [default to &#39;Auto populated&#39;]
 **wm_sec_auth_signature** | **str**| Authentication signature | [default to &#39;Auto populated&#39;]
 **wm_svc_name** | **str**| The Service name | [default to &#39;Walmart Marketplace&#39;]
 **wm_qos_correlation_id** | **str**| A Transaction ID | [default to &#39;123456abcdef&#39;]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_next_cursor_released_orders**
> get_next_cursor_released_orders(next_cursor, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id)

Get released orders for next page

You can display all released orders that have been created and are ready for fulfilment with nextCursor path parameter.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.walmart.com/orderProxy/order-api-doc-app/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.walmart.com/orderProxy/order-api-doc-app/rest"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.Version3Api(api_client)
    next_cursor = 'next_cursor_example' # str | Used for pagination when there are more than 200 orders to retrieve. The nextCursor value of the returned response includes a link to another GET call to retrieve the next page. Copy the link and paste it in the next call.
    content_type = application/xml # str | application/xml, application/json (default to application/xml)
    accept = application/xml # str | application/xml, application/json (default to application/xml)
    wm_consumer_channel_type = SWAGGER_CHANNEL_TYPE # str | Channel Type (default to SWAGGER_CHANNEL_TYPE)
    wm_consumer_id = 'wm_consumer_id_example' # str | Your Consumer ID
    wm_sec_timestamp = 'Auto populated' # str | Epoch timestamp (default to 'Auto populated')
    wm_sec_auth_signature = 'Auto populated' # str | Authentication signature (default to 'Auto populated')
    wm_svc_name = 'Walmart Marketplace' # str | The Service name (default to 'Walmart Marketplace')
    wm_qos_correlation_id = '123456abcdef' # str | A Transaction ID (default to '123456abcdef')

    try:
        # Get released orders for next page
        api_instance.get_next_cursor_released_orders(next_cursor, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id)
    except Exception as e:
        print("Exception when calling Version3Api->get_next_cursor_released_orders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **next_cursor** | **str**| Used for pagination when there are more than 200 orders to retrieve. The nextCursor value of the returned response includes a link to another GET call to retrieve the next page. Copy the link and paste it in the next call. | 
 **content_type** | **str**| application/xml, application/json | [default to application/xml]
 **accept** | **str**| application/xml, application/json | [default to application/xml]
 **wm_consumer_channel_type** | **str**| Channel Type | [default to SWAGGER_CHANNEL_TYPE]
 **wm_consumer_id** | **str**| Your Consumer ID | 
 **wm_sec_timestamp** | **str**| Epoch timestamp | [default to &#39;Auto populated&#39;]
 **wm_sec_auth_signature** | **str**| Authentication signature | [default to &#39;Auto populated&#39;]
 **wm_svc_name** | **str**| The Service name | [default to &#39;Walmart Marketplace&#39;]
 **wm_qos_correlation_id** | **str**| A Transaction ID | [default to &#39;123456abcdef&#39;]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_order_by_purchase_order_id**
> get_order_by_purchase_order_id(purchase_order_id, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, ship_node=ship_node)

Get an order

You can display details of a specific order based on the purchaseOrderId.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.walmart.com/orderProxy/order-api-doc-app/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.walmart.com/orderProxy/order-api-doc-app/rest"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.Version3Api(api_client)
    purchase_order_id = 'purchase_order_id_example' # str | Purchase Order ID
    content_type = application/xml # str | application/xml, application/json (default to application/xml)
    accept = application/xml # str | application/xml, application/json (default to application/xml)
    wm_consumer_channel_type = SWAGGER_CHANNEL_TYPE # str | Channel Type (default to SWAGGER_CHANNEL_TYPE)
    wm_consumer_id = 'wm_consumer_id_example' # str | Your Consumer ID
    wm_sec_timestamp = 'Auto populated' # str | Epoch timestamp (default to 'Auto populated')
    wm_sec_auth_signature = 'Auto populated' # str | Authentication signature (default to 'Auto populated')
    wm_svc_name = 'Walmart Marketplace' # str | The Service name (default to 'Walmart Marketplace')
    wm_qos_correlation_id = '123456abcdef' # str | A Transaction ID (default to '123456abcdef')
    ship_node = 'ship_node_example' # str | Ship Node (optional)

    try:
        # Get an order
        api_instance.get_order_by_purchase_order_id(purchase_order_id, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, ship_node=ship_node)
    except Exception as e:
        print("Exception when calling Version3Api->get_order_by_purchase_order_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchase_order_id** | **str**| Purchase Order ID | 
 **content_type** | **str**| application/xml, application/json | [default to application/xml]
 **accept** | **str**| application/xml, application/json | [default to application/xml]
 **wm_consumer_channel_type** | **str**| Channel Type | [default to SWAGGER_CHANNEL_TYPE]
 **wm_consumer_id** | **str**| Your Consumer ID | 
 **wm_sec_timestamp** | **str**| Epoch timestamp | [default to &#39;Auto populated&#39;]
 **wm_sec_auth_signature** | **str**| Authentication signature | [default to &#39;Auto populated&#39;]
 **wm_svc_name** | **str**| The Service name | [default to &#39;Walmart Marketplace&#39;]
 **wm_qos_correlation_id** | **str**| A Transaction ID | [default to &#39;123456abcdef&#39;]
 **ship_node** | **str**| Ship Node | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_released_orders**
> get_released_orders(created_start_date, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, ship_node=ship_node, limit=limit)

Get all released orders

You can display all released orders that have been created and are ready for fulfilment.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.walmart.com/orderProxy/order-api-doc-app/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.walmart.com/orderProxy/order-api-doc-app/rest"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.Version3Api(api_client)
    created_start_date = 'created_start_date_example' # str | Limit orders to those created after this date or a timestamp.
    content_type = application/xml # str | application/xml, application/json (default to application/xml)
    accept = application/xml # str | application/xml, application/json (default to application/xml)
    wm_consumer_channel_type = SWAGGER_CHANNEL_TYPE # str | Channel Type (default to SWAGGER_CHANNEL_TYPE)
    wm_consumer_id = 'wm_consumer_id_example' # str | Your Consumer ID
    wm_sec_timestamp = 'Auto populated' # str | Epoch timestamp (default to 'Auto populated')
    wm_sec_auth_signature = 'Auto populated' # str | Authentication signature (default to 'Auto populated')
    wm_svc_name = 'Walmart Marketplace' # str | The Service name (default to 'Walmart Marketplace')
    wm_qos_correlation_id = '123456abcdef' # str | A Transaction ID (default to '123456abcdef')
    ship_node = 'ship_node_example' # str | Ship Node (optional)
    limit = 56 # int | The number of orders to be returned. Do not set this parameter to over 200 orders. (optional)

    try:
        # Get all released orders
        api_instance.get_released_orders(created_start_date, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, ship_node=ship_node, limit=limit)
    except Exception as e:
        print("Exception when calling Version3Api->get_released_orders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **created_start_date** | **str**| Limit orders to those created after this date or a timestamp. | 
 **content_type** | **str**| application/xml, application/json | [default to application/xml]
 **accept** | **str**| application/xml, application/json | [default to application/xml]
 **wm_consumer_channel_type** | **str**| Channel Type | [default to SWAGGER_CHANNEL_TYPE]
 **wm_consumer_id** | **str**| Your Consumer ID | 
 **wm_sec_timestamp** | **str**| Epoch timestamp | [default to &#39;Auto populated&#39;]
 **wm_sec_auth_signature** | **str**| Authentication signature | [default to &#39;Auto populated&#39;]
 **wm_svc_name** | **str**| The Service name | [default to &#39;Walmart Marketplace&#39;]
 **wm_qos_correlation_id** | **str**| A Transaction ID | [default to &#39;123456abcdef&#39;]
 **ship_node** | **str**| Ship Node | [optional] 
 **limit** | **int**| The number of orders to be returned. Do not set this parameter to over 200 orders. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refund_order**
> refund_order(purchase_order_id, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, request_body, ship_node=ship_node)

Refund order lines

You can refund one or more order lines that have been shipped. The response to a successful call contains the order with the refunded line item.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.walmart.com/orderProxy/order-api-doc-app/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.walmart.com/orderProxy/order-api-doc-app/rest"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.Version3Api(api_client)
    purchase_order_id = 'purchase_order_id_example' # str | Purchase Order ID
    content_type = application/xml # str | application/xml, application/json (default to application/xml)
    accept = application/xml # str | application/xml, application/json (default to application/xml)
    wm_consumer_channel_type = SWAGGER_CHANNEL_TYPE # str | Channel Type (default to SWAGGER_CHANNEL_TYPE)
    wm_consumer_id = 'wm_consumer_id_example' # str | Your Consumer ID
    wm_sec_timestamp = 'Auto populated' # str | Epoch timestamp (default to 'Auto populated')
    wm_sec_auth_signature = 'Auto populated' # str | Authentication signature (default to 'Auto populated')
    wm_svc_name = 'Walmart Marketplace' # str | The Service name (default to 'Walmart Marketplace')
    wm_qos_correlation_id = '123456abcdef' # str | A Transaction ID (default to '123456abcdef')
    request_body = 'request_body_example' # str | Request body
    ship_node = 'ship_node_example' # str | Ship Node (optional)

    try:
        # Refund order lines
        api_instance.refund_order(purchase_order_id, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, request_body, ship_node=ship_node)
    except Exception as e:
        print("Exception when calling Version3Api->refund_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchase_order_id** | **str**| Purchase Order ID | 
 **content_type** | **str**| application/xml, application/json | [default to application/xml]
 **accept** | **str**| application/xml, application/json | [default to application/xml]
 **wm_consumer_channel_type** | **str**| Channel Type | [default to SWAGGER_CHANNEL_TYPE]
 **wm_consumer_id** | **str**| Your Consumer ID | 
 **wm_sec_timestamp** | **str**| Epoch timestamp | [default to &#39;Auto populated&#39;]
 **wm_sec_auth_signature** | **str**| Authentication signature | [default to &#39;Auto populated&#39;]
 **wm_svc_name** | **str**| The Service name | [default to &#39;Walmart Marketplace&#39;]
 **wm_qos_correlation_id** | **str**| A Transaction ID | [default to &#39;123456abcdef&#39;]
 **request_body** | **str**| Request body | 
 **ship_node** | **str**| Ship Node | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shipping_order**
> shipping_order(purchase_order_id, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, request_body, ship_node=ship_node)

Shipping updates

You can change the status of order lines to \"Shipped\" and trigger the charge to a customer. You must acknowledge your orders before sending a shipping update to avoid underselling. An order line, once marked as shipped, cannot be updated.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.walmart.com/orderProxy/order-api-doc-app/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.walmart.com/orderProxy/order-api-doc-app/rest"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.Version3Api(api_client)
    purchase_order_id = 'purchase_order_id_example' # str | Purchase Order ID
    content_type = application/xml # str | application/xml, application/json (default to application/xml)
    accept = application/xml # str | application/xml, application/json (default to application/xml)
    wm_consumer_channel_type = SWAGGER_CHANNEL_TYPE # str | Channel Type (default to SWAGGER_CHANNEL_TYPE)
    wm_consumer_id = 'wm_consumer_id_example' # str | Your Consumer ID
    wm_sec_timestamp = 'Auto populated' # str | Epoch timestamp (default to 'Auto populated')
    wm_sec_auth_signature = 'Auto populated' # str | Authentication signature (default to 'Auto populated')
    wm_svc_name = 'Walmart Marketplace' # str | The Service name (default to 'Walmart Marketplace')
    wm_qos_correlation_id = '123456abcdef' # str | A Transaction ID (default to '123456abcdef')
    request_body = 'request_body_example' # str | Request body
    ship_node = 'ship_node_example' # str | Ship Node (optional)

    try:
        # Shipping updates
        api_instance.shipping_order(purchase_order_id, content_type, accept, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, request_body, ship_node=ship_node)
    except Exception as e:
        print("Exception when calling Version3Api->shipping_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchase_order_id** | **str**| Purchase Order ID | 
 **content_type** | **str**| application/xml, application/json | [default to application/xml]
 **accept** | **str**| application/xml, application/json | [default to application/xml]
 **wm_consumer_channel_type** | **str**| Channel Type | [default to SWAGGER_CHANNEL_TYPE]
 **wm_consumer_id** | **str**| Your Consumer ID | 
 **wm_sec_timestamp** | **str**| Epoch timestamp | [default to &#39;Auto populated&#39;]
 **wm_sec_auth_signature** | **str**| Authentication signature | [default to &#39;Auto populated&#39;]
 **wm_svc_name** | **str**| The Service name | [default to &#39;Walmart Marketplace&#39;]
 **wm_qos_correlation_id** | **str**| A Transaction ID | [default to &#39;123456abcdef&#39;]
 **request_body** | **str**| Request body | 
 **ship_node** | **str**| Ship Node | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

