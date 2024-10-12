# ProductMatchDimension

A dimension used to match products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_label** | [**CustomLabel**](CustomLabel.md) |  | [optional] 
**product_offer_id** | **str** | The ID of the product offer to match with a product with the same offer ID. | [optional] 

## Example

```python
from openapi_client.models.product_match_dimension import ProductMatchDimension

# TODO update the JSON string below
json = "{}"
# create an instance of ProductMatchDimension from a JSON string
product_match_dimension_instance = ProductMatchDimension.from_json(json)
# print the JSON string representation of the object
print(ProductMatchDimension.to_json())

# convert the object into a dict
product_match_dimension_dict = product_match_dimension_instance.to_dict()
# create an instance of ProductMatchDimension from a dict
product_match_dimension_from_dict = ProductMatchDimension.from_dict(product_match_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


