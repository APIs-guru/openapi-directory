# openapi_client.OrdersApi

All URIs are relative to *https://api.brandlovers.com/marketplace/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orders_get**](OrdersApi.md#orders_get) | **GET** /orders | Returns orders details
[**orders_shipments_delivered_get**](OrdersApi.md#orders_shipments_delivered_get) | **GET** /orders/shipments/delivered | Returns list of shipments
[**orders_shipments_delivered_post**](OrdersApi.md#orders_shipments_delivered_post) | **POST** /orders/shipments/delivered | Bulk update of order shipments
[**orders_shipments_shipped_get**](OrdersApi.md#orders_shipments_shipped_get) | **GET** /orders/shipments/shipped | Returns a list of shipments shipped
[**orders_shipments_shipped_post**](OrdersApi.md#orders_shipments_shipped_post) | **POST** /orders/shipments/shipped | Bulk update of order shipments
[**orders_status_approved_get**](OrdersApi.md#orders_status_approved_get) | **GET** /orders/status/approved | Return list of approved orders
[**orders_status_canceled_get**](OrdersApi.md#orders_status_canceled_get) | **GET** /orders/status/canceled | Returns lists of canceled orders
[**orders_status_delivered_get**](OrdersApi.md#orders_status_delivered_get) | **GET** /orders/status/delivered | Returns a list of orders successfully delivered associated with this seller.
[**orders_status_new_get**](OrdersApi.md#orders_status_new_get) | **GET** /orders/status/new | Returns a list of orders flagged as new.
[**orders_status_partially_delivered_get**](OrdersApi.md#orders_status_partially_delivered_get) | **GET** /orders/status/partiallyDelivered | Returns a list of partially deliverd orders
[**orders_status_partially_sent_get**](OrdersApi.md#orders_status_partially_sent_get) | **GET** /orders/status/partiallySent | Returns a list of orders partially fullfiled
[**orders_status_sent_get**](OrdersApi.md#orders_status_sent_get) | **GET** /orders/status/sent | Returns a list with orders fully sent


# **orders_get**
> GetOrders orders_get(authorization, offset=offset, limit=limit)

Returns orders details

Retuns a list of orders associated with this seller. The list is ordered by dateCreated.

### Example


```python
import openapi_client
from openapi_client.models.get_orders import GetOrders
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
    api_instance = openapi_client.OrdersApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 56 # int | Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results. (optional)

    try:
        # Returns orders details
        api_response = api_instance.orders_get(authorization, offset=offset, limit=limit)
        print("The response of OrdersApi->orders_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number or items to return when executing query. Defaults to 10. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] 

### Return type

[**GetOrders**](GetOrders.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_shipments_delivered_get**
> GetOrdersShipments orders_shipments_delivered_get(authorization, status=status, offset=offset, limit=limit)

Returns list of shipments

Returns list of shipments. By default this will return list of the last shipments ordered by dateCreated, folowed by last update date.

### Example


```python
import openapi_client
from openapi_client.models.get_orders_shipments import GetOrdersShipments
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
    api_instance = openapi_client.OrdersApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    status = 'status_example' # str | Query by shippment status. (optional)
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 56 # int | Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results. (optional)

    try:
        # Returns list of shipments
        api_response = api_instance.orders_shipments_delivered_get(authorization, status=status, offset=offset, limit=limit)
        print("The response of OrdersApi->orders_shipments_delivered_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_shipments_delivered_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **status** | **str**| Query by shippment status. | [optional] 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number or items to return when executing query. Defaults to 10. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] 

### Return type

[**GetOrdersShipments**](GetOrdersShipments.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_shipments_delivered_post**
> orders_shipments_delivered_post(authorization, ordersshipments)

Bulk update of order shipments

Bulk update of order shipments status. This alows to inform multiple shipments status

### Example


```python
import openapi_client
from openapi_client.models.orders_shipments import OrdersShipments
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
    api_instance = openapi_client.OrdersApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    ordersshipments = openapi_client.OrdersShipments() # OrdersShipments | JSON body with list of shipments to be updated.

    try:
        # Bulk update of order shipments
        api_instance.orders_shipments_delivered_post(authorization, ordersshipments)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_shipments_delivered_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **ordersshipments** | [**OrdersShipments**](OrdersShipments.md)| JSON body with list of shipments to be updated. | 

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
**200** | Success! |  -  |
**400** | Bad request. |  -  |
**401** | Access denied. You&#39;re not authenticated or token expired. Check your request header the &#x60;authorization&#x60; field is required. |  -  |
**403** | Server refused to process your request. Please check the API SLA and reduce number of requests per second. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_shipments_shipped_get**
> GetOrdersShipments orders_shipments_shipped_get(authorization, status=status, offset=offset, limit=limit)

Returns a list of shipments shipped

Returns a list of shipments shipped. By Default returns items ordered by dateCreated folowed by last update

### Example


```python
import openapi_client
from openapi_client.models.get_orders_shipments import GetOrdersShipments
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
    api_instance = openapi_client.OrdersApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    status = 'status_example' # str | Product status. (optional)
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 56 # int | Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results. (optional)

    try:
        # Returns a list of shipments shipped
        api_response = api_instance.orders_shipments_shipped_get(authorization, status=status, offset=offset, limit=limit)
        print("The response of OrdersApi->orders_shipments_shipped_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_shipments_shipped_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **status** | **str**| Product status. | [optional] 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number or items to return when executing query. Defaults to 10. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] 

### Return type

[**GetOrdersShipments**](GetOrdersShipments.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_shipments_shipped_post**
> orders_shipments_shipped_post(ordersshipments)

Bulk update of order shipments

Allows bulk updates of orders shippments.

### Example


```python
import openapi_client
from openapi_client.models.orders_shipments import OrdersShipments
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
    api_instance = openapi_client.OrdersApi(api_client)
    ordersshipments = openapi_client.OrdersShipments() # OrdersShipments | JSON payload with list of shippments of orders.

    try:
        # Bulk update of order shipments
        api_instance.orders_shipments_shipped_post(ordersshipments)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_shipments_shipped_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordersshipments** | [**OrdersShipments**](OrdersShipments.md)| JSON payload with list of shippments of orders. | 

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
**200** | Success! |  -  |
**400** | Bad request. |  -  |
**401** | Access denied. You&#39;re not authenticated or token expired. Check your request header the &#x60;authorization&#x60; field is required. |  -  |
**403** | Server refused to process your request. Please check the API SLA and reduce number of requests per second. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_status_approved_get**
> GetOrders orders_status_approved_get(authorization, offset=offset, limit=limit)

Return list of approved orders

Returns a list of approved orders. Orders in the `approved` state must be fullfiled imediadetelly.

### Example


```python
import openapi_client
from openapi_client.models.get_orders import GetOrders
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
    api_instance = openapi_client.OrdersApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 56 # int | Number or items to return when executing query. Defaults to 100, max 200. Use this in conjuction with `offset` to paginate across the results. (optional)

    try:
        # Return list of approved orders
        api_response = api_instance.orders_status_approved_get(authorization, offset=offset, limit=limit)
        print("The response of OrdersApi->orders_status_approved_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_status_approved_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number or items to return when executing query. Defaults to 100, max 200. Use this in conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] 

### Return type

[**GetOrders**](GetOrders.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_status_canceled_get**
> GetOrders orders_status_canceled_get(authorization, offset=offset, limit=limit)

Returns lists of canceled orders

Returns a list with canceled orders. Canceled orders should not be fullfiled.

### Example


```python
import openapi_client
from openapi_client.models.get_orders import GetOrders
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
    api_instance = openapi_client.OrdersApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 100 # int | Number or items to return when executing query. Default 100, max 250. Use this conjuction with `offset` to paginate across the results. (optional) (default to 100)

    try:
        # Returns lists of canceled orders
        api_response = api_instance.orders_status_canceled_get(authorization, offset=offset, limit=limit)
        print("The response of OrdersApi->orders_status_canceled_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_status_canceled_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number or items to return when executing query. Default 100, max 250. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] [default to 100]

### Return type

[**GetOrders**](GetOrders.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_status_delivered_get**
> GetOrders orders_status_delivered_get(authorization, offset=offset, limit=limit)

Returns a list of orders successfully delivered associated with this seller.

Returns a list of orders successfully delivered associated with this seller.

### Example


```python
import openapi_client
from openapi_client.models.get_orders import GetOrders
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
    api_instance = openapi_client.OrdersApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 56 # int | Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results. (optional)

    try:
        # Returns a list of orders successfully delivered associated with this seller.
        api_response = api_instance.orders_status_delivered_get(authorization, offset=offset, limit=limit)
        print("The response of OrdersApi->orders_status_delivered_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_status_delivered_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number or items to return when executing query. Defaults to 10. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] 

### Return type

[**GetOrders**](GetOrders.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_status_new_get**
> GetOrders orders_status_new_get(authorization, offset=offset, limit=limit)

Returns a list of orders flagged as new.

Returns a list of orders flagged as new. New orders should not be fullfiled until marketplace flags them as approved.

### Example


```python
import openapi_client
from openapi_client.models.get_orders import GetOrders
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
    api_instance = openapi_client.OrdersApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 100 # int | Number or items to return when executing query. Defaults to 100. Max 250. Use this conjuction with `offset` to paginate across the results. (optional) (default to 100)

    try:
        # Returns a list of orders flagged as new.
        api_response = api_instance.orders_status_new_get(authorization, offset=offset, limit=limit)
        print("The response of OrdersApi->orders_status_new_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_status_new_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number or items to return when executing query. Defaults to 100. Max 250. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] [default to 100]

### Return type

[**GetOrders**](GetOrders.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_status_partially_delivered_get**
> GetOrders orders_status_partially_delivered_get(authorization, offset=offset, limit=limit)

Returns a list of partially deliverd orders

Returns a list of partially deliverd orders. This is a list of orders with items shipped but with not all items ackwlodged as deliverd

### Example


```python
import openapi_client
from openapi_client.models.get_orders import GetOrders
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
    api_instance = openapi_client.OrdersApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 100 # int | Number or items to return when executing query. Defaults to 100. Max 250. Use this conjuction with `offset` to paginate across the results. (optional) (default to 100)

    try:
        # Returns a list of partially deliverd orders
        api_response = api_instance.orders_status_partially_delivered_get(authorization, offset=offset, limit=limit)
        print("The response of OrdersApi->orders_status_partially_delivered_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_status_partially_delivered_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number or items to return when executing query. Defaults to 100. Max 250. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] [default to 100]

### Return type

[**GetOrders**](GetOrders.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_status_partially_sent_get**
> GetOrders orders_status_partially_sent_get(authorization, offset=offset, limit=limit)

Returns a list of orders partially fullfiled

Returns a list of orders that contain one (or more) items that where not shipped. This will list the entire order as well the items with peding shipment. Use this service to track orders that need to be fullfiled.

### Example


```python
import openapi_client
from openapi_client.models.get_orders import GetOrders
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
    api_instance = openapi_client.OrdersApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 56 # int | Number or items to return when executing query. Defaults to 100. Use this conjuction with `offset` to paginate across the results. (optional)

    try:
        # Returns a list of orders partially fullfiled
        api_response = api_instance.orders_status_partially_sent_get(authorization, offset=offset, limit=limit)
        print("The response of OrdersApi->orders_status_partially_sent_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_status_partially_sent_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number or items to return when executing query. Defaults to 100. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] 

### Return type

[**GetOrders**](GetOrders.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_status_sent_get**
> GetOrders orders_status_sent_get(authorization, offset=offset, limit=limit)

Returns a list with orders fully sent

Returns a list with orders completely fullfiled, this means orders with all items sent. Orders will ordered by dateCreated fowllowed by last update

### Example


```python
import openapi_client
from openapi_client.models.get_orders import GetOrders
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
    api_instance = openapi_client.OrdersApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 56 # int | Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results. (optional)

    try:
        # Returns a list with orders fully sent
        api_response = api_instance.orders_status_sent_get(authorization, offset=offset, limit=limit)
        print("The response of OrdersApi->orders_status_sent_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_status_sent_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number or items to return when executing query. Defaults to 10. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] 

### Return type

[**GetOrders**](GetOrders.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

