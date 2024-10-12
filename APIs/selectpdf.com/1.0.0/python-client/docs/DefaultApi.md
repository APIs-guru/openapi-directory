# openapi_client.DefaultApi

All URIs are relative to *https://selectpdf.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api2_convert_post**](DefaultApi.md#api2_convert_post) | **POST** /api2/convert | Performs a html to pdf conversion


# **api2_convert_post**
> api2_convert_post(parameters=parameters)

Performs a html to pdf conversion

Converts provided HTML string or url to PDF

### Example


```python
import openapi_client
from openapi_client.models.conversion_parameters import ConversionParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://selectpdf.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://selectpdf.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    parameters = openapi_client.ConversionParameters() # ConversionParameters | Conversion parameters (optional)

    try:
        # Performs a html to pdf conversion
        api_instance.api2_convert_post(parameters=parameters)
    except Exception as e:
        print("Exception when calling DefaultApi->api2_convert_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**ConversionParameters**](ConversionParameters.md)| Conversion parameters | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The API call succeeded. The pdf document is returned. |  -  |
**400** | Bad Request. Url or html string not specified. The body of the response contains an explanation in plain text. |  -  |
**401** | Authorization Required. License key not specified or invalid. The body of the response contains an explanation in plain text. |  -  |
**499** | Conversion error. The body of the response contains an explanation in plain text. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

