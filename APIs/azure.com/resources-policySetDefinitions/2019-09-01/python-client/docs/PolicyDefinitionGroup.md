# PolicyDefinitionGroup

The policy definition group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_metadata_id** | **str** | A resource ID of a resource that contains additional metadata about the group. | [optional] 
**category** | **str** | The group&#39;s category. | [optional] 
**description** | **str** | The group&#39;s description. | [optional] 
**display_name** | **str** | The group&#39;s display name. | [optional] 
**name** | **str** | The name of the group. | 

## Example

```python
from openapi_client.models.policy_definition_group import PolicyDefinitionGroup

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDefinitionGroup from a JSON string
policy_definition_group_instance = PolicyDefinitionGroup.from_json(json)
# print the JSON string representation of the object
print(PolicyDefinitionGroup.to_json())

# convert the object into a dict
policy_definition_group_dict = policy_definition_group_instance.to_dict()
# create an instance of PolicyDefinitionGroup from a dict
policy_definition_group_from_dict = PolicyDefinitionGroup.from_dict(policy_definition_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


