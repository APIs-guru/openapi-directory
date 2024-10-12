# openapi_client.ProductsApi

All URIs are relative to *https://app.billbee.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**article_create_article**](ProductsApi.md#article_create_article) | **POST** /api/v1/products | Creates a new product
[**article_delete_article**](ProductsApi.md#article_delete_article) | **DELETE** /api/v1/products/{id} | Deletes a product
[**article_delete_image**](ProductsApi.md#article_delete_image) | **DELETE** /api/v1/products/images/{imageId} | Deletes a single image by id
[**article_delete_image_from_product**](ProductsApi.md#article_delete_image_from_product) | **DELETE** /api/v1/products/{productId}/images/{imageId} | Deletes a single image from a product
[**article_delete_images**](ProductsApi.md#article_delete_images) | **POST** /api/v1/products/images/delete | Delete multiple images by id
[**article_get_article**](ProductsApi.md#article_get_article) | **GET** /api/v1/products/{id} | Queries a single article by id or by sku
[**article_get_category**](ProductsApi.md#article_get_category) | **GET** /api/v1/products/category | GEts a list of all defined categories
[**article_get_custom_field**](ProductsApi.md#article_get_custom_field) | **GET** /api/v1/products/custom-fields/{id} | Queries a single custom field
[**article_get_custom_fields**](ProductsApi.md#article_get_custom_fields) | **GET** /api/v1/products/custom-fields | Queries a list of all custom fields
[**article_get_image**](ProductsApi.md#article_get_image) | **GET** /api/v1/products/images/{imageId} | Returns a single image by id
[**article_get_image_from_product**](ProductsApi.md#article_get_image_from_product) | **GET** /api/v1/products/{productId}/images/{imageId} | Returns a single image by id
[**article_get_images**](ProductsApi.md#article_get_images) | **GET** /api/v1/products/{productId}/images | Returns a list of all images of the product
[**article_get_list**](ProductsApi.md#article_get_list) | **GET** /api/v1/products | Get a list of all products
[**article_get_patchable_fields**](ProductsApi.md#article_get_patchable_fields) | **GET** /api/v1/products/PatchableFields | Returns a list of fields which can be updated with the patch call
[**article_get_reserved_amount**](ProductsApi.md#article_get_reserved_amount) | **GET** /api/v1/products/reservedamount | Queries the reserved amount for a single article by id or by sku
[**article_get_stocks**](ProductsApi.md#article_get_stocks) | **GET** /api/v1/products/stocks | Query all defined stock locations
[**article_patch_article**](ProductsApi.md#article_patch_article) | **PATCH** /api/v1/products/{id} | Updates one or more fields of a product
[**article_put_image**](ProductsApi.md#article_put_image) | **PUT** /api/v1/products/{productId}/images/{imageId} | Add or update an existing image of a product
[**article_put_images**](ProductsApi.md#article_put_images) | **PUT** /api/v1/products/{productId}/images | Add multiple images to a product or replace the product images by the given images
[**article_update_stock**](ProductsApi.md#article_update_stock) | **POST** /api/v1/products/updatestock | Update the stock qty of an article
[**article_update_stock_code**](ProductsApi.md#article_update_stock_code) | **POST** /api/v1/products/updatestockcode | Update the stock code of an article
[**article_update_stock_multiple**](ProductsApi.md#article_update_stock_multiple) | **POST** /api/v1/products/updatestockmultiple | Update the stock qty for multiple articles at once
[**search_search**](ProductsApi.md#search_search) | **POST** /api/v1/search | Search for products, customers and orders.  Type can be \&quot;order\&quot;, \&quot;product\&quot; and / or \&quot;customer\&quot;  Term can contains lucene query syntax


# **article_create_article**
> object article_create_article(billbee_interfaces_billbee_api_model_article_api_model)

Creates a new product

### Example


```python
import openapi_client
from openapi_client.models.billbee_interfaces_billbee_api_model_article_api_model import BillbeeInterfacesBillbeeAPIModelArticleApiModel
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
    api_instance = openapi_client.ProductsApi(api_client)
    billbee_interfaces_billbee_api_model_article_api_model = openapi_client.BillbeeInterfacesBillbeeAPIModelArticleApiModel() # BillbeeInterfacesBillbeeAPIModelArticleApiModel | 

    try:
        # Creates a new product
        api_response = api_instance.article_create_article(billbee_interfaces_billbee_api_model_article_api_model)
        print("The response of ProductsApi->article_create_article:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_create_article: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billbee_interfaces_billbee_api_model_article_api_model** | [**BillbeeInterfacesBillbeeAPIModelArticleApiModel**](BillbeeInterfacesBillbeeAPIModelArticleApiModel.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **article_delete_article**
> object article_delete_article(id)

Deletes a product

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
    api_instance = openapi_client.ProductsApi(api_client)
    id = 56 # int | The id of the Product

    try:
        # Deletes a product
        api_response = api_instance.article_delete_article(id)
        print("The response of ProductsApi->article_delete_article:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_delete_article: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the Product | 

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

# **article_delete_image**
> object article_delete_image(image_id)

Deletes a single image by id

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
    api_instance = openapi_client.ProductsApi(api_client)
    image_id = 56 # int | The image id

    try:
        # Deletes a single image by id
        api_response = api_instance.article_delete_image(image_id)
        print("The response of ProductsApi->article_delete_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_delete_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_id** | **int**| The image id | 

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

# **article_delete_image_from_product**
> object article_delete_image_from_product(product_id, image_id)

Deletes a single image from a product

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
    api_instance = openapi_client.ProductsApi(api_client)
    product_id = 56 # int | The product id
    image_id = 56 # int | The image id

    try:
        # Deletes a single image from a product
        api_response = api_instance.article_delete_image_from_product(product_id, image_id)
        print("The response of ProductsApi->article_delete_image_from_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_delete_image_from_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **int**| The product id | 
 **image_id** | **int**| The image id | 

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

# **article_delete_images**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelDeletedImagesModel article_delete_images(request_body)

Delete multiple images by id

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_deleted_images_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelDeletedImagesModel
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
    api_instance = openapi_client.ProductsApi(api_client)
    request_body = [56] # List[int] | 

    try:
        # Delete multiple images by id
        api_response = api_instance.article_delete_images(request_body)
        print("The response of ProductsApi->article_delete_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_delete_images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_body** | [**List[int]**](int.md)|  | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelDeletedImagesModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelDeletedImagesModel.md)

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

# **article_get_article**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleApiModel article_get_article(id, lookup_by=lookup_by)

Queries a single article by id or by sku

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_article_api_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleApiModel
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
    api_instance = openapi_client.ProductsApi(api_client)
    id = 'id_example' # str | The id or the sku of the article to query
    lookup_by = 'lookup_by_example' # str | Either the value id, ean or the value sku to specify the meaning of the id parameter. (optional)

    try:
        # Queries a single article by id or by sku
        api_response = api_instance.article_get_article(id, lookup_by=lookup_by)
        print("The response of ProductsApi->article_get_article:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_get_article: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id or the sku of the article to query | 
 **lookup_by** | **str**| Either the value id, ean or the value sku to specify the meaning of the id parameter. | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleApiModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleApiModel.md)

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

# **article_get_category**
> object article_get_category()

GEts a list of all defined categories

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
    api_instance = openapi_client.ProductsApi(api_client)

    try:
        # GEts a list of all defined categories
        api_response = api_instance.article_get_category()
        print("The response of ProductsApi->article_get_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_get_category: %s\n" % e)
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

# **article_get_custom_field**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldDefinitionModel article_get_custom_field(id)

Queries a single custom field

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_article_api_custom_field_definition_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldDefinitionModel
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
    api_instance = openapi_client.ProductsApi(api_client)
    id = 56 # int | The id of the custom field to query

    try:
        # Queries a single custom field
        api_response = api_instance.article_get_custom_field(id)
        print("The response of ProductsApi->article_get_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_get_custom_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the custom field to query | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldDefinitionModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldDefinitionModel.md)

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

# **article_get_custom_fields**
> RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldDefinitionModel article_get_custom_fields(page=page, page_size=page_size)

Queries a list of all custom fields

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_paged_result_system_collections_generic_list_billbee_interfaces_billbee_api_model_article_api_custom_field_definition_model import RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldDefinitionModel
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
    api_instance = openapi_client.ProductsApi(api_client)
    page = 56 # int |  (optional)
    page_size = 56 # int |  (optional)

    try:
        # Queries a list of all custom fields
        api_response = api_instance.article_get_custom_fields(page=page, page_size=page_size)
        print("The response of ProductsApi->article_get_custom_fields:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_get_custom_fields: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] 
 **page_size** | **int**|  | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldDefinitionModel**](RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldDefinitionModel.md)

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

# **article_get_image**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel article_get_image(image_id)

Returns a single image by id

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_article_image_relation_api_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel
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
    api_instance = openapi_client.ProductsApi(api_client)
    image_id = 56 # int | The Id of the image

    try:
        # Returns a single image by id
        api_response = api_instance.article_get_image(image_id)
        print("The response of ProductsApi->article_get_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_get_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_id** | **int**| The Id of the image | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel.md)

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

# **article_get_image_from_product**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel article_get_image_from_product(product_id, image_id)

Returns a single image by id

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_article_image_relation_api_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel
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
    api_instance = openapi_client.ProductsApi(api_client)
    product_id = 56 # int | The Id of the product
    image_id = 56 # int | The Id of the image

    try:
        # Returns a single image by id
        api_response = api_instance.article_get_image_from_product(product_id, image_id)
        print("The response of ProductsApi->article_get_image_from_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_get_image_from_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **int**| The Id of the product | 
 **image_id** | **int**| The Id of the image | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel.md)

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

# **article_get_images**
> RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel article_get_images(product_id)

Returns a list of all images of the product

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_system_collections_generic_list_billbee_interfaces_billbee_api_model_article_image_relation_api_model import RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel
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
    api_instance = openapi_client.ProductsApi(api_client)
    product_id = 56 # int | The Id of the product

    try:
        # Returns a list of all images of the product
        api_response = api_instance.article_get_images(product_id)
        print("The response of ProductsApi->article_get_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_get_images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **int**| The Id of the product | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel**](RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel.md)

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

# **article_get_list**
> RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleApiModel article_get_list(page=page, page_size=page_size, min_created_at=min_created_at, minimum_bill_bee_article_id=minimum_bill_bee_article_id, maximum_bill_bee_article_id=maximum_bill_bee_article_id)

Get a list of all products

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_paged_result_system_collections_generic_list_billbee_interfaces_billbee_api_model_article_api_model import RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleApiModel
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
    api_instance = openapi_client.ProductsApi(api_client)
    page = 56 # int | The current page to request starting with 1 (optional)
    page_size = 56 # int | The pagesize for the result list. Values between 1 and 250 are allowed (optional)
    min_created_at = '2013-10-20T19:20:30+01:00' # datetime | Optional the oldest create date of the articles to be returned (optional)
    minimum_bill_bee_article_id = 56 # int |  (optional)
    maximum_bill_bee_article_id = 56 # int |  (optional)

    try:
        # Get a list of all products
        api_response = api_instance.article_get_list(page=page, page_size=page_size, min_created_at=min_created_at, minimum_bill_bee_article_id=minimum_bill_bee_article_id, maximum_bill_bee_article_id=maximum_bill_bee_article_id)
        print("The response of ProductsApi->article_get_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_get_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The current page to request starting with 1 | [optional] 
 **page_size** | **int**| The pagesize for the result list. Values between 1 and 250 are allowed | [optional] 
 **min_created_at** | **datetime**| Optional the oldest create date of the articles to be returned | [optional] 
 **minimum_bill_bee_article_id** | **int**|  | [optional] 
 **maximum_bill_bee_article_id** | **int**|  | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleApiModel**](RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleApiModel.md)

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

# **article_get_patchable_fields**
> object article_get_patchable_fields()

Returns a list of fields which can be updated with the patch call

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
    api_instance = openapi_client.ProductsApi(api_client)

    try:
        # Returns a list of fields which can be updated with the patch call
        api_response = api_instance.article_get_patchable_fields()
        print("The response of ProductsApi->article_get_patchable_fields:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_get_patchable_fields: %s\n" % e)
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

# **article_get_reserved_amount**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelGetReservedAmountResponseData article_get_reserved_amount(id, lookup_by=lookup_by, stock_id=stock_id)

Queries the reserved amount for a single article by id or by sku

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_get_reserved_amount_response_data import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelGetReservedAmountResponseData
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
    api_instance = openapi_client.ProductsApi(api_client)
    id = 'id_example' # str | The id or the sku of the article to query
    lookup_by = 'lookup_by_example' # str | Either the value id or the value sku to specify the meaning of the id parameter (optional)
    stock_id = 56 # int | Optional the stock id if the multi stock feature is enabled (optional)

    try:
        # Queries the reserved amount for a single article by id or by sku
        api_response = api_instance.article_get_reserved_amount(id, lookup_by=lookup_by, stock_id=stock_id)
        print("The response of ProductsApi->article_get_reserved_amount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_get_reserved_amount: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id or the sku of the article to query | 
 **lookup_by** | **str**| Either the value id or the value sku to specify the meaning of the id parameter | [optional] 
 **stock_id** | **int**| Optional the stock id if the multi stock feature is enabled | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelGetReservedAmountResponseData**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelGetReservedAmountResponseData.md)

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

# **article_get_stocks**
> RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelStockResponseData article_get_stocks()

Query all defined stock locations

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_system_collections_generic_list_billbee_interfaces_billbee_api_model_stock_response_data import RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelStockResponseData
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
    api_instance = openapi_client.ProductsApi(api_client)

    try:
        # Query all defined stock locations
        api_response = api_instance.article_get_stocks()
        print("The response of ProductsApi->article_get_stocks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_get_stocks: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelStockResponseData**](RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelStockResponseData.md)

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

# **article_patch_article**
> object article_patch_article(id, body)

Updates one or more fields of a product

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
    api_instance = openapi_client.ProductsApi(api_client)
    id = 56 # int | The id of the Product
    body = None # object | 

    try:
        # Updates one or more fields of a product
        api_response = api_instance.article_patch_article(id, body)
        print("The response of ProductsApi->article_patch_article:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_patch_article: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the Product | 
 **body** | **object**|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **article_put_image**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel article_put_image(product_id, image_id, billbee_interfaces_billbee_api_model_article_image_relation_api_model)

Add or update an existing image of a product

### Example


```python
import openapi_client
from openapi_client.models.billbee_interfaces_billbee_api_model_article_image_relation_api_model import BillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_article_image_relation_api_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel
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
    api_instance = openapi_client.ProductsApi(api_client)
    product_id = 56 # int | The product id
    image_id = 56 # int | The image id. If you pass 0, the image will be added
    billbee_interfaces_billbee_api_model_article_image_relation_api_model = openapi_client.BillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel() # BillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel | The ArticleApiImageModel

    try:
        # Add or update an existing image of a product
        api_response = api_instance.article_put_image(product_id, image_id, billbee_interfaces_billbee_api_model_article_image_relation_api_model)
        print("The response of ProductsApi->article_put_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_put_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **int**| The product id | 
 **image_id** | **int**| The image id. If you pass 0, the image will be added | 
 **billbee_interfaces_billbee_api_model_article_image_relation_api_model** | [**BillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel**](BillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel.md)| The ArticleApiImageModel | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel.md)

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

# **article_put_images**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel article_put_images(product_id, billbee_interfaces_billbee_api_model_article_image_relation_api_model, replace=replace)

Add multiple images to a product or replace the product images by the given images

### Example


```python
import openapi_client
from openapi_client.models.billbee_interfaces_billbee_api_model_article_image_relation_api_model import BillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_article_image_relation_api_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel
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
    api_instance = openapi_client.ProductsApi(api_client)
    product_id = 56 # int | The id of the product
    billbee_interfaces_billbee_api_model_article_image_relation_api_model = [openapi_client.BillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel()] # List[BillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel] | An array of ArticleApiImageModel
    replace = True # bool | If you pass true, the images will be replaced by the passed images. Otherwise the passed images will be appended to the product. (optional)

    try:
        # Add multiple images to a product or replace the product images by the given images
        api_response = api_instance.article_put_images(product_id, billbee_interfaces_billbee_api_model_article_image_relation_api_model, replace=replace)
        print("The response of ProductsApi->article_put_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_put_images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **int**| The id of the product | 
 **billbee_interfaces_billbee_api_model_article_image_relation_api_model** | [**List[BillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel]**](BillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel.md)| An array of ArticleApiImageModel | 
 **replace** | **bool**| If you pass true, the images will be replaced by the passed images. Otherwise the passed images will be appended to the product. | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel.md)

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

# **article_update_stock**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData article_update_stock(billbee_interfaces_billbee_api_model_update_stock_api_model)

Update the stock qty of an article

The article is specified by sku. You have to send the absolute value for the current stock

### Example


```python
import openapi_client
from openapi_client.models.billbee_interfaces_billbee_api_model_update_stock_api_model import BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_update_stock_response_data import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData
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
    api_instance = openapi_client.ProductsApi(api_client)
    billbee_interfaces_billbee_api_model_update_stock_api_model = openapi_client.BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel() # BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel | 

    try:
        # Update the stock qty of an article
        api_response = api_instance.article_update_stock(billbee_interfaces_billbee_api_model_update_stock_api_model)
        print("The response of ProductsApi->article_update_stock:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_update_stock: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billbee_interfaces_billbee_api_model_update_stock_api_model** | [**BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel**](BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel.md)|  | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData.md)

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

# **article_update_stock_code**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData article_update_stock_code(billbee_interfaces_billbee_api_model_update_stock_code_api_model)

Update the stock code of an article

### Example


```python
import openapi_client
from openapi_client.models.billbee_interfaces_billbee_api_model_update_stock_code_api_model import BillbeeInterfacesBillbeeAPIModelUpdateStockCodeApiModel
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_update_stock_code_response_data import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData
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
    api_instance = openapi_client.ProductsApi(api_client)
    billbee_interfaces_billbee_api_model_update_stock_code_api_model = openapi_client.BillbeeInterfacesBillbeeAPIModelUpdateStockCodeApiModel() # BillbeeInterfacesBillbeeAPIModelUpdateStockCodeApiModel | 

    try:
        # Update the stock code of an article
        api_response = api_instance.article_update_stock_code(billbee_interfaces_billbee_api_model_update_stock_code_api_model)
        print("The response of ProductsApi->article_update_stock_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_update_stock_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billbee_interfaces_billbee_api_model_update_stock_code_api_model** | [**BillbeeInterfacesBillbeeAPIModelUpdateStockCodeApiModel**](BillbeeInterfacesBillbeeAPIModelUpdateStockCodeApiModel.md)|  | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData.md)

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

# **article_update_stock_multiple**
> List[RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData] article_update_stock_multiple(billbee_interfaces_billbee_api_model_update_stock_api_model)

Update the stock qty for multiple articles at once

### Example


```python
import openapi_client
from openapi_client.models.billbee_interfaces_billbee_api_model_update_stock_api_model import BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_update_stock_response_data import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData
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
    api_instance = openapi_client.ProductsApi(api_client)
    billbee_interfaces_billbee_api_model_update_stock_api_model = [openapi_client.BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel()] # List[BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel] | 

    try:
        # Update the stock qty for multiple articles at once
        api_response = api_instance.article_update_stock_multiple(billbee_interfaces_billbee_api_model_update_stock_api_model)
        print("The response of ProductsApi->article_update_stock_multiple:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->article_update_stock_multiple: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billbee_interfaces_billbee_api_model_update_stock_api_model** | [**List[BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel]**](BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel.md)|  | 

### Return type

[**List[RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData]**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData.md)

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

# **search_search**
> RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel search_search(rechnungsdruck_web_app_controllers_api_search_controller_search_model)

Search for products, customers and orders.  Type can be \"order\", \"product\" and / or \"customer\"  Term can contains lucene query syntax

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_rechnungsdruck_web_app_controllers_api_search_controller_search_results_model import RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel
from openapi_client.models.rechnungsdruck_web_app_controllers_api_search_controller_search_model import RechnungsdruckWebAppControllersApiSearchControllerSearchModel
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
    api_instance = openapi_client.ProductsApi(api_client)
    rechnungsdruck_web_app_controllers_api_search_controller_search_model = openapi_client.RechnungsdruckWebAppControllersApiSearchControllerSearchModel() # RechnungsdruckWebAppControllersApiSearchControllerSearchModel | 

    try:
        # Search for products, customers and orders.  Type can be \"order\", \"product\" and / or \"customer\"  Term can contains lucene query syntax
        api_response = api_instance.search_search(rechnungsdruck_web_app_controllers_api_search_controller_search_model)
        print("The response of ProductsApi->search_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->search_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rechnungsdruck_web_app_controllers_api_search_controller_search_model** | [**RechnungsdruckWebAppControllersApiSearchControllerSearchModel**](RechnungsdruckWebAppControllersApiSearchControllerSearchModel.md)|  | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel**](RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel.md)

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

