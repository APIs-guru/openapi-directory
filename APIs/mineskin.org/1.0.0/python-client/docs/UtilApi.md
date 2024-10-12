# openapi_client.UtilApi

All URIs are relative to *https://api.mineskin.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validate_name_name_get**](UtilApi.md#validate_name_name_get) | **GET** /validate/name/{name} | 
[**validate_uuid_uuid_get**](UtilApi.md#validate_uuid_uuid_get) | **GET** /validate/uuid/{uuid} | 


# **validate_name_name_get**
> UserValidation validate_name_name_get(name, user_agent)



### Example


```python
import openapi_client
from openapi_client.models.user_validation import UserValidation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mineskin.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mineskin.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UtilApi(api_client)
    name = 'name_example' # str | 
    user_agent = 'ExampleApp/v1.0' # str | Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples

    try:
        api_response = api_instance.validate_name_name_get(name, user_agent)
        print("The response of UtilApi->validate_name_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UtilApi->validate_name_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **user_agent** | **str**| Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples | 

### Return type

[**UserValidation**](UserValidation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Validation info about the requested user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_uuid_uuid_get**
> UserValidation validate_uuid_uuid_get(uuid, user_agent)



### Example


```python
import openapi_client
from openapi_client.models.user_validation import UserValidation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mineskin.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mineskin.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UtilApi(api_client)
    uuid = 'uuid_example' # str | 
    user_agent = 'ExampleApp/v1.0' # str | Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples

    try:
        api_response = api_instance.validate_uuid_uuid_get(uuid, user_agent)
        print("The response of UtilApi->validate_uuid_uuid_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UtilApi->validate_uuid_uuid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**|  | 
 **user_agent** | **str**| Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples | 

### Return type

[**UserValidation**](UserValidation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Validation info about the requested user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

