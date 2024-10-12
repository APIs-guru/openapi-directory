# ProductTaxAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Defines tax class name where tax has to be added | 
**product_id** | **str** | Defines products specified by product id | [optional] 
**tax_rates** | [**List[ProductTaxAddTaxRatesInner]**](ProductTaxAddTaxRatesInner.md) | Defines tax rates of specified tax classes | 

## Example

```python
from openapi_client.models.product_tax_add import ProductTaxAdd

# TODO update the JSON string below
json = "{}"
# create an instance of ProductTaxAdd from a JSON string
product_tax_add_instance = ProductTaxAdd.from_json(json)
# print the JSON string representation of the object
print(ProductTaxAdd.to_json())

# convert the object into a dict
product_tax_add_dict = product_tax_add_instance.to_dict()
# create an instance of ProductTaxAdd from a dict
product_tax_add_from_dict = ProductTaxAdd.from_dict(product_tax_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


