# openapi_client.ReviewsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reviews_add_video_frame**](ReviewsApi.md#reviews_add_video_frame) | **POST** /contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId}/frames | 
[**reviews_add_video_transcript**](ReviewsApi.md#reviews_add_video_transcript) | **PUT** /contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId}/transcript | 
[**reviews_add_video_transcript_moderation_result**](ReviewsApi.md#reviews_add_video_transcript_moderation_result) | **PUT** /contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId}/transcriptmoderationresult | 
[**reviews_create_job**](ReviewsApi.md#reviews_create_job) | **POST** /contentmoderator/review/v1.0/teams/{teamName}/jobs | 
[**reviews_create_reviews**](ReviewsApi.md#reviews_create_reviews) | **POST** /contentmoderator/review/v1.0/teams/{teamName}/reviews | 
[**reviews_get_job_details**](ReviewsApi.md#reviews_get_job_details) | **GET** /contentmoderator/review/v1.0/teams/{teamName}/jobs/{JobId} | 
[**reviews_get_review**](ReviewsApi.md#reviews_get_review) | **GET** /contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId} | 
[**reviews_get_video_frames**](ReviewsApi.md#reviews_get_video_frames) | **GET** /contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId}/frames | 
[**reviews_publish_video_review**](ReviewsApi.md#reviews_publish_video_review) | **POST** /contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId}/publish | 


# **reviews_add_video_frame**
> reviews_add_video_frame(team_name, review_id, timescale=timescale)



The reviews created would show up for Reviewers on your team. As Reviewers complete reviewing, results of the Review would be POSTED (i.e. HTTP POST) on the specified CallBackEndpoint.    <h3>CallBack Schemas </h3>  <h4>Review Completion CallBack Sample</h4>  <p>  {<br/>    \"ReviewId\": \"<Review Id>\",<br/>    \"ModifiedOn\": \"2016-10-11T22:36:32.9934851Z\",<br/>    \"ModifiedBy\": \"<Name of the Reviewer>\",<br/>    \"CallBackType\": \"Review\",<br/>    \"ContentId\": \"<The ContentId that was specified input>\",<br/>    \"Metadata\": {<br/>      \"adultscore\": \"0.xxx\",<br/>      \"a\": \"False\",<br/>      \"racyscore\": \"0.xxx\",<br/>      \"r\": \"True\"<br/>    },<br/>    \"ReviewerResultTags\": {<br/>      \"a\": \"False\",<br/>      \"r\": \"True\"<br/>    }<br/>  }<br/>    </p>.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewsApi(api_client)
    team_name = 'team_name_example' # str | Your team name.
    review_id = 'review_id_example' # str | Id of the review.
    timescale = 56 # int | Timescale of the video you are adding frames to. (optional)

    try:
        api_instance.reviews_add_video_frame(team_name, review_id, timescale=timescale)
    except Exception as e:
        print("Exception when calling ReviewsApi->reviews_add_video_frame: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_name** | **str**| Your team name. | 
 **review_id** | **str**| Id of the review. | 
 **timescale** | **int**| Timescale of the video you are adding frames to. | [optional] 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviews_add_video_transcript**
> reviews_add_video_transcript(team_name, review_id, content_type, vtt_file)



This API adds a transcript file (text version of all the words spoken in a video) to a video review. The file should be a valid WebVTT format.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewsApi(api_client)
    team_name = 'team_name_example' # str | Your team name.
    review_id = 'review_id_example' # str | Id of the review.
    content_type = 'content_type_example' # str | The content type.
    vtt_file = None # object | Transcript file of the video.

    try:
        api_instance.reviews_add_video_transcript(team_name, review_id, content_type, vtt_file)
    except Exception as e:
        print("Exception when calling ReviewsApi->reviews_add_video_transcript: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_name** | **str**| Your team name. | 
 **review_id** | **str**| Id of the review. | 
 **content_type** | **str**| The content type. | 
 **vtt_file** | **object**| Transcript file of the video. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviews_add_video_transcript_moderation_result**
> reviews_add_video_transcript_moderation_result(content_type, team_name, review_id, transcript_moderation_body)



This API adds a transcript screen text result file for a video review. Transcript screen text result file is a result of Screen Text API . In order to generate transcript screen text result file , a transcript file has to be screened for profanity using Screen Text API.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.reviews_add_video_transcript_moderation_result_request_inner import ReviewsAddVideoTranscriptModerationResultRequestInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewsApi(api_client)
    content_type = 'content_type_example' # str | The content type.
    team_name = 'team_name_example' # str | Your team name.
    review_id = 'review_id_example' # str | Id of the review.
    transcript_moderation_body = [openapi_client.ReviewsAddVideoTranscriptModerationResultRequestInner()] # List[ReviewsAddVideoTranscriptModerationResultRequestInner] | Body for add video transcript moderation result API

    try:
        api_instance.reviews_add_video_transcript_moderation_result(content_type, team_name, review_id, transcript_moderation_body)
    except Exception as e:
        print("Exception when calling ReviewsApi->reviews_add_video_transcript_moderation_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| The content type. | 
 **team_name** | **str**| Your team name. | 
 **review_id** | **str**| Id of the review. | 
 **transcript_moderation_body** | [**List[ReviewsAddVideoTranscriptModerationResultRequestInner]**](ReviewsAddVideoTranscriptModerationResultRequestInner.md)| Body for add video transcript moderation result API | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviews_create_job**
> JobId reviews_create_job(team_name, content_type, content_id, workflow_name, content_type2, content, call_back_endpoint=call_back_endpoint)



A job Id will be returned for the content posted on this endpoint.     Once the content is evaluated against the Workflow provided the review will be created or ignored based on the workflow expression.    <h3>CallBack Schemas </h3>    <p>  <h4>Job Completion CallBack Sample</h4><br/>    {<br/>    \"JobId\": \"<Job Id>,<br/>    \"ReviewId\": \"<Review Id, if the Job resulted in a Review to be created>\",<br/>    \"WorkFlowId\": \"default\",<br/>    \"Status\": \"<This will be one of Complete, InProgress, Error>\",<br/>    \"ContentType\": \"Image\",<br/>    \"ContentId\": \"<This is the ContentId that was specified on input>\",<br/>    \"CallBackType\": \"Job\",<br/>    \"Metadata\": {<br/>      \"adultscore\": \"0.xxx\",<br/>      \"a\": \"False\",<br/>      \"racyscore\": \"0.xxx\",<br/>      \"r\": \"True\"<br/>    }<br/>  }<br/>    </p>  <p>  <h4>Review Completion CallBack Sample</h4><br/>    {    \"ReviewId\": \"<Review Id>\",<br/>    \"ModifiedOn\": \"2016-10-11T22:36:32.9934851Z\",<br/>    \"ModifiedBy\": \"<Name of the Reviewer>\",<br/>    \"CallBackType\": \"Review\",<br/>    \"ContentId\": \"<The ContentId that was specified input>\",<br/>    \"Metadata\": {<br/>      \"adultscore\": \"0.xxx\",      \"a\": \"False\",<br/>      \"racyscore\": \"0.xxx\",<br/>      \"r\": \"True\"<br/>    },<br/>    \"ReviewerResultTags\": {<br/>      \"a\": \"False\",<br/>      \"r\": \"True\"<br/>    }<br/>  }<br/>    </p>.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.job_id import JobId
from openapi_client.models.reviews_create_job_request import ReviewsCreateJobRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewsApi(api_client)
    team_name = 'team_name_example' # str | Your team name.
    content_type = 'content_type_example' # str | Image, Text or Video.
    content_id = 'content_id_example' # str | Id/Name to identify the content submitted.
    workflow_name = 'workflow_name_example' # str | Workflow Name that you want to invoke.
    content_type2 = 'content_type_example' # str | The content type.
    content = openapi_client.ReviewsCreateJobRequest() # ReviewsCreateJobRequest | Content to evaluate.
    call_back_endpoint = 'call_back_endpoint_example' # str | Callback endpoint for posting the create job result. (optional)

    try:
        api_response = api_instance.reviews_create_job(team_name, content_type, content_id, workflow_name, content_type2, content, call_back_endpoint=call_back_endpoint)
        print("The response of ReviewsApi->reviews_create_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewsApi->reviews_create_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_name** | **str**| Your team name. | 
 **content_type** | **str**| Image, Text or Video. | 
 **content_id** | **str**| Id/Name to identify the content submitted. | 
 **workflow_name** | **str**| Workflow Name that you want to invoke. | 
 **content_type2** | **str**| The content type. | 
 **content** | [**ReviewsCreateJobRequest**](ReviewsCreateJobRequest.md)| Content to evaluate. | 
 **call_back_endpoint** | **str**| Callback endpoint for posting the create job result. | [optional] 

### Return type

[**JobId**](JobId.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json, image/jpeg
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviews_create_reviews**
> List[str] reviews_create_reviews(url_content_type, team_name, create_review_body, sub_team=sub_team)



The reviews created would show up for Reviewers on your team. As Reviewers complete reviewing, results of the Review would be POSTED (i.e. HTTP POST) on the specified CallBackEndpoint.    <h3>CallBack Schemas </h3>  <h4>Review Completion CallBack Sample</h4>  <p>  {<br/>    \"ReviewId\": \"<Review Id>\",<br/>    \"ModifiedOn\": \"2016-10-11T22:36:32.9934851Z\",<br/>    \"ModifiedBy\": \"<Name of the Reviewer>\",<br/>    \"CallBackType\": \"Review\",<br/>    \"ContentId\": \"<The ContentId that was specified input>\",<br/>    \"Metadata\": {<br/>      \"adultscore\": \"0.xxx\",<br/>      \"a\": \"False\",<br/>      \"racyscore\": \"0.xxx\",<br/>      \"r\": \"True\"<br/>    },<br/>    \"ReviewerResultTags\": {<br/>      \"a\": \"False\",<br/>      \"r\": \"True\"<br/>    }<br/>  }<br/>    </p>.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.reviews_create_reviews_request_inner import ReviewsCreateReviewsRequestInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewsApi(api_client)
    url_content_type = 'url_content_type_example' # str | The content type.
    team_name = 'team_name_example' # str | Your team name.
    create_review_body = [openapi_client.ReviewsCreateReviewsRequestInner()] # List[ReviewsCreateReviewsRequestInner] | Body for create reviews API
    sub_team = 'sub_team_example' # str | SubTeam of your team, you want to assign the created review to. (optional)

    try:
        api_response = api_instance.reviews_create_reviews(url_content_type, team_name, create_review_body, sub_team=sub_team)
        print("The response of ReviewsApi->reviews_create_reviews:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewsApi->reviews_create_reviews: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url_content_type** | **str**| The content type. | 
 **team_name** | **str**| Your team name. | 
 **create_review_body** | [**List[ReviewsCreateReviewsRequestInner]**](ReviewsCreateReviewsRequestInner.md)| Body for create reviews API | 
 **sub_team** | **str**| SubTeam of your team, you want to assign the created review to. | [optional] 

### Return type

**List[str]**

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviews_get_job_details**
> Job reviews_get_job_details(team_name, job_id)



Get the Job Details for a Job Id.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.job import Job
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewsApi(api_client)
    team_name = 'team_name_example' # str | Your Team Name.
    job_id = 'job_id_example' # str | Id of the job.

    try:
        api_response = api_instance.reviews_get_job_details(team_name, job_id)
        print("The response of ReviewsApi->reviews_get_job_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewsApi->reviews_get_job_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_name** | **str**| Your Team Name. | 
 **job_id** | **str**| Id of the job. | 

### Return type

[**Job**](Job.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviews_get_review**
> Review reviews_get_review(team_name, review_id)



Returns review details for the review Id passed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.review import Review
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewsApi(api_client)
    team_name = 'team_name_example' # str | Your Team Name.
    review_id = 'review_id_example' # str | Id of the review.

    try:
        api_response = api_instance.reviews_get_review(team_name, review_id)
        print("The response of ReviewsApi->reviews_get_review:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewsApi->reviews_get_review: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_name** | **str**| Your Team Name. | 
 **review_id** | **str**| Id of the review. | 

### Return type

[**Review**](Review.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviews_get_video_frames**
> Frames reviews_get_video_frames(team_name, review_id, start_seed=start_seed, no_of_records=no_of_records, filter=filter)



The reviews created would show up for Reviewers on your team. As Reviewers complete reviewing, results of the Review would be POSTED (i.e. HTTP POST) on the specified CallBackEndpoint.    <h3>CallBack Schemas </h3>  <h4>Review Completion CallBack Sample</h4>  <p>  {<br/>    \"ReviewId\": \"<Review Id>\",<br/>    \"ModifiedOn\": \"2016-10-11T22:36:32.9934851Z\",<br/>    \"ModifiedBy\": \"<Name of the Reviewer>\",<br/>    \"CallBackType\": \"Review\",<br/>    \"ContentId\": \"<The ContentId that was specified input>\",<br/>    \"Metadata\": {<br/>      \"adultscore\": \"0.xxx\",<br/>      \"a\": \"False\",<br/>      \"racyscore\": \"0.xxx\",<br/>      \"r\": \"True\"<br/>    },<br/>    \"ReviewerResultTags\": {<br/>      \"a\": \"False\",<br/>      \"r\": \"True\"<br/>    }<br/>  }<br/>    </p>.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.frames import Frames
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewsApi(api_client)
    team_name = 'team_name_example' # str | Your team name.
    review_id = 'review_id_example' # str | Id of the review.
    start_seed = 56 # int | Time stamp of the frame from where you want to start fetching the frames. (optional)
    no_of_records = 56 # int | Number of frames to fetch. (optional)
    filter = 'filter_example' # str | Get frames filtered by tags. (optional)

    try:
        api_response = api_instance.reviews_get_video_frames(team_name, review_id, start_seed=start_seed, no_of_records=no_of_records, filter=filter)
        print("The response of ReviewsApi->reviews_get_video_frames:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReviewsApi->reviews_get_video_frames: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_name** | **str**| Your team name. | 
 **review_id** | **str**| Id of the review. | 
 **start_seed** | **int**| Time stamp of the frame from where you want to start fetching the frames. | [optional] 
 **no_of_records** | **int**| Number of frames to fetch. | [optional] 
 **filter** | **str**| Get frames filtered by tags. | [optional] 

### Return type

[**Frames**](Frames.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviews_publish_video_review**
> reviews_publish_video_review(team_name, review_id)



Publish video review to make it available for review.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReviewsApi(api_client)
    team_name = 'team_name_example' # str | Your team name.
    review_id = 'review_id_example' # str | Id of the review.

    try:
        api_instance.reviews_publish_video_review(team_name, review_id)
    except Exception as e:
        print("Exception when calling ReviewsApi->reviews_publish_video_review: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_name** | **str**| Your team name. | 
 **review_id** | **str**| Id of the review. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

