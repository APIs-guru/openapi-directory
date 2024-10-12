# openapi_client.DocumentsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documents_count**](DocumentsApi.md#documents_count) | **GET** /docs/$count | 


# **documents_count**
> int documents_count(api_version, client_request_id=client_request_id)



Queries the number of documents in the Azure Search index.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    client_request_id = 'client_request_id_example' # str | Tracking ID sent with the request to help with debugging. (optional)

    try:
        api_response = api_instance.documents_count(api_version, client_request_id=client_request_id)
        print("The response of DocumentsApi->documents_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->documents_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **client_request_id** | **str**| Tracking ID sent with the request to help with debugging. | [optional] 

### Return type

**int**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

