# ProductLink

Link with additional information about a product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The description of the link. | [optional] 
**uri** | **str** | The URI corresponding to the link. | [optional] 

## Example

```python
from openapi_client.models.product_link import ProductLink

# TODO update the JSON string below
json = "{}"
# create an instance of ProductLink from a JSON string
product_link_instance = ProductLink.from_json(json)
# print the JSON string representation of the object
print(ProductLink.to_json())

# convert the object into a dict
product_link_dict = product_link_instance.to_dict()
# create an instance of ProductLink from a dict
product_link_from_dict = ProductLink.from_dict(product_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


