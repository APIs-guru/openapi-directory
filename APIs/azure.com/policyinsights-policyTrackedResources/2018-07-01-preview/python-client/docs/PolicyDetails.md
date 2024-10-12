# PolicyDetails

The policy details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_assignment_display_name** | **str** | The display name of the policy assignment. | [optional] [readonly] 
**policy_assignment_id** | **str** | The ID of the policy assignment. | [optional] [readonly] 
**policy_assignment_scope** | **str** | The scope of the policy assignment. | [optional] [readonly] 
**policy_definition_id** | **str** | The ID of the policy definition. | [optional] [readonly] 
**policy_definition_reference_id** | **str** | The policy definition reference ID within the policy set definition. | [optional] [readonly] 
**policy_set_definition_id** | **str** | The ID of the policy set definition. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_details import PolicyDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDetails from a JSON string
policy_details_instance = PolicyDetails.from_json(json)
# print the JSON string representation of the object
print(PolicyDetails.to_json())

# convert the object into a dict
policy_details_dict = policy_details_instance.to_dict()
# create an instance of PolicyDetails from a dict
policy_details_from_dict = PolicyDetails.from_dict(policy_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


