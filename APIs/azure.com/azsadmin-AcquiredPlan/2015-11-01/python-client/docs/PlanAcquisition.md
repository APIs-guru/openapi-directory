# PlanAcquisition

Represents the acquisition of an add-on plan for a subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquisition_id** | **str** | Acquisition identifier. | [optional] 
**acquisition_time** | **datetime** | Acquisition time. | [optional] 
**external_reference_id** | **str** | External reference identifier. | [optional] 
**id** | **str** | Identifier in the tenant subscription context. | [optional] 
**plan_id** | **str** | Plan identifier in the tenant subscription context. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 

## Example

```python
from openapi_client.models.plan_acquisition import PlanAcquisition

# TODO update the JSON string below
json = "{}"
# create an instance of PlanAcquisition from a JSON string
plan_acquisition_instance = PlanAcquisition.from_json(json)
# print the JSON string representation of the object
print(PlanAcquisition.to_json())

# convert the object into a dict
plan_acquisition_dict = plan_acquisition_instance.to_dict()
# create an instance of PlanAcquisition from a dict
plan_acquisition_from_dict = PlanAcquisition.from_dict(plan_acquisition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


