# CommitRequest

The request for Firestore.Commit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | **bytearray** | If set, applies all writes in this transaction, and commits it. | [optional] 
**writes** | [**List[Write]**](Write.md) | The writes to apply. Always executed atomically and in order. | [optional] 

## Example

```python
from openapi_client.models.commit_request import CommitRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CommitRequest from a JSON string
commit_request_instance = CommitRequest.from_json(json)
# print the JSON string representation of the object
print(CommitRequest.to_json())

# convert the object into a dict
commit_request_dict = commit_request_instance.to_dict()
# create an instance of CommitRequest from a dict
commit_request_from_dict = CommitRequest.from_dict(commit_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


