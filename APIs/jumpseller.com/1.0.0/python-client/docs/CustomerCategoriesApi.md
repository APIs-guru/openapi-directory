# openapi_client.CustomerCategoriesApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customer_categories_id_customers_json_delete**](CustomerCategoriesApi.md#customer_categories_id_customers_json_delete) | **DELETE** /customer_categories/{id}/customers.json | Delete Customers from an existing CustomerCategory.
[**customer_categories_id_customers_json_get**](CustomerCategoriesApi.md#customer_categories_id_customers_json_get) | **GET** /customer_categories/{id}/customers.json | Retrieves the customers in a CustomerCategory.
[**customer_categories_id_customers_json_post**](CustomerCategoriesApi.md#customer_categories_id_customers_json_post) | **POST** /customer_categories/{id}/customers.json | Adds Customers to a CustomerCategory.
[**customer_categories_id_json_delete**](CustomerCategoriesApi.md#customer_categories_id_json_delete) | **DELETE** /customer_categories/{id}.json | Delete an existing CustomerCategory.
[**customer_categories_id_json_get**](CustomerCategoriesApi.md#customer_categories_id_json_get) | **GET** /customer_categories/{id}.json | Retrieve a single CustomerCategory.
[**customer_categories_id_json_put**](CustomerCategoriesApi.md#customer_categories_id_json_put) | **PUT** /customer_categories/{id}.json | Update a CustomerCategory.
[**customer_categories_json_get**](CustomerCategoriesApi.md#customer_categories_json_get) | **GET** /customer_categories.json | Retrieve all Customer Categories.
[**customer_categories_json_post**](CustomerCategoriesApi.md#customer_categories_json_post) | **POST** /customer_categories.json | Create a new CustomerCategory.


# **customer_categories_id_customers_json_delete**
> str customer_categories_id_customers_json_delete(login, authtoken, id, customers_to_customer_category)

Delete Customers from an existing CustomerCategory.

### Example


```python
import openapi_client
from openapi_client.models.customers_to_customer_category import CustomersToCustomerCategory
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
    api_instance = openapi_client.CustomerCategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CustomerCategory
    customers_to_customer_category = openapi_client.CustomersToCustomerCategory() # CustomersToCustomerCategory | Customer parameters.

    try:
        # Delete Customers from an existing CustomerCategory.
        api_response = api_instance.customer_categories_id_customers_json_delete(login, authtoken, id, customers_to_customer_category)
        print("The response of CustomerCategoriesApi->customer_categories_id_customers_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerCategoriesApi->customer_categories_id_customers_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CustomerCategory | 
 **customers_to_customer_category** | [**CustomersToCustomerCategory**](CustomersToCustomerCategory.md)| Customer parameters. | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | CustomerCategory Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_categories_id_customers_json_get**
> List[Customer] customer_categories_id_customers_json_get(login, authtoken, id)

Retrieves the customers in a CustomerCategory.

### Example


```python
import openapi_client
from openapi_client.models.customer import Customer
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
    api_instance = openapi_client.CustomerCategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CustomerCategory

    try:
        # Retrieves the customers in a CustomerCategory.
        api_response = api_instance.customer_categories_id_customers_json_get(login, authtoken, id)
        print("The response of CustomerCategoriesApi->customer_categories_id_customers_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerCategoriesApi->customer_categories_id_customers_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CustomerCategory | 

### Return type

[**List[Customer]**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | CustomerCategory Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_categories_id_customers_json_post**
> List[Customer] customer_categories_id_customers_json_post(login, authtoken, id, customers_to_customer_category)

Adds Customers to a CustomerCategory.

### Example


```python
import openapi_client
from openapi_client.models.customer import Customer
from openapi_client.models.customers_to_customer_category import CustomersToCustomerCategory
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
    api_instance = openapi_client.CustomerCategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CustomerCategory
    customers_to_customer_category = openapi_client.CustomersToCustomerCategory() # CustomersToCustomerCategory | Customer parameters.

    try:
        # Adds Customers to a CustomerCategory.
        api_response = api_instance.customer_categories_id_customers_json_post(login, authtoken, id, customers_to_customer_category)
        print("The response of CustomerCategoriesApi->customer_categories_id_customers_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerCategoriesApi->customer_categories_id_customers_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CustomerCategory | 
 **customers_to_customer_category** | [**CustomersToCustomerCategory**](CustomersToCustomerCategory.md)| Customer parameters. | 

### Return type

[**List[Customer]**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Customers in the Customer Category |  -  |
**404** | CustomerCategory Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_categories_id_json_delete**
> str customer_categories_id_json_delete(login, authtoken, id)

Delete an existing CustomerCategory.

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
    api_instance = openapi_client.CustomerCategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CustomerCategory

    try:
        # Delete an existing CustomerCategory.
        api_response = api_instance.customer_categories_id_json_delete(login, authtoken, id)
        print("The response of CustomerCategoriesApi->customer_categories_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerCategoriesApi->customer_categories_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CustomerCategory | 

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
**404** | CustomerCategory Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_categories_id_json_get**
> CustomerCategory customer_categories_id_json_get(login, authtoken, id)

Retrieve a single CustomerCategory.

### Example


```python
import openapi_client
from openapi_client.models.customer_category import CustomerCategory
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
    api_instance = openapi_client.CustomerCategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CustomerCategory

    try:
        # Retrieve a single CustomerCategory.
        api_response = api_instance.customer_categories_id_json_get(login, authtoken, id)
        print("The response of CustomerCategoriesApi->customer_categories_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerCategoriesApi->customer_categories_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CustomerCategory | 

### Return type

[**CustomerCategory**](CustomerCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | CustomerCategory Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_categories_id_json_put**
> CustomerCategory customer_categories_id_json_put(login, authtoken, id, customer_category_edit)

Update a CustomerCategory.

### Example


```python
import openapi_client
from openapi_client.models.customer_category import CustomerCategory
from openapi_client.models.customer_category_edit import CustomerCategoryEdit
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
    api_instance = openapi_client.CustomerCategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CustomerCategory
    customer_category_edit = openapi_client.CustomerCategoryEdit() # CustomerCategoryEdit | CustomerCategory parameters.

    try:
        # Update a CustomerCategory.
        api_response = api_instance.customer_categories_id_json_put(login, authtoken, id, customer_category_edit)
        print("The response of CustomerCategoriesApi->customer_categories_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerCategoriesApi->customer_categories_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CustomerCategory | 
 **customer_category_edit** | [**CustomerCategoryEdit**](CustomerCategoryEdit.md)| CustomerCategory parameters. | 

### Return type

[**CustomerCategory**](CustomerCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | CustomerCategory Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_categories_json_get**
> List[CustomerCategory] customer_categories_json_get(login, authtoken, limit=limit, page=page)

Retrieve all Customer Categories.

### Example


```python
import openapi_client
from openapi_client.models.customer_category import CustomerCategory
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
    api_instance = openapi_client.CustomerCategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    limit = 50 # int | List restriction (optional) (default to 50)
    page = 1 # int | List page (optional) (default to 1)

    try:
        # Retrieve all Customer Categories.
        api_response = api_instance.customer_categories_json_get(login, authtoken, limit=limit, page=page)
        print("The response of CustomerCategoriesApi->customer_categories_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerCategoriesApi->customer_categories_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **limit** | **int**| List restriction | [optional] [default to 50]
 **page** | **int**| List page | [optional] [default to 1]

### Return type

[**List[CustomerCategory]**](CustomerCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Customer Categories |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_categories_json_post**
> CustomerCategory customer_categories_json_post(login, authtoken, customer_category_edit)

Create a new CustomerCategory.

### Example


```python
import openapi_client
from openapi_client.models.customer_category import CustomerCategory
from openapi_client.models.customer_category_edit import CustomerCategoryEdit
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
    api_instance = openapi_client.CustomerCategoriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    customer_category_edit = openapi_client.CustomerCategoryEdit() # CustomerCategoryEdit | CustomerCategory parameters.

    try:
        # Create a new CustomerCategory.
        api_response = api_instance.customer_categories_json_post(login, authtoken, customer_category_edit)
        print("The response of CustomerCategoriesApi->customer_categories_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerCategoriesApi->customer_categories_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **customer_category_edit** | [**CustomerCategoryEdit**](CustomerCategoryEdit.md)| CustomerCategory parameters. | 

### Return type

[**CustomerCategory**](CustomerCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | CustomerCategory Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

