# PropertyEntityBaseParameters

Property Entity Base Parameters set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **bool** | Determines whether the value is a secret and should be encrypted or not. Default value is false. | [optional] 
**tags** | **List[str]** | Optional tags that when provided can be used to filter the property list. | [optional] 

## Example

```python
from openapi_client.models.property_entity_base_parameters import PropertyEntityBaseParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyEntityBaseParameters from a JSON string
property_entity_base_parameters_instance = PropertyEntityBaseParameters.from_json(json)
# print the JSON string representation of the object
print(PropertyEntityBaseParameters.to_json())

# convert the object into a dict
property_entity_base_parameters_dict = property_entity_base_parameters_instance.to_dict()
# create an instance of PropertyEntityBaseParameters from a dict
property_entity_base_parameters_from_dict = PropertyEntityBaseParameters.from_dict(property_entity_base_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


