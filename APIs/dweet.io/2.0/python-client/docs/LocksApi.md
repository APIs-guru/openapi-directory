# openapi_client.LocksApi

All URIs are relative to *https://dweet.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lock_thing**](LocksApi.md#lock_thing) | **GET** /lock/{thing} | Reserve and lock a thing.
[**remove_lock**](LocksApi.md#remove_lock) | **GET** /remove/lock/{lock} | Remove a lock from thing.
[**unlock_thing**](LocksApi.md#unlock_thing) | **GET** /unlock/{thing} | Unlock a thing.


# **lock_thing**
> lock_thing(thing, lock, key)

Reserve and lock a thing.

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
    api_instance = openapi_client.LocksApi(api_client)
    thing = 'thing_example' # str | A unique name of a thing.
    lock = 'lock_example' # str | A valid dweet.io lock.
    key = 'key_example' # str | A valid dweet.io master key.

    try:
        # Reserve and lock a thing.
        api_instance.lock_thing(thing, lock, key)
    except Exception as e:
        print("Exception when calling LocksApi->lock_thing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thing** | **str**| A unique name of a thing. | 
 **lock** | **str**| A valid dweet.io lock. | 
 **key** | **str**| A valid dweet.io master key. | 

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

# **remove_lock**
> remove_lock(lock, key)

Remove a lock from thing.

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
    api_instance = openapi_client.LocksApi(api_client)
    lock = 'lock_example' # str | A valid dweet.io lock.
    key = 'key_example' # str | A valid dweet.io master key.

    try:
        # Remove a lock from thing.
        api_instance.remove_lock(lock, key)
    except Exception as e:
        print("Exception when calling LocksApi->remove_lock: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lock** | **str**| A valid dweet.io lock. | 
 **key** | **str**| A valid dweet.io master key. | 

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

# **unlock_thing**
> unlock_thing(thing, key)

Unlock a thing.

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
    api_instance = openapi_client.LocksApi(api_client)
    thing = 'thing_example' # str | A unique name of a thing.
    key = 'key_example' # str | A valid dweet.io master key.

    try:
        # Unlock a thing.
        api_instance.unlock_thing(thing, key)
    except Exception as e:
        print("Exception when calling LocksApi->unlock_thing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thing** | **str**| A unique name of a thing. | 
 **key** | **str**| A valid dweet.io master key. | 

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

