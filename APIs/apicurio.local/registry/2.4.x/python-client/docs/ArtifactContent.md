# ArtifactContent



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Raw content of the artifact or a valid (and accessible) URL where the content can be found. | 
**references** | [**List[ArtifactReference]**](ArtifactReference.md) | Collection of references to other artifacts. | 

## Example

```python
from openapi_client.models.artifact_content import ArtifactContent

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactContent from a JSON string
artifact_content_instance = ArtifactContent.from_json(json)
# print the JSON string representation of the object
print(ArtifactContent.to_json())

# convert the object into a dict
artifact_content_dict = artifact_content_instance.to_dict()
# create an instance of ArtifactContent from a dict
artifact_content_from_dict = ArtifactContent.from_dict(artifact_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


