# openapi_client.ValidationApi

All URIs are relative to *https://mermade.org.uk/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_badge**](ValidationApi.md#get_badge) | **GET** /badge | Return a redirect to a badge svg file depending on a source definition&#39;s validity
[**validate**](ValidationApi.md#validate) | **POST** /validate | Validate an OpenAPI 3.0.x definition supplied in the body of the request
[**validate_url**](ValidationApi.md#validate_url) | **GET** /validate | Validate an OpenAPI 3.0.x definition


# **get_badge**
> get_badge(url)

Return a redirect to a badge svg file depending on a source definition's validity



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
    api_instance = openapi_client.ValidationApi(api_client)
    url = 'https://raw.githubusercontent.com/Mermade/openapi-webconverter/master/contract/openapi.json' # str | The URL to retrieve the OpenAPI 3.0.x definition from

    try:
        # Return a redirect to a badge svg file depending on a source definition's validity
        api_instance.get_badge(url)
    except Exception as e:
        print("Exception when calling ValidationApi->get_badge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| The URL to retrieve the OpenAPI 3.0.x definition from | 

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
**301** | Moved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate**
> ValidationResult validate(filename=filename, source=source)

Validate an OpenAPI 3.0.x definition supplied in the body of the request



### Example


```python
import openapi_client
from openapi_client.models.validation_result import ValidationResult
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
    api_instance = openapi_client.ValidationApi(api_client)
    filename = 'filename_example' # str | The file to upload and validate (optional)
    source = 'source_example' # str | The text of an OpenAPI 3.0.x definition to validate (optional)

    try:
        # Validate an OpenAPI 3.0.x definition supplied in the body of the request
        api_response = api_instance.validate(filename=filename, source=source)
        print("The response of ValidationApi->validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ValidationApi->validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | **str**| The file to upload and validate | [optional] 
 **source** | **str**| The text of an OpenAPI 3.0.x definition to validate | [optional] 

### Return type

[**ValidationResult**](ValidationResult.md)

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

# **validate_url**
> ValidationResult validate_url(url)

Validate an OpenAPI 3.0.x definition



### Example


```python
import openapi_client
from openapi_client.models.validation_result import ValidationResult
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
    api_instance = openapi_client.ValidationApi(api_client)
    url = 'https://raw.githubusercontent.com/Mermade/openapi-webconverter/master/contract/openapi.json' # str | The URL to retrieve the OpenAPI 3.0.x definition from

    try:
        # Validate an OpenAPI 3.0.x definition
        api_response = api_instance.validate_url(url)
        print("The response of ValidationApi->validate_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ValidationApi->validate_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| The URL to retrieve the OpenAPI 3.0.x definition from | 

### Return type

[**ValidationResult**](ValidationResult.md)

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

