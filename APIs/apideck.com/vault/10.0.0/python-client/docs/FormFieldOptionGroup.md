# FormFieldOptionGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**options** | [**List[SimpleFormFieldOption]**](SimpleFormFieldOption.md) |  | [optional] 

## Example

```python
from openapi_client.models.form_field_option_group import FormFieldOptionGroup

# TODO update the JSON string below
json = "{}"
# create an instance of FormFieldOptionGroup from a JSON string
form_field_option_group_instance = FormFieldOptionGroup.from_json(json)
# print the JSON string representation of the object
print(FormFieldOptionGroup.to_json())

# convert the object into a dict
form_field_option_group_dict = form_field_option_group_instance.to_dict()
# create an instance of FormFieldOptionGroup from a dict
form_field_option_group_from_dict = FormFieldOptionGroup.from_dict(form_field_option_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


