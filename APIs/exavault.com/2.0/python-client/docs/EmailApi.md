# openapi_client.EmailApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send_referral_email**](EmailApi.md#send_referral_email) | **POST** /email/referral | Send referral email to a given address
[**send_welcome_email**](EmailApi.md#send_welcome_email) | **POST** /email/welcome/{username} | Resend welcome email to specific user


# **send_referral_email**
> EmptyResponse send_referral_email(ev_api_key, ev_access_token, send_referral_email_request_body=send_referral_email_request_body)

Send referral email to a given address

Invite a friend to sign up for a free trial of ExaVault. Send a [referral](/lp/referafriend/) email to an email address. If the recipient signs up for ExaVault, we'll apply a credit to your account for the referral. 

### Example


```python
import openapi_client
from openapi_client.models.empty_response import EmptyResponse
from openapi_client.models.send_referral_email_request_body import SendReferralEmailRequestBody
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
    api_instance = openapi_client.EmailApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    send_referral_email_request_body = {"emails":["user@example.com"],"message":"I use ExaVault for secure file sending, and so should you. Follow my link to sign up for a trial."} # SendReferralEmailRequestBody |  (optional)

    try:
        # Send referral email to a given address
        api_response = api_instance.send_referral_email(ev_api_key, ev_access_token, send_referral_email_request_body=send_referral_email_request_body)
        print("The response of EmailApi->send_referral_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailApi->send_referral_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **send_referral_email_request_body** | [**SendReferralEmailRequestBody**](SendReferralEmailRequestBody.md)|  | [optional] 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_welcome_email**
> EmptyResponse send_welcome_email(ev_api_key, ev_access_token, username)

Resend welcome email to specific user

Send a welcome email to a user. The contents of the welcome email can be set by [PATCH /accounts](#operation/updateAccount).

### Example


```python
import openapi_client
from openapi_client.models.empty_response import EmptyResponse
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
    api_instance = openapi_client.EmailApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    username = 'exampleuser' # str | A username to send the welcome email to.

    try:
        # Resend welcome email to specific user
        api_response = api_instance.send_welcome_email(ev_api_key, ev_access_token, username)
        print("The response of EmailApi->send_welcome_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailApi->send_welcome_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **username** | **str**| A username to send the welcome email to. | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

