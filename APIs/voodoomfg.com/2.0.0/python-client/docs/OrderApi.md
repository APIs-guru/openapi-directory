# openapi_client.OrderApi

All URIs are relative to */api/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**order_confirm_post**](OrderApi.md#order_confirm_post) | **POST** /order/confirm | Confirms an order from a quote_id and submits it to the Voodoo factory. 
[**order_create_post**](OrderApi.md#order_create_post) | **POST** /order/create | Quotes an order and returns a quote_id that is used to confirm the order. 
[**order_get**](OrderApi.md#order_get) | **GET** /order | Lists all orders. 
[**order_order_id_get**](OrderApi.md#order_order_id_get) | **GET** /order/{order_id} | Retrieve a previously created model by its id. 
[**order_shipping_post**](OrderApi.md#order_shipping_post) | **POST** /order/shipping | List shipping options and prices for a given shipment. 


# **order_confirm_post**
> OrderConfirmPost200Response order_confirm_post(body)

Confirms an order from a quote_id and submits it to the Voodoo factory. 

After generating a quote for an order, you can choose to confirm the order for manufacturing by hitting this endpoint with the quote_id returned by the /order/quote endpoint. Returns the order with a unique order_id in place of the quote_id. 

### Example

* Api Key Authentication (Voodoo Manufacturing API Key):

```python
import openapi_client
from openapi_client.models.confirm_order_body import ConfirmOrderBody
from openapi_client.models.order_confirm_post200_response import OrderConfirmPost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Voodoo Manufacturing API Key
configuration.api_key['Voodoo Manufacturing API Key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Voodoo Manufacturing API Key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    body = openapi_client.ConfirmOrderBody() # ConfirmOrderBody | 

    try:
        # Confirms an order from a quote_id and submits it to the Voodoo factory. 
        api_response = api_instance.order_confirm_post(body)
        print("The response of OrderApi->order_confirm_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_confirm_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ConfirmOrderBody**](ConfirmOrderBody.md)|  | 

### Return type

[**OrderConfirmPost200Response**](OrderConfirmPost200Response.md)

### Authorization

[Voodoo Manufacturing API Key](../README.md#Voodoo Manufacturing API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Order info with order_id |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_create_post**
> OrderCreatePost200Response order_create_post(body)

Quotes an order and returns a quote_id that is used to confirm the order. 

Creates an order for the requested items, shipping address, and shipping method. This method returns the order along with a quote_id, which needs to be confirmed with /order/confirm prior to the order actually being started. quote_ids are only valid for 15 minutes. 

### Example

* Api Key Authentication (Voodoo Manufacturing API Key):

```python
import openapi_client
from openapi_client.models.create_order_body import CreateOrderBody
from openapi_client.models.order_create_post200_response import OrderCreatePost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Voodoo Manufacturing API Key
configuration.api_key['Voodoo Manufacturing API Key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Voodoo Manufacturing API Key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    body = openapi_client.CreateOrderBody() # CreateOrderBody | 

    try:
        # Quotes an order and returns a quote_id that is used to confirm the order. 
        api_response = api_instance.order_create_post(body)
        print("The response of OrderApi->order_create_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_create_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateOrderBody**](CreateOrderBody.md)|  | 

### Return type

[**OrderCreatePost200Response**](OrderCreatePost200Response.md)

### Authorization

[Voodoo Manufacturing API Key](../README.md#Voodoo Manufacturing API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quote and order information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_get**
> List[Order] order_get()

Lists all orders. 

Gets all of orders that you've confirmed. 

### Example

* Api Key Authentication (Voodoo Manufacturing API Key):

```python
import openapi_client
from openapi_client.models.order import Order
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Voodoo Manufacturing API Key
configuration.api_key['Voodoo Manufacturing API Key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Voodoo Manufacturing API Key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)

    try:
        # Lists all orders. 
        api_response = api_instance.order_get()
        print("The response of OrderApi->order_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Order]**](Order.md)

### Authorization

[Voodoo Manufacturing API Key](../README.md#Voodoo Manufacturing API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of orders |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_order_id_get**
> Order order_order_id_get(order_id)

Retrieve a previously created model by its id. 

In cases where you're ordering models you've created previously, you can fetch a specific model by its id. 

### Example

* Api Key Authentication (Voodoo Manufacturing API Key):

```python
import openapi_client
from openapi_client.models.order import Order
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Voodoo Manufacturing API Key
configuration.api_key['Voodoo Manufacturing API Key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Voodoo Manufacturing API Key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    order_id = 'order_id_example' # str | 

    try:
        # Retrieve a previously created model by its id. 
        api_response = api_instance.order_order_id_get(order_id)
        print("The response of OrderApi->order_order_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_order_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 

### Return type

[**Order**](Order.md)

### Authorization

[Voodoo Manufacturing API Key](../README.md#Voodoo Manufacturing API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Model object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_shipping_post**
> OrderShippingPost200Response order_shipping_post(body)

List shipping options and prices for a given shipment. 

Get quotes for shipping your order to the given shipping address. Because shipping quotes depend on the items being shipped, you should use the same array of print descriptions here that you do to create the order.  This endpoint should allow you to select the appropriate shipping method using the \"service\" field of the desired shipping method. 

### Example

* Api Key Authentication (Voodoo Manufacturing API Key):

```python
import openapi_client
from openapi_client.models.order_shipping_post200_response import OrderShippingPost200Response
from openapi_client.models.shipping_options_body import ShippingOptionsBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Voodoo Manufacturing API Key
configuration.api_key['Voodoo Manufacturing API Key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Voodoo Manufacturing API Key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrderApi(api_client)
    body = openapi_client.ShippingOptionsBody() # ShippingOptionsBody | 

    try:
        # List shipping options and prices for a given shipment. 
        api_response = api_instance.order_shipping_post(body)
        print("The response of OrderApi->order_shipping_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderApi->order_shipping_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShippingOptionsBody**](ShippingOptionsBody.md)|  | 

### Return type

[**OrderShippingPost200Response**](OrderShippingPost200Response.md)

### Authorization

[Voodoo Manufacturing API Key](../README.md#Voodoo Manufacturing API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Object containing an array of shipping rates |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

