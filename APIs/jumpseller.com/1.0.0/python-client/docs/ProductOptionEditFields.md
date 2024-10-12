# ProductOptionEditFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the product option | [optional] 
**option_type** | **str** | Type of the product option | [optional] 
**position** | **int** | Position of the product option | [optional] 

## Example

```python
from openapi_client.models.product_option_edit_fields import ProductOptionEditFields

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOptionEditFields from a JSON string
product_option_edit_fields_instance = ProductOptionEditFields.from_json(json)
# print the JSON string representation of the object
print(ProductOptionEditFields.to_json())

# convert the object into a dict
product_option_edit_fields_dict = product_option_edit_fields_instance.to_dict()
# create an instance of ProductOptionEditFields from a dict
product_option_edit_fields_from_dict = ProductOptionEditFields.from_dict(product_option_edit_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


