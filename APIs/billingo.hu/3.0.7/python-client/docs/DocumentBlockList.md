# DocumentBlockList

A object with a data property that contains an array of up to limit document blocks. Each entry in the array is a separate document block object. If no more document block are available, the resulting array will be empty.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_page** | **int** |  | [optional] 
**data** | [**List[DocumentBlock]**](DocumentBlock.md) |  | [optional] 
**last_page** | **int** |  | [optional] 
**next_page_url** | **str** |  | [optional] 
**per_page** | **int** |  | [optional] 
**prev_page_url** | **str** |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.document_block_list import DocumentBlockList

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentBlockList from a JSON string
document_block_list_instance = DocumentBlockList.from_json(json)
# print the JSON string representation of the object
print(DocumentBlockList.to_json())

# convert the object into a dict
document_block_list_dict = document_block_list_instance.to_dict()
# create an instance of DocumentBlockList from a dict
document_block_list_from_dict = DocumentBlockList.from_dict(document_block_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


