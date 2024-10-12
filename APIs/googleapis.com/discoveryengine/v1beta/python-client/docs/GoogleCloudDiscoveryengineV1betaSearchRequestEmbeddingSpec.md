# GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpec

The specification that uses customized query embedding vector to do semantic document retrieval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedding_vectors** | [**List[GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVector]**](GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVector.md) | The embedding vector used for retrieval. Limit to 1. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_search_request_embedding_spec import GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpec from a JSON string
google_cloud_discoveryengine_v1beta_search_request_embedding_spec_instance = GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpec.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_search_request_embedding_spec_dict = google_cloud_discoveryengine_v1beta_search_request_embedding_spec_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpec from a dict
google_cloud_discoveryengine_v1beta_search_request_embedding_spec_from_dict = GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpec.from_dict(google_cloud_discoveryengine_v1beta_search_request_embedding_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


