# AggregationResultSum

The result of a sum aggregation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.aggregation_result_sum import AggregationResultSum

# TODO update the JSON string below
json = "{}"
# create an instance of AggregationResultSum from a JSON string
aggregation_result_sum_instance = AggregationResultSum.from_json(json)
# print the JSON string representation of the object
print(AggregationResultSum.to_json())

# convert the object into a dict
aggregation_result_sum_dict = aggregation_result_sum_instance.to_dict()
# create an instance of AggregationResultSum from a dict
aggregation_result_sum_from_dict = AggregationResultSum.from_dict(aggregation_result_sum_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


