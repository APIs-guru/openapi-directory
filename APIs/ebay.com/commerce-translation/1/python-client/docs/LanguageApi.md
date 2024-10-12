# openapi_client.LanguageApi

All URIs are relative to *https://api.ebay.com/commerce/translation/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**translate**](LanguageApi.md#translate) | **POST** /translate | 


# **translate**
> TranslateResponse translate(translate_request)



Translates input text inot a given language.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.translate_request import TranslateRequest
from openapi_client.models.translate_response import TranslateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/commerce/translation/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/commerce/translation/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LanguageApi(api_client)
    translate_request = openapi_client.TranslateRequest() # TranslateRequest | 

    try:
        api_response = api_instance.translate(translate_request)
        print("The response of LanguageApi->translate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LanguageApi->translate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translate_request** | [**TranslateRequest**](TranslateRequest.md)|  | 

### Return type

[**TranslateResponse**](TranslateResponse.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

