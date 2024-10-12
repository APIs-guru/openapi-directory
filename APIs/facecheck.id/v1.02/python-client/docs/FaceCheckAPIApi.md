# openapi_client.FaceCheckAPIApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_delete_pic_post**](FaceCheckAPIApi.md#api_delete_pic_post) | **POST** /api/delete_pic | Remove an image from a search request
[**api_info_post**](FaceCheckAPIApi.md#api_info_post) | **POST** /api/info | Returns remaining search credits, search engine online status, and number of indexed faces
[**api_search_post**](FaceCheckAPIApi.md#api_search_post) | **POST** /api/search | 
[**api_upload_pic_post**](FaceCheckAPIApi.md#api_upload_pic_post) | **POST** /api/upload_pic | 


# **api_delete_pic_post**
> BrowserJsonResponse api_delete_pic_post(id_search=id_search, id_pic=id_pic)

Remove an image from a search request

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.browser_json_response import BrowserJsonResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaceCheckAPIApi(api_client)
    id_search = 'id_search_example' # str |  (optional)
    id_pic = 'id_pic_example' # str |  (optional)

    try:
        # Remove an image from a search request
        api_response = api_instance.api_delete_pic_post(id_search=id_search, id_pic=id_pic)
        print("The response of FaceCheckAPIApi->api_delete_pic_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FaceCheckAPIApi->api_delete_pic_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_search** | **str**|  | [optional] 
 **id_pic** | **str**|  | [optional] 

### Return type

[**BrowserJsonResponse**](BrowserJsonResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_info_post**
> InfoResponse api_info_post()

Returns remaining search credits, search engine online status, and number of indexed faces

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.info_response import InfoResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaceCheckAPIApi(api_client)

    try:
        # Returns remaining search credits, search engine online status, and number of indexed faces
        api_response = api_instance.api_info_post()
        print("The response of FaceCheckAPIApi->api_info_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FaceCheckAPIApi->api_info_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**InfoResponse**](InfoResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_search_post**
> BrowserJsonResponse api_search_post(search_data=search_data)



### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.browser_json_response import BrowserJsonResponse
from openapi_client.models.search_data import SearchData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaceCheckAPIApi(api_client)
    search_data = openapi_client.SearchData() # SearchData |  (optional)

    try:
        api_response = api_instance.api_search_post(search_data=search_data)
        print("The response of FaceCheckAPIApi->api_search_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FaceCheckAPIApi->api_search_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_data** | [**SearchData**](SearchData.md)|  | [optional] 

### Return type

[**BrowserJsonResponse**](BrowserJsonResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_upload_pic_post**
> BrowserJsonResponse api_upload_pic_post(id_search=id_search, images=images)



### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.browser_json_response import BrowserJsonResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaceCheckAPIApi(api_client)
    id_search = 'id_search_example' # str |  (optional)
    images = None # List[bytearray] |  (optional)

    try:
        api_response = api_instance.api_upload_pic_post(id_search=id_search, images=images)
        print("The response of FaceCheckAPIApi->api_upload_pic_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FaceCheckAPIApi->api_upload_pic_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_search** | **str**|  | [optional] 
 **images** | **List[bytearray]**|  | [optional] 

### Return type

[**BrowserJsonResponse**](BrowserJsonResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

