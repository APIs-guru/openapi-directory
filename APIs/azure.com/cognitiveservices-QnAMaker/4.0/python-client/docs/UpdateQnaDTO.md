# UpdateQnaDTO

PATCH Body schema for Update Qna List

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **str** | Answer text | [optional] 
**context** | [**UpdateContextDTO**](UpdateContextDTO.md) | Context associated with Qna to be updated. | [optional] 
**id** | **int** | Unique id for the Q-A | [optional] 
**metadata** | [**UpdateMetadataDTO**](UpdateMetadataDTO.md) | List of metadata associated with the answer to be updated | [optional] 
**questions** | [**UpdateQuestionsDTO**](UpdateQuestionsDTO.md) | List of questions associated with the answer. | [optional] 
**source** | **str** | Source from which Q-A was indexed. eg. https://docs.microsoft.com/en-us/azure/cognitive-services/QnAMaker/FAQs | [optional] 

## Example

```python
from openapi_client.models.update_qna_dto import UpdateQnaDTO

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateQnaDTO from a JSON string
update_qna_dto_instance = UpdateQnaDTO.from_json(json)
# print the JSON string representation of the object
print(UpdateQnaDTO.to_json())

# convert the object into a dict
update_qna_dto_dict = update_qna_dto_instance.to_dict()
# create an instance of UpdateQnaDTO from a dict
update_qna_dto_from_dict = UpdateQnaDTO.from_dict(update_qna_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


