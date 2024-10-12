# CommitCursorRequest

Request for CommitCursor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | [**Cursor**](Cursor.md) |  | [optional] 
**partition** | **str** | The partition for which to update the cursor. Partitions are zero indexed, so &#x60;partition&#x60; must be in the range [0, topic.num_partitions). | [optional] 

## Example

```python
from openapi_client.models.commit_cursor_request import CommitCursorRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CommitCursorRequest from a JSON string
commit_cursor_request_instance = CommitCursorRequest.from_json(json)
# print the JSON string representation of the object
print(CommitCursorRequest.to_json())

# convert the object into a dict
commit_cursor_request_dict = commit_cursor_request_instance.to_dict()
# create an instance of CommitCursorRequest from a dict
commit_cursor_request_from_dict = CommitCursorRequest.from_dict(commit_cursor_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


