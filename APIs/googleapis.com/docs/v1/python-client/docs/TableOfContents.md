# TableOfContents

A StructuralElement representing a table of contents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**List[StructuralElement]**](StructuralElement.md) | The content of the table of contents. | [optional] 
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this content. | [optional] 
**suggested_insertion_ids** | **List[str]** | The suggested insertion IDs. A TableOfContents may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion. | [optional] 

## Example

```python
from openapi_client.models.table_of_contents import TableOfContents

# TODO update the JSON string below
json = "{}"
# create an instance of TableOfContents from a JSON string
table_of_contents_instance = TableOfContents.from_json(json)
# print the JSON string representation of the object
print(TableOfContents.to_json())

# convert the object into a dict
table_of_contents_dict = table_of_contents_instance.to_dict()
# create an instance of TableOfContents from a dict
table_of_contents_from_dict = TableOfContents.from_dict(table_of_contents_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


