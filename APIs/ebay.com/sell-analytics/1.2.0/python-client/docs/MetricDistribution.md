# MetricDistribution

This complex data type describes the metric distribution by basis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basis** | **str** | This field returns the basis, or the method, by which the metric rating is calculated. | [optional] 
**data** | [**List[Distribution]**](Distribution.md) | This field returns a list of name/value pairs, where the name indicates the distribution being rated and the value indicates the count of seller transactions that meet the distribution criteria. | [optional] 

## Example

```python
from openapi_client.models.metric_distribution import MetricDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of MetricDistribution from a JSON string
metric_distribution_instance = MetricDistribution.from_json(json)
# print the JSON string representation of the object
print(MetricDistribution.to_json())

# convert the object into a dict
metric_distribution_dict = metric_distribution_instance.to_dict()
# create an instance of MetricDistribution from a dict
metric_distribution_from_dict = MetricDistribution.from_dict(metric_distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


