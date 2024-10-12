# openapi_client.KeysApi

All URIs are relative to *https://api.ideal-postcodes.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**key_availability**](KeysApi.md#key_availability) | **GET** /keys/{key} | Availability
[**key_details**](KeysApi.md#key_details) | **GET** /keys/{key}/details | Details
[**key_logs**](KeysApi.md#key_logs) | **GET** /keys/{key}/lookups | Logs (CSV)
[**key_usage**](KeysApi.md#key_usage) | **GET** /keys/{key}/usage | Usage Stats


# **key_availability**
> ApiKeyResponse key_availability(key)

Availability

Returns public information on key. Currently only returns whether the key is currently useable via the `available` property. Use this to discover if the key is useable before making further requests.  You may pass both API Keys (beginning `ak_`) and Sub-licensed Keys (beginning `sl_`). ## Testing  To test your implementation of our API, you may use the following test keys.  - **iddqd** Availability will return as `true` - **idkfa** Availability will return as `false`  

### Example


```python
import openapi_client
from openapi_client.models.api_key_response import ApiKeyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KeysApi(api_client)
    key = 'key_example' # str | 

    try:
        # Availability
        api_response = api_instance.key_availability(key)
        print("The response of KeysApi->key_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->key_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Invalid Key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **key_details**
> ApiKeyDetailsResponse key_details(key, user_token=user_token)

Details

Returns private data on the key including remaining lookups, available datasets and usage limits. 

### Example


```python
import openapi_client
from openapi_client.models.api_key_details_response import ApiKeyDetailsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KeysApi(api_client)
    key = 'key_example' # str | 
    user_token = 'user_token_example' # str |  (optional)

    try:
        # Details
        api_response = api_instance.key_details(key, user_token=user_token)
        print("The response of KeysApi->key_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->key_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **user_token** | **str**|  | [optional] 

### Return type

[**ApiKeyDetailsResponse**](ApiKeyDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorised |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **key_logs**
> str key_logs(key, start=start, end=end, licensee=licensee)

Logs (CSV)

Reports lookup information on a key for paid lookups.  This method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).  A maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval.  ## Download Usage History (CSV)  `GET /keys/:key/lookups`  Returns a CSV download of lookups performed and associated information.  Note that the Content-Type returned will be CSV (text/csv). For a non 200 response, the `Content-Type` will revert to JSON with the error code and message embedded.  ## Data Redaction  Personally Identifiable Data (PII) caught in this your usage log (including IP, search term and URL data) will be redacted on a weekly basis.  By default, PII will be redacted if it is older than 21 days. This timeframe can be configured from your dashboard.  You may prevent PII collection altogether by setting the interval to `0` days. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KeysApi(api_client)
    key = 'key_example' # str | 
    start = 56 # int | An start date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no start time is provided, the start time will be assigned to a time 21 days prior to the end time. (optional)
    end = 56 # int | An end date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no end time is provided, the current time will be used. (optional)
    licensee = 'licensee_example' # str | Sublicensed keys only. This will restrict the analysed dataset to a specific licensee. (optional)

    try:
        # Logs (CSV)
        api_response = api_instance.key_logs(key, start=start, end=end, licensee=licensee)
        print("The response of KeysApi->key_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->key_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **start** | **int**| An start date/time in the form of a UNIX Timestamp in milliseconds, e.g. &#x60;1418556452651&#x60;. If no start time is provided, the start time will be assigned to a time 21 days prior to the end time. | [optional] 
 **end** | **int**| An end date/time in the form of a UNIX Timestamp in milliseconds, e.g. &#x60;1418556452651&#x60;. If no end time is provided, the current time will be used. | [optional] 
 **licensee** | **str**| Sublicensed keys only. This will restrict the analysed dataset to a specific licensee. | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **key_usage**
> ApiKeyUsageResponse key_usage(key, start=start, end=end, tags=tags, licensee=licensee)

Usage Stats

Reports the number of lookups consumed on a key for a range of days.  A maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval. 

### Example


```python
import openapi_client
from openapi_client.models.api_key_usage_response import ApiKeyUsageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KeysApi(api_client)
    key = 'key_example' # str | 
    start = 56 # int | A start date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no start time is provided, the start time will be assigned to a time 21 days prior to the end time. (optional)
    end = 56 # int | An end date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no end time is provided, the current time will be used. (optional)
    tags = 'tags_example' # str |  (optional)
    licensee = 'licensee_example' # str | Sublicensed keys only. This will restrict the analysed dataset to a specific licensee. (optional)

    try:
        # Usage Stats
        api_response = api_instance.key_usage(key, start=start, end=end, tags=tags, licensee=licensee)
        print("The response of KeysApi->key_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->key_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **start** | **int**| A start date/time in the form of a UNIX Timestamp in milliseconds, e.g. &#x60;1418556452651&#x60;. If no start time is provided, the start time will be assigned to a time 21 days prior to the end time. | [optional] 
 **end** | **int**| An end date/time in the form of a UNIX Timestamp in milliseconds, e.g. &#x60;1418556452651&#x60;. If no end time is provided, the current time will be used. | [optional] 
 **tags** | **str**|  | [optional] 
 **licensee** | **str**| Sublicensed keys only. This will restrict the analysed dataset to a specific licensee. | [optional] 

### Return type

[**ApiKeyUsageResponse**](ApiKeyUsageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

