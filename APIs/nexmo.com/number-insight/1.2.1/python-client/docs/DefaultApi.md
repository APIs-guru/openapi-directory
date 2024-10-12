# openapi_client.DefaultApi

All URIs are relative to *https://api.nexmo.com/ni*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_number_insight_advanced**](DefaultApi.md#get_number_insight_advanced) | **GET** /advanced/{format} | Advanced Number Insight (sync)
[**get_number_insight_async**](DefaultApi.md#get_number_insight_async) | **GET** /advanced/async/{format} | Advanced Number Insight (async)
[**get_number_insight_basic**](DefaultApi.md#get_number_insight_basic) | **GET** /basic/{format} | Basic Number Insight
[**get_number_insight_standard**](DefaultApi.md#get_number_insight_standard) | **GET** /standard/{format} | Standard Number Insight


# **get_number_insight_advanced**
> GetNumberInsightAdvanced200Response get_number_insight_advanced(format, number, real_time_data=real_time_data, country=country, cnam=cnam, ip=ip)

Advanced Number Insight (sync)

Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number synchronously, in the same way that the basic and standard endpoints do.  Vonage recommends accessing the Advanced API **asynchronously** using the `/advanced/async` endpoint, to avoid timeouts.  Note that this endpoint also supports `POST` requests. 

### Example

* Api Key Authentication (apiKey):
* Api Key Authentication (apiSecret):

```python
import openapi_client
from openapi_client.models.get_number_insight_advanced200_response import GetNumberInsightAdvanced200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/ni
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/ni"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure API key authorization: apiSecret
configuration.api_key['apiSecret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiSecret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    format = 'json' # str | The format of the response
    number = '447700900000' # str | A single phone number that you need insight about in national or international format.
    real_time_data = true # bool | A boolean to choose whether to get real time data back in the response. (optional)
    country = 'GB' # str | If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number. (optional)
    cnam = False # bool | Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge. (optional) (default to False)
    ip = '123.0.0.255' # str | This parameter is deprecated as we are no longer able to retrieve reliable IP data globally from carriers.  (optional)

    try:
        # Advanced Number Insight (sync)
        api_response = api_instance.get_number_insight_advanced(format, number, real_time_data=real_time_data, country=country, cnam=cnam, ip=ip)
        print("The response of DefaultApi->get_number_insight_advanced:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_number_insight_advanced: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| The format of the response | 
 **number** | **str**| A single phone number that you need insight about in national or international format. | 
 **real_time_data** | **bool**| A boolean to choose whether to get real time data back in the response. | [optional] 
 **country** | **str**| If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number. | [optional] 
 **cnam** | **bool**| Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge. | [optional] [default to False]
 **ip** | **str**| This parameter is deprecated as we are no longer able to retrieve reliable IP data globally from carriers.  | [optional] 

### Return type

[**GetNumberInsightAdvanced200Response**](GetNumberInsightAdvanced200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [apiSecret](../README.md#apiSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_number_insight_async**
> GetNumberInsightAsync200Response get_number_insight_async(format, param_callback, number, country=country, cnam=cnam, ip=ip)

Advanced Number Insight (async)

Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) number information **asynchronously** using the URL specified in the `callback` parameter.  recommends asynchronous use of the Number Insight Advanced API, to avoid timeouts.  Note that this endpoint also supports `POST` requests. 

### Example

* Api Key Authentication (apiKey):
* Api Key Authentication (apiSecret):

```python
import openapi_client
from openapi_client.models.get_number_insight_async200_response import GetNumberInsightAsync200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/ni
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/ni"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure API key authorization: apiSecret
configuration.api_key['apiSecret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiSecret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    format = 'json' # str | The format of the response
    param_callback = 'https://example.com/callback' # str | The callback URL
    number = '447700900000' # str | A single phone number that you need insight about in national or international format.
    country = 'GB' # str | If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number. (optional)
    cnam = False # bool | Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge. (optional) (default to False)
    ip = '123.0.0.255' # str | This parameter is deprecated as we are no longer able to retrieve reliable IP data globally from carriers.  (optional)

    try:
        # Advanced Number Insight (async)
        api_response = api_instance.get_number_insight_async(format, param_callback, number, country=country, cnam=cnam, ip=ip)
        print("The response of DefaultApi->get_number_insight_async:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_number_insight_async: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| The format of the response | 
 **param_callback** | **str**| The callback URL | 
 **number** | **str**| A single phone number that you need insight about in national or international format. | 
 **country** | **str**| If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number. | [optional] 
 **cnam** | **bool**| Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge. | [optional] [default to False]
 **ip** | **str**| This parameter is deprecated as we are no longer able to retrieve reliable IP data globally from carriers.  | [optional] 

### Return type

[**GetNumberInsightAsync200Response**](GetNumberInsightAsync200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [apiSecret](../README.md#apiSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_number_insight_basic**
> NiResponseJsonBasic get_number_insight_basic(format, number, country=country)

Basic Number Insight

Provides [basic number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.  Note that this endpoint also supports `POST` requests. 

### Example

* Api Key Authentication (apiKey):
* Api Key Authentication (apiSecret):

```python
import openapi_client
from openapi_client.models.ni_response_json_basic import NiResponseJsonBasic
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/ni
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/ni"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure API key authorization: apiSecret
configuration.api_key['apiSecret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiSecret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    format = 'json' # str | The format of the response
    number = '447700900000' # str | A single phone number that you need insight about in national or international format.
    country = 'GB' # str | If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number. (optional)

    try:
        # Basic Number Insight
        api_response = api_instance.get_number_insight_basic(format, number, country=country)
        print("The response of DefaultApi->get_number_insight_basic:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_number_insight_basic: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| The format of the response | 
 **number** | **str**| A single phone number that you need insight about in national or international format. | 
 **country** | **str**| If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number. | [optional] 

### Return type

[**NiResponseJsonBasic**](NiResponseJsonBasic.md)

### Authorization

[apiKey](../README.md#apiKey), [apiSecret](../README.md#apiSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_number_insight_standard**
> GetNumberInsightStandard200Response get_number_insight_standard(format, number, country=country, cnam=cnam)

Standard Number Insight

Provides [standard number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.  Note that this endpoint also supports `POST` requests. 

### Example

* Api Key Authentication (apiKey):
* Api Key Authentication (apiSecret):

```python
import openapi_client
from openapi_client.models.get_number_insight_standard200_response import GetNumberInsightStandard200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/ni
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/ni"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure API key authorization: apiSecret
configuration.api_key['apiSecret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiSecret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    format = 'json' # str | The format of the response
    number = '447700900000' # str | A single phone number that you need insight about in national or international format.
    country = 'GB' # str | If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number. (optional)
    cnam = False # bool | Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge. (optional) (default to False)

    try:
        # Standard Number Insight
        api_response = api_instance.get_number_insight_standard(format, number, country=country, cnam=cnam)
        print("The response of DefaultApi->get_number_insight_standard:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_number_insight_standard: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| The format of the response | 
 **number** | **str**| A single phone number that you need insight about in national or international format. | 
 **country** | **str**| If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number. | [optional] 
 **cnam** | **bool**| Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge. | [optional] [default to False]

### Return type

[**GetNumberInsightStandard200Response**](GetNumberInsightStandard200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [apiSecret](../README.md#apiSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

