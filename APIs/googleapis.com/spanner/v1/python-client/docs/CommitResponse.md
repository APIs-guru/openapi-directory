# CommitResponse

The response for Commit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit_stats** | [**CommitStats**](CommitStats.md) |  | [optional] 
**commit_timestamp** | **str** | The Cloud Spanner timestamp at which the transaction committed. | [optional] 

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


