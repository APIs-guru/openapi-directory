# CustomFieldOptionCreate

Details of a custom field option to create.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Whether the option is disabled. | [optional] 
**option_id** | **str** | For cascading options, the ID of the custom field object containing the cascading option. | [optional] 
**value** | **str** | The value of the custom field option. | 

## Example

```python
from openapi_client.models.custom_field_option_create import CustomFieldOptionCreate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldOptionCreate from a JSON string
custom_field_option_create_instance = CustomFieldOptionCreate.from_json(json)
# print the JSON string representation of the object
print(CustomFieldOptionCreate.to_json())

# convert the object into a dict
custom_field_option_create_dict = custom_field_option_create_instance.to_dict()
# create an instance of CustomFieldOptionCreate from a dict
custom_field_option_create_from_dict = CustomFieldOptionCreate.from_dict(custom_field_option_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


