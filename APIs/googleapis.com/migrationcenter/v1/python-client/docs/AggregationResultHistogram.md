# AggregationResultHistogram

The result of a bucketed histogram aggregation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | [**List[AggregationResultHistogramBucket]**](AggregationResultHistogramBucket.md) | Buckets in the histogram. There will be &#x60;n+1&#x60; buckets matching &#x60;n&#x60; lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity. | [optional] 

## Example

```python
from openapi_client.models.aggregation_result_histogram import AggregationResultHistogram

# TODO update the JSON string below
json = "{}"
# create an instance of AggregationResultHistogram from a JSON string
aggregation_result_histogram_instance = AggregationResultHistogram.from_json(json)
# print the JSON string representation of the object
print(AggregationResultHistogram.to_json())

# convert the object into a dict
aggregation_result_histogram_dict = aggregation_result_histogram_instance.to_dict()
# create an instance of AggregationResultHistogram from a dict
aggregation_result_histogram_from_dict = AggregationResultHistogram.from_dict(aggregation_result_histogram_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


