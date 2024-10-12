# openapi_client.DefaultApi

All URIs are relative to *https://api.ean-search.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**barcode_image**](DefaultApi.md#barcode_image) | **GET** /barcode-image | Generate a PNG barcode image
[**barcode_lookup**](DefaultApi.md#barcode_lookup) | **GET** /barcode-lookup | Look up an EAN
[**barcode_prefix_search**](DefaultApi.md#barcode_prefix_search) | **GET** /barcode-prefix-search | Query the database for all barcodes with the same beginning
[**category_search**](DefaultApi.md#category_search) | **GET** /category-search | Search for products form a certain category
[**issuing_country**](DefaultApi.md#issuing_country) | **GET** /issuing-country | Search for a issuing country of a barcode
[**product_search**](DefaultApi.md#product_search) | **GET** /product-search | Search by product name
[**verify_checksum**](DefaultApi.md#verify_checksum) | **GET** /verify-checksum | Verify the checksum of an EAN code


# **barcode_image**
> List[Barcode] barcode_image(op, ean, width=width, height=height, format=format)

Generate a PNG barcode image

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.barcode import Barcode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ean-search.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ean-search.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    op = 'op_example' # str | API operation
    ean = 56 # int | EAN code to search for
    width = 102 # int |  (optional) (default to 102)
    height = 50 # int |  (optional) (default to 50)
    format = 'format_example' # str | output format (optional)

    try:
        # Generate a PNG barcode image
        api_response = api_instance.barcode_image(op, ean, width=width, height=height, format=format)
        print("The response of DefaultApi->barcode_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->barcode_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **op** | **str**| API operation | 
 **ean** | **int**| EAN code to search for | 
 **width** | **int**|  | [optional] [default to 102]
 **height** | **int**|  | [optional] [default to 50]
 **format** | **str**| output format | [optional] 

### Return type

[**List[Barcode]**](Barcode.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid operation requested |  -  |
**401** | Invalid access token |  -  |
**402** | Request limit reached |  -  |
**405** | Must use HTTP GET to access the API |  -  |
**429** | Too many requests (eg. rate limit exeeded) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **barcode_lookup**
> List[Product] barcode_lookup(op, ean, language=language, format=format)

Look up an EAN

Search by EAN code

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.product import Product
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ean-search.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ean-search.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    op = 'op_example' # str | API operation
    ean = 56 # int | EAN code to search for
    language = 1 # int | preferred language for the product name (optional) (default to 1)
    format = 'format_example' # str | output format (optional)

    try:
        # Look up an EAN
        api_response = api_instance.barcode_lookup(op, ean, language=language, format=format)
        print("The response of DefaultApi->barcode_lookup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->barcode_lookup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **op** | **str**| API operation | 
 **ean** | **int**| EAN code to search for | 
 **language** | **int**| preferred language for the product name | [optional] [default to 1]
 **format** | **str**| output format | [optional] 

### Return type

[**List[Product]**](Product.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid operation requested |  -  |
**401** | Invalid access token |  -  |
**402** | Request limit reached |  -  |
**405** | Must use HTTP GET to access the API |  -  |
**429** | Too many requests (eg. rate limit exeeded) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **barcode_prefix_search**
> List[Product] barcode_prefix_search(op, prefix, language=language, page=page, format=format)

Query the database for all barcodes with the same beginning

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.product import Product
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ean-search.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ean-search.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    op = 'op_example' # str | API operation
    prefix = 'prefix_example' # str | barcode prefix to search for, at least 4 digits
    language = 1 # int | preferred language for the product name (optional) (default to 1)
    page = 0 # int | result page (optional) (default to 0)
    format = 'format_example' # str | output format (optional)

    try:
        # Query the database for all barcodes with the same beginning
        api_response = api_instance.barcode_prefix_search(op, prefix, language=language, page=page, format=format)
        print("The response of DefaultApi->barcode_prefix_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->barcode_prefix_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **op** | **str**| API operation | 
 **prefix** | **str**| barcode prefix to search for, at least 4 digits | 
 **language** | **int**| preferred language for the product name | [optional] [default to 1]
 **page** | **int**| result page | [optional] [default to 0]
 **format** | **str**| output format | [optional] 

### Return type

[**List[Product]**](Product.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid operation requested |  -  |
**401** | Invalid access token |  -  |
**402** | Request limit reached |  -  |
**405** | Must use HTTP GET to access the API |  -  |
**429** | Too many requests (eg. rate limit exeeded) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **category_search**
> List[Product] category_search(op, category, name=name, language=language, page=page, format=format)

Search for products form a certain category

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.product import Product
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ean-search.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ean-search.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    op = 'op_example' # str | API operation
    category = 56 # int | category number
    name = 'name_example' # str | name or keyords to search for (optional)
    language = 99 # int | preferred language for the product name (default any language) (optional) (default to 99)
    page = 0 # int | result page (optional) (default to 0)
    format = 'format_example' # str | output format (optional)

    try:
        # Search for products form a certain category
        api_response = api_instance.category_search(op, category, name=name, language=language, page=page, format=format)
        print("The response of DefaultApi->category_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->category_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **op** | **str**| API operation | 
 **category** | **int**| category number | 
 **name** | **str**| name or keyords to search for | [optional] 
 **language** | **int**| preferred language for the product name (default any language) | [optional] [default to 99]
 **page** | **int**| result page | [optional] [default to 0]
 **format** | **str**| output format | [optional] 

### Return type

[**List[Product]**](Product.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid operation requested |  -  |
**401** | Invalid access token |  -  |
**402** | Request limit reached |  -  |
**405** | Must use HTTP GET to access the API |  -  |
**429** | Too many requests (eg. rate limit exeeded) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **issuing_country**
> List[IssuingCountry] issuing_country(op, ean, format=format)

Search for a issuing country of a barcode

Search for a issuing country of a barcode. In contrast to barcode-lookup, this will always give a result, even if we don't know the product name.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.issuing_country import IssuingCountry
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ean-search.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ean-search.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    op = 'op_example' # str | API operation
    ean = 56 # int | EAN code to search for
    format = 'format_example' # str | output format (optional)

    try:
        # Search for a issuing country of a barcode
        api_response = api_instance.issuing_country(op, ean, format=format)
        print("The response of DefaultApi->issuing_country:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->issuing_country: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **op** | **str**| API operation | 
 **ean** | **int**| EAN code to search for | 
 **format** | **str**| output format | [optional] 

### Return type

[**List[IssuingCountry]**](IssuingCountry.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid operation requested |  -  |
**401** | Invalid access token |  -  |
**402** | Request limit reached |  -  |
**405** | Must use HTTP GET to access the API |  -  |
**429** | Too many requests (eg. rate limit exeeded) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_search**
> List[Product] product_search(op, name, language=language, page=page, format=format)

Search by product name

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.product import Product
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ean-search.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ean-search.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    op = 'op_example' # str | API operation
    name = 'name_example' # str | name or keyords to search for
    language = 99 # int | preferred language for the product name (default any language) (optional) (default to 99)
    page = 0 # int | result page (optional) (default to 0)
    format = 'format_example' # str | output format (optional)

    try:
        # Search by product name
        api_response = api_instance.product_search(op, name, language=language, page=page, format=format)
        print("The response of DefaultApi->product_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->product_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **op** | **str**| API operation | 
 **name** | **str**| name or keyords to search for | 
 **language** | **int**| preferred language for the product name (default any language) | [optional] [default to 99]
 **page** | **int**| result page | [optional] [default to 0]
 **format** | **str**| output format | [optional] 

### Return type

[**List[Product]**](Product.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid operation requested |  -  |
**401** | Invalid access token |  -  |
**402** | Request limit reached |  -  |
**405** | Must use HTTP GET to access the API |  -  |
**429** | Too many requests (eg. rate limit exeeded) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify_checksum**
> List[VerifyChecksum] verify_checksum(op, ean, format=format)

Verify the checksum of an EAN code

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.verify_checksum import VerifyChecksum
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ean-search.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ean-search.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    op = 'op_example' # str | API operation
    ean = 56 # int | EAN code to search for
    format = 'format_example' # str | output format (optional)

    try:
        # Verify the checksum of an EAN code
        api_response = api_instance.verify_checksum(op, ean, format=format)
        print("The response of DefaultApi->verify_checksum:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->verify_checksum: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **op** | **str**| API operation | 
 **ean** | **int**| EAN code to search for | 
 **format** | **str**| output format | [optional] 

### Return type

[**List[VerifyChecksum]**](VerifyChecksum.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid operation requested |  -  |
**401** | Invalid access token |  -  |
**402** | Request limit reached |  -  |
**405** | Must use HTTP GET to access the API |  -  |
**429** | Too many requests (eg. rate limit exeeded) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

