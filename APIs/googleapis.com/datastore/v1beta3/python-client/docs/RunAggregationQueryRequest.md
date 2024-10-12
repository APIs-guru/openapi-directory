# RunAggregationQueryRequest

The request for Datastore.RunAggregationQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_query** | [**AggregationQuery**](AggregationQuery.md) |  | [optional] 
**gql_query** | [**GqlQuery**](GqlQuery.md) |  | [optional] 
**partition_id** | [**PartitionId**](PartitionId.md) |  | [optional] 
**read_options** | [**ReadOptions**](ReadOptions.md) |  | [optional] 

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


