# openapi_client.PhoneApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_phone_countries_get**](PhoneApi.md#api_phone_countries_get) | **GET** /api/Phone/Countries | Get available countries
[**api_phone_generate_get**](PhoneApi.md#api_phone_generate_get) | **GET** /api/Phone/Generate | Get bulk telephone numbers for a country
[**api_phone_imei_get**](PhoneApi.md#api_phone_imei_get) | **GET** /api/Phone/IMEI | Get bulk imeis
[**api_phone_validate_get**](PhoneApi.md#api_phone_validate_get) | **GET** /api/Phone/Validate | Validate a phone number


# **api_phone_countries_get**
> api_phone_countries_get(x_api_key=x_api_key)

Get available countries

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
    api_instance = openapi_client.PhoneApi(api_client)
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get available countries
        api_instance.api_phone_countries_get(x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling PhoneApi->api_phone_countries_get: %s\n" % e)
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

# **api_phone_generate_get**
> api_phone_generate_get(country_code, quantity, x_api_key=x_api_key)

Get bulk telephone numbers for a country

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
    api_instance = openapi_client.PhoneApi(api_client)
    country_code = 'country_code_example' # str | 
    quantity = 56 # int | 
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get bulk telephone numbers for a country
        api_instance.api_phone_generate_get(country_code, quantity, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling PhoneApi->api_phone_generate_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_code** | **str**|  | 
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

# **api_phone_imei_get**
> api_phone_imei_get(quantity, x_api_key=x_api_key)

Get bulk imeis

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
    api_instance = openapi_client.PhoneApi(api_client)
    quantity = 56 # int | 
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get bulk imeis
        api_instance.api_phone_imei_get(quantity, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling PhoneApi->api_phone_imei_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **api_phone_validate_get**
> api_phone_validate_get(telephone, country_code=country_code, x_api_key=x_api_key)

Validate a phone number

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
    api_instance = openapi_client.PhoneApi(api_client)
    telephone = 'telephone_example' # str | 
    country_code = 'country_code_example' # str |  (optional)
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Validate a phone number
        api_instance.api_phone_validate_get(telephone, country_code=country_code, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling PhoneApi->api_phone_validate_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telephone** | **str**|  | 
 **country_code** | **str**|  | [optional] 
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

