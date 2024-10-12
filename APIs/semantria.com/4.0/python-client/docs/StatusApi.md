# openapi_client.StatusApi

All URIs are relative to *https://api.semantria.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_status**](StatusApi.md#get_status) | **GET** /status.{content_type} | Retrieve API status


# **get_status**
> Status get_status(content_type)

Retrieve API status

This method retrieves API status information such as the app version, current API version, supported languages and encodings, the overall service status, etc.

### Example


```python
import openapi_client
from openapi_client.models.status import Status
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatusApi(api_client)
    content_type = 'content_type_example' # str | 

    try:
        # Retrieve API status
        api_response = api_instance.get_status(content_type)
        print("The response of StatusApi->get_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatusApi->get_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted. Server responds with status object. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

