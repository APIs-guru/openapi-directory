# openapi_client.AppStoreReviewDetailsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_store_review_details_app_store_review_attachments_get_to_many_related**](AppStoreReviewDetailsApi.md#app_store_review_details_app_store_review_attachments_get_to_many_related) | **GET** /v1/appStoreReviewDetails/{id}/appStoreReviewAttachments | 
[**app_store_review_details_create_instance**](AppStoreReviewDetailsApi.md#app_store_review_details_create_instance) | **POST** /v1/appStoreReviewDetails | 
[**app_store_review_details_get_instance**](AppStoreReviewDetailsApi.md#app_store_review_details_get_instance) | **GET** /v1/appStoreReviewDetails/{id} | 
[**app_store_review_details_update_instance**](AppStoreReviewDetailsApi.md#app_store_review_details_update_instance) | **PATCH** /v1/appStoreReviewDetails/{id} | 


# **app_store_review_details_app_store_review_attachments_get_to_many_related**
> AppStoreReviewAttachmentsResponse app_store_review_details_app_store_review_attachments_get_to_many_related(id, fields_app_store_review_details=fields_app_store_review_details, fields_app_store_review_attachments=fields_app_store_review_attachments, limit=limit, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_review_attachments_response import AppStoreReviewAttachmentsResponse
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
    api_instance = openapi_client.AppStoreReviewDetailsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_store_review_details = ['fields_app_store_review_details_example'] # List[str] | the fields to include for returned resources of type appStoreReviewDetails (optional)
    fields_app_store_review_attachments = ['fields_app_store_review_attachments_example'] # List[str] | the fields to include for returned resources of type appStoreReviewAttachments (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.app_store_review_details_app_store_review_attachments_get_to_many_related(id, fields_app_store_review_details=fields_app_store_review_details, fields_app_store_review_attachments=fields_app_store_review_attachments, limit=limit, include=include)
        print("The response of AppStoreReviewDetailsApi->app_store_review_details_app_store_review_attachments_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreReviewDetailsApi->app_store_review_details_app_store_review_attachments_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_store_review_details** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreReviewDetails | [optional] 
 **fields_app_store_review_attachments** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreReviewAttachments | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppStoreReviewAttachmentsResponse**](AppStoreReviewAttachmentsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_store_review_details_create_instance**
> AppStoreReviewDetailResponse app_store_review_details_create_instance(app_store_review_detail_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_review_detail_create_request import AppStoreReviewDetailCreateRequest
from openapi_client.models.app_store_review_detail_response import AppStoreReviewDetailResponse
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
    api_instance = openapi_client.AppStoreReviewDetailsApi(api_client)
    app_store_review_detail_create_request = openapi_client.AppStoreReviewDetailCreateRequest() # AppStoreReviewDetailCreateRequest | AppStoreReviewDetail representation

    try:
        api_response = api_instance.app_store_review_details_create_instance(app_store_review_detail_create_request)
        print("The response of AppStoreReviewDetailsApi->app_store_review_details_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreReviewDetailsApi->app_store_review_details_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_store_review_detail_create_request** | [**AppStoreReviewDetailCreateRequest**](AppStoreReviewDetailCreateRequest.md)| AppStoreReviewDetail representation | 

### Return type

[**AppStoreReviewDetailResponse**](AppStoreReviewDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single AppStoreReviewDetail |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_store_review_details_get_instance**
> AppStoreReviewDetailResponse app_store_review_details_get_instance(id, fields_app_store_review_details=fields_app_store_review_details, include=include, fields_app_store_review_attachments=fields_app_store_review_attachments, limit_app_store_review_attachments=limit_app_store_review_attachments)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_review_detail_response import AppStoreReviewDetailResponse
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
    api_instance = openapi_client.AppStoreReviewDetailsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_store_review_details = ['fields_app_store_review_details_example'] # List[str] | the fields to include for returned resources of type appStoreReviewDetails (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_app_store_review_attachments = ['fields_app_store_review_attachments_example'] # List[str] | the fields to include for returned resources of type appStoreReviewAttachments (optional)
    limit_app_store_review_attachments = 56 # int | maximum number of related appStoreReviewAttachments returned (when they are included) (optional)

    try:
        api_response = api_instance.app_store_review_details_get_instance(id, fields_app_store_review_details=fields_app_store_review_details, include=include, fields_app_store_review_attachments=fields_app_store_review_attachments, limit_app_store_review_attachments=limit_app_store_review_attachments)
        print("The response of AppStoreReviewDetailsApi->app_store_review_details_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreReviewDetailsApi->app_store_review_details_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_store_review_details** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreReviewDetails | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_app_store_review_attachments** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreReviewAttachments | [optional] 
 **limit_app_store_review_attachments** | **int**| maximum number of related appStoreReviewAttachments returned (when they are included) | [optional] 

### Return type

[**AppStoreReviewDetailResponse**](AppStoreReviewDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppStoreReviewDetail |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_store_review_details_update_instance**
> AppStoreReviewDetailResponse app_store_review_details_update_instance(id, app_store_review_detail_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_review_detail_response import AppStoreReviewDetailResponse
from openapi_client.models.app_store_review_detail_update_request import AppStoreReviewDetailUpdateRequest
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
    api_instance = openapi_client.AppStoreReviewDetailsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    app_store_review_detail_update_request = openapi_client.AppStoreReviewDetailUpdateRequest() # AppStoreReviewDetailUpdateRequest | AppStoreReviewDetail representation

    try:
        api_response = api_instance.app_store_review_details_update_instance(id, app_store_review_detail_update_request)
        print("The response of AppStoreReviewDetailsApi->app_store_review_details_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreReviewDetailsApi->app_store_review_details_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **app_store_review_detail_update_request** | [**AppStoreReviewDetailUpdateRequest**](AppStoreReviewDetailUpdateRequest.md)| AppStoreReviewDetail representation | 

### Return type

[**AppStoreReviewDetailResponse**](AppStoreReviewDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppStoreReviewDetail |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

