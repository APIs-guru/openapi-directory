# UpdateContextDTO

Update Body schema to represent context to be updated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_context_only** | **bool** | To mark if a prompt is relevant only with a previous question or not. true - Do not include this QnA as search result for queries without context false - ignores context and includes this QnA in search result | [optional] 
**prompts_to_add** | [**List[PromptDTO]**](PromptDTO.md) | List of prompts to be added to the qna. | [optional] 
**prompts_to_delete** | **List[int]** | List of prompts associated with qna to be deleted | [optional] 

## Example

```python
from openapi_client.models.update_context_dto import UpdateContextDTO

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateContextDTO from a JSON string
update_context_dto_instance = UpdateContextDTO.from_json(json)
# print the JSON string representation of the object
print(UpdateContextDTO.to_json())

# convert the object into a dict
update_context_dto_dict = update_context_dto_instance.to_dict()
# create an instance of UpdateContextDTO from a dict
update_context_dto_from_dict = UpdateContextDTO.from_dict(update_context_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


