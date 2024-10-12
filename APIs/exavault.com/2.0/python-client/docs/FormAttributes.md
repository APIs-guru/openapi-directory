# FormAttributes

Attributes of the form including it's included fields and css styles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**css_styles** | **str** | CSS Styles of the form. | [optional] 
**elements** | [**List[FormField]**](FormField.md) | Array of form fields defined for the form | [optional] 
**form_description** | **str** | Text that appears at the top of a receive form | [optional] 
**submit_button_text** | **str** | Text that appears on the submit button for the form | [optional] 
**success_message** | **str** | Message displayed to submitter after files are uploaded | [optional] 

## Example

```python
from openapi_client.models.form_attributes import FormAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of FormAttributes from a JSON string
form_attributes_instance = FormAttributes.from_json(json)
# print the JSON string representation of the object
print(FormAttributes.to_json())

# convert the object into a dict
form_attributes_dict = form_attributes_instance.to_dict()
# create an instance of FormAttributes from a dict
form_attributes_from_dict = FormAttributes.from_dict(form_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


