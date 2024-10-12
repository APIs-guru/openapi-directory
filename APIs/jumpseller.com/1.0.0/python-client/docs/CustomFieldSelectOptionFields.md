# CustomFieldSelectOptionFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the Custom Field Select Option | [optional] 
**value** | **str** | Value given to the Custom Field Select Option | [optional] 

## Example

```python
from openapi_client.models.custom_field_select_option_fields import CustomFieldSelectOptionFields

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldSelectOptionFields from a JSON string
custom_field_select_option_fields_instance = CustomFieldSelectOptionFields.from_json(json)
# print the JSON string representation of the object
print(CustomFieldSelectOptionFields.to_json())

# convert the object into a dict
custom_field_select_option_fields_dict = custom_field_select_option_fields_instance.to_dict()
# create an instance of CustomFieldSelectOptionFields from a dict
custom_field_select_option_fields_from_dict = CustomFieldSelectOptionFields.from_dict(custom_field_select_option_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


