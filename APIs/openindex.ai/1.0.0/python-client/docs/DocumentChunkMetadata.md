# DocumentChunkMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** |  | [optional] 
**collection_id** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**document_id** | **str** |  | [optional] 
**keywords** | **List[str]** |  | [optional] 
**language** | **str** |  | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 
**source_id** | **str** |  | [optional] 
**time_period** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.document_chunk_metadata import DocumentChunkMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentChunkMetadata from a JSON string
document_chunk_metadata_instance = DocumentChunkMetadata.from_json(json)
# print the JSON string representation of the object
print(DocumentChunkMetadata.to_json())

# convert the object into a dict
document_chunk_metadata_dict = document_chunk_metadata_instance.to_dict()
# create an instance of DocumentChunkMetadata from a dict
document_chunk_metadata_from_dict = DocumentChunkMetadata.from_dict(document_chunk_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


