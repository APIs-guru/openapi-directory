# ChannelGroupingRule

Represents a DfaReporting channel grouping rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disjunctive_match_statements** | [**List[DisjunctiveMatchStatement]**](DisjunctiveMatchStatement.md) | The disjunctive match statements contained within this rule. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#channelGroupingRule. | [optional] 
**name** | **str** | Rule name. | [optional] 

## Example

```python
from openapi_client.models.channel_grouping_rule import ChannelGroupingRule

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelGroupingRule from a JSON string
channel_grouping_rule_instance = ChannelGroupingRule.from_json(json)
# print the JSON string representation of the object
print(ChannelGroupingRule.to_json())

# convert the object into a dict
channel_grouping_rule_dict = channel_grouping_rule_instance.to_dict()
# create an instance of ChannelGroupingRule from a dict
channel_grouping_rule_from_dict = ChannelGroupingRule.from_dict(channel_grouping_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


