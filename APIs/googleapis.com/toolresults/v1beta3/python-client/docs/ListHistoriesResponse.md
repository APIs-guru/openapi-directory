# ListHistoriesResponse

Response message for HistoryService.List

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**histories** | [**List[History]**](History.md) | Histories. | [optional] 
**next_page_token** | **str** | A continuation token to resume the query at the next item. Will only be set if there are more histories to fetch. Tokens are valid for up to one hour from the time of the first list request. For instance, if you make a list request at 1PM and use the token from this first request 10 minutes later, the token from this second response will only be valid for 50 minutes. | [optional] 

## Example

```python
from openapi_client.models.list_histories_response import ListHistoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListHistoriesResponse from a JSON string
list_histories_response_instance = ListHistoriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListHistoriesResponse.to_json())

# convert the object into a dict
list_histories_response_dict = list_histories_response_instance.to_dict()
# create an instance of ListHistoriesResponse from a dict
list_histories_response_from_dict = ListHistoriesResponse.from_dict(list_histories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


