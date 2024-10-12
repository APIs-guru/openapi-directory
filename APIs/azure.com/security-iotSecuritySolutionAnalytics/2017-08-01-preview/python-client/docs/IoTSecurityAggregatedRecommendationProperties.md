# IoTSecurityAggregatedRecommendationProperties

Security Solution Recommendation Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the incident and what it means | [optional] [readonly] 
**detected_by** | **str** | Name of the vendor that discovered the issue | [optional] [readonly] 
**healthy_devices** | **int** | the number of the healthy devices within the solution | [optional] [readonly] 
**log_analytics_query** | **str** | query in log analytics to get the list of affected devices/alerts | [optional] [readonly] 
**recommendation_display_name** | **str** | Display name of the recommendation type. | [optional] [readonly] 
**recommendation_name** | **str** | Name of the recommendation | [optional] 
**recommendation_type_id** | **str** | The recommendation-type GUID. | [optional] [readonly] 
**remediation_steps** | **str** | Recommended steps for remediation | [optional] [readonly] 
**reported_severity** | **str** | Estimated severity of this recommendation | [optional] [readonly] 
**unhealthy_device_count** | **int** | the number of the unhealthy devices within the solution | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_security_aggregated_recommendation_properties import IoTSecurityAggregatedRecommendationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecurityAggregatedRecommendationProperties from a JSON string
io_t_security_aggregated_recommendation_properties_instance = IoTSecurityAggregatedRecommendationProperties.from_json(json)
# print the JSON string representation of the object
print(IoTSecurityAggregatedRecommendationProperties.to_json())

# convert the object into a dict
io_t_security_aggregated_recommendation_properties_dict = io_t_security_aggregated_recommendation_properties_instance.to_dict()
# create an instance of IoTSecurityAggregatedRecommendationProperties from a dict
io_t_security_aggregated_recommendation_properties_from_dict = IoTSecurityAggregatedRecommendationProperties.from_dict(io_t_security_aggregated_recommendation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


