# ArtifactSourceProperties

Properties of an artifact source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch_ref** | **str** | The branch reference of the artifact source. | [optional] 
**display_name** | **str** | The display name of the artifact source. | [optional] 
**folder_path** | **str** | The folder path of the artifact source. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**security_token** | **str** | The security token of the artifact source. | [optional] 
**source_type** | **str** | The type of the artifact source. | [optional] 
**status** | **str** | The status of the artifact source. | [optional] 
**uri** | **str** | The URI of the artifact source. | [optional] 

## Example

```python
from openapi_client.models.artifact_source_properties import ArtifactSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactSourceProperties from a JSON string
artifact_source_properties_instance = ArtifactSourceProperties.from_json(json)
# print the JSON string representation of the object
print(ArtifactSourceProperties.to_json())

# convert the object into a dict
artifact_source_properties_dict = artifact_source_properties_instance.to_dict()
# create an instance of ArtifactSourceProperties from a dict
artifact_source_properties_from_dict = ArtifactSourceProperties.from_dict(artifact_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


