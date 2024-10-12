# openapi_client.CourseDesignsApi

All URIs are relative to *http://learnifier.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coursedesigns_get**](CourseDesignsApi.md#coursedesigns_get) | **GET** /coursedesigns | Lists all global course design templates


# **coursedesigns_get**
> List[CourseDesign] coursedesigns_get()

Lists all global course design templates

Lists all global course design templates. Only api callers that have full access can call this method.

### Example


```python
import openapi_client
from openapi_client.models.course_design import CourseDesign
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CourseDesignsApi(api_client)

    try:
        # Lists all global course design templates
        api_response = api_instance.coursedesigns_get()
        print("The response of CourseDesignsApi->coursedesigns_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CourseDesignsApi->coursedesigns_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[CourseDesign]**](CourseDesign.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List with course design templates |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

