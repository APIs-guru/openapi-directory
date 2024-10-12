# QueryTextsResultList

A list of query texts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[QueryText]**](QueryText.md) | The list of query texts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.query_texts_result_list import QueryTextsResultList

# TODO update the JSON string below
json = "{}"
# create an instance of QueryTextsResultList from a JSON string
query_texts_result_list_instance = QueryTextsResultList.from_json(json)
# print the JSON string representation of the object
print(QueryTextsResultList.to_json())

# convert the object into a dict
query_texts_result_list_dict = query_texts_result_list_instance.to_dict()
# create an instance of QueryTextsResultList from a dict
query_texts_result_list_from_dict = QueryTextsResultList.from_dict(query_texts_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


