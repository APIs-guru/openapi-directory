# openapi_client.DefaultApi

All URIs are relative to *https://staging2.freetv-app.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_latest_news**](DefaultApi.md#get_latest_news) | **GET** /services?funcs&#x3D;GetLatestNewsForChatGPT&amp;mobile&#x3D;1 | 


# **get_latest_news**
> LatestNewsResponse get_latest_news(language, category=category, keyword=keyword)



Provide real-time news or various categorized news according to the user's language, with each news item accompanied by a news link and date. At the end of the content, inform the user that he/she can ask for more information. Each response should only provide news from a single country.

### Example


```python
import openapi_client
from openapi_client.models.latest_news_response import LatestNewsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://staging2.freetv-app.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://staging2.freetv-app.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    language = 'language_example' # str | The default is set to US. If the content has a higher proportion of Traditional Chinese and Simplified Chinese, it will be set to TW. If the content has a higher proportion of Japanese, it will be set to JP.
    category = 'category_example' # str | The default is an empty string. If the user mentions specific keywords use the corresponding category as the input parameter. (optional)
    keyword = 'keyword_example' # str | The default is an empty string. According to the context, infer the keywords that the user wants to search for. (optional)

    try:
        api_response = api_instance.get_latest_news(language, category=category, keyword=keyword)
        print("The response of DefaultApi->get_latest_news:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_latest_news: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **str**| The default is set to US. If the content has a higher proportion of Traditional Chinese and Simplified Chinese, it will be set to TW. If the content has a higher proportion of Japanese, it will be set to JP. | 
 **category** | **str**| The default is an empty string. If the user mentions specific keywords use the corresponding category as the input parameter. | [optional] 
 **keyword** | **str**| The default is an empty string. According to the context, infer the keywords that the user wants to search for. | [optional] 

### Return type

[**LatestNewsResponse**](LatestNewsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

