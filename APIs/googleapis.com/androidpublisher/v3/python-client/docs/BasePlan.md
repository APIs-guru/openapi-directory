# BasePlan

A single base plan for a subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_renewing_base_plan_type** | [**AutoRenewingBasePlanType**](AutoRenewingBasePlanType.md) |  | [optional] 
**base_plan_id** | **str** | Required. Immutable. The unique identifier of this base plan. Must be unique within the subscription, and conform with RFC-1034. That is, this ID can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 63 characters. | [optional] 
**offer_tags** | [**List[OfferTag]**](OfferTag.md) | List of up to 20 custom tags specified for this base plan, and returned to the app through the billing library. Subscription offers for this base plan will also receive these offer tags in the billing library. | [optional] 
**other_regions_config** | [**OtherRegionsBasePlanConfig**](OtherRegionsBasePlanConfig.md) |  | [optional] 
**prepaid_base_plan_type** | [**PrepaidBasePlanType**](PrepaidBasePlanType.md) |  | [optional] 
**regional_configs** | [**List[RegionalBasePlanConfig]**](RegionalBasePlanConfig.md) | Region-specific information for this base plan. | [optional] 
**state** | **str** | Output only. The state of the base plan, i.e. whether it&#39;s active. Draft and inactive base plans can be activated or deleted. Active base plans can be made inactive. Inactive base plans can be canceled. This field cannot be changed by updating the resource. Use the dedicated endpoints instead. | [optional] [readonly] 

## Example

```python
from openapi_client.models.base_plan import BasePlan

# TODO update the JSON string below
json = "{}"
# create an instance of BasePlan from a JSON string
base_plan_instance = BasePlan.from_json(json)
# print the JSON string representation of the object
print(BasePlan.to_json())

# convert the object into a dict
base_plan_dict = base_plan_instance.to_dict()
# create an instance of BasePlan from a dict
base_plan_from_dict = BasePlan.from_dict(base_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


