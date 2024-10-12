# ApplicationInsightsComponentPricingPlan

An Application Insights component pricing plan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PricingPlanProperties**](PricingPlanProperties.md) |  | [optional] 
**id** | **str** | Azure resource Id. | [optional] [readonly] 
**name** | **str** | Azure resource name. | [optional] [readonly] 
**type** | **str** | Azure resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_insights_component_pricing_plan import ApplicationInsightsComponentPricingPlan

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentPricingPlan from a JSON string
application_insights_component_pricing_plan_instance = ApplicationInsightsComponentPricingPlan.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentPricingPlan.to_json())

# convert the object into a dict
application_insights_component_pricing_plan_dict = application_insights_component_pricing_plan_instance.to_dict()
# create an instance of ApplicationInsightsComponentPricingPlan from a dict
application_insights_component_pricing_plan_from_dict = ApplicationInsightsComponentPricingPlan.from_dict(application_insights_component_pricing_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


