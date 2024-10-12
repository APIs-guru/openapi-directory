# CommitResponse

The response for Firestore.Commit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit_time** | **str** | The time at which the commit occurred. Any read with an equal or greater &#x60;read_time&#x60; is guaranteed to see the effects of the commit. | [optional] 
**write_results** | [**List[WriteResult]**](WriteResult.md) | The result of applying the writes. This i-th write result corresponds to the i-th write in the request. | [optional] 

## Example

```python
from openapi_client.models.commit_response import CommitResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CommitResponse from a JSON string
commit_response_instance = CommitResponse.from_json(json)
# print the JSON string representation of the object
print(CommitResponse.to_json())

# convert the object into a dict
commit_response_dict = commit_response_instance.to_dict()
# create an instance of CommitResponse from a dict
commit_response_from_dict = CommitResponse.from_dict(commit_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


