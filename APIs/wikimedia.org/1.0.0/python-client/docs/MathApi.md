# openapi_client.MathApi

All URIs are relative to *https://wikimedia.org/api/rest_v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**media_math_check_type_post**](MathApi.md#media_math_check_type_post) | **POST** /media/math/check/{type} | Check and normalize a TeX formula.
[**media_math_formula_hash_get**](MathApi.md#media_math_formula_hash_get) | **GET** /media/math/formula/{hash} | Get a previously-stored formula
[**media_math_render_format_hash_get**](MathApi.md#media_math_render_format_hash_get) | **GET** /media/math/render/{format}/{hash} | Get rendered formula in the given format.


# **media_math_check_type_post**
> media_math_check_type_post(type, q)

Check and normalize a TeX formula.

Checks the supplied TeX formula for correctness and returns the normalised formula representation as well as information about identifiers. Available types are tex and inline-tex. The response contains the `x-resource-location` header which can be used to retrieve the render of the checked formula in one of the supported rendering formats. Just append the value of the header to `/media/math/{format}/` and perform a GET request against that URL.  Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable). 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MathApi(api_client)
    type = 'type_example' # str | The input type of the given formula; can be tex or inline-tex
    q = 'q_example' # str | The formula to check

    try:
        # Check and normalize a TeX formula.
        api_instance.media_math_check_type_post(type, q)
    except Exception as e:
        print("Exception when calling MathApi->media_math_check_type_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| The input type of the given formula; can be tex or inline-tex | 
 **q** | **str**| The formula to check | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the checked formula |  -  |
**400** | Invalid type |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_math_formula_hash_get**
> media_math_formula_hash_get(hash)

Get a previously-stored formula

Returns the previously-stored formula via `/media/math/check/{type}` for the given hash.  Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable). 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MathApi(api_client)
    hash = 'hash_example' # str | The hash string of the previous POST data

    try:
        # Get a previously-stored formula
        api_instance.media_math_formula_hash_get(hash)
    except Exception as e:
        print("Exception when calling MathApi->media_math_formula_hash_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **str**| The hash string of the previous POST data | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the checked formula |  -  |
**404** | Data for the given hash cannot be found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **media_math_render_format_hash_get**
> media_math_render_format_hash_get(format, hash)

Get rendered formula in the given format.

Given a request hash, renders a TeX formula into its mathematic representation in the given format. When a request is issued to the `/media/math/check/{format}` POST endpoint, the response contains the `x-resource-location` header denoting the hash ID of the POST data. Once obtained, this endpoint has to be used to obtain the actual render.  Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable). 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MathApi(api_client)
    format = 'format_example' # str | The output format; can be svg or mml
    hash = 'hash_example' # str | The hash string of the previous POST data

    try:
        # Get rendered formula in the given format.
        api_instance.media_math_render_format_hash_get(format, hash)
    except Exception as e:
        print("Exception when calling MathApi->media_math_render_format_hash_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| The output format; can be svg or mml | 
 **hash** | **str**| The hash string of the previous POST data | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/svg+xml, application/mathml+xml, image/png, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The rendered formula |  -  |
**404** | Unknown format or hash ID |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

