# RegistrationDefinitionList

List of registration definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of registration definitions. | [optional] [readonly] 
**value** | [**List[RegistrationDefinition]**](RegistrationDefinition.md) | List of registration definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.registration_definition_list import RegistrationDefinitionList

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationDefinitionList from a JSON string
registration_definition_list_instance = RegistrationDefinitionList.from_json(json)
# print the JSON string representation of the object
print(RegistrationDefinitionList.to_json())

# convert the object into a dict
registration_definition_list_dict = registration_definition_list_instance.to_dict()
# create an instance of RegistrationDefinitionList from a dict
registration_definition_list_from_dict = RegistrationDefinitionList.from_dict(registration_definition_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


