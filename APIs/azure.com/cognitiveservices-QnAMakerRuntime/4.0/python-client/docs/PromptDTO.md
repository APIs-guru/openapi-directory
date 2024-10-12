# PromptDTO

Prompt for an answer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_order** | **int** | Index of the prompt - used in ordering of the prompts | [optional] 
**display_text** | **str** | Text displayed to represent a follow up question prompt | [optional] 
**qna** | [**QnADTO**](QnADTO.md) | QnADTO - Either QnaId or QnADTO needs to be present in a PromptDTO object | [optional] 
**qna_id** | **int** | Qna id corresponding to the prompt - if QnaId is present, QnADTO object is ignored. | [optional] 

## Example

```python
from openapi_client.models.prompt_dto import PromptDTO

# TODO update the JSON string below
json = "{}"
# create an instance of PromptDTO from a JSON string
prompt_dto_instance = PromptDTO.from_json(json)
# print the JSON string representation of the object
print(PromptDTO.to_json())

# convert the object into a dict
prompt_dto_dict = prompt_dto_instance.to_dict()
# create an instance of PromptDTO from a dict
prompt_dto_from_dict = PromptDTO.from_dict(prompt_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


