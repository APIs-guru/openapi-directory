# RecommendedElasticPoolPropertiesDatabasesInnerPropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner

A Slo Usage Metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_range_time_ratio** | **float** | Gets or sets inRangeTimeRatio for SLO usage metric. | [optional] [readonly] 
**service_level_objective** | **str** | The serviceLevelObjective for SLO usage metric. | [optional] [readonly] 
**service_level_objective_id** | **str** | The serviceLevelObjectiveId for SLO usage metric. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommended_elastic_pool_properties_databases_inner_properties_service_tier_advisors_inner_properties_service_level_objective_usage_metrics_inner import RecommendedElasticPoolPropertiesDatabasesInnerPropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedElasticPoolPropertiesDatabasesInnerPropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner from a JSON string
recommended_elastic_pool_properties_databases_inner_properties_service_tier_advisors_inner_properties_service_level_objective_usage_metrics_inner_instance = RecommendedElasticPoolPropertiesDatabasesInnerPropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner.from_json(json)
# print the JSON string representation of the object
print(RecommendedElasticPoolPropertiesDatabasesInnerPropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner.to_json())

# convert the object into a dict
recommended_elastic_pool_properties_databases_inner_properties_service_tier_advisors_inner_properties_service_level_objective_usage_metrics_inner_dict = recommended_elastic_pool_properties_databases_inner_properties_service_tier_advisors_inner_properties_service_level_objective_usage_metrics_inner_instance.to_dict()
# create an instance of RecommendedElasticPoolPropertiesDatabasesInnerPropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner from a dict
recommended_elastic_pool_properties_databases_inner_properties_service_tier_advisors_inner_properties_service_level_objective_usage_metrics_inner_from_dict = RecommendedElasticPoolPropertiesDatabasesInnerPropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner.from_dict(recommended_elastic_pool_properties_databases_inner_properties_service_tier_advisors_inner_properties_service_level_objective_usage_metrics_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


