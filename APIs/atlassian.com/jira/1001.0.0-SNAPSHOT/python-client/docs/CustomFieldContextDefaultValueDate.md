# CustomFieldContextDefaultValueDate

The default value for a Date custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** | The default date in ISO format. Ignored if &#x60;useCurrent&#x60; is true. | [optional] 
**type** | **str** |  | 
**use_current** | **bool** | Whether to use the current date. | [optional] [default to False]

## Example

```python
from openapi_client.models.custom_field_context_default_value_date import CustomFieldContextDefaultValueDate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueDate from a JSON string
custom_field_context_default_value_date_instance = CustomFieldContextDefaultValueDate.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueDate.to_json())

# convert the object into a dict
custom_field_context_default_value_date_dict = custom_field_context_default_value_date_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueDate from a dict
custom_field_context_default_value_date_from_dict = CustomFieldContextDefaultValueDate.from_dict(custom_field_context_default_value_date_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


