# ConsolidationStrategy

How the individual activities are consolidated. If a set of activities is related they can be consolidated into one combined activity, such as one actor performing the same action on multiple targets, or multiple actors performing the same action on a single target. The strategy defines the rules for which activities are related.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legacy** | **object** | A strategy that consolidates activities using the grouping rules from the legacy V1 Activity API. Similar actions occurring within a window of time can be grouped across multiple targets (such as moving a set of files at once) or multiple actors (such as several users editing the same item). Grouping rules for this strategy are specific to each type of action. | [optional] 
**var_none** | **object** | A strategy that does no consolidation of individual activities. | [optional] 

## Example

```python
from openapi_client.models.consolidation_strategy import ConsolidationStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of ConsolidationStrategy from a JSON string
consolidation_strategy_instance = ConsolidationStrategy.from_json(json)
# print the JSON string representation of the object
print(ConsolidationStrategy.to_json())

# convert the object into a dict
consolidation_strategy_dict = consolidation_strategy_instance.to_dict()
# create an instance of ConsolidationStrategy from a dict
consolidation_strategy_from_dict = ConsolidationStrategy.from_dict(consolidation_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


