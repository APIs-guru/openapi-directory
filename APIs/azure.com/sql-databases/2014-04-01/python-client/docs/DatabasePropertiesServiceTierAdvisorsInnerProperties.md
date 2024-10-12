# DatabasePropertiesServiceTierAdvisorsInnerProperties

Represents the properties of a Service Tier Advisor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_time_ratio** | **float** | The activeTimeRatio for service tier advisor. | [optional] [readonly] 
**avg_dtu** | **float** | Gets or sets avgDtu for service tier advisor. | [optional] [readonly] 
**confidence** | **float** | Gets or sets confidence for service tier advisor. | [optional] [readonly] 
**current_service_level_objective** | **str** | Gets or sets currentServiceLevelObjective for service tier advisor. | [optional] [readonly] 
**current_service_level_objective_id** | **str** | Gets or sets currentServiceLevelObjectiveId for service tier advisor. | [optional] [readonly] 
**database_size_based_recommendation_service_level_objective** | **str** | Gets or sets databaseSizeBasedRecommendationServiceLevelObjective for service tier advisor. | [optional] [readonly] 
**database_size_based_recommendation_service_level_objective_id** | **str** | Gets or sets databaseSizeBasedRecommendationServiceLevelObjectiveId for service tier advisor. | [optional] [readonly] 
**disaster_plan_based_recommendation_service_level_objective** | **str** | Gets or sets disasterPlanBasedRecommendationServiceLevelObjective for service tier advisor. | [optional] [readonly] 
**disaster_plan_based_recommendation_service_level_objective_id** | **str** | Gets or sets disasterPlanBasedRecommendationServiceLevelObjectiveId for service tier advisor. | [optional] [readonly] 
**max_dtu** | **float** | Gets or sets maxDtu for service tier advisor. | [optional] [readonly] 
**max_size_in_gb** | **float** | Gets or sets maxSizeInGB for service tier advisor. | [optional] [readonly] 
**min_dtu** | **float** | Gets or sets minDtu for service tier advisor. | [optional] [readonly] 
**observation_period_end** | **datetime** | The observation period start (ISO8601 format). | [optional] [readonly] 
**observation_period_start** | **datetime** | The observation period start (ISO8601 format). | [optional] [readonly] 
**overall_recommendation_service_level_objective** | **str** | Gets or sets overallRecommendationServiceLevelObjective for service tier advisor. | [optional] [readonly] 
**overall_recommendation_service_level_objective_id** | **str** | Gets or sets overallRecommendationServiceLevelObjectiveId for service tier advisor. | [optional] [readonly] 
**service_level_objective_usage_metrics** | [**List[DatabasePropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner]**](DatabasePropertiesServiceTierAdvisorsInnerPropertiesServiceLevelObjectiveUsageMetricsInner.md) | Gets or sets serviceLevelObjectiveUsageMetrics for the service tier advisor. | [optional] [readonly] 
**usage_based_recommendation_service_level_objective** | **str** | Gets or sets usageBasedRecommendationServiceLevelObjective for service tier advisor. | [optional] [readonly] 
**usage_based_recommendation_service_level_objective_id** | **str** | Gets or sets usageBasedRecommendationServiceLevelObjectiveId for service tier advisor. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_properties_service_tier_advisors_inner_properties import DatabasePropertiesServiceTierAdvisorsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePropertiesServiceTierAdvisorsInnerProperties from a JSON string
database_properties_service_tier_advisors_inner_properties_instance = DatabasePropertiesServiceTierAdvisorsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(DatabasePropertiesServiceTierAdvisorsInnerProperties.to_json())

# convert the object into a dict
database_properties_service_tier_advisors_inner_properties_dict = database_properties_service_tier_advisors_inner_properties_instance.to_dict()
# create an instance of DatabasePropertiesServiceTierAdvisorsInnerProperties from a dict
database_properties_service_tier_advisors_inner_properties_from_dict = DatabasePropertiesServiceTierAdvisorsInnerProperties.from_dict(database_properties_service_tier_advisors_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


