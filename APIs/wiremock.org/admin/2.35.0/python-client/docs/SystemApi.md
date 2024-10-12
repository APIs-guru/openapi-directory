# openapi_client.SystemApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_reset_post**](SystemApi.md#admin_reset_post) | **POST** /__admin/reset | Reset mappings and request journal
[**admin_settings_post**](SystemApi.md#admin_settings_post) | **POST** /__admin/settings | Update global settings
[**admin_shutdown_post**](SystemApi.md#admin_shutdown_post) | **POST** /__admin/shutdown | 


# **admin_reset_post**
> admin_reset_post()

Reset mappings and request journal

Reset mappings to the default state and reset the request journal

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
    api_instance = openapi_client.SystemApi(api_client)

    try:
        # Reset mappings and request journal
        api_instance.admin_reset_post()
    except Exception as e:
        print("Exception when calling SystemApi->admin_reset_post: %s\n" % e)
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
**200** | Successfully reset |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_settings_post**
> admin_settings_post(admin_settings_post_request)

Update global settings

### Example


```python
import openapi_client
from openapi_client.models.admin_settings_post_request import AdminSettingsPostRequest
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
    api_instance = openapi_client.SystemApi(api_client)
    admin_settings_post_request = openapi_client.AdminSettingsPostRequest() # AdminSettingsPostRequest | 

    try:
        # Update global settings
        api_instance.admin_settings_post(admin_settings_post_request)
    except Exception as e:
        print("Exception when calling SystemApi->admin_settings_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_settings_post_request** | [**AdminSettingsPostRequest**](AdminSettingsPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Settings successfully updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_shutdown_post**
> admin_shutdown_post()



Shutdown the WireMock server

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
    api_instance = openapi_client.SystemApi(api_client)

    try:
        api_instance.admin_shutdown_post()
    except Exception as e:
        print("Exception when calling SystemApi->admin_shutdown_post: %s\n" % e)
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
**200** | Server will be shut down |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

