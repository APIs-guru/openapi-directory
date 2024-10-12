# DataflowHistogramValue

Summary statistics for a population of values. HistogramValue contains a sequence of buckets and gives a count of values that fall into each bucket. Bucket boundares are defined by a formula and bucket widths are either fixed or exponentially increasing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_counts** | **List[str]** | Optional. The number of values in each bucket of the histogram, as described in &#x60;bucket_options&#x60;. &#x60;bucket_counts&#x60; should contain N values, where N is the number of buckets specified in &#x60;bucket_options&#x60;. If &#x60;bucket_counts&#x60; has fewer than N values, the remaining values are assumed to be 0. | [optional] 
**bucket_options** | [**BucketOptions**](BucketOptions.md) |  | [optional] 
**count** | **str** | Number of values recorded in this histogram. | [optional] 
**outlier_stats** | [**OutlierStats**](OutlierStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.dataflow_histogram_value import DataflowHistogramValue

# TODO update the JSON string below
json = "{}"
# create an instance of DataflowHistogramValue from a JSON string
dataflow_histogram_value_instance = DataflowHistogramValue.from_json(json)
# print the JSON string representation of the object
print(DataflowHistogramValue.to_json())

# convert the object into a dict
dataflow_histogram_value_dict = dataflow_histogram_value_instance.to_dict()
# create an instance of DataflowHistogramValue from a dict
dataflow_histogram_value_from_dict = DataflowHistogramValue.from_dict(dataflow_histogram_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


