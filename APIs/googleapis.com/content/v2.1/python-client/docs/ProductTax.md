# ProductTax


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The country within which the item is taxed, specified as a CLDR territory code. | [optional] 
**location_id** | **str** | The numeric ID of a location that the tax rate applies to as defined in the Google Ads API. | [optional] 
**postal_code** | **str** | The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*. | [optional] 
**rate** | **float** | The percentage of tax rate that applies to the item price. | [optional] 
**region** | **str** | The geographic region to which the tax rate applies. | [optional] 
**tax_ship** | **bool** | Should be set to true if tax is charged on shipping. | [optional] 

## Example

```python
from openapi_client.models.product_tax import ProductTax

# TODO update the JSON string below
json = "{}"
# create an instance of ProductTax from a JSON string
product_tax_instance = ProductTax.from_json(json)
# print the JSON string representation of the object
print(ProductTax.to_json())

# convert the object into a dict
product_tax_dict = product_tax_instance.to_dict()
# create an instance of ProductTax from a dict
product_tax_from_dict = ProductTax.from_dict(product_tax_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


