# RegistrationAssignmentPropertiesRegistrationDefinition

Registration definition inside registration assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Fully qualified path of the registration definition. | [optional] [readonly] 
**name** | **str** | Name of the registration definition. | [optional] [readonly] 
**plan** | [**Plan**](Plan.md) |  | [optional] 
**properties** | [**RegistrationAssignmentPropertiesRegistrationDefinitionProperties**](RegistrationAssignmentPropertiesRegistrationDefinitionProperties.md) |  | [optional] 
**type** | **str** | Type of the resource (Microsoft.ManagedServices/registrationDefinitions). | [optional] [readonly] 

## Example

```python
from openapi_client.models.registration_assignment_properties_registration_definition import RegistrationAssignmentPropertiesRegistrationDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationAssignmentPropertiesRegistrationDefinition from a JSON string
registration_assignment_properties_registration_definition_instance = RegistrationAssignmentPropertiesRegistrationDefinition.from_json(json)
# print the JSON string representation of the object
print(RegistrationAssignmentPropertiesRegistrationDefinition.to_json())

# convert the object into a dict
registration_assignment_properties_registration_definition_dict = registration_assignment_properties_registration_definition_instance.to_dict()
# create an instance of RegistrationAssignmentPropertiesRegistrationDefinition from a dict
registration_assignment_properties_registration_definition_from_dict = RegistrationAssignmentPropertiesRegistrationDefinition.from_dict(registration_assignment_properties_registration_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


