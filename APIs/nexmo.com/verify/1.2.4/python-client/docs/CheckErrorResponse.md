# CheckErrorResponse

Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_text** | **str** | If the &#x60;status&#x60; is non-zero, this explains the error encountered. | [optional] 
**request_id** | **str** | The &#x60;request_id&#x60; that you received in the response to the Verify request and used in the Verify check request. | [optional] 
**status** | **str** | Code | Text | Description -- | -- | -- 0 | Success | The request was successfully accepted by Vonage. 1 | Throttled | You are trying to send more than the maximum of 30 requests per second. 2 | Your request is incomplete and missing the mandatory parameter &#x60;$parameter&#x60; | The stated parameter is missing. 3 | Invalid value for parameter &#x60;$parameter&#x60; | Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request. 4 | Invalid credentials were provided | The supplied API key or secret in the request is either invalid or disabled. 5 | Internal Error | An error occurred processing this request in the Cloud Communications Platform. 6 | The Vonage platform was unable to process this message for the following reason: &#x60;$reason&#x60; | The request could not be routed. 16 | The code inserted does not match the expected value | 17 | The wrong code was provided too many times | You can run Verify check on a specific &#x60;request_id&#x60; up to three times unless a new verification code is generated. If you check a request more than three times, it is set to FAILED and you cannot check it again.  | [optional] 

## Example

```python
from openapi_client.models.check_error_response import CheckErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckErrorResponse from a JSON string
check_error_response_instance = CheckErrorResponse.from_json(json)
# print the JSON string representation of the object
print(CheckErrorResponse.to_json())

# convert the object into a dict
check_error_response_dict = check_error_response_instance.to_dict()
# create an instance of CheckErrorResponse from a dict
check_error_response_from_dict = CheckErrorResponse.from_dict(check_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


