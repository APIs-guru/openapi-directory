# SearchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_conditions** | **Dict[str, object]** | Channel filter conditions | 
**limit** | **int** | Number of messages to return | [optional] 
**message_filter_conditions** | **Dict[str, object]** | Message filter conditions | [optional] 
**next** | **str** | Pagination parameter. Cannot be used with non-zero offset. | [optional] 
**offset** | **int** | Pagination offset. Cannot be used with sort or next. | [optional] 
**query** | **str** | Search phrase | [optional] 
**sort** | [**List[SortParam]**](SortParam.md) | Sort parameters. Cannot be used with non-zero offset | [optional] 

## Example

```python
from openapi_client.models.search_request import SearchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchRequest from a JSON string
search_request_instance = SearchRequest.from_json(json)
# print the JSON string representation of the object
print(SearchRequest.to_json())

# convert the object into a dict
search_request_dict = search_request_instance.to_dict()
# create an instance of SearchRequest from a dict
search_request_from_dict = SearchRequest.from_dict(search_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


