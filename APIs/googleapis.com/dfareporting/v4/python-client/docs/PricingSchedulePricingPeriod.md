# PricingSchedulePricingPeriod

Pricing Period

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **date** |  | [optional] 
**pricing_comment** | **str** | Comments for this pricing period. | [optional] 
**rate_or_cost_nanos** | **str** | Rate or cost of this pricing period in nanos (i.e., multiplied by 1000000000). Acceptable values are 0 to 1000000000000000000, inclusive. | [optional] 
**start_date** | **date** |  | [optional] 
**units** | **str** | Units of this pricing period. Acceptable values are 0 to 10000000000, inclusive. | [optional] 

## Example

```python
from openapi_client.models.pricing_schedule_pricing_period import PricingSchedulePricingPeriod

# TODO update the JSON string below
json = "{}"
# create an instance of PricingSchedulePricingPeriod from a JSON string
pricing_schedule_pricing_period_instance = PricingSchedulePricingPeriod.from_json(json)
# print the JSON string representation of the object
print(PricingSchedulePricingPeriod.to_json())

# convert the object into a dict
pricing_schedule_pricing_period_dict = pricing_schedule_pricing_period_instance.to_dict()
# create an instance of PricingSchedulePricingPeriod from a dict
pricing_schedule_pricing_period_from_dict = PricingSchedulePricingPeriod.from_dict(pricing_schedule_pricing_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


