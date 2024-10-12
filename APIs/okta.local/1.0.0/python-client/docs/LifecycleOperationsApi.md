# openapi_client.LifecycleOperationsApi

All URIs are relative to *http://okta.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate_user**](LifecycleOperationsApi.md#activate_user) | **POST** /api/v1/users/{userId}/lifecycle/activate | Activate User
[**deactivate_user**](LifecycleOperationsApi.md#deactivate_user) | **POST** /api/v1/users/{userId}/lifecycle/deactivate | Deactivate User
[**reset_password**](LifecycleOperationsApi.md#reset_password) | **POST** /api/v1/users/{userId}/lifecycle/reset_password | Reset Password
[**set_temp_password**](LifecycleOperationsApi.md#set_temp_password) | **POST** /api/v1/users/{userId}/lifecycle/expire_password | Set Temp Password
[**suspend_user**](LifecycleOperationsApi.md#suspend_user) | **POST** /api/v1/users/{userId}/lifecycle/suspend | Suspend User
[**unlock_user**](LifecycleOperationsApi.md#unlock_user) | **POST** /api/v1/users/{userId}/lifecycle/unlock | Unlock User
[**unsuspend_user**](LifecycleOperationsApi.md#unsuspend_user) | **POST** /api/v1/users/{userId}/lifecycle/unsuspend | Unsuspend User


# **activate_user**
> activate_user(user_id, send_email=send_email)

Activate User

Activate User

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://okta.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://okta.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LifecycleOperationsApi(api_client)
    user_id = 'user_id_example' # str | 
    send_email = 'false' # str |  (optional)

    try:
        # Activate User
        api_instance.activate_user(user_id, send_email=send_email)
    except Exception as e:
        print("Exception when calling LifecycleOperationsApi->activate_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **send_email** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivate_user**
> deactivate_user(user_id)

Deactivate User

Deactivate User

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://okta.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://okta.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LifecycleOperationsApi(api_client)
    user_id = 'user_id_example' # str | 

    try:
        # Deactivate User
        api_instance.deactivate_user(user_id)
    except Exception as e:
        print("Exception when calling LifecycleOperationsApi->deactivate_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reset_password**
> reset_password(user_id, send_email=send_email)

Reset Password

Reset Password

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://okta.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://okta.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LifecycleOperationsApi(api_client)
    user_id = 'user_id_example' # str | 
    send_email = 'false' # str |  (optional)

    try:
        # Reset Password
        api_instance.reset_password(user_id, send_email=send_email)
    except Exception as e:
        print("Exception when calling LifecycleOperationsApi->reset_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **send_email** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_temp_password**
> set_temp_password(user_id, temp_password=temp_password)

Set Temp Password

Set Temp Password

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://okta.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://okta.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LifecycleOperationsApi(api_client)
    user_id = 'user_id_example' # str | 
    temp_password = 'true' # str |  (optional)

    try:
        # Set Temp Password
        api_instance.set_temp_password(user_id, temp_password=temp_password)
    except Exception as e:
        print("Exception when calling LifecycleOperationsApi->set_temp_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **temp_password** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suspend_user**
> suspend_user(user_id)

Suspend User

Suspend User

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://okta.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://okta.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LifecycleOperationsApi(api_client)
    user_id = 'user_id_example' # str | 

    try:
        # Suspend User
        api_instance.suspend_user(user_id)
    except Exception as e:
        print("Exception when calling LifecycleOperationsApi->suspend_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlock_user**
> unlock_user(user_id)

Unlock User

Unlock User

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://okta.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://okta.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LifecycleOperationsApi(api_client)
    user_id = 'user_id_example' # str | 

    try:
        # Unlock User
        api_instance.unlock_user(user_id)
    except Exception as e:
        print("Exception when calling LifecycleOperationsApi->unlock_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unsuspend_user**
> unsuspend_user(user_id)

Unsuspend User

Unsuspend User

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://okta.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://okta.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LifecycleOperationsApi(api_client)
    user_id = 'user_id_example' # str | 

    try:
        # Unsuspend User
        api_instance.unsuspend_user(user_id)
    except Exception as e:
        print("Exception when calling LifecycleOperationsApi->unsuspend_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

