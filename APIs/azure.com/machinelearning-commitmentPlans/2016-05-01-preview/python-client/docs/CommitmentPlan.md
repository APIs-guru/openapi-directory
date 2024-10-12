# CommitmentPlan

An Azure ML commitment plan resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | An entity tag used to enforce optimistic concurrency. | [optional] 
**properties** | [**CommitmentPlanProperties**](CommitmentPlanProperties.md) |  | [optional] 
**sku** | [**ResourceSku**](ResourceSku.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**location** | **str** | Resource location. | 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.commitment_plan import CommitmentPlan

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentPlan from a JSON string
commitment_plan_instance = CommitmentPlan.from_json(json)
# print the JSON string representation of the object
print(CommitmentPlan.to_json())

# convert the object into a dict
commitment_plan_dict = commitment_plan_instance.to_dict()
# create an instance of CommitmentPlan from a dict
commitment_plan_from_dict = CommitmentPlan.from_dict(commitment_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


