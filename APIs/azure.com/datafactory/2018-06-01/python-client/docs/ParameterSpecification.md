# ParameterSpecification

Definition of a single parameter for an entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **object** | Default value of parameter. | [optional] 
**type** | **str** | Parameter type. | 

## Example

```python
from openapi_client.models.parameter_specification import ParameterSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterSpecification from a JSON string
parameter_specification_instance = ParameterSpecification.from_json(json)
# print the JSON string representation of the object
print(ParameterSpecification.to_json())

# convert the object into a dict
parameter_specification_dict = parameter_specification_instance.to_dict()
# create an instance of ParameterSpecification from a dict
parameter_specification_from_dict = ParameterSpecification.from_dict(parameter_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


