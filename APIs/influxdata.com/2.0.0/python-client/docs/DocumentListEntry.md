# DocumentListEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [readonly] 
**labels** | [**List[Label]**](Label.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | [optional] 
**meta** | [**DocumentMeta**](DocumentMeta.md) |  | 

## Example

```python
from openapi_client.models.document_list_entry import DocumentListEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentListEntry from a JSON string
document_list_entry_instance = DocumentListEntry.from_json(json)
# print the JSON string representation of the object
print(DocumentListEntry.to_json())

# convert the object into a dict
document_list_entry_dict = document_list_entry_instance.to_dict()
# create an instance of DocumentListEntry from a dict
document_list_entry_from_dict = DocumentListEntry.from_dict(document_list_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


