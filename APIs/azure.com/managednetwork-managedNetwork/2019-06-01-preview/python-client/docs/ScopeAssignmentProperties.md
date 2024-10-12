# ScopeAssignmentProperties

Properties of Managed Network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_managed_network** | **str** | The managed network ID with scope will be assigned to. | [optional] 
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the ManagedNetwork resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scope_assignment_properties import ScopeAssignmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ScopeAssignmentProperties from a JSON string
scope_assignment_properties_instance = ScopeAssignmentProperties.from_json(json)
# print the JSON string representation of the object
print(ScopeAssignmentProperties.to_json())

# convert the object into a dict
scope_assignment_properties_dict = scope_assignment_properties_instance.to_dict()
# create an instance of ScopeAssignmentProperties from a dict
scope_assignment_properties_from_dict = ScopeAssignmentProperties.from_dict(scope_assignment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


