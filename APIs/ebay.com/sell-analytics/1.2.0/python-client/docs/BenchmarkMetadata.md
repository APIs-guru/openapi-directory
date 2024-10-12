# BenchmarkMetadata

This complex type defines the fields that comprise the benchmark against which the seller's performance is compared. The comparison determines the seller's rating for the metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **str** | This field returns the average value for the group, as defined by the specified basis. When the benchmark basis is set to PEER_BENCHMARK, the value returned in this field is the benchmark value to which the seller&#39;s metric value is compared to determine the seller&#39;s rating for the customer service metric. | [optional] 

## Example

```python
from openapi_client.models.benchmark_metadata import BenchmarkMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of BenchmarkMetadata from a JSON string
benchmark_metadata_instance = BenchmarkMetadata.from_json(json)
# print the JSON string representation of the object
print(BenchmarkMetadata.to_json())

# convert the object into a dict
benchmark_metadata_dict = benchmark_metadata_instance.to_dict()
# create an instance of BenchmarkMetadata from a dict
benchmark_metadata_from_dict = BenchmarkMetadata.from_dict(benchmark_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


