# IoTSecurityAggregatedRecommendationProperties

IoT Security solution aggregated recommendation information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the suspected vulnerability and meaning. | [optional] [readonly] 
**detected_by** | **str** | Name of the organization that made the recommendation. | [optional] [readonly] 
**healthy_devices** | **int** | Number of healthy devices within the IoT Security solution. | [optional] [readonly] 
**log_analytics_query** | **str** | Log analytics query for getting the list of affected devices/alerts. | [optional] [readonly] 
**recommendation_display_name** | **str** | Display name of the recommendation type. | [optional] [readonly] 
**recommendation_name** | **str** | Name of the recommendation. | [optional] 
**recommendation_type_id** | **str** | Recommendation-type GUID. | [optional] [readonly] 
**remediation_steps** | **str** | Recommended steps for remediation | [optional] [readonly] 
**reported_severity** | **str** | Assessed recommendation severity. | [optional] [readonly] 
**unhealthy_device_count** | **int** | Number of unhealthy devices within the IoT Security solution. | [optional] [readonly] 

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


