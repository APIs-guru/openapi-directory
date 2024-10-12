# RunAggregationQueryResponse

The response for Firestore.RunAggregationQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**read_time** | **str** | The time at which the aggregate result was computed. This is always monotonically increasing; in this case, the previous AggregationResult in the result stream are guaranteed not to have changed between their &#x60;read_time&#x60; and this one. If the query returns no results, a response with &#x60;read_time&#x60; and no &#x60;result&#x60; will be sent, and this represents the time at which the query was run. | [optional] 
**result** | [**AggregationResult**](AggregationResult.md) |  | [optional] 
**transaction** | **bytearray** | The transaction that was started as part of this request. Only present on the first response when the request requested to start a new transaction. | [optional] 

## Example

```python
from openapi_client.models.run_aggregation_query_response import RunAggregationQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RunAggregationQueryResponse from a JSON string
run_aggregation_query_response_instance = RunAggregationQueryResponse.from_json(json)
# print the JSON string representation of the object
print(RunAggregationQueryResponse.to_json())

# convert the object into a dict
run_aggregation_query_response_dict = run_aggregation_query_response_instance.to_dict()
# create an instance of RunAggregationQueryResponse from a dict
run_aggregation_query_response_from_dict = RunAggregationQueryResponse.from_dict(run_aggregation_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


