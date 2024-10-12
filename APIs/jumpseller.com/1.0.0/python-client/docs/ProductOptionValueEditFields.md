# ProductOptionValueEditFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the product option value | [optional] 
**position** | **int** | Position of the product option value | [optional] 

## Example

```python
from openapi_client.models.product_option_value_edit_fields import ProductOptionValueEditFields

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOptionValueEditFields from a JSON string
product_option_value_edit_fields_instance = ProductOptionValueEditFields.from_json(json)
# print the JSON string representation of the object
print(ProductOptionValueEditFields.to_json())

# convert the object into a dict
product_option_value_edit_fields_dict = product_option_value_edit_fields_instance.to_dict()
# create an instance of ProductOptionValueEditFields from a dict
product_option_value_edit_fields_from_dict = ProductOptionValueEditFields.from_dict(product_option_value_edit_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


