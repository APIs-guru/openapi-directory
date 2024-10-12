# ShortcodeMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incoming_api_message_id** | **float** | The unique API message id assigned to this incoming message. | [optional] 
**message_text** | **str** | The text of the incoming SMS message. | [optional] 
**mobile_number** | **str** | The mobile number that sent the SMS message, displayed using the international E164 (without the plus) format | [optional] 
**receive_time** | **str** | The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm. | [optional] 

## Example

```python
from openapi_client.models.shortcode_message import ShortcodeMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ShortcodeMessage from a JSON string
shortcode_message_instance = ShortcodeMessage.from_json(json)
# print the JSON string representation of the object
print(ShortcodeMessage.to_json())

# convert the object into a dict
shortcode_message_dict = shortcode_message_instance.to_dict()
# create an instance of ShortcodeMessage from a dict
shortcode_message_from_dict = ShortcodeMessage.from_dict(shortcode_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


