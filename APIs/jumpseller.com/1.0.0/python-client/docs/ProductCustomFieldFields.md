# ProductCustomFieldFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field_id** | **int** | Unique identifier of the ProductCustomField | [optional] 
**id** | **int** | Unique identifier of the ProductCustomField value | [optional] 
**label** | **str** | The label for the ProductCustomField | [optional] 
**type** | **str** | The type of the ProductCustomField | [optional] 
**value** | **str** | The value for the ProductCustomField | [optional] 
**value_id** | **str** | The value id for the ProductCustomField | [optional] 

## Example

```python
from openapi_client.models.product_custom_field_fields import ProductCustomFieldFields

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCustomFieldFields from a JSON string
product_custom_field_fields_instance = ProductCustomFieldFields.from_json(json)
# print the JSON string representation of the object
print(ProductCustomFieldFields.to_json())

# convert the object into a dict
product_custom_field_fields_dict = product_custom_field_fields_instance.to_dict()
# create an instance of ProductCustomFieldFields from a dict
product_custom_field_fields_from_dict = ProductCustomFieldFields.from_dict(product_custom_field_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


