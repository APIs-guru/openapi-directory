# openapi_client.AppStoreVersionSubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_store_version_submissions_create_instance**](AppStoreVersionSubmissionsApi.md#app_store_version_submissions_create_instance) | **POST** /v1/appStoreVersionSubmissions | 
[**app_store_version_submissions_delete_instance**](AppStoreVersionSubmissionsApi.md#app_store_version_submissions_delete_instance) | **DELETE** /v1/appStoreVersionSubmissions/{id} | 


# **app_store_version_submissions_create_instance**
> AppStoreVersionSubmissionResponse app_store_version_submissions_create_instance(app_store_version_submission_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_submission_create_request import AppStoreVersionSubmissionCreateRequest
from openapi_client.models.app_store_version_submission_response import AppStoreVersionSubmissionResponse
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
    api_instance = openapi_client.AppStoreVersionSubmissionsApi(api_client)
    app_store_version_submission_create_request = openapi_client.AppStoreVersionSubmissionCreateRequest() # AppStoreVersionSubmissionCreateRequest | AppStoreVersionSubmission representation

    try:
        api_response = api_instance.app_store_version_submissions_create_instance(app_store_version_submission_create_request)
        print("The response of AppStoreVersionSubmissionsApi->app_store_version_submissions_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionSubmissionsApi->app_store_version_submissions_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_store_version_submission_create_request** | [**AppStoreVersionSubmissionCreateRequest**](AppStoreVersionSubmissionCreateRequest.md)| AppStoreVersionSubmission representation | 

### Return type

[**AppStoreVersionSubmissionResponse**](AppStoreVersionSubmissionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single AppStoreVersionSubmission |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_store_version_submissions_delete_instance**
> app_store_version_submissions_delete_instance(id)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
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
    api_instance = openapi_client.AppStoreVersionSubmissionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.app_store_version_submissions_delete_instance(id)
    except Exception as e:
        print("Exception when calling AppStoreVersionSubmissionsApi->app_store_version_submissions_delete_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 

### Return type

void (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success (no content) |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

