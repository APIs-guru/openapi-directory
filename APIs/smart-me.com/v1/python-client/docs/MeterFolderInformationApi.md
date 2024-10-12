# openapi_client.MeterFolderInformationApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**meter_folder_information_get**](MeterFolderInformationApi.md#meter_folder_information_get) | **GET** /api/MeterFolderInformation/{id} | Beta: Gets the General Information for a Meter or a Folder
[**meter_folder_information_post**](MeterFolderInformationApi.md#meter_folder_information_post) | **POST** /api/MeterFolderInformation | Sets the Name of a Meter or a Folder


# **meter_folder_information_get**
> MeterFolderInformation meter_folder_information_get(id)

Beta: Gets the General Information for a Meter or a Folder

Beta: Gets the General Information for a Meter or a Folder

### Example


```python
import openapi_client
from openapi_client.models.meter_folder_information import MeterFolderInformation
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
    api_instance = openapi_client.MeterFolderInformationApi(api_client)
    id = 'id_example' # str | 

    try:
        # Beta: Gets the General Information for a Meter or a Folder
        api_response = api_instance.meter_folder_information_get(id)
        print("The response of MeterFolderInformationApi->meter_folder_information_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeterFolderInformationApi->meter_folder_information_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**MeterFolderInformation**](MeterFolderInformation.md)

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

# **meter_folder_information_post**
> meter_folder_information_post(meter_folder_information_to_post)

Sets the Name of a Meter or a Folder

Sets the Name of a Meter or a Folder

### Example


```python
import openapi_client
from openapi_client.models.meter_folder_information_to_post import MeterFolderInformationToPost
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
    api_instance = openapi_client.MeterFolderInformationApi(api_client)
    meter_folder_information_to_post = openapi_client.MeterFolderInformationToPost() # MeterFolderInformationToPost | 

    try:
        # Sets the Name of a Meter or a Folder
        api_instance.meter_folder_information_post(meter_folder_information_to_post)
    except Exception as e:
        print("Exception when calling MeterFolderInformationApi->meter_folder_information_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meter_folder_information_to_post** | [**MeterFolderInformationToPost**](MeterFolderInformationToPost.md)|  | 

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

