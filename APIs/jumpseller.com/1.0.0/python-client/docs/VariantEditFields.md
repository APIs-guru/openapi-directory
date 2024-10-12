# VariantEditFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_id** | **int** | Unique identifier of the product image to associate with this variant | [optional] 
**options** | [**List[ProductOptionVariantEdit]**](ProductOptionVariantEdit.md) |  | [optional] 
**price** | **float** | Price of the product | [optional] 
**sku** | **str** | Stock Keeping Unit of the Product&#39;s Variant | [optional] 
**stock** | **int** | Quantity in stock for the Product&#39;s Variant | [optional] [default to 100]
**stock_unlimited** | **bool** | True if the Product&#39;s Variant has unlimited stock | [optional] 

## Example

```python
from openapi_client.models.variant_edit_fields import VariantEditFields

# TODO update the JSON string below
json = "{}"
# create an instance of VariantEditFields from a JSON string
variant_edit_fields_instance = VariantEditFields.from_json(json)
# print the JSON string representation of the object
print(VariantEditFields.to_json())

# convert the object into a dict
variant_edit_fields_dict = variant_edit_fields_instance.to_dict()
# create an instance of VariantEditFields from a dict
variant_edit_fields_from_dict = VariantEditFields.from_dict(variant_edit_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


