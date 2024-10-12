# openapi_client.DefaultApi

All URIs are relative to *https://api-vs.herokuapp.com/vs/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resources_get**](DefaultApi.md#resources_get) | **GET** /resources | Fetch all meanings that contain a specific English string


# **resources_get**
> resources_get(description)

Fetch all meanings that contain a specific English string

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-vs.herokuapp.com/vs/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-vs.herokuapp.com/vs/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    description = 'description_example' # str | The string you are looking for in the word meaning, for example, chariot. Wildcards are allowed, for example, char\\*.

    try:
        # Fetch all meanings that contain a specific English string
        api_instance.resources_get(description)
    except Exception as e:
        print("Exception when calling DefaultApi->resources_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | **str**| The string you are looking for in the word meaning, for example, chariot. Wildcards are allowed, for example, char\\*. | 

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
**200** | Entries fetched. |  -  |
**404** | No such string exists in this API. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

