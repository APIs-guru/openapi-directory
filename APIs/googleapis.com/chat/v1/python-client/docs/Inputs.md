# Inputs

Types of data that users can [input on cards or dialogs](https://developers.google.com/chat/ui/read-form-data). The input type depends on the type of values that the widget accepts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_input** | [**DateInput**](DateInput.md) |  | [optional] 
**date_time_input** | [**DateTimeInput**](DateTimeInput.md) |  | [optional] 
**string_inputs** | [**StringInputs**](StringInputs.md) |  | [optional] 
**time_input** | [**TimeInput**](TimeInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.inputs import Inputs

# TODO update the JSON string below
json = "{}"
# create an instance of Inputs from a JSON string
inputs_instance = Inputs.from_json(json)
# print the JSON string representation of the object
print(Inputs.to_json())

# convert the object into a dict
inputs_dict = inputs_instance.to_dict()
# create an instance of Inputs from a dict
inputs_from_dict = Inputs.from_dict(inputs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


