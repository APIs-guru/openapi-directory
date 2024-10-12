# VerifyControl200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** | The &#x60;cmd&#x60; you sent in the request. | [optional] 
**status** | **str** | Code | Text | Description -- | -- | -- 0 | Success | The request was successfully accepted by Vonage. 1 | Throttled | You are trying to send more than the maximum of 30 requests per second. 2 | Your request is incomplete and missing the mandatory parameter &#x60;$parameter&#x60; | The stated parameter is missing. 3 | Invalid value for parameter &#x60;$parameter&#x60; | Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request. 4 | Invalid credentials were provided | The supplied API key or secret in the request is either invalid or disabled. 5 | Internal Error | An error occurred processing this request in the Cloud Communications Platform. 6 | The Vonage platform was unable to process this message for the following reason: &#x60;$reason&#x60; | The request could not be routed. 8 | The api_key you supplied is for an account that has been barred from submitting messages. | 9 | Partner quota exceeded | Your account does not have sufficient credit to process this request. 19 | For &#x60;cancel&#x60;: Either you have not waited at least 30 secs after sending a Verify request before cancelling or Verify has made too many attempts to deliver the verification code for this request and you must now wait for the process to complete. For &#x60;trigger_next_event&#x60;: All attempts to deliver the verification code for this request have completed and there are no remaining events to advance to.  | [optional] 
**error_text** | **str** | If the &#x60;status&#x60; is non-zero, this explains the error encountered. | [optional] 

## Example

```python
from openapi_client.models.verify_control200_response import VerifyControl200Response

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyControl200Response from a JSON string
verify_control200_response_instance = VerifyControl200Response.from_json(json)
# print the JSON string representation of the object
print(VerifyControl200Response.to_json())

# convert the object into a dict
verify_control200_response_dict = verify_control200_response_instance.to_dict()
# create an instance of VerifyControl200Response from a dict
verify_control200_response_from_dict = VerifyControl200Response.from_dict(verify_control200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


