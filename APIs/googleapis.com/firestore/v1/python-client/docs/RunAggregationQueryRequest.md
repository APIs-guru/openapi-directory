# RunAggregationQueryRequest

The request for Firestore.RunAggregationQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_transaction** | [**TransactionOptions**](TransactionOptions.md) |  | [optional] 
**read_time** | **str** | Executes the query at the given timestamp. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. | [optional] 
**structured_aggregation_query** | [**StructuredAggregationQuery**](StructuredAggregationQuery.md) |  | [optional] 
**transaction** | **bytearray** | Run the aggregation within an already active transaction. The value here is the opaque transaction ID to execute the query in. | [optional] 

## Example

```python
from openapi_client.models.run_aggregation_query_request import RunAggregationQueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RunAggregationQueryRequest from a JSON string
run_aggregation_query_request_instance = RunAggregationQueryRequest.from_json(json)
# print the JSON string representation of the object
print(RunAggregationQueryRequest.to_json())

# convert the object into a dict
run_aggregation_query_request_dict = run_aggregation_query_request_instance.to_dict()
# create an instance of RunAggregationQueryRequest from a dict
run_aggregation_query_request_from_dict = RunAggregationQueryRequest.from_dict(run_aggregation_query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


