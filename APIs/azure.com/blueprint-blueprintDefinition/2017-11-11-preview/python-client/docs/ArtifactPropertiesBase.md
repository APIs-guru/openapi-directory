# ArtifactPropertiesBase

Common properties shared by different artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depends_on** | **List[str]** | Artifacts which need to be deployed before the specified artifact. | [optional] 

## Example

```python
from openapi_client.models.artifact_properties_base import ArtifactPropertiesBase

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactPropertiesBase from a JSON string
artifact_properties_base_instance = ArtifactPropertiesBase.from_json(json)
# print the JSON string representation of the object
print(ArtifactPropertiesBase.to_json())

# convert the object into a dict
artifact_properties_base_dict = artifact_properties_base_instance.to_dict()
# create an instance of ArtifactPropertiesBase from a dict
artifact_properties_base_from_dict = ArtifactPropertiesBase.from_dict(artifact_properties_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


