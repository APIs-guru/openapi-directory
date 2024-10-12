# MetricSpecification

Specifications of the Metrics for Azure Monitoring.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** | Only provide one value for this field. Valid values: Average, Minimum, Maximum, Total, Count. | [optional] 
**category** | **str** | The name of the metric category that the metric belongs to. A metric can only belong to a single category. | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | The dimensions of the metrics. | [optional] 
**display_description** | **str** | Localized friendly description of the metric. | [optional] 
**display_name** | **str** | Localized friendly display name of the metric. | [optional] 
**fill_gap_with_zero** | **str** | Optional. If set to true, then zero will be returned for time duration where no metric is emitted/published.   Ex. a metric that returns the number of times a particular error code was emitted. The error code may not appear   often, instead of the RP publishing 0, Shoebox can auto fill in 0s for time periods where nothing was emitted. | [optional] 
**name** | **str** | Name of the metric. | [optional] 
**unit** | **str** | The unit that makes sense for the metric. | [optional] 

## Example

```python
from openapi_client.models.metric_specification import MetricSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of MetricSpecification from a JSON string
metric_specification_instance = MetricSpecification.from_json(json)
# print the JSON string representation of the object
print(MetricSpecification.to_json())

# convert the object into a dict
metric_specification_dict = metric_specification_instance.to_dict()
# create an instance of MetricSpecification from a dict
metric_specification_from_dict = MetricSpecification.from_dict(metric_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


