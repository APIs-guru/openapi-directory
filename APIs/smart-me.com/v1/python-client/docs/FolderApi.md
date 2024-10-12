# openapi_client.FolderApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**folder_get**](FolderApi.md#folder_get) | **GET** /api/Folder/{id} | Gets the Values for a folder or a meter


# **folder_get**
> FolderData folder_get(id)

Gets the Values for a folder or a meter

Gets the Values for a folder or a meter

### Example


```python
import openapi_client
from openapi_client.models.folder_data import FolderData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FolderApi(api_client)
    id = 'id_example' # str | 

    try:
        # Gets the Values for a folder or a meter
        api_response = api_instance.folder_get(id)
        print("The response of FolderApi->folder_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FolderApi->folder_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**FolderData**](FolderData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

