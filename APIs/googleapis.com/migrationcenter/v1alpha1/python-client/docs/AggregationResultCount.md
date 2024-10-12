# AggregationResultCount

The result of a count aggregation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.aggregation_result_count import AggregationResultCount

# TODO update the JSON string below
json = "{}"
# create an instance of AggregationResultCount from a JSON string
aggregation_result_count_instance = AggregationResultCount.from_json(json)
# print the JSON string representation of the object
print(AggregationResultCount.to_json())

# convert the object into a dict
aggregation_result_count_dict = aggregation_result_count_instance.to_dict()
# create an instance of AggregationResultCount from a dict
aggregation_result_count_from_dict = AggregationResultCount.from_dict(aggregation_result_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


