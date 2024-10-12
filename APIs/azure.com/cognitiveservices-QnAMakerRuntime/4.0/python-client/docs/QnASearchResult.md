# QnASearchResult

Represents Search Result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **str** | Answer. | [optional] 
**context** | [**ContextDTO**](ContextDTO.md) | Context object of the QnA | [optional] 
**id** | **int** | Id of the QnA result. | [optional] 
**metadata** | [**List[MetadataDTO]**](MetadataDTO.md) | List of metadata. | [optional] 
**questions** | **List[str]** | List of questions. | [optional] 
**score** | **float** | Search result score. | [optional] 
**source** | **str** | Source of QnA result. | [optional] 

## Example

```python
from openapi_client.models.qn_a_search_result import QnASearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of QnASearchResult from a JSON string
qn_a_search_result_instance = QnASearchResult.from_json(json)
# print the JSON string representation of the object
print(QnASearchResult.to_json())

# convert the object into a dict
qn_a_search_result_dict = qn_a_search_result_instance.to_dict()
# create an instance of QnASearchResult from a dict
qn_a_search_result_from_dict = QnASearchResult.from_dict(qn_a_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


