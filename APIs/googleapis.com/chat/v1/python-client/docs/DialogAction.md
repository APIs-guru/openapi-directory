# DialogAction

Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_status** | [**ActionStatus**](ActionStatus.md) |  | [optional] 
**dialog** | [**Dialog**](Dialog.md) |  | [optional] 

## Example

```python
from openapi_client.models.dialog_action import DialogAction

# TODO update the JSON string below
json = "{}"
# create an instance of DialogAction from a JSON string
dialog_action_instance = DialogAction.from_json(json)
# print the JSON string representation of the object
print(DialogAction.to_json())

# convert the object into a dict
dialog_action_dict = dialog_action_instance.to_dict()
# create an instance of DialogAction from a dict
dialog_action_from_dict = DialogAction.from_dict(dialog_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


