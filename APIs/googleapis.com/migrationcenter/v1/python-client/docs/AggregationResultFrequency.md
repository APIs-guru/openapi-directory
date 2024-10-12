# AggregationResultFrequency

The result of a frequency distribution aggregation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.aggregation_result_frequency import AggregationResultFrequency

# TODO update the JSON string below
json = "{}"
# create an instance of AggregationResultFrequency from a JSON string
aggregation_result_frequency_instance = AggregationResultFrequency.from_json(json)
# print the JSON string representation of the object
print(AggregationResultFrequency.to_json())

# convert the object into a dict
aggregation_result_frequency_dict = aggregation_result_frequency_instance.to_dict()
# create an instance of AggregationResultFrequency from a dict
aggregation_result_frequency_from_dict = AggregationResultFrequency.from_dict(aggregation_result_frequency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


