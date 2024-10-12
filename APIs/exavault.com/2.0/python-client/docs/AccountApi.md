# openapi_client.AccountApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_account**](AccountApi.md#get_account) | **GET** /account | Get account settings
[**update_account**](AccountApi.md#update_account) | **PATCH** /account | Update account settings


# **get_account**
> AccountResponse get_account(ev_api_key, ev_access_token, include=include)

Get account settings

Get settings for your account, such as current space usage, webhooks settings, welcome email content and IP address restrictions.

### Example


```python
import openapi_client
from openapi_client.models.account_response import AccountResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key required for the request
    ev_access_token = '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1' # str | Access Token for the request
    include = 'masterUser' # str | Related records to include in the response. Valid option is **masterUser** (optional)

    try:
        # Get account settings
        api_response = api_instance.get_account(ev_api_key, ev_access_token, include=include)
        print("The response of AccountApi->get_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required for the request | 
 **ev_access_token** | **str**| Access Token for the request | 
 **include** | **str**| Related records to include in the response. Valid option is **masterUser** | [optional] 

### Return type

[**AccountResponse**](AccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_account**
> AccountResponse update_account(ev_api_key, ev_access_token, update_account_request_body=update_account_request_body)

Update account settings

Update account settings, such as welcome email content, IP address restrictions, webhooks settings and secure password requirements.  **Notes**  - You must have [admin-level access](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to change account settings.

### Example


```python
import openapi_client
from openapi_client.models.account_response import AccountResponse
from openapi_client.models.update_account_request_body import UpdateAccountRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key required to make the API call.
    ev_access_token = '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1' # str | Access token required to make the API call.
    update_account_request_body = {"accountOnboarding":true,"allowedIpRanges":[{"ipEnd":"67.208.64.254","ipStart":"67.208.64.228"}],"brandingSettings":{"companyName":"Example File Transfer","theme":"light"},"complexPasswords":true,"customSignature":"Please consider the planet before printing this email","emailContent":"Greetings, ExampleUser!  Your account is ready for you to start transferring files right now. Here's your link to set up your account [[setpassword]]  Henceforth, you shall be known as [[username]]","emailSubject":"Welcome to the Example Account","externalDomain":"https://example.com/files","quota":{"noticeEnabled":true,"noticeThreshold":90,"transactionsNoticeEnabled":true,"transactionsNoticeThreshold":80},"secureOnly":true,"showReferralLinks":false} # UpdateAccountRequestBody | Update Account Settings (optional)

    try:
        # Update account settings
        api_response = api_instance.update_account(ev_api_key, ev_access_token, update_account_request_body=update_account_request_body)
        print("The response of AccountApi->update_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->update_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **update_account_request_body** | [**UpdateAccountRequestBody**](UpdateAccountRequestBody.md)| Update Account Settings | [optional] 

### Return type

[**AccountResponse**](AccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

