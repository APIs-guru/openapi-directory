# GoogleCloudDocumentaiV1beta3DocumentShardInfo

For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shard_count** | **str** | Total number of shards. | [optional] 
**shard_index** | **str** | The 0-based index of this shard. | [optional] 
**text_offset** | **str** | The index of the first character in Document.text in the overall document global text. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_shard_info import GoogleCloudDocumentaiV1beta3DocumentShardInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentShardInfo from a JSON string
google_cloud_documentai_v1beta3_document_shard_info_instance = GoogleCloudDocumentaiV1beta3DocumentShardInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentShardInfo.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_shard_info_dict = google_cloud_documentai_v1beta3_document_shard_info_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentShardInfo from a dict
google_cloud_documentai_v1beta3_document_shard_info_from_dict = GoogleCloudDocumentaiV1beta3DocumentShardInfo.from_dict(google_cloud_documentai_v1beta3_document_shard_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


