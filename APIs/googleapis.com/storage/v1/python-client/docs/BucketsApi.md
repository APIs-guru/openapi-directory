# openapi_client.BucketsApi

All URIs are relative to *https://storage.googleapis.com/storage/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_buckets_delete**](BucketsApi.md#storage_buckets_delete) | **DELETE** /b/{bucket} | 
[**storage_buckets_get**](BucketsApi.md#storage_buckets_get) | **GET** /b/{bucket} | 
[**storage_buckets_get_iam_policy**](BucketsApi.md#storage_buckets_get_iam_policy) | **GET** /b/{bucket}/iam | 
[**storage_buckets_insert**](BucketsApi.md#storage_buckets_insert) | **POST** /b | 
[**storage_buckets_list**](BucketsApi.md#storage_buckets_list) | **GET** /b | 
[**storage_buckets_lock_retention_policy**](BucketsApi.md#storage_buckets_lock_retention_policy) | **POST** /b/{bucket}/lockRetentionPolicy | 
[**storage_buckets_patch**](BucketsApi.md#storage_buckets_patch) | **PATCH** /b/{bucket} | 
[**storage_buckets_set_iam_policy**](BucketsApi.md#storage_buckets_set_iam_policy) | **PUT** /b/{bucket}/iam | 
[**storage_buckets_test_iam_permissions**](BucketsApi.md#storage_buckets_test_iam_permissions) | **GET** /b/{bucket}/iam/testPermissions | 
[**storage_buckets_update**](BucketsApi.md#storage_buckets_update) | **PUT** /b/{bucket} | 


# **storage_buckets_delete**
> storage_buckets_delete(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, user_project=user_project)



Permanently deletes an empty bucket.

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
    api_instance = openapi_client.BucketsApi(api_client)
    bucket = 'bucket_example' # str | Name of a bucket.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | If set, only deletes the bucket if its metageneration matches this value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | If set, only deletes the bucket if its metageneration does not match this value. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)

    try:
        api_instance.storage_buckets_delete(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, user_project=user_project)
    except Exception as e:
        print("Exception when calling BucketsApi->storage_buckets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of a bucket. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **if_metageneration_match** | **str**| If set, only deletes the bucket if its metageneration matches this value. | [optional] 
 **if_metageneration_not_match** | **str**| If set, only deletes the bucket if its metageneration does not match this value. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 

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

# **storage_buckets_get**
> Bucket storage_buckets_get(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, projection=projection, user_project=user_project)



Returns metadata for the specified bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bucket import Bucket
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
    api_instance = openapi_client.BucketsApi(api_client)
    bucket = 'bucket_example' # str | Name of a bucket.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)

    try:
        api_response = api_instance.storage_buckets_get(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, projection=projection, user_project=user_project)
        print("The response of BucketsApi->storage_buckets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->storage_buckets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of a bucket. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **if_metageneration_match** | **str**| Makes the return of the bucket metadata conditional on whether the bucket&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the return of the bucket metadata conditional on whether the bucket&#39;s current metageneration does not match the given value. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 

### Return type

[**Bucket**](Bucket.md)

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

# **storage_buckets_get_iam_policy**
> Policy storage_buckets_get_iam_policy(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, options_requested_policy_version=options_requested_policy_version, user_project=user_project)



Returns an IAM policy for the specified bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.policy import Policy
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
    api_instance = openapi_client.BucketsApi(api_client)
    bucket = 'bucket_example' # str | Name of a bucket.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    options_requested_policy_version = 56 # int | The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn't support part of the requested IAM policy, the request fails. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)

    try:
        api_response = api_instance.storage_buckets_get_iam_policy(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, options_requested_policy_version=options_requested_policy_version, user_project=user_project)
        print("The response of BucketsApi->storage_buckets_get_iam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->storage_buckets_get_iam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of a bucket. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **options_requested_policy_version** | **int**| The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn&#39;t support part of the requested IAM policy, the request fails. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 

### Return type

[**Policy**](Policy.md)

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

# **storage_buckets_insert**
> Bucket storage_buckets_insert(project, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, enable_object_retention=enable_object_retention, predefined_acl=predefined_acl, predefined_default_object_acl=predefined_default_object_acl, projection=projection, user_project=user_project, bucket=bucket)



Creates a new bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bucket import Bucket
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
    api_instance = openapi_client.BucketsApi(api_client)
    project = 'project_example' # str | A valid API project identifier.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    enable_object_retention = True # bool | When set to true, object retention is enabled for this bucket. (optional)
    predefined_acl = 'predefined_acl_example' # str | Apply a predefined set of access controls to this bucket. (optional)
    predefined_default_object_acl = 'predefined_default_object_acl_example' # str | Apply a predefined set of default object access controls to this bucket. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. (optional)
    bucket = openapi_client.Bucket() # Bucket |  (optional)

    try:
        api_response = api_instance.storage_buckets_insert(project, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, enable_object_retention=enable_object_retention, predefined_acl=predefined_acl, predefined_default_object_acl=predefined_default_object_acl, projection=projection, user_project=user_project, bucket=bucket)
        print("The response of BucketsApi->storage_buckets_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->storage_buckets_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| A valid API project identifier. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **enable_object_retention** | **bool**| When set to true, object retention is enabled for this bucket. | [optional] 
 **predefined_acl** | **str**| Apply a predefined set of access controls to this bucket. | [optional] 
 **predefined_default_object_acl** | **str**| Apply a predefined set of default object access controls to this bucket. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full. | [optional] 
 **user_project** | **str**| The project to be billed for this request. | [optional] 
 **bucket** | [**Bucket**](Bucket.md)|  | [optional] 

### Return type

[**Bucket**](Bucket.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_buckets_list**
> Buckets storage_buckets_list(project, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, max_results=max_results, page_token=page_token, prefix=prefix, projection=projection, user_project=user_project)



Retrieves a list of buckets for a given project.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.buckets import Buckets
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
    api_instance = openapi_client.BucketsApi(api_client)
    project = 'project_example' # str | A valid API project identifier.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller. (optional)
    page_token = 'page_token_example' # str | A previously-returned page token representing part of the larger set of results to view. (optional)
    prefix = 'prefix_example' # str | Filter results to buckets whose names begin with this prefix. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. (optional)

    try:
        api_response = api_instance.storage_buckets_list(project, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, max_results=max_results, page_token=page_token, prefix=prefix, projection=projection, user_project=user_project)
        print("The response of BucketsApi->storage_buckets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->storage_buckets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| A valid API project identifier. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller. | [optional] 
 **page_token** | **str**| A previously-returned page token representing part of the larger set of results to view. | [optional] 
 **prefix** | **str**| Filter results to buckets whose names begin with this prefix. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl. | [optional] 
 **user_project** | **str**| The project to be billed for this request. | [optional] 

### Return type

[**Buckets**](Buckets.md)

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

# **storage_buckets_lock_retention_policy**
> Bucket storage_buckets_lock_retention_policy(bucket, if_metageneration_match, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)



Locks retention policy on a bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bucket import Bucket
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
    api_instance = openapi_client.BucketsApi(api_client)
    bucket = 'bucket_example' # str | Name of a bucket.
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether bucket's current metageneration matches the given value.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)

    try:
        api_response = api_instance.storage_buckets_lock_retention_policy(bucket, if_metageneration_match, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)
        print("The response of BucketsApi->storage_buckets_lock_retention_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->storage_buckets_lock_retention_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of a bucket. | 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether bucket&#39;s current metageneration matches the given value. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 

### Return type

[**Bucket**](Bucket.md)

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

# **storage_buckets_patch**
> Bucket storage_buckets_patch(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, predefined_acl=predefined_acl, predefined_default_object_acl=predefined_default_object_acl, projection=projection, user_project=user_project, bucket2=bucket2)



Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bucket import Bucket
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
    api_instance = openapi_client.BucketsApi(api_client)
    bucket = 'bucket_example' # str | Name of a bucket.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value. (optional)
    predefined_acl = 'predefined_acl_example' # str | Apply a predefined set of access controls to this bucket. (optional)
    predefined_default_object_acl = 'predefined_default_object_acl_example' # str | Apply a predefined set of default object access controls to this bucket. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to full. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    bucket2 = openapi_client.Bucket() # Bucket |  (optional)

    try:
        api_response = api_instance.storage_buckets_patch(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, predefined_acl=predefined_acl, predefined_default_object_acl=predefined_default_object_acl, projection=projection, user_project=user_project, bucket2=bucket2)
        print("The response of BucketsApi->storage_buckets_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->storage_buckets_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of a bucket. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **if_metageneration_match** | **str**| Makes the return of the bucket metadata conditional on whether the bucket&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the return of the bucket metadata conditional on whether the bucket&#39;s current metageneration does not match the given value. | [optional] 
 **predefined_acl** | **str**| Apply a predefined set of access controls to this bucket. | [optional] 
 **predefined_default_object_acl** | **str**| Apply a predefined set of default object access controls to this bucket. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to full. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **bucket2** | [**Bucket**](Bucket.md)|  | [optional] 

### Return type

[**Bucket**](Bucket.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_buckets_set_iam_policy**
> Policy storage_buckets_set_iam_policy(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project, policy=policy)



Updates an IAM policy for the specified bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.policy import Policy
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
    api_instance = openapi_client.BucketsApi(api_client)
    bucket = 'bucket_example' # str | Name of a bucket.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    policy = openapi_client.Policy() # Policy |  (optional)

    try:
        api_response = api_instance.storage_buckets_set_iam_policy(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project, policy=policy)
        print("The response of BucketsApi->storage_buckets_set_iam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->storage_buckets_set_iam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of a bucket. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **policy** | [**Policy**](Policy.md)|  | [optional] 

### Return type

[**Policy**](Policy.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_buckets_test_iam_permissions**
> TestIamPermissionsResponse storage_buckets_test_iam_permissions(bucket, permissions, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)



Tests a set of permissions on the given bucket to see which, if any, are held by the caller.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.test_iam_permissions_response import TestIamPermissionsResponse
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
    api_instance = openapi_client.BucketsApi(api_client)
    bucket = 'bucket_example' # str | Name of a bucket.
    permissions = ['permissions_example'] # List[str] | Permissions to test.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)

    try:
        api_response = api_instance.storage_buckets_test_iam_permissions(bucket, permissions, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)
        print("The response of BucketsApi->storage_buckets_test_iam_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->storage_buckets_test_iam_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of a bucket. | 
 **permissions** | [**List[str]**](str.md)| Permissions to test. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 

### Return type

[**TestIamPermissionsResponse**](TestIamPermissionsResponse.md)

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

# **storage_buckets_update**
> Bucket storage_buckets_update(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, predefined_acl=predefined_acl, predefined_default_object_acl=predefined_default_object_acl, projection=projection, user_project=user_project, bucket2=bucket2)



Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bucket import Bucket
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
    api_instance = openapi_client.BucketsApi(api_client)
    bucket = 'bucket_example' # str | Name of a bucket.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value. (optional)
    predefined_acl = 'predefined_acl_example' # str | Apply a predefined set of access controls to this bucket. (optional)
    predefined_default_object_acl = 'predefined_default_object_acl_example' # str | Apply a predefined set of default object access controls to this bucket. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to full. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    bucket2 = openapi_client.Bucket() # Bucket |  (optional)

    try:
        api_response = api_instance.storage_buckets_update(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, predefined_acl=predefined_acl, predefined_default_object_acl=predefined_default_object_acl, projection=projection, user_project=user_project, bucket2=bucket2)
        print("The response of BucketsApi->storage_buckets_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->storage_buckets_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of a bucket. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **if_metageneration_match** | **str**| Makes the return of the bucket metadata conditional on whether the bucket&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the return of the bucket metadata conditional on whether the bucket&#39;s current metageneration does not match the given value. | [optional] 
 **predefined_acl** | **str**| Apply a predefined set of access controls to this bucket. | [optional] 
 **predefined_default_object_acl** | **str**| Apply a predefined set of default object access controls to this bucket. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to full. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **bucket2** | [**Bucket**](Bucket.md)|  | [optional] 

### Return type

[**Bucket**](Bucket.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

