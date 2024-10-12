# TextButton

A button with text and `onclick` action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on_click** | [**OnClick**](OnClick.md) |  | [optional] 
**text** | **str** | The text of the button. | [optional] 

## Example

```python
from openapi_client.models.text_button import TextButton

# TODO update the JSON string below
json = "{}"
# create an instance of TextButton from a JSON string
text_button_instance = TextButton.from_json(json)
# print the JSON string representation of the object
print(TextButton.to_json())

# convert the object into a dict
text_button_dict = text_button_instance.to_dict()
# create an instance of TextButton from a dict
text_button_from_dict = TextButton.from_dict(text_button_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


