# openapi_client.ConfigurationApi

All URIs are relative to *https://api.nexmo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**change_account_settings**](ConfigurationApi.md#change_account_settings) | **POST** /account/settings | Change Account Settings
[**register_sender**](ConfigurationApi.md#register_sender) | **POST** /account/register-sender | Register an email sender


# **change_account_settings**
> AccountSettings change_account_settings(api_key, api_secret, dr_call_back_url=dr_call_back_url, mo_call_back_url=mo_call_back_url)

Change Account Settings

Update the default webhook URLs associated with your account:   * Callback URL for incoming SMS messages   * Callback URL for delivery receipts  Note that the URLs you provide must be valid and active. Vonage will check that they return a 200 OK response before the setting is saved.

### Example


```python
import openapi_client
from openapi_client.models.account_settings import AccountSettings
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
    api_instance = openapi_client.ConfigurationApi(api_client)
    api_key = 'abcd1234' # str | Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)
    api_secret = 'ABCDEFGH01234abc' # str | Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)
    dr_call_back_url = 'dr_call_back_url_example' # str | The webhook URL that Vonage makes a request to when a delivery receipt is available  for an SMS sent by one of your Vonage numbers. Send an empty string to unset this value. (optional)
    mo_call_back_url = 'mo_call_back_url_example' # str | The default webhook URL for inbound SMS. If an SMS is received at a Vonage number  that does not have its own inbound SMS webhook configured, Vonage makes a request here. Send an empty string to unset this value. (optional)

    try:
        # Change Account Settings
        api_response = api_instance.change_account_settings(api_key, api_secret, dr_call_back_url=dr_call_back_url, mo_call_back_url=mo_call_back_url)
        print("The response of ConfigurationApi->change_account_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationApi->change_account_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com) | 
 **api_secret** | **str**| Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com) | 
 **dr_call_back_url** | **str**| The webhook URL that Vonage makes a request to when a delivery receipt is available  for an SMS sent by one of your Vonage numbers. Send an empty string to unset this value. | [optional] 
 **mo_call_back_url** | **str**| The default webhook URL for inbound SMS. If an SMS is received at a Vonage number  that does not have its own inbound SMS webhook configured, Vonage makes a request here. Send an empty string to unset this value. | [optional] 

### Return type

[**AccountSettings**](AccountSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Settings were updated if supplied, the details of the current settings are included in the response. |  -  |
**401** | Not Authorised. You must supply your &#x60;api_key&#x60; and &#x60;api_secret&#x60; as query parameters to this request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **register_sender**
> RegisterEmailResponse register_sender(api_key, api_secret, register_email_request)

Register an email sender

Register an email sender with an API Key for using email with Verify V2.

### Example


```python
import openapi_client
from openapi_client.models.register_email_request import RegisterEmailRequest
from openapi_client.models.register_email_response import RegisterEmailResponse
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
    api_instance = openapi_client.ConfigurationApi(api_client)
    api_key = 'abcd1234' # str | Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)
    api_secret = 'ABCDEFGH01234abc' # str | Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)
    register_email_request = openapi_client.RegisterEmailRequest() # RegisterEmailRequest | 

    try:
        # Register an email sender
        api_response = api_instance.register_sender(api_key, api_secret, register_email_request)
        print("The response of ConfigurationApi->register_sender:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationApi->register_sender: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com) | 
 **api_secret** | **str**| Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com) | 
 **register_email_request** | [**RegisterEmailRequest**](RegisterEmailRequest.md)|  | 

### Return type

[**RegisterEmailResponse**](RegisterEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

