# BranchProperties

The branch build core properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | [**BuildsListBranches200ResponseInnerValueBranch**](BuildsListBranches200ResponseInnerValueBranch.md) |  | [optional] 
**enabled** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.branch_properties import BranchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BranchProperties from a JSON string
branch_properties_instance = BranchProperties.from_json(json)
# print the JSON string representation of the object
print(BranchProperties.to_json())

# convert the object into a dict
branch_properties_dict = branch_properties_instance.to_dict()
# create an instance of BranchProperties from a dict
branch_properties_from_dict = BranchProperties.from_dict(branch_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


