# Product


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | If set to &#39;false&#39;, the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses | [optional] 
**licensee_auto_create** | **bool** | If set to &#39;true&#39;, non-existing Licensees will be created at first validation attempt. | [optional] 
**name** | **str** | Product name. Together with the version identifies the Product for the end customer | [optional] 
**number** | **str** | Unique number that identifies the Product. Vendor can assign this number when creating a Product or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product. | [optional] 
**version** | **str** | Product version. Convenience parameter, additional to the Product name. | [optional] 

## Example

```python
from openapi_client.models.product import Product

# TODO update the JSON string below
json = "{}"
# create an instance of Product from a JSON string
product_instance = Product.from_json(json)
# print the JSON string representation of the object
print(Product.to_json())

# convert the object into a dict
product_dict = product_instance.to_dict()
# create an instance of Product from a dict
product_from_dict = Product.from_dict(product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


