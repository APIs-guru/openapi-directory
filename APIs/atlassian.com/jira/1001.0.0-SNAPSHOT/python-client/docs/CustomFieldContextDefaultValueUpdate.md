# CustomFieldContextDefaultValueUpdate

Default values to update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_values** | [**List[CustomFieldContextDefaultValue]**](CustomFieldContextDefaultValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_field_context_default_value_update import CustomFieldContextDefaultValueUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueUpdate from a JSON string
custom_field_context_default_value_update_instance = CustomFieldContextDefaultValueUpdate.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueUpdate.to_json())

# convert the object into a dict
custom_field_context_default_value_update_dict = custom_field_context_default_value_update_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueUpdate from a dict
custom_field_context_default_value_update_from_dict = CustomFieldContextDefaultValueUpdate.from_dict(custom_field_context_default_value_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


