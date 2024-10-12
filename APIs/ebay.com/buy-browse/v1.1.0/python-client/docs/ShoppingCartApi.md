# openapi_client.ShoppingCartApi

All URIs are relative to *https://api.ebay.com/buy/browse/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_item**](ShoppingCartApi.md#add_item) | **POST** /shopping_cart/add_item | 
[**get_shopping_cart**](ShoppingCartApi.md#get_shopping_cart) | **GET** /shopping_cart/ | 
[**remove_item**](ShoppingCartApi.md#remove_item) | **POST** /shopping_cart/remove_item | 
[**update_quantity**](ShoppingCartApi.md#update_quantity) | **POST** /shopping_cart/update_quantity | 


# **add_item**
> RemoteShopcartResponse add_item(body=body)



This is an Experimental method. This method creates an eBay cart for the eBay member, if one does not exist, and adds items to that cart. Because a cart never expires, any item added to the cart will remain in the cart until it is removed. To use this method, you must submit a RESTful item ID and the quantity of the item. If the quantity value is greater than the number of available, the quantity value is changed to the number available and a warning is returned. For example, if there are 15 baseballs available and you set the quantity value to 50, the service automatically changes the value of quantity to 15. The response returns all the items in the eBay member's cart; items added to the cart while on ebay.com as well as items added to the cart using the Browse API. The quantity and state of an item changes often. If the item becomes &quot;unavailable&quot; such as, when the listing has ended or the item is out of stock, whether it has just been added to the cart or has been in the cart for some time, the item will be returned in the unavailableCartItems container. Note: There are differences between how legacy APIs, such as Finding, and RESTful APIs, such as Browse, return the identifier of an &quot;item&quot; and what the item ID represents. If you have an item ID from one of the legacy APIs, you can use the legacy item ID with the getItemByLegacyId method to retrieve the RESTful ID for that item. For more information about how to use legacy IDs with the Buy APIs, see Legacy API compatibility in the Buying Integration guide. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/shopping_cart/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/shopping_cart/ Note: This method is not available in the eBay API Explorer. Restrictions This method can be used only for eBay members. You can add only items with a FIXED_PRICE that accept PayPal as a payment. For a list of supported sites and other restrictions, see API Restrictions.

### Example

* OAuth Authentication (Authorization Code):

```python
import openapi_client
from openapi_client.models.add_cart_item_input import AddCartItemInput
from openapi_client.models.remote_shopcart_response import RemoteShopcartResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/buy/browse/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/buy/browse/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShoppingCartApi(api_client)
    body = openapi_client.AddCartItemInput() # AddCartItemInput |  (optional)

    try:
        api_response = api_instance.add_item(body=body)
        print("The response of ShoppingCartApi->add_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShoppingCartApi->add_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AddCartItemInput**](AddCartItemInput.md)|  | [optional] 

### Return type

[**RemoteShopcartResponse**](RemoteShopcartResponse.md)

### Authorization

[Authorization Code](../README.md#Authorization Code)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**403** | Insufficient permissions to fulfill the request |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_shopping_cart**
> RemoteShopcartResponse get_shopping_cart()



This is an experimental method. This method retrieves all the items in the eBay member's cart; items added to the cart while on ebay.com as well as items added to the cart using the Browse API. There are no URI parameters or request payload. The response returns the summary details of all the items in the eBay member's cart; items added to the cart while on ebay.com as well as items added to the cart using the Browse API. If the cart is empty, the response is HTTP 204. The quantity and state of an item changes often. If the item becomes &quot;unavailable&quot; such as, when the listing has ended or the item is out of stock, the item will be returned in the unavailableCartItems container. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/shopping_cart/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/shopping_cart/ Note: This method is not available in the eBay API Explorer. Restrictions This method can be used only for eBay members. For a list of supported sites and other restrictions, see API Restrictions.

### Example

* OAuth Authentication (Authorization Code):

```python
import openapi_client
from openapi_client.models.remote_shopcart_response import RemoteShopcartResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/buy/browse/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/buy/browse/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShoppingCartApi(api_client)

    try:
        api_response = api_instance.get_shopping_cart()
        print("The response of ShoppingCartApi->get_shopping_cart:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShoppingCartApi->get_shopping_cart: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**RemoteShopcartResponse**](RemoteShopcartResponse.md)

### Authorization

[Authorization Code](../README.md#Authorization Code)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_item**
> RemoteShopcartResponse remove_item(body=body)



This is an experimental method. This method removes a specific item from the eBay member's cart. You specify the ID of the item in the cart (cartItemId) that you want to remove. The response returns all the items in the eBay member's cart; items added to the cart while on ebay.com as well as items added to the cart using the Browse API. If you remove the last item in the cart, the response is HTTP 204. The quantity and state of an item changes often. If the item becomes &quot;unavailable&quot; such as, when the listing has ended or the item is out of stock, the item will be returned in the unavailableCartItems container. Note: The cartItemId is not the same as the item ID. The cartItemId is the identifier of a specific item in the cart and is generated when the item was added to the cart. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/shopping_cart/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/shopping_cart/ Note: This method is not available in the eBay API Explorer. Restrictions This method can be used only for eBay members. For a list of supported sites and other restrictions, see API Restrictions.

### Example

* OAuth Authentication (Authorization Code):

```python
import openapi_client
from openapi_client.models.remote_shopcart_response import RemoteShopcartResponse
from openapi_client.models.remove_cart_item_input import RemoveCartItemInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/buy/browse/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/buy/browse/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShoppingCartApi(api_client)
    body = openapi_client.RemoveCartItemInput() # RemoveCartItemInput |  (optional)

    try:
        api_response = api_instance.remove_item(body=body)
        print("The response of ShoppingCartApi->remove_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShoppingCartApi->remove_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RemoveCartItemInput**](RemoveCartItemInput.md)|  | [optional] 

### Return type

[**RemoteShopcartResponse**](RemoteShopcartResponse.md)

### Authorization

[Authorization Code](../README.md#Authorization Code)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**403** | Insufficient permissions to fulfill the request |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_quantity**
> RemoteShopcartResponse update_quantity(body=body)



This is an experimental method. This method updates the quantity value of a specific item in the eBay member's cart. You specify the ID of the item in the cart (cartItemId) and the new value for the quantity. If the quantity value is greater than the number of available, the quantity value is changed to the number available and a warning is returned. For example, if there are 15 baseballs available and you set the quantity value to 50, the service automatically changes the value of quantity to 15. The response returns all the items in the eBay member's cart; items added to the cart while on ebay.com as well as items added to the cart using the Browse API. The quantity and state of an item changes often. If the item becomes &quot;unavailable&quot; such as, the listing has ended or the item is out of stock, the item will be returned in the unavailableCartItems container. Note: The cartItemId is not the same as the item ID. The cartItemId is the identifier of a specific item in the cart and is generated when the item was added to the cart. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/shopping_cart/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/shopping_cart/ Note: This method is not available in the eBay API Explorer. Restrictions This method can be used only for eBay members. For a list of supported sites and other restrictions, see API Restrictions.

### Example

* OAuth Authentication (Authorization Code):

```python
import openapi_client
from openapi_client.models.remote_shopcart_response import RemoteShopcartResponse
from openapi_client.models.update_cart_item_input import UpdateCartItemInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/buy/browse/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/buy/browse/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShoppingCartApi(api_client)
    body = openapi_client.UpdateCartItemInput() # UpdateCartItemInput |  (optional)

    try:
        api_response = api_instance.update_quantity(body=body)
        print("The response of ShoppingCartApi->update_quantity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShoppingCartApi->update_quantity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCartItemInput**](UpdateCartItemInput.md)|  | [optional] 

### Return type

[**RemoteShopcartResponse**](RemoteShopcartResponse.md)

### Authorization

[Authorization Code](../README.md#Authorization Code)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Insufficient permissions to fulfill the request |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

