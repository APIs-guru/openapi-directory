# RegistrationAssignmentProperties

Properties of a registration assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Current state of the registration assignment. | [optional] [readonly] 
**registration_definition** | [**RegistrationAssignmentPropertiesRegistrationDefinition**](RegistrationAssignmentPropertiesRegistrationDefinition.md) |  | [optional] 
**registration_definition_id** | **str** | Fully qualified path of the registration definition. | 

## Example

```python
from openapi_client.models.registration_assignment_properties import RegistrationAssignmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationAssignmentProperties from a JSON string
registration_assignment_properties_instance = RegistrationAssignmentProperties.from_json(json)
# print the JSON string representation of the object
print(RegistrationAssignmentProperties.to_json())

# convert the object into a dict
registration_assignment_properties_dict = registration_assignment_properties_instance.to_dict()
# create an instance of RegistrationAssignmentProperties from a dict
registration_assignment_properties_from_dict = RegistrationAssignmentProperties.from_dict(registration_assignment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


