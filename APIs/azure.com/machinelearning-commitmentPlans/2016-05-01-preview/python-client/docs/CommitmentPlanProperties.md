# CommitmentPlanProperties

Properties of an Azure ML commitment plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charge_for_overage** | **bool** | Indicates whether usage beyond the commitment plan&#39;s included quantities will be charged. | [optional] [readonly] 
**charge_for_plan** | **bool** | Indicates whether the commitment plan will incur a charge. | [optional] [readonly] 
**creation_date** | **datetime** | The date at which this commitment plan was created, in ISO 8601 format. | [optional] [readonly] 
**included_quantities** | [**Dict[str, PlanQuantity]**](PlanQuantity.md) | The included resource quantities this plan gives you. | [optional] [readonly] 
**max_association_limit** | **int** | The maximum number of commitment associations that can be children of this commitment plan. | [optional] [readonly] 
**max_capacity_limit** | **int** | The maximum scale-out capacity for this commitment plan. | [optional] [readonly] 
**min_capacity_limit** | **int** | The minimum scale-out capacity for this commitment plan. | [optional] [readonly] 
**plan_meter** | **str** | The Azure meter which will be used to charge for this commitment plan. | [optional] [readonly] 
**refill_frequency_in_days** | **int** | The frequency at which this commitment plan&#39;s included quantities are refilled. | [optional] [readonly] 
**suspend_plan_on_overage** | **bool** | Indicates whether this commitment plan will be moved into a suspended state if usage goes beyond the commitment plan&#39;s included quantities. | [optional] [readonly] 

## Example

```python
from openapi_client.models.commitment_plan_properties import CommitmentPlanProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentPlanProperties from a JSON string
commitment_plan_properties_instance = CommitmentPlanProperties.from_json(json)
# print the JSON string representation of the object
print(CommitmentPlanProperties.to_json())

# convert the object into a dict
commitment_plan_properties_dict = commitment_plan_properties_instance.to_dict()
# create an instance of CommitmentPlanProperties from a dict
commitment_plan_properties_from_dict = CommitmentPlanProperties.from_dict(commitment_plan_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


