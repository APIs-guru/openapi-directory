# openapi_client.CustomFieldSelectOptionsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**custom_fields_id_select_options_custom_field_select_option_id_json_get**](CustomFieldSelectOptionsApi.md#custom_fields_id_select_options_custom_field_select_option_id_json_get) | **GET** /custom_fields/{id}/select_options/{custom_field_select_option_id}.json | Retrieve a single SelectOption from a CustomField.
[**custom_fields_id_select_options_custom_field_select_option_id_json_put**](CustomFieldSelectOptionsApi.md#custom_fields_id_select_options_custom_field_select_option_id_json_put) | **PUT** /custom_fields/{id}/select_options/{custom_field_select_option_id}.json | Update a SelectOption from a CustomField.
[**custom_fields_id_select_options_json_get**](CustomFieldSelectOptionsApi.md#custom_fields_id_select_options_json_get) | **GET** /custom_fields/{id}/select_options.json | Retrieve all Store&#39;s Custom Fields.
[**custom_fields_id_select_options_json_post**](CustomFieldSelectOptionsApi.md#custom_fields_id_select_options_json_post) | **POST** /custom_fields/{id}/select_options.json | Create a new Custom Field Select Option.


# **custom_fields_id_select_options_custom_field_select_option_id_json_get**
> CustomFieldSelectOption custom_fields_id_select_options_custom_field_select_option_id_json_get(login, authtoken, id, custom_field_select_option_id)

Retrieve a single SelectOption from a CustomField.

### Example


```python
import openapi_client
from openapi_client.models.custom_field_select_option import CustomFieldSelectOption
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
    api_instance = openapi_client.CustomFieldSelectOptionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CustomField
    custom_field_select_option_id = 56 # int | Id of the CustomFieldSelectOption

    try:
        # Retrieve a single SelectOption from a CustomField.
        api_response = api_instance.custom_fields_id_select_options_custom_field_select_option_id_json_get(login, authtoken, id, custom_field_select_option_id)
        print("The response of CustomFieldSelectOptionsApi->custom_fields_id_select_options_custom_field_select_option_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldSelectOptionsApi->custom_fields_id_select_options_custom_field_select_option_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CustomField | 
 **custom_field_select_option_id** | **int**| Id of the CustomFieldSelectOption | 

### Return type

[**CustomFieldSelectOption**](CustomFieldSelectOption.md)

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

# **custom_fields_id_select_options_custom_field_select_option_id_json_put**
> CustomFieldSelectOption custom_fields_id_select_options_custom_field_select_option_id_json_put(login, authtoken, id, custom_field_select_option_id, custom_field_select_option_edit)

Update a SelectOption from a CustomField.

### Example


```python
import openapi_client
from openapi_client.models.custom_field_select_option import CustomFieldSelectOption
from openapi_client.models.custom_field_select_option_edit import CustomFieldSelectOptionEdit
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
    api_instance = openapi_client.CustomFieldSelectOptionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CustomField
    custom_field_select_option_id = 56 # int | Id of the CustomFieldSelectOption
    custom_field_select_option_edit = openapi_client.CustomFieldSelectOptionEdit() # CustomFieldSelectOptionEdit | CustomFieldSelectOption parameters.

    try:
        # Update a SelectOption from a CustomField.
        api_response = api_instance.custom_fields_id_select_options_custom_field_select_option_id_json_put(login, authtoken, id, custom_field_select_option_id, custom_field_select_option_edit)
        print("The response of CustomFieldSelectOptionsApi->custom_fields_id_select_options_custom_field_select_option_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldSelectOptionsApi->custom_fields_id_select_options_custom_field_select_option_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CustomField | 
 **custom_field_select_option_id** | **int**| Id of the CustomFieldSelectOption | 
 **custom_field_select_option_edit** | [**CustomFieldSelectOptionEdit**](CustomFieldSelectOptionEdit.md)| CustomFieldSelectOption parameters. | 

### Return type

[**CustomFieldSelectOption**](CustomFieldSelectOption.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | CustomFieldSelectOption Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_fields_id_select_options_json_get**
> List[CustomFieldSelectOption] custom_fields_id_select_options_json_get(login, authtoken, id)

Retrieve all Store's Custom Fields.

### Example


```python
import openapi_client
from openapi_client.models.custom_field_select_option import CustomFieldSelectOption
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
    api_instance = openapi_client.CustomFieldSelectOptionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the CustomField

    try:
        # Retrieve all Store's Custom Fields.
        api_response = api_instance.custom_fields_id_select_options_json_get(login, authtoken, id)
        print("The response of CustomFieldSelectOptionsApi->custom_fields_id_select_options_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldSelectOptionsApi->custom_fields_id_select_options_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the CustomField | 

### Return type

[**List[CustomFieldSelectOption]**](CustomFieldSelectOption.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Custom Fields Select Options |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_fields_id_select_options_json_post**
> CustomFieldSelectOption custom_fields_id_select_options_json_post(login, authtoken, id, custom_field_select_option_edit)

Create a new Custom Field Select Option.

### Example


```python
import openapi_client
from openapi_client.models.custom_field_select_option import CustomFieldSelectOption
from openapi_client.models.custom_field_select_option_edit import CustomFieldSelectOptionEdit
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
    api_instance = openapi_client.CustomFieldSelectOptionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 'id_example' # str | Automatically added
    custom_field_select_option_edit = openapi_client.CustomFieldSelectOptionEdit() # CustomFieldSelectOptionEdit | Custom Field Select Option parameters.

    try:
        # Create a new Custom Field Select Option.
        api_response = api_instance.custom_fields_id_select_options_json_post(login, authtoken, id, custom_field_select_option_edit)
        print("The response of CustomFieldSelectOptionsApi->custom_fields_id_select_options_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldSelectOptionsApi->custom_fields_id_select_options_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **str**| Automatically added | 
 **custom_field_select_option_edit** | [**CustomFieldSelectOptionEdit**](CustomFieldSelectOptionEdit.md)| Custom Field Select Option parameters. | 

### Return type

[**CustomFieldSelectOption**](CustomFieldSelectOption.md)

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

