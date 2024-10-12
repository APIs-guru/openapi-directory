# Channel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_tree** | **str** | Code of the category tree linked to the channel | 
**code** | **str** | Channel code | 
**conversion_units** | [**ChannelsAllOfEmbeddedItemsInnerAllOfConversionUnits**](ChannelsAllOfEmbeddedItemsInnerAllOfConversionUnits.md) |  | [optional] 
**currencies** | **List[str]** | Codes of activated currencies for the channel | 
**labels** | [**ChannelsAllOfEmbeddedItemsInnerAllOfLabels**](ChannelsAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**locales** | **List[str]** | Codes of activated locales for the channel | 

## Example

```python
from openapi_client.models.channel import Channel

# TODO update the JSON string below
json = "{}"
# create an instance of Channel from a JSON string
channel_instance = Channel.from_json(json)
# print the JSON string representation of the object
print(Channel.to_json())

# convert the object into a dict
channel_dict = channel_instance.to_dict()
# create an instance of Channel from a dict
channel_from_dict = Channel.from_dict(channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


