# FormAction

A form action describes the behavior when the form is submitted. For example, you can invoke Apps Script to handle the form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_method_name** | **str** | The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. You can use the same method name for several elements that trigger a common behavior. | [optional] 
**parameters** | [**List[ActionParameter]**](ActionParameter.md) | List of action parameters. | [optional] 

## Example

```python
from openapi_client.models.form_action import FormAction

# TODO update the JSON string below
json = "{}"
# create an instance of FormAction from a JSON string
form_action_instance = FormAction.from_json(json)
# print the JSON string representation of the object
print(FormAction.to_json())

# convert the object into a dict
form_action_dict = form_action_instance.to_dict()
# create an instance of FormAction from a dict
form_action_from_dict = FormAction.from_dict(form_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


