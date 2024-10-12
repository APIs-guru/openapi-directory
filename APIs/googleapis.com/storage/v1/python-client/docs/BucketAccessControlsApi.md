# openapi_client.BucketAccessControlsApi

All URIs are relative to *https://storage.googleapis.com/storage/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_bucket_access_controls_delete**](BucketAccessControlsApi.md#storage_bucket_access_controls_delete) | **DELETE** /b/{bucket}/acl/{entity} | 
[**storage_bucket_access_controls_get**](BucketAccessControlsApi.md#storage_bucket_access_controls_get) | **GET** /b/{bucket}/acl/{entity} | 
[**storage_bucket_access_controls_insert**](BucketAccessControlsApi.md#storage_bucket_access_controls_insert) | **POST** /b/{bucket}/acl | 
[**storage_bucket_access_controls_list**](BucketAccessControlsApi.md#storage_bucket_access_controls_list) | **GET** /b/{bucket}/acl | 
[**storage_bucket_access_controls_patch**](BucketAccessControlsApi.md#storage_bucket_access_controls_patch) | **PATCH** /b/{bucket}/acl/{entity} | 
[**storage_bucket_access_controls_update**](BucketAccessControlsApi.md#storage_bucket_access_controls_update) | **PUT** /b/{bucket}/acl/{entity} | 


# **storage_bucket_access_controls_delete**
> storage_bucket_access_controls_delete(bucket, entity, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)



Permanently deletes the ACL entry for the specified entity on the specified bucket.

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
    api_instance = openapi_client.BucketAccessControlsApi(api_client)
    bucket = 'bucket_example' # str | Name of a bucket.
    entity = 'entity_example' # str | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
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
        api_instance.storage_bucket_access_controls_delete(bucket, entity, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)
    except Exception as e:
        print("Exception when calling BucketAccessControlsApi->storage_bucket_access_controls_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of a bucket. | 
 **entity** | **str**| The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. | 
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

# **storage_bucket_access_controls_get**
> BucketAccessControl storage_bucket_access_controls_get(bucket, entity, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)



Returns the ACL entry for the specified entity on the specified bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bucket_access_control import BucketAccessControl
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
    api_instance = openapi_client.BucketAccessControlsApi(api_client)
    bucket = 'bucket_example' # str | Name of a bucket.
    entity = 'entity_example' # str | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
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
        api_response = api_instance.storage_bucket_access_controls_get(bucket, entity, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)
        print("The response of BucketAccessControlsApi->storage_bucket_access_controls_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketAccessControlsApi->storage_bucket_access_controls_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of a bucket. | 
 **entity** | **str**| The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. | 
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

[**BucketAccessControl**](BucketAccessControl.md)

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

# **storage_bucket_access_controls_insert**
> BucketAccessControl storage_bucket_access_controls_insert(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project, bucket_access_control=bucket_access_control)



Creates a new ACL entry on the specified bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bucket_access_control import BucketAccessControl
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
    api_instance = openapi_client.BucketAccessControlsApi(api_client)
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
    bucket_access_control = openapi_client.BucketAccessControl() # BucketAccessControl |  (optional)

    try:
        api_response = api_instance.storage_bucket_access_controls_insert(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project, bucket_access_control=bucket_access_control)
        print("The response of BucketAccessControlsApi->storage_bucket_access_controls_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketAccessControlsApi->storage_bucket_access_controls_insert: %s\n" % e)
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
 **bucket_access_control** | [**BucketAccessControl**](BucketAccessControl.md)|  | [optional] 

### Return type

[**BucketAccessControl**](BucketAccessControl.md)

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

# **storage_bucket_access_controls_list**
> BucketAccessControls storage_bucket_access_controls_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)



Retrieves ACL entries on the specified bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bucket_access_controls import BucketAccessControls
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
    api_instance = openapi_client.BucketAccessControlsApi(api_client)
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

    try:
        api_response = api_instance.storage_bucket_access_controls_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)
        print("The response of BucketAccessControlsApi->storage_bucket_access_controls_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketAccessControlsApi->storage_bucket_access_controls_list: %s\n" % e)
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

### Return type

[**BucketAccessControls**](BucketAccessControls.md)

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

# **storage_bucket_access_controls_patch**
> BucketAccessControl storage_bucket_access_controls_patch(bucket, entity, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project, bucket_access_control=bucket_access_control)



Patches an ACL entry on the specified bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bucket_access_control import BucketAccessControl
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
    api_instance = openapi_client.BucketAccessControlsApi(api_client)
    bucket = 'bucket_example' # str | Name of a bucket.
    entity = 'entity_example' # str | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    bucket_access_control = openapi_client.BucketAccessControl() # BucketAccessControl |  (optional)

    try:
        api_response = api_instance.storage_bucket_access_controls_patch(bucket, entity, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project, bucket_access_control=bucket_access_control)
        print("The response of BucketAccessControlsApi->storage_bucket_access_controls_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketAccessControlsApi->storage_bucket_access_controls_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of a bucket. | 
 **entity** | **str**| The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **bucket_access_control** | [**BucketAccessControl**](BucketAccessControl.md)|  | [optional] 

### Return type

[**BucketAccessControl**](BucketAccessControl.md)

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

# **storage_bucket_access_controls_update**
> BucketAccessControl storage_bucket_access_controls_update(bucket, entity, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project, bucket_access_control=bucket_access_control)



Updates an ACL entry on the specified bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bucket_access_control import BucketAccessControl
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
    api_instance = openapi_client.BucketAccessControlsApi(api_client)
    bucket = 'bucket_example' # str | Name of a bucket.
    entity = 'entity_example' # str | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    bucket_access_control = openapi_client.BucketAccessControl() # BucketAccessControl |  (optional)

    try:
        api_response = api_instance.storage_bucket_access_controls_update(bucket, entity, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project, bucket_access_control=bucket_access_control)
        print("The response of BucketAccessControlsApi->storage_bucket_access_controls_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketAccessControlsApi->storage_bucket_access_controls_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of a bucket. | 
 **entity** | **str**| The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **bucket_access_control** | [**BucketAccessControl**](BucketAccessControl.md)|  | [optional] 

### Return type

[**BucketAccessControl**](BucketAccessControl.md)

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

