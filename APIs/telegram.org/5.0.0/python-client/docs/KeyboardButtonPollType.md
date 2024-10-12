# KeyboardButtonPollType

This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | *Optional*. If *quiz* is passed, the user will be allowed to create only polls in the quiz mode. If *regular* is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type. | [optional] 

## Example

```python
from openapi_client.models.keyboard_button_poll_type import KeyboardButtonPollType

# TODO update the JSON string below
json = "{}"
# create an instance of KeyboardButtonPollType from a JSON string
keyboard_button_poll_type_instance = KeyboardButtonPollType.from_json(json)
# print the JSON string representation of the object
print(KeyboardButtonPollType.to_json())

# convert the object into a dict
keyboard_button_poll_type_dict = keyboard_button_poll_type_instance.to_dict()
# create an instance of KeyboardButtonPollType from a dict
keyboard_button_poll_type_from_dict = KeyboardButtonPollType.from_dict(keyboard_button_poll_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


