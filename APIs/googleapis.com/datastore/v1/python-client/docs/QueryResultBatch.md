# QueryResultBatch

A batch of results produced by a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_cursor** | **bytearray** | A cursor that points to the position after the last result in the batch. | [optional] 
**entity_result_type** | **str** | The result type for every entity in &#x60;entity_results&#x60;. | [optional] 
**entity_results** | [**List[EntityResult]**](EntityResult.md) | The results for this batch. | [optional] 
**more_results** | **str** | The state of the query after the current batch. | [optional] 
**read_time** | **str** | Read timestamp this batch was returned from. This applies to the range of results from the query&#39;s &#x60;start_cursor&#x60; (or the beginning of the query if no cursor was given) to this batch&#39;s &#x60;end_cursor&#x60; (not the query&#39;s &#x60;end_cursor&#x60;). In a single transaction, subsequent query result batches for the same query can have a greater timestamp. Each batch&#39;s read timestamp is valid for all preceding batches. This value will not be set for eventually consistent queries in Cloud Datastore. | [optional] 
**skipped_cursor** | **bytearray** | A cursor that points to the position after the last skipped result. Will be set when &#x60;skipped_results&#x60; !&#x3D; 0. | [optional] 
**skipped_results** | **int** | The number of results skipped, typically because of an offset. | [optional] 
**snapshot_version** | **str** | The version number of the snapshot this batch was returned from. This applies to the range of results from the query&#39;s &#x60;start_cursor&#x60; (or the beginning of the query if no cursor was given) to this batch&#39;s &#x60;end_cursor&#x60; (not the query&#39;s &#x60;end_cursor&#x60;). In a single transaction, subsequent query result batches for the same query can have a greater snapshot version number. Each batch&#39;s snapshot version is valid for all preceding batches. The value will be zero for eventually consistent queries. | [optional] 

## Example

```python
from openapi_client.models.query_result_batch import QueryResultBatch

# TODO update the JSON string below
json = "{}"
# create an instance of QueryResultBatch from a JSON string
query_result_batch_instance = QueryResultBatch.from_json(json)
# print the JSON string representation of the object
print(QueryResultBatch.to_json())

# convert the object into a dict
query_result_batch_dict = query_result_batch_instance.to_dict()
# create an instance of QueryResultBatch from a dict
query_result_batch_from_dict = QueryResultBatch.from_dict(query_result_batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


