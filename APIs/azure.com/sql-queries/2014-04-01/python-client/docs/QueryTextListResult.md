# QueryTextListResult

Represents the response to a get query text request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[QueryText]**](QueryText.md) | The query text. | 

## Example

```python
from openapi_client.models.query_text_list_result import QueryTextListResult

# TODO update the JSON string below
json = "{}"
# create an instance of QueryTextListResult from a JSON string
query_text_list_result_instance = QueryTextListResult.from_json(json)
# print the JSON string representation of the object
print(QueryTextListResult.to_json())

# convert the object into a dict
query_text_list_result_dict = query_text_list_result_instance.to_dict()
# create an instance of QueryTextListResult from a dict
query_text_list_result_from_dict = QueryTextListResult.from_dict(query_text_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


