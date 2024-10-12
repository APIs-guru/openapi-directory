# BranchConfigurationWithId


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_versioning** | [**BranchConfigurationsGet200ResponseAllOfArtifactVersioning**](BranchConfigurationsGet200ResponseAllOfArtifactVersioning.md) |  | [optional] 
**badge_is_enabled** | **bool** |  | [optional] 
**clone_from_branch** | **str** | A configured branch name to clone from. If provided, all other parameters will be ignored. Only supported in POST requests. | [optional] 
**signed** | **bool** |  | [optional] 
**tests_enabled** | **bool** |  | [optional] 
**toolsets** | [**BranchConfigurationsGet200ResponseAllOfToolsets**](BranchConfigurationsGet200ResponseAllOfToolsets.md) |  | [optional] 
**trigger** | **str** |  | [optional] 
**id** | **int** |  | 

## Example

```python
from openapi_client.models.branch_configuration_with_id import BranchConfigurationWithId

# TODO update the JSON string below
json = "{}"
# create an instance of BranchConfigurationWithId from a JSON string
branch_configuration_with_id_instance = BranchConfigurationWithId.from_json(json)
# print the JSON string representation of the object
print(BranchConfigurationWithId.to_json())

# convert the object into a dict
branch_configuration_with_id_dict = branch_configuration_with_id_instance.to_dict()
# create an instance of BranchConfigurationWithId from a dict
branch_configuration_with_id_from_dict = BranchConfigurationWithId.from_dict(branch_configuration_with_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


