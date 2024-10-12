# openapi_client.DefaultApi

All URIs are relative to *https://api.openalpr.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_config**](DefaultApi.md#get_config) | **GET** /config | 
[**recognize_bytes**](DefaultApi.md#recognize_bytes) | **POST** /recognize_bytes | 
[**recognize_file**](DefaultApi.md#recognize_file) | **POST** /recognize | 
[**recognize_url**](DefaultApi.md#recognize_url) | **POST** /recognize_url | 


# **get_config**
> GetConfig200Response get_config()



Get a list of available results for plate and vehicle recognition 

### Example


```python
import openapi_client
from openapi_client.models.get_config200_response import GetConfig200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.openalpr.com/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openalpr.com/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.get_config()
        print("The response of DefaultApi->get_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_config: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetConfig200Response**](GetConfig200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recognize_bytes**
> RecognizeFile200Response recognize_bytes(secret_key, country, image_bytes, recognize_vehicle=recognize_vehicle, return_image=return_image, topn=topn)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as base64 encoded bytes. 

### Example


```python
import openapi_client
from openapi_client.models.recognize_file200_response import RecognizeFile200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.openalpr.com/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openalpr.com/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    secret_key = 'secret_key_example' # str | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
    country = 'country_example' # str | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task 
    image_bytes = 'image_bytes_example' # str | The image file that you wish to analyze encoded in base64 
    recognize_vehicle = 0 # int | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional) (default to 0)
    return_image = 0 # int | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional) (default to 0)
    topn = 10 # int | The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional) (default to 10)

    try:
        api_response = api_instance.recognize_bytes(secret_key, country, image_bytes, recognize_vehicle=recognize_vehicle, return_image=return_image, topn=topn)
        print("The response of DefaultApi->recognize_bytes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->recognize_bytes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret_key** | **str**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **str**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  | 
 **image_bytes** | **str**| The image file that you wish to analyze encoded in base64  | 
 **recognize_vehicle** | **int**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **return_image** | **int**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **int**| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]

### Return type

[**RecognizeFile200Response**](RecognizeFile200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Ratelimit-Reset - Epoch time when the next period begins <br>  * X-Ratelimit-Remaining - Number of remaining requests allowed during this period <br>  * X-RateLimit-Limit - Maximum number of requests allowed from your IP in a period <br>  |
**400** | Parameter is invalid |  -  |
**401** | User not authorized or invalid secret_key |  -  |
**402** | Monthly usage limit exceeded |  -  |
**403** | Temporary rate-limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recognize_file**
> RecognizeFile200Response recognize_file(secret_key, country, image, recognize_vehicle=recognize_vehicle, return_image=return_image, topn=topn, is_cropped=is_cropped)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as a file using a form data POST 

### Example


```python
import openapi_client
from openapi_client.models.recognize_file200_response import RecognizeFile200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.openalpr.com/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openalpr.com/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    secret_key = 'secret_key_example' # str | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
    country = 'country_example' # str | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task 
    image = None # bytearray | The image file that you wish to analyze 
    recognize_vehicle = 0 # int | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional) (default to 0)
    return_image = 0 # int | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional) (default to 0)
    topn = 10 # int | The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional) (default to 10)
    is_cropped = 0 # int | When providing a plate or vehicle that is already cropped,   this performs a recognition against the full crop and does not  attempt to localize the plate/vehicle  (optional) (default to 0)

    try:
        api_response = api_instance.recognize_file(secret_key, country, image, recognize_vehicle=recognize_vehicle, return_image=return_image, topn=topn, is_cropped=is_cropped)
        print("The response of DefaultApi->recognize_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->recognize_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret_key** | **str**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **str**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  | 
 **image** | **bytearray**| The image file that you wish to analyze  | 
 **recognize_vehicle** | **int**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **return_image** | **int**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **int**| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]
 **is_cropped** | **int**| When providing a plate or vehicle that is already cropped,   this performs a recognition against the full crop and does not  attempt to localize the plate/vehicle  | [optional] [default to 0]

### Return type

[**RecognizeFile200Response**](RecognizeFile200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Ratelimit-Reset - Epoch time when the next period begins <br>  * X-Ratelimit-Remaining - Number of remaining requests allowed during this period <br>  * X-RateLimit-Limit - Maximum number of requests allowed from your IP in a period <br>  |
**400** | Parameter is invalid |  -  |
**401** | User not authorized or invalid secret_key |  -  |
**402** | Monthly usage limit exceeded |  -  |
**403** | Temporary rate-limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recognize_url**
> RecognizeFile200Response recognize_url(image_url, secret_key, country, recognize_vehicle=recognize_vehicle, return_image=return_image, topn=topn)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as a URL.  The OpenALPR service will download the image  and process it 

### Example


```python
import openapi_client
from openapi_client.models.recognize_file200_response import RecognizeFile200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.openalpr.com/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openalpr.com/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    image_url = 'image_url_example' # str | A URL to an image that you wish to analyze 
    secret_key = 'secret_key_example' # str | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
    country = 'country_example' # str | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task 
    recognize_vehicle = 0 # int | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional) (default to 0)
    return_image = 0 # int | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional) (default to 0)
    topn = 10 # int | The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional) (default to 10)

    try:
        api_response = api_instance.recognize_url(image_url, secret_key, country, recognize_vehicle=recognize_vehicle, return_image=return_image, topn=topn)
        print("The response of DefaultApi->recognize_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->recognize_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_url** | **str**| A URL to an image that you wish to analyze  | 
 **secret_key** | **str**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **str**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  | 
 **recognize_vehicle** | **int**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **return_image** | **int**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **int**| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]

### Return type

[**RecognizeFile200Response**](RecognizeFile200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Ratelimit-Reset - Epoch time when the next period begins <br>  * X-Ratelimit-Remaining - Number of remaining requests allowed during this period <br>  * X-RateLimit-Limit - Maximum number of requests allowed from your IP in a period <br>  |
**400** | Parameter is invalid |  -  |
**401** | User not authorized or invalid secret_key |  -  |
**402** | Monthly usage limit exceeded |  -  |
**403** | Temporary rate-limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

