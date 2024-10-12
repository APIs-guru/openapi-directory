# MavenArtifact

A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_id** | **str** | Maven &#x60;artifactId&#x60; value used when uploading the artifact to Artifact Registry. | [optional] 
**group_id** | **str** | Maven &#x60;groupId&#x60; value used when uploading the artifact to Artifact Registry. | [optional] 
**path** | **str** | Path to an artifact in the build&#39;s workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar. | [optional] 
**repository** | **str** | Artifact Registry repository, in the form \&quot;https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY\&quot; Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix. | [optional] 
**version** | **str** | Maven &#x60;version&#x60; value used when uploading the artifact to Artifact Registry. | [optional] 

## Example

```python
from openapi_client.models.maven_artifact import MavenArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of MavenArtifact from a JSON string
maven_artifact_instance = MavenArtifact.from_json(json)
# print the JSON string representation of the object
print(MavenArtifact.to_json())

# convert the object into a dict
maven_artifact_dict = maven_artifact_instance.to_dict()
# create an instance of MavenArtifact from a dict
maven_artifact_from_dict = MavenArtifact.from_dict(maven_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


