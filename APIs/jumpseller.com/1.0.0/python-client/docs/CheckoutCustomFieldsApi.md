# openapi_client.CheckoutCustomFieldsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkout_custom_fields_id_json_delete**](CheckoutCustomFieldsApi.md#checkout_custom_fields_id_json_delete) | **DELETE** /checkout_custom_fields/{id}.json | Delete an existing CheckoutCustomField.
[**checkout_custom_fields_id_json_get**](CheckoutCustomFieldsApi.md#checkout_custom_fields_id_json_get) | **GET** /checkout_custom_fields/{id}.json | Retrieve a single CheckoutCustomField.
[**checkout_custom_fields_id_json_put**](CheckoutCustomFieldsApi.md#checkout_custom_fields_id_json_put) | **PUT** /checkout_custom_fields/{id}.json | Update a CheckoutCustomField.
[**checkout_custom_fields_json_get**](CheckoutCustomFieldsApi.md#checkout_custom_fields_json_get) | **GET** /checkout_custom_fields.json | Retrieve all Checkout Custom Fields.
[**checkout_custom_fields_json_post**](CheckoutCustomFieldsApi.md#checkout_custom_fields_json_post) | **POST** /checkout_custom_fields.json | Create a new CheckoutCustomField.


# **checkout_custom_fields_id_json_delete**
> str checkout_custom_fields_id_json_delete(login, authtoken, id)

Delete an existing CheckoutCustomField.

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
    api_instance = openapi_client.CheckoutCustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CheckoutCustomField

    try:
        # Delete an existing CheckoutCustomField.
        api_response = api_instance.checkout_custom_fields_id_json_delete(login, authtoken, id)
        print("The response of CheckoutCustomFieldsApi->checkout_custom_fields_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckoutCustomFieldsApi->checkout_custom_fields_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CheckoutCustomField | 

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
**404** | CheckoutCustomField Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkout_custom_fields_id_json_get**
> CheckoutCustomField checkout_custom_fields_id_json_get(login, authtoken, id)

Retrieve a single CheckoutCustomField.

### Example


```python
import openapi_client
from openapi_client.models.checkout_custom_field import CheckoutCustomField
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
    api_instance = openapi_client.CheckoutCustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CheckoutCustomField

    try:
        # Retrieve a single CheckoutCustomField.
        api_response = api_instance.checkout_custom_fields_id_json_get(login, authtoken, id)
        print("The response of CheckoutCustomFieldsApi->checkout_custom_fields_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckoutCustomFieldsApi->checkout_custom_fields_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CheckoutCustomField | 

### Return type

[**CheckoutCustomField**](CheckoutCustomField.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | CheckoutCustomField Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkout_custom_fields_id_json_put**
> CheckoutCustomField checkout_custom_fields_id_json_put(login, authtoken, id, checkout_custom_field_edit)

Update a CheckoutCustomField.

### Example


```python
import openapi_client
from openapi_client.models.checkout_custom_field import CheckoutCustomField
from openapi_client.models.checkout_custom_field_edit import CheckoutCustomFieldEdit
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
    api_instance = openapi_client.CheckoutCustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CheckoutCustomField
    checkout_custom_field_edit = openapi_client.CheckoutCustomFieldEdit() # CheckoutCustomFieldEdit | CheckoutCustomField parameters.

    try:
        # Update a CheckoutCustomField.
        api_response = api_instance.checkout_custom_fields_id_json_put(login, authtoken, id, checkout_custom_field_edit)
        print("The response of CheckoutCustomFieldsApi->checkout_custom_fields_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckoutCustomFieldsApi->checkout_custom_fields_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CheckoutCustomField | 
 **checkout_custom_field_edit** | [**CheckoutCustomFieldEdit**](CheckoutCustomFieldEdit.md)| CheckoutCustomField parameters. | 

### Return type

[**CheckoutCustomField**](CheckoutCustomField.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | CheckoutCustomField Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkout_custom_fields_json_get**
> List[CheckoutCustomField] checkout_custom_fields_json_get(login, authtoken, limit=limit, page=page)

Retrieve all Checkout Custom Fields.

### Example


```python
import openapi_client
from openapi_client.models.checkout_custom_field import CheckoutCustomField
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
    api_instance = openapi_client.CheckoutCustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    limit = 50 # int | List restriction (optional) (default to 50)
    page = 1 # int | List page (optional) (default to 1)

    try:
        # Retrieve all Checkout Custom Fields.
        api_response = api_instance.checkout_custom_fields_json_get(login, authtoken, limit=limit, page=page)
        print("The response of CheckoutCustomFieldsApi->checkout_custom_fields_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckoutCustomFieldsApi->checkout_custom_fields_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **limit** | **int**| List restriction | [optional] [default to 50]
 **page** | **int**| List page | [optional] [default to 1]

### Return type

[**List[CheckoutCustomField]**](CheckoutCustomField.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Checkout Custom Fields |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkout_custom_fields_json_post**
> CheckoutCustomField checkout_custom_fields_json_post(login, authtoken, checkout_custom_field_edit)

Create a new CheckoutCustomField.

Type values can be: input, selection, checkbox, date or text. Area values can be: contact, billing_shipping or other.

### Example


```python
import openapi_client
from openapi_client.models.checkout_custom_field import CheckoutCustomField
from openapi_client.models.checkout_custom_field_edit import CheckoutCustomFieldEdit
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
    api_instance = openapi_client.CheckoutCustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    checkout_custom_field_edit = openapi_client.CheckoutCustomFieldEdit() # CheckoutCustomFieldEdit | CheckoutCustomField parameters.

    try:
        # Create a new CheckoutCustomField.
        api_response = api_instance.checkout_custom_fields_json_post(login, authtoken, checkout_custom_field_edit)
        print("The response of CheckoutCustomFieldsApi->checkout_custom_fields_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckoutCustomFieldsApi->checkout_custom_fields_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **checkout_custom_field_edit** | [**CheckoutCustomFieldEdit**](CheckoutCustomFieldEdit.md)| CheckoutCustomField parameters. | 

### Return type

[**CheckoutCustomField**](CheckoutCustomField.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | CheckoutCustomField Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

