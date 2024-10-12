# openapi_client.StreamSourcesApi

All URIs are relative to *https://api-sandbox.cloud.wowza.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_stream_source**](StreamSourcesApi.md#add_stream_source) | **POST** /stream_sources/add | Deprecated operation
[**create_stream_source**](StreamSourcesApi.md#create_stream_source) | **POST** /stream_sources | Add a stream source
[**delete_stream_source**](StreamSourcesApi.md#delete_stream_source) | **DELETE** /stream_sources/{id} | Delete a stream source
[**list_stream_sources**](StreamSourcesApi.md#list_stream_sources) | **GET** /stream_sources | Fetch all stream sources
[**show_stream_source**](StreamSourcesApi.md#show_stream_source) | **GET** /stream_sources/{id} | Fetch a stream source
[**update_stream_source**](StreamSourcesApi.md#update_stream_source) | **PATCH** /stream_sources/{id} | Update a stream source


# **add_stream_source**
> CreateStreamSource200Response add_stream_source(stream_source)

Deprecated operation

POST /stream_sources/add/ is deprecated. To add a stream source, use POST /stream_sources instead.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_stream_source200_response import CreateStreamSource200Response
from openapi_client.models.stream_source_create_input import StreamSourceCreateInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamSourcesApi(api_client)
    stream_source = openapi_client.StreamSourceCreateInput() # StreamSourceCreateInput | Provide the details of the stream source to add in the body of the request.

    try:
        # Deprecated operation
        api_response = api_instance.add_stream_source(stream_source)
        print("The response of StreamSourcesApi->add_stream_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSourcesApi->add_stream_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_source** | [**StreamSourceCreateInput**](StreamSourceCreateInput.md)| Provide the details of the stream source to add in the body of the request. | 

### Return type

[**CreateStreamSource200Response**](CreateStreamSource200Response.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_stream_source**
> CreateStreamSource200Response create_stream_source(stream_source)

Add a stream source

This operation adds a stream source.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_stream_source200_response import CreateStreamSource200Response
from openapi_client.models.stream_source_create_input import StreamSourceCreateInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamSourcesApi(api_client)
    stream_source = openapi_client.StreamSourceCreateInput() # StreamSourceCreateInput | Provide the details of the stream source to add in the body of the request.

    try:
        # Add a stream source
        api_response = api_instance.create_stream_source(stream_source)
        print("The response of StreamSourcesApi->create_stream_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSourcesApi->create_stream_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_source** | [**StreamSourceCreateInput**](StreamSourceCreateInput.md)| Provide the details of the stream source to add in the body of the request. | 

### Return type

[**CreateStreamSource200Response**](CreateStreamSource200Response.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_stream_source**
> delete_stream_source(id)

Delete a stream source

This operation deletes a stream source.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamSourcesApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the stream source.

    try:
        # Delete a stream source
        api_instance.delete_stream_source(id)
    except Exception as e:
        print("Exception when calling StreamSourcesApi->delete_stream_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the stream source. | 

### Return type

void (empty response body)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_stream_sources**
> StreamSources list_stream_sources(page=page, per_page=per_page)

Fetch all stream sources

This operation shows the details of all of your stream sources.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.stream_sources import StreamSources
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamSourcesApi(api_client)
    page = 56 # int | Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results. (optional)
    per_page = 56 # int | For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>. (optional)

    try:
        # Fetch all stream sources
        api_response = api_instance.list_stream_sources(page=page, per_page=per_page)
        print("The response of StreamSourcesApi->list_stream_sources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSourcesApi->list_stream_sources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. &lt;strong&gt;Next&lt;/strong&gt; and &lt;strong&gt;Previous&lt;/strong&gt; links allow you to navigate multiple pages of results. Omit the &lt;em&gt;page&lt;/em&gt; parameter or specify an integer that&#39;s less than or equal to &lt;strong&gt;0&lt;/strong&gt; to view all (unpaginated) results. | [optional] 
 **per_page** | **int**| For use with the &lt;em&gt;page&lt;/em&gt; parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is &lt;strong&gt;10&lt;/strong&gt;. | [optional] 

### Return type

[**StreamSources**](StreamSources.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show_stream_source**
> CreateStreamSource200Response show_stream_source(id)

Fetch a stream source

This operation shows details of a specific stream source.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_stream_source200_response import CreateStreamSource200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamSourcesApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the stream source.

    try:
        # Fetch a stream source
        api_response = api_instance.show_stream_source(id)
        print("The response of StreamSourcesApi->show_stream_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSourcesApi->show_stream_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the stream source. | 

### Return type

[**CreateStreamSource200Response**](CreateStreamSource200Response.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_stream_source**
> CreateStreamSource200Response update_stream_source(id, stream_source)

Update a stream source

This operation updates a stream source.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_stream_source200_response import CreateStreamSource200Response
from openapi_client.models.stream_source_update_input import StreamSourceUpdateInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamSourcesApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the stream source.
    stream_source = openapi_client.StreamSourceUpdateInput() # StreamSourceUpdateInput | Provide the details of the stream source to update in the body of the request.

    try:
        # Update a stream source
        api_response = api_instance.update_stream_source(id, stream_source)
        print("The response of StreamSourcesApi->update_stream_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSourcesApi->update_stream_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the stream source. | 
 **stream_source** | [**StreamSourceUpdateInput**](StreamSourceUpdateInput.md)| Provide the details of the stream source to update in the body of the request. | 

### Return type

[**CreateStreamSource200Response**](CreateStreamSource200Response.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

