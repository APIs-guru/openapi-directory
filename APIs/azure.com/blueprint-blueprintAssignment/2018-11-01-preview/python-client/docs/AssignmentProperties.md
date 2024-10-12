# AssignmentProperties

Detailed properties for a blueprint assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blueprint_id** | **str** | ID of the published version of a blueprint definition. | [optional] 
**locks** | [**AssignmentLockSettings**](AssignmentLockSettings.md) |  | [optional] 
**parameters** | [**Dict[str, ParameterValue]**](ParameterValue.md) | A dictionary for parameters and their corresponding values. | 
**provisioning_state** | **str** | State of the blueprint assignment. | [optional] [readonly] 
**resource_groups** | [**Dict[str, ResourceGroupValue]**](ResourceGroupValue.md) | A dictionary which maps resource group placeholders to the resource groups which will be created. | 
**status** | [**AssignmentStatus**](AssignmentStatus.md) |  | [optional] 
**description** | **str** | Multi-line explain this resource. | [optional] 
**display_name** | **str** | One-liner string explain this resource. | [optional] 

## Example

```python
from openapi_client.models.assignment_properties import AssignmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentProperties from a JSON string
assignment_properties_instance = AssignmentProperties.from_json(json)
# print the JSON string representation of the object
print(AssignmentProperties.to_json())

# convert the object into a dict
assignment_properties_dict = assignment_properties_instance.to_dict()
# create an instance of AssignmentProperties from a dict
assignment_properties_from_dict = AssignmentProperties.from_dict(assignment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


