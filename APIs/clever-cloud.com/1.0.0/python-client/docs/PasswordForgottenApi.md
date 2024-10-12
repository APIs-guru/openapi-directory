# openapi_client.PasswordForgottenApi

All URIs are relative to *https://api.clever-cloud.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_password_forgotten_0**](PasswordForgottenApi.md#get_password_forgotten_0) | **GET** /password_forgotten | 
[**get_password_forgotten_key_0**](PasswordForgottenApi.md#get_password_forgotten_key_0) | **GET** /password_forgotten/{key} | 
[**post_password_forgotten_0**](PasswordForgottenApi.md#post_password_forgotten_0) | **POST** /password_forgotten | 
[**post_password_forgotten_key_0**](PasswordForgottenApi.md#post_password_forgotten_key_0) | **POST** /password_forgotten/{key} | 


# **get_password_forgotten_0**
> get_password_forgotten_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PasswordForgottenApi(api_client)

    try:
        api_instance.get_password_forgotten_0()
    except Exception as e:
        print("Exception when calling PasswordForgottenApi->get_password_forgotten_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | getPasswordForgottenForm |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_password_forgotten_key_0**
> get_password_forgotten_key_0(key)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PasswordForgottenApi(api_client)
    key = 'key_example' # str | 

    try:
        api_instance.get_password_forgotten_key_0(key)
    except Exception as e:
        print("Exception when calling PasswordForgottenApi->get_password_forgotten_key_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 

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
**200** | confirmPasswordResetRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_password_forgotten_0**
> post_password_forgotten_0(login=login, drop_tokens=drop_tokens, tester_pass=tester_pass)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PasswordForgottenApi(api_client)
    login = 'login_example' # str |  (optional)
    drop_tokens = 'drop_tokens_example' # str |  (optional)
    tester_pass = 'tester_pass_example' # str |  (optional)

    try:
        api_instance.post_password_forgotten_0(login=login, drop_tokens=drop_tokens, tester_pass=tester_pass)
    except Exception as e:
        print("Exception when calling PasswordForgottenApi->post_password_forgotten_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**|  | [optional] 
 **drop_tokens** | **str**|  | [optional] 
 **tester_pass** | **str**|  | [optional] 

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
**200** | askForPasswordResetViaForm |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_password_forgotten_key_0**
> post_password_forgotten_key_0(key, var_pass=var_pass, pass2=pass2)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PasswordForgottenApi(api_client)
    key = 'key_example' # str | 
    var_pass = 'var_pass_example' # str |  (optional)
    pass2 = 'pass2_example' # str |  (optional)

    try:
        api_instance.post_password_forgotten_key_0(key, var_pass=var_pass, pass2=pass2)
    except Exception as e:
        print("Exception when calling PasswordForgottenApi->post_password_forgotten_key_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **var_pass** | **str**|  | [optional] 
 **pass2** | **str**|  | [optional] 

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
**200** | resetPasswordForgotten |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

