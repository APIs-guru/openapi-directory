# CommitResponse

The response for Datastore.Commit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit_time** | **str** | The transaction commit timestamp. Not set for non-transactional commits. | [optional] 
**index_updates** | **int** | The number of index entries updated during the commit, or zero if none were updated. | [optional] 
**mutation_results** | [**List[MutationResult]**](MutationResult.md) | The result of performing the mutations. The i-th mutation result corresponds to the i-th mutation in the request. | [optional] 

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


