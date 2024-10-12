# openapi_client.UtilsApi

All URIs are relative to *http://platform-api.opentargets.io/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_data_metrics_0**](UtilsApi.md#get_data_metrics_0) | **GET** /platform/public/utils/metrics | Get metrics about the current data release
[**get_data_stats_0**](UtilsApi.md#get_data_stats_0) | **GET** /platform/public/utils/stats | Get statistics about the current data release
[**get_ping_0**](UtilsApi.md#get_ping_0) | **GET** /platform/public/utils/ping | Ping service
[**get_therapeutic_areas_0**](UtilsApi.md#get_therapeutic_areas_0) | **GET** /platform/public/utils/therapeuticareas | Get the list of therapeutic areas about the current data release
[**get_version_0**](UtilsApi.md#get_version_0) | **GET** /platform/public/utils/version | Get API version


# **get_data_metrics_0**
> get_data_metrics_0()

Get metrics about the current data release

Returns the metrics about associations and evidences, divided by datasource, genes and so on. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://platform-api.opentargets.io/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://platform-api.opentargets.io/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UtilsApi(api_client)

    try:
        # Get metrics about the current data release
        api_instance.get_data_metrics_0()
    except Exception as e:
        print("Exception when calling UtilsApi->get_data_metrics_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_data_stats_0**
> get_data_stats_0()

Get statistics about the current data release

Returns the number of associations and evidences, divided by datasource. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://platform-api.opentargets.io/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://platform-api.opentargets.io/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UtilsApi(api_client)

    try:
        # Get statistics about the current data release
        api_instance.get_data_stats_0()
    except Exception as e:
        print("Exception when calling UtilsApi->get_data_stats_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ping_0**
> get_ping_0()

Ping service

Check if the API is up 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://platform-api.opentargets.io/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://platform-api.opentargets.io/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UtilsApi(api_client)

    try:
        # Ping service
        api_instance.get_ping_0()
    except Exception as e:
        print("Exception when calling UtilsApi->get_ping_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_therapeutic_areas_0**
> get_therapeutic_areas_0()

Get the list of therapeutic areas about the current data release

Returns the list of therapeutic areas for the current data release 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://platform-api.opentargets.io/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://platform-api.opentargets.io/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UtilsApi(api_client)

    try:
        # Get the list of therapeutic areas about the current data release
        api_instance.get_therapeutic_areas_0()
    except Exception as e:
        print("Exception when calling UtilsApi->get_therapeutic_areas_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_version_0**
> get_version_0()

Get API version

Returns current API version. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://platform-api.opentargets.io/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://platform-api.opentargets.io/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UtilsApi(api_client)

    try:
        # Get API version
        api_instance.get_version_0()
    except Exception as e:
        print("Exception when calling UtilsApi->get_version_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

