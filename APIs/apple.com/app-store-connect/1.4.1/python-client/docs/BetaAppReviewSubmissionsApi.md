# openapi_client.BetaAppReviewSubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**beta_app_review_submissions_build_get_to_one_related**](BetaAppReviewSubmissionsApi.md#beta_app_review_submissions_build_get_to_one_related) | **GET** /v1/betaAppReviewSubmissions/{id}/build | 
[**beta_app_review_submissions_create_instance**](BetaAppReviewSubmissionsApi.md#beta_app_review_submissions_create_instance) | **POST** /v1/betaAppReviewSubmissions | 
[**beta_app_review_submissions_get_collection**](BetaAppReviewSubmissionsApi.md#beta_app_review_submissions_get_collection) | **GET** /v1/betaAppReviewSubmissions | 
[**beta_app_review_submissions_get_instance**](BetaAppReviewSubmissionsApi.md#beta_app_review_submissions_get_instance) | **GET** /v1/betaAppReviewSubmissions/{id} | 


# **beta_app_review_submissions_build_get_to_one_related**
> BuildResponse beta_app_review_submissions_build_get_to_one_related(id, fields_builds=fields_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.build_response import BuildResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BetaAppReviewSubmissionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)

    try:
        api_response = api_instance.beta_app_review_submissions_build_get_to_one_related(id, fields_builds=fields_builds)
        print("The response of BetaAppReviewSubmissionsApi->beta_app_review_submissions_build_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaAppReviewSubmissionsApi->beta_app_review_submissions_build_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 

### Return type

[**BuildResponse**](BuildResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related resource |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_app_review_submissions_create_instance**
> BetaAppReviewSubmissionResponse beta_app_review_submissions_create_instance(beta_app_review_submission_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_app_review_submission_create_request import BetaAppReviewSubmissionCreateRequest
from openapi_client.models.beta_app_review_submission_response import BetaAppReviewSubmissionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BetaAppReviewSubmissionsApi(api_client)
    beta_app_review_submission_create_request = openapi_client.BetaAppReviewSubmissionCreateRequest() # BetaAppReviewSubmissionCreateRequest | BetaAppReviewSubmission representation

    try:
        api_response = api_instance.beta_app_review_submissions_create_instance(beta_app_review_submission_create_request)
        print("The response of BetaAppReviewSubmissionsApi->beta_app_review_submissions_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaAppReviewSubmissionsApi->beta_app_review_submissions_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beta_app_review_submission_create_request** | [**BetaAppReviewSubmissionCreateRequest**](BetaAppReviewSubmissionCreateRequest.md)| BetaAppReviewSubmission representation | 

### Return type

[**BetaAppReviewSubmissionResponse**](BetaAppReviewSubmissionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single BetaAppReviewSubmission |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_app_review_submissions_get_collection**
> BetaAppReviewSubmissionsResponse beta_app_review_submissions_get_collection(filter_build, filter_beta_review_state=filter_beta_review_state, fields_beta_app_review_submissions=fields_beta_app_review_submissions, limit=limit, include=include, fields_builds=fields_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_app_review_submissions_response import BetaAppReviewSubmissionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BetaAppReviewSubmissionsApi(api_client)
    filter_build = ['filter_build_example'] # List[str] | filter by id(s) of related 'build'
    filter_beta_review_state = ['filter_beta_review_state_example'] # List[str] | filter by attribute 'betaReviewState' (optional)
    fields_beta_app_review_submissions = ['fields_beta_app_review_submissions_example'] # List[str] | the fields to include for returned resources of type betaAppReviewSubmissions (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)

    try:
        api_response = api_instance.beta_app_review_submissions_get_collection(filter_build, filter_beta_review_state=filter_beta_review_state, fields_beta_app_review_submissions=fields_beta_app_review_submissions, limit=limit, include=include, fields_builds=fields_builds)
        print("The response of BetaAppReviewSubmissionsApi->beta_app_review_submissions_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaAppReviewSubmissionsApi->beta_app_review_submissions_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_build** | [**List[str]**](str.md)| filter by id(s) of related &#39;build&#39; | 
 **filter_beta_review_state** | [**List[str]**](str.md)| filter by attribute &#39;betaReviewState&#39; | [optional] 
 **fields_beta_app_review_submissions** | [**List[str]**](str.md)| the fields to include for returned resources of type betaAppReviewSubmissions | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 

### Return type

[**BetaAppReviewSubmissionsResponse**](BetaAppReviewSubmissionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of BetaAppReviewSubmissions |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_app_review_submissions_get_instance**
> BetaAppReviewSubmissionResponse beta_app_review_submissions_get_instance(id, fields_beta_app_review_submissions=fields_beta_app_review_submissions, include=include, fields_builds=fields_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_app_review_submission_response import BetaAppReviewSubmissionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BetaAppReviewSubmissionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_beta_app_review_submissions = ['fields_beta_app_review_submissions_example'] # List[str] | the fields to include for returned resources of type betaAppReviewSubmissions (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)

    try:
        api_response = api_instance.beta_app_review_submissions_get_instance(id, fields_beta_app_review_submissions=fields_beta_app_review_submissions, include=include, fields_builds=fields_builds)
        print("The response of BetaAppReviewSubmissionsApi->beta_app_review_submissions_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaAppReviewSubmissionsApi->beta_app_review_submissions_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_beta_app_review_submissions** | [**List[str]**](str.md)| the fields to include for returned resources of type betaAppReviewSubmissions | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 

### Return type

[**BetaAppReviewSubmissionResponse**](BetaAppReviewSubmissionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BetaAppReviewSubmission |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

