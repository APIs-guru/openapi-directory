# PolicyGroupSummary

Policy definition group summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_group_name** | **str** | Policy group name. | [optional] 
**results** | [**SummaryResults**](SummaryResults.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_group_summary import PolicyGroupSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyGroupSummary from a JSON string
policy_group_summary_instance = PolicyGroupSummary.from_json(json)
# print the JSON string representation of the object
print(PolicyGroupSummary.to_json())

# convert the object into a dict
policy_group_summary_dict = policy_group_summary_instance.to_dict()
# create an instance of PolicyGroupSummary from a dict
policy_group_summary_from_dict = PolicyGroupSummary.from_dict(policy_group_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


