# openapi_client.ConversionApi

All URIs are relative to *https://mermade.org.uk/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convert**](ConversionApi.md#convert) | **POST** /convert | Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 
[**convert_url**](ConversionApi.md#convert_url) | **GET** /convert | Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL


# **convert**
> object convert(filename=filename, source=source, validate=validate)

Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://mermade.org.uk/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://mermade.org.uk/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConversionApi(api_client)
    filename = 'filename_example' # str | The file to upload and convert (optional)
    source = 'source_example' # str | The text of a Swagger 2.0 definition to convert (optional)
    validate = 'validate_example' # str |  (optional)

    try:
        # Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 
        api_response = api_instance.convert(filename=filename, source=source, validate=validate)
        print("The response of ConversionApi->convert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversionApi->convert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | **str**| The file to upload and convert | [optional] 
 **source** | **str**| The text of a Swagger 2.0 definition to convert | [optional] 
 **validate** | **str**|  | [optional] 

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
**200** | default |  -  |
**400** | Invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **convert_url**
> object convert_url(url)

Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://mermade.org.uk/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://mermade.org.uk/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConversionApi(api_client)
    url = 'https://raw.githubusercontent.com/Mermade/openapi-webconverter/master/contract/swagger.json' # str | The URL to retrieve the OpenAPI 2.0 definition from

    try:
        # Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL
        api_response = api_instance.convert_url(url)
        print("The response of ConversionApi->convert_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversionApi->convert_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| The URL to retrieve the OpenAPI 2.0 definition from | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-yaml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | default |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

