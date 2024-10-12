# IncomingOptoutMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incoming_api_message_id** | **float** | The unique API message id assigned to this incoming opt-out message.  | [optional] 
**message_text** | **str** | The text of the opt-out SMS message.  | [optional] 
**mobile_number** | **str** | The mobile number that sent the opt-out SMS message, displayed using the international E164 (without the plus) format  | [optional] 
**receive_time** | **str** | The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm.  | [optional] 

## Example

```python
from openapi_client.models.incoming_optout_message import IncomingOptoutMessage

# TODO update the JSON string below
json = "{}"
# create an instance of IncomingOptoutMessage from a JSON string
incoming_optout_message_instance = IncomingOptoutMessage.from_json(json)
# print the JSON string representation of the object
print(IncomingOptoutMessage.to_json())

# convert the object into a dict
incoming_optout_message_dict = incoming_optout_message_instance.to_dict()
# create an instance of IncomingOptoutMessage from a dict
incoming_optout_message_from_dict = IncomingOptoutMessage.from_dict(incoming_optout_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


