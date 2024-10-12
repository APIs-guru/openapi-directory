# openapi_client.FolderSettingsApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**folder_settings_delete**](FolderSettingsApi.md#folder_settings_delete) | **DELETE** /api/folder/settings/{id} | Deletes a folder
[**folder_settings_get**](FolderSettingsApi.md#folder_settings_get) | **GET** /api/folder/settings/{id} | Gets the settings of a folder or meter
[**folder_settings_post**](FolderSettingsApi.md#folder_settings_post) | **POST** /api/folder/settings/{id} | Add or edit a folder or a meter. To add a new folder use and empty ID


# **folder_settings_delete**
> folder_settings_delete(id)

Deletes a folder

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
    api_instance = openapi_client.FolderSettingsApi(api_client)
    id = 'id_example' # str | The ID of the folder

    try:
        # Deletes a folder
        api_instance.folder_settings_delete(id)
    except Exception as e:
        print("Exception when calling FolderSettingsApi->folder_settings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the folder | 

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

# **folder_settings_get**
> FolderSettings folder_settings_get(id)

Gets the settings of a folder or meter

### Example


```python
import openapi_client
from openapi_client.models.folder_settings import FolderSettings
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
    api_instance = openapi_client.FolderSettingsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Gets the settings of a folder or meter
        api_response = api_instance.folder_settings_get(id)
        print("The response of FolderSettingsApi->folder_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FolderSettingsApi->folder_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**FolderSettings**](FolderSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **folder_settings_post**
> FolderMenuItem folder_settings_post(id, folder_settings)

Add or edit a folder or a meter. To add a new folder use and empty ID

### Example


```python
import openapi_client
from openapi_client.models.folder_menu_item import FolderMenuItem
from openapi_client.models.folder_settings import FolderSettings
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
    api_instance = openapi_client.FolderSettingsApi(api_client)
    id = 'id_example' # str | The ID of the folder or meter to edit. Use and empty ID to add a new folder
    folder_settings = openapi_client.FolderSettings() # FolderSettings | The folder or meter data

    try:
        # Add or edit a folder or a meter. To add a new folder use and empty ID
        api_response = api_instance.folder_settings_post(id, folder_settings)
        print("The response of FolderSettingsApi->folder_settings_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FolderSettingsApi->folder_settings_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the folder or meter to edit. Use and empty ID to add a new folder | 
 **folder_settings** | [**FolderSettings**](FolderSettings.md)| The folder or meter data | 

### Return type

[**FolderMenuItem**](FolderMenuItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

