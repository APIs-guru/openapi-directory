# ChannelSectionTargeting

ChannelSection targeting setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries** | **List[str]** | The country the channel section is targeting. | [optional] 
**languages** | **List[str]** | The language the channel section is targeting. | [optional] 
**regions** | **List[str]** | The region the channel section is targeting. | [optional] 

## Example

```python
from openapi_client.models.channel_section_targeting import ChannelSectionTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelSectionTargeting from a JSON string
channel_section_targeting_instance = ChannelSectionTargeting.from_json(json)
# print the JSON string representation of the object
print(ChannelSectionTargeting.to_json())

# convert the object into a dict
channel_section_targeting_dict = channel_section_targeting_instance.to_dict()
# create an instance of ChannelSectionTargeting from a dict
channel_section_targeting_from_dict = ChannelSectionTargeting.from_dict(channel_section_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


