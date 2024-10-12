# DeleteKbContentsDTO

PATCH body schema of Delete Operation in UpdateKb

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[int]** | List of Qna Ids to be deleted | [optional] 
**sources** | **List[str]** | List of sources to be deleted from knowledgebase. | [optional] 

## Example

```python
from openapi_client.models.delete_kb_contents_dto import DeleteKbContentsDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteKbContentsDTO from a JSON string
delete_kb_contents_dto_instance = DeleteKbContentsDTO.from_json(json)
# print the JSON string representation of the object
print(DeleteKbContentsDTO.to_json())

# convert the object into a dict
delete_kb_contents_dto_dict = delete_kb_contents_dto_instance.to_dict()
# create an instance of DeleteKbContentsDTO from a dict
delete_kb_contents_dto_from_dict = DeleteKbContentsDTO.from_dict(delete_kb_contents_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


