# LabelFieldModification

A modification to a label's field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_id** | **str** | The ID of the field to be modified. | [optional] 
**kind** | **str** | This is always &#x60;drive#labelFieldModification&#x60;. | [optional] [default to 'drive#labelFieldModification']
**set_date_values** | **List[date]** | Replaces the value of a dateString Field with these new values. The string must be in the RFC 3339 full-date format: YYYY-MM-DD. | [optional] 
**set_integer_values** | **List[str]** | Replaces the value of an &#x60;integer&#x60; field with these new values. | [optional] 
**set_selection_values** | **List[str]** | Replaces a &#x60;selection&#x60; field with these new values. | [optional] 
**set_text_values** | **List[str]** | Sets the value of a &#x60;text&#x60; field. | [optional] 
**set_user_values** | **List[str]** | Replaces a &#x60;user&#x60; field with these new values. The values must be valid email addresses. | [optional] 
**unset_values** | **bool** | Unsets the values for this field. | [optional] 

## Example

```python
from openapi_client.models.label_field_modification import LabelFieldModification

# TODO update the JSON string below
json = "{}"
# create an instance of LabelFieldModification from a JSON string
label_field_modification_instance = LabelFieldModification.from_json(json)
# print the JSON string representation of the object
print(LabelFieldModification.to_json())

# convert the object into a dict
label_field_modification_dict = label_field_modification_instance.to_dict()
# create an instance of LabelFieldModification from a dict
label_field_modification_from_dict = LabelFieldModification.from_dict(label_field_modification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


