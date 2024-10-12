# InAppVoiceFields

In App Voice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_id** | **str** | Search only for In App Voive calls attached to this particular Conversation. This should include the \&quot;CON-\&quot; prefix. | [optional] 
**product** | [**ProductInAppVoice**](ProductInAppVoice.md) |  | [optional] 

## Example

```python
from openapi_client.models.in_app_voice_fields import InAppVoiceFields

# TODO update the JSON string below
json = "{}"
# create an instance of InAppVoiceFields from a JSON string
in_app_voice_fields_instance = InAppVoiceFields.from_json(json)
# print the JSON string representation of the object
print(InAppVoiceFields.to_json())

# convert the object into a dict
in_app_voice_fields_dict = in_app_voice_fields_instance.to_dict()
# create an instance of InAppVoiceFields from a dict
in_app_voice_fields_from_dict = InAppVoiceFields.from_dict(in_app_voice_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


