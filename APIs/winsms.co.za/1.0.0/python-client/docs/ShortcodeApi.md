# openapi_client.ShortcodeApi

All URIs are relative to *https://www.winsms.co.za/api/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_short_code_messages**](ShortcodeApi.md#get_short_code_messages) | **GET** /shortcode/incoming | Get a list of incoming short/long code messages 


# **get_short_code_messages**
> ShortcodeMessageResponse get_short_code_messages(offset=offset, limit=limit)

Get a list of incoming short/long code messages 

***Only available to users with a [WinSMS Short/Long Code](https://support.winsms.co.za/winsms-long-short-code-system/).*** Get a list of all incoming short/long code messages received by the account.  Only the first 100 incoming short/long code messages will be returned if no ***offset*** and ***limit*** parameters are specified. 

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.shortcode_message_response import ShortcodeMessageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.winsms.co.za/api/rest/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.winsms.co.za/api/rest/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShortcodeApi(api_client)
    offset = 0 # int | ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.  (optional) (default to 0)
    limit = 100 # int | ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.  (optional) (default to 100)

    try:
        # Get a list of incoming short/long code messages 
        api_response = api_instance.get_short_code_messages(offset=offset, limit=limit)
        print("The response of ShortcodeApi->get_short_code_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShortcodeApi->get_short_code_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**| ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.  | [optional] [default to 0]
 **limit** | **int**| ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.  | [optional] [default to 100]

### Return type

[**ShortcodeMessageResponse**](ShortcodeMessageResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**405** | Method Not Allowed |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

