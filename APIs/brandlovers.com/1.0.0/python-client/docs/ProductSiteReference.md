# ProductSiteReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku_seller_id** | **str** | Seller unique product Id | 
**url** | **str** | Link do produto no site | 

## Example

```python
from openapi_client.models.product_site_reference import ProductSiteReference

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSiteReference from a JSON string
product_site_reference_instance = ProductSiteReference.from_json(json)
# print the JSON string representation of the object
print(ProductSiteReference.to_json())

# convert the object into a dict
product_site_reference_dict = product_site_reference_instance.to_dict()
# create an instance of ProductSiteReference from a dict
product_site_reference_from_dict = ProductSiteReference.from_dict(product_site_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


