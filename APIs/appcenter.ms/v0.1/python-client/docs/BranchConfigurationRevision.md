# BranchConfigurationRevision

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
from openapi_client.models.branch_configuration_revision import BranchConfigurationRevision

# TODO update the JSON string below
json = "{}"
# create an instance of BranchConfigurationRevision from a JSON string
branch_configuration_revision_instance = BranchConfigurationRevision.from_json(json)
# print the JSON string representation of the object
print(BranchConfigurationRevision.to_json())

# convert the object into a dict
branch_configuration_revision_dict = branch_configuration_revision_instance.to_dict()
# create an instance of BranchConfigurationRevision from a dict
branch_configuration_revision_from_dict = BranchConfigurationRevision.from_dict(branch_configuration_revision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


