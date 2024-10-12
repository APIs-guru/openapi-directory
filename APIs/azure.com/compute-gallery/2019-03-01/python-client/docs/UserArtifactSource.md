# UserArtifactSource

The source image from which the Image Version is going to be created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** | Required. The fileName of the artifact. | 
**media_link** | **str** | Required. The mediaLink of the artifact, must be a readable storage blob. | 

## Example

```python
from openapi_client.models.user_artifact_source import UserArtifactSource

# TODO update the JSON string below
json = "{}"
# create an instance of UserArtifactSource from a JSON string
user_artifact_source_instance = UserArtifactSource.from_json(json)
# print the JSON string representation of the object
print(UserArtifactSource.to_json())

# convert the object into a dict
user_artifact_source_dict = user_artifact_source_instance.to_dict()
# create an instance of UserArtifactSource from a dict
user_artifact_source_from_dict = UserArtifactSource.from_dict(user_artifact_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


