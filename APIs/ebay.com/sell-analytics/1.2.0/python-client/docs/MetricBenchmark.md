# MetricBenchmark

This complex type defines the benchmark data, which includes the average value of the metric for the group (the benchmark) and the seller's overall rating when compared to the benchmark.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustment** | **str** | If this field is present, it indicates that the rating given to the seller was &amp;quot;adjusted&amp;quot; for one reason or another. If eBay determines that the normal rating of a seller is impacted by circumstances beyond their control, they can issue an override to adjust the rating given to the seller. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/devzone/rest/api-ref/analytics/types/RatingAdjustmentTypeEnum.html&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**basis** | **str** | This field returns the &amp;quot;basis&amp;quot; by which the benchmark is calculated for the customer service metric type. Currently, the only supported basis is PEER_BENCHMARK. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/devzone/rest/api-ref/analytics/types/BenchmarkTypeEnum.html&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**metadata** | [**BenchmarkMetadata**](BenchmarkMetadata.md) |  | [optional] 
**rating** | **str** | This field returns seller&#39;s rating for the customer service metric. The rating is set to a value that equals the relative deviation between the seller&#39;s metric value and the benchmark value for the customer service metric. Deviation values range from LOW to VERY HIGH, and the lower the deviation, the better the seller rating. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/devzone/rest/api-ref/analytics/types/RatingTypeEnum.html&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.metric_benchmark import MetricBenchmark

# TODO update the JSON string below
json = "{}"
# create an instance of MetricBenchmark from a JSON string
metric_benchmark_instance = MetricBenchmark.from_json(json)
# print the JSON string representation of the object
print(MetricBenchmark.to_json())

# convert the object into a dict
metric_benchmark_dict = metric_benchmark_instance.to_dict()
# create an instance of MetricBenchmark from a dict
metric_benchmark_from_dict = MetricBenchmark.from_dict(metric_benchmark_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


