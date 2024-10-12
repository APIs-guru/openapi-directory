# openapi_client.ComplianceApi

All URIs are relative to *https://api.twitter.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_batch_compliance_job**](ComplianceApi.md#create_batch_compliance_job) | **POST** /2/compliance/jobs | Create compliance job
[**get_batch_compliance_job**](ComplianceApi.md#get_batch_compliance_job) | **GET** /2/compliance/jobs/{id} | Get Compliance Job
[**get_tweets_compliance_stream**](ComplianceApi.md#get_tweets_compliance_stream) | **GET** /2/tweets/compliance/stream | Tweets Compliance stream
[**get_tweets_label_stream**](ComplianceApi.md#get_tweets_label_stream) | **GET** /2/tweets/label/stream | Tweets Label stream
[**get_users_compliance_stream**](ComplianceApi.md#get_users_compliance_stream) | **GET** /2/users/compliance/stream | Users Compliance stream
[**list_batch_compliance_jobs**](ComplianceApi.md#list_batch_compliance_jobs) | **GET** /2/compliance/jobs | List Compliance Jobs


# **create_batch_compliance_job**
> CreateComplianceJobResponse create_batch_compliance_job(create_compliance_job_request)

Create compliance job

Creates a compliance for the given job type

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.create_compliance_job_request import CreateComplianceJobRequest
from openapi_client.models.create_compliance_job_response import CreateComplianceJobResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ComplianceApi(api_client)
    create_compliance_job_request = openapi_client.CreateComplianceJobRequest() # CreateComplianceJobRequest | 

    try:
        # Create compliance job
        api_response = api_instance.create_batch_compliance_job(create_compliance_job_request)
        print("The response of ComplianceApi->create_batch_compliance_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->create_batch_compliance_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_compliance_job_request** | [**CreateComplianceJobRequest**](CreateComplianceJobRequest.md)|  | 

### Return type

[**CreateComplianceJobResponse**](CreateComplianceJobResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_batch_compliance_job**
> Get2ComplianceJobsIdResponse get_batch_compliance_job(id, compliance_job_fields=compliance_job_fields)

Get Compliance Job

Returns a single Compliance Job by ID

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_compliance_jobs_id_response import Get2ComplianceJobsIdResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ComplianceApi(api_client)
    id = 'id_example' # str | The ID of the Compliance Job to retrieve.
    compliance_job_fields = ['[\"created_at\",\"download_expires_at\",\"download_url\",\"id\",\"name\",\"resumable\",\"status\",\"type\",\"upload_expires_at\",\"upload_url\"]'] # List[str] | A comma separated list of ComplianceJob fields to display. (optional)

    try:
        # Get Compliance Job
        api_response = api_instance.get_batch_compliance_job(id, compliance_job_fields=compliance_job_fields)
        print("The response of ComplianceApi->get_batch_compliance_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->get_batch_compliance_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Compliance Job to retrieve. | 
 **compliance_job_fields** | [**List[str]**](str.md)| A comma separated list of ComplianceJob fields to display. | [optional] 

### Return type

[**Get2ComplianceJobsIdResponse**](Get2ComplianceJobsIdResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tweets_compliance_stream**
> TweetComplianceStreamResponse get_tweets_compliance_stream(partition, backfill_minutes=backfill_minutes, start_time=start_time, end_time=end_time)

Tweets Compliance stream

Streams 100% of compliance data for Tweets

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.tweet_compliance_stream_response import TweetComplianceStreamResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ComplianceApi(api_client)
    partition = 56 # int | The partition number.
    backfill_minutes = 56 # int | The number of minutes of backfill requested. (optional)
    start_time = '2021-02-01T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet Compliance events will be provided. (optional)
    end_time = '2021-02-14T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweet Compliance events will be provided. (optional)

    try:
        # Tweets Compliance stream
        api_response = api_instance.get_tweets_compliance_stream(partition, backfill_minutes=backfill_minutes, start_time=start_time, end_time=end_time)
        print("The response of ComplianceApi->get_tweets_compliance_stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->get_tweets_compliance_stream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition** | **int**| The partition number. | 
 **backfill_minutes** | **int**| The number of minutes of backfill requested. | [optional] 
 **start_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet Compliance events will be provided. | [optional] 
 **end_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweet Compliance events will be provided. | [optional] 

### Return type

[**TweetComplianceStreamResponse**](TweetComplianceStreamResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tweets_label_stream**
> TweetLabelStreamResponse get_tweets_label_stream(backfill_minutes=backfill_minutes, start_time=start_time, end_time=end_time)

Tweets Label stream

Streams 100% of labeling events applied to Tweets

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.tweet_label_stream_response import TweetLabelStreamResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ComplianceApi(api_client)
    backfill_minutes = 56 # int | The number of minutes of backfill requested. (optional)
    start_time = '2021-02-01T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet labels will be provided. (optional)
    end_time = '2021-02-01T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Tweet labels will be provided. (optional)

    try:
        # Tweets Label stream
        api_response = api_instance.get_tweets_label_stream(backfill_minutes=backfill_minutes, start_time=start_time, end_time=end_time)
        print("The response of ComplianceApi->get_tweets_label_stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->get_tweets_label_stream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backfill_minutes** | **int**| The number of minutes of backfill requested. | [optional] 
 **start_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet labels will be provided. | [optional] 
 **end_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Tweet labels will be provided. | [optional] 

### Return type

[**TweetLabelStreamResponse**](TweetLabelStreamResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_users_compliance_stream**
> UserComplianceStreamResponse get_users_compliance_stream(partition, backfill_minutes=backfill_minutes, start_time=start_time, end_time=end_time)

Users Compliance stream

Streams 100% of compliance data for Users

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.user_compliance_stream_response import UserComplianceStreamResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ComplianceApi(api_client)
    partition = 56 # int | The partition number.
    backfill_minutes = 56 # int | The number of minutes of backfill requested. (optional)
    start_time = '2021-02-01T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the User Compliance events will be provided. (optional)
    end_time = '2021-02-01T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the User Compliance events will be provided. (optional)

    try:
        # Users Compliance stream
        api_response = api_instance.get_users_compliance_stream(partition, backfill_minutes=backfill_minutes, start_time=start_time, end_time=end_time)
        print("The response of ComplianceApi->get_users_compliance_stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->get_users_compliance_stream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition** | **int**| The partition number. | 
 **backfill_minutes** | **int**| The number of minutes of backfill requested. | [optional] 
 **start_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the User Compliance events will be provided. | [optional] 
 **end_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the User Compliance events will be provided. | [optional] 

### Return type

[**UserComplianceStreamResponse**](UserComplianceStreamResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_batch_compliance_jobs**
> Get2ComplianceJobsResponse list_batch_compliance_jobs(type, status=status, compliance_job_fields=compliance_job_fields)

List Compliance Jobs

Returns recent Compliance Jobs for a given job type and optional job status

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_compliance_jobs_response import Get2ComplianceJobsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ComplianceApi(api_client)
    type = 'type_example' # str | Type of Compliance Job to list.
    status = 'status_example' # str | Status of Compliance Job to list. (optional)
    compliance_job_fields = ['[\"created_at\",\"download_expires_at\",\"download_url\",\"id\",\"name\",\"resumable\",\"status\",\"type\",\"upload_expires_at\",\"upload_url\"]'] # List[str] | A comma separated list of ComplianceJob fields to display. (optional)

    try:
        # List Compliance Jobs
        api_response = api_instance.list_batch_compliance_jobs(type, status=status, compliance_job_fields=compliance_job_fields)
        print("The response of ComplianceApi->list_batch_compliance_jobs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->list_batch_compliance_jobs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Type of Compliance Job to list. | 
 **status** | **str**| Status of Compliance Job to list. | [optional] 
 **compliance_job_fields** | [**List[str]**](str.md)| A comma separated list of ComplianceJob fields to display. | [optional] 

### Return type

[**Get2ComplianceJobsResponse**](Get2ComplianceJobsResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

