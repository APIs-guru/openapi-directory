# QueryContextDTO

Context object with previous QnA's information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous_qna_id** | **str** | Previous QnA Id - qnaId of the top result. | [optional] 
**previous_user_query** | **str** | Previous user query. | [optional] 

## Example

```python
from openapi_client.models.query_context_dto import QueryContextDTO

# TODO update the JSON string below
json = "{}"
# create an instance of QueryContextDTO from a JSON string
query_context_dto_instance = QueryContextDTO.from_json(json)
# print the JSON string representation of the object
print(QueryContextDTO.to_json())

# convert the object into a dict
query_context_dto_dict = query_context_dto_instance.to_dict()
# create an instance of QueryContextDTO from a dict
query_context_dto_from_dict = QueryContextDTO.from_dict(query_context_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


