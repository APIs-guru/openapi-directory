# Button

A button. Can be a text button or an image button.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_button** | [**ImageButton**](ImageButton.md) |  | [optional] 
**text_button** | [**TextButton**](TextButton.md) |  | [optional] 

## Example

```python
from openapi_client.models.button import Button

# TODO update the JSON string below
json = "{}"
# create an instance of Button from a JSON string
button_instance = Button.from_json(json)
# print the JSON string representation of the object
print(Button.to_json())

# convert the object into a dict
button_dict = button_instance.to_dict()
# create an instance of Button from a dict
button_from_dict = Button.from_dict(button_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


