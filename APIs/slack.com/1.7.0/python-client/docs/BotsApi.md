# openapi_client.BotsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bots_info**](BotsApi.md#bots_info) | **GET** /bots.info | 


# **bots_info**
> BotsInfoSchema bots_info(token, bot=bot)



Gets information about a bot user.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.bots_info_schema import BotsInfoSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BotsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users:read`
    bot = 'bot_example' # str | Bot user to get info on (optional)

    try:
        api_response = api_instance.bots_info(token, bot=bot)
        print("The response of BotsApi->bots_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BotsApi->bots_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users:read&#x60; | 
 **bot** | **str**| Bot user to get info on | [optional] 

### Return type

[**BotsInfoSchema**](BotsInfoSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | When successful, returns bot info by bot ID. |  -  |
**0** | When no bot can be found, it returns an error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

