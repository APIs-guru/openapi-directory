# PropertyUpdateParameters

Property Contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters. | [optional] 
**value** | **str** | Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace. | [optional] 
**secret** | **bool** | Determines whether the value is a secret and should be encrypted or not. Default value is false. | [optional] 
**tags** | **List[str]** | Optional tags that when provided can be used to filter the property list. | [optional] 

## Example

```python
from openapi_client.models.property_update_parameters import PropertyUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyUpdateParameters from a JSON string
property_update_parameters_instance = PropertyUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(PropertyUpdateParameters.to_json())

# convert the object into a dict
property_update_parameters_dict = property_update_parameters_instance.to_dict()
# create an instance of PropertyUpdateParameters from a dict
property_update_parameters_from_dict = PropertyUpdateParameters.from_dict(property_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


