# CommitRequest

The request for Datastore.Commit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | The type of commit to perform. Defaults to &#x60;TRANSACTIONAL&#x60;. | [optional] 
**mutations** | [**List[Mutation]**](Mutation.md) | The mutations to perform. When mode is &#x60;TRANSACTIONAL&#x60;, mutations affecting a single entity are applied in order. The following sequences of mutations affecting a single entity are not permitted in a single &#x60;Commit&#x60; request: - &#x60;insert&#x60; followed by &#x60;insert&#x60; - &#x60;update&#x60; followed by &#x60;insert&#x60; - &#x60;upsert&#x60; followed by &#x60;insert&#x60; - &#x60;delete&#x60; followed by &#x60;update&#x60; When mode is &#x60;NON_TRANSACTIONAL&#x60;, no two mutations may affect a single entity. | [optional] 
**transaction** | **bytearray** | The identifier of the transaction associated with the commit. A transaction identifier is returned by a call to Datastore.BeginTransaction. | [optional] 

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


