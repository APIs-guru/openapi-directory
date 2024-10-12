# openapi_client.AlertsApi

All URIs are relative to *https://dweet.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_alert_get**](AlertsApi.md#create_alert_get) | **GET** /alert/{who}/when/{thing}/{condition} | Create an alert for a thing. A thing must be locked before an alert can be set.
[**get_alert**](AlertsApi.md#get_alert) | **GET** /get/alert/for/{thing} | Get the alert attached to a thing.
[**remove_alert**](AlertsApi.md#remove_alert) | **GET** /remove/alert/for/{thing} | Remove an alert for a thing.


# **create_alert_get**
> create_alert_get(who, thing, condition, key)

Create an alert for a thing. A thing must be locked before an alert can be set.

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
    api_instance = openapi_client.AlertsApi(api_client)
    who = 'who_example' # str | A comma separated list of Email addresses to send the alert to.
    thing = 'thing_example' # str | A unique name of a thing. It is recommended that you use a GUID as to avoid name collisions.
    condition = 'condition_example' # str | A condition that returns a string or a true value if a condition is met.
    key = 'key_example' # str | A valid key for a locked thing. If the thing is not locked, this can be ignored.

    try:
        # Create an alert for a thing. A thing must be locked before an alert can be set.
        api_instance.create_alert_get(who, thing, condition, key)
    except Exception as e:
        print("Exception when calling AlertsApi->create_alert_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **who** | **str**| A comma separated list of Email addresses to send the alert to. | 
 **thing** | **str**| A unique name of a thing. It is recommended that you use a GUID as to avoid name collisions. | 
 **condition** | **str**| A condition that returns a string or a true value if a condition is met. | 
 **key** | **str**| A valid key for a locked thing. If the thing is not locked, this can be ignored. | 

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

# **get_alert**
> get_alert(thing, key)

Get the alert attached to a thing.

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
    api_instance = openapi_client.AlertsApi(api_client)
    thing = 'thing_example' # str | A unique name of a thing.
    key = 'key_example' # str | A valid key for a locked thing. If the thing is not locked, this can be ignored.

    try:
        # Get the alert attached to a thing.
        api_instance.get_alert(thing, key)
    except Exception as e:
        print("Exception when calling AlertsApi->get_alert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thing** | **str**| A unique name of a thing. | 
 **key** | **str**| A valid key for a locked thing. If the thing is not locked, this can be ignored. | 

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

# **remove_alert**
> remove_alert(thing, key)

Remove an alert for a thing.

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
    api_instance = openapi_client.AlertsApi(api_client)
    thing = 'thing_example' # str | A unique name of a thing.
    key = 'key_example' # str | A valid key for a locked thing. If the thing is not locked, this can be ignored.

    try:
        # Remove an alert for a thing.
        api_instance.remove_alert(thing, key)
    except Exception as e:
        print("Exception when calling AlertsApi->remove_alert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thing** | **str**| A unique name of a thing. | 
 **key** | **str**| A valid key for a locked thing. If the thing is not locked, this can be ignored. | 

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

