# openapi_client.UserToFolderAssignApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_to_folder_assign_delete**](UserToFolderAssignApi.md#user_to_folder_assign_delete) | **DELETE** /api/folder/user/assign | Deletes a user to folder assignement
[**user_to_folder_assign_post**](UserToFolderAssignApi.md#user_to_folder_assign_post) | **POST** /api/folder/user/assign | Assign a user to a folder


# **user_to_folder_assign_delete**
> user_to_folder_assign_delete(source, target)

Deletes a user to folder assignement

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
    api_instance = openapi_client.UserToFolderAssignApi(api_client)
    source = 'source_example' # str | The ID of the user that should be de-assign
    target = 'target_example' # str | The ID of the folder

    try:
        # Deletes a user to folder assignement
        api_instance.user_to_folder_assign_delete(source, target)
    except Exception as e:
        print("Exception when calling UserToFolderAssignApi->user_to_folder_assign_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **str**| The ID of the user that should be de-assign | 
 **target** | **str**| The ID of the folder | 

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

# **user_to_folder_assign_post**
> user_to_folder_assign_post(source, target, old_folder)

Assign a user to a folder

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
    api_instance = openapi_client.UserToFolderAssignApi(api_client)
    source = 'source_example' # str | The ID of the user that should be assign
    target = 'target_example' # str | The ID of the folder that should be the parent
    old_folder = 'old_folder_example' # str | The ID of the old folder (in case of a drag and drop to a new folder)

    try:
        # Assign a user to a folder
        api_instance.user_to_folder_assign_post(source, target, old_folder)
    except Exception as e:
        print("Exception when calling UserToFolderAssignApi->user_to_folder_assign_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **str**| The ID of the user that should be assign | 
 **target** | **str**| The ID of the folder that should be the parent | 
 **old_folder** | **str**| The ID of the old folder (in case of a drag and drop to a new folder) | 

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

