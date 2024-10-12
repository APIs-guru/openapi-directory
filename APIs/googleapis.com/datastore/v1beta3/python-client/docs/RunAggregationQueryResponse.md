# RunAggregationQueryResponse

The response for Datastore.RunAggregationQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch** | [**AggregationResultBatch**](AggregationResultBatch.md) |  | [optional] 
**query** | [**AggregationQuery**](AggregationQuery.md) |  | [optional] 

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


