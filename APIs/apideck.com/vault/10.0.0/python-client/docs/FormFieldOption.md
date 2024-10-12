# FormFieldOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** |  | [optional] 
**value** | [**SimpleFormFieldOptionValue**](SimpleFormFieldOptionValue.md) |  | [optional] 
**id** | **str** |  | [optional] 
**options** | [**List[SimpleFormFieldOption]**](SimpleFormFieldOption.md) |  | [optional] 

## Example

```python
from openapi_client.models.form_field_option import FormFieldOption

# TODO update the JSON string below
json = "{}"
# create an instance of FormFieldOption from a JSON string
form_field_option_instance = FormFieldOption.from_json(json)
# print the JSON string representation of the object
print(FormFieldOption.to_json())

# convert the object into a dict
form_field_option_dict = form_field_option_instance.to_dict()
# create an instance of FormFieldOption from a dict
form_field_option_from_dict = FormFieldOption.from_dict(form_field_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


