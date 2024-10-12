# TextInput

Identifies which input file and track should be used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Required. The &#x60;Input.key&#x60; that identifies the input file. | [optional] 
**track** | **int** | Required. The zero-based index of the track in the input file. | [optional] 

## Example

```python
from openapi_client.models.text_input import TextInput

# TODO update the JSON string below
json = "{}"
# create an instance of TextInput from a JSON string
text_input_instance = TextInput.from_json(json)
# print the JSON string representation of the object
print(TextInput.to_json())

# convert the object into a dict
text_input_dict = text_input_instance.to_dict()
# create an instance of TextInput from a dict
text_input_from_dict = TextInput.from_dict(text_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


