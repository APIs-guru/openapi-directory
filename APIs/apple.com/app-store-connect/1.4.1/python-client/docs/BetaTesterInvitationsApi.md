# openapi_client.BetaTesterInvitationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**beta_tester_invitations_create_instance**](BetaTesterInvitationsApi.md#beta_tester_invitations_create_instance) | **POST** /v1/betaTesterInvitations | 


# **beta_tester_invitations_create_instance**
> BetaTesterInvitationResponse beta_tester_invitations_create_instance(beta_tester_invitation_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_tester_invitation_create_request import BetaTesterInvitationCreateRequest
from openapi_client.models.beta_tester_invitation_response import BetaTesterInvitationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BetaTesterInvitationsApi(api_client)
    beta_tester_invitation_create_request = openapi_client.BetaTesterInvitationCreateRequest() # BetaTesterInvitationCreateRequest | BetaTesterInvitation representation

    try:
        api_response = api_instance.beta_tester_invitations_create_instance(beta_tester_invitation_create_request)
        print("The response of BetaTesterInvitationsApi->beta_tester_invitations_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaTesterInvitationsApi->beta_tester_invitations_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beta_tester_invitation_create_request** | [**BetaTesterInvitationCreateRequest**](BetaTesterInvitationCreateRequest.md)| BetaTesterInvitation representation | 

### Return type

[**BetaTesterInvitationResponse**](BetaTesterInvitationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single BetaTesterInvitation |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

