# openapi_client.NotificationsApi

All URIs are relative to *https://storage.googleapis.com/storage/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_notifications_delete**](NotificationsApi.md#storage_notifications_delete) | **DELETE** /b/{bucket}/notificationConfigs/{notification} | 
[**storage_notifications_get**](NotificationsApi.md#storage_notifications_get) | **GET** /b/{bucket}/notificationConfigs/{notification} | 
[**storage_notifications_insert**](NotificationsApi.md#storage_notifications_insert) | **POST** /b/{bucket}/notificationConfigs | 
[**storage_notifications_list**](NotificationsApi.md#storage_notifications_list) | **GET** /b/{bucket}/notificationConfigs | 


# **storage_notifications_delete**
> storage_notifications_delete(bucket, notification, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)



Permanently deletes a notification subscription.

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
    api_instance = openapi_client.NotificationsApi(api_client)
    bucket = 'bucket_example' # str | The parent bucket of the notification.
    notification = 'notification_example' # str | ID of the notification to delete.
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
        api_instance.storage_notifications_delete(bucket, notification, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)
    except Exception as e:
        print("Exception when calling NotificationsApi->storage_notifications_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| The parent bucket of the notification. | 
 **notification** | **str**| ID of the notification to delete. | 
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

# **storage_notifications_get**
> Notification storage_notifications_get(bucket, notification, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)



View a notification configuration.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.notification import Notification
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
    api_instance = openapi_client.NotificationsApi(api_client)
    bucket = 'bucket_example' # str | The parent bucket of the notification.
    notification = 'notification_example' # str | Notification ID
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
        api_response = api_instance.storage_notifications_get(bucket, notification, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)
        print("The response of NotificationsApi->storage_notifications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->storage_notifications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| The parent bucket of the notification. | 
 **notification** | **str**| Notification ID | 
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

[**Notification**](Notification.md)

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

# **storage_notifications_insert**
> Notification storage_notifications_insert(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project, notification=notification)



Creates a notification subscription for a given bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.notification import Notification
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
    api_instance = openapi_client.NotificationsApi(api_client)
    bucket = 'bucket_example' # str | The parent bucket of the notification.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    upload_type = 'upload_type_example' # str | Upload protocol for media (e.g. \"media\", \"multipart\", \"resumable\"). (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    user_project = 'user_project_example' # str | The project to be billed for this request. Required for Requester Pays buckets. (optional)
    notification = openapi_client.Notification() # Notification |  (optional)

    try:
        api_response = api_instance.storage_notifications_insert(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project, notification=notification)
        print("The response of NotificationsApi->storage_notifications_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->storage_notifications_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| The parent bucket of the notification. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **upload_type** | **str**| Upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;, \&quot;resumable\&quot;). | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **user_project** | **str**| The project to be billed for this request. Required for Requester Pays buckets. | [optional] 
 **notification** | [**Notification**](Notification.md)|  | [optional] 

### Return type

[**Notification**](Notification.md)

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

# **storage_notifications_list**
> Notifications storage_notifications_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)



Retrieves a list of notification subscriptions for a given bucket.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.notifications import Notifications
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
    api_instance = openapi_client.NotificationsApi(api_client)
    bucket = 'bucket_example' # str | Name of a Google Cloud Storage bucket.
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
        api_response = api_instance.storage_notifications_list(bucket, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_type=upload_type, user_ip=user_ip, user_project=user_project)
        print("The response of NotificationsApi->storage_notifications_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->storage_notifications_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **str**| Name of a Google Cloud Storage bucket. | 
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

[**Notifications**](Notifications.md)

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

