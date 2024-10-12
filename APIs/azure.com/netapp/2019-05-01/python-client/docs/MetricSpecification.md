# MetricSpecification

Metric specification of operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** | Aggregation type could be Average. | [optional] 
**category** | **str** | The category this metric specification belong to, could be Capacity. | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | Dimensions of blobs, including blob type and access tier. | [optional] 
**display_description** | **str** | Display description of metric specification. | [optional] 
**display_name** | **str** | Display name of metric specification. | [optional] 
**fill_gap_with_zero** | **bool** | The property to decide fill gap with zero or not. | [optional] 
**name** | **str** | Name of metric specification. | [optional] 
**resource_id_dimension_name_override** | **str** | Account Resource Id. | [optional] 
**unit** | **str** | Unit could be Bytes or Count. | [optional] 

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


