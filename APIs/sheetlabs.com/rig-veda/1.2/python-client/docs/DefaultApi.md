# openapi_client.DefaultApi

All URIs are relative to *https://api-rv.herokuapp.com/rv/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resources_get**](DefaultApi.md#resources_get) | **GET** /resources | Fetch all verses sung for a specific category of god, person, or object


# **resources_get**
> resources_get(sungforcategory)

Fetch all verses sung for a specific category of god, person, or object

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-rv.herokuapp.com/rv/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-rv.herokuapp.com/rv/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    sungforcategory = 'sungforcategory_example' # str | Click to select one of these available values.

    try:
        # Fetch all verses sung for a specific category of god, person, or object
        api_instance.resources_get(sungforcategory)
    except Exception as e:
        print("Exception when calling DefaultApi->resources_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sungforcategory** | **str**| Click to select one of these available values. | 

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
**200** | Verses fetched. |  -  |
**404** | No verses found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

