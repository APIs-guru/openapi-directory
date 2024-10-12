# GoogleCloudAiplatformV1beta1VertexAISearch

Retrieve from Vertex AI Search datastore for grounding. See https://cloud.google.com/vertex-ai-search-and-conversation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datastore** | **str** | Required. Fully-qualified Vertex AI Search&#39;s datastore resource ID. projects/&lt;&gt;/locations/&lt;&gt;/collections/&lt;&gt;/dataStores/&lt;&gt; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_vertex_ai_search import GoogleCloudAiplatformV1beta1VertexAISearch

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1VertexAISearch from a JSON string
google_cloud_aiplatform_v1beta1_vertex_ai_search_instance = GoogleCloudAiplatformV1beta1VertexAISearch.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1VertexAISearch.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_vertex_ai_search_dict = google_cloud_aiplatform_v1beta1_vertex_ai_search_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1VertexAISearch from a dict
google_cloud_aiplatform_v1beta1_vertex_ai_search_from_dict = GoogleCloudAiplatformV1beta1VertexAISearch.from_dict(google_cloud_aiplatform_v1beta1_vertex_ai_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


