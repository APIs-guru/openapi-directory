# openapi_client.RecipientsApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resend_invitations_for_share**](RecipientsApi.md#resend_invitations_for_share) | **POST** /recipients/shares/invites/{shareId} | Resend invitations to share recipients


# **resend_invitations_for_share**
> ShareRecipientsResponse resend_invitations_for_share(ev_api_key, ev_access_token, share_id, resend_invitations_request_body=resend_invitations_request_body)

Resend invitations to share recipients

Resend invitations to one or all recipients attached to specified share. The most recent message that was sent for the share will be re-used for this email.  You can use [GET /shares/{id}](#operation/getShareById) to view the recipient list and message history for a share. Use [PATCH /shares/{id}](#operation/updateShareById) to add or remove recipients.

### Example


```python
import openapi_client
from openapi_client.models.resend_invitations_request_body import ResendInvitationsRequestBody
from openapi_client.models.share_recipients_response import ShareRecipientsResponse
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
    api_instance = openapi_client.RecipientsApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    share_id = 56 # int | ID of the share to resend invites for.
    resend_invitations_request_body = {"recipientId":0} # ResendInvitationsRequestBody |  (optional)

    try:
        # Resend invitations to share recipients
        api_response = api_instance.resend_invitations_for_share(ev_api_key, ev_access_token, share_id, resend_invitations_request_body=resend_invitations_request_body)
        print("The response of RecipientsApi->resend_invitations_for_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecipientsApi->resend_invitations_for_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **share_id** | **int**| ID of the share to resend invites for. | 
 **resend_invitations_request_body** | [**ResendInvitationsRequestBody**](ResendInvitationsRequestBody.md)|  | [optional] 

### Return type

[**ShareRecipientsResponse**](ShareRecipientsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

