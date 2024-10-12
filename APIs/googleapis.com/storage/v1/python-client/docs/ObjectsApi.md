# openapi_client.ObjectsApi

All URIs are relative to *https://storage.googleapis.com/storage/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_objects_bulk_restore**](ObjectsApi.md#storage_objects_bulk_restore) | **POST** /b/{bucket}/o/bulkRestore | 
[**storage_objects_compose**](ObjectsApi.md#storage_objects_compose) | **POST** /b/{destinationBucket}/o/{destinationObject}/compose | 
[**storage_objects_copy**](ObjectsApi.md#storage_objects_copy) | **POST** /b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject} | 
[**storage_objects_delete**](ObjectsApi.md#storage_objects_delete) | **DELETE** /b/{bucket}/o/{object} | 
[**storage_objects_get**](ObjectsApi.md#storage_objects_get) | **GET** /b/{bucket}/o/{object} | 
[**storage_objects_get_iam_policy**](ObjectsApi.md#storage_objects_get_iam_policy) | **GET** /b/{bucket}/o/{object}/iam | 
[**storage_objects_insert**](ObjectsApi.md#storage_objects_insert) | **POST** /b/{bucket}/o | 
[**storage_objects_list**](ObjectsApi.md#storage_objects_list) | **GET** /b/{bucket}/o | 
[**storage_objects_patch**](ObjectsApi.md#storage_objects_patch) | **PATCH** /b/{bucket}/o/{object} | 
[**storage_objects_restore**](ObjectsApi.md#storage_objects_restore) | **POST** /b/{bucket}/o/{object}/restore | 
[**storage_objects_rewrite**](ObjectsApi.md#storage_objects_rewrite) | **POST** /b/{sourceBucket}/o/{sourceObject}/rewriteTo/b/{destinationBucket}/o/{destinationObject} | 
[**storage_objects_set_iam_policy**](ObjectsApi.md#storage_objects_set_iam_policy) | **PUT** /b/{bucket}/o/{object}/iam | 
[**storage_objects_test_iam_permissions**](ObjectsApi.md#storage_objects_test_iam_permissions) | **GET** /b/{bucket}/o/{object}/iam/testPermissions | 
[**storage_objects_update**](ObjectsApi.md#storage_objects_update) | **PUT** /b/{bucket}/o/{object} | 
[**storage_objects_watch_all**](ObjectsApi.md#storage_objects_watch_all) | **POST** /b/{bucket}/o/watch | 


# **storage_objects_bulk_restore**
> GoogleLongrunningOperation storage_objects_bulk_restore(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, bulk_restore_objects_request=bulk_restore_objects_request)



Initiates a long-running bulk restore operation on the specified bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bulk_restore_objects_request import BulkRestoreObjectsRequest
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
    api_instance = openapi_client.ObjectsApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which the object resides.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    bulk_restore_objects_request = openapi_client.BulkRestoreObjectsRequest() # BulkRestoreObjectsRequest |  (optional)

    try:
        api_response = api_instance.storage_objects_bulk_restore(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, bulk_restore_objects_request=bulk_restore_objects_request)
        print("The response of ObjectsApi->storage_objects_bulk_restore:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_bulk_restore: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the object resides. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **bulk_restore_objects_request** | [**BulkRestoreObjectsRequest**](BulkRestoreObjectsRequest.md)|  | [optional] 

### Return type

[**GoogleLongrunningOperation**](GoogleLongrunningOperation.md)

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

# **storage_objects_compose**
> Object storage_objects_compose(destination_bucket, destination_object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, destination_predefined_acl=destination_predefined_acl, if_generation_match=if_generation_match, if_metageneration_match=if_metageneration_match, kms_key_name=kms_key_name, user_project=user_project, compose_request=compose_request)



Concatenates a list of existing objects into a new object in the same bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.compose_request import ComposeRequest
from openapi_client.models.object import Object
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
    api_instance = openapi_client.ObjectsApi(api_client)
    destination_bucket = 'destination_bucket_example' # str | Name of the bucket containing the source objects. The destination object is stored in this bucket.
    destination_object = 'destination_object_example' # str | Name of the new object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    destination_predefined_acl = 'destination_predefined_acl_example' # str | Apply a predefined set of access controls to the destination object. (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the object's current metageneration matches the given value. (optional)
    kms_key_name = 'kms_key_name_example' # str | Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    compose_request = openapi_client.ComposeRequest() # ComposeRequest |  (optional)

    try:
        api_response = api_instance.storage_objects_compose(destination_bucket, destination_object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, destination_predefined_acl=destination_predefined_acl, if_generation_match=if_generation_match, if_metageneration_match=if_metageneration_match, kms_key_name=kms_key_name, user_project=user_project, compose_request=compose_request)
        print("The response of ObjectsApi->storage_objects_compose:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_compose: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destination_bucket** | **str**| Name of the bucket containing the source objects. The destination object is stored in this bucket. | 
 **destination_object** | **str**| Name of the new object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **destination_predefined_acl** | **str**| Apply a predefined set of access controls to the destination object. | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration matches the given value. | [optional] 
 **kms_key_name** | **str**| Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata&#39;s kms_key_name value, if any. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **compose_request** | [**ComposeRequest**](ComposeRequest.md)|  | [optional] 

### Return type

[**Object**](Object.md)

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

# **storage_objects_copy**
> Object storage_objects_copy(source_bucket, source_object, destination_bucket, destination_object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, destination_kms_key_name=destination_kms_key_name, destination_predefined_acl=destination_predefined_acl, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, if_source_generation_match=if_source_generation_match, if_source_generation_not_match=if_source_generation_not_match, if_source_metageneration_match=if_source_metageneration_match, if_source_metageneration_not_match=if_source_metageneration_not_match, projection=projection, source_generation=source_generation, user_project=user_project, object=object)



Copies a source object to a destination object. Optionally overrides metadata.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.object import Object
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
    api_instance = openapi_client.ObjectsApi(api_client)
    source_bucket = 'source_bucket_example' # str | Name of the bucket in which to find the source object.
    source_object = 'source_object_example' # str | Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
    destination_bucket = 'destination_bucket_example' # str | Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
    destination_object = 'destination_object_example' # str | Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    destination_kms_key_name = 'destination_kms_key_name_example' # str | Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any. (optional)
    destination_predefined_acl = 'destination_predefined_acl_example' # str | Apply a predefined set of access controls to the destination object. (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the destination object's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether the destination object's current metageneration does not match the given value. (optional)
    if_source_generation_match = 'if_source_generation_match_example' # str | Makes the operation conditional on whether the source object's current generation matches the given value. (optional)
    if_source_generation_not_match = 'if_source_generation_not_match_example' # str | Makes the operation conditional on whether the source object's current generation does not match the given value. (optional)
    if_source_metageneration_match = 'if_source_metageneration_match_example' # str | Makes the operation conditional on whether the source object's current metageneration matches the given value. (optional)
    if_source_metageneration_not_match = 'if_source_metageneration_not_match_example' # str | Makes the operation conditional on whether the source object's current metageneration does not match the given value. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. (optional)
    source_generation = 'source_generation_example' # str | If present, selects a specific revision of the source object (as opposed to the latest version, the default). (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    object = openapi_client.Object() # Object |  (optional)

    try:
        api_response = api_instance.storage_objects_copy(source_bucket, source_object, destination_bucket, destination_object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, destination_kms_key_name=destination_kms_key_name, destination_predefined_acl=destination_predefined_acl, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, if_source_generation_match=if_source_generation_match, if_source_generation_not_match=if_source_generation_not_match, if_source_metageneration_match=if_source_metageneration_match, if_source_metageneration_not_match=if_source_metageneration_not_match, projection=projection, source_generation=source_generation, user_project=user_project, object=object)
        print("The response of ObjectsApi->storage_objects_copy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_copy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_bucket** | **str**| Name of the bucket in which to find the source object. | 
 **source_object** | **str**| Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). | 
 **destination_bucket** | **str**| Name of the bucket in which to store the new object. Overrides the provided object metadata&#39;s bucket value, if any.For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). | 
 **destination_object** | **str**| Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata&#39;s name value, if any. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **destination_kms_key_name** | **str**| Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata&#39;s kms_key_name value, if any. | [optional] 
 **destination_predefined_acl** | **str**| Apply a predefined set of access controls to the destination object. | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the destination object&#39;s current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether the destination object&#39;s current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the destination object&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether the destination object&#39;s current metageneration does not match the given value. | [optional] 
 **if_source_generation_match** | **str**| Makes the operation conditional on whether the source object&#39;s current generation matches the given value. | [optional] 
 **if_source_generation_not_match** | **str**| Makes the operation conditional on whether the source object&#39;s current generation does not match the given value. | [optional] 
 **if_source_metageneration_match** | **str**| Makes the operation conditional on whether the source object&#39;s current metageneration matches the given value. | [optional] 
 **if_source_metageneration_not_match** | **str**| Makes the operation conditional on whether the source object&#39;s current metageneration does not match the given value. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. | [optional] 
 **source_generation** | **str**| If present, selects a specific revision of the source object (as opposed to the latest version, the default). | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **object** | [**Object**](Object.md)|  | [optional] 

### Return type

[**Object**](Object.md)

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

# **storage_objects_delete**
> storage_objects_delete(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, user_project=user_project)



Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

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
    api_instance = openapi_client.ObjectsApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which the object resides.
    object = 'object_example' # str | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    generation = 'generation_example' # str | If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default). (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the object's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether the object's current metageneration does not match the given value. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)

    try:
        api_instance.storage_objects_delete(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, user_project=user_project)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the object resides. | 
 **object** | **str**| Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **generation** | **str**| If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default). | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration does not match the given value. | [optional] 
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

# **storage_objects_get**
> Object storage_objects_get(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, projection=projection, soft_deleted=soft_deleted, user_project=user_project)



Retrieves an object or its metadata.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.object import Object
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
    api_instance = openapi_client.ObjectsApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which the object resides.
    object = 'object_example' # str | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    generation = 'generation_example' # str | If present, selects a specific revision of this object (as opposed to the latest version, the default). (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the object's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether the object's current metageneration does not match the given value. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl. (optional)
    soft_deleted = True # bool | If true, only soft-deleted object versions will be listed. The default is false. For more information, see Soft Delete. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)

    try:
        api_response = api_instance.storage_objects_get(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, projection=projection, soft_deleted=soft_deleted, user_project=user_project)
        print("The response of ObjectsApi->storage_objects_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the object resides. | 
 **object** | **str**| Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **generation** | **str**| If present, selects a specific revision of this object (as opposed to the latest version, the default). | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration does not match the given value. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl. | [optional] 
 **soft_deleted** | **bool**| If true, only soft-deleted object versions will be listed. The default is false. For more information, see Soft Delete. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 

### Return type

[**Object**](Object.md)

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

# **storage_objects_get_iam_policy**
> Policy storage_objects_get_iam_policy(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, user_project=user_project)



Returns an IAM policy for the specified object.

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
    api_instance = openapi_client.ObjectsApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which the object resides.
    object = 'object_example' # str | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    generation = 'generation_example' # str | If present, selects a specific revision of this object (as opposed to the latest version, the default). (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)

    try:
        api_response = api_instance.storage_objects_get_iam_policy(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, user_project=user_project)
        print("The response of ObjectsApi->storage_objects_get_iam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_get_iam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the object resides. | 
 **object** | **str**| Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **generation** | **str**| If present, selects a specific revision of this object (as opposed to the latest version, the default). | [optional] 
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

# **storage_objects_insert**
> Object storage_objects_insert(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, content_encoding=content_encoding, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, kms_key_name=kms_key_name, name=name, predefined_acl=predefined_acl, projection=projection, user_project=user_project, object=object)



Stores a new object and metadata.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.object import Object
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
    api_instance = openapi_client.ObjectsApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    content_encoding = 'content_encoding_example' # str | If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded. (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the object's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether the object's current metageneration does not match the given value. (optional)
    kms_key_name = 'kms_key_name_example' # str | Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any. (optional)
    name = 'name_example' # str | Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). (optional)
    predefined_acl = 'predefined_acl_example' # str | Apply a predefined set of access controls to this object. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    object = openapi_client.Object() # Object |  (optional)

    try:
        api_response = api_instance.storage_objects_insert(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, content_encoding=content_encoding, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, kms_key_name=kms_key_name, name=name, predefined_acl=predefined_acl, projection=projection, user_project=user_project, object=object)
        print("The response of ObjectsApi->storage_objects_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which to store the new object. Overrides the provided object metadata&#39;s bucket value, if any. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **content_encoding** | **str**| If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType&#x3D;media to indicate the encoding of the content being uploaded. | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration does not match the given value. | [optional] 
 **kms_key_name** | **str**| Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata&#39;s kms_key_name value, if any. | [optional] 
 **name** | **str**| Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata&#39;s name value, if any. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). | [optional] 
 **predefined_acl** | **str**| Apply a predefined set of access controls to this object. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **object** | [**Object**](Object.md)|  | [optional] 

### Return type

[**Object**](Object.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_objects_list**
> Objects storage_objects_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, delimiter=delimiter, end_offset=end_offset, include_folders_as_prefixes=include_folders_as_prefixes, include_trailing_delimiter=include_trailing_delimiter, match_glob=match_glob, max_results=max_results, page_token=page_token, prefix=prefix, projection=projection, soft_deleted=soft_deleted, start_offset=start_offset, user_project=user_project, versions=versions)



Retrieves a list of objects matching the criteria.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.objects import Objects
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
    api_instance = openapi_client.ObjectsApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which to look for objects.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    delimiter = 'delimiter_example' # str | Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted. (optional)
    end_offset = 'end_offset_example' # str | Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive). (optional)
    include_folders_as_prefixes = True # bool | Only applicable if delimiter is set to '/'. If true, will also include folders and managed folders (besides objects) in the returned prefixes. (optional)
    include_trailing_delimiter = True # bool | If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes. (optional)
    match_glob = 'match_glob_example' # str | Filter results to objects and prefixes that match this glob pattern. (optional)
    max_results = 56 # int | Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller. (optional)
    page_token = 'page_token_example' # str | A previously-returned page token representing part of the larger set of results to view. (optional)
    prefix = 'prefix_example' # str | Filter results to objects whose names begin with this prefix. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl. (optional)
    soft_deleted = True # bool | If true, only soft-deleted object versions will be listed. The default is false. For more information, see Soft Delete. (optional)
    start_offset = 'start_offset_example' # str | Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive). (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    versions = True # bool | If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning. (optional)

    try:
        api_response = api_instance.storage_objects_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, delimiter=delimiter, end_offset=end_offset, include_folders_as_prefixes=include_folders_as_prefixes, include_trailing_delimiter=include_trailing_delimiter, match_glob=match_glob, max_results=max_results, page_token=page_token, prefix=prefix, projection=projection, soft_deleted=soft_deleted, start_offset=start_offset, user_project=user_project, versions=versions)
        print("The response of ObjectsApi->storage_objects_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which to look for objects. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **delimiter** | **str**| Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted. | [optional] 
 **end_offset** | **str**| Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive). | [optional] 
 **include_folders_as_prefixes** | **bool**| Only applicable if delimiter is set to &#39;/&#39;. If true, will also include folders and managed folders (besides objects) in the returned prefixes. | [optional] 
 **include_trailing_delimiter** | **bool**| If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes. | [optional] 
 **match_glob** | **str**| Filter results to objects and prefixes that match this glob pattern. | [optional] 
 **max_results** | **int**| Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller. | [optional] 
 **page_token** | **str**| A previously-returned page token representing part of the larger set of results to view. | [optional] 
 **prefix** | **str**| Filter results to objects whose names begin with this prefix. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl. | [optional] 
 **soft_deleted** | **bool**| If true, only soft-deleted object versions will be listed. The default is false. For more information, see Soft Delete. | [optional] 
 **start_offset** | **str**| Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive). | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **versions** | **bool**| If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning. | [optional] 

### Return type

[**Objects**](Objects.md)

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

# **storage_objects_patch**
> Object storage_objects_patch(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, override_unlocked_retention=override_unlocked_retention, predefined_acl=predefined_acl, projection=projection, user_project=user_project, object2=object2)



Patches an object's metadata.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.object import Object
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
    api_instance = openapi_client.ObjectsApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which the object resides.
    object = 'object_example' # str | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    generation = 'generation_example' # str | If present, selects a specific revision of this object (as opposed to the latest version, the default). (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the object's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether the object's current metageneration does not match the given value. (optional)
    override_unlocked_retention = True # bool | Must be true to remove the retention configuration, reduce its unlocked retention period, or change its mode from unlocked to locked. (optional)
    predefined_acl = 'predefined_acl_example' # str | Apply a predefined set of access controls to this object. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to full. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request, for Requester Pays buckets. (optional)
    object2 = openapi_client.Object() # Object |  (optional)

    try:
        api_response = api_instance.storage_objects_patch(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, override_unlocked_retention=override_unlocked_retention, predefined_acl=predefined_acl, projection=projection, user_project=user_project, object2=object2)
        print("The response of ObjectsApi->storage_objects_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the object resides. | 
 **object** | **str**| Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **generation** | **str**| If present, selects a specific revision of this object (as opposed to the latest version, the default). | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration does not match the given value. | [optional] 
 **override_unlocked_retention** | **bool**| Must be true to remove the retention configuration, reduce its unlocked retention period, or change its mode from unlocked to locked. | [optional] 
 **predefined_acl** | **str**| Apply a predefined set of access controls to this object. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to full. | [optional] 
 **user_project** | **str**| The project to be billed for this request, for Requester Pays buckets. | [optional] 
 **object2** | [**Object**](Object.md)|  | [optional] 

### Return type

[**Object**](Object.md)

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

# **storage_objects_restore**
> Object storage_objects_restore(bucket, object, generation, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, copy_source_acl=copy_source_acl, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, projection=projection, user_project=user_project, object2=object2)



Restores a soft-deleted object.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.object import Object
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
    api_instance = openapi_client.ObjectsApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which the object resides.
    object = 'object_example' # str | Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
    generation = 'generation_example' # str | Selects a specific revision of this object.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    copy_source_acl = True # bool | If true, copies the source object's ACL; otherwise, uses the bucket's default object ACL. The default is false. (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's one live generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether none of the object's live generations match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the object's one live metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether none of the object's live metagenerations match the given value. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to full. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    object2 = openapi_client.Object() # Object |  (optional)

    try:
        api_response = api_instance.storage_objects_restore(bucket, object, generation, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, copy_source_acl=copy_source_acl, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, projection=projection, user_project=user_project, object2=object2)
        print("The response of ObjectsApi->storage_objects_restore:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_restore: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the object resides. | 
 **object** | **str**| Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts. | 
 **generation** | **str**| Selects a specific revision of this object. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **copy_source_acl** | **bool**| If true, copies the source object&#39;s ACL; otherwise, uses the bucket&#39;s default object ACL. The default is false. | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s one live generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether none of the object&#39;s live generations match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the object&#39;s one live metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether none of the object&#39;s live metagenerations match the given value. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to full. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **object2** | [**Object**](Object.md)|  | [optional] 

### Return type

[**Object**](Object.md)

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

# **storage_objects_rewrite**
> RewriteResponse storage_objects_rewrite(source_bucket, source_object, destination_bucket, destination_object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, destination_kms_key_name=destination_kms_key_name, destination_predefined_acl=destination_predefined_acl, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, if_source_generation_match=if_source_generation_match, if_source_generation_not_match=if_source_generation_not_match, if_source_metageneration_match=if_source_metageneration_match, if_source_metageneration_not_match=if_source_metageneration_not_match, max_bytes_rewritten_per_call=max_bytes_rewritten_per_call, projection=projection, rewrite_token=rewrite_token, source_generation=source_generation, user_project=user_project, object=object)



Rewrites a source object to a destination object. Optionally overrides metadata.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.object import Object
from openapi_client.models.rewrite_response import RewriteResponse
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
    api_instance = openapi_client.ObjectsApi(api_client)
    source_bucket = 'source_bucket_example' # str | Name of the bucket in which to find the source object.
    source_object = 'source_object_example' # str | Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
    destination_bucket = 'destination_bucket_example' # str | Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
    destination_object = 'destination_object_example' # str | Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    destination_kms_key_name = 'destination_kms_key_name_example' # str | Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any. (optional)
    destination_predefined_acl = 'destination_predefined_acl_example' # str | Apply a predefined set of access controls to the destination object. (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the destination object's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether the destination object's current metageneration does not match the given value. (optional)
    if_source_generation_match = 'if_source_generation_match_example' # str | Makes the operation conditional on whether the source object's current generation matches the given value. (optional)
    if_source_generation_not_match = 'if_source_generation_not_match_example' # str | Makes the operation conditional on whether the source object's current generation does not match the given value. (optional)
    if_source_metageneration_match = 'if_source_metageneration_match_example' # str | Makes the operation conditional on whether the source object's current metageneration matches the given value. (optional)
    if_source_metageneration_not_match = 'if_source_metageneration_not_match_example' # str | Makes the operation conditional on whether the source object's current metageneration does not match the given value. (optional)
    max_bytes_rewritten_per_call = 'max_bytes_rewritten_per_call_example' # str | The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. (optional)
    rewrite_token = 'rewrite_token_example' # str | Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request. (optional)
    source_generation = 'source_generation_example' # str | If present, selects a specific revision of the source object (as opposed to the latest version, the default). (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    object = openapi_client.Object() # Object |  (optional)

    try:
        api_response = api_instance.storage_objects_rewrite(source_bucket, source_object, destination_bucket, destination_object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, destination_kms_key_name=destination_kms_key_name, destination_predefined_acl=destination_predefined_acl, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, if_source_generation_match=if_source_generation_match, if_source_generation_not_match=if_source_generation_not_match, if_source_metageneration_match=if_source_metageneration_match, if_source_metageneration_not_match=if_source_metageneration_not_match, max_bytes_rewritten_per_call=max_bytes_rewritten_per_call, projection=projection, rewrite_token=rewrite_token, source_generation=source_generation, user_project=user_project, object=object)
        print("The response of ObjectsApi->storage_objects_rewrite:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_rewrite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_bucket** | **str**| Name of the bucket in which to find the source object. | 
 **source_object** | **str**| Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). | 
 **destination_bucket** | **str**| Name of the bucket in which to store the new object. Overrides the provided object metadata&#39;s bucket value, if any. | 
 **destination_object** | **str**| Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata&#39;s name value, if any. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **destination_kms_key_name** | **str**| Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata&#39;s kms_key_name value, if any. | [optional] 
 **destination_predefined_acl** | **str**| Apply a predefined set of access controls to the destination object. | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the destination object&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether the destination object&#39;s current metageneration does not match the given value. | [optional] 
 **if_source_generation_match** | **str**| Makes the operation conditional on whether the source object&#39;s current generation matches the given value. | [optional] 
 **if_source_generation_not_match** | **str**| Makes the operation conditional on whether the source object&#39;s current generation does not match the given value. | [optional] 
 **if_source_metageneration_match** | **str**| Makes the operation conditional on whether the source object&#39;s current metageneration matches the given value. | [optional] 
 **if_source_metageneration_not_match** | **str**| Makes the operation conditional on whether the source object&#39;s current metageneration does not match the given value. | [optional] 
 **max_bytes_rewritten_per_call** | **str**| The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn&#39;t need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you&#39;ll get an error that the rewriteToken is invalid. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. | [optional] 
 **rewrite_token** | **str**| Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response &#39;done&#39; flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request. | [optional] 
 **source_generation** | **str**| If present, selects a specific revision of the source object (as opposed to the latest version, the default). | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **object** | [**Object**](Object.md)|  | [optional] 

### Return type

[**RewriteResponse**](RewriteResponse.md)

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

# **storage_objects_set_iam_policy**
> Policy storage_objects_set_iam_policy(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, user_project=user_project, policy=policy)



Updates an IAM policy for the specified object.

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
    api_instance = openapi_client.ObjectsApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which the object resides.
    object = 'object_example' # str | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    generation = 'generation_example' # str | If present, selects a specific revision of this object (as opposed to the latest version, the default). (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    policy = openapi_client.Policy() # Policy |  (optional)

    try:
        api_response = api_instance.storage_objects_set_iam_policy(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, user_project=user_project, policy=policy)
        print("The response of ObjectsApi->storage_objects_set_iam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_set_iam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the object resides. | 
 **object** | **str**| Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **generation** | **str**| If present, selects a specific revision of this object (as opposed to the latest version, the default). | [optional] 
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

# **storage_objects_test_iam_permissions**
> TestIamPermissionsResponse storage_objects_test_iam_permissions(bucket, object, permissions, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, user_project=user_project)



Tests a set of permissions on the given object to see which, if any, are held by the caller.

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
    api_instance = openapi_client.ObjectsApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which the object resides.
    object = 'object_example' # str | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
    permissions = ['permissions_example'] # List[str] | Permissions to test.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    generation = 'generation_example' # str | If present, selects a specific revision of this object (as opposed to the latest version, the default). (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)

    try:
        api_response = api_instance.storage_objects_test_iam_permissions(bucket, object, permissions, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, user_project=user_project)
        print("The response of ObjectsApi->storage_objects_test_iam_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_test_iam_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the object resides. | 
 **object** | **str**| Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). | 
 **permissions** | [**List[str]**](str.md)| Permissions to test. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **generation** | **str**| If present, selects a specific revision of this object (as opposed to the latest version, the default). | [optional] 
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

# **storage_objects_update**
> Object storage_objects_update(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, override_unlocked_retention=override_unlocked_retention, predefined_acl=predefined_acl, projection=projection, user_project=user_project, object2=object2)



Updates an object's metadata.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.object import Object
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
    api_instance = openapi_client.ObjectsApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which the object resides.
    object = 'object_example' # str | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    generation = 'generation_example' # str | If present, selects a specific revision of this object (as opposed to the latest version, the default). (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the object's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether the object's current metageneration does not match the given value. (optional)
    override_unlocked_retention = True # bool | Must be true to remove the retention configuration, reduce its unlocked retention period, or change its mode from unlocked to locked. (optional)
    predefined_acl = 'predefined_acl_example' # str | Apply a predefined set of access controls to this object. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to full. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    object2 = openapi_client.Object() # Object |  (optional)

    try:
        api_response = api_instance.storage_objects_update(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, override_unlocked_retention=override_unlocked_retention, predefined_acl=predefined_acl, projection=projection, user_project=user_project, object2=object2)
        print("The response of ObjectsApi->storage_objects_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the object resides. | 
 **object** | **str**| Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **generation** | **str**| If present, selects a specific revision of this object (as opposed to the latest version, the default). | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration does not match the given value. | [optional] 
 **override_unlocked_retention** | **bool**| Must be true to remove the retention configuration, reduce its unlocked retention period, or change its mode from unlocked to locked. | [optional] 
 **predefined_acl** | **str**| Apply a predefined set of access controls to this object. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to full. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **object2** | [**Object**](Object.md)|  | [optional] 

### Return type

[**Object**](Object.md)

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

# **storage_objects_watch_all**
> Channel storage_objects_watch_all(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, delimiter=delimiter, end_offset=end_offset, include_trailing_delimiter=include_trailing_delimiter, max_results=max_results, page_token=page_token, prefix=prefix, projection=projection, start_offset=start_offset, user_project=user_project, versions=versions, channel=channel)



Watch for changes on all objects in a bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.channel import Channel
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
    api_instance = openapi_client.ObjectsApi(api_client)
    bucket = 'bucket_example' # str | Name of the bucket in which to look for objects.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    delimiter = 'delimiter_example' # str | Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted. (optional)
    end_offset = 'end_offset_example' # str | Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive). (optional)
    include_trailing_delimiter = True # bool | If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes. (optional)
    max_results = 56 # int | Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller. (optional)
    page_token = 'page_token_example' # str | A previously-returned page token representing part of the larger set of results to view. (optional)
    prefix = 'prefix_example' # str | Filter results to objects whose names begin with this prefix. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl. (optional)
    start_offset = 'start_offset_example' # str | Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive). (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    versions = True # bool | If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning. (optional)
    channel = openapi_client.Channel() # Channel |  (optional)

    try:
        api_response = api_instance.storage_objects_watch_all(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, delimiter=delimiter, end_offset=end_offset, include_trailing_delimiter=include_trailing_delimiter, max_results=max_results, page_token=page_token, prefix=prefix, projection=projection, start_offset=start_offset, user_project=user_project, versions=versions, channel=channel)
        print("The response of ObjectsApi->storage_objects_watch_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_watch_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which to look for objects. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **delimiter** | **str**| Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted. | [optional] 
 **end_offset** | **str**| Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive). | [optional] 
 **include_trailing_delimiter** | **bool**| If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes. | [optional] 
 **max_results** | **int**| Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller. | [optional] 
 **page_token** | **str**| A previously-returned page token representing part of the larger set of results to view. | [optional] 
 **prefix** | **str**| Filter results to objects whose names begin with this prefix. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl. | [optional] 
 **start_offset** | **str**| Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive). | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **versions** | **bool**| If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning. | [optional] 
 **channel** | [**Channel**](Channel.md)|  | [optional] 

### Return type

[**Channel**](Channel.md)

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

