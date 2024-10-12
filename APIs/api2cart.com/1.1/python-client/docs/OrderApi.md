# openapi_client.OrderApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**order_abandoned_list**](OrderApi.md#order_abandoned_list) | **GET** /order.abandoned.list.json | 
[**order_add**](OrderApi.md#order_add) | **POST** /order.add.json | 
[**order_count**](OrderApi.md#order_count) | **GET** /order.count.json | 
[**order_financial_status_list**](OrderApi.md#order_financial_status_list) | **GET** /order.financial_status.list.json | 
[**order_find**](OrderApi.md#order_find) | **GET** /order.find.json | 
[**order_fulfillment_status_list**](OrderApi.md#order_fulfillment_status_list) | **GET** /order.fulfillment_status.list.json | 
[**order_info**](OrderApi.md#order_info) | **GET** /order.info.json | 
[**order_list**](OrderApi.md#order_list) | **GET** /order.list.json | 
[**order_preestimate_shipping_list**](OrderApi.md#order_preestimate_shipping_list) | **POST** /order.preestimate_shipping.list.json | 
[**order_refund_add**](OrderApi.md#order_refund_add) | **POST** /order.refund.add.json | 
[**order_shipment_add**](OrderApi.md#order_shipment_add) | **POST** /order.shipment.add.json | 
[**order_shipment_delete**](OrderApi.md#order_shipment_delete) | **DELETE** /order.shipment.delete.json | 
[**order_shipment_info**](OrderApi.md#order_shipment_info) | **GET** /order.shipment.info.json | 
[**order_shipment_list**](OrderApi.md#order_shipment_list) | **GET** /order.shipment.list.json | 
[**order_shipment_tracking_add**](OrderApi.md#order_shipment_tracking_add) | **POST** /order.shipment.tracking.add.json | 
[**order_shipment_update**](OrderApi.md#order_shipment_update) | **PUT** /order.shipment.update.json | 
[**order_status_list**](OrderApi.md#order_status_list) | **GET** /order.status.list.json | 
[**order_transaction_list**](OrderApi.md#order_transaction_list) | **GET** /order.transaction.list.json | 
[**order_update**](OrderApi.md#order_update) | **PUT** /order.update.json | 


# **order_abandoned_list**
> ModelResponseOrderAbandonedList order_abandoned_list(customer_id=customer_id, customer_email=customer_email, created_to=created_to, created_from=created_from, modified_to=modified_to, modified_from=modified_from, skip_empty_email=skip_empty_email, store_id=store_id, page_cursor=page_cursor, count=count, start=start, params=params, response_fields=response_fields, exclude=exclude)



Get list of orders that were left by customers before completing the order.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_order_abandoned_list import ModelResponseOrderAbandonedList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    customer_id = 'customer_id_example' # str | Retrieves orders specified by customer id (optional)
    customer_email = 'customer_email_example' # str | Retrieves orders specified by customer email (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    skip_empty_email = False # bool | Filter empty emails (optional) (default to False)
    store_id = 'store_id_example' # str | Store Id (optional)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    params = 'customer,totals,items' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'customer,totals,items')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)

    try:
        api_response = api_instance.order_abandoned_list(customer_id=customer_id, customer_email=customer_email, created_to=created_to, created_from=created_from, modified_to=modified_to, modified_from=modified_from, skip_empty_email=skip_empty_email, store_id=store_id, page_cursor=page_cursor, count=count, start=start, params=params, response_fields=response_fields, exclude=exclude)
        print("The response of OrderApi->order_abandoned_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_abandoned_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| Retrieves orders specified by customer id | [optional] 
 **customer_email** | **str**| Retrieves orders specified by customer email | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **skip_empty_email** | **bool**| Filter empty emails | [optional] [default to False]
 **store_id** | **str**| Store Id | [optional] 
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;customer,totals,items&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseOrderAbandonedList**](ModelResponseOrderAbandonedList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_add**
> OrderAdd200Response order_add(order_add)



Add a new order to the cart.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.order_add import OrderAdd
from openapi_client.models.order_add200_response import OrderAdd200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    order_add = openapi_client.OrderAdd() # OrderAdd | 

    try:
        api_response = api_instance.order_add(order_add)
        print("The response of OrderApi->order_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_add** | [**OrderAdd**](OrderAdd.md)|  | 

### Return type

[**OrderAdd200Response**](OrderAdd200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_count**
> OrderCount200Response order_count(customer_id=customer_id, customer_email=customer_email, order_status=order_status, order_status_ids=order_status_ids, created_to=created_to, created_from=created_from, modified_to=modified_to, modified_from=modified_from, store_id=store_id, ids=ids, order_ids=order_ids, ebay_order_status=ebay_order_status, financial_status=financial_status, fulfillment_status=fulfillment_status, shipping_method=shipping_method, delivery_method=delivery_method, ship_node_type=ship_node_type)



Count orders in store

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.order_count200_response import OrderCount200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    customer_id = 'customer_id_example' # str | Counts orders quantity specified by customer id (optional)
    customer_email = 'customer_email_example' # str | Counts orders quantity specified by customer email (optional)
    order_status = 'order_status_example' # str | Counts orders quantity specified by order status (optional)
    order_status_ids = ['order_status_ids_example'] # List[str] | Retrieves orders specified by order statuses (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    store_id = 'store_id_example' # str | Counts orders quantity specified by store id (optional)
    ids = 'ids_example' # str | Counts orders specified by ids (optional)
    order_ids = 'order_ids_example' # str | Counts orders specified by order ids (optional)
    ebay_order_status = 'ebay_order_status_example' # str | Counts orders quantity specified by order status (optional)
    financial_status = 'financial_status_example' # str | Counts orders quantity specified by financial status (optional)
    fulfillment_status = 'fulfillment_status_example' # str | Create order with fulfillment status (optional)
    shipping_method = 'shipping_method_example' # str | Retrieve entities according to shipping method (optional)
    delivery_method = 'delivery_method_example' # str | Retrieves order with delivery method (optional)
    ship_node_type = 'ship_node_type_example' # str | Retrieves order with ship node type (optional)

    try:
        api_response = api_instance.order_count(customer_id=customer_id, customer_email=customer_email, order_status=order_status, order_status_ids=order_status_ids, created_to=created_to, created_from=created_from, modified_to=modified_to, modified_from=modified_from, store_id=store_id, ids=ids, order_ids=order_ids, ebay_order_status=ebay_order_status, financial_status=financial_status, fulfillment_status=fulfillment_status, shipping_method=shipping_method, delivery_method=delivery_method, ship_node_type=ship_node_type)
        print("The response of OrderApi->order_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| Counts orders quantity specified by customer id | [optional] 
 **customer_email** | **str**| Counts orders quantity specified by customer email | [optional] 
 **order_status** | **str**| Counts orders quantity specified by order status | [optional] 
 **order_status_ids** | [**List[str]**](str.md)| Retrieves orders specified by order statuses | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **store_id** | **str**| Counts orders quantity specified by store id | [optional] 
 **ids** | **str**| Counts orders specified by ids | [optional] 
 **order_ids** | **str**| Counts orders specified by order ids | [optional] 
 **ebay_order_status** | **str**| Counts orders quantity specified by order status | [optional] 
 **financial_status** | **str**| Counts orders quantity specified by financial status | [optional] 
 **fulfillment_status** | **str**| Create order with fulfillment status | [optional] 
 **shipping_method** | **str**| Retrieve entities according to shipping method | [optional] 
 **delivery_method** | **str**| Retrieves order with delivery method | [optional] 
 **ship_node_type** | **str**| Retrieves order with ship node type | [optional] 

### Return type

[**OrderCount200Response**](OrderCount200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_financial_status_list**
> OrderFinancialStatusList200Response order_financial_status_list()



Retrieve list of financial statuses

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.order_financial_status_list200_response import OrderFinancialStatusList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)

    try:
        api_response = api_instance.order_financial_status_list()
        print("The response of OrderApi->order_financial_status_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_financial_status_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**OrderFinancialStatusList200Response**](OrderFinancialStatusList200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_find**
> OrderFind200Response order_find(customer_id=customer_id, customer_email=customer_email, order_status=order_status, start=start, count=count, params=params, exclude=exclude, created_to=created_to, created_from=created_from, modified_to=modified_to, modified_from=modified_from, financial_status=financial_status)



This method is deprecated and won't be supported in the future. Please use \"order.list\" instead.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.order_find200_response import OrderFind200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    customer_id = 'customer_id_example' # str | Retrieves orders specified by customer id (optional)
    customer_email = 'customer_email_example' # str | Retrieves orders specified by customer email (optional)
    order_status = 'order_status_example' # str | Retrieves orders specified by order status (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    params = 'order_id,customer,totals,address,items,bundles,status' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'order_id,customer,totals,address,items,bundles,status')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    financial_status = 'financial_status_example' # str | Retrieves orders specified by financial status (optional)

    try:
        api_response = api_instance.order_find(customer_id=customer_id, customer_email=customer_email, order_status=order_status, start=start, count=count, params=params, exclude=exclude, created_to=created_to, created_from=created_from, modified_to=modified_to, modified_from=modified_from, financial_status=financial_status)
        print("The response of OrderApi->order_find:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_find: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| Retrieves orders specified by customer id | [optional] 
 **customer_email** | **str**| Retrieves orders specified by customer email | [optional] 
 **order_status** | **str**| Retrieves orders specified by order status | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;order_id,customer,totals,address,items,bundles,status&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **financial_status** | **str**| Retrieves orders specified by financial status | [optional] 

### Return type

[**OrderFind200Response**](OrderFind200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_fulfillment_status_list**
> OrderFulfillmentStatusList200Response order_fulfillment_status_list()



Retrieve list of fulfillment statuses

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.order_fulfillment_status_list200_response import OrderFulfillmentStatusList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)

    try:
        api_response = api_instance.order_fulfillment_status_list()
        print("The response of OrderApi->order_fulfillment_status_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_fulfillment_status_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**OrderFulfillmentStatusList200Response**](OrderFulfillmentStatusList200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_info**
> OrderInfo200Response order_info(order_id=order_id, id=id, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id, enable_cache=enable_cache)



Info about a specific order by ID

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.order_info200_response import OrderInfo200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    order_id = 'order_id_example' # str | Retrieves order’s info specified by order id (optional)
    id = 'id_example' # str | Retrieves order info specified by id (optional)
    params = 'order_id,customer,totals,address,items,bundles,status' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'order_id,customer,totals,address,items,bundles,status')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    store_id = 'store_id_example' # str | Defines store id where the order should be found (optional)
    enable_cache = False # bool | If the value is 'true' and order exist in our cache, we will return order.info response from cache (optional) (default to False)

    try:
        api_response = api_instance.order_info(order_id=order_id, id=id, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id, enable_cache=enable_cache)
        print("The response of OrderApi->order_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| Retrieves order’s info specified by order id | [optional] 
 **id** | **str**| Retrieves order info specified by id | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;order_id,customer,totals,address,items,bundles,status&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **store_id** | **str**| Defines store id where the order should be found | [optional] 
 **enable_cache** | **bool**| If the value is &#39;true&#39; and order exist in our cache, we will return order.info response from cache | [optional] [default to False]

### Return type

[**OrderInfo200Response**](OrderInfo200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_list**
> ModelResponseOrderList order_list(customer_id=customer_id, customer_email=customer_email, phone=phone, order_status=order_status, order_status_ids=order_status_ids, start=start, count=count, page_cursor=page_cursor, sort_by=sort_by, sort_direction=sort_direction, params=params, response_fields=response_fields, exclude=exclude, created_to=created_to, created_from=created_from, modified_to=modified_to, modified_from=modified_from, store_id=store_id, ids=ids, order_ids=order_ids, ebay_order_status=ebay_order_status, basket_id=basket_id, financial_status=financial_status, fulfillment_status=fulfillment_status, shipping_method=shipping_method, skip_order_ids=skip_order_ids, since_id=since_id, is_deleted=is_deleted, shipping_country_iso3=shipping_country_iso3, enable_cache=enable_cache, delivery_method=delivery_method, ship_node_type=ship_node_type, currency_id=currency_id)



Get list of orders from store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_order_list import ModelResponseOrderList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    customer_id = 'customer_id_example' # str | Retrieves orders specified by customer id (optional)
    customer_email = 'customer_email_example' # str | Retrieves orders specified by customer email (optional)
    phone = 'phone_example' # str | Filter orders by customer's phone number (optional)
    order_status = 'order_status_example' # str | Retrieves orders specified by order status (optional)
    order_status_ids = ['order_status_ids_example'] # List[str] | Retrieves orders specified by order statuses (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    page_cursor = 'page_cursor_example' # str | Used to retrieve orders via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    sort_by = 'order_id' # str | Set field to sort by (optional) (default to 'order_id')
    sort_direction = 'asc' # str | Set sorting direction (optional) (default to 'asc')
    params = 'order_id,customer,totals,address,items,bundles,status' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'order_id,customer,totals,address,items,bundles,status')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    ids = 'ids_example' # str | Retrieves orders specified by ids (optional)
    order_ids = 'order_ids_example' # str | Retrieves orders specified by order ids (optional)
    ebay_order_status = 'ebay_order_status_example' # str | Retrieves orders specified by order status (optional)
    basket_id = 'basket_id_example' # str | Retrieves order’s info specified by basket id. (optional)
    financial_status = 'financial_status_example' # str | Retrieves orders specified by financial status (optional)
    fulfillment_status = 'fulfillment_status_example' # str | Create order with fulfillment status (optional)
    shipping_method = 'shipping_method_example' # str | Retrieve entities according to shipping method (optional)
    skip_order_ids = 'skip_order_ids_example' # str | Skipped orders by ids (optional)
    since_id = 56 # int | Retrieve entities starting from the specified id. (optional)
    is_deleted = True # bool | Filter deleted orders (optional)
    shipping_country_iso3 = 'shipping_country_iso3_example' # str | Retrieve entities according to shipping country (optional)
    enable_cache = False # bool | If the value is 'true', we will cache orders for a 15 minutes in order to increase speed and reduce requests throttling for some methods and shoping platforms (for example order.shipment.add) (optional) (default to False)
    delivery_method = 'delivery_method_example' # str | Retrieves order with delivery method (optional)
    ship_node_type = 'ship_node_type_example' # str | Retrieves order with ship node type (optional)
    currency_id = 'currency_id_example' # str | Currency Id (optional)

    try:
        api_response = api_instance.order_list(customer_id=customer_id, customer_email=customer_email, phone=phone, order_status=order_status, order_status_ids=order_status_ids, start=start, count=count, page_cursor=page_cursor, sort_by=sort_by, sort_direction=sort_direction, params=params, response_fields=response_fields, exclude=exclude, created_to=created_to, created_from=created_from, modified_to=modified_to, modified_from=modified_from, store_id=store_id, ids=ids, order_ids=order_ids, ebay_order_status=ebay_order_status, basket_id=basket_id, financial_status=financial_status, fulfillment_status=fulfillment_status, shipping_method=shipping_method, skip_order_ids=skip_order_ids, since_id=since_id, is_deleted=is_deleted, shipping_country_iso3=shipping_country_iso3, enable_cache=enable_cache, delivery_method=delivery_method, ship_node_type=ship_node_type, currency_id=currency_id)
        print("The response of OrderApi->order_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| Retrieves orders specified by customer id | [optional] 
 **customer_email** | **str**| Retrieves orders specified by customer email | [optional] 
 **phone** | **str**| Filter orders by customer&#39;s phone number | [optional] 
 **order_status** | **str**| Retrieves orders specified by order status | [optional] 
 **order_status_ids** | [**List[str]**](str.md)| Retrieves orders specified by order statuses | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **page_cursor** | **str**| Used to retrieve orders via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **sort_by** | **str**| Set field to sort by | [optional] [default to &#39;order_id&#39;]
 **sort_direction** | **str**| Set sorting direction | [optional] [default to &#39;asc&#39;]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;order_id,customer,totals,address,items,bundles,status&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **ids** | **str**| Retrieves orders specified by ids | [optional] 
 **order_ids** | **str**| Retrieves orders specified by order ids | [optional] 
 **ebay_order_status** | **str**| Retrieves orders specified by order status | [optional] 
 **basket_id** | **str**| Retrieves order’s info specified by basket id. | [optional] 
 **financial_status** | **str**| Retrieves orders specified by financial status | [optional] 
 **fulfillment_status** | **str**| Create order with fulfillment status | [optional] 
 **shipping_method** | **str**| Retrieve entities according to shipping method | [optional] 
 **skip_order_ids** | **str**| Skipped orders by ids | [optional] 
 **since_id** | **int**| Retrieve entities starting from the specified id. | [optional] 
 **is_deleted** | **bool**| Filter deleted orders | [optional] 
 **shipping_country_iso3** | **str**| Retrieve entities according to shipping country | [optional] 
 **enable_cache** | **bool**| If the value is &#39;true&#39;, we will cache orders for a 15 minutes in order to increase speed and reduce requests throttling for some methods and shoping platforms (for example order.shipment.add) | [optional] [default to False]
 **delivery_method** | **str**| Retrieves order with delivery method | [optional] 
 **ship_node_type** | **str**| Retrieves order with ship node type | [optional] 
 **currency_id** | **str**| Currency Id | [optional] 

### Return type

[**ModelResponseOrderList**](ModelResponseOrderList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_preestimate_shipping_list**
> ModelResponseOrderPreestimateShippingList order_preestimate_shipping_list(order_preestimate_shipping_list)



Retrieve list of order preestimated shipping methods

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_order_preestimate_shipping_list import ModelResponseOrderPreestimateShippingList
from openapi_client.models.order_preestimate_shipping_list import OrderPreestimateShippingList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    order_preestimate_shipping_list = openapi_client.OrderPreestimateShippingList() # OrderPreestimateShippingList | 

    try:
        api_response = api_instance.order_preestimate_shipping_list(order_preestimate_shipping_list)
        print("The response of OrderApi->order_preestimate_shipping_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_preestimate_shipping_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_preestimate_shipping_list** | [**OrderPreestimateShippingList**](OrderPreestimateShippingList.md)|  | 

### Return type

[**ModelResponseOrderPreestimateShippingList**](ModelResponseOrderPreestimateShippingList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_refund_add**
> OrderRefundAdd200Response order_refund_add(order_refund_add)



Add a refund to the order.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.order_refund_add import OrderRefundAdd
from openapi_client.models.order_refund_add200_response import OrderRefundAdd200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    order_refund_add = openapi_client.OrderRefundAdd() # OrderRefundAdd | 

    try:
        api_response = api_instance.order_refund_add(order_refund_add)
        print("The response of OrderApi->order_refund_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_refund_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_refund_add** | [**OrderRefundAdd**](OrderRefundAdd.md)|  | 

### Return type

[**OrderRefundAdd200Response**](OrderRefundAdd200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_shipment_add**
> OrderShipmentAdd200Response order_shipment_add(order_shipment_add)



Add a shipment to the order.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.order_shipment_add import OrderShipmentAdd
from openapi_client.models.order_shipment_add200_response import OrderShipmentAdd200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    order_shipment_add = openapi_client.OrderShipmentAdd() # OrderShipmentAdd | 

    try:
        api_response = api_instance.order_shipment_add(order_shipment_add)
        print("The response of OrderApi->order_shipment_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_shipment_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_shipment_add** | [**OrderShipmentAdd**](OrderShipmentAdd.md)|  | 

### Return type

[**OrderShipmentAdd200Response**](OrderShipmentAdd200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_shipment_delete**
> OrderShipmentDelete200Response order_shipment_delete(shipment_id, order_id, store_id=store_id)



Delete order's shipment.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.order_shipment_delete200_response import OrderShipmentDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    shipment_id = 'shipment_id_example' # str | Shipment id indicates the number of delivery
    order_id = 'order_id_example' # str | Defines the order for which the shipment will be deleted
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.order_shipment_delete(shipment_id, order_id, store_id=store_id)
        print("The response of OrderApi->order_shipment_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_shipment_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment_id** | **str**| Shipment id indicates the number of delivery | 
 **order_id** | **str**| Defines the order for which the shipment will be deleted | 
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**OrderShipmentDelete200Response**](OrderShipmentDelete200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_shipment_info**
> ModelResponseOrderShipmentList order_shipment_info(id, order_id, start=start, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id)



Get information of shipment.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_order_shipment_list import ModelResponseOrderShipmentList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    id = 'id_example' # str | Entity id
    order_id = 'order_id_example' # str | Defines the order id
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    params = 'id,order_id,items,tracking_numbers' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,order_id,items,tracking_numbers')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.order_shipment_info(id, order_id, start=start, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id)
        print("The response of OrderApi->order_shipment_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_shipment_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Entity id | 
 **order_id** | **str**| Defines the order id | 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,order_id,items,tracking_numbers&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**ModelResponseOrderShipmentList**](ModelResponseOrderShipmentList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_shipment_list**
> ModelResponseOrderShipmentList order_shipment_list(order_id, page_cursor=page_cursor, start=start, count=count, params=params, response_fields=response_fields, exclude=exclude, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, store_id=store_id)



Get list of shipments by orders.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_order_shipment_list import ModelResponseOrderShipmentList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    order_id = 'order_id_example' # str | Retrieves shipments specified by order id
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    params = 'id,order_id,items,tracking_numbers' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,order_id,items,tracking_numbers')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.order_shipment_list(order_id, page_cursor=page_cursor, start=start, count=count, params=params, response_fields=response_fields, exclude=exclude, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, store_id=store_id)
        print("The response of OrderApi->order_shipment_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_shipment_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| Retrieves shipments specified by order id | 
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,order_id,items,tracking_numbers&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**ModelResponseOrderShipmentList**](ModelResponseOrderShipmentList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_shipment_tracking_add**
> OrderShipmentTrackingAdd200Response order_shipment_tracking_add(order_shipment_tracking_add)



Add order shipment's tracking info.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.order_shipment_tracking_add import OrderShipmentTrackingAdd
from openapi_client.models.order_shipment_tracking_add200_response import OrderShipmentTrackingAdd200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    order_shipment_tracking_add = openapi_client.OrderShipmentTrackingAdd() # OrderShipmentTrackingAdd | 

    try:
        api_response = api_instance.order_shipment_tracking_add(order_shipment_tracking_add)
        print("The response of OrderApi->order_shipment_tracking_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_shipment_tracking_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_shipment_tracking_add** | [**OrderShipmentTrackingAdd**](OrderShipmentTrackingAdd.md)|  | 

### Return type

[**OrderShipmentTrackingAdd200Response**](OrderShipmentTrackingAdd200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_shipment_update**
> AccountConfigUpdate200Response order_shipment_update(order_shipment_update)



Update order's shipment information.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.account_config_update200_response import AccountConfigUpdate200Response
from openapi_client.models.order_shipment_update import OrderShipmentUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    order_shipment_update = openapi_client.OrderShipmentUpdate() # OrderShipmentUpdate | 

    try:
        api_response = api_instance.order_shipment_update(order_shipment_update)
        print("The response of OrderApi->order_shipment_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_shipment_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_shipment_update** | [**OrderShipmentUpdate**](OrderShipmentUpdate.md)|  | 

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_status_list**
> OrderStatusList200Response order_status_list(store_id=store_id, response_fields=response_fields)



Retrieve list of statuses

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.order_status_list200_response import OrderStatusList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    store_id = 'store_id_example' # str | Store Id (optional)
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)

    try:
        api_response = api_instance.order_status_list(store_id=store_id, response_fields=response_fields)
        print("The response of OrderApi->order_status_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_status_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_id** | **str**| Store Id | [optional] 
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 

### Return type

[**OrderStatusList200Response**](OrderStatusList200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_transaction_list**
> ModelResponseOrderTransactionList order_transaction_list(order_ids, count=count, store_id=store_id, params=params, response_fields=response_fields, exclude=exclude, page_cursor=page_cursor)



Retrieve list of order transaction

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_order_transaction_list import ModelResponseOrderTransactionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    order_ids = 'order_ids_example' # str | Retrieves order transactions specified by order ids
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    store_id = 'store_id_example' # str | Store Id (optional)
    params = 'id,order_id,amount,description' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,order_id,amount,description')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)

    try:
        api_response = api_instance.order_transaction_list(order_ids, count=count, store_id=store_id, params=params, response_fields=response_fields, exclude=exclude, page_cursor=page_cursor)
        print("The response of OrderApi->order_transaction_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_transaction_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_ids** | **str**| Retrieves order transactions specified by order ids | 
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **store_id** | **str**| Store Id | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,order_id,amount,description&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 

### Return type

[**ModelResponseOrderTransactionList**](ModelResponseOrderTransactionList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_update**
> AccountConfigUpdate200Response order_update(order_id, store_id=store_id, order_status=order_status, comment=comment, admin_comment=admin_comment, admin_private_comment=admin_private_comment, date_modified=date_modified, date_finished=date_finished, financial_status=financial_status, fulfillment_status=fulfillment_status, order_payment_method=order_payment_method, send_notifications=send_notifications)



Update existing order.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.account_config_update200_response import AccountConfigUpdate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    order_id = 'order_id_example' # str | Defines the orders specified by order id
    store_id = 'store_id_example' # str | Defines store id where the order should be found (optional)
    order_status = 'order_status_example' # str | Defines new order's status (optional)
    comment = 'comment_example' # str | Specifies order comment (optional)
    admin_comment = 'admin_comment_example' # str | Specifies admin's order comment (optional)
    admin_private_comment = 'admin_private_comment_example' # str | Specifies private admin's order comment (optional)
    date_modified = 'date_modified_example' # str | Specifies order's  modification date (optional)
    date_finished = 'date_finished_example' # str | Specifies order's  finished date (optional)
    financial_status = 'financial_status_example' # str | Update order financial status to specified (optional)
    fulfillment_status = 'fulfillment_status_example' # str | Create order with fulfillment status (optional)
    order_payment_method = 'order_payment_method_example' # str | Defines order payment method.<br/>Setting order_payment_method on Shopify will also change financial_status field value to 'paid' (optional)
    send_notifications = False # bool | Send notifications to customer after order was created (optional) (default to False)

    try:
        api_response = api_instance.order_update(order_id, store_id=store_id, order_status=order_status, comment=comment, admin_comment=admin_comment, admin_private_comment=admin_private_comment, date_modified=date_modified, date_finished=date_finished, financial_status=financial_status, fulfillment_status=fulfillment_status, order_payment_method=order_payment_method, send_notifications=send_notifications)
        print("The response of OrderApi->order_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| Defines the orders specified by order id | 
 **store_id** | **str**| Defines store id where the order should be found | [optional] 
 **order_status** | **str**| Defines new order&#39;s status | [optional] 
 **comment** | **str**| Specifies order comment | [optional] 
 **admin_comment** | **str**| Specifies admin&#39;s order comment | [optional] 
 **admin_private_comment** | **str**| Specifies private admin&#39;s order comment | [optional] 
 **date_modified** | **str**| Specifies order&#39;s  modification date | [optional] 
 **date_finished** | **str**| Specifies order&#39;s  finished date | [optional] 
 **financial_status** | **str**| Update order financial status to specified | [optional] 
 **fulfillment_status** | **str**| Create order with fulfillment status | [optional] 
 **order_payment_method** | **str**| Defines order payment method.&lt;br/&gt;Setting order_payment_method on Shopify will also change financial_status field value to &#39;paid&#39; | [optional] 
 **send_notifications** | **bool**| Send notifications to customer after order was created | [optional] [default to False]

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

