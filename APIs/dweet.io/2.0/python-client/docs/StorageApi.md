# openapi_client.StorageApi

All URIs are relative to *https://dweet.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_stored_alerts**](StorageApi.md#get_stored_alerts) | **GET** /get/stored/alerts/for/{thing} | Read all the saved alerts for a thing from long term storage.  You can query a maximum of 1 day per request and a granularly of 1 hour.
[**get_stored_dweets_for_thing_get**](StorageApi.md#get_stored_dweets_for_thing_get) | **GET** /get/stored/dweets/for/{thing} | Read all the saved dweets for a thing from long term storage.  You can query a maximum of 1 day per request and a granularly of 1 hour.


# **get_stored_alerts**
> get_stored_alerts(thing, key, var_date, hour=hour, response_type=response_type)

Read all the saved alerts for a thing from long term storage.  You can query a maximum of 1 day per request and a granularly of 1 hour.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dweet.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dweet.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StorageApi(api_client)
    thing = 'thing_example' # str | A unique name of a thing.
    key = 'key_example' # str | A valid key for a locked thing. If the thing is not locked, this can be ignored.
    var_date = 'var_date_example' # str | The calendar date (YYYY-MM-DD) from which you'd like to start your query.  The response will be a maximum of one day.
    hour = 'hour_example' # str | The hour of the day represented in the date parameter in 24-hour (00-23) format.  If this parameter is included, a maximum of 1 hour will be returned starting at this hour. (optional)
    response_type = 'response_type_example' # str | Current valid parameters for this are 'csv' and 'json'.  If this parameter is left blank, all responses default to hapi-json dweet-speak. (optional)

    try:
        # Read all the saved alerts for a thing from long term storage.  You can query a maximum of 1 day per request and a granularly of 1 hour.
        api_instance.get_stored_alerts(thing, key, var_date, hour=hour, response_type=response_type)
    except Exception as e:
        print("Exception when calling StorageApi->get_stored_alerts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thing** | **str**| A unique name of a thing. | 
 **key** | **str**| A valid key for a locked thing. If the thing is not locked, this can be ignored. | 
 **var_date** | **str**| The calendar date (YYYY-MM-DD) from which you&#39;d like to start your query.  The response will be a maximum of one day. | 
 **hour** | **str**| The hour of the day represented in the date parameter in 24-hour (00-23) format.  If this parameter is included, a maximum of 1 hour will be returned starting at this hour. | [optional] 
 **response_type** | **str**| Current valid parameters for this are &#39;csv&#39; and &#39;json&#39;.  If this parameter is left blank, all responses default to hapi-json dweet-speak. | [optional] 

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
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_stored_dweets_for_thing_get**
> get_stored_dweets_for_thing_get(thing, key, var_date, hour=hour, response_type=response_type)

Read all the saved dweets for a thing from long term storage.  You can query a maximum of 1 day per request and a granularly of 1 hour.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dweet.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dweet.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StorageApi(api_client)
    thing = 'thing_example' # str | A unique name of a thing.
    key = 'key_example' # str | A valid key for a locked thing. If the thing is not locked, this can be ignored.
    var_date = 'var_date_example' # str | The calendar date (YYYY-MM-DD) from which you'd like to start your query.  The response will be a maximum of one day.
    hour = 'hour_example' # str | The hour of the day represented in the date parameter in 24-hour (00-23) format.  If this parameter is included, a maximum of 1 hour will be returned starting at this hour. (optional)
    response_type = 'response_type_example' # str | Current valid parameters for this are 'csv' and 'json'.  If this parameter is left blank, all responses default to hapi-json dweet-speak. (optional)

    try:
        # Read all the saved dweets for a thing from long term storage.  You can query a maximum of 1 day per request and a granularly of 1 hour.
        api_instance.get_stored_dweets_for_thing_get(thing, key, var_date, hour=hour, response_type=response_type)
    except Exception as e:
        print("Exception when calling StorageApi->get_stored_dweets_for_thing_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thing** | **str**| A unique name of a thing. | 
 **key** | **str**| A valid key for a locked thing. If the thing is not locked, this can be ignored. | 
 **var_date** | **str**| The calendar date (YYYY-MM-DD) from which you&#39;d like to start your query.  The response will be a maximum of one day. | 
 **hour** | **str**| The hour of the day represented in the date parameter in 24-hour (00-23) format.  If this parameter is included, a maximum of 1 hour will be returned starting at this hour. | [optional] 
 **response_type** | **str**| Current valid parameters for this are &#39;csv&#39; and &#39;json&#39;.  If this parameter is left blank, all responses default to hapi-json dweet-speak. | [optional] 

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
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

