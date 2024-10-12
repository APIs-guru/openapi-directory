# openapi_client.CustomFieldsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**custom_fields_id_json_delete**](CustomFieldsApi.md#custom_fields_id_json_delete) | **DELETE** /custom_fields/{id}.json | Delete an existing CustomField.
[**custom_fields_id_json_get**](CustomFieldsApi.md#custom_fields_id_json_get) | **GET** /custom_fields/{id}.json | Retrieve a single CustomField.
[**custom_fields_id_json_put**](CustomFieldsApi.md#custom_fields_id_json_put) | **PUT** /custom_fields/{id}.json | Update a CustomField.
[**custom_fields_id_select_options_custom_field_select_option_id_json_delete**](CustomFieldsApi.md#custom_fields_id_select_options_custom_field_select_option_id_json_delete) | **DELETE** /custom_fields/{id}/select_options/{custom_field_select_option_id}.json | Delete an existing CustomFieldSelectOption.
[**custom_fields_json_get**](CustomFieldsApi.md#custom_fields_json_get) | **GET** /custom_fields.json | Retrieve all Store&#39;s Custom Fields.
[**custom_fields_json_post**](CustomFieldsApi.md#custom_fields_json_post) | **POST** /custom_fields.json | Create a new Custom Field.


# **custom_fields_id_json_delete**
> str custom_fields_id_json_delete(login, authtoken, id)

Delete an existing CustomField.

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
    api_instance = openapi_client.CustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CustomField

    try:
        # Delete an existing CustomField.
        api_response = api_instance.custom_fields_id_json_delete(login, authtoken, id)
        print("The response of CustomFieldsApi->custom_fields_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldsApi->custom_fields_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CustomField | 

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
**404** | CustomField Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_fields_id_json_get**
> CustomField custom_fields_id_json_get(login, authtoken, id)

Retrieve a single CustomField.

### Example


```python
import openapi_client
from openapi_client.models.custom_field import CustomField
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
    api_instance = openapi_client.CustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CustomField

    try:
        # Retrieve a single CustomField.
        api_response = api_instance.custom_fields_id_json_get(login, authtoken, id)
        print("The response of CustomFieldsApi->custom_fields_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldsApi->custom_fields_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CustomField | 

### Return type

[**CustomField**](CustomField.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | CustomField Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_fields_id_json_put**
> CustomField custom_fields_id_json_put(login, authtoken, id, custom_field_edit)

Update a CustomField.

### Example


```python
import openapi_client
from openapi_client.models.custom_field import CustomField
from openapi_client.models.custom_field_edit import CustomFieldEdit
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
    api_instance = openapi_client.CustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CustomField
    custom_field_edit = openapi_client.CustomFieldEdit() # CustomFieldEdit | CustomField parameters.

    try:
        # Update a CustomField.
        api_response = api_instance.custom_fields_id_json_put(login, authtoken, id, custom_field_edit)
        print("The response of CustomFieldsApi->custom_fields_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldsApi->custom_fields_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CustomField | 
 **custom_field_edit** | [**CustomFieldEdit**](CustomFieldEdit.md)| CustomField parameters. | 

### Return type

[**CustomField**](CustomField.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | CustomField Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_fields_id_select_options_custom_field_select_option_id_json_delete**
> str custom_fields_id_select_options_custom_field_select_option_id_json_delete(login, authtoken, id, custom_field_select_option_id)

Delete an existing CustomFieldSelectOption.

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
    api_instance = openapi_client.CustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CustomField
    custom_field_select_option_id = 56 # int | Id of the CustomFieldSelectOption

    try:
        # Delete an existing CustomFieldSelectOption.
        api_response = api_instance.custom_fields_id_select_options_custom_field_select_option_id_json_delete(login, authtoken, id, custom_field_select_option_id)
        print("The response of CustomFieldsApi->custom_fields_id_select_options_custom_field_select_option_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldsApi->custom_fields_id_select_options_custom_field_select_option_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CustomField | 
 **custom_field_select_option_id** | **int**| Id of the CustomFieldSelectOption | 

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
**404** | CustomFieldSelectOption Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_fields_json_get**
> List[CustomField] custom_fields_json_get(login, authtoken)

Retrieve all Store's Custom Fields.

### Example


```python
import openapi_client
from openapi_client.models.custom_field import CustomField
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
    api_instance = openapi_client.CustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.

    try:
        # Retrieve all Store's Custom Fields.
        api_response = api_instance.custom_fields_json_get(login, authtoken)
        print("The response of CustomFieldsApi->custom_fields_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldsApi->custom_fields_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 

### Return type

[**List[CustomField]**](CustomField.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Custom Fields |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_fields_json_post**
> CustomField custom_fields_json_post(login, authtoken, custom_field_edit)

Create a new Custom Field.

### Example


```python
import openapi_client
from openapi_client.models.custom_field import CustomField
from openapi_client.models.custom_field_edit import CustomFieldEdit
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
    api_instance = openapi_client.CustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    custom_field_edit = openapi_client.CustomFieldEdit() # CustomFieldEdit | Custom Field parameters.

    try:
        # Create a new Custom Field.
        api_response = api_instance.custom_fields_json_post(login, authtoken, custom_field_edit)
        print("The response of CustomFieldsApi->custom_fields_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldsApi->custom_fields_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **custom_field_edit** | [**CustomFieldEdit**](CustomFieldEdit.md)| Custom Field parameters. | 

### Return type

[**CustomField**](CustomField.md)

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

