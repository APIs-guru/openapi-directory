# openapi_client.DefaultApi

All URIs are relative to *https://spellcheckpro.p.rapidapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_spelling_russian**](DefaultApi.md#check_spelling_russian) | **POST** /check_spelling | Check Spelling (Russian)


# **check_spelling_russian**
> check_spelling_russian(x_rapid_api_key=x_rapid_api_key, check_spelling_russian_request=check_spelling_russian_request)

Check Spelling (Russian)

Check Spelling (Russian)

### Example


```python
import openapi_client
from openapi_client.models.check_spelling_russian_request import CheckSpellingRussianRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://spellcheckpro.p.rapidapi.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://spellcheckpro.p.rapidapi.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_rapid_api_key = '' # str |  (optional)
    check_spelling_russian_request = {"lang_code":"ru","text":"Добрый вее!"} # CheckSpellingRussianRequest |  (optional)

    try:
        # Check Spelling (Russian)
        api_instance.check_spelling_russian(x_rapid_api_key=x_rapid_api_key, check_spelling_russian_request=check_spelling_russian_request)
    except Exception as e:
        print("Exception when calling DefaultApi->check_spelling_russian: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_rapid_api_key** | **str**|  | [optional] 
 **check_spelling_russian_request** | [**CheckSpellingRussianRequest**](CheckSpellingRussianRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

