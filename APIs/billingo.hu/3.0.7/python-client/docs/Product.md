# Product


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | 
**general_ledger_number** | **str** |  | [optional] 
**general_ledger_taxcode** | **str** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**net_unit_price** | **float** |  | [optional] 
**unit** | **str** |  | 
**vat** | [**Vat**](Vat.md) |  | 

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


