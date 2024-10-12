# openapi_client.OperationsApi

All URIs are relative to *https://storage.googleapis.com/storage/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_buckets_operations_cancel**](OperationsApi.md#storage_buckets_operations_cancel) | **POST** /b/{bucket}/operations/{operationId}/cancel | 
[**storage_buckets_operations_get**](OperationsApi.md#storage_buckets_operations_get) | **GET** /b/{bucket}/operations/{operationId} | 
[**storage_buckets_operations_list**](OperationsApi.md#storage_buckets_operations_list) | **GET** /b/{bucket}/operations | 


# **storage_buckets_operations_cancel**
> storage_buckets_operations_cancel(bucket, operation_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip)



Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OperationsApi(api_client)
    bucket = 'bucket_example' # str | The parent bucket of the operation resource.
    operation_id = 'operation_id_example' # str | The ID of the operation resource.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.storage_buckets_operations_cancel(bucket, operation_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling OperationsApi->storage_buckets_operations_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| The parent bucket of the operation resource. | 
 **operation_id** | **str**| The ID of the operation resource. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_buckets_operations_get**
> GoogleLongrunningOperation storage_buckets_operations_get(bucket, operation_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip)



Gets the latest state of a long-running operation.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OperationsApi(api_client)
    bucket = 'bucket_example' # str | The parent bucket of the operation resource.
    operation_id = 'operation_id_example' # str | The ID of the operation resource.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.storage_buckets_operations_get(bucket, operation_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip)
        print("The response of OperationsApi->storage_buckets_operations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->storage_buckets_operations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| The parent bucket of the operation resource. | 
 **operation_id** | **str**| The ID of the operation resource. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**GoogleLongrunningOperation**](GoogleLongrunningOperation.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_buckets_operations_list**
> GoogleLongrunningListOperationsResponse storage_buckets_operations_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, filter=filter, page_size=page_size, page_token=page_token)



Lists operations that match the specified filter in the request.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_longrunning_list_operations_response import GoogleLongrunningListOperationsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OperationsApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which to look for operations.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    filter = 'filter_example' # str | A filter to narrow down results to a preferred subset. The filtering language is documented in more detail in [AIP-160](https://google.aip.dev/160). (optional)
    page_size = 56 # int | Maximum number of items to return in a single page of responses. Fewer total results may be returned than requested. The service uses this parameter or 100 items, whichever is smaller. (optional)
    page_token = 'page_token_example' # str | A previously-returned page token representing part of the larger set of results to view. (optional)

    try:
        api_response = api_instance.storage_buckets_operations_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, filter=filter, page_size=page_size, page_token=page_token)
        print("The response of OperationsApi->storage_buckets_operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->storage_buckets_operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which to look for operations. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **filter** | **str**| A filter to narrow down results to a preferred subset. The filtering language is documented in more detail in [AIP-160](https://google.aip.dev/160). | [optional] 
 **page_size** | **int**| Maximum number of items to return in a single page of responses. Fewer total results may be returned than requested. The service uses this parameter or 100 items, whichever is smaller. | [optional] 
 **page_token** | **str**| A previously-returned page token representing part of the larger set of results to view. | [optional] 

### Return type

[**GoogleLongrunningListOperationsResponse**](GoogleLongrunningListOperationsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

