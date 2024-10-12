# CustomFieldContextDefaultValueReadOnly

The default text for a read only custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | The default text. The maximum length is 255 characters. | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_read_only import CustomFieldContextDefaultValueReadOnly

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueReadOnly from a JSON string
custom_field_context_default_value_read_only_instance = CustomFieldContextDefaultValueReadOnly.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueReadOnly.to_json())

# convert the object into a dict
custom_field_context_default_value_read_only_dict = custom_field_context_default_value_read_only_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueReadOnly from a dict
custom_field_context_default_value_read_only_from_dict = CustomFieldContextDefaultValueReadOnly.from_dict(custom_field_context_default_value_read_only_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


