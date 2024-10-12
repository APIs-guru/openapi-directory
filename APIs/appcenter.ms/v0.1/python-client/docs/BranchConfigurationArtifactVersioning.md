# BranchConfigurationArtifactVersioning

The versioning configuration for artifacts built for this branch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_number_format** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.branch_configuration_artifact_versioning import BranchConfigurationArtifactVersioning

# TODO update the JSON string below
json = "{}"
# create an instance of BranchConfigurationArtifactVersioning from a JSON string
branch_configuration_artifact_versioning_instance = BranchConfigurationArtifactVersioning.from_json(json)
# print the JSON string representation of the object
print(BranchConfigurationArtifactVersioning.to_json())

# convert the object into a dict
branch_configuration_artifact_versioning_dict = branch_configuration_artifact_versioning_instance.to_dict()
# create an instance of BranchConfigurationArtifactVersioning from a dict
branch_configuration_artifact_versioning_from_dict = BranchConfigurationArtifactVersioning.from_dict(branch_configuration_artifact_versioning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


