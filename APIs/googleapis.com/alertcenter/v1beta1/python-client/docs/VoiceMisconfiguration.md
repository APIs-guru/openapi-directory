# VoiceMisconfiguration

An alert triggered when Google Voice configuration becomes invalid, generally due to an external entity being modified or deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_name** | **str** | Name of the entity whose configuration is now invalid. | [optional] 
**entity_type** | **str** | Type of the entity whose configuration is now invalid. | [optional] 
**fix_uri** | **str** | Link that the admin can follow to fix the issue. | [optional] 
**members_misconfiguration** | [**TransferMisconfiguration**](TransferMisconfiguration.md) |  | [optional] 
**transfer_misconfiguration** | [**TransferMisconfiguration**](TransferMisconfiguration.md) |  | [optional] 
**voicemail_misconfiguration** | [**VoicemailMisconfiguration**](VoicemailMisconfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.voice_misconfiguration import VoiceMisconfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of VoiceMisconfiguration from a JSON string
voice_misconfiguration_instance = VoiceMisconfiguration.from_json(json)
# print the JSON string representation of the object
print(VoiceMisconfiguration.to_json())

# convert the object into a dict
voice_misconfiguration_dict = voice_misconfiguration_instance.to_dict()
# create an instance of VoiceMisconfiguration from a dict
voice_misconfiguration_from_dict = VoiceMisconfiguration.from_dict(voice_misconfiguration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


