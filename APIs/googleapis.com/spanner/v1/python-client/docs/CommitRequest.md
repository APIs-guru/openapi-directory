# CommitRequest

The request for Commit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_commit_delay** | **str** | Optional. The amount of latency this request is willing to incur in order to improve throughput. If this field is not set, Spanner assumes requests are relatively latency sensitive and automatically determines an appropriate delay time. You can specify a batching delay value between 0 and 500 ms. | [optional] 
**mutations** | [**List[Mutation]**](Mutation.md) | The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list. | [optional] 
**request_options** | [**RequestOptions**](RequestOptions.md) |  | [optional] 
**return_commit_stats** | **bool** | If &#x60;true&#x60;, then statistics related to the transaction will be included in the CommitResponse. Default value is &#x60;false&#x60;. | [optional] 
**single_use_transaction** | [**TransactionOptions**](TransactionOptions.md) |  | [optional] 
**transaction_id** | **bytearray** | Commit a previously-started transaction. | [optional] 

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


