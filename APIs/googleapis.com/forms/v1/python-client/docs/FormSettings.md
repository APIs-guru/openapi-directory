# FormSettings

A form's settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quiz_settings** | [**QuizSettings**](QuizSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.form_settings import FormSettings

# TODO update the JSON string below
json = "{}"
# create an instance of FormSettings from a JSON string
form_settings_instance = FormSettings.from_json(json)
# print the JSON string representation of the object
print(FormSettings.to_json())

# convert the object into a dict
form_settings_dict = form_settings_instance.to_dict()
# create an instance of FormSettings from a dict
form_settings_from_dict = FormSettings.from_dict(form_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


