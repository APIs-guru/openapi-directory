# RequestErrorResponse

Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_text** | **str** | If &#x60;status&#x60; is non-zero, this explains the error encountered. | [optional] 
**network** | **str** | The Network ID of the blocking network, if relevant to the error. | [optional] 
**request_id** | **str** | The unique ID of the Verify request. This may be blank in an error situation. | [optional] 
**status** | **str** | Code | Text | Description -- | -- | -- 0 | Success | The request was successfully accepted by Vonage. 1 | Throttled | You are trying to send more than the maximum of 30 requests per second. 2 | Your request is incomplete and missing the mandatory parameter &#x60;$parameter&#x60; | The stated parameter is missing. 3 | Invalid value for parameter &#x60;$parameter&#x60; | Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request. 4 | Invalid credentials were provided | The supplied API key or secret in the request is either invalid or disabled. 5 | Internal Error | An error occurred processing this request in the Cloud Communications Platform. 6 | The Vonage platform was unable to process this message for the following reason: &#x60;$reason&#x60; | The request could not be routed. 7 | The number you are trying to verify is blacklisted for verification. | Returns a &#x60;network&#x60; property but no &#x60;request_id&#x60; will be present in the response. 8 | The api_key you supplied is for an account that has been barred from submitting messages. | 9 | Partner quota exceeded | Your account does not have sufficient credit to process this request. 10 | Concurrent verifications to the same number are not allowed. | This will return a &#x60;request_id&#x60;. 15 | The destination number is not in a supported network | The request has been rejected. Find out more about this error in the [Knowledge Base](https://help.nexmo.com/hc/en-us/articles/360018406532-Verify-On-demand-Service-to-High-Risk-Countries) 20 | This account does not support the parameter: pin_code. | Only certain accounts have the ability to set the &#x60;pin_code&#x60;. Please contact your account manager for more information. 29 | Non-Permitted Destination | Your Vonage account is still in demo mode. While in demo mode you must add target numbers to the approved list for your account. Add funds to your account to remove this limitation.  | [optional] 

## Example

```python
from openapi_client.models.request_error_response import RequestErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RequestErrorResponse from a JSON string
request_error_response_instance = RequestErrorResponse.from_json(json)
# print the JSON string representation of the object
print(RequestErrorResponse.to_json())

# convert the object into a dict
request_error_response_dict = request_error_response_instance.to_dict()
# create an instance of RequestErrorResponse from a dict
request_error_response_from_dict = RequestErrorResponse.from_dict(request_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


