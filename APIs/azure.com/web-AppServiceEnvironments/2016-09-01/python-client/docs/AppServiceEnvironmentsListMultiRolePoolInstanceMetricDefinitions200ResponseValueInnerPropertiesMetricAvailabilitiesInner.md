# AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner

Metrics availability and retention.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention** | **str** | Retention period for the current time grain. | [optional] [readonly] 
**time_grain** | **str** | Time grain . | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_environments_list_multi_role_pool_instance_metric_definitions200_response_value_inner_properties_metric_availabilities_inner import AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner from a JSON string
app_service_environments_list_multi_role_pool_instance_metric_definitions200_response_value_inner_properties_metric_availabilities_inner_instance = AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner.to_json())

# convert the object into a dict
app_service_environments_list_multi_role_pool_instance_metric_definitions200_response_value_inner_properties_metric_availabilities_inner_dict = app_service_environments_list_multi_role_pool_instance_metric_definitions200_response_value_inner_properties_metric_availabilities_inner_instance.to_dict()
# create an instance of AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner from a dict
app_service_environments_list_multi_role_pool_instance_metric_definitions200_response_value_inner_properties_metric_availabilities_inner_from_dict = AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner.from_dict(app_service_environments_list_multi_role_pool_instance_metric_definitions200_response_value_inner_properties_metric_availabilities_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


