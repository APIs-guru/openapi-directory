# PlanProperties

Properties of a plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the plan. | [optional] 
**display_name** | **str** | Display name. | [optional] 
**external_reference_id** | **str** | External reference identifier. | [optional] 
**name** | **str** | Name of the plan. | [optional] 
**quota_ids** | **List[str]** | Quota identifiers under the plan. | [optional] 
**sku_ids** | **List[str]** | SKU identifiers. | [optional] 
**subscription_count** | **int** | Subscription count. | [optional] 

## Example

```python
from openapi_client.models.plan_properties import PlanProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PlanProperties from a JSON string
plan_properties_instance = PlanProperties.from_json(json)
# print the JSON string representation of the object
print(PlanProperties.to_json())

# convert the object into a dict
plan_properties_dict = plan_properties_instance.to_dict()
# create an instance of PlanProperties from a dict
plan_properties_from_dict = PlanProperties.from_dict(plan_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


