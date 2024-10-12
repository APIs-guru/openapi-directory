# openapi_client.ProductsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_after_id_json_get**](ProductsApi.md#products_after_id_json_get) | **GET** /products/after/{id}.json | Retrieves Products after the given id.
[**products_category_category_id_count_json_get**](ProductsApi.md#products_category_category_id_count_json_get) | **GET** /products/category/{category_id}/count.json | Count Products filtered by category.
[**products_category_category_id_json_get**](ProductsApi.md#products_category_category_id_json_get) | **GET** /products/category/{category_id}.json | Retrieve Products filtered by category.
[**products_count_json_get**](ProductsApi.md#products_count_json_get) | **GET** /products/count.json | Count all Products.
[**products_id_json_delete**](ProductsApi.md#products_id_json_delete) | **DELETE** /products/{id}.json | Delete an existing Product.
[**products_id_json_get**](ProductsApi.md#products_id_json_get) | **GET** /products/{id}.json | Retrieve a single Product.
[**products_id_json_put**](ProductsApi.md#products_id_json_put) | **PUT** /products/{id}.json | Modify an existing Product.
[**products_json_get**](ProductsApi.md#products_json_get) | **GET** /products.json | Retrieve all Products.
[**products_json_post**](ProductsApi.md#products_json_post) | **POST** /products.json | Create a new Product.
[**products_search_json_get**](ProductsApi.md#products_search_json_get) | **GET** /products/search.json | Retrieve a Product List from a query.
[**products_status_status_count_json_get**](ProductsApi.md#products_status_status_count_json_get) | **GET** /products/status/{status}/count.json | Count Products filtered by status.
[**products_status_status_json_get**](ProductsApi.md#products_status_status_json_get) | **GET** /products/status/{status}.json | Retrieve Products filtered by status.


# **products_after_id_json_get**
> List[Product] products_after_id_json_get(login, authtoken, id, locale=locale)

Retrieves Products after the given id.

### Example


```python
import openapi_client
from openapi_client.models.product import Product
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
    api_instance = openapi_client.ProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    locale = 'locale_example' # str | Locale code of the translation (optional)

    try:
        # Retrieves Products after the given id.
        api_response = api_instance.products_after_id_json_get(login, authtoken, id, locale=locale)
        print("The response of ProductsApi->products_after_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_after_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **locale** | **str**| Locale code of the translation | [optional] 

### Return type

[**List[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_category_category_id_count_json_get**
> Count products_category_category_id_count_json_get(login, authtoken, category_id, locale=locale)

Count Products filtered by category.

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
    api_instance = openapi_client.ProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    category_id = 56 # int | Category ID of the Product used as filter
    locale = 'locale_example' # str | Locale code of the translation (optional)

    try:
        # Count Products filtered by category.
        api_response = api_instance.products_category_category_id_count_json_get(login, authtoken, category_id, locale=locale)
        print("The response of ProductsApi->products_category_category_id_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_category_category_id_count_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **category_id** | **int**| Category ID of the Product used as filter | 
 **locale** | **str**| Locale code of the translation | [optional] 

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
**404** | Category Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_category_category_id_json_get**
> List[Product] products_category_category_id_json_get(login, authtoken, category_id, locale=locale)

Retrieve Products filtered by category.

### Example


```python
import openapi_client
from openapi_client.models.product import Product
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
    api_instance = openapi_client.ProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    category_id = 56 # int | Category ID of the Product used as filter
    locale = 'locale_example' # str | Locale code of the translation (optional)

    try:
        # Retrieve Products filtered by category.
        api_response = api_instance.products_category_category_id_json_get(login, authtoken, category_id, locale=locale)
        print("The response of ProductsApi->products_category_category_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_category_category_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **category_id** | **int**| Category ID of the Product used as filter | 
 **locale** | **str**| Locale code of the translation | [optional] 

### Return type

[**List[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_count_json_get**
> Count products_count_json_get(login, authtoken)

Count all Products.

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
    api_instance = openapi_client.ProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.

    try:
        # Count all Products.
        api_response = api_instance.products_count_json_get(login, authtoken)
        print("The response of ProductsApi->products_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_count_json_get: %s\n" % e)
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

# **products_id_json_delete**
> str products_id_json_delete(login, authtoken, id)

Delete an existing Product.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.ProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product

    try:
        # Delete an existing Product.
        api_response = api_instance.products_id_json_delete(login, authtoken, id)
        print("The response of ProductsApi->products_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_id_json_get**
> Product products_id_json_get(login, authtoken, id, locale=locale)

Retrieve a single Product.

### Example


```python
import openapi_client
from openapi_client.models.product import Product
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
    api_instance = openapi_client.ProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product
    locale = 'locale_example' # str | Locale code of the translation (optional)

    try:
        # Retrieve a single Product.
        api_response = api_instance.products_id_json_get(login, authtoken, id, locale=locale)
        print("The response of ProductsApi->products_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| ID of the Product | 
 **locale** | **str**| Locale code of the translation | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_id_json_put**
> Product products_id_json_put(login, authtoken, id, product_edit, locale=locale)

Modify an existing Product.

### Example


```python
import openapi_client
from openapi_client.models.product import Product
from openapi_client.models.product_edit import ProductEdit
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
    api_instance = openapi_client.ProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    product_edit = openapi_client.ProductEdit() # ProductEdit | Product parameters to change
    locale = 'locale_example' # str | Locale code of the translation (optional)

    try:
        # Modify an existing Product.
        api_response = api_instance.products_id_json_put(login, authtoken, id, product_edit, locale=locale)
        print("The response of ProductsApi->products_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **product_edit** | [**ProductEdit**](ProductEdit.md)| Product parameters to change | 
 **locale** | **str**| Locale code of the translation | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_json_get**
> List[Product] products_json_get(login, authtoken, limit=limit, page=page, locale=locale)

Retrieve all Products.

### Example


```python
import openapi_client
from openapi_client.models.product import Product
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
    api_instance = openapi_client.ProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    limit = 50 # int | List restriction (optional) (default to 50)
    page = 1 # int | List page (optional) (default to 1)
    locale = 'locale_example' # str | Locale code of the translation (optional)

    try:
        # Retrieve all Products.
        api_response = api_instance.products_json_get(login, authtoken, limit=limit, page=page, locale=locale)
        print("The response of ProductsApi->products_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **limit** | **int**| List restriction | [optional] [default to 50]
 **page** | **int**| List page | [optional] [default to 1]
 **locale** | **str**| Locale code of the translation | [optional] 

### Return type

[**List[Product]**](Product.md)

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

# **products_json_post**
> Product products_json_post(login, authtoken, product_edit, locale=locale)

Create a new Product.

### Example


```python
import openapi_client
from openapi_client.models.product import Product
from openapi_client.models.product_edit import ProductEdit
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
    api_instance = openapi_client.ProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    product_edit = openapi_client.ProductEdit() # ProductEdit | Product parameters.
    locale = 'locale_example' # str | Locale code of the translation (optional)

    try:
        # Create a new Product.
        api_response = api_instance.products_json_post(login, authtoken, product_edit, locale=locale)
        print("The response of ProductsApi->products_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **product_edit** | [**ProductEdit**](ProductEdit.md)| Product parameters. | 
 **locale** | **str**| Locale code of the translation | [optional] 

### Return type

[**Product**](Product.md)

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

# **products_search_json_get**
> List[Product] products_search_json_get(login, authtoken, query, locale=locale, fields=fields)

Retrieve a Product List from a query.

Endpoint example:   ```text https://api.jumpseller.com/v1/products/search.json?login=XXXXXX&authtoken=XXXXX&query=test&fields=name,description  ```

### Example


```python
import openapi_client
from openapi_client.models.product import Product
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
    api_instance = openapi_client.ProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    query = 'query_example' # str | Text to query for the Product
    locale = 'locale_example' # str | Locale code of the translation (optional)
    fields = 'fields_example' # str | Comma separated values of the fields to query for the Product (optional)

    try:
        # Retrieve a Product List from a query.
        api_response = api_instance.products_search_json_get(login, authtoken, query, locale=locale, fields=fields)
        print("The response of ProductsApi->products_search_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_search_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **query** | **str**| Text to query for the Product | 
 **locale** | **str**| Locale code of the translation | [optional] 
 **fields** | **str**| Comma separated values of the fields to query for the Product | [optional] 

### Return type

[**List[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of products |  -  |
**404** | Invalid query. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_status_status_count_json_get**
> Count products_status_status_count_json_get(login, authtoken, status, locale=locale)

Count Products filtered by status.

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
    api_instance = openapi_client.ProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    status = 'status_example' # str | Status of the Product used as filter
    locale = 'locale_example' # str | Locale code of the translation (optional)

    try:
        # Count Products filtered by status.
        api_response = api_instance.products_status_status_count_json_get(login, authtoken, status, locale=locale)
        print("The response of ProductsApi->products_status_status_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_status_status_count_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **status** | **str**| Status of the Product used as filter | 
 **locale** | **str**| Locale code of the translation | [optional] 

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
**404** | Status Invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_status_status_json_get**
> List[Product] products_status_status_json_get(login, authtoken, status, locale=locale)

Retrieve Products filtered by status.

### Example


```python
import openapi_client
from openapi_client.models.product import Product
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
    api_instance = openapi_client.ProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    status = 'status_example' # str | Status of the Product used as filter
    locale = 'locale_example' # str | Locale code of the translation (optional)

    try:
        # Retrieve Products filtered by status.
        api_response = api_instance.products_status_status_json_get(login, authtoken, status, locale=locale)
        print("The response of ProductsApi->products_status_status_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_status_status_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **status** | **str**| Status of the Product used as filter | 
 **locale** | **str**| Locale code of the translation | [optional] 

### Return type

[**List[Product]**](Product.md)

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

