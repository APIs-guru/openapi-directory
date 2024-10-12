# ProductLinksInner

Link to a product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Displayed name of product. | [optional] 
**uri** | **str** | URI to product. | [optional] 

## Example

```python
from openapi_client.models.product_links_inner import ProductLinksInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductLinksInner from a JSON string
product_links_inner_instance = ProductLinksInner.from_json(json)
# print the JSON string representation of the object
print(ProductLinksInner.to_json())

# convert the object into a dict
product_links_inner_dict = product_links_inner_instance.to_dict()
# create an instance of ProductLinksInner from a dict
product_links_inner_from_dict = ProductLinksInner.from_dict(product_links_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


