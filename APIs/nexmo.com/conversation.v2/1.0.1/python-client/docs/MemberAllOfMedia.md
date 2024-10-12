# MemberAllOfMedia

The current media state for the member

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_settings** | [**MemberAllOfMediaAudioSettings**](MemberAllOfMediaAudioSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.member_all_of_media import MemberAllOfMedia

# TODO update the JSON string below
json = "{}"
# create an instance of MemberAllOfMedia from a JSON string
member_all_of_media_instance = MemberAllOfMedia.from_json(json)
# print the JSON string representation of the object
print(MemberAllOfMedia.to_json())

# convert the object into a dict
member_all_of_media_dict = member_all_of_media_instance.to_dict()
# create an instance of MemberAllOfMedia from a dict
member_all_of_media_from_dict = MemberAllOfMedia.from_dict(member_all_of_media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


