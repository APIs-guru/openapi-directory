# openapi_client.TranscodersApi

All URIs are relative to *https://api-sandbox.cloud.wowza.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_stream_target_to_transcoder_output**](TranscodersApi.md#add_stream_target_to_transcoder_output) | **POST** /transcoders/{transcoder_id}/outputs/{id}/add_stream_target | Deprecated operation
[**create_transcoder**](TranscodersApi.md#create_transcoder) | **POST** /transcoders | Create a transcoder
[**create_transcoder_output**](TranscodersApi.md#create_transcoder_output) | **POST** /transcoders/{transcoder_id}/outputs | Create an output
[**create_transcoder_output_output_stream_target**](TranscodersApi.md#create_transcoder_output_output_stream_target) | **POST** /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets | Create an output stream target
[**create_transcoder_property**](TranscodersApi.md#create_transcoder_property) | **POST** /transcoders/{transcoder_id}/properties | Create a property for a transcoder
[**delete_transcoder**](TranscodersApi.md#delete_transcoder) | **DELETE** /transcoders/{id} | Delete a transcoder
[**delete_transcoder_output**](TranscodersApi.md#delete_transcoder_output) | **DELETE** /transcoders/{transcoder_id}/outputs/{id} | Delete an output
[**delete_transcoder_output_output_stream_target**](TranscodersApi.md#delete_transcoder_output_output_stream_target) | **DELETE** /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{stream_target_id} | Delete an output stream target
[**delete_transcoder_property**](TranscodersApi.md#delete_transcoder_property) | **DELETE** /transcoders/{transcoder_id}/properties/{id} | Delete a transcoder&#39;s property
[**disable_all_stream_targets_transcoder**](TranscodersApi.md#disable_all_stream_targets_transcoder) | **PUT** /transcoders/{id}/disable_all_stream_targets | Disable a transcoder&#39;s stream targets
[**disable_transcoder_output_output_stream_target**](TranscodersApi.md#disable_transcoder_output_output_stream_target) | **PUT** /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{stream_target_id}/disable | Disable an output stream target
[**enable_all_stream_targets_transcoder**](TranscodersApi.md#enable_all_stream_targets_transcoder) | **PUT** /transcoders/{id}/enable_all_stream_targets | Enable a transcoder&#39;s stream targets
[**enable_transcoder_output_output_stream_target**](TranscodersApi.md#enable_transcoder_output_output_stream_target) | **PUT** /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{stream_target_id}/enable | Enable an output stream target
[**index_uptimes**](TranscodersApi.md#index_uptimes) | **GET** /transcoders/{transcoder_id}/uptimes | Fetch all uptime records for a transcoder
[**list_transcoder_output_output_stream_targets**](TranscodersApi.md#list_transcoder_output_output_stream_targets) | **GET** /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets | Fetch all output stream targets of an output of a transcoder
[**list_transcoder_outputs**](TranscodersApi.md#list_transcoder_outputs) | **GET** /transcoders/{transcoder_id}/outputs | Fetch all outputs of a transcoder
[**list_transcoder_properties**](TranscodersApi.md#list_transcoder_properties) | **GET** /transcoders/{transcoder_id}/properties | Fetch a transcoder&#39;s properties
[**list_transcoder_recordings**](TranscodersApi.md#list_transcoder_recordings) | **GET** /transcoders/{id}/recordings | Fetch a transcoder&#39;s recordings
[**list_transcoder_schedules**](TranscodersApi.md#list_transcoder_schedules) | **GET** /transcoders/{id}/schedules | Fetch transcoder&#39;s schedules
[**list_transcoders**](TranscodersApi.md#list_transcoders) | **GET** /transcoders | Fetch all transcoders
[**remove_stream_target_to_transcoder_output**](TranscodersApi.md#remove_stream_target_to_transcoder_output) | **DELETE** /transcoders/{transcoder_id}/outputs/{id}/remove_stream_target | Deprecated operation
[**reset_transcoder**](TranscodersApi.md#reset_transcoder) | **PUT** /transcoders/{id}/reset | Reset a transcoder
[**restart_transcoder_output_output_stream_target**](TranscodersApi.md#restart_transcoder_output_output_stream_target) | **PUT** /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{stream_target_id}/restart | Restart an output stream target
[**show_transcoder**](TranscodersApi.md#show_transcoder) | **GET** /transcoders/{id} | Fetch a transcoder
[**show_transcoder_output**](TranscodersApi.md#show_transcoder_output) | **GET** /transcoders/{transcoder_id}/outputs/{id} | Fetch an output
[**show_transcoder_output_output_stream_target**](TranscodersApi.md#show_transcoder_output_output_stream_target) | **GET** /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{stream_target_id} | Fetch an output stream target
[**show_transcoder_property**](TranscodersApi.md#show_transcoder_property) | **GET** /transcoders/{transcoder_id}/properties/{id} | Fetch a property for a transcoder
[**show_transcoder_state**](TranscodersApi.md#show_transcoder_state) | **GET** /transcoders/{id}/state | Fetch the state and uptime ID of a transcoder
[**show_transcoder_stats**](TranscodersApi.md#show_transcoder_stats) | **GET** /transcoders/{id}/stats | Fetch statistics for a current transcoder
[**show_transcoder_thumbnail_url**](TranscodersApi.md#show_transcoder_thumbnail_url) | **GET** /transcoders/{id}/thumbnail_url | Fetch the thumbnail URL of a transcoder
[**show_uptime**](TranscodersApi.md#show_uptime) | **GET** /transcoders/{transcoder_id}/uptimes/{id} | Fetch an uptime record
[**show_uptime_metrics_current**](TranscodersApi.md#show_uptime_metrics_current) | **GET** /transcoders/{transcoder_id}/uptimes/{id}/metrics/current | Fetch current stream health metrics for an active transcoder
[**show_uptime_metrics_historic**](TranscodersApi.md#show_uptime_metrics_historic) | **GET** /transcoders/{transcoder_id}/uptimes/{id}/metrics/historic | Fetch historic stream health metrics for a transcoder
[**start_transcoder**](TranscodersApi.md#start_transcoder) | **PUT** /transcoders/{id}/start | Start a transcoder
[**stop_transcoder**](TranscodersApi.md#stop_transcoder) | **PUT** /transcoders/{id}/stop | Stop a transcoder
[**update_transcoder**](TranscodersApi.md#update_transcoder) | **PATCH** /transcoders/{id} | Update a transcoder
[**update_transcoder_output**](TranscodersApi.md#update_transcoder_output) | **PATCH** /transcoders/{transcoder_id}/outputs/{id} | Update an output
[**update_transcoder_output_output_stream_target**](TranscodersApi.md#update_transcoder_output_output_stream_target) | **PATCH** /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{stream_target_id} | Update an output stream target


# **add_stream_target_to_transcoder_output**
> AddStreamTargetToTranscoderOutput200Response add_stream_target_to_transcoder_output(transcoder_id, id, output_stream_target)

Deprecated operation

The operation POST /transcoders/{transcoder_id}/outputs/{id}/add_stream_target is deprecated. Use POST /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets to add an existing stream target to an output.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.add_stream_target_to_transcoder_output200_response import AddStreamTargetToTranscoderOutput200Response
from openapi_client.models.output_add_stream_target_input import OutputAddStreamTargetInput
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    id = 'id_example' # str | The unique alphanumeric string that identifies the output rendition.
    output_stream_target = openapi_client.OutputAddStreamTargetInput() # OutputAddStreamTargetInput | Provide the details of the stream target to add in the body of the request.

    try:
        # Deprecated operation
        api_response = api_instance.add_stream_target_to_transcoder_output(transcoder_id, id, output_stream_target)
        print("The response of TranscodersApi->add_stream_target_to_transcoder_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->add_stream_target_to_transcoder_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **id** | **str**| The unique alphanumeric string that identifies the output rendition. | 
 **output_stream_target** | [**OutputAddStreamTargetInput**](OutputAddStreamTargetInput.md)| Provide the details of the stream target to add in the body of the request. | 

### Return type

[**AddStreamTargetToTranscoderOutput200Response**](AddStreamTargetToTranscoderOutput200Response.md)

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

# **create_transcoder**
> CreateTranscoder200Response create_transcoder(transcoder)

Create a transcoder

This operation creates a transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_transcoder200_response import CreateTranscoder200Response
from openapi_client.models.transcoder_create_input import TranscoderCreateInput
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder = openapi_client.TranscoderCreateInput() # TranscoderCreateInput | Provide the details of the transcoder to create in the body of the request.

    try:
        # Create a transcoder
        api_response = api_instance.create_transcoder(transcoder)
        print("The response of TranscodersApi->create_transcoder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->create_transcoder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder** | [**TranscoderCreateInput**](TranscoderCreateInput.md)| Provide the details of the transcoder to create in the body of the request. | 

### Return type

[**CreateTranscoder200Response**](CreateTranscoder200Response.md)

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

# **create_transcoder_output**
> CreateTranscoderOutput200Response create_transcoder_output(transcoder_id, output)

Create an output

This operation creates an output rendition for a specific transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_transcoder_output200_response import CreateTranscoderOutput200Response
from openapi_client.models.output_create_input import OutputCreateInput
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    output = openapi_client.OutputCreateInput() # OutputCreateInput | Provide the details of the output rendition to create in the body of the request.

    try:
        # Create an output
        api_response = api_instance.create_transcoder_output(transcoder_id, output)
        print("The response of TranscodersApi->create_transcoder_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->create_transcoder_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **output** | [**OutputCreateInput**](OutputCreateInput.md)| Provide the details of the output rendition to create in the body of the request. | 

### Return type

[**CreateTranscoderOutput200Response**](CreateTranscoderOutput200Response.md)

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

# **create_transcoder_output_output_stream_target**
> AddStreamTargetToTranscoderOutput200Response create_transcoder_output_output_stream_target(transcoder_id, output_id, output_stream_target)

Create an output stream target

This operation creates an output stream target. Targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> can't be added to output renditions.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.add_stream_target_to_transcoder_output200_response import AddStreamTargetToTranscoderOutput200Response
from openapi_client.models.output_stream_target_create_input import OutputStreamTargetCreateInput
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    output_id = 'output_id_example' # str | The unique alphanumeric string that identifies the output rendition.
    output_stream_target = openapi_client.OutputStreamTargetCreateInput() # OutputStreamTargetCreateInput | Provide the details of the output stream target to create in the body of the request. Targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> can't be added to output renditions.

    try:
        # Create an output stream target
        api_response = api_instance.create_transcoder_output_output_stream_target(transcoder_id, output_id, output_stream_target)
        print("The response of TranscodersApi->create_transcoder_output_output_stream_target:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->create_transcoder_output_output_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **output_id** | **str**| The unique alphanumeric string that identifies the output rendition. | 
 **output_stream_target** | [**OutputStreamTargetCreateInput**](OutputStreamTargetCreateInput.md)| Provide the details of the output stream target to create in the body of the request. Targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; can&#39;t be added to output renditions. | 

### Return type

[**AddStreamTargetToTranscoderOutput200Response**](AddStreamTargetToTranscoderOutput200Response.md)

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

# **create_transcoder_property**
> CreateTranscoderProperty200Response create_transcoder_property(transcoder_id, var_property)

Create a property for a transcoder

This operation creates a property for a transcoder. For more information see the technical article [How to set advanced properties by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-set-advanced-properties-by-using-the-wowza-streaming-cloud-rest-api).

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_transcoder_property200_response import CreateTranscoderProperty200Response
from openapi_client.models.transcoder_property_create_input import TranscoderPropertyCreateInput
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    var_property = openapi_client.TranscoderPropertyCreateInput() # TranscoderPropertyCreateInput | Provide the details of the property to create in the body of the request.

    try:
        # Create a property for a transcoder
        api_response = api_instance.create_transcoder_property(transcoder_id, var_property)
        print("The response of TranscodersApi->create_transcoder_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->create_transcoder_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **var_property** | [**TranscoderPropertyCreateInput**](TranscoderPropertyCreateInput.md)| Provide the details of the property to create in the body of the request. | 

### Return type

[**CreateTranscoderProperty200Response**](CreateTranscoderProperty200Response.md)

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

# **delete_transcoder**
> delete_transcoder(id)

Delete a transcoder

This operation deletes a transcoder, including all of its assigned output renditions and stream targets.

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
    api_instance = openapi_client.TranscodersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Delete a transcoder
        api_instance.delete_transcoder(id)
    except Exception as e:
        print("Exception when calling TranscodersApi->delete_transcoder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

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

# **delete_transcoder_output**
> delete_transcoder_output(transcoder_id, id)

Delete an output

This operation deletes an output, including all of its assigned targets.

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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    id = 'id_example' # str | The unique alphanumeric string that identifies the output rendition.

    try:
        # Delete an output
        api_instance.delete_transcoder_output(transcoder_id, id)
    except Exception as e:
        print("Exception when calling TranscodersApi->delete_transcoder_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **id** | **str**| The unique alphanumeric string that identifies the output rendition. | 

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

# **delete_transcoder_output_output_stream_target**
> delete_transcoder_output_output_stream_target(transcoder_id, output_id, stream_target_id)

Delete an output stream target

This operation deletes an output stream target, including all of its assigned targets.

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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    output_id = 'output_id_example' # str | The unique alphanumeric string that identifies the output rendition.
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.

    try:
        # Delete an output stream target
        api_instance.delete_transcoder_output_output_stream_target(transcoder_id, output_id, stream_target_id)
    except Exception as e:
        print("Exception when calling TranscodersApi->delete_transcoder_output_output_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **output_id** | **str**| The unique alphanumeric string that identifies the output rendition. | 
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 

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

# **delete_transcoder_property**
> delete_transcoder_property(transcoder_id, id)

Delete a transcoder's property

This operation deletes a specific property from a specific transcoder.

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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    id = 'id_example' # str | The unique string that identifies the transcoder property. The string contains the section and the key, connected by a dash. For example, cupertino-cupertinoProgramDateTimeOffset.

    try:
        # Delete a transcoder's property
        api_instance.delete_transcoder_property(transcoder_id, id)
    except Exception as e:
        print("Exception when calling TranscodersApi->delete_transcoder_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **id** | **str**| The unique string that identifies the transcoder property. The string contains the section and the key, connected by a dash. For example, cupertino-cupertinoProgramDateTimeOffset. | 

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

# **disable_all_stream_targets_transcoder**
> DisableAllStreamTargetsTranscoder200Response disable_all_stream_targets_transcoder(id)

Disable a transcoder's stream targets

This operation disables all of the stream targets assigned to a specific transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.disable_all_stream_targets_transcoder200_response import DisableAllStreamTargetsTranscoder200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Disable a transcoder's stream targets
        api_response = api_instance.disable_all_stream_targets_transcoder(id)
        print("The response of TranscodersApi->disable_all_stream_targets_transcoder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->disable_all_stream_targets_transcoder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

### Return type

[**DisableAllStreamTargetsTranscoder200Response**](DisableAllStreamTargetsTranscoder200Response.md)

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

# **disable_transcoder_output_output_stream_target**
> DisableTranscoderOutputOutputStreamTarget200Response disable_transcoder_output_output_stream_target(transcoder_id, output_id, stream_target_id)

Disable an output stream target

This operation disables an output stream target.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.disable_transcoder_output_output_stream_target200_response import DisableTranscoderOutputOutputStreamTarget200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    output_id = 'output_id_example' # str | The unique alphanumeric string that identifies the output rendition.
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.

    try:
        # Disable an output stream target
        api_response = api_instance.disable_transcoder_output_output_stream_target(transcoder_id, output_id, stream_target_id)
        print("The response of TranscodersApi->disable_transcoder_output_output_stream_target:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->disable_transcoder_output_output_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **output_id** | **str**| The unique alphanumeric string that identifies the output rendition. | 
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 

### Return type

[**DisableTranscoderOutputOutputStreamTarget200Response**](DisableTranscoderOutputOutputStreamTarget200Response.md)

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

# **enable_all_stream_targets_transcoder**
> DisableAllStreamTargetsTranscoder200Response enable_all_stream_targets_transcoder(id)

Enable a transcoder's stream targets

This operation enables all of the stream targets assigned to a specific transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.disable_all_stream_targets_transcoder200_response import DisableAllStreamTargetsTranscoder200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Enable a transcoder's stream targets
        api_response = api_instance.enable_all_stream_targets_transcoder(id)
        print("The response of TranscodersApi->enable_all_stream_targets_transcoder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->enable_all_stream_targets_transcoder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

### Return type

[**DisableAllStreamTargetsTranscoder200Response**](DisableAllStreamTargetsTranscoder200Response.md)

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

# **enable_transcoder_output_output_stream_target**
> EnableTranscoderOutputOutputStreamTarget200Response enable_transcoder_output_output_stream_target(transcoder_id, output_id, stream_target_id)

Enable an output stream target

This operation enables an output stream target.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.enable_transcoder_output_output_stream_target200_response import EnableTranscoderOutputOutputStreamTarget200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    output_id = 'output_id_example' # str | The unique alphanumeric string that identifies the output rendition.
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.

    try:
        # Enable an output stream target
        api_response = api_instance.enable_transcoder_output_output_stream_target(transcoder_id, output_id, stream_target_id)
        print("The response of TranscodersApi->enable_transcoder_output_output_stream_target:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->enable_transcoder_output_output_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **output_id** | **str**| The unique alphanumeric string that identifies the output rendition. | 
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 

### Return type

[**EnableTranscoderOutputOutputStreamTarget200Response**](EnableTranscoderOutputOutputStreamTarget200Response.md)

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

# **index_uptimes**
> Uptimes index_uptimes(transcoder_id, page=page, per_page=per_page)

Fetch all uptime records for a transcoder

This operation shows all of the uptime records for a specific transcoder. An <em>uptime record</em> identifies a specific transcoding session.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.uptimes import Uptimes
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    page = 56 # int | Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results. (optional)
    per_page = 56 # int | For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>. (optional)

    try:
        # Fetch all uptime records for a transcoder
        api_response = api_instance.index_uptimes(transcoder_id, page=page, per_page=per_page)
        print("The response of TranscodersApi->index_uptimes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->index_uptimes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **page** | **int**| Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. &lt;strong&gt;Next&lt;/strong&gt; and &lt;strong&gt;Previous&lt;/strong&gt; links allow you to navigate multiple pages of results. Omit the &lt;em&gt;page&lt;/em&gt; parameter or specify an integer that&#39;s less than or equal to &lt;strong&gt;0&lt;/strong&gt; to view all (unpaginated) results. | [optional] 
 **per_page** | **int**| For use with the &lt;em&gt;page&lt;/em&gt; parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is &lt;strong&gt;10&lt;/strong&gt;. | [optional] 

### Return type

[**Uptimes**](Uptimes.md)

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

# **list_transcoder_output_output_stream_targets**
> OutputStreamTarget list_transcoder_output_output_stream_targets(transcoder_id, output_id)

Fetch all output stream targets of an output of a transcoder

This operation shows the details of all of the output stream targets of an output of a transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.output_stream_target import OutputStreamTarget
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    output_id = 'output_id_example' # str | The unique alphanumeric string that identifies the output rendition.

    try:
        # Fetch all output stream targets of an output of a transcoder
        api_response = api_instance.list_transcoder_output_output_stream_targets(transcoder_id, output_id)
        print("The response of TranscodersApi->list_transcoder_output_output_stream_targets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->list_transcoder_output_output_stream_targets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **output_id** | **str**| The unique alphanumeric string that identifies the output rendition. | 

### Return type

[**OutputStreamTarget**](OutputStreamTarget.md)

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

# **list_transcoder_outputs**
> Outputs list_transcoder_outputs(transcoder_id)

Fetch all outputs of a transcoder

This operation shows the details of all of the output renditions of a specific transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.outputs import Outputs
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Fetch all outputs of a transcoder
        api_response = api_instance.list_transcoder_outputs(transcoder_id)
        print("The response of TranscodersApi->list_transcoder_outputs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->list_transcoder_outputs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

### Return type

[**Outputs**](Outputs.md)

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

# **list_transcoder_properties**
> TranscoderProperties list_transcoder_properties(transcoder_id)

Fetch a transcoder's properties

This operation shows all of the properties of a specific transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.transcoder_properties import TranscoderProperties
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Fetch a transcoder's properties
        api_response = api_instance.list_transcoder_properties(transcoder_id)
        print("The response of TranscodersApi->list_transcoder_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->list_transcoder_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

### Return type

[**TranscoderProperties**](TranscoderProperties.md)

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

# **list_transcoder_recordings**
> ListTranscoderRecordings200Response list_transcoder_recordings(id)

Fetch a transcoder's recordings

This operation shows the details of all of the recordings for a specific transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.list_transcoder_recordings200_response import ListTranscoderRecordings200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Fetch a transcoder's recordings
        api_response = api_instance.list_transcoder_recordings(id)
        print("The response of TranscodersApi->list_transcoder_recordings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->list_transcoder_recordings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

### Return type

[**ListTranscoderRecordings200Response**](ListTranscoderRecordings200Response.md)

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

# **list_transcoder_schedules**
> ListTranscoderSchedules200Response list_transcoder_schedules(id)

Fetch transcoder's schedules

This operation shows the details of all of the schedules for a specific transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.list_transcoder_schedules200_response import ListTranscoderSchedules200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Fetch transcoder's schedules
        api_response = api_instance.list_transcoder_schedules(id)
        print("The response of TranscodersApi->list_transcoder_schedules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->list_transcoder_schedules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

### Return type

[**ListTranscoderSchedules200Response**](ListTranscoderSchedules200Response.md)

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

# **list_transcoders**
> Transcoders list_transcoders(page=page, per_page=per_page)

Fetch all transcoders

This operation shows the details of all of your transcoders.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.transcoders import Transcoders
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
    api_instance = openapi_client.TranscodersApi(api_client)
    page = 56 # int | Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results. (optional)
    per_page = 56 # int | For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>. (optional)

    try:
        # Fetch all transcoders
        api_response = api_instance.list_transcoders(page=page, per_page=per_page)
        print("The response of TranscodersApi->list_transcoders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->list_transcoders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. &lt;strong&gt;Next&lt;/strong&gt; and &lt;strong&gt;Previous&lt;/strong&gt; links allow you to navigate multiple pages of results. Omit the &lt;em&gt;page&lt;/em&gt; parameter or specify an integer that&#39;s less than or equal to &lt;strong&gt;0&lt;/strong&gt; to view all (unpaginated) results. | [optional] 
 **per_page** | **int**| For use with the &lt;em&gt;page&lt;/em&gt; parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is &lt;strong&gt;10&lt;/strong&gt;. | [optional] 

### Return type

[**Transcoders**](Transcoders.md)

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

# **remove_stream_target_to_transcoder_output**
> remove_stream_target_to_transcoder_output(transcoder_id, id, output_stream_target)

Deprecated operation

The operation DELETE /transcoders/{transcoder_id}/outputs/{id}/remove_stream_target is deprecated. Use DELETE /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{id} to remove a stream target from an output.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.output_remove_stream_target_input import OutputRemoveStreamTargetInput
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    id = 'id_example' # str | The unique alphanumeric string that identifies the output rendition.
    output_stream_target = openapi_client.OutputRemoveStreamTargetInput() # OutputRemoveStreamTargetInput | Provide the details of the stream target to remove in the body of the request.

    try:
        # Deprecated operation
        api_instance.remove_stream_target_to_transcoder_output(transcoder_id, id, output_stream_target)
    except Exception as e:
        print("Exception when calling TranscodersApi->remove_stream_target_to_transcoder_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **id** | **str**| The unique alphanumeric string that identifies the output rendition. | 
 **output_stream_target** | [**OutputRemoveStreamTargetInput**](OutputRemoveStreamTargetInput.md)| Provide the details of the stream target to remove in the body of the request. | 

### Return type

void (empty response body)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: application/json
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

# **reset_transcoder**
> ResetTranscoder200Response reset_transcoder(id)

Reset a transcoder

This operation resets a transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.reset_transcoder200_response import ResetTranscoder200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Reset a transcoder
        api_response = api_instance.reset_transcoder(id)
        print("The response of TranscodersApi->reset_transcoder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->reset_transcoder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

### Return type

[**ResetTranscoder200Response**](ResetTranscoder200Response.md)

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

# **restart_transcoder_output_output_stream_target**
> RestartTranscoderOutputOutputStreamTarget200Response restart_transcoder_output_output_stream_target(transcoder_id, output_id, stream_target_id)

Restart an output stream target

This operation restarts an output stream target.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.restart_transcoder_output_output_stream_target200_response import RestartTranscoderOutputOutputStreamTarget200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    output_id = 'output_id_example' # str | The unique alphanumeric string that identifies the output rendition.
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.

    try:
        # Restart an output stream target
        api_response = api_instance.restart_transcoder_output_output_stream_target(transcoder_id, output_id, stream_target_id)
        print("The response of TranscodersApi->restart_transcoder_output_output_stream_target:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->restart_transcoder_output_output_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **output_id** | **str**| The unique alphanumeric string that identifies the output rendition. | 
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 

### Return type

[**RestartTranscoderOutputOutputStreamTarget200Response**](RestartTranscoderOutputOutputStreamTarget200Response.md)

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

# **show_transcoder**
> CreateTranscoder200Response show_transcoder(id)

Fetch a transcoder

This operation shows the details of a specific transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_transcoder200_response import CreateTranscoder200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Fetch a transcoder
        api_response = api_instance.show_transcoder(id)
        print("The response of TranscodersApi->show_transcoder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->show_transcoder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

### Return type

[**CreateTranscoder200Response**](CreateTranscoder200Response.md)

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

# **show_transcoder_output**
> CreateTranscoderOutput200Response show_transcoder_output(transcoder_id, id)

Fetch an output

This operation shows the details of a specific output rendition for a specific transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_transcoder_output200_response import CreateTranscoderOutput200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    id = 'id_example' # str | The unique alphanumeric string that identifies the output rendition.

    try:
        # Fetch an output
        api_response = api_instance.show_transcoder_output(transcoder_id, id)
        print("The response of TranscodersApi->show_transcoder_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->show_transcoder_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **id** | **str**| The unique alphanumeric string that identifies the output rendition. | 

### Return type

[**CreateTranscoderOutput200Response**](CreateTranscoderOutput200Response.md)

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

# **show_transcoder_output_output_stream_target**
> AddStreamTargetToTranscoderOutput200Response show_transcoder_output_output_stream_target(transcoder_id, output_id, stream_target_id)

Fetch an output stream target

This operation shows the details of an output stream target.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.add_stream_target_to_transcoder_output200_response import AddStreamTargetToTranscoderOutput200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    output_id = 'output_id_example' # str | The unique alphanumeric string that identifies the output rendition.
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.

    try:
        # Fetch an output stream target
        api_response = api_instance.show_transcoder_output_output_stream_target(transcoder_id, output_id, stream_target_id)
        print("The response of TranscodersApi->show_transcoder_output_output_stream_target:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->show_transcoder_output_output_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **output_id** | **str**| The unique alphanumeric string that identifies the output rendition. | 
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 

### Return type

[**AddStreamTargetToTranscoderOutput200Response**](AddStreamTargetToTranscoderOutput200Response.md)

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

# **show_transcoder_property**
> CreateTranscoderProperty200Response show_transcoder_property(transcoder_id, id)

Fetch a property for a transcoder

This operation shows the details of a specific property for a specific transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_transcoder_property200_response import CreateTranscoderProperty200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    id = 'id_example' # str | The unique string that identifies the transcoder property. The string contains the section and the key, connected by a dash. For example, cupertino-cupertinoProgramDateTimeOffset.

    try:
        # Fetch a property for a transcoder
        api_response = api_instance.show_transcoder_property(transcoder_id, id)
        print("The response of TranscodersApi->show_transcoder_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->show_transcoder_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **id** | **str**| The unique string that identifies the transcoder property. The string contains the section and the key, connected by a dash. For example, cupertino-cupertinoProgramDateTimeOffset. | 

### Return type

[**CreateTranscoderProperty200Response**](CreateTranscoderProperty200Response.md)

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

# **show_transcoder_state**
> ShowTranscoderState200Response show_transcoder_state(id)

Fetch the state and uptime ID of a transcoder

This operation shows the current state and uptime ID of a transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_transcoder_state200_response import ShowTranscoderState200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Fetch the state and uptime ID of a transcoder
        api_response = api_instance.show_transcoder_state(id)
        print("The response of TranscodersApi->show_transcoder_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->show_transcoder_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

### Return type

[**ShowTranscoderState200Response**](ShowTranscoderState200Response.md)

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

# **show_transcoder_stats**
> ShowTranscoderStats200Response show_transcoder_stats(id)

Fetch statistics for a current transcoder

This operation responds with a hash of metrics (keys) for a currently running transcoder. Each key has a <strong>status</strong>, <strong>text</strong> (description), <strong>units</strong>, and <strong>value</strong>.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_transcoder_stats200_response import ShowTranscoderStats200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Fetch statistics for a current transcoder
        api_response = api_instance.show_transcoder_stats(id)
        print("The response of TranscodersApi->show_transcoder_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->show_transcoder_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

### Return type

[**ShowTranscoderStats200Response**](ShowTranscoderStats200Response.md)

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

# **show_transcoder_thumbnail_url**
> ShowTranscoderThumbnailUrl200Response show_transcoder_thumbnail_url(id)

Fetch the thumbnail URL of a transcoder

This operation shows the thumbnail URL of a started transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_transcoder_thumbnail_url200_response import ShowTranscoderThumbnailUrl200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Fetch the thumbnail URL of a transcoder
        api_response = api_instance.show_transcoder_thumbnail_url(id)
        print("The response of TranscodersApi->show_transcoder_thumbnail_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->show_transcoder_thumbnail_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

### Return type

[**ShowTranscoderThumbnailUrl200Response**](ShowTranscoderThumbnailUrl200Response.md)

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

# **show_uptime**
> Uptime show_uptime(transcoder_id, id)

Fetch an uptime record

This operation shows the details of a specific uptime record for a specific transcoder. An <em>uptime record</em> identifies a transcoding session.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.uptime import Uptime
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    id = 'id_example' # str | The unique alphanumeric string that identifies the uptime record.

    try:
        # Fetch an uptime record
        api_response = api_instance.show_uptime(transcoder_id, id)
        print("The response of TranscodersApi->show_uptime:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->show_uptime: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **id** | **str**| The unique alphanumeric string that identifies the uptime record. | 

### Return type

[**Uptime**](Uptime.md)

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

# **show_uptime_metrics_current**
> ShowUptimeMetricsCurrent200Response show_uptime_metrics_current(transcoder_id, id, fields=fields)

Fetch current stream health metrics for an active transcoder

This operation returns a snapshot of the current source connection and processing details of an active (running) transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_uptime_metrics_current200_response import ShowUptimeMetricsCurrent200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    id = 'id_example' # str | The unique alphanumeric string that identifies the uptime record.
    fields = 'fields_example' # str | A comma-separated list of fields to return. (optional)

    try:
        # Fetch current stream health metrics for an active transcoder
        api_response = api_instance.show_uptime_metrics_current(transcoder_id, id, fields=fields)
        print("The response of TranscodersApi->show_uptime_metrics_current:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->show_uptime_metrics_current: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **id** | **str**| The unique alphanumeric string that identifies the uptime record. | 
 **fields** | **str**| A comma-separated list of fields to return. | [optional] 

### Return type

[**ShowUptimeMetricsCurrent200Response**](ShowUptimeMetricsCurrent200Response.md)

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

# **show_uptime_metrics_historic**
> ShowUptimeMetricsHistoric200Response show_uptime_metrics_historic(transcoder_id, id, fields=fields, var_from=var_from, to=to)

Fetch historic stream health metrics for a transcoder

This operation shows the historic source connection and processing details for a transcoding session (uptime record). The transcoder can be running or stopped. Metrics are recorded every 20 seconds.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_uptime_metrics_historic200_response import ShowUptimeMetricsHistoric200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    id = 'id_example' # str | The unique alphanumeric string that identifies the uptime record.
    fields = 'fields_example' # str | A comma-separated list of fields to return. (optional)
    var_from = 'var_from_example' # str | The start of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC. (optional)
    to = 'to_example' # str | The end of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC. (optional)

    try:
        # Fetch historic stream health metrics for a transcoder
        api_response = api_instance.show_uptime_metrics_historic(transcoder_id, id, fields=fields, var_from=var_from, to=to)
        print("The response of TranscodersApi->show_uptime_metrics_historic:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->show_uptime_metrics_historic: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **id** | **str**| The unique alphanumeric string that identifies the uptime record. | 
 **fields** | **str**| A comma-separated list of fields to return. | [optional] 
 **var_from** | **str**| The start of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of &lt;strong&gt;YYYY-MM-DDTHH:MM:SSZ&lt;/strong&gt; where &lt;strong&gt;HH&lt;/strong&gt; is a 24-hour clock in UTC. | [optional] 
 **to** | **str**| The end of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of &lt;strong&gt;YYYY-MM-DDTHH:MM:SSZ&lt;/strong&gt; where &lt;strong&gt;HH&lt;/strong&gt; is a 24-hour clock in UTC. | [optional] 

### Return type

[**ShowUptimeMetricsHistoric200Response**](ShowUptimeMetricsHistoric200Response.md)

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

# **start_transcoder**
> StartTranscoder200Response start_transcoder(id)

Start a transcoder

This operation starts a transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.start_transcoder200_response import StartTranscoder200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Start a transcoder
        api_response = api_instance.start_transcoder(id)
        print("The response of TranscodersApi->start_transcoder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->start_transcoder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

### Return type

[**StartTranscoder200Response**](StartTranscoder200Response.md)

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

# **stop_transcoder**
> StartTranscoder200Response stop_transcoder(id)

Stop a transcoder

This operation stops a transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.start_transcoder200_response import StartTranscoder200Response
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
    api_instance = openapi_client.TranscodersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the transcoder.

    try:
        # Stop a transcoder
        api_response = api_instance.stop_transcoder(id)
        print("The response of TranscodersApi->stop_transcoder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->stop_transcoder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the transcoder. | 

### Return type

[**StartTranscoder200Response**](StartTranscoder200Response.md)

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

# **update_transcoder**
> CreateTranscoder200Response update_transcoder(id, transcoder)

Update a transcoder

This operation updates a transcoder.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_transcoder200_response import CreateTranscoder200Response
from openapi_client.models.transcoder_update_input import TranscoderUpdateInput
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
    api_instance = openapi_client.TranscodersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the transcoder.
    transcoder = openapi_client.TranscoderUpdateInput() # TranscoderUpdateInput | Provide the details of the transcoder to update in the body of the request.

    try:
        # Update a transcoder
        api_response = api_instance.update_transcoder(id, transcoder)
        print("The response of TranscodersApi->update_transcoder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->update_transcoder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **transcoder** | [**TranscoderUpdateInput**](TranscoderUpdateInput.md)| Provide the details of the transcoder to update in the body of the request. | 

### Return type

[**CreateTranscoder200Response**](CreateTranscoder200Response.md)

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

# **update_transcoder_output**
> CreateTranscoderOutput200Response update_transcoder_output(transcoder_id, id, output)

Update an output

This operation updates an output rendition.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_transcoder_output200_response import CreateTranscoderOutput200Response
from openapi_client.models.output_update_input import OutputUpdateInput
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    id = 'id_example' # str | The unique alphanumeric string that identifies the output rendition.
    output = openapi_client.OutputUpdateInput() # OutputUpdateInput | Provide the details of the output rendition to update in the body of the request.

    try:
        # Update an output
        api_response = api_instance.update_transcoder_output(transcoder_id, id, output)
        print("The response of TranscodersApi->update_transcoder_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->update_transcoder_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **id** | **str**| The unique alphanumeric string that identifies the output rendition. | 
 **output** | [**OutputUpdateInput**](OutputUpdateInput.md)| Provide the details of the output rendition to update in the body of the request. | 

### Return type

[**CreateTranscoderOutput200Response**](CreateTranscoderOutput200Response.md)

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

# **update_transcoder_output_output_stream_target**
> AddStreamTargetToTranscoderOutput200Response update_transcoder_output_output_stream_target(transcoder_id, output_id, stream_target_id, output_stream_target)

Update an output stream target

This operation updates an output stream target.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.add_stream_target_to_transcoder_output200_response import AddStreamTargetToTranscoderOutput200Response
from openapi_client.models.output_stream_target_update_input import OutputStreamTargetUpdateInput
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
    api_instance = openapi_client.TranscodersApi(api_client)
    transcoder_id = 'transcoder_id_example' # str | The unique alphanumeric string that identifies the transcoder.
    output_id = 'output_id_example' # str | The unique alphanumeric string that identifies the output rendition.
    stream_target_id = 'stream_target_id_example' # str | The unique alphanumeric string that identifies the stream target.
    output_stream_target = openapi_client.OutputStreamTargetUpdateInput() # OutputStreamTargetUpdateInput | Provide the details of the output stream target to update in the body of the request.

    try:
        # Update an output stream target
        api_response = api_instance.update_transcoder_output_output_stream_target(transcoder_id, output_id, stream_target_id, output_stream_target)
        print("The response of TranscodersApi->update_transcoder_output_output_stream_target:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscodersApi->update_transcoder_output_output_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoder_id** | **str**| The unique alphanumeric string that identifies the transcoder. | 
 **output_id** | **str**| The unique alphanumeric string that identifies the output rendition. | 
 **stream_target_id** | **str**| The unique alphanumeric string that identifies the stream target. | 
 **output_stream_target** | [**OutputStreamTargetUpdateInput**](OutputStreamTargetUpdateInput.md)| Provide the details of the output stream target to update in the body of the request. | 

### Return type

[**AddStreamTargetToTranscoderOutput200Response**](AddStreamTargetToTranscoderOutput200Response.md)

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

