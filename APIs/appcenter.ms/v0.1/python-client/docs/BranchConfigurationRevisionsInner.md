# BranchConfigurationRevisionsInner

branch configuration revision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_type** | **str** |  | [optional] 
**changed_by** | [**BranchConfigurationRevisionChangedBy**](BranchConfigurationRevisionChangedBy.md) |  | [optional] 
**changed_date** | **str** |  | [optional] 
**definition_url** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**revision** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.branch_configuration_revisions_inner import BranchConfigurationRevisionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BranchConfigurationRevisionsInner from a JSON string
branch_configuration_revisions_inner_instance = BranchConfigurationRevisionsInner.from_json(json)
# print the JSON string representation of the object
print(BranchConfigurationRevisionsInner.to_json())

# convert the object into a dict
branch_configuration_revisions_inner_dict = branch_configuration_revisions_inner_instance.to_dict()
# create an instance of BranchConfigurationRevisionsInner from a dict
branch_configuration_revisions_inner_from_dict = BranchConfigurationRevisionsInner.from_dict(branch_configuration_revisions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


