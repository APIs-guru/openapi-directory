# FarmsListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner

Metric availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention** | **str** | Retention of metric. | [optional] 
**time_grain** | **str** | Time grain. | [optional] 

## Example

```python
from openapi_client.models.farms_list_metric_definitions200_response_value_inner_metric_availabilities_inner import FarmsListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner

# TODO update the JSON string below
json = "{}"
# create an instance of FarmsListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner from a JSON string
farms_list_metric_definitions200_response_value_inner_metric_availabilities_inner_instance = FarmsListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.from_json(json)
# print the JSON string representation of the object
print(FarmsListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.to_json())

# convert the object into a dict
farms_list_metric_definitions200_response_value_inner_metric_availabilities_inner_dict = farms_list_metric_definitions200_response_value_inner_metric_availabilities_inner_instance.to_dict()
# create an instance of FarmsListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner from a dict
farms_list_metric_definitions200_response_value_inner_metric_availabilities_inner_from_dict = FarmsListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.from_dict(farms_list_metric_definitions200_response_value_inner_metric_availabilities_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


