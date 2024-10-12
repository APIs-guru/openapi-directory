# VoiceCallFields

Voice Call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | [**Direction**](Direction.md) |  | [optional] 
**var_from** | **str** | Request from this number. | [optional] 
**network** | **str** | Network used to send the request. | [optional] 
**product** | [**ProductVoice**](ProductVoice.md) |  | [optional] 
**status** | [**VoiceStatus**](VoiceStatus.md) |  | [optional] 
**to** | **str** | Request to this number. | [optional] 

## Example

```python
from openapi_client.models.voice_call_fields import VoiceCallFields

# TODO update the JSON string below
json = "{}"
# create an instance of VoiceCallFields from a JSON string
voice_call_fields_instance = VoiceCallFields.from_json(json)
# print the JSON string representation of the object
print(VoiceCallFields.to_json())

# convert the object into a dict
voice_call_fields_dict = voice_call_fields_instance.to_dict()
# create an instance of VoiceCallFields from a dict
voice_call_fields_from_dict = VoiceCallFields.from_dict(voice_call_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


