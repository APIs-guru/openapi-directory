# PricingSummary

This type contains a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustment** | [**Amount**](Amount.md) |  | [optional] 
**delivery_cost** | [**Amount**](Amount.md) |  | [optional] 
**delivery_discount** | [**Amount**](Amount.md) |  | [optional] 
**fee** | [**Amount**](Amount.md) |  | [optional] 
**price_discount** | [**Amount**](Amount.md) |  | [optional] 
**price_subtotal** | [**Amount**](Amount.md) |  | [optional] 
**tax** | [**Amount**](Amount.md) |  | [optional] 
**total** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.pricing_summary import PricingSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PricingSummary from a JSON string
pricing_summary_instance = PricingSummary.from_json(json)
# print the JSON string representation of the object
print(PricingSummary.to_json())

# convert the object into a dict
pricing_summary_dict = pricing_summary_instance.to_dict()
# create an instance of PricingSummary from a dict
pricing_summary_from_dict = PricingSummary.from_dict(pricing_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


