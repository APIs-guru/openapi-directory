# ArtifactContainerSas

Details of the Artifact Container's shared access signature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_prefix** | **str** | The Prefix to the Artifact in the Blob. | [optional] 
**container_sas** | **str** | The shared access signature of the Container. | 
**container_uri** | **str** | The URI of the Container. | 
**prefix** | **str** | The Prefix to the Blobs in the Container. | [optional] 

## Example

```python
from openapi_client.models.artifact_container_sas import ArtifactContainerSas

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactContainerSas from a JSON string
artifact_container_sas_instance = ArtifactContainerSas.from_json(json)
# print the JSON string representation of the object
print(ArtifactContainerSas.to_json())

# convert the object into a dict
artifact_container_sas_dict = artifact_container_sas_instance.to_dict()
# create an instance of ArtifactContainerSas from a dict
artifact_container_sas_from_dict = ArtifactContainerSas.from_dict(artifact_container_sas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


