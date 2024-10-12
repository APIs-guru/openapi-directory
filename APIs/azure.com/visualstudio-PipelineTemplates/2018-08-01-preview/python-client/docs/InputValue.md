# InputValue

Value for an input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_value** | **str** | Display text to show for the value of an input. | [optional] 
**value** | **str** | Value to store for an input. | [optional] 

## Example

```python
from openapi_client.models.input_value import InputValue

# TODO update the JSON string below
json = "{}"
# create an instance of InputValue from a JSON string
input_value_instance = InputValue.from_json(json)
# print the JSON string representation of the object
print(InputValue.to_json())

# convert the object into a dict
input_value_dict = input_value_instance.to_dict()
# create an instance of InputValue from a dict
input_value_from_dict = InputValue.from_dict(input_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


