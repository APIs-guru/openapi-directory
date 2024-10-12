# AggregationResultBatch

A batch of aggregation results produced by an aggregation query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_results** | [**List[AggregationResult]**](AggregationResult.md) | The aggregation results for this batch. | [optional] 
**more_results** | **str** | The state of the query after the current batch. Only COUNT(*) aggregations are supported in the initial launch. Therefore, expected result type is limited to &#x60;NO_MORE_RESULTS&#x60;. | [optional] 
**read_time** | **str** | Read timestamp this batch was returned from. In a single transaction, subsequent query result batches for the same query can have a greater timestamp. Each batch&#39;s read timestamp is valid for all preceding batches. | [optional] 

## Example

```python
from openapi_client.models.aggregation_result_batch import AggregationResultBatch

# TODO update the JSON string below
json = "{}"
# create an instance of AggregationResultBatch from a JSON string
aggregation_result_batch_instance = AggregationResultBatch.from_json(json)
# print the JSON string representation of the object
print(AggregationResultBatch.to_json())

# convert the object into a dict
aggregation_result_batch_dict = aggregation_result_batch_instance.to_dict()
# create an instance of AggregationResultBatch from a dict
aggregation_result_batch_from_dict = AggregationResultBatch.from_dict(aggregation_result_batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


