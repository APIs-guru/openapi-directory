# MemberAllOfMediaAudioSettings

The current audio state for the member

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**earmuffed** | **bool** | Can the member hear other participants? | [optional] 
**enabled** | **bool** | Is audio enabled? | [optional] 
**muted** | **bool** | Can the member speak to other participants? | [optional] 

## Example

```python
from openapi_client.models.member_all_of_media_audio_settings import MemberAllOfMediaAudioSettings

# TODO update the JSON string below
json = "{}"
# create an instance of MemberAllOfMediaAudioSettings from a JSON string
member_all_of_media_audio_settings_instance = MemberAllOfMediaAudioSettings.from_json(json)
# print the JSON string representation of the object
print(MemberAllOfMediaAudioSettings.to_json())

# convert the object into a dict
member_all_of_media_audio_settings_dict = member_all_of_media_audio_settings_instance.to_dict()
# create an instance of MemberAllOfMediaAudioSettings from a dict
member_all_of_media_audio_settings_from_dict = MemberAllOfMediaAudioSettings.from_dict(member_all_of_media_audio_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


