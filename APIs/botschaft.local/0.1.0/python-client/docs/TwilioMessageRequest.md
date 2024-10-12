# TwilioMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base64_message** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**to** | **str** |  | 

## Example

```python
from openapi_client.models.twilio_message_request import TwilioMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TwilioMessageRequest from a JSON string
twilio_message_request_instance = TwilioMessageRequest.from_json(json)
# print the JSON string representation of the object
print(TwilioMessageRequest.to_json())

# convert the object into a dict
twilio_message_request_dict = twilio_message_request_instance.to_dict()
# create an instance of TwilioMessageRequest from a dict
twilio_message_request_from_dict = TwilioMessageRequest.from_dict(twilio_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


