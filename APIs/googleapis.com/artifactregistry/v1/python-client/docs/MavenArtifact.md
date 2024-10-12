# MavenArtifact

MavenArtifact represents a maven artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_id** | **str** | Artifact ID for the artifact. | [optional] 
**create_time** | **str** | Output only. Time the artifact was created. | [optional] [readonly] 
**group_id** | **str** | Group ID for the artifact. Example: com.google.guava | [optional] 
**name** | **str** | Required. registry_location, project_id, repository_name and maven_artifact forms a unique artifact For example, \&quot;projects/test-project/locations/us-west4/repositories/test-repo/mavenArtifacts/ com.google.guava:guava:31.0-jre\&quot;, where \&quot;us-west4\&quot; is the registry_location, \&quot;test-project\&quot; is the project_id, \&quot;test-repo\&quot; is the repository_name and \&quot;com.google.guava:guava:31.0-jre\&quot; is the maven artifact. | [optional] 
**pom_uri** | **str** | Required. URL to access the pom file of the artifact. Example: us-west4-maven.pkg.dev/test-project/test-repo/com/google/guava/guava/31.0/guava-31.0.pom | [optional] 
**update_time** | **str** | Output only. Time the artifact was updated. | [optional] [readonly] 
**version** | **str** | Version of this artifact. | [optional] 

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


