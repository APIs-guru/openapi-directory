# VOICECALL

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
from openapi_client.models.voicecall import VOICECALL

# TODO update the JSON string below
json = "{}"
# create an instance of VOICECALL from a JSON string
voicecall_instance = VOICECALL.from_json(json)
# print the JSON string representation of the object
print(VOICECALL.to_json())

# convert the object into a dict
voicecall_dict = voicecall_instance.to_dict()
# create an instance of VOICECALL from a dict
voicecall_from_dict = VOICECALL.from_dict(voicecall_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


