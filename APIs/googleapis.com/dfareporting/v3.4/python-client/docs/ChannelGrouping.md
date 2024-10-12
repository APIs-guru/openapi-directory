# ChannelGrouping

Represents a DfaReporting channel grouping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fallback_name** | **str** | ChannelGrouping fallback name. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#channelGrouping. | [optional] 
**name** | **str** | ChannelGrouping name. | [optional] 
**rules** | [**List[ChannelGroupingRule]**](ChannelGroupingRule.md) | The rules contained within this channel grouping. | [optional] 

## Example

```python
from openapi_client.models.channel_grouping import ChannelGrouping

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelGrouping from a JSON string
channel_grouping_instance = ChannelGrouping.from_json(json)
# print the JSON string representation of the object
print(ChannelGrouping.to_json())

# convert the object into a dict
channel_grouping_dict = channel_grouping_instance.to_dict()
# create an instance of ChannelGrouping from a dict
channel_grouping_from_dict = ChannelGrouping.from_dict(channel_grouping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


