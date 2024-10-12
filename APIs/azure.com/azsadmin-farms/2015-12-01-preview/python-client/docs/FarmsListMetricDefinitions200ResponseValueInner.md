# FarmsListMetricDefinitions200ResponseValueInner

Metric definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_availabilities** | [**List[FarmsListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner]**](FarmsListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.md) | Metric availabilities. | [optional] [readonly] 
**name** | [**FarmsListMetricDefinitions200ResponseValueInnerName**](FarmsListMetricDefinitions200ResponseValueInnerName.md) |  | [optional] 
**primary_aggregation_type** | **str** | Aggregate type. | [optional] [readonly] 
**unit** | **str** | Metric unit. | [optional] 

## Example

```python
from openapi_client.models.farms_list_metric_definitions200_response_value_inner import FarmsListMetricDefinitions200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of FarmsListMetricDefinitions200ResponseValueInner from a JSON string
farms_list_metric_definitions200_response_value_inner_instance = FarmsListMetricDefinitions200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(FarmsListMetricDefinitions200ResponseValueInner.to_json())

# convert the object into a dict
farms_list_metric_definitions200_response_value_inner_dict = farms_list_metric_definitions200_response_value_inner_instance.to_dict()
# create an instance of FarmsListMetricDefinitions200ResponseValueInner from a dict
farms_list_metric_definitions200_response_value_inner_from_dict = FarmsListMetricDefinitions200ResponseValueInner.from_dict(farms_list_metric_definitions200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


