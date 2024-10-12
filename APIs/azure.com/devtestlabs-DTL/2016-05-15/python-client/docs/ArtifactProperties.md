# ArtifactProperties

Properties of an artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** | The artifact&#39;s creation date. | [optional] [readonly] 
**description** | **str** | The artifact&#39;s description. | [optional] [readonly] 
**file_path** | **str** | The file path to the artifact. | [optional] [readonly] 
**icon** | **str** | The URI to the artifact icon. | [optional] [readonly] 
**parameters** | **object** | The artifact&#39;s parameters. | [optional] [readonly] 
**publisher** | **str** | The artifact&#39;s publisher. | [optional] [readonly] 
**target_os_type** | **str** | The artifact&#39;s target OS. | [optional] [readonly] 
**title** | **str** | The artifact&#39;s title. | [optional] [readonly] 

## Example

```python
from openapi_client.models.artifact_properties import ArtifactProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactProperties from a JSON string
artifact_properties_instance = ArtifactProperties.from_json(json)
# print the JSON string representation of the object
print(ArtifactProperties.to_json())

# convert the object into a dict
artifact_properties_dict = artifact_properties_instance.to_dict()
# create an instance of ArtifactProperties from a dict
artifact_properties_from_dict = ArtifactProperties.from_dict(artifact_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


