# openapi_client.ProductApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_add**](ProductApi.md#product_add) | **POST** /product.add.json | 
[**product_attribute_list**](ProductApi.md#product_attribute_list) | **GET** /product.attribute.list.json | 
[**product_attribute_value_set**](ProductApi.md#product_attribute_value_set) | **POST** /product.attribute.value.set.json | 
[**product_attribute_value_unset**](ProductApi.md#product_attribute_value_unset) | **POST** /product.attribute.value.unset.json | 
[**product_brand_list**](ProductApi.md#product_brand_list) | **GET** /product.brand.list.json | 
[**product_child_item_find**](ProductApi.md#product_child_item_find) | **GET** /product.child_item.find.json | 
[**product_child_item_info**](ProductApi.md#product_child_item_info) | **GET** /product.child_item.info.json | 
[**product_child_item_list**](ProductApi.md#product_child_item_list) | **GET** /product.child_item.list.json | 
[**product_count**](ProductApi.md#product_count) | **GET** /product.count.json | 
[**product_currency_add**](ProductApi.md#product_currency_add) | **POST** /product.currency.add.json | 
[**product_currency_list**](ProductApi.md#product_currency_list) | **GET** /product.currency.list.json | 
[**product_delete**](ProductApi.md#product_delete) | **DELETE** /product.delete.json | 
[**product_fields**](ProductApi.md#product_fields) | **GET** /product.fields.json | 
[**product_find**](ProductApi.md#product_find) | **GET** /product.find.json | 
[**product_image_add**](ProductApi.md#product_image_add) | **POST** /product.image.add.json | 
[**product_image_delete**](ProductApi.md#product_image_delete) | **DELETE** /product.image.delete.json | 
[**product_image_update**](ProductApi.md#product_image_update) | **PUT** /product.image.update.json | 
[**product_info**](ProductApi.md#product_info) | **GET** /product.info.json | 
[**product_list**](ProductApi.md#product_list) | **GET** /product.list.json | 
[**product_manufacturer_add**](ProductApi.md#product_manufacturer_add) | **POST** /product.manufacturer.add.json | 
[**product_option_add**](ProductApi.md#product_option_add) | **POST** /product.option.add.json | 
[**product_option_assign**](ProductApi.md#product_option_assign) | **POST** /product.option.assign.json | 
[**product_option_list**](ProductApi.md#product_option_list) | **GET** /product.option.list.json | 
[**product_option_value_add**](ProductApi.md#product_option_value_add) | **POST** /product.option.value.add.json | 
[**product_option_value_assign**](ProductApi.md#product_option_value_assign) | **POST** /product.option.value.assign.json | 
[**product_option_value_update**](ProductApi.md#product_option_value_update) | **PUT** /product.option.value.update.json | 
[**product_price_add**](ProductApi.md#product_price_add) | **POST** /product.price.add.json | 
[**product_price_delete**](ProductApi.md#product_price_delete) | **DELETE** /product.price.delete.json | 
[**product_price_update**](ProductApi.md#product_price_update) | **PUT** /product.price.update.json | 
[**product_review_list**](ProductApi.md#product_review_list) | **GET** /product.review.list.json | 
[**product_store_assign**](ProductApi.md#product_store_assign) | **POST** /product.store.assign.json | 
[**product_tax_add**](ProductApi.md#product_tax_add) | **POST** /product.tax.add.json | 
[**product_update**](ProductApi.md#product_update) | **PUT** /product.update.json | 
[**product_variant_add**](ProductApi.md#product_variant_add) | **POST** /product.variant.add.json | 
[**product_variant_count**](ProductApi.md#product_variant_count) | **GET** /product.variant.count.json | 
[**product_variant_delete**](ProductApi.md#product_variant_delete) | **DELETE** /product.variant.delete.json | 
[**product_variant_image_add**](ProductApi.md#product_variant_image_add) | **POST** /product.variant.image.add.json | 
[**product_variant_image_delete**](ProductApi.md#product_variant_image_delete) | **DELETE** /product.variant.image.delete.json | 
[**product_variant_info**](ProductApi.md#product_variant_info) | **GET** /product.variant.info.json | 
[**product_variant_list**](ProductApi.md#product_variant_list) | **GET** /product.variant.list.json | 
[**product_variant_price_add**](ProductApi.md#product_variant_price_add) | **POST** /product.variant.price.add.json | 
[**product_variant_price_delete**](ProductApi.md#product_variant_price_delete) | **DELETE** /product.variant.price.delete.json | 
[**product_variant_price_update**](ProductApi.md#product_variant_price_update) | **PUT** /product.variant.price.update.json | 
[**product_variant_update**](ProductApi.md#product_variant_update) | **PUT** /product.variant.update.json | 


# **product_add**
> ProductAdd200Response product_add(product_add)



Add new product to store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_add import ProductAdd
from openapi_client.models.product_add200_response import ProductAdd200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_add = openapi_client.ProductAdd() # ProductAdd | 

    try:
        api_response = api_instance.product_add(product_add)
        print("The response of ProductApi->product_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_add** | [**ProductAdd**](ProductAdd.md)|  | 

### Return type

[**ProductAdd200Response**](ProductAdd200Response.md)

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

# **product_attribute_list**
> ModelResponseProductAttributeList product_attribute_list(product_id, attribute_id=attribute_id, variant_id=variant_id, page_cursor=page_cursor, start=start, count=count, attribute_group_id=attribute_group_id, set_name=set_name, lang_id=lang_id, store_id=store_id, sort_by=sort_by, sort_direction=sort_direction, params=params, response_fields=response_fields, exclude=exclude)



Get list of attributes and values.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_product_attribute_list import ModelResponseProductAttributeList
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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Retrieves attributes specified by product id
    attribute_id = 'attribute_id_example' # str | Retrieves info for specified attribute_id (optional)
    variant_id = 'variant_id_example' # str | Defines product's variants specified by variant id (optional)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    attribute_group_id = 'attribute_group_id_example' # str | Filter by attribute_group_id (optional)
    set_name = 'set_name_example' # str | Retrieves attributes specified by set_name in Magento (optional)
    lang_id = 'lang_id_example' # str | Retrieves attributes specified by language id (optional)
    store_id = 'store_id_example' # str | Retrieves attributes specified by store id (optional)
    sort_by = 'attribute_id' # str | Set field to sort by (optional) (default to 'attribute_id')
    sort_direction = 'asc' # str | Set sorting direction (optional) (default to 'asc')
    params = 'attribute_id,name' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'attribute_id,name')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)

    try:
        api_response = api_instance.product_attribute_list(product_id, attribute_id=attribute_id, variant_id=variant_id, page_cursor=page_cursor, start=start, count=count, attribute_group_id=attribute_group_id, set_name=set_name, lang_id=lang_id, store_id=store_id, sort_by=sort_by, sort_direction=sort_direction, params=params, response_fields=response_fields, exclude=exclude)
        print("The response of ProductApi->product_attribute_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_attribute_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Retrieves attributes specified by product id | 
 **attribute_id** | **str**| Retrieves info for specified attribute_id | [optional] 
 **variant_id** | **str**| Defines product&#39;s variants specified by variant id | [optional] 
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **attribute_group_id** | **str**| Filter by attribute_group_id | [optional] 
 **set_name** | **str**| Retrieves attributes specified by set_name in Magento | [optional] 
 **lang_id** | **str**| Retrieves attributes specified by language id | [optional] 
 **store_id** | **str**| Retrieves attributes specified by store id | [optional] 
 **sort_by** | **str**| Set field to sort by | [optional] [default to &#39;attribute_id&#39;]
 **sort_direction** | **str**| Set sorting direction | [optional] [default to &#39;asc&#39;]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;attribute_id,name&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseProductAttributeList**](ModelResponseProductAttributeList.md)

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

# **product_attribute_value_set**
> ProductAttributeValueSet200Response product_attribute_value_set(product_id, attribute_id=attribute_id, attribute_group_id=attribute_group_id, attribute_name=attribute_name, value=value, value_id=value_id, lang_id=lang_id, store_id=store_id)



Set attribute value to product.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_attribute_value_set200_response import ProductAttributeValueSet200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Defines product id where the attribute should be added
    attribute_id = 'attribute_id_example' # str | Filter by attribute_id (optional)
    attribute_group_id = 'attribute_group_id_example' # str | Filter by attribute_group_id (optional)
    attribute_name = 'attribute_name_example' # str | Define attribute name (optional)
    value = 'value_example' # str | Define attribute value (optional)
    value_id = 56 # int | Define attribute value id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.product_attribute_value_set(product_id, attribute_id=attribute_id, attribute_group_id=attribute_group_id, attribute_name=attribute_name, value=value, value_id=value_id, lang_id=lang_id, store_id=store_id)
        print("The response of ProductApi->product_attribute_value_set:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_attribute_value_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Defines product id where the attribute should be added | 
 **attribute_id** | **str**| Filter by attribute_id | [optional] 
 **attribute_group_id** | **str**| Filter by attribute_group_id | [optional] 
 **attribute_name** | **str**| Define attribute name | [optional] 
 **value** | **str**| Define attribute value | [optional] 
 **value_id** | **int**| Define attribute value id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**ProductAttributeValueSet200Response**](ProductAttributeValueSet200Response.md)

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

# **product_attribute_value_unset**
> ProductAttributeValueUnset200Response product_attribute_value_unset(product_id, attribute_id, store_id=store_id, include_default=include_default, reindex=reindex, clear_cache=clear_cache)



Removes attribute value for a product.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_attribute_value_unset200_response import ProductAttributeValueUnset200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Product id
    attribute_id = 'attribute_id_example' # str | Attribute Id
    store_id = 'store_id_example' # str | Store Id (optional)
    include_default = False # bool | Boolean, whether or not to unset default value of the attribute, if applicable (optional) (default to False)
    reindex = True # bool | Is reindex required (optional) (default to True)
    clear_cache = True # bool | Is cache clear required (optional) (default to True)

    try:
        api_response = api_instance.product_attribute_value_unset(product_id, attribute_id, store_id=store_id, include_default=include_default, reindex=reindex, clear_cache=clear_cache)
        print("The response of ProductApi->product_attribute_value_unset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_attribute_value_unset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product id | 
 **attribute_id** | **str**| Attribute Id | 
 **store_id** | **str**| Store Id | [optional] 
 **include_default** | **bool**| Boolean, whether or not to unset default value of the attribute, if applicable | [optional] [default to False]
 **reindex** | **bool**| Is reindex required | [optional] [default to True]
 **clear_cache** | **bool**| Is cache clear required | [optional] [default to True]

### Return type

[**ProductAttributeValueUnset200Response**](ProductAttributeValueUnset200Response.md)

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

# **product_brand_list**
> ProductBrandList200Response product_brand_list(start=start, count=count, params=params, brand_ids=brand_ids, exclude=exclude, store_id=store_id, lang_id=lang_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, response_fields=response_fields)



Get list of brands from your store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_brand_list200_response import ProductBrandList200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    params = 'id,name,short_description,active,url' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,name,short_description,active,url')
    brand_ids = 'brand_ids_example' # str | Retrieves brands specified by brand ids (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)

    try:
        api_response = api_instance.product_brand_list(start=start, count=count, params=params, brand_ids=brand_ids, exclude=exclude, store_id=store_id, lang_id=lang_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, response_fields=response_fields)
        print("The response of ProductApi->product_brand_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_brand_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,short_description,active,url&#39;]
 **brand_ids** | **str**| Retrieves brands specified by brand ids | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 

### Return type

[**ProductBrandList200Response**](ProductBrandList200Response.md)

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

# **product_child_item_find**
> ProductChildItemFind200Response product_child_item_find(find_value, find_where=find_where, find_params=find_params, store_id=store_id)



Search product child item (bundled item or configurable product variant) in store catalog.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_child_item_find200_response import ProductChildItemFind200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    find_value = 'find_value_example' # str | Entity search that is specified by some value
    find_where = 'name' # str | Entity search that is specified by the comma-separated unique fields (optional) (default to 'name')
    find_params = 'whole_words' # str | Entity search that is specified by comma-separated parameters (optional) (default to 'whole_words')
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.product_child_item_find(find_value, find_where=find_where, find_params=find_params, store_id=store_id)
        print("The response of ProductApi->product_child_item_find:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_child_item_find: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **find_value** | **str**| Entity search that is specified by some value | 
 **find_where** | **str**| Entity search that is specified by the comma-separated unique fields | [optional] [default to &#39;name&#39;]
 **find_params** | **str**| Entity search that is specified by comma-separated parameters | [optional] [default to &#39;whole_words&#39;]
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**ProductChildItemFind200Response**](ProductChildItemFind200Response.md)

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

# **product_child_item_info**
> ProductChildItemInfo200Response product_child_item_info(product_id, id, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id, lang_id=lang_id, currency_id=currency_id)



Get child for specific product.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_child_item_info200_response import ProductChildItemInfo200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Filter by parent product id
    id = 'id_example' # str | Entity id
    params = 'force_all' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'force_all')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    currency_id = 'currency_id_example' # str | Currency Id (optional)

    try:
        api_response = api_instance.product_child_item_info(product_id, id, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id, lang_id=lang_id, currency_id=currency_id)
        print("The response of ProductApi->product_child_item_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_child_item_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Filter by parent product id | 
 **id** | **str**| Entity id | 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;force_all&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **currency_id** | **str**| Currency Id | [optional] 

### Return type

[**ProductChildItemInfo200Response**](ProductChildItemInfo200Response.md)

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

# **product_child_item_list**
> ModelResponseProductChildItemList product_child_item_list(page_cursor=page_cursor, start=start, count=count, params=params, response_fields=response_fields, exclude=exclude, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, product_id=product_id, product_ids=product_ids, store_id=store_id, lang_id=lang_id, currency_id=currency_id, avail_sale=avail_sale, report_request_id=report_request_id, disable_report_cache=disable_report_cache)



Get child items list of specific product(s).

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_product_child_item_list import ModelResponseProductChildItemList
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
    api_instance = openapi_client.ProductApi(api_client)
    page_cursor = 'page_cursor_example' # str | Used to retrieve products child items via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    params = 'force_all' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'force_all')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    product_id = 'product_id_example' # str | Filter by parent product id (optional)
    product_ids = 'product_ids_example' # str | Filter by parent product ids (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    currency_id = 'currency_id_example' # str | Currency Id (optional)
    avail_sale = True # bool | Specifies the set of available/not available products for sale (optional)
    report_request_id = 'report_request_id_example' # str | Report request id (optional)
    disable_report_cache = False # bool | Disable report cache for current request (optional) (default to False)

    try:
        api_response = api_instance.product_child_item_list(page_cursor=page_cursor, start=start, count=count, params=params, response_fields=response_fields, exclude=exclude, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, product_id=product_id, product_ids=product_ids, store_id=store_id, lang_id=lang_id, currency_id=currency_id, avail_sale=avail_sale, report_request_id=report_request_id, disable_report_cache=disable_report_cache)
        print("The response of ProductApi->product_child_item_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_child_item_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_cursor** | **str**| Used to retrieve products child items via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;force_all&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **product_id** | **str**| Filter by parent product id | [optional] 
 **product_ids** | **str**| Filter by parent product ids | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **currency_id** | **str**| Currency Id | [optional] 
 **avail_sale** | **bool**| Specifies the set of available/not available products for sale | [optional] 
 **report_request_id** | **str**| Report request id | [optional] 
 **disable_report_cache** | **bool**| Disable report cache for current request | [optional] [default to False]

### Return type

[**ModelResponseProductChildItemList**](ModelResponseProductChildItemList.md)

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

# **product_count**
> ProductCount200Response product_count(category_id=category_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, avail_view=avail_view, avail_sale=avail_sale, store_id=store_id, lang_id=lang_id, product_ids=product_ids, report_request_id=report_request_id, disable_report_cache=disable_report_cache, brand_name=brand_name, product_attributes=product_attributes, status=status, type=type)



Count products in store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_count200_response import ProductCount200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    category_id = 'category_id_example' # str | Counts products specified by category id (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    avail_view = True # bool | Specifies the set of visible/invisible products (optional)
    avail_sale = True # bool | Specifies the set of available/not available products for sale (optional)
    store_id = 'store_id_example' # str | Counts products specified by store id (optional)
    lang_id = 'lang_id_example' # str | Counts products specified by language id (optional)
    product_ids = 'product_ids_example' # str | Counts products specified by product ids (optional)
    report_request_id = 'report_request_id_example' # str | Report request id (optional)
    disable_report_cache = False # bool | Disable report cache for current request (optional) (default to False)
    brand_name = 'brand_name_example' # str | Retrieves brands specified by brand name (optional)
    product_attributes = ['product_attributes_example'] # List[str] | Defines product attributes (optional)
    status = 'status_example' # str | Defines product's status (optional)
    type = 'type_example' # str | Defines products's type (optional)

    try:
        api_response = api_instance.product_count(category_id=category_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, avail_view=avail_view, avail_sale=avail_sale, store_id=store_id, lang_id=lang_id, product_ids=product_ids, report_request_id=report_request_id, disable_report_cache=disable_report_cache, brand_name=brand_name, product_attributes=product_attributes, status=status, type=type)
        print("The response of ProductApi->product_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| Counts products specified by category id | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **avail_view** | **bool**| Specifies the set of visible/invisible products | [optional] 
 **avail_sale** | **bool**| Specifies the set of available/not available products for sale | [optional] 
 **store_id** | **str**| Counts products specified by store id | [optional] 
 **lang_id** | **str**| Counts products specified by language id | [optional] 
 **product_ids** | **str**| Counts products specified by product ids | [optional] 
 **report_request_id** | **str**| Report request id | [optional] 
 **disable_report_cache** | **bool**| Disable report cache for current request | [optional] [default to False]
 **brand_name** | **str**| Retrieves brands specified by brand name | [optional] 
 **product_attributes** | [**List[str]**](str.md)| Defines product attributes | [optional] 
 **status** | **str**| Defines product&#39;s status | [optional] 
 **type** | **str**| Defines products&#39;s type | [optional] 

### Return type

[**ProductCount200Response**](ProductCount200Response.md)

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

# **product_currency_add**
> ProductCurrencyAdd200Response product_currency_add(iso3, rate, name=name, avail=avail, symbol_left=symbol_left, symbol_right=symbol_right, default=default)



Add currency and/or set default in store

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_currency_add200_response import ProductCurrencyAdd200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    iso3 = 'iso3_example' # str | Specifies standardized currency code
    rate = 3.4 # float | Defines the numerical identifier against to the major currency
    name = 'name_example' # str | Defines currency's name (optional)
    avail = True # bool | Specifies whether the currency is available (optional) (default to True)
    symbol_left = 'symbol_left_example' # str | Defines the symbol that is located before the currency (optional)
    symbol_right = 'symbol_right_example' # str | Defines the symbol that is located after the currency (optional)
    default = False # bool | Specifies currency's default meaning (optional) (default to False)

    try:
        api_response = api_instance.product_currency_add(iso3, rate, name=name, avail=avail, symbol_left=symbol_left, symbol_right=symbol_right, default=default)
        print("The response of ProductApi->product_currency_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_currency_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iso3** | **str**| Specifies standardized currency code | 
 **rate** | **float**| Defines the numerical identifier against to the major currency | 
 **name** | **str**| Defines currency&#39;s name | [optional] 
 **avail** | **bool**| Specifies whether the currency is available | [optional] [default to True]
 **symbol_left** | **str**| Defines the symbol that is located before the currency | [optional] 
 **symbol_right** | **str**| Defines the symbol that is located after the currency | [optional] 
 **default** | **bool**| Specifies currency&#39;s default meaning | [optional] [default to False]

### Return type

[**ProductCurrencyAdd200Response**](ProductCurrencyAdd200Response.md)

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

# **product_currency_list**
> ProductCurrencyList200Response product_currency_list(start=start, count=count, params=params, page_cursor=page_cursor, exclude=exclude, response_fields=response_fields, default=default, avail=avail)



Get list of currencies

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_currency_list200_response import ProductCurrencyList200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    params = 'name,iso3,default,avail' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'name,iso3,default,avail')
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    default = True # bool | Specifies the set of default/not default currencies (optional)
    avail = True # bool | Specifies the set of available/not available currencies (optional)

    try:
        api_response = api_instance.product_currency_list(start=start, count=count, params=params, page_cursor=page_cursor, exclude=exclude, response_fields=response_fields, default=default, avail=avail)
        print("The response of ProductApi->product_currency_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_currency_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;name,iso3,default,avail&#39;]
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **default** | **bool**| Specifies the set of default/not default currencies | [optional] 
 **avail** | **bool**| Specifies the set of available/not available currencies | [optional] 

### Return type

[**ProductCurrencyList200Response**](ProductCurrencyList200Response.md)

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

# **product_delete**
> ProductDelete200Response product_delete(id)



Product delete

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_delete200_response import ProductDelete200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    id = 'id_example' # str | Product id that will be removed

    try:
        api_response = api_instance.product_delete(id)
        print("The response of ProductApi->product_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Product id that will be removed | 

### Return type

[**ProductDelete200Response**](ProductDelete200Response.md)

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

# **product_fields**
> CartConfigUpdate200Response product_fields()



Retrieve all available fields for product item in store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_config_update200_response import CartConfigUpdate200Response
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
    api_instance = openapi_client.ProductApi(api_client)

    try:
        api_response = api_instance.product_fields()
        print("The response of ProductApi->product_fields:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_fields: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CartConfigUpdate200Response**](CartConfigUpdate200Response.md)

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

# **product_find**
> ProductFind200Response product_find(find_value, find_where=find_where, find_params=find_params, find_what=find_what, lang_id=lang_id, store_id=store_id)



Search product in store catalog. \"Apple\" is specified here by default.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_find200_response import ProductFind200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    find_value = 'find_value_example' # str | Entity search that is specified by some value
    find_where = 'name' # str | Entity search that is specified by the comma-separated unique fields (optional) (default to 'name')
    find_params = 'whole_words' # str | Entity search that is specified by comma-separated parameters (optional) (default to 'whole_words')
    find_what = 'product' # str | Parameter's value specifies the entity that has to be found (optional) (default to 'product')
    lang_id = 'lang_id_example' # str | Search products specified by language id (optional)
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.product_find(find_value, find_where=find_where, find_params=find_params, find_what=find_what, lang_id=lang_id, store_id=store_id)
        print("The response of ProductApi->product_find:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_find: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **find_value** | **str**| Entity search that is specified by some value | 
 **find_where** | **str**| Entity search that is specified by the comma-separated unique fields | [optional] [default to &#39;name&#39;]
 **find_params** | **str**| Entity search that is specified by comma-separated parameters | [optional] [default to &#39;whole_words&#39;]
 **find_what** | **str**| Parameter&#39;s value specifies the entity that has to be found | [optional] [default to &#39;product&#39;]
 **lang_id** | **str**| Search products specified by language id | [optional] 
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**ProductFind200Response**](ProductFind200Response.md)

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

# **product_image_add**
> ProductImageAdd200Response product_image_add(product_image_add)



Add image to product

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_image_add import ProductImageAdd
from openapi_client.models.product_image_add200_response import ProductImageAdd200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_image_add = openapi_client.ProductImageAdd() # ProductImageAdd | 

    try:
        api_response = api_instance.product_image_add(product_image_add)
        print("The response of ProductApi->product_image_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_image_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_image_add** | [**ProductImageAdd**](ProductImageAdd.md)|  | 

### Return type

[**ProductImageAdd200Response**](ProductImageAdd200Response.md)

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

# **product_image_delete**
> AttributeDelete200Response product_image_delete(product_id, id, store_id=store_id)



Delete image

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_delete200_response import AttributeDelete200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Defines product id where the image should be deleted
    id = 'id_example' # str | Entity id
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.product_image_delete(product_id, id, store_id=store_id)
        print("The response of ProductApi->product_image_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_image_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Defines product id where the image should be deleted | 
 **id** | **str**| Entity id | 
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

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

# **product_image_update**
> ProductImageUpdate200Response product_image_update(product_id, id, variant_ids=variant_ids, image_name=image_name, type=type, label=label, position=position, store_id=store_id, lang_id=lang_id, hidden=hidden)



Update details of image

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_image_update200_response import ProductImageUpdate200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Defines product id where the image should be updated
    id = 'id_example' # str | Defines image update specified by image id
    variant_ids = 'variant_ids_example' # str | Defines product's variants ids (optional)
    image_name = 'image_name_example' # str | Defines image's name (optional)
    type = 'additional' # str | Defines image's types that are specified by comma-separated list (optional) (default to 'additional')
    label = 'label_example' # str | Defines alternative text that has to be attached to the picture (optional)
    position = 56 # int | Defines image’s position in the list (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    hidden = True # bool | Define is hide image (optional)

    try:
        api_response = api_instance.product_image_update(product_id, id, variant_ids=variant_ids, image_name=image_name, type=type, label=label, position=position, store_id=store_id, lang_id=lang_id, hidden=hidden)
        print("The response of ProductApi->product_image_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_image_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Defines product id where the image should be updated | 
 **id** | **str**| Defines image update specified by image id | 
 **variant_ids** | **str**| Defines product&#39;s variants ids | [optional] 
 **image_name** | **str**| Defines image&#39;s name | [optional] 
 **type** | **str**| Defines image&#39;s types that are specified by comma-separated list | [optional] [default to &#39;additional&#39;]
 **label** | **str**| Defines alternative text that has to be attached to the picture | [optional] 
 **position** | **int**| Defines image’s position in the list | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **hidden** | **bool**| Define is hide image | [optional] 

### Return type

[**ProductImageUpdate200Response**](ProductImageUpdate200Response.md)

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

# **product_info**
> ProductInfo200Response product_info(id, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id, lang_id=lang_id, currency_id=currency_id, report_request_id=report_request_id, disable_report_cache=disable_report_cache)



Get product info about product ID *** or specify other product ID.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_info200_response import ProductInfo200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    id = 'id_example' # str | Retrieves product's info specified by product id
    params = 'id,name,description,price,categories_ids' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,name,description,price,categories_ids')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    store_id = 'store_id_example' # str | Retrieves product info specified by store id (optional)
    lang_id = 'lang_id_example' # str | Retrieves product info specified by language id (optional)
    currency_id = 'currency_id_example' # str | Currency Id (optional)
    report_request_id = 'report_request_id_example' # str | Report request id (optional)
    disable_report_cache = False # bool | Disable report cache for current request (optional) (default to False)

    try:
        api_response = api_instance.product_info(id, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id, lang_id=lang_id, currency_id=currency_id, report_request_id=report_request_id, disable_report_cache=disable_report_cache)
        print("The response of ProductApi->product_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Retrieves product&#39;s info specified by product id | 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,description,price,categories_ids&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **store_id** | **str**| Retrieves product info specified by store id | [optional] 
 **lang_id** | **str**| Retrieves product info specified by language id | [optional] 
 **currency_id** | **str**| Currency Id | [optional] 
 **report_request_id** | **str**| Report request id | [optional] 
 **disable_report_cache** | **bool**| Disable report cache for current request | [optional] [default to False]

### Return type

[**ProductInfo200Response**](ProductInfo200Response.md)

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

# **product_list**
> ModelResponseProductList product_list(page_cursor=page_cursor, start=start, count=count, params=params, response_fields=response_fields, exclude=exclude, category_id=category_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, avail_view=avail_view, avail_sale=avail_sale, store_id=store_id, lang_id=lang_id, currency_id=currency_id, product_ids=product_ids, since_id=since_id, report_request_id=report_request_id, disable_report_cache=disable_report_cache, sort_by=sort_by, sort_direction=sort_direction, sku=sku, disable_cache=disable_cache, brand_name=brand_name, product_attributes=product_attributes, status=status, type=type)



Get list of products from your store. Returns 10 products by default.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_product_list import ModelResponseProductList
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
    api_instance = openapi_client.ProductApi(api_client)
    page_cursor = 'page_cursor_example' # str | Used to retrieve products via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    params = 'id,name,description,price,categories_ids' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,name,description,price,categories_ids')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    category_id = 'category_id_example' # str | Retrieves products specified by category id (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    avail_view = True # bool | Specifies the set of visible/invisible products (optional)
    avail_sale = True # bool | Specifies the set of available/not available products for sale (optional)
    store_id = 'store_id_example' # str | Retrieves products specified by store id (optional)
    lang_id = 'lang_id_example' # str | Retrieves products specified by language id (optional)
    currency_id = 'currency_id_example' # str | Currency Id (optional)
    product_ids = 'product_ids_example' # str | Retrieves products specified by product ids (optional)
    since_id = 56 # int | Retrieve entities starting from the specified id. (optional)
    report_request_id = 'report_request_id_example' # str | Report request id (optional)
    disable_report_cache = False # bool | Disable report cache for current request (optional) (default to False)
    sort_by = 'id' # str | Set field to sort by (optional) (default to 'id')
    sort_direction = 'asc' # str | Set sorting direction (optional) (default to 'asc')
    sku = 'sku_example' # str | Filter by product's sku (optional)
    disable_cache = False # bool | Disable cache for current request (optional) (default to False)
    brand_name = 'brand_name_example' # str | Retrieves brands specified by brand name (optional)
    product_attributes = ['product_attributes_example'] # List[str] | Defines product attributes (optional)
    status = 'status_example' # str | Defines product's status (optional)
    type = 'type_example' # str | Defines products's type (optional)

    try:
        api_response = api_instance.product_list(page_cursor=page_cursor, start=start, count=count, params=params, response_fields=response_fields, exclude=exclude, category_id=category_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, avail_view=avail_view, avail_sale=avail_sale, store_id=store_id, lang_id=lang_id, currency_id=currency_id, product_ids=product_ids, since_id=since_id, report_request_id=report_request_id, disable_report_cache=disable_report_cache, sort_by=sort_by, sort_direction=sort_direction, sku=sku, disable_cache=disable_cache, brand_name=brand_name, product_attributes=product_attributes, status=status, type=type)
        print("The response of ProductApi->product_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_cursor** | **str**| Used to retrieve products via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,description,price,categories_ids&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **category_id** | **str**| Retrieves products specified by category id | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **avail_view** | **bool**| Specifies the set of visible/invisible products | [optional] 
 **avail_sale** | **bool**| Specifies the set of available/not available products for sale | [optional] 
 **store_id** | **str**| Retrieves products specified by store id | [optional] 
 **lang_id** | **str**| Retrieves products specified by language id | [optional] 
 **currency_id** | **str**| Currency Id | [optional] 
 **product_ids** | **str**| Retrieves products specified by product ids | [optional] 
 **since_id** | **int**| Retrieve entities starting from the specified id. | [optional] 
 **report_request_id** | **str**| Report request id | [optional] 
 **disable_report_cache** | **bool**| Disable report cache for current request | [optional] [default to False]
 **sort_by** | **str**| Set field to sort by | [optional] [default to &#39;id&#39;]
 **sort_direction** | **str**| Set sorting direction | [optional] [default to &#39;asc&#39;]
 **sku** | **str**| Filter by product&#39;s sku | [optional] 
 **disable_cache** | **bool**| Disable cache for current request | [optional] [default to False]
 **brand_name** | **str**| Retrieves brands specified by brand name | [optional] 
 **product_attributes** | [**List[str]**](str.md)| Defines product attributes | [optional] 
 **status** | **str**| Defines product&#39;s status | [optional] 
 **type** | **str**| Defines products&#39;s type | [optional] 

### Return type

[**ModelResponseProductList**](ModelResponseProductList.md)

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

# **product_manufacturer_add**
> ProductManufacturerAdd200Response product_manufacturer_add(product_id, manufacturer)



Add manufacturer to store and assign to product

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_manufacturer_add200_response import ProductManufacturerAdd200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Defines products specified by product id
    manufacturer = 'manufacturer_example' # str | Defines product’s manufacturer's name

    try:
        api_response = api_instance.product_manufacturer_add(product_id, manufacturer)
        print("The response of ProductApi->product_manufacturer_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_manufacturer_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Defines products specified by product id | 
 **manufacturer** | **str**| Defines product’s manufacturer&#39;s name | 

### Return type

[**ProductManufacturerAdd200Response**](ProductManufacturerAdd200Response.md)

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

# **product_option_add**
> ProductOptionAdd200Response product_option_add(name, type, product_id=product_id, default_option_value=default_option_value, option_values=option_values, description=description, avail=avail, sort_order=sort_order, required=required, clear_cache=clear_cache)



Add product option from store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_option_add200_response import ProductOptionAdd200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    name = 'name_example' # str | Defines option's name
    type = 'type_example' # str | Defines option's type that has to be added
    product_id = 'product_id_example' # str | Defines product id where the option should be added (optional)
    default_option_value = 'default_option_value_example' # str | Defines default option value that has to be added (optional)
    option_values = 'option_values_example' # str | Defines option values that has to be added (optional)
    description = 'description_example' # str | Defines option's description (optional)
    avail = True # bool | Defines whether the option is available (optional) (default to True)
    sort_order = 0 # int | Sort number in the list (optional) (default to 0)
    required = False # bool | Defines if the option is required (optional) (default to False)
    clear_cache = True # bool | Is cache clear required (optional) (default to True)

    try:
        api_response = api_instance.product_option_add(name, type, product_id=product_id, default_option_value=default_option_value, option_values=option_values, description=description, avail=avail, sort_order=sort_order, required=required, clear_cache=clear_cache)
        print("The response of ProductApi->product_option_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_option_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Defines option&#39;s name | 
 **type** | **str**| Defines option&#39;s type that has to be added | 
 **product_id** | **str**| Defines product id where the option should be added | [optional] 
 **default_option_value** | **str**| Defines default option value that has to be added | [optional] 
 **option_values** | **str**| Defines option values that has to be added | [optional] 
 **description** | **str**| Defines option&#39;s description | [optional] 
 **avail** | **bool**| Defines whether the option is available | [optional] [default to True]
 **sort_order** | **int**| Sort number in the list | [optional] [default to 0]
 **required** | **bool**| Defines if the option is required | [optional] [default to False]
 **clear_cache** | **bool**| Is cache clear required | [optional] [default to True]

### Return type

[**ProductOptionAdd200Response**](ProductOptionAdd200Response.md)

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

# **product_option_assign**
> ProductOptionAssign200Response product_option_assign(product_id, option_id, required=required, sort_order=sort_order, option_values=option_values, clear_cache=clear_cache)



Assign option from product.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_option_assign200_response import ProductOptionAssign200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Defines product id where the option should be assigned
    option_id = 'option_id_example' # str | Defines option id which has to be assigned
    required = False # bool | Defines if the option is required (optional) (default to False)
    sort_order = 0 # int | Sort number in the list (optional) (default to 0)
    option_values = 'option_values_example' # str | Defines option values that has to be assigned (optional)
    clear_cache = True # bool | Is cache clear required (optional) (default to True)

    try:
        api_response = api_instance.product_option_assign(product_id, option_id, required=required, sort_order=sort_order, option_values=option_values, clear_cache=clear_cache)
        print("The response of ProductApi->product_option_assign:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_option_assign: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Defines product id where the option should be assigned | 
 **option_id** | **str**| Defines option id which has to be assigned | 
 **required** | **bool**| Defines if the option is required | [optional] [default to False]
 **sort_order** | **int**| Sort number in the list | [optional] [default to 0]
 **option_values** | **str**| Defines option values that has to be assigned | [optional] 
 **clear_cache** | **bool**| Is cache clear required | [optional] [default to True]

### Return type

[**ProductOptionAssign200Response**](ProductOptionAssign200Response.md)

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

# **product_option_list**
> ProductOptionList200Response product_option_list(start=start, count=count, params=params, exclude=exclude, response_fields=response_fields, product_id=product_id, lang_id=lang_id, store_id=store_id)



Get list of options.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_option_list200_response import ProductOptionList200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    params = 'id,name,description' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,name,description')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    product_id = 'product_id_example' # str | Retrieves products' options specified by product id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.product_option_list(start=start, count=count, params=params, exclude=exclude, response_fields=response_fields, product_id=product_id, lang_id=lang_id, store_id=store_id)
        print("The response of ProductApi->product_option_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_option_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,description&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **product_id** | **str**| Retrieves products&#39; options specified by product id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**ProductOptionList200Response**](ProductOptionList200Response.md)

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

# **product_option_value_add**
> ProductOptionValueAdd200Response product_option_value_add(product_id, option_id, option_value, sort_order=sort_order, clear_cache=clear_cache)



Add product option item from option.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_option_value_add200_response import ProductOptionValueAdd200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Defines product id where the option value should be added
    option_id = 'option_id_example' # str | Defines option id where the value has to be added
    option_value = 'option_value_example' # str | Defines option value that has to be added
    sort_order = 0 # int | Sort number in the list (optional) (default to 0)
    clear_cache = True # bool | Is cache clear required (optional) (default to True)

    try:
        api_response = api_instance.product_option_value_add(product_id, option_id, option_value, sort_order=sort_order, clear_cache=clear_cache)
        print("The response of ProductApi->product_option_value_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_option_value_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Defines product id where the option value should be added | 
 **option_id** | **str**| Defines option id where the value has to be added | 
 **option_value** | **str**| Defines option value that has to be added | 
 **sort_order** | **int**| Sort number in the list | [optional] [default to 0]
 **clear_cache** | **bool**| Is cache clear required | [optional] [default to True]

### Return type

[**ProductOptionValueAdd200Response**](ProductOptionValueAdd200Response.md)

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

# **product_option_value_assign**
> ProductOptionValueAssign200Response product_option_value_assign(product_option_id, option_value_id, clear_cache=clear_cache)



Assign product option item from product.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_option_value_assign200_response import ProductOptionValueAssign200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_option_id = 56 # int | Defines product's option id where the value has to be assigned
    option_value_id = 56 # int | Defines value id that has to be assigned
    clear_cache = True # bool | Is cache clear required (optional) (default to True)

    try:
        api_response = api_instance.product_option_value_assign(product_option_id, option_value_id, clear_cache=clear_cache)
        print("The response of ProductApi->product_option_value_assign:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_option_value_assign: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_option_id** | **int**| Defines product&#39;s option id where the value has to be assigned | 
 **option_value_id** | **int**| Defines value id that has to be assigned | 
 **clear_cache** | **bool**| Is cache clear required | [optional] [default to True]

### Return type

[**ProductOptionValueAssign200Response**](ProductOptionValueAssign200Response.md)

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

# **product_option_value_update**
> AccountConfigUpdate200Response product_option_value_update(product_id, option_id, option_value_id, option_value, price=price, quantity=quantity, clear_cache=clear_cache)



Update product option item from option.

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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Defines product id where the option value should be updated
    option_id = 'option_id_example' # str | Defines option id where the value has to be updated
    option_value_id = 56 # int | Defines value id that has to be assigned
    option_value = 'option_value_example' # str | Defines option value that has to be added
    price = 3.4 # float | Defines new product option price (optional)
    quantity = 3.4 # float | Defines new products' options quantity (optional)
    clear_cache = True # bool | Is cache clear required (optional) (default to True)

    try:
        api_response = api_instance.product_option_value_update(product_id, option_id, option_value_id, option_value, price=price, quantity=quantity, clear_cache=clear_cache)
        print("The response of ProductApi->product_option_value_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_option_value_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Defines product id where the option value should be updated | 
 **option_id** | **str**| Defines option id where the value has to be updated | 
 **option_value_id** | **int**| Defines value id that has to be assigned | 
 **option_value** | **str**| Defines option value that has to be added | 
 **price** | **float**| Defines new product option price | [optional] 
 **quantity** | **float**| Defines new products&#39; options quantity | [optional] 
 **clear_cache** | **bool**| Is cache clear required | [optional] [default to True]

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

# **product_price_add**
> CartValidate200Response product_price_add(product_price_add)



Add some prices to the product.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_validate200_response import CartValidate200Response
from openapi_client.models.product_price_add import ProductPriceAdd
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
    api_instance = openapi_client.ProductApi(api_client)
    product_price_add = openapi_client.ProductPriceAdd() # ProductPriceAdd | 

    try:
        api_response = api_instance.product_price_add(product_price_add)
        print("The response of ProductApi->product_price_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_price_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_price_add** | [**ProductPriceAdd**](ProductPriceAdd.md)|  | 

### Return type

[**CartValidate200Response**](CartValidate200Response.md)

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

# **product_price_delete**
> AttributeDelete200Response product_price_delete(product_id, group_prices=group_prices)



Delete some prices of the product

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_delete200_response import AttributeDelete200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Defines the product where the price has to be deleted
    group_prices = 'group_prices_example' # str | Defines product's group prices (optional)

    try:
        api_response = api_instance.product_price_delete(product_id, group_prices=group_prices)
        print("The response of ProductApi->product_price_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_price_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Defines the product where the price has to be deleted | 
 **group_prices** | **str**| Defines product&#39;s group prices | [optional] 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

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

# **product_price_update**
> AccountConfigUpdate200Response product_price_update(product_price_update)



Update some prices of the product.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.account_config_update200_response import AccountConfigUpdate200Response
from openapi_client.models.product_price_update import ProductPriceUpdate
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
    api_instance = openapi_client.ProductApi(api_client)
    product_price_update = openapi_client.ProductPriceUpdate() # ProductPriceUpdate | 

    try:
        api_response = api_instance.product_price_update(product_price_update)
        print("The response of ProductApi->product_price_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_price_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_price_update** | [**ProductPriceUpdate**](ProductPriceUpdate.md)|  | 

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

# **product_review_list**
> ProductReviewList200Response product_review_list(product_id, start=start, page_cursor=page_cursor, count=count, ids=ids, store_id=store_id, status=status, params=params, exclude=exclude, response_fields=response_fields)



Get reviews of a specific product.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_review_list200_response import ProductReviewList200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Product id
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    ids = 'ids_example' # str | Retrieves reviews specified by ids (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    status = 'status_example' # str | Defines status (optional)
    params = 'id,customer_id,email,message,status,product_id,nick_name,summary,rating,ratings,status,created_time' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,customer_id,email,message,status,product_id,nick_name,summary,rating,ratings,status,created_time')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)

    try:
        api_response = api_instance.product_review_list(product_id, start=start, page_cursor=page_cursor, count=count, ids=ids, store_id=store_id, status=status, params=params, exclude=exclude, response_fields=response_fields)
        print("The response of ProductApi->product_review_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_review_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product id | 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **ids** | **str**| Retrieves reviews specified by ids | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **status** | **str**| Defines status | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,customer_id,email,message,status,product_id,nick_name,summary,rating,ratings,status,created_time&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 

### Return type

[**ProductReviewList200Response**](ProductReviewList200Response.md)

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

# **product_store_assign**
> AccountConfigUpdate200Response product_store_assign(product_id, store_id)



Assign product to store

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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Defines id of the product which should be assigned to a store
    store_id = 'store_id_example' # str | Defines id of the store product should be assigned to

    try:
        api_response = api_instance.product_store_assign(product_id, store_id)
        print("The response of ProductApi->product_store_assign:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_store_assign: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Defines id of the product which should be assigned to a store | 
 **store_id** | **str**| Defines id of the store product should be assigned to | 

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

# **product_tax_add**
> ProductTaxAdd200Response product_tax_add(product_tax_add)



Add tax class and tax rate to store and assign to product.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_tax_add import ProductTaxAdd
from openapi_client.models.product_tax_add200_response import ProductTaxAdd200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_tax_add = openapi_client.ProductTaxAdd() # ProductTaxAdd | 

    try:
        api_response = api_instance.product_tax_add(product_tax_add)
        print("The response of ProductApi->product_tax_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_tax_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_tax_add** | [**ProductTaxAdd**](ProductTaxAdd.md)|  | 

### Return type

[**ProductTaxAdd200Response**](ProductTaxAdd200Response.md)

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

# **product_update**
> AccountConfigUpdate200Response product_update(product_update)



Update price and quantity for a specific product

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.account_config_update200_response import AccountConfigUpdate200Response
from openapi_client.models.product_update import ProductUpdate
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
    api_instance = openapi_client.ProductApi(api_client)
    product_update = openapi_client.ProductUpdate() # ProductUpdate | 

    try:
        api_response = api_instance.product_update(product_update)
        print("The response of ProductApi->product_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_update** | [**ProductUpdate**](ProductUpdate.md)|  | 

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

# **product_variant_add**
> ProductVariantAdd200Response product_variant_add(product_variant_add)



Add variant to product.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_variant_add import ProductVariantAdd
from openapi_client.models.product_variant_add200_response import ProductVariantAdd200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_variant_add = openapi_client.ProductVariantAdd() # ProductVariantAdd | 

    try:
        api_response = api_instance.product_variant_add(product_variant_add)
        print("The response of ProductApi->product_variant_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_variant_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_variant_add** | [**ProductVariantAdd**](ProductVariantAdd.md)|  | 

### Return type

[**ProductVariantAdd200Response**](ProductVariantAdd200Response.md)

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

# **product_variant_count**
> ProductVariantCount200Response product_variant_count(product_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, category_id=category_id, store_id=store_id)



Get count variants.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_variant_count200_response import ProductVariantCount200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Retrieves products' variants specified by product id
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    category_id = 'category_id_example' # str | Counts products’ variants specified by category id (optional)
    store_id = 'store_id_example' # str | Retrieves variants specified by store id (optional)

    try:
        api_response = api_instance.product_variant_count(product_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, category_id=category_id, store_id=store_id)
        print("The response of ProductApi->product_variant_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_variant_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Retrieves products&#39; variants specified by product id | 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **category_id** | **str**| Counts products’ variants specified by category id | [optional] 
 **store_id** | **str**| Retrieves variants specified by store id | [optional] 

### Return type

[**ProductVariantCount200Response**](ProductVariantCount200Response.md)

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

# **product_variant_delete**
> AttributeDelete200Response product_variant_delete(id, product_id)



Delete variant.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_delete200_response import AttributeDelete200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    id = 'id_example' # str | Defines variant removal, specified by variant id
    product_id = 'product_id_example' # str | Defines product's id where the variant has to be deleted

    try:
        api_response = api_instance.product_variant_delete(id, product_id)
        print("The response of ProductApi->product_variant_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_variant_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Defines variant removal, specified by variant id | 
 **product_id** | **str**| Defines product&#39;s id where the variant has to be deleted | 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

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

# **product_variant_image_add**
> ProductImageAdd200Response product_variant_image_add(product_variant_image_add)



Add image to product

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_image_add200_response import ProductImageAdd200Response
from openapi_client.models.product_variant_image_add import ProductVariantImageAdd
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
    api_instance = openapi_client.ProductApi(api_client)
    product_variant_image_add = openapi_client.ProductVariantImageAdd() # ProductVariantImageAdd | 

    try:
        api_response = api_instance.product_variant_image_add(product_variant_image_add)
        print("The response of ProductApi->product_variant_image_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_variant_image_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_variant_image_add** | [**ProductVariantImageAdd**](ProductVariantImageAdd.md)|  | 

### Return type

[**ProductImageAdd200Response**](ProductImageAdd200Response.md)

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

# **product_variant_image_delete**
> AttributeDelete200Response product_variant_image_delete(product_id, product_variant_id, id, store_id=store_id)



Delete  image to product

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_delete200_response import AttributeDelete200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | Defines product id where the variant image should be deleted
    product_variant_id = 56 # int | Defines product's variants specified by variant id
    id = 'id_example' # str | Entity id
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.product_variant_image_delete(product_id, product_variant_id, id, store_id=store_id)
        print("The response of ProductApi->product_variant_image_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_variant_image_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Defines product id where the variant image should be deleted | 
 **product_variant_id** | **int**| Defines product&#39;s variants specified by variant id | 
 **id** | **str**| Entity id | 
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

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

# **product_variant_info**
> ProductInfo200Response product_variant_info(id, params=params, exclude=exclude, store_id=store_id)



Get variant info. This method is deprecated, and its development is stopped. Please use \"product.child_item.info\" instead.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_info200_response import ProductInfo200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    id = 'id_example' # str | Retrieves variant's info specified by variant id
    params = 'id,name,description,price' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,name,description,price')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    store_id = 'store_id_example' # str | Retrieves variant info specified by store id (optional)

    try:
        api_response = api_instance.product_variant_info(id, params=params, exclude=exclude, store_id=store_id)
        print("The response of ProductApi->product_variant_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_variant_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Retrieves variant&#39;s info specified by variant id | 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,description,price&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **store_id** | **str**| Retrieves variant info specified by store id | [optional] 

### Return type

[**ProductInfo200Response**](ProductInfo200Response.md)

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

# **product_variant_list**
> ProductVariantList200Response product_variant_list(start=start, count=count, params=params, exclude=exclude, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, category_id=category_id, product_id=product_id, store_id=store_id)



Get a list of variants. This method is deprecated, and its development is stopped. Please use \"product.child_item.list\" instead.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_variant_list200_response import ProductVariantList200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    params = 'id,name,description,price' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,name,description,price')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    category_id = 'category_id_example' # str | Retrieves products’ variants specified by category id (optional)
    product_id = 'product_id_example' # str | Retrieves products' variants specified by product id (optional)
    store_id = 'store_id_example' # str | Retrieves variants specified by store id (optional)

    try:
        api_response = api_instance.product_variant_list(start=start, count=count, params=params, exclude=exclude, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, category_id=category_id, product_id=product_id, store_id=store_id)
        print("The response of ProductApi->product_variant_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_variant_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,description,price&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **category_id** | **str**| Retrieves products’ variants specified by category id | [optional] 
 **product_id** | **str**| Retrieves products&#39; variants specified by product id | [optional] 
 **store_id** | **str**| Retrieves variants specified by store id | [optional] 

### Return type

[**ProductVariantList200Response**](ProductVariantList200Response.md)

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

# **product_variant_price_add**
> CartValidate200Response product_variant_price_add(product_variant_price_add)



Add some prices to the product variant.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_validate200_response import CartValidate200Response
from openapi_client.models.product_variant_price_add import ProductVariantPriceAdd
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
    api_instance = openapi_client.ProductApi(api_client)
    product_variant_price_add = openapi_client.ProductVariantPriceAdd() # ProductVariantPriceAdd | 

    try:
        api_response = api_instance.product_variant_price_add(product_variant_price_add)
        print("The response of ProductApi->product_variant_price_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_variant_price_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_variant_price_add** | [**ProductVariantPriceAdd**](ProductVariantPriceAdd.md)|  | 

### Return type

[**CartValidate200Response**](CartValidate200Response.md)

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

# **product_variant_price_delete**
> AttributeDelete200Response product_variant_price_delete(id, product_id, group_prices)



Delete some prices of the product variant.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_delete200_response import AttributeDelete200Response
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
    api_instance = openapi_client.ProductApi(api_client)
    id = 'id_example' # str | Defines the variant where the price has to be deleted
    product_id = 'product_id_example' # str | Product id
    group_prices = 'group_prices_example' # str | Defines variants's group prices

    try:
        api_response = api_instance.product_variant_price_delete(id, product_id, group_prices)
        print("The response of ProductApi->product_variant_price_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_variant_price_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Defines the variant where the price has to be deleted | 
 **product_id** | **str**| Product id | 
 **group_prices** | **str**| Defines variants&#39;s group prices | 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

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

# **product_variant_price_update**
> AccountConfigUpdate200Response product_variant_price_update(product_variant_price_update)



Update some prices of the product variant.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.account_config_update200_response import AccountConfigUpdate200Response
from openapi_client.models.product_variant_price_update import ProductVariantPriceUpdate
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
    api_instance = openapi_client.ProductApi(api_client)
    product_variant_price_update = openapi_client.ProductVariantPriceUpdate() # ProductVariantPriceUpdate | 

    try:
        api_response = api_instance.product_variant_price_update(product_variant_price_update)
        print("The response of ProductApi->product_variant_price_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_variant_price_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_variant_price_update** | [**ProductVariantPriceUpdate**](ProductVariantPriceUpdate.md)|  | 

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

# **product_variant_update**
> AccountConfigUpdate200Response product_variant_update(product_variant_update)



Update variant.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.account_config_update200_response import AccountConfigUpdate200Response
from openapi_client.models.product_variant_update import ProductVariantUpdate
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
    api_instance = openapi_client.ProductApi(api_client)
    product_variant_update = openapi_client.ProductVariantUpdate() # ProductVariantUpdate | 

    try:
        api_response = api_instance.product_variant_update(product_variant_update)
        print("The response of ProductApi->product_variant_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_variant_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_variant_update** | [**ProductVariantUpdate**](ProductVariantUpdate.md)|  | 

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

