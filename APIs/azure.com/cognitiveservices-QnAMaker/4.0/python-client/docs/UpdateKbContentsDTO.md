# UpdateKbContentsDTO

PATCH body schema for Update operation in Update Kb

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Friendly name for the knowledgebase. | [optional] 
**qna_list** | [**List[UpdateQnaDTO]**](UpdateQnaDTO.md) | List of Q-A (UpdateQnaDTO) to be added to the knowledgebase. | [optional] 
**urls** | **List[str]** | List of existing URLs to be refreshed. The content will be extracted again and re-indexed. | [optional] 

## Example

```python
from openapi_client.models.update_kb_contents_dto import UpdateKbContentsDTO

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateKbContentsDTO from a JSON string
update_kb_contents_dto_instance = UpdateKbContentsDTO.from_json(json)
# print the JSON string representation of the object
print(UpdateKbContentsDTO.to_json())

# convert the object into a dict
update_kb_contents_dto_dict = update_kb_contents_dto_instance.to_dict()
# create an instance of UpdateKbContentsDTO from a dict
update_kb_contents_dto_from_dict = UpdateKbContentsDTO.from_dict(update_kb_contents_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


