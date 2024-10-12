# ExecuteBatchDmlRequest

The request for ExecuteBatchDml.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_options** | [**RequestOptions**](RequestOptions.md) |  | [optional] 
**seqno** | **str** | Required. A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed. The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution. | [optional] 
**statements** | [**List[Statement]**](Statement.md) | Required. The list of statements to execute in this batch. Statements are executed serially, such that the effects of statement &#x60;i&#x60; are visible to statement &#x60;i+1&#x60;. Each statement must be a DML statement. Execution stops at the first failed statement; the remaining statements are not executed. Callers must provide at least one statement. | [optional] 
**transaction** | [**TransactionSelector**](TransactionSelector.md) |  | [optional] 

## Example

```python
from openapi_client.models.execute_batch_dml_request import ExecuteBatchDmlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExecuteBatchDmlRequest from a JSON string
execute_batch_dml_request_instance = ExecuteBatchDmlRequest.from_json(json)
# print the JSON string representation of the object
print(ExecuteBatchDmlRequest.to_json())

# convert the object into a dict
execute_batch_dml_request_dict = execute_batch_dml_request_instance.to_dict()
# create an instance of ExecuteBatchDmlRequest from a dict
execute_batch_dml_request_from_dict = ExecuteBatchDmlRequest.from_dict(execute_batch_dml_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


