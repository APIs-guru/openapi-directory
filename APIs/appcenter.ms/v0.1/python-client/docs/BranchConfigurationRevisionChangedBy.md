# BranchConfigurationRevisionChangedBy

user who made a change in branch configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.branch_configuration_revision_changed_by import BranchConfigurationRevisionChangedBy

# TODO update the JSON string below
json = "{}"
# create an instance of BranchConfigurationRevisionChangedBy from a JSON string
branch_configuration_revision_changed_by_instance = BranchConfigurationRevisionChangedBy.from_json(json)
# print the JSON string representation of the object
print(BranchConfigurationRevisionChangedBy.to_json())

# convert the object into a dict
branch_configuration_revision_changed_by_dict = branch_configuration_revision_changed_by_instance.to_dict()
# create an instance of BranchConfigurationRevisionChangedBy from a dict
branch_configuration_revision_changed_by_from_dict = BranchConfigurationRevisionChangedBy.from_dict(branch_configuration_revision_changed_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


