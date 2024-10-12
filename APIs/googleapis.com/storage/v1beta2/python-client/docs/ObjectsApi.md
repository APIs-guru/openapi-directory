# openapi_client.ObjectsApi

All URIs are relative to *https://storage.googleapis.com/storage/v1beta2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_objects_compose**](ObjectsApi.md#storage_objects_compose) | **POST** /b/{destinationBucket}/o/{destinationObject}/compose | 
[**storage_objects_copy**](ObjectsApi.md#storage_objects_copy) | **POST** /b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject} | 
[**storage_objects_delete**](ObjectsApi.md#storage_objects_delete) | **DELETE** /b/{bucket}/o/{object} | 
[**storage_objects_get**](ObjectsApi.md#storage_objects_get) | **GET** /b/{bucket}/o/{object} | 
[**storage_objects_insert**](ObjectsApi.md#storage_objects_insert) | **POST** /b/{bucket}/o | 
[**storage_objects_list**](ObjectsApi.md#storage_objects_list) | **GET** /b/{bucket}/o | 
[**storage_objects_patch**](ObjectsApi.md#storage_objects_patch) | **PATCH** /b/{bucket}/o/{object} | 
[**storage_objects_update**](ObjectsApi.md#storage_objects_update) | **PUT** /b/{bucket}/o/{object} | 
[**storage_objects_watch_all**](ObjectsApi.md#storage_objects_watch_all) | **POST** /b/{bucket}/o/watch | 


# **storage_objects_compose**
> Object storage_objects_compose(destination_bucket, destination_object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, if_generation_match=if_generation_match, if_metageneration_match=if_metageneration_match, compose_request=compose_request)



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

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1beta2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1beta2"
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
    destination_object = 'destination_object_example' # str | Name of the new object.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's current generation matches the given value. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the object's current metageneration matches the given value. (optional)
    compose_request = openapi_client.ComposeRequest() # ComposeRequest |  (optional)

    try:
        api_response = api_instance.storage_objects_compose(destination_bucket, destination_object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, if_generation_match=if_generation_match, if_metageneration_match=if_metageneration_match, compose_request=compose_request)
        print("The response of ObjectsApi->storage_objects_compose:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_compose: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destination_bucket** | **str**| Name of the bucket containing the source objects. The destination object is stored in this bucket. | 
 **destination_object** | **str**| Name of the new object. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation matches the given value. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration matches the given value. | [optional] 
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
> Object storage_objects_copy(source_bucket, source_object, destination_bucket, destination_object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, if_source_generation_match=if_source_generation_match, if_source_generation_not_match=if_source_generation_not_match, if_source_metageneration_match=if_source_metageneration_match, if_source_metageneration_not_match=if_source_metageneration_not_match, projection=projection, source_generation=source_generation, object=object)



Copies an object to a destination in the same location. Optionally overrides metadata.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.object import Object
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1beta2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1beta2"
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
    source_object = 'source_object_example' # str | Name of the source object.
    destination_bucket = 'destination_bucket_example' # str | Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
    destination_object = 'destination_object_example' # str | Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the destination object's current generation matches the given value. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether the destination object's current generation does not match the given value. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the destination object's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether the destination object's current metageneration does not match the given value. (optional)
    if_source_generation_match = 'if_source_generation_match_example' # str | Makes the operation conditional on whether the source object's generation matches the given value. (optional)
    if_source_generation_not_match = 'if_source_generation_not_match_example' # str | Makes the operation conditional on whether the source object's generation does not match the given value. (optional)
    if_source_metageneration_match = 'if_source_metageneration_match_example' # str | Makes the operation conditional on whether the source object's current metageneration matches the given value. (optional)
    if_source_metageneration_not_match = 'if_source_metageneration_not_match_example' # str | Makes the operation conditional on whether the source object's current metageneration does not match the given value. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. (optional)
    source_generation = 'source_generation_example' # str | If present, selects a specific revision of the source object (as opposed to the latest version, the default). (optional)
    object = openapi_client.Object() # Object |  (optional)

    try:
        api_response = api_instance.storage_objects_copy(source_bucket, source_object, destination_bucket, destination_object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, if_source_generation_match=if_source_generation_match, if_source_generation_not_match=if_source_generation_not_match, if_source_metageneration_match=if_source_metageneration_match, if_source_metageneration_not_match=if_source_metageneration_not_match, projection=projection, source_generation=source_generation, object=object)
        print("The response of ObjectsApi->storage_objects_copy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_copy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_bucket** | **str**| Name of the bucket in which to find the source object. | 
 **source_object** | **str**| Name of the source object. | 
 **destination_bucket** | **str**| Name of the bucket in which to store the new object. Overrides the provided object metadata&#39;s bucket value, if any. | 
 **destination_object** | **str**| Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata&#39;s name value, if any. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the destination object&#39;s current generation matches the given value. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether the destination object&#39;s current generation does not match the given value. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the destination object&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether the destination object&#39;s current metageneration does not match the given value. | [optional] 
 **if_source_generation_match** | **str**| Makes the operation conditional on whether the source object&#39;s generation matches the given value. | [optional] 
 **if_source_generation_not_match** | **str**| Makes the operation conditional on whether the source object&#39;s generation does not match the given value. | [optional] 
 **if_source_metageneration_match** | **str**| Makes the operation conditional on whether the source object&#39;s current metageneration matches the given value. | [optional] 
 **if_source_metageneration_not_match** | **str**| Makes the operation conditional on whether the source object&#39;s current metageneration does not match the given value. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. | [optional] 
 **source_generation** | **str**| If present, selects a specific revision of the source object (as opposed to the latest version, the default). | [optional] 
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
> storage_objects_delete(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match)



Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1beta2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1beta2"
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
    object = 'object_example' # str | Name of the object.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    generation = 'generation_example' # str | If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default). (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's current generation matches the given value. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether the object's current generation does not match the given value. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the object's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether the object's current metageneration does not match the given value. (optional)

    try:
        api_instance.storage_objects_delete(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the object resides. | 
 **object** | **str**| Name of the object. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **generation** | **str**| If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default). | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation matches the given value. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation does not match the given value. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration does not match the given value. | [optional] 

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
> Object storage_objects_get(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, projection=projection)



Retrieves objects or their associated metadata.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.object import Object
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1beta2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1beta2"
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
    object = 'object_example' # str | Name of the object.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    generation = 'generation_example' # str | If present, selects a specific revision of this object (as opposed to the latest version, the default). (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's generation matches the given value. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether the object's generation does not match the given value. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the object's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether the object's current metageneration does not match the given value. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl. (optional)

    try:
        api_response = api_instance.storage_objects_get(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, projection=projection)
        print("The response of ObjectsApi->storage_objects_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the object resides. | 
 **object** | **str**| Name of the object. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **generation** | **str**| If present, selects a specific revision of this object (as opposed to the latest version, the default). | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s generation matches the given value. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether the object&#39;s generation does not match the given value. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration does not match the given value. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl. | [optional] 

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

# **storage_objects_insert**
> Object storage_objects_insert(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, name=name, projection=projection, object=object)



Stores new data blobs and associated metadata.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.object import Object
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1beta2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1beta2"
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
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's current generation matches the given value. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether the object's current generation does not match the given value. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the object's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether the object's current metageneration does not match the given value. (optional)
    name = 'name_example' # str | Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. (optional)
    object = openapi_client.Object() # Object |  (optional)

    try:
        api_response = api_instance.storage_objects_insert(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, name=name, projection=projection, object=object)
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
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation matches the given value. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation does not match the given value. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration does not match the given value. | [optional] 
 **name** | **str**| Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata&#39;s name value, if any. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. | [optional] 
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
> Objects storage_objects_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, delimiter=delimiter, max_results=max_results, page_token=page_token, prefix=prefix, projection=projection, versions=versions)



Retrieves a list of objects matching the criteria.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.objects import Objects
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1beta2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1beta2"
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
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    delimiter = 'delimiter_example' # str | Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted. (optional)
    max_results = 56 # int | Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested. (optional)
    page_token = 'page_token_example' # str | A previously-returned page token representing part of the larger set of results to view. (optional)
    prefix = 'prefix_example' # str | Filter results to objects whose names begin with this prefix. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl. (optional)
    versions = True # bool | If true, lists all versions of a file as distinct results. (optional)

    try:
        api_response = api_instance.storage_objects_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, delimiter=delimiter, max_results=max_results, page_token=page_token, prefix=prefix, projection=projection, versions=versions)
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
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **delimiter** | **str**| Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted. | [optional] 
 **max_results** | **int**| Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested. | [optional] 
 **page_token** | **str**| A previously-returned page token representing part of the larger set of results to view. | [optional] 
 **prefix** | **str**| Filter results to objects whose names begin with this prefix. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl. | [optional] 
 **versions** | **bool**| If true, lists all versions of a file as distinct results. | [optional] 

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
> Object storage_objects_patch(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, projection=projection, object2=object2)



Updates a data blob's associated metadata. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.object import Object
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1beta2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1beta2"
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
    object = 'object_example' # str | Name of the object.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    generation = 'generation_example' # str | If present, selects a specific revision of this object (as opposed to the latest version, the default). (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's current generation matches the given value. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether the object's current generation does not match the given value. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the object's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether the object's current metageneration does not match the given value. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to full. (optional)
    object2 = openapi_client.Object() # Object |  (optional)

    try:
        api_response = api_instance.storage_objects_patch(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, projection=projection, object2=object2)
        print("The response of ObjectsApi->storage_objects_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the object resides. | 
 **object** | **str**| Name of the object. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **generation** | **str**| If present, selects a specific revision of this object (as opposed to the latest version, the default). | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation matches the given value. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation does not match the given value. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration does not match the given value. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to full. | [optional] 
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

# **storage_objects_update**
> Object storage_objects_update(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, projection=projection, object2=object2)



Updates a data blob's associated metadata.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.object import Object
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1beta2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1beta2"
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
    object = 'object_example' # str | Name of the object.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    generation = 'generation_example' # str | If present, selects a specific revision of this object (as opposed to the latest version, the default). (optional)
    if_generation_match = 'if_generation_match_example' # str | Makes the operation conditional on whether the object's current generation matches the given value. (optional)
    if_generation_not_match = 'if_generation_not_match_example' # str | Makes the operation conditional on whether the object's current generation does not match the given value. (optional)
    if_metageneration_match = 'if_metageneration_match_example' # str | Makes the operation conditional on whether the object's current metageneration matches the given value. (optional)
    if_metageneration_not_match = 'if_metageneration_not_match_example' # str | Makes the operation conditional on whether the object's current metageneration does not match the given value. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to full. (optional)
    object2 = openapi_client.Object() # Object |  (optional)

    try:
        api_response = api_instance.storage_objects_update(bucket, object, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, generation=generation, if_generation_match=if_generation_match, if_generation_not_match=if_generation_not_match, if_metageneration_match=if_metageneration_match, if_metageneration_not_match=if_metageneration_not_match, projection=projection, object2=object2)
        print("The response of ObjectsApi->storage_objects_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ObjectsApi->storage_objects_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of the bucket in which the object resides. | 
 **object** | **str**| Name of the object. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **generation** | **str**| If present, selects a specific revision of this object (as opposed to the latest version, the default). | [optional] 
 **if_generation_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation matches the given value. | [optional] 
 **if_generation_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current generation does not match the given value. | [optional] 
 **if_metageneration_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration matches the given value. | [optional] 
 **if_metageneration_not_match** | **str**| Makes the operation conditional on whether the object&#39;s current metageneration does not match the given value. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to full. | [optional] 
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
> Channel storage_objects_watch_all(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, delimiter=delimiter, max_results=max_results, page_token=page_token, prefix=prefix, projection=projection, versions=versions, channel=channel)



Watch for changes on all objects in a bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.channel import Channel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://storage.googleapis.com/storage/v1beta2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://storage.googleapis.com/storage/v1beta2"
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
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    delimiter = 'delimiter_example' # str | Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted. (optional)
    max_results = 56 # int | Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested. (optional)
    page_token = 'page_token_example' # str | A previously-returned page token representing part of the larger set of results to view. (optional)
    prefix = 'prefix_example' # str | Filter results to objects whose names begin with this prefix. (optional)
    projection = 'projection_example' # str | Set of properties to return. Defaults to noAcl. (optional)
    versions = True # bool | If true, lists all versions of a file as distinct results. (optional)
    channel = openapi_client.Channel() # Channel |  (optional)

    try:
        api_response = api_instance.storage_objects_watch_all(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, delimiter=delimiter, max_results=max_results, page_token=page_token, prefix=prefix, projection=projection, versions=versions, channel=channel)
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
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **delimiter** | **str**| Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted. | [optional] 
 **max_results** | **int**| Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested. | [optional] 
 **page_token** | **str**| A previously-returned page token representing part of the larger set of results to view. | [optional] 
 **prefix** | **str**| Filter results to objects whose names begin with this prefix. | [optional] 
 **projection** | **str**| Set of properties to return. Defaults to noAcl. | [optional] 
 **versions** | **bool**| If true, lists all versions of a file as distinct results. | [optional] 
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

