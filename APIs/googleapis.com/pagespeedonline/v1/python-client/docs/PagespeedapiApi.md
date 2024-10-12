# openapi_client.PagespeedapiApi

All URIs are relative to *https://www.googleapis.com/pagespeedonline/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pagespeedonline_pagespeedapi_runpagespeed**](PagespeedapiApi.md#pagespeedonline_pagespeedapi_runpagespeed) | **GET** /runPagespeed | 


# **pagespeedonline_pagespeedapi_runpagespeed**
> Result pagespeedonline_pagespeedapi_runpagespeed(url, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, filter_third_party_resources=filter_third_party_resources, locale=locale, rule=rule, screenshot=screenshot, strategy=strategy)



Runs PageSpeed analysis on the page at the specified URL, and returns a PageSpeed score, a list of suggestions to make that page faster, and other information.

### Example


```python
import openapi_client
from openapi_client.models.result import Result
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/pagespeedonline/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/pagespeedonline/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PagespeedapiApi(api_client)
    url = 'url_example' # str | The URL to fetch and analyze
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    filter_third_party_resources = False # bool | Indicates if third party resources should be filtered out before PageSpeed analysis. (optional) (default to False)
    locale = 'locale_example' # str | The locale used to localize formatted results (optional)
    rule = ['rule_example'] # List[str] | A PageSpeed rule to run; if none are given, all rules are run (optional)
    screenshot = False # bool | Indicates if binary data containing a screenshot should be included (optional) (default to False)
    strategy = 'strategy_example' # str | The analysis strategy to use (optional)

    try:
        api_response = api_instance.pagespeedonline_pagespeedapi_runpagespeed(url, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, filter_third_party_resources=filter_third_party_resources, locale=locale, rule=rule, screenshot=screenshot, strategy=strategy)
        print("The response of PagespeedapiApi->pagespeedonline_pagespeedapi_runpagespeed:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PagespeedapiApi->pagespeedonline_pagespeedapi_runpagespeed: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| The URL to fetch and analyze | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **filter_third_party_resources** | **bool**| Indicates if third party resources should be filtered out before PageSpeed analysis. | [optional] [default to False]
 **locale** | **str**| The locale used to localize formatted results | [optional] 
 **rule** | [**List[str]**](str.md)| A PageSpeed rule to run; if none are given, all rules are run | [optional] 
 **screenshot** | **bool**| Indicates if binary data containing a screenshot should be included | [optional] [default to False]
 **strategy** | **str**| The analysis strategy to use | [optional] 

### Return type

[**Result**](Result.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

