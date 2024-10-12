# ChannelTypeDescription

EngagementFabric channel description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_description** | **str** | Text description for the channel | [optional] 
**channel_functions** | **List[str]** | All the available functions for the channel | [optional] 
**channel_type** | **str** | Channel type | [optional] 

## Example

```python
from openapi_client.models.channel_type_description import ChannelTypeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelTypeDescription from a JSON string
channel_type_description_instance = ChannelTypeDescription.from_json(json)
# print the JSON string representation of the object
print(ChannelTypeDescription.to_json())

# convert the object into a dict
channel_type_description_dict = channel_type_description_instance.to_dict()
# create an instance of ChannelTypeDescription from a dict
channel_type_description_from_dict = ChannelTypeDescription.from_dict(channel_type_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


