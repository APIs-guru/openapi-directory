# RegistrationDefinitionProperties

Properties of a registration definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorizations** | [**List[Authorization]**](Authorization.md) | Authorization tuple containing principal id of the user/security group or service principal and id of the build-in role. | 
**description** | **str** | Description of the registration definition. | [optional] 
**managed_by_tenant_id** | **str** | Id of the managedBy tenant. | 
**managed_by_tenant_name** | **str** | Name of the managedBy tenant. | [optional] [readonly] 
**provisioning_state** | **str** | Current state of the registration definition. | [optional] [readonly] 
**registration_definition_name** | **str** | Name of the registration definition. | [optional] 

## Example

```python
from openapi_client.models.registration_definition_properties import RegistrationDefinitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationDefinitionProperties from a JSON string
registration_definition_properties_instance = RegistrationDefinitionProperties.from_json(json)
# print the JSON string representation of the object
print(RegistrationDefinitionProperties.to_json())

# convert the object into a dict
registration_definition_properties_dict = registration_definition_properties_instance.to_dict()
# create an instance of RegistrationDefinitionProperties from a dict
registration_definition_properties_from_dict = RegistrationDefinitionProperties.from_dict(registration_definition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


