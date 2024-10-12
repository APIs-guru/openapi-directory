# DdosProtectionPlan

A DDoS protection plan in a resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**properties** | [**DdosProtectionPlanPropertiesFormat**](DdosProtectionPlanPropertiesFormat.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ddos_protection_plan import DdosProtectionPlan

# TODO update the JSON string below
json = "{}"
# create an instance of DdosProtectionPlan from a JSON string
ddos_protection_plan_instance = DdosProtectionPlan.from_json(json)
# print the JSON string representation of the object
print(DdosProtectionPlan.to_json())

# convert the object into a dict
ddos_protection_plan_dict = ddos_protection_plan_instance.to_dict()
# create an instance of DdosProtectionPlan from a dict
ddos_protection_plan_from_dict = DdosProtectionPlan.from_dict(ddos_protection_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


