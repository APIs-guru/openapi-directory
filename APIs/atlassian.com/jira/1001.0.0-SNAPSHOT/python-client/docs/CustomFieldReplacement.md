# CustomFieldReplacement

Details about the replacement for a deleted version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field_id** | **int** | The ID of the custom field in which to replace the version number. | [optional] 
**move_to** | **int** | The version number to use as a replacement for the deleted version. | [optional] 

## Example

```python
from openapi_client.models.custom_field_replacement import CustomFieldReplacement

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldReplacement from a JSON string
custom_field_replacement_instance = CustomFieldReplacement.from_json(json)
# print the JSON string representation of the object
print(CustomFieldReplacement.to_json())

# convert the object into a dict
custom_field_replacement_dict = custom_field_replacement_instance.to_dict()
# create an instance of CustomFieldReplacement from a dict
custom_field_replacement_from_dict = CustomFieldReplacement.from_dict(custom_field_replacement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


