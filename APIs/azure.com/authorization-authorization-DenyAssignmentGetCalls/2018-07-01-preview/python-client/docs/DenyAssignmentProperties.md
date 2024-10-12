# DenyAssignmentProperties

Deny assignment properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deny_assignment_name** | **str** | The display name of the deny assignment. | [optional] 
**description** | **str** | The description of the deny assignment. | [optional] 
**do_not_apply_to_child_scopes** | **bool** | Determines if the deny assignment applies to child scopes. Default value is false. | [optional] 
**exclude_principals** | [**List[Principal]**](Principal.md) | Array of principals to which the deny assignment does not apply. | [optional] 
**is_system_protected** | **bool** | Specifies whether this deny assignment was created by Azure and cannot be edited or deleted. | [optional] 
**permissions** | [**List[DenyAssignmentPermission]**](DenyAssignmentPermission.md) | An array of permissions that are denied by the deny assignment. | [optional] 
**principals** | [**List[Principal]**](Principal.md) | Array of principals to which the deny assignment applies. | [optional] 
**scope** | **str** | The deny assignment scope. | [optional] 

## Example

```python
from openapi_client.models.deny_assignment_properties import DenyAssignmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DenyAssignmentProperties from a JSON string
deny_assignment_properties_instance = DenyAssignmentProperties.from_json(json)
# print the JSON string representation of the object
print(DenyAssignmentProperties.to_json())

# convert the object into a dict
deny_assignment_properties_dict = deny_assignment_properties_instance.to_dict()
# create an instance of DenyAssignmentProperties from a dict
deny_assignment_properties_from_dict = DenyAssignmentProperties.from_dict(deny_assignment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


