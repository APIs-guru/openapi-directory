# SpokeSummary

Summarizes information about the spokes associated with a hub. The summary includes a count of spokes according to type and according to state. If any spokes are inactive, the summary also lists the reasons they are inactive, including a count for each reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spoke_state_counts** | [**List[SpokeStateCount]**](SpokeStateCount.md) | Output only. Counts the number of spokes that are in each state and associated with a given hub. | [optional] [readonly] 
**spoke_state_reason_counts** | [**List[SpokeStateReasonCount]**](SpokeStateReasonCount.md) | Output only. Counts the number of spokes that are inactive for each possible reason and associated with a given hub. | [optional] [readonly] 
**spoke_type_counts** | [**List[SpokeTypeCount]**](SpokeTypeCount.md) | Output only. Counts the number of spokes of each type that are associated with a specific hub. | [optional] [readonly] 

## Example

```python
from openapi_client.models.spoke_summary import SpokeSummary

# TODO update the JSON string below
json = "{}"
# create an instance of SpokeSummary from a JSON string
spoke_summary_instance = SpokeSummary.from_json(json)
# print the JSON string representation of the object
print(SpokeSummary.to_json())

# convert the object into a dict
spoke_summary_dict = spoke_summary_instance.to_dict()
# create an instance of SpokeSummary from a dict
spoke_summary_from_dict = SpokeSummary.from_dict(spoke_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


