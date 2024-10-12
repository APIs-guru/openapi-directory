# openapi_client.AppStoreReviewAttachmentsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_store_review_attachments_create_instance**](AppStoreReviewAttachmentsApi.md#app_store_review_attachments_create_instance) | **POST** /v1/appStoreReviewAttachments | 
[**app_store_review_attachments_delete_instance**](AppStoreReviewAttachmentsApi.md#app_store_review_attachments_delete_instance) | **DELETE** /v1/appStoreReviewAttachments/{id} | 
[**app_store_review_attachments_get_instance**](AppStoreReviewAttachmentsApi.md#app_store_review_attachments_get_instance) | **GET** /v1/appStoreReviewAttachments/{id} | 
[**app_store_review_attachments_update_instance**](AppStoreReviewAttachmentsApi.md#app_store_review_attachments_update_instance) | **PATCH** /v1/appStoreReviewAttachments/{id} | 


# **app_store_review_attachments_create_instance**
> AppStoreReviewAttachmentResponse app_store_review_attachments_create_instance(app_store_review_attachment_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_review_attachment_create_request import AppStoreReviewAttachmentCreateRequest
from openapi_client.models.app_store_review_attachment_response import AppStoreReviewAttachmentResponse
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
    api_instance = openapi_client.AppStoreReviewAttachmentsApi(api_client)
    app_store_review_attachment_create_request = openapi_client.AppStoreReviewAttachmentCreateRequest() # AppStoreReviewAttachmentCreateRequest | AppStoreReviewAttachment representation

    try:
        api_response = api_instance.app_store_review_attachments_create_instance(app_store_review_attachment_create_request)
        print("The response of AppStoreReviewAttachmentsApi->app_store_review_attachments_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreReviewAttachmentsApi->app_store_review_attachments_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_store_review_attachment_create_request** | [**AppStoreReviewAttachmentCreateRequest**](AppStoreReviewAttachmentCreateRequest.md)| AppStoreReviewAttachment representation | 

### Return type

[**AppStoreReviewAttachmentResponse**](AppStoreReviewAttachmentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single AppStoreReviewAttachment |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_store_review_attachments_delete_instance**
> app_store_review_attachments_delete_instance(id)



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
    api_instance = openapi_client.AppStoreReviewAttachmentsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.app_store_review_attachments_delete_instance(id)
    except Exception as e:
        print("Exception when calling AppStoreReviewAttachmentsApi->app_store_review_attachments_delete_instance: %s\n" % e)
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

# **app_store_review_attachments_get_instance**
> AppStoreReviewAttachmentResponse app_store_review_attachments_get_instance(id, fields_app_store_review_attachments=fields_app_store_review_attachments, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_review_attachment_response import AppStoreReviewAttachmentResponse
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
    api_instance = openapi_client.AppStoreReviewAttachmentsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_store_review_attachments = ['fields_app_store_review_attachments_example'] # List[str] | the fields to include for returned resources of type appStoreReviewAttachments (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.app_store_review_attachments_get_instance(id, fields_app_store_review_attachments=fields_app_store_review_attachments, include=include)
        print("The response of AppStoreReviewAttachmentsApi->app_store_review_attachments_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreReviewAttachmentsApi->app_store_review_attachments_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_store_review_attachments** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreReviewAttachments | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppStoreReviewAttachmentResponse**](AppStoreReviewAttachmentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppStoreReviewAttachment |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_store_review_attachments_update_instance**
> AppStoreReviewAttachmentResponse app_store_review_attachments_update_instance(id, app_store_review_attachment_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_review_attachment_response import AppStoreReviewAttachmentResponse
from openapi_client.models.app_store_review_attachment_update_request import AppStoreReviewAttachmentUpdateRequest
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
    api_instance = openapi_client.AppStoreReviewAttachmentsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    app_store_review_attachment_update_request = openapi_client.AppStoreReviewAttachmentUpdateRequest() # AppStoreReviewAttachmentUpdateRequest | AppStoreReviewAttachment representation

    try:
        api_response = api_instance.app_store_review_attachments_update_instance(id, app_store_review_attachment_update_request)
        print("The response of AppStoreReviewAttachmentsApi->app_store_review_attachments_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreReviewAttachmentsApi->app_store_review_attachments_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **app_store_review_attachment_update_request** | [**AppStoreReviewAttachmentUpdateRequest**](AppStoreReviewAttachmentUpdateRequest.md)| AppStoreReviewAttachment representation | 

### Return type

[**AppStoreReviewAttachmentResponse**](AppStoreReviewAttachmentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppStoreReviewAttachment |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

