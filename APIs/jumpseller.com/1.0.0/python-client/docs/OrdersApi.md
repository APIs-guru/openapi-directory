# openapi_client.OrdersApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orders_after_id_json_get**](OrdersApi.md#orders_after_id_json_get) | **GET** /orders/after/{id}.json | Retrieve orders filtered by Order Id.
[**orders_count_json_get**](OrdersApi.md#orders_count_json_get) | **GET** /orders/count.json | Count all Orders.
[**orders_id_history_json_get**](OrdersApi.md#orders_id_history_json_get) | **GET** /orders/{id}/history.json | Retrieve all Order History.
[**orders_id_history_json_post**](OrdersApi.md#orders_id_history_json_post) | **POST** /orders/{id}/history.json | Create a new Order History Entry.
[**orders_id_json_get**](OrdersApi.md#orders_id_json_get) | **GET** /orders/{id}.json | Retrieve a single Order.
[**orders_id_json_put**](OrdersApi.md#orders_id_json_put) | **PUT** /orders/{id}.json | Modify an existing Order.
[**orders_json_get**](OrdersApi.md#orders_json_get) | **GET** /orders.json | Retrieve all Orders.
[**orders_json_post**](OrdersApi.md#orders_json_post) | **POST** /orders.json | Create a new Order.
[**orders_status_status_json_get**](OrdersApi.md#orders_status_status_json_get) | **GET** /orders/status/{status}.json | Retrieve orders filtered by status.


# **orders_after_id_json_get**
> Order orders_after_id_json_get(login, authtoken, id)

Retrieve orders filtered by Order Id.

For example the GET /orders/after/5000 will return Order 5001, 5002, 5003, etc.

### Example


```python
import openapi_client
from openapi_client.models.order import Order
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrdersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Order

    try:
        # Retrieve orders filtered by Order Id.
        api_response = api_instance.orders_after_id_json_get(login, authtoken, id)
        print("The response of OrdersApi->orders_after_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_after_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Order | 

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
**200** | OK |  -  |
**404** | Order Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_count_json_get**
> Count orders_count_json_get(login, authtoken)

Count all Orders.

### Example


```python
import openapi_client
from openapi_client.models.count import Count
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrdersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.

    try:
        # Count all Orders.
        api_response = api_instance.orders_count_json_get(login, authtoken)
        print("The response of OrdersApi->orders_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_count_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 

### Return type

[**Count**](Count.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_id_history_json_get**
> List[OrderHistory] orders_id_history_json_get(login, authtoken, id)

Retrieve all Order History.

### Example


```python
import openapi_client
from openapi_client.models.order_history import OrderHistory
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrdersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Order

    try:
        # Retrieve all Order History.
        api_response = api_instance.orders_id_history_json_get(login, authtoken, id)
        print("The response of OrdersApi->orders_id_history_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_id_history_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Order | 

### Return type

[**List[OrderHistory]**](OrderHistory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array with Order History |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_id_history_json_post**
> OrderHistory orders_id_history_json_post(login, authtoken, id, order_history_edit)

Create a new Order History Entry.

### Example


```python
import openapi_client
from openapi_client.models.order_history import OrderHistory
from openapi_client.models.order_history_edit import OrderHistoryEdit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrdersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the OrderHistory
    order_history_edit = openapi_client.OrderHistoryEdit() # OrderHistoryEdit | Order History parameters.

    try:
        # Create a new Order History Entry.
        api_response = api_instance.orders_id_history_json_post(login, authtoken, id, order_history_edit)
        print("The response of OrdersApi->orders_id_history_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_id_history_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the OrderHistory | 
 **order_history_edit** | [**OrderHistoryEdit**](OrderHistoryEdit.md)| Order History parameters. | 

### Return type

[**OrderHistory**](OrderHistory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_id_json_get**
> Order orders_id_json_get(login, authtoken, id)

Retrieve a single Order.

### Example


```python
import openapi_client
from openapi_client.models.order import Order
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrdersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Order

    try:
        # Retrieve a single Order.
        api_response = api_instance.orders_id_json_get(login, authtoken, id)
        print("The response of OrdersApi->orders_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Order | 

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
**200** | OK |  -  |
**404** | Order Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_id_json_put**
> Order orders_id_json_put(login, authtoken, id, order_edit)

Modify an existing Order.

Only `status`, `shipment_status`, `tracking_number`, `tracking_company`, `tracking_url`, `additional_information` and `additional_fields` are available for update. An email is send if `shipment_status` changes.

### Example


```python
import openapi_client
from openapi_client.models.order import Order
from openapi_client.models.order_edit import OrderEdit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrdersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Order
    order_edit = openapi_client.OrderEdit() # OrderEdit | Order parameters to change

    try:
        # Modify an existing Order.
        api_response = api_instance.orders_id_json_put(login, authtoken, id, order_edit)
        print("The response of OrdersApi->orders_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Order | 
 **order_edit** | [**OrderEdit**](OrderEdit.md)| Order parameters to change | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Order Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_json_get**
> List[Order] orders_json_get(login, authtoken, limit=limit, page=page)

Retrieve all Orders.

### Example


```python
import openapi_client
from openapi_client.models.order import Order
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrdersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    limit = 50 # int | List restriction (optional) (default to 50)
    page = 1 # int | List page (optional) (default to 1)

    try:
        # Retrieve all Orders.
        api_response = api_instance.orders_json_get(login, authtoken, limit=limit, page=page)
        print("The response of OrdersApi->orders_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **limit** | **int**| List restriction | [optional] [default to 50]
 **page** | **int**| List page | [optional] [default to 1]

### Return type

[**List[Order]**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Orders |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_json_post**
> Order orders_json_post(login, authtoken, order_create)

Create a new Order.

Orders created externally keep the given order product's values (bypassing internal promotion or product amounts).

### Example


```python
import openapi_client
from openapi_client.models.order import Order
from openapi_client.models.order_create import OrderCreate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrdersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    order_create = openapi_client.OrderCreate() # OrderCreate | Order parameters.

    try:
        # Create a new Order.
        api_response = api_instance.orders_json_post(login, authtoken, order_create)
        print("The response of OrdersApi->orders_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **order_create** | [**OrderCreate**](OrderCreate.md)| Order parameters. | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orders_status_status_json_get**
> List[Order] orders_status_status_json_get(login, authtoken, status)

Retrieve orders filtered by status.

### Example


```python
import openapi_client
from openapi_client.models.order import Order
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrdersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    status = 'status_example' # str | Status of the Order used as filter

    try:
        # Retrieve orders filtered by status.
        api_response = api_instance.orders_status_status_json_get(login, authtoken, status)
        print("The response of OrdersApi->orders_status_status_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders_status_status_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **status** | **str**| Status of the Order used as filter | 

### Return type

[**List[Order]**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Status Invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

