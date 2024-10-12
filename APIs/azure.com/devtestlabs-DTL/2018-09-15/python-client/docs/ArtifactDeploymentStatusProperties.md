# ArtifactDeploymentStatusProperties

Properties of an artifact deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts_applied** | **int** | The total count of the artifacts that were successfully applied. | [optional] 
**deployment_status** | **str** | The deployment status of the artifact. | [optional] 
**total_artifacts** | **int** | The total count of the artifacts that were tentatively applied. | [optional] 

## Example

```python
from openapi_client.models.artifact_deployment_status_properties import ArtifactDeploymentStatusProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactDeploymentStatusProperties from a JSON string
artifact_deployment_status_properties_instance = ArtifactDeploymentStatusProperties.from_json(json)
# print the JSON string representation of the object
print(ArtifactDeploymentStatusProperties.to_json())

# convert the object into a dict
artifact_deployment_status_properties_dict = artifact_deployment_status_properties_instance.to_dict()
# create an instance of ArtifactDeploymentStatusProperties from a dict
artifact_deployment_status_properties_from_dict = ArtifactDeploymentStatusProperties.from_dict(artifact_deployment_status_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


