# AddProductCustomFieldFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the ProductCustomField (custom_field_id) | [optional] 
**value** | **str** | The value for the ProductCustomField | [optional] 

## Example

```python
from openapi_client.models.add_product_custom_field_fields import AddProductCustomFieldFields

# TODO update the JSON string below
json = "{}"
# create an instance of AddProductCustomFieldFields from a JSON string
add_product_custom_field_fields_instance = AddProductCustomFieldFields.from_json(json)
# print the JSON string representation of the object
print(AddProductCustomFieldFields.to_json())

# convert the object into a dict
add_product_custom_field_fields_dict = add_product_custom_field_fields_instance.to_dict()
# create an instance of AddProductCustomFieldFields from a dict
add_product_custom_field_fields_from_dict = AddProductCustomFieldFields.from_dict(add_product_custom_field_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


