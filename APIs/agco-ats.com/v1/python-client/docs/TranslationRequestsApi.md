# openapi_client.TranslationRequestsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**translation_requests_create_translation_request**](TranslationRequestsApi.md#translation_requests_create_translation_request) | **POST** /api/v2/TranslationRequests | Create a translation request. Accepts a TranslationRequest object. Returns the Id of the created object. The state of the TranslationRequest must be ‘NotSubmitted’.
[**translation_requests_get_translation_request**](TranslationRequestsApi.md#translation_requests_get_translation_request) | **GET** /api/v2/TranslationRequests/{Id} | Get a TranslationRequest object by id. Returns TranslationRequest object with its language ids and string ids.
[**translation_requests_get_translation_requests**](TranslationRequestsApi.md#translation_requests_get_translation_requests) | **GET** /api/v2/TranslationRequests | Get all TranslationRequest objects. Returns a PagedResponse of TranslationRequest objects with their language ids and string ids.
[**translation_requests_update_translation_request**](TranslationRequestsApi.md#translation_requests_update_translation_request) | **PUT** /api/v2/TranslationRequests/{Id} | Update a TranslationRequest object by id. Accepts a TranslationRequest object.
[**translation_requests_update_translation_request_strings**](TranslationRequestsApi.md#translation_requests_update_translation_request_strings) | **PUT** /api/v2/TranslationRequests/{Id}/Strings | No Documentation Found.


# **translation_requests_create_translation_request**
> int translation_requests_create_translation_request(global_resources_shared_models_translation_request)

Create a translation request. Accepts a TranslationRequest object. Returns the Id of the created object. The state of the TranslationRequest must be ‘NotSubmitted’.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_translation_request import GlobalResourcesSharedModelsTranslationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranslationRequestsApi(api_client)
    global_resources_shared_models_translation_request = openapi_client.GlobalResourcesSharedModelsTranslationRequest() # GlobalResourcesSharedModelsTranslationRequest | 

    try:
        # Create a translation request. Accepts a TranslationRequest object. Returns the Id of the created object. The state of the TranslationRequest must be ‘NotSubmitted’.
        api_response = api_instance.translation_requests_create_translation_request(global_resources_shared_models_translation_request)
        print("The response of TranslationRequestsApi->translation_requests_create_translation_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationRequestsApi->translation_requests_create_translation_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_resources_shared_models_translation_request** | [**GlobalResourcesSharedModelsTranslationRequest**](GlobalResourcesSharedModelsTranslationRequest.md)|  | 

### Return type

**int**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translation_requests_get_translation_request**
> GlobalResourcesSharedModelsTranslationRequest translation_requests_get_translation_request(id)

Get a TranslationRequest object by id. Returns TranslationRequest object with its language ids and string ids.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_translation_request import GlobalResourcesSharedModelsTranslationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranslationRequestsApi(api_client)
    id = 56 # int | 

    try:
        # Get a TranslationRequest object by id. Returns TranslationRequest object with its language ids and string ids.
        api_response = api_instance.translation_requests_get_translation_request(id)
        print("The response of TranslationRequestsApi->translation_requests_get_translation_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationRequestsApi->translation_requests_get_translation_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**GlobalResourcesSharedModelsTranslationRequest**](GlobalResourcesSharedModelsTranslationRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translation_requests_get_translation_requests**
> APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest translation_requests_get_translation_requests(limit=limit, offset=offset)

Get all TranslationRequest objects. Returns a PagedResponse of TranslationRequest objects with their language ids and string ids.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_global_resources_shared_models_translation_request import APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranslationRequestsApi(api_client)
    limit = 56 # int |  (optional)
    offset = 56 # int |  (optional)

    try:
        # Get all TranslationRequest objects. Returns a PagedResponse of TranslationRequest objects with their language ids and string ids.
        api_response = api_instance.translation_requests_get_translation_requests(limit=limit, offset=offset)
        print("The response of TranslationRequestsApi->translation_requests_get_translation_requests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationRequestsApi->translation_requests_get_translation_requests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] 
 **offset** | **int**|  | [optional] 

### Return type

[**APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest**](APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translation_requests_update_translation_request**
> translation_requests_update_translation_request(id, global_resources_shared_models_translation_request, do_resend_request=do_resend_request)

Update a TranslationRequest object by id. Accepts a TranslationRequest object.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_translation_request import GlobalResourcesSharedModelsTranslationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranslationRequestsApi(api_client)
    id = 56 # int | 
    global_resources_shared_models_translation_request = openapi_client.GlobalResourcesSharedModelsTranslationRequest() # GlobalResourcesSharedModelsTranslationRequest | 
    do_resend_request = True # bool |  (optional)

    try:
        # Update a TranslationRequest object by id. Accepts a TranslationRequest object.
        api_instance.translation_requests_update_translation_request(id, global_resources_shared_models_translation_request, do_resend_request=do_resend_request)
    except Exception as e:
        print("Exception when calling TranslationRequestsApi->translation_requests_update_translation_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **global_resources_shared_models_translation_request** | [**GlobalResourcesSharedModelsTranslationRequest**](GlobalResourcesSharedModelsTranslationRequest.md)|  | 
 **do_resend_request** | **bool**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translation_requests_update_translation_request_strings**
> translation_requests_update_translation_request_strings(id, request_body)

No Documentation Found.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranslationRequestsApi(api_client)
    id = 56 # int | 
    request_body = ['request_body_example'] # List[str] | 

    try:
        # No Documentation Found.
        api_instance.translation_requests_update_translation_request_strings(id, request_body)
    except Exception as e:
        print("Exception when calling TranslationRequestsApi->translation_requests_update_translation_request_strings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **request_body** | [**List[str]**](str.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

