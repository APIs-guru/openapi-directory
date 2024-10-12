# ProductModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | If set to &#39;false&#39;, the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module. | [optional] 
**licensing_info** | **str** | Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation. | [optional] 
**name** | **str** | Product Module name that is visible to the end customers in NetLicensing Shop. | [optional] 
**number** | **str** | Unique number (across all Product of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product. | [optional] 

## Example

```python
from openapi_client.models.product_module import ProductModule

# TODO update the JSON string below
json = "{}"
# create an instance of ProductModule from a JSON string
product_module_instance = ProductModule.from_json(json)
# print the JSON string representation of the object
print(ProductModule.to_json())

# convert the object into a dict
product_module_dict = product_module_instance.to_dict()
# create an instance of ProductModule from a dict
product_module_from_dict = ProductModule.from_dict(product_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


