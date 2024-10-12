# openapi_client.FolderMenuApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**folder_menu_get**](FolderMenuApi.md#folder_menu_get) | **GET** /api/FolderMenu | Gets the folder menu items (each item might contain child items)
[**folder_menu_post**](FolderMenuApi.md#folder_menu_post) | **POST** /api/FolderMenu | Creates and updates the folder menu items


# **folder_menu_get**
> FolderMenuConfiguration folder_menu_get(filter=filter)

Gets the folder menu items (each item might contain child items)

### Example


```python
import openapi_client
from openapi_client.models.folder_menu_configuration import FolderMenuConfiguration
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
    api_instance = openapi_client.FolderMenuApi(api_client)
    filter = 'filter_example' # str | (optional) Filter for the folders and meters:               all: load everything              assigned: load only folders and meters that are assigend to a folder              unassigend: load only meters that are not assigend to a folder              user: load only folder and all users assigned to this folders              subuserlist: load all subusers as a list (optional)

    try:
        # Gets the folder menu items (each item might contain child items)
        api_response = api_instance.folder_menu_get(filter=filter)
        print("The response of FolderMenuApi->folder_menu_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FolderMenuApi->folder_menu_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| (optional) Filter for the folders and meters:               all: load everything              assigned: load only folders and meters that are assigend to a folder              unassigend: load only meters that are not assigend to a folder              user: load only folder and all users assigned to this folders              subuserlist: load all subusers as a list | [optional] 

### Return type

[**FolderMenuConfiguration**](FolderMenuConfiguration.md)

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

# **folder_menu_post**
> folder_menu_post(folder_menu_configuration)

Creates and updates the folder menu items

### Example


```python
import openapi_client
from openapi_client.models.folder_menu_configuration import FolderMenuConfiguration
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
    api_instance = openapi_client.FolderMenuApi(api_client)
    folder_menu_configuration = openapi_client.FolderMenuConfiguration() # FolderMenuConfiguration | 

    try:
        # Creates and updates the folder menu items
        api_instance.folder_menu_post(folder_menu_configuration)
    except Exception as e:
        print("Exception when calling FolderMenuApi->folder_menu_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_menu_configuration** | [**FolderMenuConfiguration**](FolderMenuConfiguration.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

