# MetricSpecification

Specifications of the Metrics for Azure Monitoring

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** | Only provide one value for this field. Valid values: Average, Minimum, Maximum, Total, Count. | [optional] 
**category** | **str** | Name of the metric category that the metric belongs to. A metric can only belong to a single category. | [optional] 
**dimensions** | [**List[MetricDimension]**](MetricDimension.md) | Dimensions of the metric | [optional] 
**display_description** | **str** | Localized friendly description of the metric | [optional] 
**display_name** | **str** | Localized friendly display name of the metric | [optional] 
**fill_gap_with_zero** | **bool** | Optional. If set to true, then zero will be returned for time duration where no metric is emitted/published. | [optional] 
**name** | **str** | Name of the metric | [optional] 
**supported_aggregation_types** | **List[str]** | Supported aggregation types | [optional] 
**supported_time_grain_types** | **List[str]** | Supported time grain types | [optional] 
**unit** | **str** | Unit that makes sense for the metric | [optional] 

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


