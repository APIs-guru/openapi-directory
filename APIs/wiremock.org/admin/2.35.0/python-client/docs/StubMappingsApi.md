# openapi_client.StubMappingsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_mappings_delete**](StubMappingsApi.md#admin_mappings_delete) | **DELETE** /__admin/mappings | Delete all stub mappings
[**admin_mappings_find_by_metadata_post**](StubMappingsApi.md#admin_mappings_find_by_metadata_post) | **POST** /__admin/mappings/find-by-metadata | 
[**admin_mappings_get**](StubMappingsApi.md#admin_mappings_get) | **GET** /__admin/mappings | Get all stub mappings
[**admin_mappings_import_post**](StubMappingsApi.md#admin_mappings_import_post) | **POST** /__admin/mappings/import | Import stub mappings
[**admin_mappings_post**](StubMappingsApi.md#admin_mappings_post) | **POST** /__admin/mappings | Create a new stub mapping
[**admin_mappings_remove_by_metadata_post**](StubMappingsApi.md#admin_mappings_remove_by_metadata_post) | **POST** /__admin/mappings/remove-by-metadata | Delete stub mappings matching metadata
[**admin_mappings_reset_post**](StubMappingsApi.md#admin_mappings_reset_post) | **POST** /__admin/mappings/reset | Reset stub mappings
[**admin_mappings_save_post**](StubMappingsApi.md#admin_mappings_save_post) | **POST** /__admin/mappings/save | Persist stub mappings
[**admin_mappings_stub_mapping_id_delete**](StubMappingsApi.md#admin_mappings_stub_mapping_id_delete) | **DELETE** /__admin/mappings/{stubMappingId} | Delete a stub mapping
[**admin_mappings_stub_mapping_id_get**](StubMappingsApi.md#admin_mappings_stub_mapping_id_get) | **GET** /__admin/mappings/{stubMappingId} | Get stub mapping by ID
[**admin_mappings_stub_mapping_id_put**](StubMappingsApi.md#admin_mappings_stub_mapping_id_put) | **PUT** /__admin/mappings/{stubMappingId} | Update a stub mapping


# **admin_mappings_delete**
> admin_mappings_delete()

Delete all stub mappings

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
    api_instance = openapi_client.StubMappingsApi(api_client)

    try:
        # Delete all stub mappings
        api_instance.admin_mappings_delete()
    except Exception as e:
        print("Exception when calling StubMappingsApi->admin_mappings_delete: %s\n" % e)
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

# **admin_mappings_find_by_metadata_post**
> AdminMappingsGet200Response admin_mappings_find_by_metadata_post(admin_mappings_find_by_metadata_post_request)



Find stubs by matching on their metadata

### Example


```python
import openapi_client
from openapi_client.models.admin_mappings_find_by_metadata_post_request import AdminMappingsFindByMetadataPostRequest
from openapi_client.models.admin_mappings_get200_response import AdminMappingsGet200Response
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
    api_instance = openapi_client.StubMappingsApi(api_client)
    admin_mappings_find_by_metadata_post_request = {"matchesJsonPath":{"equalToJson":"{ \"inner\": 42 }","expression":"$.outer"}} # AdminMappingsFindByMetadataPostRequest | 

    try:
        api_response = api_instance.admin_mappings_find_by_metadata_post(admin_mappings_find_by_metadata_post_request)
        print("The response of StubMappingsApi->admin_mappings_find_by_metadata_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StubMappingsApi->admin_mappings_find_by_metadata_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_mappings_find_by_metadata_post_request** | [**AdminMappingsFindByMetadataPostRequest**](AdminMappingsFindByMetadataPostRequest.md)|  | 

### Return type

[**AdminMappingsGet200Response**](AdminMappingsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Matched stub mappings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_mappings_get**
> AdminMappingsGet200Response admin_mappings_get(limit=limit, offset=offset)

Get all stub mappings

### Example


```python
import openapi_client
from openapi_client.models.admin_mappings_get200_response import AdminMappingsGet200Response
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
    api_instance = openapi_client.StubMappingsApi(api_client)
    limit = 10 # int | The maximum number of results to return (optional)
    offset = 0 # int | The start index of the results to return (optional)

    try:
        # Get all stub mappings
        api_response = api_instance.admin_mappings_get(limit=limit, offset=offset)
        print("The response of StubMappingsApi->admin_mappings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StubMappingsApi->admin_mappings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| The maximum number of results to return | [optional] 
 **offset** | **int**| The start index of the results to return | [optional] 

### Return type

[**AdminMappingsGet200Response**](AdminMappingsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All stub mappings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_mappings_import_post**
> admin_mappings_import_post()

Import stub mappings

Import given stub mappings to the backing store

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
    api_instance = openapi_client.StubMappingsApi(api_client)

    try:
        # Import stub mappings
        api_instance.admin_mappings_import_post()
    except Exception as e:
        print("Exception when calling StubMappingsApi->admin_mappings_import_post: %s\n" % e)
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
**200** | Successfully imported |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_mappings_post**
> AdminMappingsGet200ResponseMappingsInner admin_mappings_post(admin_mappings_get200_response_mappings_inner=admin_mappings_get200_response_mappings_inner)

Create a new stub mapping

### Example


```python
import openapi_client
from openapi_client.models.admin_mappings_get200_response_mappings_inner import AdminMappingsGet200ResponseMappingsInner
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
    api_instance = openapi_client.StubMappingsApi(api_client)
    admin_mappings_get200_response_mappings_inner = {"request":{"method":"GET","url":"/some/thing"},"response":{"body":"Hello world!","headers":{"Content-Type":"text/plain"},"status":200}} # AdminMappingsGet200ResponseMappingsInner |  (optional)

    try:
        # Create a new stub mapping
        api_response = api_instance.admin_mappings_post(admin_mappings_get200_response_mappings_inner=admin_mappings_get200_response_mappings_inner)
        print("The response of StubMappingsApi->admin_mappings_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StubMappingsApi->admin_mappings_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_mappings_get200_response_mappings_inner** | [**AdminMappingsGet200ResponseMappingsInner**](AdminMappingsGet200ResponseMappingsInner.md)|  | [optional] 

### Return type

[**AdminMappingsGet200ResponseMappingsInner**](AdminMappingsGet200ResponseMappingsInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The stub mapping |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_mappings_remove_by_metadata_post**
> admin_mappings_remove_by_metadata_post(admin_mappings_find_by_metadata_post_request=admin_mappings_find_by_metadata_post_request)

Delete stub mappings matching metadata

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
    api_instance = openapi_client.StubMappingsApi(api_client)
    admin_mappings_find_by_metadata_post_request = {"matchesJsonPath":{"equalToJson":"{ \"inner\": 42 }","expression":"$.outer"}} # AdminMappingsFindByMetadataPostRequest |  (optional)

    try:
        # Delete stub mappings matching metadata
        api_instance.admin_mappings_remove_by_metadata_post(admin_mappings_find_by_metadata_post_request=admin_mappings_find_by_metadata_post_request)
    except Exception as e:
        print("Exception when calling StubMappingsApi->admin_mappings_remove_by_metadata_post: %s\n" % e)
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
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The stub mappings were successfully removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_mappings_reset_post**
> admin_mappings_reset_post()

Reset stub mappings

Restores stub mappings to the defaults defined back in the backing store

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
    api_instance = openapi_client.StubMappingsApi(api_client)

    try:
        # Reset stub mappings
        api_instance.admin_mappings_reset_post()
    except Exception as e:
        print("Exception when calling StubMappingsApi->admin_mappings_reset_post: %s\n" % e)
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

# **admin_mappings_save_post**
> admin_mappings_save_post()

Persist stub mappings

Save all persistent stub mappings to the backing store

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
    api_instance = openapi_client.StubMappingsApi(api_client)

    try:
        # Persist stub mappings
        api_instance.admin_mappings_save_post()
    except Exception as e:
        print("Exception when calling StubMappingsApi->admin_mappings_save_post: %s\n" % e)
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
**200** | Successfully saved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_mappings_stub_mapping_id_delete**
> admin_mappings_stub_mapping_id_delete(stub_mapping_id)

Delete a stub mapping

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
    api_instance = openapi_client.StubMappingsApi(api_client)
    stub_mapping_id = '730d3e32-d098-4169-a20c-554c3bedce58' # str | The UUID of stub mapping

    try:
        # Delete a stub mapping
        api_instance.admin_mappings_stub_mapping_id_delete(stub_mapping_id)
    except Exception as e:
        print("Exception when calling StubMappingsApi->admin_mappings_stub_mapping_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stub_mapping_id** | **str**| The UUID of stub mapping | 

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
**200** | OK |  -  |
**404** | Stub mapping not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_mappings_stub_mapping_id_get**
> AdminMappingsGet200ResponseMappingsInner admin_mappings_stub_mapping_id_get(stub_mapping_id)

Get stub mapping by ID

### Example


```python
import openapi_client
from openapi_client.models.admin_mappings_get200_response_mappings_inner import AdminMappingsGet200ResponseMappingsInner
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
    api_instance = openapi_client.StubMappingsApi(api_client)
    stub_mapping_id = '730d3e32-d098-4169-a20c-554c3bedce58' # str | The UUID of stub mapping

    try:
        # Get stub mapping by ID
        api_response = api_instance.admin_mappings_stub_mapping_id_get(stub_mapping_id)
        print("The response of StubMappingsApi->admin_mappings_stub_mapping_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StubMappingsApi->admin_mappings_stub_mapping_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stub_mapping_id** | **str**| The UUID of stub mapping | 

### Return type

[**AdminMappingsGet200ResponseMappingsInner**](AdminMappingsGet200ResponseMappingsInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The stub mapping |  -  |
**404** | Stub mapping not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_mappings_stub_mapping_id_put**
> AdminMappingsGet200ResponseMappingsInner admin_mappings_stub_mapping_id_put(stub_mapping_id, admin_mappings_get200_response_mappings_inner=admin_mappings_get200_response_mappings_inner)

Update a stub mapping

### Example


```python
import openapi_client
from openapi_client.models.admin_mappings_get200_response_mappings_inner import AdminMappingsGet200ResponseMappingsInner
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
    api_instance = openapi_client.StubMappingsApi(api_client)
    stub_mapping_id = '730d3e32-d098-4169-a20c-554c3bedce58' # str | The UUID of stub mapping
    admin_mappings_get200_response_mappings_inner = {"request":{"method":"GET","url":"/some/thing"},"response":{"body":"Hello world!","headers":{"Content-Type":"text/plain"},"status":200}} # AdminMappingsGet200ResponseMappingsInner |  (optional)

    try:
        # Update a stub mapping
        api_response = api_instance.admin_mappings_stub_mapping_id_put(stub_mapping_id, admin_mappings_get200_response_mappings_inner=admin_mappings_get200_response_mappings_inner)
        print("The response of StubMappingsApi->admin_mappings_stub_mapping_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StubMappingsApi->admin_mappings_stub_mapping_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stub_mapping_id** | **str**| The UUID of stub mapping | 
 **admin_mappings_get200_response_mappings_inner** | [**AdminMappingsGet200ResponseMappingsInner**](AdminMappingsGet200ResponseMappingsInner.md)|  | [optional] 

### Return type

[**AdminMappingsGet200ResponseMappingsInner**](AdminMappingsGet200ResponseMappingsInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The stub mapping |  -  |
**404** | Stub mapping not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

