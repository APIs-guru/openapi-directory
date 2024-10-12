# GoogleCloudDiscoveryengineV1betaEmbeddingConfig

Defines embedding config, used for bring your own embeddings feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_path** | **str** | Full field path in the schema mapped as embedding field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_embedding_config import GoogleCloudDiscoveryengineV1betaEmbeddingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaEmbeddingConfig from a JSON string
google_cloud_discoveryengine_v1beta_embedding_config_instance = GoogleCloudDiscoveryengineV1betaEmbeddingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaEmbeddingConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_embedding_config_dict = google_cloud_discoveryengine_v1beta_embedding_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaEmbeddingConfig from a dict
google_cloud_discoveryengine_v1beta_embedding_config_from_dict = GoogleCloudDiscoveryengineV1betaEmbeddingConfig.from_dict(google_cloud_discoveryengine_v1beta_embedding_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


