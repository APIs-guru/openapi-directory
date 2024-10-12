# GoogleCloudDiscoveryengineV1alphaEmbeddingConfig

Defines embedding config, used for bring your own embeddings feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_path** | **str** | Full field path in the schema mapped as embedding field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_embedding_config import GoogleCloudDiscoveryengineV1alphaEmbeddingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaEmbeddingConfig from a JSON string
google_cloud_discoveryengine_v1alpha_embedding_config_instance = GoogleCloudDiscoveryengineV1alphaEmbeddingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaEmbeddingConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_embedding_config_dict = google_cloud_discoveryengine_v1alpha_embedding_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaEmbeddingConfig from a dict
google_cloud_discoveryengine_v1alpha_embedding_config_from_dict = GoogleCloudDiscoveryengineV1alphaEmbeddingConfig.from_dict(google_cloud_discoveryengine_v1alpha_embedding_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


