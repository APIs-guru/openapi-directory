# PlansListMetricDefinitions200ResponseValueInner

Metric Definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_availabilities** | [**List[PlansListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner]**](PlansListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.md) | List of metric definitions. | [optional] 
**name** | **str** | Metric definition name. | [optional] 
**primary_aggregation_type** | **str** | The primary aggregation type for resource metric. | [optional] 
**unit** | **str** | The resource metric unit. | [optional] 

## Example

```python
from openapi_client.models.plans_list_metric_definitions200_response_value_inner import PlansListMetricDefinitions200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of PlansListMetricDefinitions200ResponseValueInner from a JSON string
plans_list_metric_definitions200_response_value_inner_instance = PlansListMetricDefinitions200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(PlansListMetricDefinitions200ResponseValueInner.to_json())

# convert the object into a dict
plans_list_metric_definitions200_response_value_inner_dict = plans_list_metric_definitions200_response_value_inner_instance.to_dict()
# create an instance of PlansListMetricDefinitions200ResponseValueInner from a dict
plans_list_metric_definitions200_response_value_inner_from_dict = PlansListMetricDefinitions200ResponseValueInner.from_dict(plans_list_metric_definitions200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


