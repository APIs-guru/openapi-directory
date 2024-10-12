# openapi_client.SubUserApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sub_user_delete**](SubUserApi.md#sub_user_delete) | **DELETE** /api/SubUser/{id} | Delete a subuser
[**sub_user_get**](SubUserApi.md#sub_user_get) | **GET** /api/SubUser/{id} | Get a sub user. The user must be assigend to the user that makes this call.
[**sub_user_post**](SubUserApi.md#sub_user_post) | **POST** /api/SubUser | Creates or updates a subuser.              To create a new user set no ID (empty)


# **sub_user_delete**
> sub_user_delete(id)

Delete a subuser

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SubUserApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete a subuser
        api_instance.sub_user_delete(id)
    except Exception as e:
        print("Exception when calling SubUserApi->sub_user_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sub_user_get**
> SubUserData sub_user_get(id)

Get a sub user. The user must be assigend to the user that makes this call.

### Example


```python
import openapi_client
from openapi_client.models.sub_user_data import SubUserData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SubUserApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get a sub user. The user must be assigend to the user that makes this call.
        api_response = api_instance.sub_user_get(id)
        print("The response of SubUserApi->sub_user_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubUserApi->sub_user_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**SubUserData**](SubUserData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sub_user_post**
> sub_user_post(sub_user_data)

Creates or updates a subuser.              To create a new user set no ID (empty)

### Example


```python
import openapi_client
from openapi_client.models.sub_user_data import SubUserData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SubUserApi(api_client)
    sub_user_data = openapi_client.SubUserData() # SubUserData | 

    try:
        # Creates or updates a subuser.              To create a new user set no ID (empty)
        api_instance.sub_user_post(sub_user_data)
    except Exception as e:
        print("Exception when calling SubUserApi->sub_user_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sub_user_data** | [**SubUserData**](SubUserData.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

