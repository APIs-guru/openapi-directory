# CustomFieldEditFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Label given to the Custom Field | [optional] 
**type** | **str** | Type of the Custom Field | [optional] 
**values** | **List[str]** | All the possible Values of the Custom Field (for type &#39;selection&#39;) | [optional] 

## Example

```python
from openapi_client.models.custom_field_edit_fields import CustomFieldEditFields

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldEditFields from a JSON string
custom_field_edit_fields_instance = CustomFieldEditFields.from_json(json)
# print the JSON string representation of the object
print(CustomFieldEditFields.to_json())

# convert the object into a dict
custom_field_edit_fields_dict = custom_field_edit_fields_instance.to_dict()
# create an instance of CustomFieldEditFields from a dict
custom_field_edit_fields_from_dict = CustomFieldEditFields.from_dict(custom_field_edit_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


