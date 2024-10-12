# openapi_client.CategoriesApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categories_count_json_get**](CategoriesApi.md#categories_count_json_get) | **GET** /categories/count.json | Count all Categories.
[**categories_id_json_delete**](CategoriesApi.md#categories_id_json_delete) | **DELETE** /categories/{id}.json | Delete an existing Category.
[**categories_id_json_get**](CategoriesApi.md#categories_id_json_get) | **GET** /categories/{id}.json | Retrieve a single Category.
[**categories_id_json_put**](CategoriesApi.md#categories_id_json_put) | **PUT** /categories/{id}.json | Modify an existing Category.
[**categories_json_get**](CategoriesApi.md#categories_json_get) | **GET** /categories.json | Retrieve all Categories.
[**categories_json_post**](CategoriesApi.md#categories_json_post) | **POST** /categories.json | Create a new Category.


# **categories_count_json_get**
> Count categories_count_json_get(login, authtoken)

Count all Categories.

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
    api_instance = openapi_client.CategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.

    try:
        # Count all Categories.
        api_response = api_instance.categories_count_json_get(login, authtoken)
        print("The response of CategoriesApi->categories_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_count_json_get: %s\n" % e)
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

# **categories_id_json_delete**
> str categories_id_json_delete(login, authtoken, id)

Delete an existing Category.

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
    api_instance = openapi_client.CategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Category

    try:
        # Delete an existing Category.
        api_response = api_instance.categories_id_json_delete(login, authtoken, id)
        print("The response of CategoriesApi->categories_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Category | 

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
**404** | Category Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categories_id_json_get**
> Category categories_id_json_get(login, authtoken, id)

Retrieve a single Category.

### Example


```python
import openapi_client
from openapi_client.models.category import Category
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
    api_instance = openapi_client.CategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Category

    try:
        # Retrieve a single Category.
        api_response = api_instance.categories_id_json_get(login, authtoken, id)
        print("The response of CategoriesApi->categories_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Category | 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The selected Category. |  -  |
**404** | Category Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categories_id_json_put**
> Category categories_id_json_put(login, authtoken, id, category_edit)

Modify an existing Category.

### Example


```python
import openapi_client
from openapi_client.models.category import Category
from openapi_client.models.category_edit import CategoryEdit
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
    api_instance = openapi_client.CategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Category
    category_edit = openapi_client.CategoryEdit() # CategoryEdit | Category parameters.

    try:
        # Modify an existing Category.
        api_response = api_instance.categories_id_json_put(login, authtoken, id, category_edit)
        print("The response of CategoriesApi->categories_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Category | 
 **category_edit** | [**CategoryEdit**](CategoryEdit.md)| Category parameters. | 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Category Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categories_json_get**
> Category categories_json_get(login, authtoken)

Retrieve all Categories.

### Example


```python
import openapi_client
from openapi_client.models.category import Category
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
    api_instance = openapi_client.CategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.

    try:
        # Retrieve all Categories.
        api_response = api_instance.categories_json_get(login, authtoken)
        print("The response of CategoriesApi->categories_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 

### Return type

[**Category**](Category.md)

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

# **categories_json_post**
> Category categories_json_post(login, authtoken, category_edit)

Create a new Category.

Category's permalink is automatically generated from the given category's name.

### Example


```python
import openapi_client
from openapi_client.models.category import Category
from openapi_client.models.category_edit import CategoryEdit
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
    api_instance = openapi_client.CategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    category_edit = openapi_client.CategoryEdit() # CategoryEdit | Category parameters.

    try:
        # Create a new Category.
        api_response = api_instance.categories_json_post(login, authtoken, category_edit)
        print("The response of CategoriesApi->categories_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **category_edit** | [**CategoryEdit**](CategoryEdit.md)| Category parameters. | 

### Return type

[**Category**](Category.md)

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

