# CustomVariable

Custom variable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **str** | The index of the custom variable. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#customVariable\&quot;. | [optional] 
**value** | **str** | The value of the custom variable. The length of string must not exceed 50 characters. | [optional] 

## Example

```python
from openapi_client.models.custom_variable import CustomVariable

# TODO update the JSON string below
json = "{}"
# create an instance of CustomVariable from a JSON string
custom_variable_instance = CustomVariable.from_json(json)
# print the JSON string representation of the object
print(CustomVariable.to_json())

# convert the object into a dict
custom_variable_dict = custom_variable_instance.to_dict()
# create an instance of CustomVariable from a dict
custom_variable_from_dict = CustomVariable.from_dict(custom_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


