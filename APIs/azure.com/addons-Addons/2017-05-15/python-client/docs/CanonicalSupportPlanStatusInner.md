# CanonicalSupportPlanStatusInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the support plan is enabled for this subscription. | [optional] 
**support_plan_type** | **str** | Support plan type. | [optional] 
**will_emit_one_time_charge_if_re_enabled** | **bool** | This indicates that when this support plan is cancelled and then enabled that AddonsRP will emit a one-time charge. | [optional] 
**will_emit_one_time_charge_when_enabled** | **bool** | This indicates that when this support plan is enabled if AddonsRP will emit a one-time charge. | [optional] 

## Example

```python
from openapi_client.models.canonical_support_plan_status_inner import CanonicalSupportPlanStatusInner

# TODO update the JSON string below
json = "{}"
# create an instance of CanonicalSupportPlanStatusInner from a JSON string
canonical_support_plan_status_inner_instance = CanonicalSupportPlanStatusInner.from_json(json)
# print the JSON string representation of the object
print(CanonicalSupportPlanStatusInner.to_json())

# convert the object into a dict
canonical_support_plan_status_inner_dict = canonical_support_plan_status_inner_instance.to_dict()
# create an instance of CanonicalSupportPlanStatusInner from a dict
canonical_support_plan_status_inner_from_dict = CanonicalSupportPlanStatusInner.from_dict(canonical_support_plan_status_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


