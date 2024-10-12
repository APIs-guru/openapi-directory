# openapi_client.DirectUploadsApi

All URIs are relative to *https://api.mux.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_direct_upload**](DirectUploadsApi.md#cancel_direct_upload) | **PUT** /video/v1/uploads/{UPLOAD_ID}/cancel | Cancel a direct upload
[**create_direct_upload**](DirectUploadsApi.md#create_direct_upload) | **POST** /video/v1/uploads | Create a new direct upload URL
[**get_direct_upload**](DirectUploadsApi.md#get_direct_upload) | **GET** /video/v1/uploads/{UPLOAD_ID} | Retrieve a single direct upload&#39;s info
[**list_direct_uploads**](DirectUploadsApi.md#list_direct_uploads) | **GET** /video/v1/uploads | List direct uploads


# **cancel_direct_upload**
> UploadResponse cancel_direct_upload(upload_id)

Cancel a direct upload

Cancels a direct upload and marks it as cancelled. If a pending upload finishes after this request, no asset will be created. This request will only succeed if the upload is still in the `waiting` state. 

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.upload_response import UploadResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectUploadsApi(api_client)
    upload_id = 'abcd1234' # str | ID of the Upload

    try:
        # Cancel a direct upload
        api_response = api_instance.cancel_direct_upload(upload_id)
        print("The response of DirectUploadsApi->cancel_direct_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectUploadsApi->cancel_direct_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload_id** | **str**| ID of the Upload | 

### Return type

[**UploadResponse**](UploadResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Cancellation no longer possible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_direct_upload**
> UploadResponse create_direct_upload(create_upload_request)

Create a new direct upload URL

Creates a new direct upload, through which video content can be uploaded for ingest to Mux.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.create_upload_request import CreateUploadRequest
from openapi_client.models.upload_response import UploadResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectUploadsApi(api_client)
    create_upload_request = {"cors_origin":"https://example.com/","new_asset_settings":{"mp4_support":"standard","playback_policy":["public"]}} # CreateUploadRequest | 

    try:
        # Create a new direct upload URL
        api_response = api_instance.create_direct_upload(create_upload_request)
        print("The response of DirectUploadsApi->create_direct_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectUploadsApi->create_direct_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_upload_request** | [**CreateUploadRequest**](CreateUploadRequest.md)|  | 

### Return type

[**UploadResponse**](UploadResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_direct_upload**
> UploadResponse get_direct_upload(upload_id)

Retrieve a single direct upload's info

Fetches information about a single direct upload in the current environment.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.upload_response import UploadResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectUploadsApi(api_client)
    upload_id = 'abcd1234' # str | ID of the Upload

    try:
        # Retrieve a single direct upload's info
        api_response = api_instance.get_direct_upload(upload_id)
        print("The response of DirectUploadsApi->get_direct_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectUploadsApi->get_direct_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload_id** | **str**| ID of the Upload | 

### Return type

[**UploadResponse**](UploadResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_direct_uploads**
> ListUploadsResponse list_direct_uploads(limit=limit, page=page)

List direct uploads

Lists direct uploads in the current environment.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_uploads_response import ListUploadsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectUploadsApi(api_client)
    limit = 25 # int | Number of items to include in the response (optional) (default to 25)
    page = 1 # int | Offset by this many pages, of the size of `limit` (optional) (default to 1)

    try:
        # List direct uploads
        api_response = api_instance.list_direct_uploads(limit=limit, page=page)
        print("The response of DirectUploadsApi->list_direct_uploads:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectUploadsApi->list_direct_uploads: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of items to include in the response | [optional] [default to 25]
 **page** | **int**| Offset by this many pages, of the size of &#x60;limit&#x60; | [optional] [default to 1]

### Return type

[**ListUploadsResponse**](ListUploadsResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

