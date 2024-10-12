# openapi_client.CustomerAdditionalFieldsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customers_id_fields_field_id_delete**](CustomerAdditionalFieldsApi.md#customers_id_fields_field_id_delete) | **DELETE** /customers/{id}/fields/{field_id} | Delete a Customer Additional Field.
[**customers_id_fields_field_id_get**](CustomerAdditionalFieldsApi.md#customers_id_fields_field_id_get) | **GET** /customers/{id}/fields/{field_id} | Retrieve a single Customer Additional Field.
[**customers_id_fields_field_id_put**](CustomerAdditionalFieldsApi.md#customers_id_fields_field_id_put) | **PUT** /customers/{id}/fields/{field_id} | Update a Customer Additional Field.
[**customers_id_fields_get**](CustomerAdditionalFieldsApi.md#customers_id_fields_get) | **GET** /customers/{id}/fields | Retrieves the Customer Additional Field of a Customer.
[**customers_id_fields_post**](CustomerAdditionalFieldsApi.md#customers_id_fields_post) | **POST** /customers/{id}/fields | Adds Customer Additional Fields to a Customer.


# **customers_id_fields_field_id_delete**
> str customers_id_fields_field_id_delete(login, authtoken, id, field_id)

Delete a Customer Additional Field.

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
    api_instance = openapi_client.CustomerAdditionalFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Customer
    field_id = 56 # int | Id of the Customer Additional Field

    try:
        # Delete a Customer Additional Field.
        api_response = api_instance.customers_id_fields_field_id_delete(login, authtoken, id, field_id)
        print("The response of CustomerAdditionalFieldsApi->customers_id_fields_field_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerAdditionalFieldsApi->customers_id_fields_field_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Customer | 
 **field_id** | **int**| Id of the Customer Additional Field | 

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

# **customers_id_fields_field_id_get**
> CustomerAdditionalField customers_id_fields_field_id_get(login, authtoken, id, field_id)

Retrieve a single Customer Additional Field.

### Example


```python
import openapi_client
from openapi_client.models.customer_additional_field import CustomerAdditionalField
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
    api_instance = openapi_client.CustomerAdditionalFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Customer
    field_id = 56 # int | Id of the Customer Additional Field

    try:
        # Retrieve a single Customer Additional Field.
        api_response = api_instance.customers_id_fields_field_id_get(login, authtoken, id, field_id)
        print("The response of CustomerAdditionalFieldsApi->customers_id_fields_field_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerAdditionalFieldsApi->customers_id_fields_field_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Customer | 
 **field_id** | **int**| Id of the Customer Additional Field | 

### Return type

[**CustomerAdditionalField**](CustomerAdditionalField.md)

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

# **customers_id_fields_field_id_put**
> CustomerAdditionalField customers_id_fields_field_id_put(login, authtoken, id, field_id, customer_additional_field_edit)

Update a Customer Additional Field.

### Example


```python
import openapi_client
from openapi_client.models.customer_additional_field import CustomerAdditionalField
from openapi_client.models.customer_additional_field_edit import CustomerAdditionalFieldEdit
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
    api_instance = openapi_client.CustomerAdditionalFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Customer
    field_id = 56 # int | Id of the Customer Additional Field
    customer_additional_field_edit = openapi_client.CustomerAdditionalFieldEdit() # CustomerAdditionalFieldEdit | Customer Additional Field parameters.

    try:
        # Update a Customer Additional Field.
        api_response = api_instance.customers_id_fields_field_id_put(login, authtoken, id, field_id, customer_additional_field_edit)
        print("The response of CustomerAdditionalFieldsApi->customers_id_fields_field_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerAdditionalFieldsApi->customers_id_fields_field_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Customer | 
 **field_id** | **int**| Id of the Customer Additional Field | 
 **customer_additional_field_edit** | [**CustomerAdditionalFieldEdit**](CustomerAdditionalFieldEdit.md)| Customer Additional Field parameters. | 

### Return type

[**CustomerAdditionalField**](CustomerAdditionalField.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Customer Additional Field Bad Parameters. |  -  |
**404** | Customer Additional Field Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customers_id_fields_get**
> List[CustomerAdditionalField] customers_id_fields_get(login, authtoken, id)

Retrieves the Customer Additional Field of a Customer.

### Example


```python
import openapi_client
from openapi_client.models.customer_additional_field import CustomerAdditionalField
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
    api_instance = openapi_client.CustomerAdditionalFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Customer

    try:
        # Retrieves the Customer Additional Field of a Customer.
        api_response = api_instance.customers_id_fields_get(login, authtoken, id)
        print("The response of CustomerAdditionalFieldsApi->customers_id_fields_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerAdditionalFieldsApi->customers_id_fields_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Customer | 

### Return type

[**List[CustomerAdditionalField]**](CustomerAdditionalField.md)

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

# **customers_id_fields_post**
> CustomerAdditionalField customers_id_fields_post(login, authtoken, id, customer_additional_field_edit)

Adds Customer Additional Fields to a Customer.

### Example


```python
import openapi_client
from openapi_client.models.customer_additional_field import CustomerAdditionalField
from openapi_client.models.customer_additional_field_edit import CustomerAdditionalFieldEdit
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
    api_instance = openapi_client.CustomerAdditionalFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Customer
    customer_additional_field_edit = openapi_client.CustomerAdditionalFieldEdit() # CustomerAdditionalFieldEdit | Customer Additional Field parameters.

    try:
        # Adds Customer Additional Fields to a Customer.
        api_response = api_instance.customers_id_fields_post(login, authtoken, id, customer_additional_field_edit)
        print("The response of CustomerAdditionalFieldsApi->customers_id_fields_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerAdditionalFieldsApi->customers_id_fields_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Customer | 
 **customer_additional_field_edit** | [**CustomerAdditionalFieldEdit**](CustomerAdditionalFieldEdit.md)| Customer Additional Field parameters. | 

### Return type

[**CustomerAdditionalField**](CustomerAdditionalField.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Customer Additional Field Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

