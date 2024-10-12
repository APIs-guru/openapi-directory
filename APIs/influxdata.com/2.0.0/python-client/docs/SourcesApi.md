# openapi_client.SourcesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_sources_id**](SourcesApi.md#delete_sources_id) | **DELETE** /sources/{sourceID} | Delete a source
[**get_sources**](SourcesApi.md#get_sources) | **GET** /sources | List all sources
[**get_sources_id**](SourcesApi.md#get_sources_id) | **GET** /sources/{sourceID} | Retrieve a source
[**get_sources_id_buckets**](SourcesApi.md#get_sources_id_buckets) | **GET** /sources/{sourceID}/buckets | Get buckets in a source
[**get_sources_id_health**](SourcesApi.md#get_sources_id_health) | **GET** /sources/{sourceID}/health | Get the health of a source
[**patch_sources_id**](SourcesApi.md#patch_sources_id) | **PATCH** /sources/{sourceID} | Update a Source
[**post_sources**](SourcesApi.md#post_sources) | **POST** /sources | Create a source


# **delete_sources_id**
> delete_sources_id(source_id, zap_trace_span=zap_trace_span)

Delete a source

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourcesApi(api_client)
    source_id = 'source_id_example' # str | The source ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a source
        api_instance.delete_sources_id(source_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling SourcesApi->delete_sources_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id** | **str**| The source ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Delete has been accepted |  -  |
**404** | View not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sources**
> Sources get_sources(zap_trace_span=zap_trace_span, org=org)

List all sources

### Example


```python
import openapi_client
from openapi_client.models.sources import Sources
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourcesApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    org = 'org_example' # str | The name of the organization. (optional)

    try:
        # List all sources
        api_response = api_instance.get_sources(zap_trace_span=zap_trace_span, org=org)
        print("The response of SourcesApi->get_sources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourcesApi->get_sources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **org** | **str**| The name of the organization. | [optional] 

### Return type

[**Sources**](Sources.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of sources |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sources_id**
> Source get_sources_id(source_id, zap_trace_span=zap_trace_span)

Retrieve a source

### Example


```python
import openapi_client
from openapi_client.models.source import Source
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourcesApi(api_client)
    source_id = 'source_id_example' # str | The source ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a source
        api_response = api_instance.get_sources_id(source_id, zap_trace_span=zap_trace_span)
        print("The response of SourcesApi->get_sources_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourcesApi->get_sources_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id** | **str**| The source ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Source**](Source.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A source |  -  |
**404** | Source not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sources_id_buckets**
> Buckets get_sources_id_buckets(source_id, zap_trace_span=zap_trace_span, org=org)

Get buckets in a source

### Example


```python
import openapi_client
from openapi_client.models.buckets import Buckets
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourcesApi(api_client)
    source_id = 'source_id_example' # str | The source ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    org = 'org_example' # str | The name of the organization. (optional)

    try:
        # Get buckets in a source
        api_response = api_instance.get_sources_id_buckets(source_id, zap_trace_span=zap_trace_span, org=org)
        print("The response of SourcesApi->get_sources_id_buckets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourcesApi->get_sources_id_buckets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id** | **str**| The source ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **org** | **str**| The name of the organization. | [optional] 

### Return type

[**Buckets**](Buckets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A source |  -  |
**404** | Source not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sources_id_health**
> HealthCheck get_sources_id_health(source_id, zap_trace_span=zap_trace_span)

Get the health of a source

### Example


```python
import openapi_client
from openapi_client.models.health_check import HealthCheck
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourcesApi(api_client)
    source_id = 'source_id_example' # str | The source ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Get the health of a source
        api_response = api_instance.get_sources_id_health(source_id, zap_trace_span=zap_trace_span)
        print("The response of SourcesApi->get_sources_id_health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourcesApi->get_sources_id_health: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id** | **str**| The source ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**HealthCheck**](HealthCheck.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The source is healthy |  -  |
**503** | The source is not healthy |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_sources_id**
> Source patch_sources_id(source_id, source, zap_trace_span=zap_trace_span)

Update a Source

### Example


```python
import openapi_client
from openapi_client.models.source import Source
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourcesApi(api_client)
    source_id = 'source_id_example' # str | The source ID.
    source = openapi_client.Source() # Source | Source update
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a Source
        api_response = api_instance.patch_sources_id(source_id, source, zap_trace_span=zap_trace_span)
        print("The response of SourcesApi->patch_sources_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourcesApi->patch_sources_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id** | **str**| The source ID. | 
 **source** | [**Source**](Source.md)| Source update | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Source**](Source.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created Source |  -  |
**404** | Source not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_sources**
> Source post_sources(source, zap_trace_span=zap_trace_span)

Create a source

### Example


```python
import openapi_client
from openapi_client.models.source import Source
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourcesApi(api_client)
    source = openapi_client.Source() # Source | Source to create
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Create a source
        api_response = api_instance.post_sources(source, zap_trace_span=zap_trace_span)
        print("The response of SourcesApi->post_sources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourcesApi->post_sources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | [**Source**](Source.md)| Source to create | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Source**](Source.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created Source |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

