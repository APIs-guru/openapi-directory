# AggregationResult

The result of a single bucket from a Firestore aggregation query. The keys of `aggregate_fields` are the same for all results in an aggregation query, unlike document queries which can have different fields present for each result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_fields** | [**Dict[str, Value]**](Value.md) | The result of the aggregation functions, ex: &#x60;COUNT(*) AS total_docs&#x60;. The key is the alias assigned to the aggregation function on input and the size of this map equals the number of aggregation functions in the query. | [optional] 

## Example

```python
from openapi_client.models.aggregation_result import AggregationResult

# TODO update the JSON string below
json = "{}"
# create an instance of AggregationResult from a JSON string
aggregation_result_instance = AggregationResult.from_json(json)
# print the JSON string representation of the object
print(AggregationResult.to_json())

# convert the object into a dict
aggregation_result_dict = aggregation_result_instance.to_dict()
# create an instance of AggregationResult from a dict
aggregation_result_from_dict = AggregationResult.from_dict(aggregation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


