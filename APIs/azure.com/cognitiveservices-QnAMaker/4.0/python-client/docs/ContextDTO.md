# ContextDTO

Context associated with Qna.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_context_only** | **bool** | To mark if a prompt is relevant only with a previous question or not. true - Do not include this QnA as search result for queries without context false - ignores context and includes this QnA in search result | [optional] 
**prompts** | [**List[PromptDTO]**](PromptDTO.md) | List of prompts associated with the answer. | [optional] 

## Example

```python
from openapi_client.models.context_dto import ContextDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ContextDTO from a JSON string
context_dto_instance = ContextDTO.from_json(json)
# print the JSON string representation of the object
print(ContextDTO.to_json())

# convert the object into a dict
context_dto_dict = context_dto_instance.to_dict()
# create an instance of ContextDTO from a dict
context_dto_from_dict = ContextDTO.from_dict(context_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


