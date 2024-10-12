# openapi_client.ProductApi

All URIs are relative to *https://api.brandlovers.com/marketplace/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_post**](ProductApi.md#product_post) | **POST** /product | Create a new product to the marketplace
[**product_sku_seller_id_get**](ProductApi.md#product_sku_seller_id_get) | **GET** /product/{skuSellerId} | Returns details of a single product using the seller &#x60;skuSellerId&#x60;
[**product_sku_seller_id_prices_put**](ProductApi.md#product_sku_seller_id_prices_put) | **PUT** /product/{skuSellerId}/prices | Allows seller to update prices of a single SKU
[**product_sku_seller_id_status_put**](ProductApi.md#product_sku_seller_id_status_put) | **PUT** /product/{skuSellerId}/status | Enable/disable a single product in the Marketplace
[**product_sku_seller_id_stock_put**](ProductApi.md#product_sku_seller_id_stock_put) | **PUT** /product/{skuSellerId}/stock | Update a single product stock


# **product_post**
> product_post(authorization, product)

Create a new product to the marketplace

Use this enpoint to create a single new product to the Marketplace. This enpoint expects a json document with one product. If you whant to upload multiple products in a single API call use POST /products method. The server will load each product as an individual item that can be manipulated using your own `skuSellerId`. This system is idenpontent, this means that once a `skuSellerId` is created it cannot be re-created using this tool. In order to update, edit a product use the PUT method with the correct reference to your `skuSellerId`

### Example


```python
import openapi_client
from openapi_client.models.product import Product
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
    api_instance = openapi_client.ProductApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    product = openapi_client.Product() # Product | New Produt that will be create

    try:
        # Create a new product to the marketplace
        api_instance.product_post(authorization, product)
    except Exception as e:
        print("Exception when calling ProductApi->product_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **product** | [**Product**](Product.md)| New Produt that will be create | 

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
**200** | Sucess! Server received your request and will start background processing. |  -  |
**400** | Bad Request. |  -  |
**401** | Access denied. You&#39;re not authenticated or token expired. Check your request header the &#x60;authorization&#x60; field is required. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_sku_seller_id_get**
> GetProduct product_sku_seller_id_get(authorization, sku_seller_id)

Returns details of a single product using the seller `skuSellerId`

Returns detailed information of a single product with the seller `skuSellerId`. This service will return a json document with product detail, status, price, invetory among other infomarion availble in the Brand Lovers marketplace

### Example

* Api Key Authentication (authorization):

```python
import openapi_client
from openapi_client.models.get_product import GetProduct
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.brandlovers.com/marketplace/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.brandlovers.com/marketplace/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: authorization
configuration.api_key['authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    sku_seller_id = 'sku_seller_id_example' # str | SKU ID do Lojista.

    try:
        # Returns details of a single product using the seller `skuSellerId`
        api_response = api_instance.product_sku_seller_id_get(authorization, sku_seller_id)
        print("The response of ProductApi->product_sku_seller_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_sku_seller_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **sku_seller_id** | **str**| SKU ID do Lojista. | 

### Return type

[**GetProduct**](GetProduct.md)

### Authorization

[authorization](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |
**401** | Access denied. You&#39;re not authenticated or token expired. Check your request header the &#x60;authorization&#x60; field is required. |  -  |
**403** | Server refused to process your request. Please check the API SLA and reduce number of requests per second. |  -  |
**404** | Object not found. In general this means a invalid skuSellerId. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_sku_seller_id_prices_put**
> product_sku_seller_id_prices_put(authorization, sku_seller_id, body)

Allows seller to update prices of a single SKU

Allows seller to set the SKU prices (MSRP and/or offer price). All prices must be informed in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. Same as $1,2345.67 must be informed solely as 1234567

### Example


```python
import openapi_client
from openapi_client.models.product_price import ProductPrice
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
    api_instance = openapi_client.ProductApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    sku_seller_id = 'sku_seller_id_example' # str | Product SKU
    body = openapi_client.ProductPrice() # ProductPrice | JSON document with the SKU price

    try:
        # Allows seller to update prices of a single SKU
        api_instance.product_sku_seller_id_prices_put(authorization, sku_seller_id, body)
    except Exception as e:
        print("Exception when calling ProductApi->product_sku_seller_id_prices_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **sku_seller_id** | **str**| Product SKU | 
 **body** | [**ProductPrice**](ProductPrice.md)| JSON document with the SKU price | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_sku_seller_id_status_put**
> product_sku_seller_id_status_put(authorization, sku_seller_id, body)

Enable/disable a single product in the Marketplace

Update product status in the Marketplace. Set to `true` to enable, `false` to disable sale.

### Example


```python
import openapi_client
from openapi_client.models.seller_item_status import SellerItemStatus
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
    api_instance = openapi_client.ProductApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    sku_seller_id = 'sku_seller_id_example' # str | Unique Product Id (SKU) in the seller system
    body = openapi_client.SellerItemStatus() # SellerItemStatus | Seller SKU that will be enabled or disabled

    try:
        # Enable/disable a single product in the Marketplace
        api_instance.product_sku_seller_id_status_put(authorization, sku_seller_id, body)
    except Exception as e:
        print("Exception when calling ProductApi->product_sku_seller_id_status_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **sku_seller_id** | **str**| Unique Product Id (SKU) in the seller system | 
 **body** | [**SellerItemStatus**](SellerItemStatus.md)| Seller SKU that will be enabled or disabled | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_sku_seller_id_stock_put**
> product_sku_seller_id_stock_put(authorization, sku_seller_id, body)

Update a single product stock

Update a single product inventory information. Products with zero stock will not be eligible for sale.

### Example


```python
import openapi_client
from openapi_client.models.stock import Stock
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
    api_instance = openapi_client.ProductApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    sku_seller_id = 'sku_seller_id_example' # str | Unique Product Id (SKU) in the seller system that will be updated
    body = openapi_client.Stock() # Stock | New product inventory information

    try:
        # Update a single product stock
        api_instance.product_sku_seller_id_stock_put(authorization, sku_seller_id, body)
    except Exception as e:
        print("Exception when calling ProductApi->product_sku_seller_id_stock_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **sku_seller_id** | **str**| Unique Product Id (SKU) in the seller system that will be updated | 
 **body** | [**Stock**](Stock.md)| New product inventory information | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

