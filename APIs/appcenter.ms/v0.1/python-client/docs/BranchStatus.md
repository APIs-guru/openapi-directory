# BranchStatus

The branch build status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configured** | **bool** |  | 
**last_build** | [**BuildsListBranches200ResponseInnerLastBuild**](BuildsListBranches200ResponseInnerLastBuild.md) |  | [optional] 

## Example

```python
from openapi_client.models.branch_status import BranchStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BranchStatus from a JSON string
branch_status_instance = BranchStatus.from_json(json)
# print the JSON string representation of the object
print(BranchStatus.to_json())

# convert the object into a dict
branch_status_dict = branch_status_instance.to_dict()
# create an instance of BranchStatus from a dict
branch_status_from_dict = BranchStatus.from_dict(branch_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


