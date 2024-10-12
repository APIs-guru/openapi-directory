# openapi_client.LogsApi

All URIs are relative to *https://api.clever-cloud.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logs_app_id_drains_get_0**](LogsApi.md#logs_app_id_drains_get_0) | **GET** /logs/{appId}/drains | 
[**logs_app_id_drains_id_or_url_delete_0**](LogsApi.md#logs_app_id_drains_id_or_url_delete_0) | **DELETE** /logs/{appId}/drains/:idOrUrl | 
[**logs_app_id_drains_id_or_url_get_0**](LogsApi.md#logs_app_id_drains_id_or_url_get_0) | **GET** /logs/{appId}/drains/:idOrUrl | 
[**logs_app_id_drains_post_0**](LogsApi.md#logs_app_id_drains_post_0) | **POST** /logs/{appId}/drains | 
[**logs_app_id_get_0**](LogsApi.md#logs_app_id_get_0) | **GET** /logs/{appId} | 
[**logs_app_id_sse_get_0**](LogsApi.md#logs_app_id_sse_get_0) | **GET** /logs/{appId}/sse | 
[**logs_drains_drain_id_put_0**](LogsApi.md#logs_drains_drain_id_put_0) | **PUT** /logs/drains/{drainId} | 
[**logs_drains_get_0**](LogsApi.md#logs_drains_get_0) | **GET** /logs/drains | 
[**logs_logs_chunked_app_id_get_0**](LogsApi.md#logs_logs_chunked_app_id_get_0) | **GET** /logs/logs-chunked/{appId} | 
[**logs_logs_socket_app_id_get_0**](LogsApi.md#logs_logs_socket_app_id_get_0) | **GET** /logs/logs-socket/{appId} | 
[**v3_logs_app_id_drains_get_0**](LogsApi.md#v3_logs_app_id_drains_get_0) | **GET** /v3/logs/{appId}/drains | 
[**v3_logs_app_id_drains_id_or_url_delete_0**](LogsApi.md#v3_logs_app_id_drains_id_or_url_delete_0) | **DELETE** /v3/logs/{appId}/drains/:idOrUrl | 
[**v3_logs_app_id_drains_id_or_url_get_0**](LogsApi.md#v3_logs_app_id_drains_id_or_url_get_0) | **GET** /v3/logs/{appId}/drains/:idOrUrl | 
[**v3_logs_app_id_drains_post_0**](LogsApi.md#v3_logs_app_id_drains_post_0) | **POST** /v3/logs/{appId}/drains | 
[**v3_logs_app_id_get_0**](LogsApi.md#v3_logs_app_id_get_0) | **GET** /v3/logs/{appId} | 
[**v3_logs_app_id_logs_chunked_get_0**](LogsApi.md#v3_logs_app_id_logs_chunked_get_0) | **GET** /v3/logs/{appId}/logs-chunked | 
[**v3_logs_app_id_logs_socket_get_0**](LogsApi.md#v3_logs_app_id_logs_socket_get_0) | **GET** /v3/logs/{appId}/logs-socket | 


# **logs_app_id_drains_get_0**
> logs_app_id_drains_get_0(app_id)



Fetch the logs drains for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.logs_app_id_drains_get_0(app_id)
    except Exception as e:
        print("Exception when calling LogsApi->logs_app_id_drains_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_app_id_drains_id_or_url_delete_0**
> logs_app_id_drains_id_or_url_delete_0(app_id)



Delete the logs drain by id or url for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.logs_app_id_drains_id_or_url_delete_0(app_id)
    except Exception as e:
        print("Exception when calling LogsApi->logs_app_id_drains_id_or_url_delete_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_app_id_drains_id_or_url_get_0**
> logs_app_id_drains_id_or_url_get_0(app_id)



Fetch the logs drain by id or url for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.logs_app_id_drains_id_or_url_get_0(app_id)
    except Exception as e:
        print("Exception when calling LogsApi->logs_app_id_drains_id_or_url_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_app_id_drains_post_0**
> logs_app_id_drains_post_0(app_id)



Add a log drain for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.logs_app_id_drains_post_0(app_id)
    except Exception as e:
        print("Exception when calling LogsApi->logs_app_id_drains_post_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_app_id_get_0**
> logs_app_id_get_0(app_id, limit=limit, order=order, after=after, before=before, filter=filter, deployment_id=deployment_id)



Fetch the logs for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Application Id
    limit = 56 # int | Number of lines to return (optional)
    order = desc # str | Logs order (optional) (default to desc)
    after = '2013-10-20T19:20:30+01:00' # datetime | Lowest bound for logs date, ISO 8601 (optional)
    before = '2013-10-20T19:20:30+01:00' # datetime | Highest bounds for logs date, ISO 8601 (optional)
    filter = 'filter_example' # str | A pattern to filter with (optional)
    deployment_id = 'deployment_id_example' # str | Only fetch logs emitted by this deployment (optional)

    try:
        api_instance.logs_app_id_get_0(app_id, limit=limit, order=order, after=after, before=before, filter=filter, deployment_id=deployment_id)
    except Exception as e:
        print("Exception when calling LogsApi->logs_app_id_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Application Id | 
 **limit** | **int**| Number of lines to return | [optional] 
 **order** | **str**| Logs order | [optional] [default to desc]
 **after** | **datetime**| Lowest bound for logs date, ISO 8601 | [optional] 
 **before** | **datetime**| Highest bounds for logs date, ISO 8601 | [optional] 
 **filter** | **str**| A pattern to filter with | [optional] 
 **deployment_id** | **str**| Only fetch logs emitted by this deployment | [optional] 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_app_id_sse_get_0**
> logs_app_id_sse_get_0(app_id)



Retrieve logs as they come through a sse connection. To have authorization, you have to add `authorization=oAuthAuthorizationString` as query param.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.logs_app_id_sse_get_0(app_id)
    except Exception as e:
        print("Exception when calling LogsApi->logs_app_id_sse_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_drains_drain_id_put_0**
> logs_drains_drain_id_put_0(drain_id)



Fetch all the logs drains (ccadmin dedicated route)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    drain_id = 'drain_id_example' # str | Automatically added

    try:
        api_instance.logs_drains_drain_id_put_0(drain_id)
    except Exception as e:
        print("Exception when calling LogsApi->logs_drains_drain_id_put_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drain_id** | **str**| Automatically added | 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_drains_get_0**
> logs_drains_get_0()



Fetch all the logs drains (ccadmin dedicated route)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)

    try:
        api_instance.logs_drains_get_0()
    except Exception as e:
        print("Exception when calling LogsApi->logs_drains_get_0: %s\n" % e)
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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_logs_chunked_app_id_get_0**
> logs_logs_chunked_app_id_get_0(app_id, download=download)



Retrieve logs as they come through a chunked, never-ending response

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Application Id
    download = True # bool | Tell the user-agent to download the body as a file (optional)

    try:
        api_instance.logs_logs_chunked_app_id_get_0(app_id, download=download)
    except Exception as e:
        print("Exception when calling LogsApi->logs_logs_chunked_app_id_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Application Id | 
 **download** | **bool**| Tell the user-agent to download the body as a file | [optional] 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_logs_socket_app_id_get_0**
> logs_logs_socket_app_id_get_0(app_id, since=since, filter=filter, deployment_id=deployment_id)



Retrieve logs as they come through a websocket connection. To have authorization, you have to send a `{ \"message_type\": \"oauth\", \"authorization\": \"oauth authorization string\" }` message

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Application Id
    since = '2013-10-20T19:20:30+01:00' # datetime | Only fetch logs newer than this (ISO-8601 formatted) date (optional)
    filter = 'filter_example' # str | A pattern to filter with (optional)
    deployment_id = 'deployment_id_example' # str | Only fetch logs emitted by this deployment (optional)

    try:
        api_instance.logs_logs_socket_app_id_get_0(app_id, since=since, filter=filter, deployment_id=deployment_id)
    except Exception as e:
        print("Exception when calling LogsApi->logs_logs_socket_app_id_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Application Id | 
 **since** | **datetime**| Only fetch logs newer than this (ISO-8601 formatted) date | [optional] 
 **filter** | **str**| A pattern to filter with | [optional] 
 **deployment_id** | **str**| Only fetch logs emitted by this deployment | [optional] 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_drains_get_0**
> v3_logs_app_id_drains_get_0(app_id)



Fetch the logs drains for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_drains_get_0(app_id)
    except Exception as e:
        print("Exception when calling LogsApi->v3_logs_app_id_drains_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_drains_id_or_url_delete_0**
> v3_logs_app_id_drains_id_or_url_delete_0(app_id)



Delete the logs drain by id or url for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_drains_id_or_url_delete_0(app_id)
    except Exception as e:
        print("Exception when calling LogsApi->v3_logs_app_id_drains_id_or_url_delete_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_drains_id_or_url_get_0**
> v3_logs_app_id_drains_id_or_url_get_0(app_id)



Fetch the logs drain by id or url for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_drains_id_or_url_get_0(app_id)
    except Exception as e:
        print("Exception when calling LogsApi->v3_logs_app_id_drains_id_or_url_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_drains_post_0**
> v3_logs_app_id_drains_post_0(app_id)



Add a log drain for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_drains_post_0(app_id)
    except Exception as e:
        print("Exception when calling LogsApi->v3_logs_app_id_drains_post_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_get_0**
> v3_logs_app_id_get_0(app_id)



Fetch the logs for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_get_0(app_id)
    except Exception as e:
        print("Exception when calling LogsApi->v3_logs_app_id_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_logs_chunked_get_0**
> v3_logs_app_id_logs_chunked_get_0(app_id)



Retrieve logs as they come through a chunked, never-ending response

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_logs_chunked_get_0(app_id)
    except Exception as e:
        print("Exception when calling LogsApi->v3_logs_app_id_logs_chunked_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_logs_socket_get_0**
> v3_logs_app_id_logs_socket_get_0(app_id)



Retrieve logs as they come through a websocket connection. To have authorization, you have to send a `{ \"message_type\": \"oauth\", \"authorization\": \"oauth authorization string\" }` message

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_logs_socket_get_0(app_id)
    except Exception as e:
        print("Exception when calling LogsApi->v3_logs_app_id_logs_socket_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

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
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

