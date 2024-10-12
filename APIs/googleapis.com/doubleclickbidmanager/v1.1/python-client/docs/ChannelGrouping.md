# ChannelGrouping

A channel grouping defines a set of rules that can be used to categorize events in a path report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fallback_name** | **str** | The name to apply to an event that does not match any of the rules in the channel grouping. | [optional] 
**name** | **str** | Channel Grouping name. | [optional] 
**rules** | [**List[Rule]**](Rule.md) | Rules within Channel Grouping. There is a limit of 100 rules that can be set per channel grouping. | [optional] 

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


