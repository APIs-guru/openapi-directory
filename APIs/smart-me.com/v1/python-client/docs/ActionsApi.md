# openapi_client.ActionsApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actions_get**](ActionsApi.md#actions_get) | **GET** /api/Actions/{id} | Gets all available Actions of a Device
[**actions_post**](ActionsApi.md#actions_post) | **POST** /api/Actions | Set an action for the specified device.


# **actions_get**
> List[ActionInformation] actions_get(id)

Gets all available Actions of a Device

Gets all available Actions of a Device

### Example


```python
import openapi_client
from openapi_client.models.action_information import ActionInformation
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
    api_instance = openapi_client.ActionsApi(api_client)
    id = 'id_example' # str | The ID of the device

    try:
        # Gets all available Actions of a Device
        api_response = api_instance.actions_get(id)
        print("The response of ActionsApi->actions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActionsApi->actions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the device | 

### Return type

[**List[ActionInformation]**](ActionInformation.md)

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

# **actions_post**
> actions_post(action_to_post)

Set an action for the specified device.

Set an action for the specified device.

### Example


```python
import openapi_client
from openapi_client.models.action_to_post import ActionToPost
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
    api_instance = openapi_client.ActionsApi(api_client)
    action_to_post = openapi_client.ActionToPost() # ActionToPost | The Action Data

    try:
        # Set an action for the specified device.
        api_instance.actions_post(action_to_post)
    except Exception as e:
        print("Exception when calling ActionsApi->actions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action_to_post** | [**ActionToPost**](ActionToPost.md)| The Action Data | 

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

