# SimpleFormFieldOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** |  | [optional] 
**value** | [**SimpleFormFieldOptionValue**](SimpleFormFieldOptionValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.simple_form_field_option import SimpleFormFieldOption

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleFormFieldOption from a JSON string
simple_form_field_option_instance = SimpleFormFieldOption.from_json(json)
# print the JSON string representation of the object
print(SimpleFormFieldOption.to_json())

# convert the object into a dict
simple_form_field_option_dict = simple_form_field_option_instance.to_dict()
# create an instance of SimpleFormFieldOption from a dict
simple_form_field_option_from_dict = SimpleFormFieldOption.from_dict(simple_form_field_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


