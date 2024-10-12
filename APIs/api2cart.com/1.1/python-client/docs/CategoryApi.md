# openapi_client.CategoryApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**category_add**](CategoryApi.md#category_add) | **POST** /category.add.json | 
[**category_assign**](CategoryApi.md#category_assign) | **POST** /category.assign.json | 
[**category_count**](CategoryApi.md#category_count) | **GET** /category.count.json | 
[**category_delete**](CategoryApi.md#category_delete) | **DELETE** /category.delete.json | 
[**category_find**](CategoryApi.md#category_find) | **GET** /category.find.json | 
[**category_image_add**](CategoryApi.md#category_image_add) | **POST** /category.image.add.json | 
[**category_image_delete**](CategoryApi.md#category_image_delete) | **DELETE** /category.image.delete.json | 
[**category_info**](CategoryApi.md#category_info) | **GET** /category.info.json | 
[**category_list**](CategoryApi.md#category_list) | **GET** /category.list.json | 
[**category_unassign**](CategoryApi.md#category_unassign) | **POST** /category.unassign.json | 
[**category_update**](CategoryApi.md#category_update) | **PUT** /category.update.json | 


# **category_add**
> CategoryAdd200Response category_add(name, parent_id=parent_id, stores_ids=stores_ids, store_id=store_id, lang_id=lang_id, avail=avail, sort_order=sort_order, created_time=created_time, modified_time=modified_time, description=description, meta_title=meta_title, meta_description=meta_description, meta_keywords=meta_keywords, seo_url=seo_url)



Add new category in store

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.category_add200_response import CategoryAdd200Response
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
    api_instance = openapi_client.CategoryApi(api_client)
    name = 'name_example' # str | Defines category's name that has to be added
    parent_id = 'parent_id_example' # str | Adds categories specified by parent id (optional)
    stores_ids = '0' # str | Create category in the stores that is specified by comma-separated stores' id (optional) (default to '0')
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    avail = True # bool | Defines category's visibility status (optional) (default to True)
    sort_order = 0 # int | Sort number in the list (optional) (default to 0)
    created_time = 'created_time_example' # str | Entity's date creation (optional)
    modified_time = 'modified_time_example' # str | Entity's date modification (optional)
    description = 'description_example' # str | Defines category's description (optional)
    meta_title = 'meta_title_example' # str | Defines unique meta title for each entity (optional)
    meta_description = 'meta_description_example' # str | Defines unique meta description of a entity (optional)
    meta_keywords = 'meta_keywords_example' # str | Defines unique meta keywords for each entity (optional)
    seo_url = 'seo_url_example' # str | Defines unique category's URL for SEO (optional)

    try:
        api_response = api_instance.category_add(name, parent_id=parent_id, stores_ids=stores_ids, store_id=store_id, lang_id=lang_id, avail=avail, sort_order=sort_order, created_time=created_time, modified_time=modified_time, description=description, meta_title=meta_title, meta_description=meta_description, meta_keywords=meta_keywords, seo_url=seo_url)
        print("The response of CategoryApi->category_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->category_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Defines category&#39;s name that has to be added | 
 **parent_id** | **str**| Adds categories specified by parent id | [optional] 
 **stores_ids** | **str**| Create category in the stores that is specified by comma-separated stores&#39; id | [optional] [default to &#39;0&#39;]
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **avail** | **bool**| Defines category&#39;s visibility status | [optional] [default to True]
 **sort_order** | **int**| Sort number in the list | [optional] [default to 0]
 **created_time** | **str**| Entity&#39;s date creation | [optional] 
 **modified_time** | **str**| Entity&#39;s date modification | [optional] 
 **description** | **str**| Defines category&#39;s description | [optional] 
 **meta_title** | **str**| Defines unique meta title for each entity | [optional] 
 **meta_description** | **str**| Defines unique meta description of a entity | [optional] 
 **meta_keywords** | **str**| Defines unique meta keywords for each entity | [optional] 
 **seo_url** | **str**| Defines unique category&#39;s URL for SEO | [optional] 

### Return type

[**CategoryAdd200Response**](CategoryAdd200Response.md)

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

# **category_assign**
> CartConfigUpdate200Response category_assign(product_id, category_id, store_id=store_id)



Assign category to product

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
    api_instance = openapi_client.CategoryApi(api_client)
    product_id = 'product_id_example' # str | Defines category assign to the product, specified by product id
    category_id = 'category_id_example' # str | Defines category assign, specified by category id
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.category_assign(product_id, category_id, store_id=store_id)
        print("The response of CategoryApi->category_assign:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->category_assign: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Defines category assign to the product, specified by product id | 
 **category_id** | **str**| Defines category assign, specified by category id | 
 **store_id** | **str**| Store Id | [optional] 

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

# **category_count**
> CategoryCount200Response category_count(parent_id=parent_id, store_id=store_id, lang_id=lang_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, avail=avail)



Count categories in store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.category_count200_response import CategoryCount200Response
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
    api_instance = openapi_client.CategoryApi(api_client)
    parent_id = 'parent_id_example' # str | Counts categories specified by parent id (optional)
    store_id = 'store_id_example' # str | Counts category specified by store id (optional)
    lang_id = 'lang_id_example' # str | Counts category specified by language id (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    avail = True # bool | Defines category's visibility status (optional) (default to True)

    try:
        api_response = api_instance.category_count(parent_id=parent_id, store_id=store_id, lang_id=lang_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, avail=avail)
        print("The response of CategoryApi->category_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->category_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent_id** | **str**| Counts categories specified by parent id | [optional] 
 **store_id** | **str**| Counts category specified by store id | [optional] 
 **lang_id** | **str**| Counts category specified by language id | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **avail** | **bool**| Defines category&#39;s visibility status | [optional] [default to True]

### Return type

[**CategoryCount200Response**](CategoryCount200Response.md)

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

# **category_delete**
> BridgeDelete200Response category_delete(id)



Delete category in store

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.bridge_delete200_response import BridgeDelete200Response
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
    api_instance = openapi_client.CategoryApi(api_client)
    id = 'id_example' # str | Defines category removal, specified by category id

    try:
        api_response = api_instance.category_delete(id)
        print("The response of CategoryApi->category_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->category_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Defines category removal, specified by category id | 

### Return type

[**BridgeDelete200Response**](BridgeDelete200Response.md)

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

# **category_find**
> CategoryFind200Response category_find(find_value, find_where=find_where, find_params=find_params, store_id=store_id, lang_id=lang_id)



Search category in store. \"Laptop\" is specified here by default.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.category_find200_response import CategoryFind200Response
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
    api_instance = openapi_client.CategoryApi(api_client)
    find_value = 'find_value_example' # str | Entity search that is specified by some value
    find_where = 'name' # str | Entity search that is specified by the comma-separated unique fields (optional) (default to 'name')
    find_params = 'whole_words' # str | Entity search that is specified by comma-separated parameters (optional) (default to 'whole_words')
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)

    try:
        api_response = api_instance.category_find(find_value, find_where=find_where, find_params=find_params, store_id=store_id, lang_id=lang_id)
        print("The response of CategoryApi->category_find:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->category_find: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **find_value** | **str**| Entity search that is specified by some value | 
 **find_where** | **str**| Entity search that is specified by the comma-separated unique fields | [optional] [default to &#39;name&#39;]
 **find_params** | **str**| Entity search that is specified by comma-separated parameters | [optional] [default to &#39;whole_words&#39;]
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 

### Return type

[**CategoryFind200Response**](CategoryFind200Response.md)

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

# **category_image_add**
> CategoryImageAdd200Response category_image_add(category_id, image_name, url, type, label=label, mime=mime, position=position, store_id=store_id)



Add image to category

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.category_image_add200_response import CategoryImageAdd200Response
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
    api_instance = openapi_client.CategoryApi(api_client)
    category_id = 'category_id_example' # str | Defines category id where the image should be added
    image_name = 'image_name_example' # str | Defines image's name
    url = 'url_example' # str | Defines URL of the image that has to be added
    type = 'type_example' # str | Defines image's types that are specified by comma-separated list
    label = 'label_example' # str | Defines alternative text that has to be attached to the picture (optional)
    mime = 'mime_example' # str | Mime type of image http://en.wikipedia.org/wiki/Internet_media_type. (optional)
    position = 0 # int | Defines image’s position in the list (optional) (default to 0)
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.category_image_add(category_id, image_name, url, type, label=label, mime=mime, position=position, store_id=store_id)
        print("The response of CategoryApi->category_image_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->category_image_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| Defines category id where the image should be added | 
 **image_name** | **str**| Defines image&#39;s name | 
 **url** | **str**| Defines URL of the image that has to be added | 
 **type** | **str**| Defines image&#39;s types that are specified by comma-separated list | 
 **label** | **str**| Defines alternative text that has to be attached to the picture | [optional] 
 **mime** | **str**| Mime type of image http://en.wikipedia.org/wiki/Internet_media_type. | [optional] 
 **position** | **int**| Defines image’s position in the list | [optional] [default to 0]
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**CategoryImageAdd200Response**](CategoryImageAdd200Response.md)

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

# **category_image_delete**
> AttributeDelete200Response category_image_delete(category_id, image_id, store_id=store_id)



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
    api_instance = openapi_client.CategoryApi(api_client)
    category_id = 'category_id_example' # str | Defines category id where the image should be deleted
    image_id = 'image_id_example' # str | Define image id
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.category_image_delete(category_id, image_id, store_id=store_id)
        print("The response of CategoryApi->category_image_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->category_image_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| Defines category id where the image should be deleted | 
 **image_id** | **str**| Define image id | 
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

# **category_info**
> CategoryInfo200Response category_info(id, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id, lang_id=lang_id)



Get category info about category ID*** or specify other category ID.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.category_info200_response import CategoryInfo200Response
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
    api_instance = openapi_client.CategoryApi(api_client)
    id = 'id_example' # str | Retrieves category's info specified by category id
    params = 'id,parent_id,name,description' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,parent_id,name,description')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    store_id = 'store_id_example' # str | Retrieves category info  specified by store id (optional)
    lang_id = 'lang_id_example' # str | Retrieves category info  specified by language id (optional)

    try:
        api_response = api_instance.category_info(id, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id, lang_id=lang_id)
        print("The response of CategoryApi->category_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->category_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Retrieves category&#39;s info specified by category id | 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,parent_id,name,description&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **store_id** | **str**| Retrieves category info  specified by store id | [optional] 
 **lang_id** | **str**| Retrieves category info  specified by language id | [optional] 

### Return type

[**CategoryInfo200Response**](CategoryInfo200Response.md)

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

# **category_list**
> ModelResponseCategoryList category_list(start=start, count=count, page_cursor=page_cursor, parent_id=parent_id, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id, lang_id=lang_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, avail=avail)



Get list of categories from store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_category_list import ModelResponseCategoryList
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
    api_instance = openapi_client.CategoryApi(api_client)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    parent_id = 'parent_id_example' # str | Retrieves categories specified by parent id (optional)
    params = 'id,parent_id,name,description' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,parent_id,name,description')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    store_id = 'store_id_example' # str | Retrieves categories specified by store id (optional)
    lang_id = 'lang_id_example' # str | Retrieves categorys specified by language id (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    avail = True # bool | Defines category's visibility status (optional) (default to True)

    try:
        api_response = api_instance.category_list(start=start, count=count, page_cursor=page_cursor, parent_id=parent_id, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id, lang_id=lang_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, avail=avail)
        print("The response of CategoryApi->category_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->category_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **parent_id** | **str**| Retrieves categories specified by parent id | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,parent_id,name,description&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **store_id** | **str**| Retrieves categories specified by store id | [optional] 
 **lang_id** | **str**| Retrieves categorys specified by language id | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **avail** | **bool**| Defines category&#39;s visibility status | [optional] [default to True]

### Return type

[**ModelResponseCategoryList**](ModelResponseCategoryList.md)

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

# **category_unassign**
> CartConfigUpdate200Response category_unassign(category_id, product_id, store_id=store_id)



Unassign category to product

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
    api_instance = openapi_client.CategoryApi(api_client)
    category_id = 'category_id_example' # str | Defines category unassign, specified by category id
    product_id = 'product_id_example' # str | Defines category unassign to the product, specified by product id
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.category_unassign(category_id, product_id, store_id=store_id)
        print("The response of CategoryApi->category_unassign:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->category_unassign: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| Defines category unassign, specified by category id | 
 **product_id** | **str**| Defines category unassign to the product, specified by product id | 
 **store_id** | **str**| Store Id | [optional] 

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

# **category_update**
> AccountConfigUpdate200Response category_update(id, name=name, parent_id=parent_id, stores_ids=stores_ids, avail=avail, sort_order=sort_order, modified_time=modified_time, description=description, meta_title=meta_title, meta_description=meta_description, meta_keywords=meta_keywords, seo_url=seo_url, lang_id=lang_id, store_id=store_id)



Update category in store

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
    api_instance = openapi_client.CategoryApi(api_client)
    id = 'id_example' # str | Defines category update specified by category id
    name = 'name_example' # str | Defines new category’s name (optional)
    parent_id = 'parent_id_example' # str | Defines new parent category id (optional)
    stores_ids = '0' # str | Update category in the stores that is specified by comma-separated stores' id (optional) (default to '0')
    avail = True # bool | Defines category's visibility status (optional)
    sort_order = 56 # int | Sort number in the list (optional)
    modified_time = 'modified_time_example' # str | Entity's date modification (optional)
    description = 'description_example' # str | Defines new category's description (optional)
    meta_title = 'meta_title_example' # str | Defines unique meta title for each entity (optional)
    meta_description = 'meta_description_example' # str | Defines unique meta description of a entity (optional)
    meta_keywords = 'meta_keywords_example' # str | Defines unique meta keywords for each entity (optional)
    seo_url = 'seo_url_example' # str | Defines unique category's URL for SEO (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.category_update(id, name=name, parent_id=parent_id, stores_ids=stores_ids, avail=avail, sort_order=sort_order, modified_time=modified_time, description=description, meta_title=meta_title, meta_description=meta_description, meta_keywords=meta_keywords, seo_url=seo_url, lang_id=lang_id, store_id=store_id)
        print("The response of CategoryApi->category_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->category_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Defines category update specified by category id | 
 **name** | **str**| Defines new category’s name | [optional] 
 **parent_id** | **str**| Defines new parent category id | [optional] 
 **stores_ids** | **str**| Update category in the stores that is specified by comma-separated stores&#39; id | [optional] [default to &#39;0&#39;]
 **avail** | **bool**| Defines category&#39;s visibility status | [optional] 
 **sort_order** | **int**| Sort number in the list | [optional] 
 **modified_time** | **str**| Entity&#39;s date modification | [optional] 
 **description** | **str**| Defines new category&#39;s description | [optional] 
 **meta_title** | **str**| Defines unique meta title for each entity | [optional] 
 **meta_description** | **str**| Defines unique meta description of a entity | [optional] 
 **meta_keywords** | **str**| Defines unique meta keywords for each entity | [optional] 
 **seo_url** | **str**| Defines unique category&#39;s URL for SEO | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **store_id** | **str**| Store Id | [optional] 

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

