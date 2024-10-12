# PlansListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner

Metric Definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention** | **str** | the retention. Metrics may be queried for this interval. | [optional] 
**time_grain** | **str** | The time grain. Metrics will be available for this time grain. | [optional] 

## Example

```python
from openapi_client.models.plans_list_metric_definitions200_response_value_inner_metric_availabilities_inner import PlansListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner

# TODO update the JSON string below
json = "{}"
# create an instance of PlansListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner from a JSON string
plans_list_metric_definitions200_response_value_inner_metric_availabilities_inner_instance = PlansListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.from_json(json)
# print the JSON string representation of the object
print(PlansListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.to_json())

# convert the object into a dict
plans_list_metric_definitions200_response_value_inner_metric_availabilities_inner_dict = plans_list_metric_definitions200_response_value_inner_metric_availabilities_inner_instance.to_dict()
# create an instance of PlansListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner from a dict
plans_list_metric_definitions200_response_value_inner_metric_availabilities_inner_from_dict = PlansListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.from_dict(plans_list_metric_definitions200_response_value_inner_metric_availabilities_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


