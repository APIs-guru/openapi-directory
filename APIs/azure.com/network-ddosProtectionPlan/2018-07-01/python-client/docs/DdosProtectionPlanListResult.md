# DdosProtectionPlanListResult

A list of DDoS protection plans.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[DdosProtectionPlan]**](DdosProtectionPlan.md) | A list of DDoS protection plans. | [optional] 

## Example

```python
from openapi_client.models.ddos_protection_plan_list_result import DdosProtectionPlanListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DdosProtectionPlanListResult from a JSON string
ddos_protection_plan_list_result_instance = DdosProtectionPlanListResult.from_json(json)
# print the JSON string representation of the object
print(DdosProtectionPlanListResult.to_json())

# convert the object into a dict
ddos_protection_plan_list_result_dict = ddos_protection_plan_list_result_instance.to_dict()
# create an instance of DdosProtectionPlanListResult from a dict
ddos_protection_plan_list_result_from_dict = DdosProtectionPlanListResult.from_dict(ddos_protection_plan_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


