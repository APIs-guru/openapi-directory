# GoogleCloudAiplatformV1beta1LineageSubgraph

A subgraph of the overall lineage graph. Event edges connect Artifact and Execution nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | [**List[GoogleCloudAiplatformV1beta1Artifact]**](GoogleCloudAiplatformV1beta1Artifact.md) | The Artifact nodes in the subgraph. | [optional] 
**events** | [**List[GoogleCloudAiplatformV1beta1Event]**](GoogleCloudAiplatformV1beta1Event.md) | The Event edges between Artifacts and Executions in the subgraph. | [optional] 
**executions** | [**List[GoogleCloudAiplatformV1beta1Execution]**](GoogleCloudAiplatformV1beta1Execution.md) | The Execution nodes in the subgraph. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_lineage_subgraph import GoogleCloudAiplatformV1beta1LineageSubgraph

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1LineageSubgraph from a JSON string
google_cloud_aiplatform_v1beta1_lineage_subgraph_instance = GoogleCloudAiplatformV1beta1LineageSubgraph.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1LineageSubgraph.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_lineage_subgraph_dict = google_cloud_aiplatform_v1beta1_lineage_subgraph_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1LineageSubgraph from a dict
google_cloud_aiplatform_v1beta1_lineage_subgraph_from_dict = GoogleCloudAiplatformV1beta1LineageSubgraph.from_dict(google_cloud_aiplatform_v1beta1_lineage_subgraph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


