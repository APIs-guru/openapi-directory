# Metric

This complex data type defines the details of the customer service metric and benchmark data related to the associated dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benchmark** | [**MetricBenchmark**](MetricBenchmark.md) |  | [optional] 
**distributions** | [**List[MetricDistribution]**](MetricDistribution.md) | Returned when metricKey equals COUNT, this field returns an array of seller data where each set of data is grouped according by an overarching basis. When the seller distribution is returned, the numeric value of the associated value container equals the sum of the transactions where the seller meets the criteria of the customer service metric type for the given dimension during the evaluationCycle. | [optional] 
**metric_key** | **str** | This field indicates the customer service metric being returned in the associated metrics container. The field is set as follows: TRANSACTION_COUNT &amp;ndash; When set to this value, the associated value field equals the total number of transactions completed in the seller group for the metric in the given dimension during the associated evaluationCycle. COUNT &amp;ndash; When set to this value, the associated value field is set to the total number of transactions the seller completed that meet the criteria of the customer service metric type for the given dimension that occurred during the evaluationCycle. RATE &amp;ndash; When set to this value, the value of the associated value field is the rate of the customer service metric type in the given dimension during the associated evaluationCycle. Specifically, when metricKey is set to RATE, the associated value field is set to the value of metricKey TRANSACTION_COUNT divided by the value of metricKey COUNT. The returned benchmark.rating for the seller is based on this calculated value. | [optional] 
**value** | **str** | This field is set to the seller&#39;s numeric rating for the associated metricKey for the given dimension during the evaluationCycle. To determine the seller&#39;s rating for this metric, the value of this field is compared to the average metric value of the group. | [optional] 

## Example

```python
from openapi_client.models.metric import Metric

# TODO update the JSON string below
json = "{}"
# create an instance of Metric from a JSON string
metric_instance = Metric.from_json(json)
# print the JSON string representation of the object
print(Metric.to_json())

# convert the object into a dict
metric_dict = metric_instance.to_dict()
# create an instance of Metric from a dict
metric_from_dict = Metric.from_dict(metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


