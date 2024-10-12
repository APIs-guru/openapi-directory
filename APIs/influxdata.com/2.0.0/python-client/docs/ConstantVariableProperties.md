# ConstantVariableProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**values** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.constant_variable_properties import ConstantVariableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConstantVariableProperties from a JSON string
constant_variable_properties_instance = ConstantVariableProperties.from_json(json)
# print the JSON string representation of the object
print(ConstantVariableProperties.to_json())

# convert the object into a dict
constant_variable_properties_dict = constant_variable_properties_instance.to_dict()
# create an instance of ConstantVariableProperties from a dict
constant_variable_properties_from_dict = ConstantVariableProperties.from_dict(constant_variable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


