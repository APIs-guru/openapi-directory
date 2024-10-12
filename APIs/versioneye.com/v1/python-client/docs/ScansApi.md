# openapi_client.ScansApi

All URIs are relative to *https://www.versioneye.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_scans_get**](ScansApi.md#api_v1_scans_get) | **GET** /api/v1/scans | Retrieves all scans
[**api_v1_scans_id_files_file_id_get**](ScansApi.md#api_v1_scans_id_files_file_id_get) | **GET** /api/v1/scans/{id}/files/{file_id} | Retrieves a file object, containing information about dependencies in the file
[**api_v1_scans_id_get**](ScansApi.md#api_v1_scans_id_get) | **GET** /api/v1/scans/{id} | Retrieves a project scan result


# **api_v1_scans_get**
> api_v1_scans_get(name=name, per_page=per_page)

Retrieves all scans

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.versioneye.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.versioneye.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScansApi(api_client)
    name = 'name_example' # str |  (optional)
    per_page = 'per_page_example' # str |  (optional)

    try:
        # Retrieves all scans
        api_instance.api_v1_scans_get(name=name, per_page=per_page)
    except Exception as e:
        print("Exception when calling ScansApi->api_v1_scans_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | [optional] 
 **per_page** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | scans found |  -  |
**404** | scans not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_scans_id_files_file_id_get**
> api_v1_scans_id_files_file_id_get(id, file_id, per_page=per_page)

Retrieves a file object, containing information about dependencies in the file

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.versioneye.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.versioneye.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScansApi(api_client)
    id = 'id_example' # str | 
    file_id = 'file_id_example' # str | 
    per_page = 'per_page_example' # str |  (optional)

    try:
        # Retrieves a file object, containing information about dependencies in the file
        api_instance.api_v1_scans_id_files_file_id_get(id, file_id, per_page=per_page)
    except Exception as e:
        print("Exception when calling ScansApi->api_v1_scans_id_files_file_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **file_id** | **str**|  | 
 **per_page** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | file found |  -  |
**404** | file not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_scans_id_get**
> api_v1_scans_id_get(id)

Retrieves a project scan result

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.versioneye.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.versioneye.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScansApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a project scan result
        api_instance.api_v1_scans_id_get(id)
    except Exception as e:
        print("Exception when calling ScansApi->api_v1_scans_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | scan found |  -  |
**404** | scan not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

