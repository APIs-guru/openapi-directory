# openapi_client.DefaultApi

All URIs are relative to *https://moon-phase.p.rapidapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_advanced_moon_phase_data**](DefaultApi.md#get_advanced_moon_phase_data) | **GET** /advanced | Get Advanced Moon Phase Data
[**get_basic_moon_phase_data**](DefaultApi.md#get_basic_moon_phase_data) | **GET** /basic | Get Basic Moon Phase Data
[**get_emoji_of_moon_phase**](DefaultApi.md#get_emoji_of_moon_phase) | **GET** /emoji | Get Emoji of Moon Phase
[**get_lunar_calendar**](DefaultApi.md#get_lunar_calendar) | **GET** /calendar | Get Lunar Calendar
[**get_plain_text_moon_phase_data**](DefaultApi.md#get_plain_text_moon_phase_data) | **GET** /plain-text | Get Plain Text Moon Phase Data


# **get_advanced_moon_phase_data**
> GetAdvancedMoonPhaseData200Response get_advanced_moon_phase_data(filters=filters, x_rapidapi_key=x_rapidapi_key)

Get Advanced Moon Phase Data

Get Advanced Moon Phase Data

### Example


```python
import openapi_client
from openapi_client.models.get_advanced_moon_phase_data200_response import GetAdvancedMoonPhaseData200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://moon-phase.p.rapidapi.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://moon-phase.p.rapidapi.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    filters = 'moon.phase_name,moon.stage,moon_phases.full_moon.next' # str | Filter data in the Advanced Moon API by specifying the desired fields using the `filters` parameter in the request. Include a comma-separated list of keys to retrieve customized data, allowing you to fetch specific moon phase information and related details. (optional)
    x_rapidapi_key = '{{Rapidapi-Key}}' # str |  (optional)

    try:
        # Get Advanced Moon Phase Data
        api_response = api_instance.get_advanced_moon_phase_data(filters=filters, x_rapidapi_key=x_rapidapi_key)
        print("The response of DefaultApi->get_advanced_moon_phase_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_advanced_moon_phase_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **str**| Filter data in the Advanced Moon API by specifying the desired fields using the &#x60;filters&#x60; parameter in the request. Include a comma-separated list of keys to retrieve customized data, allowing you to fetch specific moon phase information and related details. | [optional] 
 **x_rapidapi_key** | **str**|  | [optional] 

### Return type

[**GetAdvancedMoonPhaseData200Response**](GetAdvancedMoonPhaseData200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get Advanced Moon Phase Data |  * CF-Cache-Status -  <br>  * CF-RAY -  <br>  * Cache-Control -  <br>  * Connection -  <br>  * Content-Encoding -  <br>  * Date -  <br>  * NEL -  <br>  * Report-To -  <br>  * Server -  <br>  * Transfer-Encoding -  <br>  * X-RapidAPI-Region -  <br>  * X-RapidAPI-Version -  <br>  * alt-svc -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_basic_moon_phase_data**
> GetBasicMoonPhaseData200Response get_basic_moon_phase_data(x_rapidapi_key=x_rapidapi_key)

Get Basic Moon Phase Data

Get Basic Moon Phase Data

### Example


```python
import openapi_client
from openapi_client.models.get_basic_moon_phase_data200_response import GetBasicMoonPhaseData200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://moon-phase.p.rapidapi.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://moon-phase.p.rapidapi.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_rapidapi_key = '{{Rapidapi-Key}}' # str |  (optional)

    try:
        # Get Basic Moon Phase Data
        api_response = api_instance.get_basic_moon_phase_data(x_rapidapi_key=x_rapidapi_key)
        print("The response of DefaultApi->get_basic_moon_phase_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_basic_moon_phase_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_rapidapi_key** | **str**|  | [optional] 

### Return type

[**GetBasicMoonPhaseData200Response**](GetBasicMoonPhaseData200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get Basic Moon Phase Data |  * Access-Control-Allow-Origin -  <br>  * CF-Cache-Status -  <br>  * CF-RAY -  <br>  * Connection -  <br>  * Content-Encoding -  <br>  * Date -  <br>  * NEL -  <br>  * Report-To -  <br>  * Server -  <br>  * Tk -  <br>  * Transfer-Encoding -  <br>  * Vary -  <br>  * X-Cache -  <br>  * alt-svc -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_emoji_of_moon_phase**
> get_emoji_of_moon_phase(x_rapidapi_key=x_rapidapi_key)

Get Emoji of Moon Phase

Get Emoji of Moon Phase

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://moon-phase.p.rapidapi.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://moon-phase.p.rapidapi.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_rapidapi_key = '{{Rapidapi-Key}}' # str |  (optional)

    try:
        # Get Emoji of Moon Phase
        api_instance.get_emoji_of_moon_phase(x_rapidapi_key=x_rapidapi_key)
    except Exception as e:
        print("Exception when calling DefaultApi->get_emoji_of_moon_phase: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_rapidapi_key** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get Emoji of Moon Phase |  * CF-Cache-Status -  <br>  * CF-RAY -  <br>  * Cache-Control -  <br>  * Connection -  <br>  * Content-Encoding -  <br>  * Date -  <br>  * NEL -  <br>  * Report-To -  <br>  * Server -  <br>  * Transfer-Encoding -  <br>  * X-RapidAPI-Region -  <br>  * X-RapidAPI-Version -  <br>  * alt-svc -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_lunar_calendar**
> get_lunar_calendar(filters=filters, x_rapidapi_key=x_rapidapi_key)

Get Lunar Calendar

Get Lunar Calendar

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://moon-phase.p.rapidapi.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://moon-phase.p.rapidapi.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    filters = 'moon.phase_name,moon.stage,moon_phases.full_moon.next' # str | Filter data in the Advanced Moon API by specifying the desired fields using the `filters` parameter in the request. Include a comma-separated list of keys to retrieve customized data, allowing you to fetch specific moon phase information and related details. (optional)
    x_rapidapi_key = '{{Rapidapi-Key}}' # str |  (optional)

    try:
        # Get Lunar Calendar
        api_instance.get_lunar_calendar(filters=filters, x_rapidapi_key=x_rapidapi_key)
    except Exception as e:
        print("Exception when calling DefaultApi->get_lunar_calendar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **str**| Filter data in the Advanced Moon API by specifying the desired fields using the &#x60;filters&#x60; parameter in the request. Include a comma-separated list of keys to retrieve customized data, allowing you to fetch specific moon phase information and related details. | [optional] 
 **x_rapidapi_key** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get Lunar Calendar |  * CF-Cache-Status -  <br>  * CF-RAY -  <br>  * Cache-Control -  <br>  * Connection -  <br>  * Content-Encoding -  <br>  * Date -  <br>  * NEL -  <br>  * Report-To -  <br>  * Server -  <br>  * Transfer-Encoding -  <br>  * X-RapidAPI-Region -  <br>  * X-RapidAPI-Version -  <br>  * alt-svc -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_plain_text_moon_phase_data**
> get_plain_text_moon_phase_data(x_rapidapi_key=x_rapidapi_key)

Get Plain Text Moon Phase Data

Get Plain Text Moon Phase Data

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://moon-phase.p.rapidapi.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://moon-phase.p.rapidapi.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_rapidapi_key = '{{Rapidapi-Key}}' # str |  (optional)

    try:
        # Get Plain Text Moon Phase Data
        api_instance.get_plain_text_moon_phase_data(x_rapidapi_key=x_rapidapi_key)
    except Exception as e:
        print("Exception when calling DefaultApi->get_plain_text_moon_phase_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_rapidapi_key** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get Plain Text Moon Phase Data |  * Access-Control-Allow-Origin -  <br>  * CF-Cache-Status -  <br>  * CF-RAY -  <br>  * Connection -  <br>  * Content-Encoding -  <br>  * Date -  <br>  * NEL -  <br>  * Report-To -  <br>  * Server -  <br>  * Tk -  <br>  * Transfer-Encoding -  <br>  * Vary -  <br>  * X-Cache -  <br>  * X-RapidAPI-Region -  <br>  * X-RapidAPI-Version -  <br>  * alt-svc -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

