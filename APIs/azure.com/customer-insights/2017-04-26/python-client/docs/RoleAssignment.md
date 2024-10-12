# RoleAssignment

The Role Assignment definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment_name** | **str** | The name of the metadata object. | [optional] [readonly] 
**conflation_policies** | [**ResourceSetDescription**](ResourceSetDescription.md) |  | [optional] 
**connectors** | [**ResourceSetDescription**](ResourceSetDescription.md) |  | [optional] 
**description** | **Dict[str, str]** | Localized description for the metadata. | [optional] 
**display_name** | **Dict[str, str]** | Localized display names for the metadata. | [optional] 
**interactions** | [**ResourceSetDescription**](ResourceSetDescription.md) |  | [optional] 
**kpis** | [**ResourceSetDescription**](ResourceSetDescription.md) |  | [optional] 
**links** | [**ResourceSetDescription**](ResourceSetDescription.md) |  | [optional] 
**principals** | [**List[AssignmentPrincipal]**](AssignmentPrincipal.md) | The principals being assigned to. | 
**profiles** | [**ResourceSetDescription**](ResourceSetDescription.md) |  | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**relationship_links** | [**ResourceSetDescription**](ResourceSetDescription.md) |  | [optional] 
**relationships** | [**ResourceSetDescription**](ResourceSetDescription.md) |  | [optional] 
**role** | **str** | Type of roles. | 
**role_assignments** | [**ResourceSetDescription**](ResourceSetDescription.md) |  | [optional] 
**sas_policies** | [**ResourceSetDescription**](ResourceSetDescription.md) |  | [optional] 
**segments** | [**ResourceSetDescription**](ResourceSetDescription.md) |  | [optional] 
**tenant_id** | **str** | The hub name. | [optional] [readonly] 
**views** | [**ResourceSetDescription**](ResourceSetDescription.md) |  | [optional] 
**widget_types** | [**ResourceSetDescription**](ResourceSetDescription.md) |  | [optional] 

## Example

```python
from openapi_client.models.role_assignment import RoleAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignment from a JSON string
role_assignment_instance = RoleAssignment.from_json(json)
# print the JSON string representation of the object
print(RoleAssignment.to_json())

# convert the object into a dict
role_assignment_dict = role_assignment_instance.to_dict()
# create an instance of RoleAssignment from a dict
role_assignment_from_dict = RoleAssignment.from_dict(role_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


