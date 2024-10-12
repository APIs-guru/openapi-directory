# PlanPatchable

Plan for the managed application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The plan name. | [optional] 
**product** | **str** | The product code. | [optional] 
**promotion_code** | **str** | The promotion code. | [optional] 
**publisher** | **str** | The publisher ID. | [optional] 
**version** | **str** | The plan&#39;s version. | [optional] 

## Example

```python
from openapi_client.models.plan_patchable import PlanPatchable

# TODO update the JSON string below
json = "{}"
# create an instance of PlanPatchable from a JSON string
plan_patchable_instance = PlanPatchable.from_json(json)
# print the JSON string representation of the object
print(PlanPatchable.to_json())

# convert the object into a dict
plan_patchable_dict = plan_patchable_instance.to_dict()
# create an instance of PlanPatchable from a dict
plan_patchable_from_dict = PlanPatchable.from_dict(plan_patchable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


