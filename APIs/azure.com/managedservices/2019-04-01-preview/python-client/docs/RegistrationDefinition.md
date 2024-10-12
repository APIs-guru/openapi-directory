# RegistrationDefinition

Registration definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Fully qualified path of the registration definition. | [optional] [readonly] 
**name** | **str** | Name of the registration definition. | [optional] [readonly] 
**plan** | [**Plan**](Plan.md) |  | [optional] 
**properties** | [**RegistrationDefinitionProperties**](RegistrationDefinitionProperties.md) |  | [optional] 
**type** | **str** | Type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.registration_definition import RegistrationDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationDefinition from a JSON string
registration_definition_instance = RegistrationDefinition.from_json(json)
# print the JSON string representation of the object
print(RegistrationDefinition.to_json())

# convert the object into a dict
registration_definition_dict = registration_definition_instance.to_dict()
# create an instance of RegistrationDefinition from a dict
registration_definition_from_dict = RegistrationDefinition.from_dict(registration_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


