# CheckResponse

Success

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The currency code. | [optional] 
**estimated_price_messages_sent** | **str** | This field may not be present, depending on your pricing model. The value indicates the cost (in EUR) of the calls made and messages sent for the verification process. This value may be updated during and shortly after the request completes because user input events can overlap with message/call events. When this field is present, the total cost of the verification is the sum of this field and the &#x60;price&#x60; field.  | [optional] 
**event_id** | **str** | The ID of the verification event, such as an SMS or TTS call. | [optional] 
**price** | **str** | The cost incurred for this request. | [optional] 
**request_id** | **str** | The &#x60;request_id&#x60; that you received in the response to the Verify request and used in the Verify check request. | [optional] 
**status** | **str** | A value of &#x60;0&#x60; indicates that your user entered the correct code. If it is non-zero, check the &#x60;error_text&#x60;. | [optional] 

## Example

```python
from openapi_client.models.check_response import CheckResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckResponse from a JSON string
check_response_instance = CheckResponse.from_json(json)
# print the JSON string representation of the object
print(CheckResponse.to_json())

# convert the object into a dict
check_response_dict = check_response_instance.to_dict()
# create an instance of CheckResponse from a dict
check_response_from_dict = CheckResponse.from_dict(check_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


