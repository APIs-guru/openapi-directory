# AggregationFunction

Preview: An identifier for an aggregation function. Aggregation functions are SQL functions that group or transform data from multiple points to a single point. This is a preview feature and may be subject to change before final release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**List[Parameter]**](Parameter.md) | Optional. Parameters applied to the aggregation function. Only used for functions that require them. | [optional] 
**type** | **str** | Required. The type of aggregation function, must be one of the following: \&quot;none\&quot; - no function. \&quot;percentile\&quot; - APPROX_QUANTILES() - 1 parameter numeric value \&quot;average\&quot; - AVG() \&quot;count\&quot; - COUNT() \&quot;count-distinct\&quot; - COUNT(DISTINCT) \&quot;count-distinct-approx\&quot; - APPROX_COUNT_DISTINCT() \&quot;max\&quot; - MAX() \&quot;min\&quot; - MIN() \&quot;sum\&quot; - SUM() | [optional] 

## Example

```python
from openapi_client.models.aggregation_function import AggregationFunction

# TODO update the JSON string below
json = "{}"
# create an instance of AggregationFunction from a JSON string
aggregation_function_instance = AggregationFunction.from_json(json)
# print the JSON string representation of the object
print(AggregationFunction.to_json())

# convert the object into a dict
aggregation_function_dict = aggregation_function_instance.to_dict()
# create an instance of AggregationFunction from a dict
aggregation_function_from_dict = AggregationFunction.from_dict(aggregation_function_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


