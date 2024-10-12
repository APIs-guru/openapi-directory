# openapi_client.DefaultApi

All URIs are relative to *https://api.archive.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wayback_v1_available_get**](DefaultApi.md#wayback_v1_available_get) | **GET** /wayback/v1/available | 
[**wayback_v1_available_post**](DefaultApi.md#wayback_v1_available_post) | **POST** /wayback/v1/available | 


# **wayback_v1_available_get**
> wayback_v1_available_get(url, timestamp=timestamp, param_callback=param_callback, timeout=timeout, closest=closest, status_code=status_code, tag=tag)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.archive.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.archive.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    url = 'url_example' # str | A single URL to query.
    timestamp = 'timestamp_example' # str | Timestamp requested in ISO 8601 format. The following formats are acceptable:  - YYYY  - YYYY-MM  - YYYY-MM-DD  - YYYY-MM-DDTHH:mm:SSz  - YYYY-MM-DD:HH:mm+00:00  (optional)
    param_callback = 'param_callback_example' # str | Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.  (optional)
    timeout = 5 # float | Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX server. The default value is 5.0.  (optional) (default to 5)
    closest = either # str | The direction specifies whether to match archived timestamps that are before the provided one, after, or the default either (closest in either direction). Must be before, after, or either. May be overidden by individual requests.  (optional) (default to either)
    status_code = 56 # int | HTTP status codes to filter by. Only results with these codes will be returned  (optional)
    tag = 'tag_example' # str | The optional tag can have any value, and is returned with the results; it can be used to help collate input and output values.  (optional)

    try:
        api_instance.wayback_v1_available_get(url, timestamp=timestamp, param_callback=param_callback, timeout=timeout, closest=closest, status_code=status_code, tag=tag)
    except Exception as e:
        print("Exception when calling DefaultApi->wayback_v1_available_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| A single URL to query. | 
 **timestamp** | **str**| Timestamp requested in ISO 8601 format. The following formats are acceptable:  - YYYY  - YYYY-MM  - YYYY-MM-DD  - YYYY-MM-DDTHH:mm:SSz  - YYYY-MM-DD:HH:mm+00:00  | [optional] 
 **param_callback** | **str**| Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as &#x60;callback(data)&#x60;, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.  | [optional] 
 **timeout** | **float**| Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX server. The default value is 5.0.  | [optional] [default to 5]
 **closest** | **str**| The direction specifies whether to match archived timestamps that are before the provided one, after, or the default either (closest in either direction). Must be before, after, or either. May be overidden by individual requests.  | [optional] [default to either]
 **status_code** | **int**| HTTP status codes to filter by. Only results with these codes will be returned  | [optional] 
 **tag** | **str**| The optional tag can have any value, and is returned with the results; it can be used to help collate input and output values.  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: applcation/json, application/javascript, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Nominal Availability results |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wayback_v1_available_post**
> wayback_v1_available_post(url, timestamp=timestamp, param_callback=param_callback, timeout=timeout, closest=closest, status_code=status_code, tag=tag, availability_request=availability_request)



### Example


```python
import openapi_client
from openapi_client.models.availability_request import AvailabilityRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.archive.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.archive.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    url = 'url_example' # str | A single URL to query.
    timestamp = 'timestamp_example' # str | Timestamp requested in ISO 8601 format. The following formats are acceptable:  - YYYY  - YYYY-MM  - YYYY-MM-DD  - YYYY-MM-DDTHH:mm:SSz  - YYYY-MM-DD:HH:mm+00:00  (optional)
    param_callback = 'param_callback_example' # str | Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.  (optional)
    timeout = 5 # float | Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX server. The default value is 5.0.  (optional) (default to 5)
    closest = either # str | The direction specifies whether to match archived timestamps that are before the provided one, after, or the default either (closest in either direction). Must be before, after, or either. May be overidden by individual requests.  (optional) (default to either)
    status_code = 56 # int | HTTP status codes to filter by. Only results with these codes will be returned  (optional)
    tag = 'tag_example' # str | The optional tag can have any value, and is returned with the results; it can be used to help collate input and output values.  (optional)
    availability_request = [openapi_client.AvailabilityRequest()] # List[AvailabilityRequest] |  (optional)

    try:
        api_instance.wayback_v1_available_post(url, timestamp=timestamp, param_callback=param_callback, timeout=timeout, closest=closest, status_code=status_code, tag=tag, availability_request=availability_request)
    except Exception as e:
        print("Exception when calling DefaultApi->wayback_v1_available_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| A single URL to query. | 
 **timestamp** | **str**| Timestamp requested in ISO 8601 format. The following formats are acceptable:  - YYYY  - YYYY-MM  - YYYY-MM-DD  - YYYY-MM-DDTHH:mm:SSz  - YYYY-MM-DD:HH:mm+00:00  | [optional] 
 **param_callback** | **str**| Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as &#x60;callback(data)&#x60;, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.  | [optional] 
 **timeout** | **float**| Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX server. The default value is 5.0.  | [optional] [default to 5]
 **closest** | **str**| The direction specifies whether to match archived timestamps that are before the provided one, after, or the default either (closest in either direction). Must be before, after, or either. May be overidden by individual requests.  | [optional] [default to either]
 **status_code** | **int**| HTTP status codes to filter by. Only results with these codes will be returned  | [optional] 
 **tag** | **str**| The optional tag can have any value, and is returned with the results; it can be used to help collate input and output values.  | [optional] 
 **availability_request** | [**List[AvailabilityRequest]**](AvailabilityRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, text/csv
 - **Accept**: applcation/json, application/javascript, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Nominal Availability results |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

