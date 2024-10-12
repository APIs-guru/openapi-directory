# SalesTaxJurisdictions

This complex type contains a list of sales tax jurisdictions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sales_tax_jurisdictions** | [**List[SalesTaxJurisdiction]**](SalesTaxJurisdiction.md) | A list of sales tax jurisdictions. | [optional] 

## Example

```python
from openapi_client.models.sales_tax_jurisdictions import SalesTaxJurisdictions

# TODO update the JSON string below
json = "{}"
# create an instance of SalesTaxJurisdictions from a JSON string
sales_tax_jurisdictions_instance = SalesTaxJurisdictions.from_json(json)
# print the JSON string representation of the object
print(SalesTaxJurisdictions.to_json())

# convert the object into a dict
sales_tax_jurisdictions_dict = sales_tax_jurisdictions_instance.to_dict()
# create an instance of SalesTaxJurisdictions from a dict
sales_tax_jurisdictions_from_dict = SalesTaxJurisdictions.from_dict(sales_tax_jurisdictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


