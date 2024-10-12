# openapi_client.NearMissesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_near_misses_request_pattern_post**](NearMissesApi.md#admin_near_misses_request_pattern_post) | **POST** /__admin/near-misses/request-pattern | Find near misses matching request pattern
[**admin_near_misses_request_post**](NearMissesApi.md#admin_near_misses_request_post) | **POST** /__admin/near-misses/request | Find near misses matching specific request
[**admin_requests_unmatched_near_misses_get**](NearMissesApi.md#admin_requests_unmatched_near_misses_get) | **GET** /__admin/requests/unmatched/near-misses | 


# **admin_near_misses_request_pattern_post**
> AdminNearMissesRequestPost200Response admin_near_misses_request_pattern_post(admin_mappings_get200_response_mappings_inner_request)

Find near misses matching request pattern

Find at most 3 near misses for closest logged requests to the specified request pattern

### Example


```python
import openapi_client
from openapi_client.models.admin_mappings_get200_response_mappings_inner_request import AdminMappingsGet200ResponseMappingsInnerRequest
from openapi_client.models.admin_near_misses_request_post200_response import AdminNearMissesRequestPost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NearMissesApi(api_client)
    admin_mappings_get200_response_mappings_inner_request = {"headers":{"Content-Type":{"matches":".*/xml"}},"method":"POST","url":"/resource"} # AdminMappingsGet200ResponseMappingsInnerRequest | 

    try:
        # Find near misses matching request pattern
        api_response = api_instance.admin_near_misses_request_pattern_post(admin_mappings_get200_response_mappings_inner_request)
        print("The response of NearMissesApi->admin_near_misses_request_pattern_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NearMissesApi->admin_near_misses_request_pattern_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_mappings_get200_response_mappings_inner_request** | [**AdminMappingsGet200ResponseMappingsInnerRequest**](AdminMappingsGet200ResponseMappingsInnerRequest.md)|  | 

### Return type

[**AdminNearMissesRequestPost200Response**](AdminNearMissesRequestPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Near misses matching criteria |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_near_misses_request_post**
> AdminNearMissesRequestPost200Response admin_near_misses_request_post(admin_near_misses_request_post_request)

Find near misses matching specific request

Find at most 3 near misses for closest stub mappings to the specified request

### Example


```python
import openapi_client
from openapi_client.models.admin_near_misses_request_post200_response import AdminNearMissesRequestPost200Response
from openapi_client.models.admin_near_misses_request_post_request import AdminNearMissesRequestPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NearMissesApi(api_client)
    admin_near_misses_request_post_request = {"absoluteUrl":"http://localhost:8080/actual","body":"","bodyAsBase64":"","browserProxyRequest":false,"clientIp":"0:0:0:0:0:0:0:1","cookies":{},"headers":{"Accept":"*/*","Host":"localhost:8080","User-Agent":"curl/7.30.0"},"loggedDate":1467402464520,"loggedDateString":"2016-07-01T19:47:44Z","method":"GET","url":"/actual"} # AdminNearMissesRequestPostRequest | 

    try:
        # Find near misses matching specific request
        api_response = api_instance.admin_near_misses_request_post(admin_near_misses_request_post_request)
        print("The response of NearMissesApi->admin_near_misses_request_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NearMissesApi->admin_near_misses_request_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_near_misses_request_post_request** | [**AdminNearMissesRequestPostRequest**](AdminNearMissesRequestPostRequest.md)|  | 

### Return type

[**AdminNearMissesRequestPost200Response**](AdminNearMissesRequestPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Near misses matching criteria |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_requests_unmatched_near_misses_get**
> AdminNearMissesRequestPost200Response admin_requests_unmatched_near_misses_get()



Retrieve near-misses for all unmatched requests

### Example


```python
import openapi_client
from openapi_client.models.admin_near_misses_request_post200_response import AdminNearMissesRequestPost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NearMissesApi(api_client)

    try:
        api_response = api_instance.admin_requests_unmatched_near_misses_get()
        print("The response of NearMissesApi->admin_requests_unmatched_near_misses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NearMissesApi->admin_requests_unmatched_near_misses_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AdminNearMissesRequestPost200Response**](AdminNearMissesRequestPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Near misses matching criteria |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

