# openapi_client.SubscriptionApi

All URIs are relative to *https://api.ebay.com/sell/account/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_subscription**](SubscriptionApi.md#get_subscription) | **GET** /subscription | 


# **get_subscription**
> SubscriptionResponse get_subscription(limit=limit, continuation_token=continuation_token)



This method retrieves a list of subscriptions associated with the seller account.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.subscription_response import SubscriptionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/account/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/account/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SubscriptionApi(api_client)
    limit = 'limit_example' # str | This field is for future use. (optional)
    continuation_token = 'continuation_token_example' # str | This field is for future use. (optional)

    try:
        api_response = api_instance.get_subscription(limit=limit, continuation_token=continuation_token)
        print("The response of SubscriptionApi->get_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionApi->get_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **str**| This field is for future use. | [optional] 
 **continuation_token** | **str**| This field is for future use. | [optional] 

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

