# CustomFieldOptionUpdate

Details of a custom field option for a context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Whether the option is disabled. | [optional] 
**id** | **str** | The ID of the custom field option. | 
**value** | **str** | The value of the custom field option. | [optional] 

## Example

```python
from openapi_client.models.custom_field_option_update import CustomFieldOptionUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldOptionUpdate from a JSON string
custom_field_option_update_instance = CustomFieldOptionUpdate.from_json(json)
# print the JSON string representation of the object
print(CustomFieldOptionUpdate.to_json())

# convert the object into a dict
custom_field_option_update_dict = custom_field_option_update_instance.to_dict()
# create an instance of CustomFieldOptionUpdate from a dict
custom_field_option_update_from_dict = CustomFieldOptionUpdate.from_dict(custom_field_option_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


