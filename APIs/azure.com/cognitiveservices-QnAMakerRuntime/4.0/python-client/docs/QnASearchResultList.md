# QnASearchResultList

Represents List of Question Answers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers** | [**List[QnASearchResult]**](QnASearchResult.md) | Represents Search Result list. | [optional] 

## Example

```python
from openapi_client.models.qn_a_search_result_list import QnASearchResultList

# TODO update the JSON string below
json = "{}"
# create an instance of QnASearchResultList from a JSON string
qn_a_search_result_list_instance = QnASearchResultList.from_json(json)
# print the JSON string representation of the object
print(QnASearchResultList.to_json())

# convert the object into a dict
qn_a_search_result_list_dict = qn_a_search_result_list_instance.to_dict()
# create an instance of QnASearchResultList from a dict
qn_a_search_result_list_from_dict = QnASearchResultList.from_dict(qn_a_search_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


