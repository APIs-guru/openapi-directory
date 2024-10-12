# openapi_client.FinanceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_finance_countries_get**](FinanceApi.md#api_finance_countries_get) | **GET** /api/Finance/Countries | Get available countries
[**api_finance_crypto_address_get**](FinanceApi.md#api_finance_crypto_address_get) | **GET** /api/Finance/CryptoAddress | Get crypto address
[**api_finance_crypto_address_types_get**](FinanceApi.md#api_finance_crypto_address_types_get) | **GET** /api/Finance/CryptoAddress/Types | Get available crypto types
[**api_finance_iban_country_code_get**](FinanceApi.md#api_finance_iban_country_code_get) | **GET** /api/Finance/Iban/{countryCode} | Get IBAN by countryCode
[**api_finance_vat_validator_post**](FinanceApi.md#api_finance_vat_validator_post) | **POST** /api/Finance/Vat/Validator | 


# **api_finance_countries_get**
> api_finance_countries_get(x_api_key=x_api_key)

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
    api_instance = openapi_client.FinanceApi(api_client)
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get available countries
        api_instance.api_finance_countries_get(x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling FinanceApi->api_finance_countries_get: %s\n" % e)
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

# **api_finance_crypto_address_get**
> api_finance_crypto_address_get(crypto_type=crypto_type, x_api_key=x_api_key)

Get crypto address

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
    api_instance = openapi_client.FinanceApi(api_client)
    crypto_type = 'crypto_type_example' # str |  (optional)
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get crypto address
        api_instance.api_finance_crypto_address_get(crypto_type=crypto_type, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling FinanceApi->api_finance_crypto_address_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crypto_type** | **str**|  | [optional] 
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

# **api_finance_crypto_address_types_get**
> api_finance_crypto_address_types_get(x_api_key=x_api_key)

Get available crypto types

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
    api_instance = openapi_client.FinanceApi(api_client)
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get available crypto types
        api_instance.api_finance_crypto_address_types_get(x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling FinanceApi->api_finance_crypto_address_types_get: %s\n" % e)
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

# **api_finance_iban_country_code_get**
> api_finance_iban_country_code_get(country_code, x_api_key=x_api_key)

Get IBAN by countryCode

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
    api_instance = openapi_client.FinanceApi(api_client)
    country_code = 'country_code_example' # str | 
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get IBAN by countryCode
        api_instance.api_finance_iban_country_code_get(country_code, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling FinanceApi->api_finance_iban_country_code_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_code** | **str**|  | 
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

# **api_finance_vat_validator_post**
> api_finance_vat_validator_post(country, vat, x_api_key=x_api_key)



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
    api_instance = openapi_client.FinanceApi(api_client)
    country = 'country_example' # str | 
    vat = 'vat_example' # str | 
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        api_instance.api_finance_vat_validator_post(country, vat, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling FinanceApi->api_finance_vat_validator_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**|  | 
 **vat** | **str**|  | 
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

