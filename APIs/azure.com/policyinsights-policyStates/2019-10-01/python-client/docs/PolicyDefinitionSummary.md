# PolicyDefinitionSummary

Policy definition summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effect** | **str** | Policy effect, i.e. policy definition action. | [optional] 
**policy_definition_group_names** | **List[str]** | Policy definition group names. | [optional] 
**policy_definition_id** | **str** | Policy definition ID. | [optional] 
**policy_definition_reference_id** | **str** | Policy definition reference ID. | [optional] 
**results** | [**SummaryResults**](SummaryResults.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_definition_summary import PolicyDefinitionSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDefinitionSummary from a JSON string
policy_definition_summary_instance = PolicyDefinitionSummary.from_json(json)
# print the JSON string representation of the object
print(PolicyDefinitionSummary.to_json())

# convert the object into a dict
policy_definition_summary_dict = policy_definition_summary_instance.to_dict()
# create an instance of PolicyDefinitionSummary from a dict
policy_definition_summary_from_dict = PolicyDefinitionSummary.from_dict(policy_definition_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


