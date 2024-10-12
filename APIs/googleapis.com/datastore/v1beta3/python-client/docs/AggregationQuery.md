# AggregationQuery

Datastore query for running an aggregation over a Query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregations** | [**List[Aggregation]**](Aggregation.md) | Optional. Series of aggregations to apply over the results of the &#x60;nested_query&#x60;. Requires: * A minimum of one and maximum of five aggregations per query. | [optional] 
**nested_query** | [**Query**](Query.md) |  | [optional] 

## Example

```python
from openapi_client.models.aggregation_query import AggregationQuery

# TODO update the JSON string below
json = "{}"
# create an instance of AggregationQuery from a JSON string
aggregation_query_instance = AggregationQuery.from_json(json)
# print the JSON string representation of the object
print(AggregationQuery.to_json())

# convert the object into a dict
aggregation_query_dict = aggregation_query_instance.to_dict()
# create an instance of AggregationQuery from a dict
aggregation_query_from_dict = AggregationQuery.from_dict(aggregation_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


