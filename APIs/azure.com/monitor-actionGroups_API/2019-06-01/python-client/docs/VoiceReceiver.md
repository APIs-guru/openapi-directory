# VoiceReceiver

A voice receiver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | The country code of the voice receiver. | 
**name** | **str** | The name of the voice receiver. Names must be unique across all receivers within an action group. | 
**phone_number** | **str** | The phone number of the voice receiver. | 

## Example

```python
from openapi_client.models.voice_receiver import VoiceReceiver

# TODO update the JSON string below
json = "{}"
# create an instance of VoiceReceiver from a JSON string
voice_receiver_instance = VoiceReceiver.from_json(json)
# print the JSON string representation of the object
print(VoiceReceiver.to_json())

# convert the object into a dict
voice_receiver_dict = voice_receiver_instance.to_dict()
# create an instance of VoiceReceiver from a dict
voice_receiver_from_dict = VoiceReceiver.from_dict(voice_receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


