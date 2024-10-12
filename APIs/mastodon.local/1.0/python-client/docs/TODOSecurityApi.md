# openapi_client.TODOSecurityApi

All URIs are relative to *http://mastodon.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_accounts_post**](TODOSecurityApi.md#api_v1_accounts_post) | **POST** /api/v1/accounts | 


# **api_v1_accounts_post**
> api_v1_accounts_post(api_v1_accounts_post_request=api_v1_accounts_post_request)



Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.api_v1_accounts_post_request import ApiV1AccountsPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TODOSecurityApi(api_client)
    api_v1_accounts_post_request = openapi_client.ApiV1AccountsPostRequest() # ApiV1AccountsPostRequest |  (optional)

    try:
        api_instance.api_v1_accounts_post(api_v1_accounts_post_request=api_v1_accounts_post_request)
    except Exception as e:
        print("Exception when calling TODOSecurityApi->api_v1_accounts_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_v1_accounts_post_request** | [**ApiV1AccountsPostRequest**](ApiV1AccountsPostRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/form-data
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

