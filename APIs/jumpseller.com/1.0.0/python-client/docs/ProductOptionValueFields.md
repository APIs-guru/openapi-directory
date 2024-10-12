# ProductOptionValueFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the product option value | [optional] 
**name** | **str** | Name of the product option value | [optional] 
**position** | **int** | Position of the product option value | [optional] 
**product_option** | [**ProductOption**](ProductOption.md) |  | [optional] 
**variants** | [**List[Variant]**](Variant.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_option_value_fields import ProductOptionValueFields

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOptionValueFields from a JSON string
product_option_value_fields_instance = ProductOptionValueFields.from_json(json)
# print the JSON string representation of the object
print(ProductOptionValueFields.to_json())

# convert the object into a dict
product_option_value_fields_dict = product_option_value_fields_instance.to_dict()
# create an instance of ProductOptionValueFields from a dict
product_option_value_fields_from_dict = ProductOptionValueFields.from_dict(product_option_value_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


