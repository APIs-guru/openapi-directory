# DocumentChunkWithScore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedding** | **List[float]** |  | [optional] 
**id** | **str** |  | [optional] 
**metadata** | [**DocumentChunkMetadata**](DocumentChunkMetadata.md) |  | 
**score** | **float** |  | 
**text** | **str** |  | 

## Example

```python
from openapi_client.models.document_chunk_with_score import DocumentChunkWithScore

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentChunkWithScore from a JSON string
document_chunk_with_score_instance = DocumentChunkWithScore.from_json(json)
# print the JSON string representation of the object
print(DocumentChunkWithScore.to_json())

# convert the object into a dict
document_chunk_with_score_dict = document_chunk_with_score_instance.to_dict()
# create an instance of DocumentChunkWithScore from a dict
document_chunk_with_score_from_dict = DocumentChunkWithScore.from_dict(document_chunk_with_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


