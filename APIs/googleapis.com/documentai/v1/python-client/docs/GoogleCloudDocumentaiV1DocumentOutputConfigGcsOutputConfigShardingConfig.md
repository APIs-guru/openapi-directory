# GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfigShardingConfig

The sharding config for the output document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pages_overlap** | **int** | The number of overlapping pages between consecutive shards. | [optional] 
**pages_per_shard** | **int** | The number of pages per shard. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_output_config_gcs_output_config_sharding_config import GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfigShardingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfigShardingConfig from a JSON string
google_cloud_documentai_v1_document_output_config_gcs_output_config_sharding_config_instance = GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfigShardingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfigShardingConfig.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_output_config_gcs_output_config_sharding_config_dict = google_cloud_documentai_v1_document_output_config_gcs_output_config_sharding_config_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfigShardingConfig from a dict
google_cloud_documentai_v1_document_output_config_gcs_output_config_sharding_config_from_dict = GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfigShardingConfig.from_dict(google_cloud_documentai_v1_document_output_config_gcs_output_config_sharding_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


