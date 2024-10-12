# PricingSchedule

Pricing Schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cap_cost_option** | **str** | Placement cap cost option. | [optional] 
**disregard_overdelivery** | **bool** | Whether cap costs are ignored by ad serving. | [optional] 
**end_date** | **date** |  | [optional] 
**flighted** | **bool** | Whether this placement is flighted. If true, pricing periods will be computed automatically. | [optional] 
**floodlight_activity_id** | **str** | Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to PRICING_TYPE_CPA. | [optional] 
**pricing_periods** | [**List[PricingSchedulePricingPeriod]**](PricingSchedulePricingPeriod.md) | Pricing periods for this placement. | [optional] 
**pricing_type** | **str** | Placement pricing type. This field is required on insertion. | [optional] 
**start_date** | **date** |  | [optional] 
**testing_start_date** | **date** |  | [optional] 

## Example

```python
from openapi_client.models.pricing_schedule import PricingSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of PricingSchedule from a JSON string
pricing_schedule_instance = PricingSchedule.from_json(json)
# print the JSON string representation of the object
print(PricingSchedule.to_json())

# convert the object into a dict
pricing_schedule_dict = pricing_schedule_instance.to_dict()
# create an instance of PricingSchedule from a dict
pricing_schedule_from_dict = PricingSchedule.from_dict(pricing_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


