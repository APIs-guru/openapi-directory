# openapi_client.ProductsApi

All URIs are relative to *https://api.brandlovers.com/marketplace/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_sku_seller_id_put**](ProductsApi.md#product_sku_seller_id_put) | **PUT** /product/{skuSellerId} | Update product details
[**products_get**](ProductsApi.md#products_get) | **GET** /products | Returns a list of products loaded into BrandLovers Marketplace
[**products_post**](ProductsApi.md#products_post) | **POST** /products | Allows new products from the seller to be loaded into the marketplace
[**products_prices_put**](ProductsApi.md#products_prices_put) | **PUT** /products/prices | Allows bulk update of product prices.
[**products_status_get**](ProductsApi.md#products_status_get) | **GET** /products/status | Returns seller products status in the marketplace
[**products_status_put**](ProductsApi.md#products_status_put) | **PUT** /products/status | Bulk enable/disable products in the marketplace
[**products_status_selling_get**](ProductsApi.md#products_status_selling_get) | **GET** /products/status/selling | Returns products that are successfully listed for sale.
[**products_stocks_put**](ProductsApi.md#products_stocks_put) | **PUT** /products/stocks | Bulk product stock update


# **product_sku_seller_id_put**
> product_sku_seller_id_put(authorization, sku_seller_id, body)

Update product details

Update a single product information such as name, brand, attribute, dimension, etc. Please note that data from your request will be merged with existing data. This allows you to easliy update only certain fields without the need to re-inform the other unchanged fields. For example in order to update just the field `title` simply send just this field with new information, remaining fields will not be changed. In order to erase an item the field must be informed as its default value, for example in order to erase the `videos` field must be sent as videos:[]. The `skuSellerId` field is always mandatory in the path and in the product json Object.

### Example

* Api Key Authentication (authorization):

```python
import openapi_client
from openapi_client.models.product_update import ProductUpdate
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
    api_instance = openapi_client.ProductsApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    sku_seller_id = 'sku_seller_id_example' # str | Unique Product Id (SKU) in the seller system that will be updated.
    body = openapi_client.ProductUpdate() # ProductUpdate | New product information.

    try:
        # Update product details
        api_instance.product_sku_seller_id_put(authorization, sku_seller_id, body)
    except Exception as e:
        print("Exception when calling ProductsApi->product_sku_seller_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **sku_seller_id** | **str**| Unique Product Id (SKU) in the seller system that will be updated. | 
 **body** | [**ProductUpdate**](ProductUpdate.md)| New product information. | 

### Return type

void (empty response body)

### Authorization

[authorization](../README.md#authorization)

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
**404** | Object not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_get**
> GetProductsResponse products_get(authorization, offset=offset, limit=limit)

Returns a list of products loaded into BrandLovers Marketplace

Get a list of my products loaded into the Marketplace. This dosen't means that products are eligible for sale, just that they are loaded in the database.

### Example

* Api Key Authentication (authorization):

```python
import openapi_client
from openapi_client.models.get_products_response import GetProductsResponse
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
    api_instance = openapi_client.ProductsApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 56 # int | Number of items to retun. Defaults to 100. Max alowed is 200. Use this conjuction with `offset` to paginate across the results. (optional)

    try:
        # Returns a list of products loaded into BrandLovers Marketplace
        api_response = api_instance.products_get(authorization, offset=offset, limit=limit)
        print("The response of ProductsApi->products_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number of items to retun. Defaults to 100. Max alowed is 200. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] 

### Return type

[**GetProductsResponse**](GetProductsResponse.md)

### Authorization

[authorization](../README.md#authorization)

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

# **products_post**
> products_post(authorization, products)

Allows new products from the seller to be loaded into the marketplace

This enpoint to creates new products in the Marketplace using `skuSellerId` as a primary key. This enpoint expects a json document with array of products. The server will load each product as an individual item that can be manipulated using your own `skuSellerId`. All requests to This endpoint are idenpontent with respect of the `skuSellerId`, this means that once a `skuSellerId` is created it cannot be re-created using this tool. In order to update use the PUT method with the correct `skuSellerId`. You can also use the POST /product to create a single product per request

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
    api_instance = openapi_client.ProductsApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    products = [openapi_client.Product()] # List[Product] | JSON with a list of new products to be updloaded to the platform

    try:
        # Allows new products from the seller to be loaded into the marketplace
        api_instance.products_post(authorization, products)
    except Exception as e:
        print("Exception when calling ProductsApi->products_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **products** | [**List[Product]**](Product.md)| JSON with a list of new products to be updloaded to the platform | 

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

# **products_prices_put**
> products_prices_put(authorization, body)

Allows bulk update of product prices.

Allows bulk update of product prices. This endpoint expects a json document with an array of products with the `skuSellerId` and the new price. Server will process each new product update individually and will ackwlodge as much updates as possible, even if a single product update fails. After this request you can query product final status with GET /product/status

### Example


```python
import openapi_client
from openapi_client.models.seller_item_prices import SellerItemPrices
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
    api_instance = openapi_client.ProductsApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    body = [openapi_client.SellerItemPrices()] # List[SellerItemPrices] | Data for bulk product price update

    try:
        # Allows bulk update of product prices.
        api_instance.products_prices_put(authorization, body)
    except Exception as e:
        print("Exception when calling ProductsApi->products_prices_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **body** | [**List[SellerItemPrices]**](SellerItemPrices.md)| Data for bulk product price update | 

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

# **products_status_get**
> GetSellerProductsStatus products_status_get(authorization, offset=offset, limit=limit)

Returns seller products status in the marketplace

Returns a list with seller products status. Please note that this endpoint will not return all details of each product, just the skuSellerId and status. Also please note that this endpoint will return 250 products per call. For full details of a given procuct use GET /product/{skuSellerId}

### Example


```python
import openapi_client
from openapi_client.models.get_seller_products_status import GetSellerProductsStatus
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
    api_instance = openapi_client.ProductsApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 56 # int | Number of items to return in this query. Defaults to 250. Maximum 1000. Use this conjuction with `offset` to paginate across the results. (optional)

    try:
        # Returns seller products status in the marketplace
        api_response = api_instance.products_status_get(authorization, offset=offset, limit=limit)
        print("The response of ProductsApi->products_status_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_status_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number of items to return in this query. Defaults to 250. Maximum 1000. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] 

### Return type

[**GetSellerProductsStatus**](GetSellerProductsStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success fetching results. |  -  |
**403** | Server refused to process your request. Please check the API SLA and reduce number of requests per second. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_status_put**
> products_status_put(authorization, body)

Bulk enable/disable products in the marketplace

Bulk enable/disable products in the marketplace. This endpoint requires an array of objects with the seller SKU `skuSellerId` and boolean value that defines if the product is enabled or not for sale. This endpoint can be used to set a single product or many products.

### Example


```python
import openapi_client
from openapi_client.models.product_status_update import ProductStatusUpdate
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
    api_instance = openapi_client.ProductsApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    body = [openapi_client.ProductStatusUpdate()] # List[ProductStatusUpdate] | List of seller products with new status information

    try:
        # Bulk enable/disable products in the marketplace
        api_instance.products_status_put(authorization, body)
    except Exception as e:
        print("Exception when calling ProductsApi->products_status_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **body** | [**List[ProductStatusUpdate]**](ProductStatusUpdate.md)| List of seller products with new status information | 

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

# **products_status_selling_get**
> GetProductsStatusSelling products_status_selling_get(authorization, offset=offset, limit=limit)

Returns products that are successfully listed for sale.

Returns products that are successfully listed for sale.

### Example


```python
import openapi_client
from openapi_client.models.get_products_status_selling import GetProductsStatusSelling
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
    api_instance = openapi_client.ProductsApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 56 # int | Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results. (optional)

    try:
        # Returns products that are successfully listed for sale.
        api_response = api_instance.products_status_selling_get(authorization, offset=offset, limit=limit)
        print("The response of ProductsApi->products_status_selling_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_status_selling_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number or items to return when executing query. Defaults to 10. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] 

### Return type

[**GetProductsStatusSelling**](GetProductsStatusSelling.md)

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

# **products_stocks_put**
> products_stocks_put(authorization, body)

Bulk product stock update

Bulk product stock update. This endpoint expect a array of products `skuSellerId` with new inventory data

### Example


```python
import openapi_client
from openapi_client.models.product_stock import ProductStock
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
    api_instance = openapi_client.ProductsApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    body = [openapi_client.ProductStock()] # List[ProductStock] | Array of product SKUs.

    try:
        # Bulk product stock update
        api_instance.products_stocks_put(authorization, body)
    except Exception as e:
        print("Exception when calling ProductsApi->products_stocks_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **body** | [**List[ProductStock]**](ProductStock.md)| Array of product SKUs. | 

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

