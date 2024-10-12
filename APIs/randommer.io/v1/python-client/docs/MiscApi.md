# openapi_client.MiscApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_misc_cultures_get**](MiscApi.md#api_misc_cultures_get) | **GET** /api/Misc/Cultures | 
[**api_misc_random_address_get**](MiscApi.md#api_misc_random_address_get) | **GET** /api/Misc/Random-Address | 


# **api_misc_cultures_get**
> api_misc_cultures_get(x_api_key=x_api_key)



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
    api_instance = openapi_client.MiscApi(api_client)
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        api_instance.api_misc_cultures_get(x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling MiscApi->api_misc_cultures_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api_key** | **str**| Enter your key | [optional] 

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

# **api_misc_random_address_get**
> api_misc_random_address_get(number, culture=culture, x_api_key=x_api_key)



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
    api_instance = openapi_client.MiscApi(api_client)
    number = 56 # int | 
    culture = 'en' # str |  (optional) (default to 'en')
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        api_instance.api_misc_random_address_get(number, culture=culture, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling MiscApi->api_misc_random_address_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **number** | **int**|  | 
 **culture** | **str**|  | [optional] [default to &#39;en&#39;]
 **x_api_key** | **str**| Enter your key | [optional] 

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

