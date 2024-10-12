# openapi_client.DefaultApi

All URIs are relative to *https://apimatic.io/api/transform*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convert_api**](DefaultApi.md#convert_api) | **POST** /transform | Transform API Descriptions from/to various formats


# **convert_api**
> object convert_api(format, url=url)

Transform API Descriptions from/to various formats

Transform API Descriptions from/to various formats e.g., Swagger, API Blueprint, RAML, WADL, Google Discovery, I/O Docs.  ### INPUTS * API Blueprint * Swagger 1.0 - 1.2 * Swagger 2.0 JSON * Swagger 2.0 YAML * WADL - W3C 2009 * Google Discovery * RAML 0.8 * I/O Docs - Mashery * HAR 1.2 * Postman Collection 1.0 - 2.0 * APIMATIC Format * Mashape  ### OUTPUTS * API Blueprint * Swagger 1.2 * Swagger 2.0 JSON * Swagger 2.0 YAML * WADL - W3C 2009 * RAML 0.8 - 1.0 * APIMATIC Format

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apimatic.io/api/transform
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apimatic.io/api/transform"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    format = 'format_example' # str | 
    url = 'url_example' # str |  (optional)

    try:
        # Transform API Descriptions from/to various formats
        api_response = api_instance.convert_api(format, url=url)
        print("The response of DefaultApi->convert_api:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->convert_api: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**|  | 
 **url** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/x-yaml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The converted API specification |  -  |
**429** | Rate-limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

