# DocumentMetadataFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** |  | [optional] 
**collection_id** | **str** |  | [optional] 
**document_id** | **str** |  | [optional] 
**end_date** | **str** |  | [optional] 
**keywords** | **List[str]** |  | [optional] 
**language** | **str** |  | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 
**source_id** | **str** |  | [optional] 
**start_date** | **str** |  | [optional] 
**time_period** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.document_metadata_filter import DocumentMetadataFilter

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentMetadataFilter from a JSON string
document_metadata_filter_instance = DocumentMetadataFilter.from_json(json)
# print the JSON string representation of the object
print(DocumentMetadataFilter.to_json())

# convert the object into a dict
document_metadata_filter_dict = document_metadata_filter_instance.to_dict()
# create an instance of DocumentMetadataFilter from a dict
document_metadata_filter_from_dict = DocumentMetadataFilter.from_dict(document_metadata_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


