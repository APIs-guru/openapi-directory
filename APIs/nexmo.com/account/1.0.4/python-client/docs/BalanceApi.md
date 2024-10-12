# openapi_client.BalanceApi

All URIs are relative to *https://api.nexmo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_account_balance**](BalanceApi.md#get_account_balance) | **GET** /account/get-balance | Get Account Balance
[**top_up_account_balance**](BalanceApi.md#top_up_account_balance) | **POST** /account/top-up | Top Up Account Balance


# **get_account_balance**
> AccountBalance get_account_balance(api_key, api_secret)

Get Account Balance

Retrieve the current balance of your Vonage API account

### Example


```python
import openapi_client
from openapi_client.models.account_balance import AccountBalance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BalanceApi(api_client)
    api_key = 'abcd1234' # str | Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)
    api_secret = 'ABCDEFGH01234abc' # str | Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)

    try:
        # Get Account Balance
        api_response = api_instance.get_account_balance(api_key, api_secret)
        print("The response of BalanceApi->get_account_balance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BalanceApi->get_account_balance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com) | 
 **api_secret** | **str**| Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com) | 

### Return type

[**AccountBalance**](AccountBalance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The current balance of your account |  -  |
**401** | Not Authorised. You must supply your &#x60;api_key&#x60; and &#x60;api_secret&#x60; as query parameters to this request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **top_up_account_balance**
> Success top_up_account_balance(api_key, api_secret, trx)

Top Up Account Balance

You can top up your account using this API when you have enabled auto-reload in the dashboard. The amount added by the top-up operation will be the same amount as was added in the payment when auto-reload was enabled. Your account balance is checked every 5-10 minutes and if it falls below the threshold and auto-reload is enabled, then it will be topped up automatically. Use this endpoint  if you need to top up at times when your credit may be exhausted more quickly than the auto-reload may occur.

### Example


```python
import openapi_client
from openapi_client.models.success import Success
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BalanceApi(api_client)
    api_key = 'abcd1234' # str | Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)
    api_secret = 'ABCDEFGH01234abc' # str | Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)
    trx = 'trx_example' # str | The transaction reference of the transaction when balance was added and auto-reload was enabled on your account.

    try:
        # Top Up Account Balance
        api_response = api_instance.top_up_account_balance(api_key, api_secret, trx)
        print("The response of BalanceApi->top_up_account_balance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BalanceApi->top_up_account_balance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com) | 
 **api_secret** | **str**| Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com) | 
 **trx** | **str**| The transaction reference of the transaction when balance was added and auto-reload was enabled on your account. | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Not Authorised |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

