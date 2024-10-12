# SetValue

The properties of a overridable value that can be passed to a task template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_secret** | **bool** | Flag to indicate whether the value represents a secret or not. | [optional] [default to False]
**name** | **str** | The name of the overridable value. | 
**value** | **str** | The overridable value. | 

## Example

```python
from openapi_client.models.set_value import SetValue

# TODO update the JSON string below
json = "{}"
# create an instance of SetValue from a JSON string
set_value_instance = SetValue.from_json(json)
# print the JSON string representation of the object
print(SetValue.to_json())

# convert the object into a dict
set_value_dict = set_value_instance.to_dict()
# create an instance of SetValue from a dict
set_value_from_dict = SetValue.from_dict(set_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


