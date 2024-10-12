# RegistrationAssignmentPropertiesRegistrationDefinitionProperties

Properties of registration definition inside registration assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorizations** | [**List[Authorization]**](Authorization.md) | Authorization tuple containing principal id of the user/security group or service principal and id of the build-in role. | [optional] 
**description** | **str** | Description of the registration definition. | [optional] 
**managed_by_tenant_id** | **str** | Id of the managedBy tenant. | [optional] 
**managed_by_tenant_name** | **str** | Name of the managedBy tenant. | [optional] 
**managee_tenant_id** | **str** | Id of the home tenant. | [optional] 
**managee_tenant_name** | **str** | Name of the home tenant. | [optional] 
**provisioning_state** | **str** | Current state of the registration definition. | [optional] 
**registration_definition_name** | **str** | Name of the registration definition. | [optional] 

## Example

```python
from openapi_client.models.registration_assignment_properties_registration_definition_properties import RegistrationAssignmentPropertiesRegistrationDefinitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationAssignmentPropertiesRegistrationDefinitionProperties from a JSON string
registration_assignment_properties_registration_definition_properties_instance = RegistrationAssignmentPropertiesRegistrationDefinitionProperties.from_json(json)
# print the JSON string representation of the object
print(RegistrationAssignmentPropertiesRegistrationDefinitionProperties.to_json())

# convert the object into a dict
registration_assignment_properties_registration_definition_properties_dict = registration_assignment_properties_registration_definition_properties_instance.to_dict()
# create an instance of RegistrationAssignmentPropertiesRegistrationDefinitionProperties from a dict
registration_assignment_properties_registration_definition_properties_from_dict = RegistrationAssignmentPropertiesRegistrationDefinitionProperties.from_dict(registration_assignment_properties_registration_definition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


