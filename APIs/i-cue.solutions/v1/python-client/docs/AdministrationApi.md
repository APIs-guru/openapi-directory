# openapi_client.AdministrationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**administration_entity_get**](AdministrationApi.md#administration_entity_get) | **GET** /administration/entity | Get all organizations
[**administration_entity_id_delete**](AdministrationApi.md#administration_entity_id_delete) | **DELETE** /administration/entity/{id} | Delete organization
[**administration_entity_post**](AdministrationApi.md#administration_entity_post) | **POST** /administration/entity | Create organization
[**administration_entity_put**](AdministrationApi.md#administration_entity_put) | **PUT** /administration/entity | Pause organization
[**administration_file_to_json_post**](AdministrationApi.md#administration_file_to_json_post) | **POST** /administration/file-to-json | Transform data file to JSON format
[**administration_model_entity_id_get**](AdministrationApi.md#administration_model_entity_id_get) | **GET** /administration/model/{entityId} | Get Models for Organization
[**administration_model_entity_id_post**](AdministrationApi.md#administration_model_entity_id_post) | **POST** /administration/model/{entityId} | Register new forecasting model
[**administration_model_get**](AdministrationApi.md#administration_model_get) | **GET** /administration/model | Get all common Models
[**administration_model_post**](AdministrationApi.md#administration_model_post) | **POST** /administration/model | Register new forecasting model
[**administration_planning_level_entity_id_id_delete**](AdministrationApi.md#administration_planning_level_entity_id_id_delete) | **DELETE** /administration/planning-level/{entityId}/{id} | Delete planning level
[**administration_planning_level_lock_post**](AdministrationApi.md#administration_planning_level_lock_post) | **POST** /administration/planning-level/lock | Lock planning level
[**administration_token_post**](AdministrationApi.md#administration_token_post) | **POST** /administration/token | Issue a token
[**administration_user_entity_id_get**](AdministrationApi.md#administration_user_entity_id_get) | **GET** /administration/user/{entityId} | Get all users
[**administration_user_entity_id_id_delete**](AdministrationApi.md#administration_user_entity_id_id_delete) | **DELETE** /administration/user/{entityId}/{id} | Delete user
[**administration_user_lock_put**](AdministrationApi.md#administration_user_lock_put) | **PUT** /administration/user/lock | Lock user
[**administration_user_post**](AdministrationApi.md#administration_user_post) | **POST** /administration/user | Create user
[**administration_user_put**](AdministrationApi.md#administration_user_put) | **PUT** /administration/user | Update user


# **administration_entity_get**
> List[EntityResponse] administration_entity_get(token=token)

Get all organizations

This is an iCUE only endpoint or Enterprise feature.

### Example


```python
import openapi_client
from openapi_client.models.entity_response import EntityResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Get all organizations
        api_response = api_instance.administration_entity_get(token=token)
        print("The response of AdministrationApi->administration_entity_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_entity_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

### Return type

[**List[EntityResponse]**](EntityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_entity_id_delete**
> administration_entity_id_delete(id, token=token)

Delete organization

This is an iCUE only endpoint or Enterprise feature.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    id = 56 # int | 
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Delete organization
        api_instance.administration_entity_id_delete(id, token=token)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_entity_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **token** | **str**| User Authentication Token | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_entity_post**
> str administration_entity_post(token=token, new_entity_request=new_entity_request)

Create organization

This is an iCUE only endpoint or Enterprise feature.

### Example


```python
import openapi_client
from openapi_client.models.new_entity_request import NewEntityRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    new_entity_request = openapi_client.NewEntityRequest() # NewEntityRequest |  (optional)

    try:
        # Create organization
        api_response = api_instance.administration_entity_post(token=token, new_entity_request=new_entity_request)
        print("The response of AdministrationApi->administration_entity_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_entity_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **new_entity_request** | [**NewEntityRequest**](NewEntityRequest.md)|  | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_entity_put**
> administration_entity_put(token=token, toggle_request=toggle_request)

Pause organization

This is an iCUE only endpoint or Enterprise feature.

### Example


```python
import openapi_client
from openapi_client.models.toggle_request import ToggleRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    toggle_request = openapi_client.ToggleRequest() # ToggleRequest |  (optional)

    try:
        # Pause organization
        api_instance.administration_entity_put(token=token, toggle_request=toggle_request)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_entity_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **toggle_request** | [**ToggleRequest**](ToggleRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_file_to_json_post**
> JsonForecastResponse administration_file_to_json_post(file, periodicity, token=token)

Transform data file to JSON format

Transform data file to JSON format

### Example


```python
import openapi_client
from openapi_client.models.json_forecast_response import JsonForecastResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    file = None # bytearray | 
    periodicity = 56 # int | 
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Transform data file to JSON format
        api_response = api_instance.administration_file_to_json_post(file, periodicity, token=token)
        print("The response of AdministrationApi->administration_file_to_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_file_to_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytearray**|  | 
 **periodicity** | **int**|  | 
 **token** | **str**| User Authentication Token | [optional] 

### Return type

[**JsonForecastResponse**](JsonForecastResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_model_entity_id_get**
> List[MethodDto] administration_model_entity_id_get(entity_id, token=token)

Get Models for Organization

Returns models registered for Organization

### Example


```python
import openapi_client
from openapi_client.models.method_dto import MethodDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    entity_id = 56 # int | 
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Get Models for Organization
        api_response = api_instance.administration_model_entity_id_get(entity_id, token=token)
        print("The response of AdministrationApi->administration_model_entity_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_model_entity_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_id** | **int**|  | 
 **token** | **str**| User Authentication Token | [optional] 

### Return type

[**List[MethodDto]**](MethodDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_model_entity_id_post**
> MethodDto administration_model_entity_id_post(entity_id, token=token, new_model_request=new_model_request)

Register new forecasting model

Register new forecasting model for single organziation

### Example


```python
import openapi_client
from openapi_client.models.method_dto import MethodDto
from openapi_client.models.new_model_request import NewModelRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    entity_id = 56 # int | 
    token = 'token_example' # str | User Authentication Token (optional)
    new_model_request = openapi_client.NewModelRequest() # NewModelRequest |  (optional)

    try:
        # Register new forecasting model
        api_response = api_instance.administration_model_entity_id_post(entity_id, token=token, new_model_request=new_model_request)
        print("The response of AdministrationApi->administration_model_entity_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_model_entity_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_id** | **int**|  | 
 **token** | **str**| User Authentication Token | [optional] 
 **new_model_request** | [**NewModelRequest**](NewModelRequest.md)|  | [optional] 

### Return type

[**MethodDto**](MethodDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_model_get**
> List[MethodDto] administration_model_get(token=token)

Get all common Models

Returns models that are common for all Organizations

### Example


```python
import openapi_client
from openapi_client.models.method_dto import MethodDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Get all common Models
        api_response = api_instance.administration_model_get(token=token)
        print("The response of AdministrationApi->administration_model_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_model_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

### Return type

[**List[MethodDto]**](MethodDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_model_post**
> MethodDto administration_model_post(token=token, new_model_request=new_model_request)

Register new forecasting model

Register new forecasting model for all organziations

### Example


```python
import openapi_client
from openapi_client.models.method_dto import MethodDto
from openapi_client.models.new_model_request import NewModelRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    new_model_request = openapi_client.NewModelRequest() # NewModelRequest |  (optional)

    try:
        # Register new forecasting model
        api_response = api_instance.administration_model_post(token=token, new_model_request=new_model_request)
        print("The response of AdministrationApi->administration_model_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_model_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **new_model_request** | [**NewModelRequest**](NewModelRequest.md)|  | [optional] 

### Return type

[**MethodDto**](MethodDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_planning_level_entity_id_id_delete**
> administration_planning_level_entity_id_id_delete(entity_id, id, token=token)

Delete planning level

Delete planning level. This is an Enterprise feature.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    entity_id = 56 # int | 
    id = 56 # int | 
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Delete planning level
        api_instance.administration_planning_level_entity_id_id_delete(entity_id, id, token=token)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_planning_level_entity_id_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_id** | **int**|  | 
 **id** | **int**|  | 
 **token** | **str**| User Authentication Token | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_planning_level_lock_post**
> administration_planning_level_lock_post(token=token)

Lock planning level

Lock planning level against modification. This is an Enterprise feature.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Lock planning level
        api_instance.administration_planning_level_lock_post(token=token)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_planning_level_lock_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_token_post**
> str administration_token_post(token=token, new_token_request=new_token_request)

Issue a token

This is an iCUE only endpoint.

### Example


```python
import openapi_client
from openapi_client.models.new_token_request import NewTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    new_token_request = openapi_client.NewTokenRequest() # NewTokenRequest |  (optional)

    try:
        # Issue a token
        api_response = api_instance.administration_token_post(token=token, new_token_request=new_token_request)
        print("The response of AdministrationApi->administration_token_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_token_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **new_token_request** | [**NewTokenRequest**](NewTokenRequest.md)|  | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_user_entity_id_get**
> administration_user_entity_id_get(entity_id, token=token)

Get all users

Get all users

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    entity_id = 56 # int | 
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Get all users
        api_instance.administration_user_entity_id_get(entity_id, token=token)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_user_entity_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_id** | **int**|  | 
 **token** | **str**| User Authentication Token | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_user_entity_id_id_delete**
> administration_user_entity_id_id_delete(entity_id, id, token=token)

Delete user

Delete user

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    entity_id = 56 # int | 
    id = 56 # int | 
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Delete user
        api_instance.administration_user_entity_id_id_delete(entity_id, id, token=token)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_user_entity_id_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_id** | **int**|  | 
 **id** | **int**|  | 
 **token** | **str**| User Authentication Token | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_user_lock_put**
> administration_user_lock_put(token=token, toggle_user_request=toggle_user_request)

Lock user

After lock user won't be able to use iCUE API endpoints.

### Example


```python
import openapi_client
from openapi_client.models.toggle_user_request import ToggleUserRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    toggle_user_request = openapi_client.ToggleUserRequest() # ToggleUserRequest |  (optional)

    try:
        # Lock user
        api_instance.administration_user_lock_put(token=token, toggle_user_request=toggle_user_request)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_user_lock_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **toggle_user_request** | [**ToggleUserRequest**](ToggleUserRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_user_post**
> str administration_user_post(token=token, new_user_request=new_user_request)

Create user

Create new user for entity/organization. This can be done by entity administrator.

### Example


```python
import openapi_client
from openapi_client.models.new_user_request import NewUserRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    new_user_request = openapi_client.NewUserRequest() # NewUserRequest |  (optional)

    try:
        # Create user
        api_response = api_instance.administration_user_post(token=token, new_user_request=new_user_request)
        print("The response of AdministrationApi->administration_user_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_user_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **new_user_request** | [**NewUserRequest**](NewUserRequest.md)|  | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **administration_user_put**
> administration_user_put(token=token)

Update user

Update user

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdministrationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Update user
        api_instance.administration_user_put(token=token)
    except Exception as e:
        print("Exception when calling AdministrationApi->administration_user_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

