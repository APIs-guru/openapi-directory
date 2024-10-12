# GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVector

Embedding vector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_path** | **str** | Embedding field path in schema. | [optional] 
**vector** | **List[float]** | Query embedding vector. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_search_request_embedding_spec_embedding_vector import GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVector

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVector from a JSON string
google_cloud_discoveryengine_v1beta_search_request_embedding_spec_embedding_vector_instance = GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVector.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVector.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_search_request_embedding_spec_embedding_vector_dict = google_cloud_discoveryengine_v1beta_search_request_embedding_spec_embedding_vector_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVector from a dict
google_cloud_discoveryengine_v1beta_search_request_embedding_spec_embedding_vector_from_dict = GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVector.from_dict(google_cloud_discoveryengine_v1beta_search_request_embedding_spec_embedding_vector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


