# AggregationResultHistogramBucket

A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Count of items in the bucket. | [optional] 
**lower_bound** | **float** | Lower bound - inclusive. | [optional] 
**upper_bound** | **float** | Upper bound - exclusive. | [optional] 

## Example

```python
from openapi_client.models.aggregation_result_histogram_bucket import AggregationResultHistogramBucket

# TODO update the JSON string below
json = "{}"
# create an instance of AggregationResultHistogramBucket from a JSON string
aggregation_result_histogram_bucket_instance = AggregationResultHistogramBucket.from_json(json)
# print the JSON string representation of the object
print(AggregationResultHistogramBucket.to_json())

# convert the object into a dict
aggregation_result_histogram_bucket_dict = aggregation_result_histogram_bucket_instance.to_dict()
# create an instance of AggregationResultHistogramBucket from a dict
aggregation_result_histogram_bucket_from_dict = AggregationResultHistogramBucket.from_dict(aggregation_result_histogram_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


