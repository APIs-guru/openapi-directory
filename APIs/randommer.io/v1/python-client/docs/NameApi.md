# openapi_client.NameApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_name_brand_name_post**](NameApi.md#api_name_brand_name_post) | **POST** /api/Name/BrandName | Generate brand name suggestions
[**api_name_business_name_post**](NameApi.md#api_name_business_name_post) | **POST** /api/Name/BusinessName | Get business names for a specific culture
[**api_name_cultures_get**](NameApi.md#api_name_cultures_get) | **GET** /api/Name/Cultures | Get available cultures
[**api_name_get**](NameApi.md#api_name_get) | **GET** /api/Name | Get name
[**api_name_suggestions_get**](NameApi.md#api_name_suggestions_get) | **GET** /api/Name/Suggestions | Get business name suggestions


# **api_name_brand_name_post**
> api_name_brand_name_post(starting_words, x_api_key=x_api_key)

Generate brand name suggestions

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
    api_instance = openapi_client.NameApi(api_client)
    starting_words = 'starting_words_example' # str | 
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Generate brand name suggestions
        api_instance.api_name_brand_name_post(starting_words, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling NameApi->api_name_brand_name_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **starting_words** | **str**|  | 
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

# **api_name_business_name_post**
> api_name_business_name_post(number, culture_code=culture_code, x_api_key=x_api_key)

Get business names for a specific culture

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
    api_instance = openapi_client.NameApi(api_client)
    number = 56 # int | 
    culture_code = 'en_US' # str |  (optional) (default to 'en_US')
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get business names for a specific culture
        api_instance.api_name_business_name_post(number, culture_code=culture_code, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling NameApi->api_name_business_name_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **number** | **int**|  | 
 **culture_code** | **str**|  | [optional] [default to &#39;en_US&#39;]
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

# **api_name_cultures_get**
> api_name_cultures_get(x_api_key=x_api_key)

Get available cultures

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
    api_instance = openapi_client.NameApi(api_client)
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get available cultures
        api_instance.api_name_cultures_get(x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling NameApi->api_name_cultures_get: %s\n" % e)
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

# **api_name_get**
> api_name_get(name_type, quantity, x_api_key=x_api_key)

Get name

### Example


```python
import openapi_client
from openapi_client.models.name_type import NameType
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
    api_instance = openapi_client.NameApi(api_client)
    name_type = openapi_client.NameType() # NameType | 
    quantity = 56 # int | 
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get name
        api_instance.api_name_get(name_type, quantity, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling NameApi->api_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name_type** | [**NameType**](.md)|  | 
 **quantity** | **int**|  | 
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

# **api_name_suggestions_get**
> api_name_suggestions_get(starting_words, x_api_key=x_api_key)

Get business name suggestions

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
    api_instance = openapi_client.NameApi(api_client)
    starting_words = 'starting_words_example' # str | 
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get business name suggestions
        api_instance.api_name_suggestions_get(starting_words, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling NameApi->api_name_suggestions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **starting_words** | **str**|  | 
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

