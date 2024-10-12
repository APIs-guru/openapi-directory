# openapi_client.DetectLanguageApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**detect_language**](DetectLanguageApi.md#detect_language) | **POST** /languages | The API returns the detected language and a numeric score between 0 and 1.


# **detect_language**
> LanguageBatchResult detect_language(input)

The API returns the detected language and a numeric score between 0 and 1.

Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.batch_input import BatchInput
from openapi_client.models.language_batch_result import LanguageBatchResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DetectLanguageApi(api_client)
    input = openapi_client.BatchInput() # BatchInput | Collection of documents to analyze.

    try:
        # The API returns the detected language and a numeric score between 0 and 1.
        api_response = api_instance.detect_language(input)
        print("The response of DetectLanguageApi->detect_language:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DetectLanguageApi->detect_language: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**BatchInput**](BatchInput.md)| Collection of documents to analyze. | 

### Return type

[**LanguageBatchResult**](LanguageBatchResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call results in the detected language with the highest probability for each valid document |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

