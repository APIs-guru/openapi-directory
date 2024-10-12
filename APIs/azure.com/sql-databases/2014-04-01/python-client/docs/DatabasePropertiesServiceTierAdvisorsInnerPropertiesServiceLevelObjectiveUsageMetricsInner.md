# DatabasePropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner

A Slo Usage Metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_range_time_ratio** | **float** | Gets or sets inRangeTimeRatio for SLO usage metric. | [optional] [readonly] 
**service_level_objective** | **str** | The serviceLevelObjective for SLO usage metric. | [optional] [readonly] 
**service_level_objective_id** | **str** | The serviceLevelObjectiveId for SLO usage metric. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_properties_service_tier_advisors_inner_properties_service_level_objective_usage_metrics_inner import DatabasePropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner from a JSON string
database_properties_service_tier_advisors_inner_properties_service_level_objective_usage_metrics_inner_instance = DatabasePropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner.from_json(json)
# print the JSON string representation of the object
print(DatabasePropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner.to_json())

# convert the object into a dict
database_properties_service_tier_advisors_inner_properties_service_level_objective_usage_metrics_inner_dict = database_properties_service_tier_advisors_inner_properties_service_level_objective_usage_metrics_inner_instance.to_dict()
# create an instance of DatabasePropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner from a dict
database_properties_service_tier_advisors_inner_properties_service_level_objective_usage_metrics_inner_from_dict = DatabasePropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner.from_dict(database_properties_service_tier_advisors_inner_properties_service_level_objective_usage_metrics_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


