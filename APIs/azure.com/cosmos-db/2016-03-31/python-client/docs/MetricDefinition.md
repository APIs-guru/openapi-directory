# MetricDefinition

The definition of a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_availabilities** | [**List[MetricAvailability]**](MetricAvailability.md) | The list of metric availabilities for the account. | [optional] [readonly] 
**name** | [**MetricName**](MetricName.md) |  | [optional] 
**primary_aggregation_type** | **str** | The primary aggregation type of the metric. | [optional] [readonly] 
**resource_uri** | **str** | The resource uri of the database. | [optional] [readonly] 
**unit** | [**UnitType**](UnitType.md) |  | [optional] 

## Example

```python
from openapi_client.models.metric_definition import MetricDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of MetricDefinition from a JSON string
metric_definition_instance = MetricDefinition.from_json(json)
# print the JSON string representation of the object
print(MetricDefinition.to_json())

# convert the object into a dict
metric_definition_dict = metric_definition_instance.to_dict()
# create an instance of MetricDefinition from a dict
metric_definition_from_dict = MetricDefinition.from_dict(metric_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


