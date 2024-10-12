# VariableProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**values** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.variable_properties import VariableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VariableProperties from a JSON string
variable_properties_instance = VariableProperties.from_json(json)
# print the JSON string representation of the object
print(VariableProperties.to_json())

# convert the object into a dict
variable_properties_dict = variable_properties_instance.to_dict()
# create an instance of VariableProperties from a dict
variable_properties_from_dict = VariableProperties.from_dict(variable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


