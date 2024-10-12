# QueryDTO

POST body schema to query the knowledgebase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**QueryContextDTO**](QueryContextDTO.md) | Context object with previous QnA&#39;s information. | [optional] 
**is_test** | **bool** | Query against the test index. | [optional] 
**qna_id** | **str** | Exact qnaId to fetch from the knowledgebase, this field takes priority over question. | [optional] 
**question** | **str** | User question to query against the knowledge base. | [optional] 
**ranker_type** | **str** | Optional field. Set to &#39;QuestionOnly&#39; for using a question only Ranker. | [optional] 
**score_threshold** | **float** | Threshold for answers returned based on score. | [optional] 
**strict_filters** | [**List[MetadataDTO]**](MetadataDTO.md) | Find only answers that contain these metadata. | [optional] 
**top** | **int** | Max number of answers to be returned for the question. | [optional] 
**user_id** | **str** | Unique identifier for the user. | [optional] 

## Example

```python
from openapi_client.models.query_dto import QueryDTO

# TODO update the JSON string below
json = "{}"
# create an instance of QueryDTO from a JSON string
query_dto_instance = QueryDTO.from_json(json)
# print the JSON string representation of the object
print(QueryDTO.to_json())

# convert the object into a dict
query_dto_dict = query_dto_instance.to_dict()
# create an instance of QueryDTO from a dict
query_dto_from_dict = QueryDTO.from_dict(query_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


