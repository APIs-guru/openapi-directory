# openapi_client.UserFeedbackApi

All URIs are relative to *https://api.mastercard.com/plo/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userfeedback_post**](UserFeedbackApi.md#userfeedback_post) | **POST** /userfeedback | Provide User Feedback on Offer


# **userfeedback_post**
> UserFeedbackResponse userfeedback_post(fid, user_token, offer_id, feedback)

Provide User Feedback on Offer

This resource allows a user to provide a thumbs-up or a thumbs-down rating of the specified offer. Offer matches that are disliked will be supressed from the results of future calls to Matched Offers. 

### Example


```python
import openapi_client
from openapi_client.models.user_feedback_response import UserFeedbackResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com/plo/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com/plo/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserFeedbackApi(api_client)
    fid = '999999' # str | Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
    user_token = 'user_token_example' # str | Session identifier as returned by the UserToken resource.
    offer_id = 'd82e1e7c-c6b9-3b46-acd0-5498731c2838' # str | System-wide identifier for the campaign, not intended for end-user display.
    feedback = 1 # int | User response to the offer. 0- Dislike offer. 1- Like offer.

    try:
        # Provide User Feedback on Offer
        api_response = api_instance.userfeedback_post(fid, user_token, offer_id, feedback)
        print("The response of UserFeedbackApi->userfeedback_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserFeedbackApi->userfeedback_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | **str**| Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation. | 
 **user_token** | **str**| Session identifier as returned by the UserToken resource. | 
 **offer_id** | **str**| System-wide identifier for the campaign, not intended for end-user display. | 
 **feedback** | **int**| User response to the offer. 0- Dislike offer. 1- Like offer. | 

### Return type

[**UserFeedbackResponse**](UserFeedbackResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This resource returns the user rating of the specified offer. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

