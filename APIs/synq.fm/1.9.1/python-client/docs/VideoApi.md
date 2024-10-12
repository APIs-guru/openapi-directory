# openapi_client.VideoApi

All URIs are relative to *https://api.synq.fm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](VideoApi.md#create) | **POST** /video/create | Create a new video, optionally setting some metadata fields.
[**details**](VideoApi.md#details) | **POST** /video/details | Return details about a video.
[**query**](VideoApi.md#query) | **POST** /video/query | Perform a JavaScript query to return video objects matching any desired criteria.
[**stream**](VideoApi.md#stream) | **POST** /video/stream | Returns urls for streaming.
[**update**](VideoApi.md#update) | **POST** /video/update | Update a video&#39;s metadata.
[**upload**](VideoApi.md#upload) | **POST** /video/upload | Return parameters needed for uploading a video file.
[**uploader**](VideoApi.md#uploader) | **POST** /video/uploader | Return embeddable url to an uploader widget


# **create**
> VideoObject create(api_key, userdata=userdata)

Create a new video, optionally setting some metadata fields.

Create a new video, optionally setting some metadata fields. You may optionally set some of the metadata associated with the video. Only fields inside the \"userdata\" field can be set.

### Example


```python
import openapi_client
from openapi_client.models.video_object import VideoObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.synq.fm/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.synq.fm/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VideoApi(api_client)
    api_key = 'api_key_example' # str | 
    userdata = 'userdata_example' # str | Additional metadata that will be associated with the video (optional)

    try:
        # Create a new video, optionally setting some metadata fields.
        api_response = api_instance.create(api_key, userdata=userdata)
        print("The response of VideoApi->create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideoApi->create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **userdata** | **str**| Additional metadata that will be associated with the video | [optional] 

### Return type

[**VideoObject**](VideoObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A video object, containing all metadata members. |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **details**
> VideoObject details(api_key, video_id)

Return details about a video.

Return details about a video. You may optionally request that only some of the metadata fields are returned.

### Example


```python
import openapi_client
from openapi_client.models.video_object import VideoObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.synq.fm/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.synq.fm/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VideoApi(api_client)
    api_key = 'api_key_example' # str | 
    video_id = 'video_id_example' # str | ID of the video to retrieve the metadata from

    try:
        # Return details about a video.
        api_response = api_instance.details(api_key, video_id)
        print("The response of VideoApi->details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideoApi->details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **video_id** | **str**| ID of the video to retrieve the metadata from | 

### Return type

[**VideoObject**](VideoObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A video object, containing all metadata members. |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query**
> List[object] query(api_key, filter)

Perform a JavaScript query to return video objects matching any desired criteria.

Find videos matching any criteria, by running a JavaScript function over each video object. A detailed tutorial on how to use this functionality is available on the [documentation page](https://www.synq.fm/queries-video-api/).

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.synq.fm/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.synq.fm/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VideoApi(api_client)
    api_key = 'api_key_example' # str | 
    filter = 'filter_example' # str | JavaScript code to be run over each video object, to determine what should be returend.

    try:
        # Perform a JavaScript query to return video objects matching any desired criteria.
        api_response = api_instance.query(api_key, filter)
        print("The response of VideoApi->query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideoApi->query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **filter** | **str**| JavaScript code to be run over each video object, to determine what should be returend. | 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of arbitrary elements, up to one element for each video object |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream**
> StreamInformationObject stream(api_key, video_id)

Returns urls for streaming.

Returns a stream url that you can stream to from your broadcasting software, and a playback url people can use to watch the stream.

### Example


```python
import openapi_client
from openapi_client.models.stream_information_object import StreamInformationObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.synq.fm/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.synq.fm/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VideoApi(api_client)
    api_key = 'api_key_example' # str | 
    video_id = 'video_id_example' # str | The ID of the video you want to stream to. The video needs to have been previously created.

    try:
        # Returns urls for streaming.
        api_response = api_instance.stream(api_key, video_id)
        print("The response of VideoApi->stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideoApi->stream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **video_id** | **str**| The ID of the video you want to stream to. The video needs to have been previously created. | 

### Return type

[**StreamInformationObject**](StreamInformationObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON object with urls for streaming. |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update**
> VideoObject update(api_key, video_id, source)

Update a video's metadata.

Update a video's metadata through JavaScript code. Only fields inside the \"userdata\" object can be set.

### Example


```python
import openapi_client
from openapi_client.models.video_object import VideoObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.synq.fm/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.synq.fm/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VideoApi(api_client)
    api_key = 'api_key_example' # str | 
    video_id = 'video_id_example' # str | The ID of the video whose metadata will be updated
    source = 'source_example' # str | JavaScript code to execute on the video object.

    try:
        # Update a video's metadata.
        api_response = api_instance.update(api_key, video_id, source)
        print("The response of VideoApi->update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideoApi->update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **video_id** | **str**| The ID of the video whose metadata will be updated | 
 **source** | **str**| JavaScript code to execute on the video object. | 

### Return type

[**VideoObject**](VideoObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A video object, containing all metadata members. |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload**
> UploadParameterObject upload(api_key, video_id)

Return parameters needed for uploading a video file.

Return parameters needed for uploading a video file to Amazon Simple Storage Service. See http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-post-example.html as well as the language-specific code-examples. #### *Example request* ```shell curl -s https://api.synq.fm/v1/video/upload \\   -F api_key=${SYNQ_API_KEY} \\   -F video_id=2d81c30ce62f4dfdb501dbca96c7ae56 ```  #### *Example response* ```json {   \"action\": \"https://synqfm.s3.amazonaws.com/\",   \"AWSAccessKeyId\": \"AKIAIP77Y7MMX3ITZMFA\",   \"Content-Type\": \"video/mp4\",   \"Policy\": \"eyJleHBpcmF0aW9uIiA6ICIyMDE2LTA0LTIyVDE5OjAyOjI2LjE3MloiLCAiY29uZGl0aW9ucyIgOiBbeyJidWNrZXQiIDogInN5bnFmbSJ9LCB7ImFjbCIgOiAicHVibGljLXJlYWQifSwgWyJzdGFydHMtd2l0aCIsICIka2V5IiwgInByb2plY3RzLzZlLzYzLzZlNjNiNzUyYTE4NTRkZGU4ODViNWNjNDcyZWRmNTY5L3VwbG9hZHMvdmlkZW9zLzJkLzgxLzJkODFjMzBjZTYyZjRkZmRiNTAxZGJjYTk2YzdhZTU2Lm1wNCJdLCBbInN0YXJ0cy13aXRoIiwgIiRDb250ZW50LVR5cGUiLCAidmlkZW8vbXA0Il0sIFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLCAwLCAxMDk5NTExNjI3Nzc2XV19\",   \"Signature\": \"ysqDemlKXKr6hKzVFP0hCGgf/cs=\",   \"acl\": \"public-read\",   \"key\": \"projects/6e/63/6e63b752a1854dde885b5cc472edf569/uploads/videos/2d/81/2d81c30ce62f4dfdb501dbca96c7ae56.mp4\" } ```  To upload the file, you can then make a multipart POST request to the URL in `action`, and for all the other parameters returned, set them as form parameters.  Given the parameters above, you would upload a file `test.mp4` using cURL like this:  ```shell curl -s https://synqfm.s3.amazonaws.com/ \\   -F AWSAccessKeyId=\"AKIAIP77Y7MMX3ITZMFA\" \\   -F Content-Type=\"video/mp4\" \\   -F Policy=\"eyJleHBpcmF0aW9uIiA6ICIyMDE2LTA0LTIyVDE5OjAyOjI2LjE3MloiLCAiY29uZGl0aW9ucyIgOiBbeyJidWNrZXQiIDogInN5bnFmbSJ9LCB7ImFjbCIgOiAicHVibGljLXJlYWQifSwgWyJzdGFydHMtd2l0aCIsICIka2V5IiwgInByb2plY3RzLzZlLzYzLzZlNjNiNzUyYTE4NTRkZGU4ODViNWNjNDcyZWRmNTY5L3VwbG9hZHMvdmlkZW9zLzJkLzgxLzJkODFjMzBjZTYyZjRkZmRiNTAxZGJjYTk2YzdhZTU2Lm1wNCJdLCBbInN0YXJ0cy13aXRoIiwgIiRDb250ZW50LVR5cGUiLCAidmlkZW8vbXA0Il0sIFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLCAwLCAxMDk5NTExNjI3Nzc2XV19\" \\   -F Signature=\"ysqDemlKXKr6hKzVFP0hCGgf/cs=\" \\   -F acl=\"public-read\" \\   -F key=\"projects/6e/63/6e63b752a1854dde885b5cc472edf569/uploads/videos/2d/81/2d81c30ce62f4dfdb501dbca96c7ae56.mp4\" \\   -F file=\"@my_video_file.mp4\" ```  

### Example


```python
import openapi_client
from openapi_client.models.upload_parameter_object import UploadParameterObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.synq.fm/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.synq.fm/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VideoApi(api_client)
    api_key = 'api_key_example' # str | 
    video_id = 'video_id_example' # str | The ID of the video you are going to upload into. The video needs to have been previously created.

    try:
        # Return parameters needed for uploading a video file.
        api_response = api_instance.upload(api_key, video_id)
        print("The response of VideoApi->upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideoApi->upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **video_id** | **str**| The ID of the video you are going to upload into. The video needs to have been previously created. | 

### Return type

[**UploadParameterObject**](UploadParameterObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An object containing all parameters needed for uploading the file. |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploader**
> UploaderInformationObject uploader(api_key, video_id, timeout=timeout)

Return embeddable url to an uploader widget

Returns an embeddable url, that contains an uploader widget that allows you to easily upload any mp4. Great way to simplify the uploading process for end users.

### Example


```python
import openapi_client
from openapi_client.models.uploader_information_object import UploaderInformationObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.synq.fm/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.synq.fm/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VideoApi(api_client)
    api_key = 'api_key_example' # str | 
    video_id = 'video_id_example' # str | The ID of the video you are going to upload into. The video needs to have been previously created.
    timeout = '2 hours' # str | How long the uploader widget works for. Anything from '30 minutes' to '2 days'. (optional) (default to '2 hours')

    try:
        # Return embeddable url to an uploader widget
        api_response = api_instance.uploader(api_key, video_id, timeout=timeout)
        print("The response of VideoApi->uploader:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideoApi->uploader: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **video_id** | **str**| The ID of the video you are going to upload into. The video needs to have been previously created. | 
 **timeout** | **str**| How long the uploader widget works for. Anything from &#39;30 minutes&#39; to &#39;2 days&#39;. | [optional] [default to &#39;2 hours&#39;]

### Return type

[**UploaderInformationObject**](UploaderInformationObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON object with an embeddable url to an uploader page/widget. |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

