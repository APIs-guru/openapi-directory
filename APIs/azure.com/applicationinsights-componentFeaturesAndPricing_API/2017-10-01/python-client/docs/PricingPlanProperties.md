# PricingPlanProperties

An Application Insights component daily data volume cap

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cap** | **float** | Daily data volume cap in GB. | [optional] 
**max_history_cap** | **float** | Maximum daily data volume cap that the user can set for this component. | [optional] [readonly] 
**plan_type** | **str** | Pricing Plan Type Name. | [optional] 
**reset_hour** | **int** | Daily data volume cap UTC reset hour. | [optional] [readonly] 
**stop_send_notification_when_hit_cap** | **bool** | Do not send a notification email when the daily data volume cap is met. | [optional] 
**stop_send_notification_when_hit_threshold** | **bool** | Reserved, not used for now. | [optional] 
**warning_threshold** | **int** | Reserved, not used for now. | [optional] 

## Example

```python
from openapi_client.models.pricing_plan_properties import PricingPlanProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PricingPlanProperties from a JSON string
pricing_plan_properties_instance = PricingPlanProperties.from_json(json)
# print the JSON string representation of the object
print(PricingPlanProperties.to_json())

# convert the object into a dict
pricing_plan_properties_dict = pricing_plan_properties_instance.to_dict()
# create an instance of PricingPlanProperties from a dict
pricing_plan_properties_from_dict = PricingPlanProperties.from_dict(pricing_plan_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


