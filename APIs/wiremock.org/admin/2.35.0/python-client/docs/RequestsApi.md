# openapi_client.RequestsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_requests_count_post**](RequestsApi.md#admin_requests_count_post) | **POST** /__admin/requests/count | Count requests by criteria
[**admin_requests_delete**](RequestsApi.md#admin_requests_delete) | **DELETE** /__admin/requests | Delete all requests in journal
[**admin_requests_find_post**](RequestsApi.md#admin_requests_find_post) | **POST** /__admin/requests/find | Find requests by criteria
[**admin_requests_get**](RequestsApi.md#admin_requests_get) | **GET** /__admin/requests | Get all requests in journal
[**admin_requests_remove_by_metadata_post**](RequestsApi.md#admin_requests_remove_by_metadata_post) | **POST** /__admin/requests/remove-by-metadata | Delete requests mappings matching metadata
[**admin_requests_remove_post**](RequestsApi.md#admin_requests_remove_post) | **POST** /__admin/requests/remove | Remove requests by criteria
[**admin_requests_request_id_delete**](RequestsApi.md#admin_requests_request_id_delete) | **DELETE** /__admin/requests/{requestId} | Delete request by ID
[**admin_requests_request_id_get**](RequestsApi.md#admin_requests_request_id_get) | **GET** /__admin/requests/{requestId} | Get request by ID
[**admin_requests_reset_post**](RequestsApi.md#admin_requests_reset_post) | **POST** /__admin/requests/reset | Empty the request journal
[**admin_requests_unmatched_get**](RequestsApi.md#admin_requests_unmatched_get) | **GET** /__admin/requests/unmatched | Find unmatched requests


# **admin_requests_count_post**
> AdminRequestsCountPost200Response admin_requests_count_post(admin_mappings_get200_response_mappings_inner_request)

Count requests by criteria

Count requests logged in the journal matching the specified criteria

### Example


```python
import openapi_client
from openapi_client.models.admin_mappings_get200_response_mappings_inner_request import AdminMappingsGet200ResponseMappingsInnerRequest
from openapi_client.models.admin_requests_count_post200_response import AdminRequestsCountPost200Response
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
    api_instance = openapi_client.RequestsApi(api_client)
    admin_mappings_get200_response_mappings_inner_request = {"headers":{"Content-Type":{"matches":".*/xml"}},"method":"POST","url":"/resource"} # AdminMappingsGet200ResponseMappingsInnerRequest | 

    try:
        # Count requests by criteria
        api_response = api_instance.admin_requests_count_post(admin_mappings_get200_response_mappings_inner_request)
        print("The response of RequestsApi->admin_requests_count_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RequestsApi->admin_requests_count_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_mappings_get200_response_mappings_inner_request** | [**AdminMappingsGet200ResponseMappingsInnerRequest**](AdminMappingsGet200ResponseMappingsInnerRequest.md)|  | 

### Return type

[**AdminRequestsCountPost200Response**](AdminRequestsCountPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Number of matching requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_requests_delete**
> admin_requests_delete()

Delete all requests in journal

### Example


```python
import openapi_client
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
    api_instance = openapi_client.RequestsApi(api_client)

    try:
        # Delete all requests in journal
        api_instance.admin_requests_delete()
    except Exception as e:
        print("Exception when calling RequestsApi->admin_requests_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_requests_find_post**
> admin_requests_find_post(admin_mappings_get200_response_mappings_inner_request)

Find requests by criteria

Retrieve details of requests logged in the journal matching the specified criteria

### Example


```python
import openapi_client
from openapi_client.models.admin_mappings_get200_response_mappings_inner_request import AdminMappingsGet200ResponseMappingsInnerRequest
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
    api_instance = openapi_client.RequestsApi(api_client)
    admin_mappings_get200_response_mappings_inner_request = {"headers":{"Content-Type":{"matches":".*/xml"}},"method":"POST","url":"/resource"} # AdminMappingsGet200ResponseMappingsInnerRequest | 

    try:
        # Find requests by criteria
        api_instance.admin_requests_find_post(admin_mappings_get200_response_mappings_inner_request)
    except Exception as e:
        print("Exception when calling RequestsApi->admin_requests_find_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_mappings_get200_response_mappings_inner_request** | [**AdminMappingsGet200ResponseMappingsInnerRequest**](AdminMappingsGet200ResponseMappingsInnerRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Matching request details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_requests_get**
> admin_requests_get(limit=limit, since=since)

Get all requests in journal

### Example


```python
import openapi_client
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
    api_instance = openapi_client.RequestsApi(api_client)
    limit = '10' # str | The maximum number of results to return (optional)
    since = '2016-10-05T12:33:01.000Z' # str | Only return logged requests after this date (optional)

    try:
        # Get all requests in journal
        api_instance.admin_requests_get(limit=limit, since=since)
    except Exception as e:
        print("Exception when calling RequestsApi->admin_requests_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **str**| The maximum number of results to return | [optional] 
 **since** | **str**| Only return logged requests after this date | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of received requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_requests_remove_by_metadata_post**
> admin_requests_remove_by_metadata_post(admin_mappings_find_by_metadata_post_request=admin_mappings_find_by_metadata_post_request)

Delete requests mappings matching metadata

### Example


```python
import openapi_client
from openapi_client.models.admin_mappings_find_by_metadata_post_request import AdminMappingsFindByMetadataPostRequest
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
    api_instance = openapi_client.RequestsApi(api_client)
    admin_mappings_find_by_metadata_post_request = {"matchesJsonPath":{"equalToJson":"{ \"inner\": 42 }","expression":"$.outer"}} # AdminMappingsFindByMetadataPostRequest |  (optional)

    try:
        # Delete requests mappings matching metadata
        api_instance.admin_requests_remove_by_metadata_post(admin_mappings_find_by_metadata_post_request=admin_mappings_find_by_metadata_post_request)
    except Exception as e:
        print("Exception when calling RequestsApi->admin_requests_remove_by_metadata_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_mappings_find_by_metadata_post_request** | [**AdminMappingsFindByMetadataPostRequest**](AdminMappingsFindByMetadataPostRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Removed request details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_requests_remove_post**
> admin_requests_remove_post(admin_mappings_get200_response_mappings_inner_request)

Remove requests by criteria

Removed requests logged in the journal matching the specified criteria

### Example


```python
import openapi_client
from openapi_client.models.admin_mappings_get200_response_mappings_inner_request import AdminMappingsGet200ResponseMappingsInnerRequest
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
    api_instance = openapi_client.RequestsApi(api_client)
    admin_mappings_get200_response_mappings_inner_request = {"headers":{"Content-Type":{"matches":".*/xml"}},"method":"POST","url":"/resource"} # AdminMappingsGet200ResponseMappingsInnerRequest | 

    try:
        # Remove requests by criteria
        api_instance.admin_requests_remove_post(admin_mappings_get200_response_mappings_inner_request)
    except Exception as e:
        print("Exception when calling RequestsApi->admin_requests_remove_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_mappings_get200_response_mappings_inner_request** | [**AdminMappingsGet200ResponseMappingsInnerRequest**](AdminMappingsGet200ResponseMappingsInnerRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Removed request details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_requests_request_id_delete**
> admin_requests_request_id_delete(request_id)

Delete request by ID

### Example


```python
import openapi_client
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
    api_instance = openapi_client.RequestsApi(api_client)
    request_id = '12fb14bb-600e-4bfa-bd8d-be7f12562c99' # str | The UUID of the logged request

    try:
        # Delete request by ID
        api_instance.admin_requests_request_id_delete(request_id)
    except Exception as e:
        print("Exception when calling RequestsApi->admin_requests_request_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **str**| The UUID of the logged request | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_requests_request_id_get**
> admin_requests_request_id_get(request_id)

Get request by ID

### Example


```python
import openapi_client
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
    api_instance = openapi_client.RequestsApi(api_client)
    request_id = '12fb14bb-600e-4bfa-bd8d-be7f12562c99' # str | The UUID of the logged request

    try:
        # Get request by ID
        api_instance.admin_requests_request_id_get(request_id)
    except Exception as e:
        print("Exception when calling RequestsApi->admin_requests_request_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **str**| The UUID of the logged request | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Request not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_requests_reset_post**
> admin_requests_reset_post()

Empty the request journal

### Example


```python
import openapi_client
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
    api_instance = openapi_client.RequestsApi(api_client)

    try:
        # Empty the request journal
        api_instance.admin_requests_reset_post()
    except Exception as e:
        print("Exception when calling RequestsApi->admin_requests_reset_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully reset |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_requests_unmatched_get**
> admin_requests_unmatched_get()

Find unmatched requests

Get details of logged requests that weren't matched by any stub mapping

### Example


```python
import openapi_client
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
    api_instance = openapi_client.RequestsApi(api_client)

    try:
        # Find unmatched requests
        api_instance.admin_requests_unmatched_get()
    except Exception as e:
        print("Exception when calling RequestsApi->admin_requests_unmatched_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Unmatched request details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

