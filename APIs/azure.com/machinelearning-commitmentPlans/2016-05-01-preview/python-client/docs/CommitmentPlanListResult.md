# CommitmentPlanListResult

A page of commitment plan resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A URI to retrieve the next page of results. | [optional] 
**value** | [**List[CommitmentPlan]**](CommitmentPlan.md) | The set of results for this page. | [optional] 

## Example

```python
from openapi_client.models.commitment_plan_list_result import CommitmentPlanListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentPlanListResult from a JSON string
commitment_plan_list_result_instance = CommitmentPlanListResult.from_json(json)
# print the JSON string representation of the object
print(CommitmentPlanListResult.to_json())

# convert the object into a dict
commitment_plan_list_result_dict = commitment_plan_list_result_instance.to_dict()
# create an instance of CommitmentPlanListResult from a dict
commitment_plan_list_result_from_dict = CommitmentPlanListResult.from_dict(commitment_plan_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


