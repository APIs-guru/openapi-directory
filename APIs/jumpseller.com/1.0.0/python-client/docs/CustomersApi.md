# openapi_client.CustomersApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customers_count_json_get**](CustomersApi.md#customers_count_json_get) | **GET** /customers/count.json | Count all Customers.
[**customers_email_email_json_get**](CustomersApi.md#customers_email_email_json_get) | **GET** /customers/email/{email}.json | Retrieve a single Customer by email.
[**customers_id_json_delete**](CustomersApi.md#customers_id_json_delete) | **DELETE** /customers/{id}.json | Delete an existing Customer.
[**customers_id_json_get**](CustomersApi.md#customers_id_json_get) | **GET** /customers/{id}.json | Retrieve a single Customer by id.
[**customers_id_json_put**](CustomersApi.md#customers_id_json_put) | **PUT** /customers/{id}.json | Update a new Customer.
[**customers_json_get**](CustomersApi.md#customers_json_get) | **GET** /customers.json | Retrieve all Customers.
[**customers_json_post**](CustomersApi.md#customers_json_post) | **POST** /customers.json | Create a new Customer.


# **customers_count_json_get**
> Count customers_count_json_get(login, authtoken)

Count all Customers.

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
    api_instance = openapi_client.CustomersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.

    try:
        # Count all Customers.
        api_response = api_instance.customers_count_json_get(login, authtoken)
        print("The response of CustomersApi->customers_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customers_count_json_get: %s\n" % e)
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

# **customers_email_email_json_get**
> Customer customers_email_email_json_get(login, authtoken, email)

Retrieve a single Customer by email.

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
    api_instance = openapi_client.CustomersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    email = 'email_example' # str | Email of the Customer

    try:
        # Retrieve a single Customer by email.
        api_response = api_instance.customers_email_email_json_get(login, authtoken, email)
        print("The response of CustomersApi->customers_email_email_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customers_email_email_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **email** | **str**| Email of the Customer | 

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Customer Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customers_id_json_delete**
> str customers_id_json_delete(login, authtoken, id)

Delete an existing Customer.

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
    api_instance = openapi_client.CustomersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Customer

    try:
        # Delete an existing Customer.
        api_response = api_instance.customers_id_json_delete(login, authtoken, id)
        print("The response of CustomersApi->customers_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customers_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Customer | 

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
**404** | Customer Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customers_id_json_get**
> Customer customers_id_json_get(login, authtoken, id)

Retrieve a single Customer by id.

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
    api_instance = openapi_client.CustomersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Customer

    try:
        # Retrieve a single Customer by id.
        api_response = api_instance.customers_id_json_get(login, authtoken, id)
        print("The response of CustomersApi->customers_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customers_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Customer | 

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Customer Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customers_id_json_put**
> Customer customers_id_json_put(login, authtoken, id, customer_with_password_no_id)

Update a new Customer.

### Example


```python
import openapi_client
from openapi_client.models.customer import Customer
from openapi_client.models.customer_with_password_no_id import CustomerWithPasswordNoID
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
    api_instance = openapi_client.CustomersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Customer
    customer_with_password_no_id = openapi_client.CustomerWithPasswordNoID() # CustomerWithPasswordNoID | Customer parameters.

    try:
        # Update a new Customer.
        api_response = api_instance.customers_id_json_put(login, authtoken, id, customer_with_password_no_id)
        print("The response of CustomersApi->customers_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customers_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Customer | 
 **customer_with_password_no_id** | [**CustomerWithPasswordNoID**](CustomerWithPasswordNoID.md)| Customer parameters. | 

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Customer Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customers_json_get**
> List[Customer] customers_json_get(login, authtoken, limit=limit, page=page)

Retrieve all Customers.

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
    api_instance = openapi_client.CustomersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    limit = 50 # int | List restriction (optional) (default to 50)
    page = 1 # int | List page (optional) (default to 1)

    try:
        # Retrieve all Customers.
        api_response = api_instance.customers_json_get(login, authtoken, limit=limit, page=page)
        print("The response of CustomersApi->customers_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customers_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **limit** | **int**| List restriction | [optional] [default to 50]
 **page** | **int**| List page | [optional] [default to 1]

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
**200** | An array of Orders |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customers_json_post**
> Customer customers_json_post(login, authtoken, customer_with_password_no_id)

Create a new Customer.

### Example


```python
import openapi_client
from openapi_client.models.customer import Customer
from openapi_client.models.customer_with_password_no_id import CustomerWithPasswordNoID
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
    api_instance = openapi_client.CustomersApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    customer_with_password_no_id = openapi_client.CustomerWithPasswordNoID() # CustomerWithPasswordNoID | Customer parameters.

    try:
        # Create a new Customer.
        api_response = api_instance.customers_json_post(login, authtoken, customer_with_password_no_id)
        print("The response of CustomersApi->customers_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customers_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **customer_with_password_no_id** | [**CustomerWithPasswordNoID**](CustomerWithPasswordNoID.md)| Customer parameters. | 

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Customer Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

