# SalesTaxJurisdiction

A unique ID for a sales tax jurisdiction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sales_tax_jurisdiction_id** | **str** | The unique ID for a sales tax jurisdiction. | [optional] 

## Example

```python
from openapi_client.models.sales_tax_jurisdiction import SalesTaxJurisdiction

# TODO update the JSON string below
json = "{}"
# create an instance of SalesTaxJurisdiction from a JSON string
sales_tax_jurisdiction_instance = SalesTaxJurisdiction.from_json(json)
# print the JSON string representation of the object
print(SalesTaxJurisdiction.to_json())

# convert the object into a dict
sales_tax_jurisdiction_dict = sales_tax_jurisdiction_instance.to_dict()
# create an instance of SalesTaxJurisdiction from a dict
sales_tax_jurisdiction_from_dict = SalesTaxJurisdiction.from_dict(sales_tax_jurisdiction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


