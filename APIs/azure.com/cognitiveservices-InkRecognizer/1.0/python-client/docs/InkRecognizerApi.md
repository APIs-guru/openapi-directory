# openapi_client.InkRecognizerApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ink_recognizer_recognize**](InkRecognizerApi.md#ink_recognizer_recognize) | **PUT** /recognize | 


# **ink_recognizer_recognize**
> AnalysisResponse ink_recognizer_recognize(body, x_ms_client_request_id=x_ms_client_request_id)



Ink Recognition operation is used to perform ink layout and recognition of written words and shapes. It allows passing the ink strokes to the service to get the recognition results in the response.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.analysis_request import AnalysisRequest
from openapi_client.models.analysis_response import AnalysisResponse
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
    api_instance = openapi_client.InkRecognizerApi(api_client)
    body = openapi_client.AnalysisRequest() # AnalysisRequest | The collection of stroke objects to send for analysis
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | The request id used to uniquely identify each request during troubleshooting. This is an optional parameter useful for correlating logs and other artifacts. (optional)

    try:
        api_response = api_instance.ink_recognizer_recognize(body, x_ms_client_request_id=x_ms_client_request_id)
        print("The response of InkRecognizerApi->ink_recognizer_recognize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InkRecognizerApi->ink_recognizer_recognize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AnalysisRequest**](AnalysisRequest.md)| The collection of stroke objects to send for analysis | 
 **x_ms_client_request_id** | **str**| The request id used to uniquely identify each request during troubleshooting. This is an optional parameter useful for correlating logs and other artifacts. | [optional] 

### Return type

[**AnalysisResponse**](AnalysisResponse.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The results were processed successfully. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

