# openapi_client.SubscriptionApi

All URIs are relative to *https://api.inboxroute.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscription_listid_post**](SubscriptionApi.md#subscription_listid_post) | **POST** /subscription/{listid} | 


# **subscription_listid_post**
> subscription_listid_post(listid, subscription)



Subscribe an email address to a list. This api call has the same behavior as a regular subscribe form. However, single opt-in is allowed for system integration purposes.  - If email address does not exist, a new contact will be added to the list. - If email address exists custom fields will be updated and status will be put   to unconfirmed or active depending of singleoptin value. - If current status if Active, this operation will only update the custom fields. - If singleoptin is true, no email confirmation will be sent. In that case,   you must provide the subscribe's origin ip and confirmation date-time. 

### Example

* Api Key Authentication (mqApiKey):

```python
import openapi_client
from openapi_client.models.subscription_request import SubscriptionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.inboxroute.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.inboxroute.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: mqApiKey
configuration.api_key['mqApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['mqApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SubscriptionApi(api_client)
    listid = 'listid_example' # str | Unique 16 characters ID of the contact list
    subscription = openapi_client.SubscriptionRequest() # SubscriptionRequest | Subscription request

    try:
        api_instance.subscription_listid_post(listid, subscription)
    except Exception as e:
        print("Exception when calling SubscriptionApi->subscription_listid_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listid** | **str**| Unique 16 characters ID of the contact list | 
 **subscription** | [**SubscriptionRequest**](SubscriptionRequest.md)| Subscription request | 

### Return type

void (empty response body)

### Authorization

[mqApiKey](../README.md#mqApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty response |  -  |
**401** | Invalid api key or key does not have access to this ressource |  -  |
**404** | The requested resource was not found |  -  |
**422** | The request parameters were invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

