# FetchRepositoryHistoryResponse

`FetchRepositoryHistory` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commits** | [**List[CommitLogEntry]**](CommitLogEntry.md) | A list of commit logs, ordered by &#39;git log&#39; default order. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.fetch_repository_history_response import FetchRepositoryHistoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchRepositoryHistoryResponse from a JSON string
fetch_repository_history_response_instance = FetchRepositoryHistoryResponse.from_json(json)
# print the JSON string representation of the object
print(FetchRepositoryHistoryResponse.to_json())

# convert the object into a dict
fetch_repository_history_response_dict = fetch_repository_history_response_instance.to_dict()
# create an instance of FetchRepositoryHistoryResponse from a dict
fetch_repository_history_response_from_dict = FetchRepositoryHistoryResponse.from_dict(fetch_repository_history_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


