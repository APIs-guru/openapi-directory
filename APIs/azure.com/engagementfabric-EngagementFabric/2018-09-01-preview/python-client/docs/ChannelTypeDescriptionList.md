# ChannelTypeDescriptionList

List of the EngagementFabric channel descriptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ChannelTypeDescription]**](ChannelTypeDescription.md) | Channel descriptions | [optional] 

## Example

```python
from openapi_client.models.channel_type_description_list import ChannelTypeDescriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelTypeDescriptionList from a JSON string
channel_type_description_list_instance = ChannelTypeDescriptionList.from_json(json)
# print the JSON string representation of the object
print(ChannelTypeDescriptionList.to_json())

# convert the object into a dict
channel_type_description_list_dict = channel_type_description_list_instance.to_dict()
# create an instance of ChannelTypeDescriptionList from a dict
channel_type_description_list_from_dict = ChannelTypeDescriptionList.from_dict(channel_type_description_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


