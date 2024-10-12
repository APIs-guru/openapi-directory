# openapi_client.FolderAssignApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**folder_assign_post**](FolderAssignApi.md#folder_assign_post) | **POST** /api/folder/assign | Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.


# **folder_assign_post**
> folder_assign_post(source, target)

Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.FolderAssignApi(api_client)
    source = 'source_example' # str | The ID of the meter or folder that should be assign
    target = 'target_example' # str | The ID of the meter or folder that should be the parent

    try:
        # Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.
        api_instance.folder_assign_post(source, target)
    except Exception as e:
        print("Exception when calling FolderAssignApi->folder_assign_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **str**| The ID of the meter or folder that should be assign | 
 **target** | **str**| The ID of the meter or folder that should be the parent | 

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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

