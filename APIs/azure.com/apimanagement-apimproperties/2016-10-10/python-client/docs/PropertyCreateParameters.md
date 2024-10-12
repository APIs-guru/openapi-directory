# PropertyCreateParameters

Parameters supplied to the Create Property operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters. | 
**secret** | **bool** | Determines whether the value is a secret and should be encrypted or not. Default value is false. | [optional] 
**tags** | **List[str]** | Optional tags that when provided can be used to filter the property list. | [optional] 
**value** | **str** | Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace. | 

## Example

```python
from openapi_client.models.property_create_parameters import PropertyCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyCreateParameters from a JSON string
property_create_parameters_instance = PropertyCreateParameters.from_json(json)
# print the JSON string representation of the object
print(PropertyCreateParameters.to_json())

# convert the object into a dict
property_create_parameters_dict = property_create_parameters_instance.to_dict()
# create an instance of PropertyCreateParameters from a dict
property_create_parameters_from_dict = PropertyCreateParameters.from_dict(property_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


