# ArtifactContentInformation

Details of an Artifact Content Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | **str** | The name of container. Artifacts can be grouped by container. | [optional] 
**content_uri** | **str** | The URI of the content. | [optional] 
**origin** | **str** | The origin of the Artifact creation request. Available origins are &#39;ExperimentRun&#39;, &#39;LocalUpload&#39;, &#39;WebUpload&#39;, &#39;Dataset&#39;, &#39;ComputeRecord&#39;, &#39;Metric&#39;, and &#39;Unknown&#39;. | [optional] 
**path** | **str** | The path to the Artifact in a container. | [optional] 

## Example

```python
from openapi_client.models.artifact_content_information import ArtifactContentInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactContentInformation from a JSON string
artifact_content_information_instance = ArtifactContentInformation.from_json(json)
# print the JSON string representation of the object
print(ArtifactContentInformation.to_json())

# convert the object into a dict
artifact_content_information_dict = artifact_content_information_instance.to_dict()
# create an instance of ArtifactContentInformation from a dict
artifact_content_information_from_dict = ArtifactContentInformation.from_dict(artifact_content_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


