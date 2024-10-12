# FormField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_custom_values** | **bool** | Only applicable to select fields. Allow the user to add a custom value though the option select if the desired value is not in the option select list. | [optional] [default to False]
**custom_field** | **bool** |  | [optional] 
**description** | **str** | The description of the form field | [optional] 
**disabled** | **bool** | Indicates if the form field is displayed in a “read-only” mode. | [optional] 
**hidden** | **bool** | Indicates if the form field is not displayed but the value that is being stored on the connection. | [optional] 
**id** | **str** | The unique identifier of the form field. | [optional] 
**label** | **str** | The label of the field | [optional] 
**options** | [**List[FormFieldOption]**](FormFieldOption.md) |  | [optional] 
**placeholder** | **str** | The placeholder for the form field | [optional] 
**prefix** | **str** | Prefix to display in front of the form field. | [optional] 
**required** | **bool** | Indicates if the form field is required, which means it must be filled in before the form can be submitted | [optional] 
**sensitive** | **bool** | Indicates if the form field contains sensitive data, which will display the value as a masked input. | [optional] 
**suffix** | **str** | Suffix to display next to the form field. | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.form_field import FormField

# TODO update the JSON string below
json = "{}"
# create an instance of FormField from a JSON string
form_field_instance = FormField.from_json(json)
# print the JSON string representation of the object
print(FormField.to_json())

# convert the object into a dict
form_field_dict = form_field_instance.to_dict()
# create an instance of FormField from a dict
form_field_from_dict = FormField.from_dict(form_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


