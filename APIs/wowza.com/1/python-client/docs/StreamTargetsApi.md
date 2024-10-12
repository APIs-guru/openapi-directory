# openapi_client.StreamTargetsApi

All URIs are relative to *https://api-sandbox.cloud.wowza.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_stream_target**](StreamTargetsApi.md#add_stream_target) | **POST** /stream_targets/add | Deprecated operation
[**create_stream_target**](StreamTargetsApi.md#create_stream_target) | **POST** /stream_targets | Create a stream target
[**create_stream_target_geoblock**](StreamTargetsApi.md#create_stream_target_geoblock) | **POST** /stream_targets/{stream_target_id}/geoblock | Create geo-blocking for a stream target
[**create_stream_target_property**](StreamTargetsApi.md#create_stream_target_property) | **POST** /stream_targets/{stream_target_id}/properties | Create a property for a stream target
[**create_stream_target_token_auth**](StreamTargetsApi.md#create_stream_target_token_auth) | **POST** /stream_targets/{stream_target_id}/token_auth | Create token authorization for a stream target
[**delete_stream_target**](StreamTargetsApi.md#delete_stream_target) | **DELETE** /stream_targets/{id} | Delete a stream target
[**delete_stream_target_property**](StreamTargetsApi.md#delete_stream_target_property) | **DELETE** /stream_targets/{stream_target_id}/properties/{id} | Delete a stream target property
[**list_stream_target_properties**](StreamTargetsApi.md#list_stream_target_properties) | **GET** /stream_targets/{stream_target_id}/properties | Fetch all properties of a stream target
[**list_stream_targets**](StreamTargetsApi.md#list_stream_targets) | **GET** /stream_targets | Fetch all stream targets
[**regenerate_connection_code_stream_target**](StreamTargetsApi.md#regenerate_connection_code_stream_target) | **PUT** /stream_targets/{id}/regenerate_connection_code | Regenerate the connection code for a stream target
[**show_stream_target**](StreamTargetsApi.md#show_stream_target) | **GET** /stream_targets/{id} | Fetch a stream target
[**show_stream_target_geoblock**](StreamTargetsApi.md#show_stream_target_geoblock) | **GET** /stream_targets/{stream_target_id}/geoblock | Fetch geo-blocking for a stream target
[**show_stream_target_metrics_current**](StreamTargetsApi.md#show_stream_target_metrics_current) | **GET** /stream_targets/{id}/metrics/current | Fetch current health metrics for an active Wowza ultra low latency stream target
[**show_stream_target_metrics_historic**](StreamTargetsApi.md#show_stream_target_metrics_historic) | **GET** /stream_targets/{id}/metrics/historic | Fetch historic health metrics for a Wowza ultra low latency stream target
[**show_stream_target_property**](StreamTargetsApi.md#show_stream_target_property) | **GET** /stream_targets/{stream_target_id}/properties/{id} | Fetch a property of a stream target
[**show_stream_target_token_auth**](StreamTargetsApi.md#show_stream_target_token_auth) | **GET** /stream_targets/{stream_target_id}/token_auth | Fetch token authorization for a stream target
[**update_stream_target**](StreamTargetsApi.md#update_stream_target) | **PATCH** /stream_targets/{id} | Update a stream target
[**update_stream_target_geoblock**](StreamTargetsApi.md#update_stream_target_geoblock) | **PATCH** /stream_targets/{stream_target_id}/geoblock | Update geo-blocking for a stream target
[**update_stream_target_token_auth**](StreamTargetsApi.md#update_stream_target_token_auth) | **PATCH** /stream_targets/{stream_target_id}/token_auth | Update token authorization for a stream target


# **add_stream_target**
> CreateStreamTarget200Response add_stream_target(stream_target)

Deprecated operation

POST /stream_targets/add/ is deprecated. To add a stream target, use POST /stream_targets instead.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_stream_target200_response import CreateStreamTarget200Response
from openapi_client.models.wowza_stream_target_input import WowzaStreamTargetInput
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    stream_target = openapi_client.WowzaStreamTargetInput() # WowzaStreamTargetInput | Provide the details of the stream target to add in the body of the request.

    try:
        # Deprecated operation
        api_response = api_instance.add_stream_target(stream_target)
        print("The response of StreamTargetsApi->add_stream_target:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->add_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_target** | [**WowzaStreamTargetInput**](WowzaStreamTargetInput.md)| Provide the details of the stream target to add in the body of the request. | 

### Return type

[**CreateStreamTarget200Response**](CreateStreamTarget200Response.md)

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

# **create_stream_target**
> CreateStreamTarget200Response create_stream_target(stream_target)

Create a stream target

This operation creates a stream target. There are three types of targets that you can create: <strong>CustomStreamTarget</strong> for an an external, third-party destination; <strong>WowzaStreamTarget</strong> for a Wowza CDN target; or <strong>UltraLowLatencyStreamTarget</strong> for an ultra low latency Wowza CDN target. The availability of many parameters depends on the type of target you create.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_stream_target200_response import CreateStreamTarget200Response
from openapi_client.models.stream_target_create_input import StreamTargetCreateInput
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    stream_target = openapi_client.StreamTargetCreateInput() # StreamTargetCreateInput | Provide the details of the stream target to create in the body of the request.

    try:
        # Create a stream target
        api_response = api_instance.create_stream_target(stream_target)
        print("The response of StreamTargetsApi->create_stream_target:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->create_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_target** | [**StreamTargetCreateInput**](StreamTargetCreateInput.md)| Provide the details of the stream target to create in the body of the request. | 

### Return type

[**CreateStreamTarget200Response**](CreateStreamTarget200Response.md)

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

# **create_stream_target_geoblock**
> ShowStreamTargetGeoblock200Response create_stream_target_geoblock(stream_target_id, geoblock)

Create geo-blocking for a stream target

This operation allows you to block or whitelist viewing of a stream target by geographic location. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can be geo-blocked. For more information see the technical article [How to geo-block stream targets by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-geo-block-stream-targets-by-using-the-wowza-streaming-cloud-rest-api).

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.geoblock_create_input import GeoblockCreateInput
from openapi_client.models.show_stream_target_geoblock200_response import ShowStreamTargetGeoblock200Response
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.
    geoblock = openapi_client.GeoblockCreateInput() # GeoblockCreateInput | Provide the details of the geo-blocking to create in the body of the request.

    try:
        # Create geo-blocking for a stream target
        api_response = api_instance.create_stream_target_geoblock(stream_target_id, geoblock)
        print("The response of StreamTargetsApi->create_stream_target_geoblock:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->create_stream_target_geoblock: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 
 **geoblock** | [**GeoblockCreateInput**](GeoblockCreateInput.md)| Provide the details of the geo-blocking to create in the body of the request. | 

### Return type

[**ShowStreamTargetGeoblock200Response**](ShowStreamTargetGeoblock200Response.md)

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

# **create_stream_target_property**
> CreateStreamTargetProperty200Response create_stream_target_property(stream_target_id, var_property)

Create a property for a stream target

This operation creates a property for a stream target. Properties can be applied to a <strong>CustomStreamTarget</strong> or <strong>WowzaStreamTarget</strong> whose <em>provider</em> is <strong>akamai_cupertino</strong>. For more information see the technical article [How to set advanced properties by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-set-advanced-properties-by-using-the-wowza-streaming-cloud-rest-api).

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_stream_target_property200_response import CreateStreamTargetProperty200Response
from openapi_client.models.stream_target_property_create_input import StreamTargetPropertyCreateInput
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.
    var_property = openapi_client.StreamTargetPropertyCreateInput() # StreamTargetPropertyCreateInput | Provide the details of the property to create in the body of the request.

    try:
        # Create a property for a stream target
        api_response = api_instance.create_stream_target_property(stream_target_id, var_property)
        print("The response of StreamTargetsApi->create_stream_target_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->create_stream_target_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 
 **var_property** | [**StreamTargetPropertyCreateInput**](StreamTargetPropertyCreateInput.md)| Provide the details of the property to create in the body of the request. | 

### Return type

[**CreateStreamTargetProperty200Response**](CreateStreamTargetProperty200Response.md)

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

# **create_stream_target_token_auth**
> ShowStreamTargetTokenAuth200Response create_stream_target_token_auth(stream_target_id, token_auth)

Create token authorization for a stream target

This operation creates token authorization for a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can use token authorization. For more information see the technical article [How to protect stream targets with token authorization by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-protect-streams-with-token-authorization-by-using-the-wowza-streaming-cloud-rest-api).

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_stream_target_token_auth200_response import ShowStreamTargetTokenAuth200Response
from openapi_client.models.token_auth_create_input import TokenAuthCreateInput
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.
    token_auth = openapi_client.TokenAuthCreateInput() # TokenAuthCreateInput | Provide the details of the token authorization to create in the body of the request.

    try:
        # Create token authorization for a stream target
        api_response = api_instance.create_stream_target_token_auth(stream_target_id, token_auth)
        print("The response of StreamTargetsApi->create_stream_target_token_auth:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->create_stream_target_token_auth: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 
 **token_auth** | [**TokenAuthCreateInput**](TokenAuthCreateInput.md)| Provide the details of the token authorization to create in the body of the request. | 

### Return type

[**ShowStreamTargetTokenAuth200Response**](ShowStreamTargetTokenAuth200Response.md)

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

# **delete_stream_target**
> delete_stream_target(id)

Delete a stream target

This operation deletes a stream target.

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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the stream target.

    try:
        # Delete a stream target
        api_instance.delete_stream_target(id)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->delete_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the stream target. | 

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

# **delete_stream_target_property**
> delete_stream_target_property(stream_target_id, id)

Delete a stream target property

This operation removes a property from a stream target.

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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.
    id = 'id_example' # str | The unique string that identifies the stream target property. The string contains the <em>section</em> and the <em>key</em>, connected by a dash. For example, <strong>hls-chunkSize</strong>.

    try:
        # Delete a stream target property
        api_instance.delete_stream_target_property(stream_target_id, id)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->delete_stream_target_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 
 **id** | **str**| The unique string that identifies the stream target property. The string contains the &lt;em&gt;section&lt;/em&gt; and the &lt;em&gt;key&lt;/em&gt;, connected by a dash. For example, &lt;strong&gt;hls-chunkSize&lt;/strong&gt;. | 

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

# **list_stream_target_properties**
> StreamTargetProperties list_stream_target_properties(stream_target_id)

Fetch all properties of a stream target

This operation shows the details of all of the properties assigned to a specific stream target. Properties can be applied to a <strong>CustomStreamTarget</strong> or <strong>WowzaStreamTarget</strong> whose <em>provider</em> is <strong>akamai_cupertino</strong>.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.stream_target_properties import StreamTargetProperties
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.

    try:
        # Fetch all properties of a stream target
        api_response = api_instance.list_stream_target_properties(stream_target_id)
        print("The response of StreamTargetsApi->list_stream_target_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->list_stream_target_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 

### Return type

[**StreamTargetProperties**](StreamTargetProperties.md)

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
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_stream_targets**
> StreamTargets list_stream_targets(page=page, per_page=per_page)

Fetch all stream targets

This operation lists the details of all of your stream targets.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.stream_targets import StreamTargets
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    page = 56 # int | Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results. (optional)
    per_page = 56 # int | For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>. (optional)

    try:
        # Fetch all stream targets
        api_response = api_instance.list_stream_targets(page=page, per_page=per_page)
        print("The response of StreamTargetsApi->list_stream_targets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->list_stream_targets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. &lt;strong&gt;Next&lt;/strong&gt; and &lt;strong&gt;Previous&lt;/strong&gt; links allow you to navigate multiple pages of results. Omit the &lt;em&gt;page&lt;/em&gt; parameter or specify an integer that&#39;s less than or equal to &lt;strong&gt;0&lt;/strong&gt; to view all (unpaginated) results. | [optional] 
 **per_page** | **int**| For use with the &lt;em&gt;page&lt;/em&gt; parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is &lt;strong&gt;10&lt;/strong&gt;. | [optional] 

### Return type

[**StreamTargets**](StreamTargets.md)

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

# **regenerate_connection_code_stream_target**
> RegenerateConnectionCodeStreamTarget200Response regenerate_connection_code_stream_target(id)

Regenerate the connection code for a stream target

This operation regenerates the connection code of a stream target.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.regenerate_connection_code_stream_target200_response import RegenerateConnectionCodeStreamTarget200Response
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the stream target.

    try:
        # Regenerate the connection code for a stream target
        api_response = api_instance.regenerate_connection_code_stream_target(id)
        print("The response of StreamTargetsApi->regenerate_connection_code_stream_target:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->regenerate_connection_code_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the stream target. | 

### Return type

[**RegenerateConnectionCodeStreamTarget200Response**](RegenerateConnectionCodeStreamTarget200Response.md)

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
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show_stream_target**
> CreateStreamTarget200Response show_stream_target(id)

Fetch a stream target

This operation shows details of a specific stream target.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_stream_target200_response import CreateStreamTarget200Response
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the stream target.

    try:
        # Fetch a stream target
        api_response = api_instance.show_stream_target(id)
        print("The response of StreamTargetsApi->show_stream_target:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->show_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the stream target. | 

### Return type

[**CreateStreamTarget200Response**](CreateStreamTarget200Response.md)

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

# **show_stream_target_geoblock**
> ShowStreamTargetGeoblock200Response show_stream_target_geoblock(stream_target_id)

Fetch geo-blocking for a stream target

This operation shows the details of geo-blocking applied to a specific stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can be geo-blocked.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_stream_target_geoblock200_response import ShowStreamTargetGeoblock200Response
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.

    try:
        # Fetch geo-blocking for a stream target
        api_response = api_instance.show_stream_target_geoblock(stream_target_id)
        print("The response of StreamTargetsApi->show_stream_target_geoblock:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->show_stream_target_geoblock: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 

### Return type

[**ShowStreamTargetGeoblock200Response**](ShowStreamTargetGeoblock200Response.md)

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

# **show_stream_target_metrics_current**
> ShowStreamTargetMetricsCurrent200Response show_stream_target_metrics_current(id)

Fetch current health metrics for an active Wowza ultra low latency stream target

This operation returns a snapshot of the current connection and throughput details for an active target whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The interval for current metrics is 30 seconds from the moment of the query.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_stream_target_metrics_current200_response import ShowStreamTargetMetricsCurrent200Response
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the stream target.

    try:
        # Fetch current health metrics for an active Wowza ultra low latency stream target
        api_response = api_instance.show_stream_target_metrics_current(id)
        print("The response of StreamTargetsApi->show_stream_target_metrics_current:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->show_stream_target_metrics_current: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the stream target. | 

### Return type

[**ShowStreamTargetMetricsCurrent200Response**](ShowStreamTargetMetricsCurrent200Response.md)

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

# **show_stream_target_metrics_historic**
> ShowStreamTargetMetricsHistoric200Response show_stream_target_metrics_historic(id, var_from=var_from, to=to, interval=interval)

Fetch historic health metrics for a Wowza ultra low latency stream target

This operation shows historic connection and throughput details for target whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_stream_target_metrics_historic200_response import ShowStreamTargetMetricsHistoric200Response
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the stream target.
    var_from = 'var_from_example' # str | The start of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC. (optional)
    to = 'to_example' # str | The end of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC. (optional)
    interval = 'interval_example' # str | The length of time for a block of metrics. The default is **10m** (10 minutes). (optional)

    try:
        # Fetch historic health metrics for a Wowza ultra low latency stream target
        api_response = api_instance.show_stream_target_metrics_historic(id, var_from=var_from, to=to, interval=interval)
        print("The response of StreamTargetsApi->show_stream_target_metrics_historic:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->show_stream_target_metrics_historic: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the stream target. | 
 **var_from** | **str**| The start of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of &lt;strong&gt;YYYY-MM-DDTHH:MM:SSZ&lt;/strong&gt; where &lt;strong&gt;HH&lt;/strong&gt; is a 24-hour clock in UTC. | [optional] 
 **to** | **str**| The end of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of &lt;strong&gt;YYYY-MM-DDTHH:MM:SSZ&lt;/strong&gt; where &lt;strong&gt;HH&lt;/strong&gt; is a 24-hour clock in UTC. | [optional] 
 **interval** | **str**| The length of time for a block of metrics. The default is **10m** (10 minutes). | [optional] 

### Return type

[**ShowStreamTargetMetricsHistoric200Response**](ShowStreamTargetMetricsHistoric200Response.md)

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

# **show_stream_target_property**
> CreateStreamTargetProperty200Response show_stream_target_property(stream_target_id, id)

Fetch a property of a stream target

This operation shows the details of a specific property assigned to a specific stream target. Properties can be applied to a <strong>CustomStreamTarget</strong> or <strong>WowzaStreamTarget</strong> whose <em>provider</em> is <strong>akamai_cupertino</strong>.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_stream_target_property200_response import CreateStreamTargetProperty200Response
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.
    id = 'id_example' # str | The unique string that identifies the stream target property. The string contains the <em>section</em> and the <em>key</em>, connected by a dash. For example, <strong>hls-chunkSize</strong>.

    try:
        # Fetch a property of a stream target
        api_response = api_instance.show_stream_target_property(stream_target_id, id)
        print("The response of StreamTargetsApi->show_stream_target_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->show_stream_target_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 
 **id** | **str**| The unique string that identifies the stream target property. The string contains the &lt;em&gt;section&lt;/em&gt; and the &lt;em&gt;key&lt;/em&gt;, connected by a dash. For example, &lt;strong&gt;hls-chunkSize&lt;/strong&gt;. | 

### Return type

[**CreateStreamTargetProperty200Response**](CreateStreamTargetProperty200Response.md)

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

# **show_stream_target_token_auth**
> ShowStreamTargetTokenAuth200Response show_stream_target_token_auth(stream_target_id)

Fetch token authorization for a stream target

This operation shows the details of the token authorization applied to a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can use token authorization.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_stream_target_token_auth200_response import ShowStreamTargetTokenAuth200Response
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.

    try:
        # Fetch token authorization for a stream target
        api_response = api_instance.show_stream_target_token_auth(stream_target_id)
        print("The response of StreamTargetsApi->show_stream_target_token_auth:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->show_stream_target_token_auth: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 

### Return type

[**ShowStreamTargetTokenAuth200Response**](ShowStreamTargetTokenAuth200Response.md)

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

# **update_stream_target**
> CreateStreamTarget200Response update_stream_target(id, stream_target)

Update a stream target

This operation updates a stream target.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_stream_target200_response import CreateStreamTarget200Response
from openapi_client.models.stream_target_update_input import StreamTargetUpdateInput
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the stream target.
    stream_target = openapi_client.StreamTargetUpdateInput() # StreamTargetUpdateInput | Provide the details of the stream target to update in the body of the request.

    try:
        # Update a stream target
        api_response = api_instance.update_stream_target(id, stream_target)
        print("The response of StreamTargetsApi->update_stream_target:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->update_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the stream target. | 
 **stream_target** | [**StreamTargetUpdateInput**](StreamTargetUpdateInput.md)| Provide the details of the stream target to update in the body of the request. | 

### Return type

[**CreateStreamTarget200Response**](CreateStreamTarget200Response.md)

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

# **update_stream_target_geoblock**
> ShowStreamTargetGeoblock200Response update_stream_target_geoblock(stream_target_id, geoblock)

Update geo-blocking for a stream target

This operation updates the geo-blocking applied to a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can be geo-blocked.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.geoblock_update_input import GeoblockUpdateInput
from openapi_client.models.show_stream_target_geoblock200_response import ShowStreamTargetGeoblock200Response
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.
    geoblock = openapi_client.GeoblockUpdateInput() # GeoblockUpdateInput | Provide the details of the geo-blocking to update in the body of the request.

    try:
        # Update geo-blocking for a stream target
        api_response = api_instance.update_stream_target_geoblock(stream_target_id, geoblock)
        print("The response of StreamTargetsApi->update_stream_target_geoblock:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->update_stream_target_geoblock: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 
 **geoblock** | [**GeoblockUpdateInput**](GeoblockUpdateInput.md)| Provide the details of the geo-blocking to update in the body of the request. | 

### Return type

[**ShowStreamTargetGeoblock200Response**](ShowStreamTargetGeoblock200Response.md)

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

# **update_stream_target_token_auth**
> ShowStreamTargetTokenAuth200Response update_stream_target_token_auth(stream_target_id, token_auth)

Update token authorization for a stream target

This operation updates the token authorization applied to a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can use token authorization.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_stream_target_token_auth200_response import ShowStreamTargetTokenAuth200Response
from openapi_client.models.token_auth_update_input import TokenAuthUpdateInput
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
    api_instance = openapi_client.StreamTargetsApi(api_client)
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.
    token_auth = openapi_client.TokenAuthUpdateInput() # TokenAuthUpdateInput | Provide the details of the token authorization to update in the body of the request.

    try:
        # Update token authorization for a stream target
        api_response = api_instance.update_stream_target_token_auth(stream_target_id, token_auth)
        print("The response of StreamTargetsApi->update_stream_target_token_auth:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamTargetsApi->update_stream_target_token_auth: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 
 **token_auth** | [**TokenAuthUpdateInput**](TokenAuthUpdateInput.md)| Provide the details of the token authorization to update in the body of the request. | 

### Return type

[**ShowStreamTargetTokenAuth200Response**](ShowStreamTargetTokenAuth200Response.md)

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

