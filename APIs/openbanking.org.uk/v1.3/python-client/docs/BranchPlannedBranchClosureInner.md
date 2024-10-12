# BranchPlannedBranchClosureInner

Planned branch closure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **str** | Date when a branch is due to re-open following temporary closure | [optional] 
**start_date** | **str** | Date when a branch is due to close temporarily or permanently | [optional] 

## Example

```python
from openapi_client.models.branch_planned_branch_closure_inner import BranchPlannedBranchClosureInner

# TODO update the JSON string below
json = "{}"
# create an instance of BranchPlannedBranchClosureInner from a JSON string
branch_planned_branch_closure_inner_instance = BranchPlannedBranchClosureInner.from_json(json)
# print the JSON string representation of the object
print(BranchPlannedBranchClosureInner.to_json())

# convert the object into a dict
branch_planned_branch_closure_inner_dict = branch_planned_branch_closure_inner_instance.to_dict()
# create an instance of BranchPlannedBranchClosureInner from a dict
branch_planned_branch_closure_inner_from_dict = BranchPlannedBranchClosureInner.from_dict(branch_planned_branch_closure_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


