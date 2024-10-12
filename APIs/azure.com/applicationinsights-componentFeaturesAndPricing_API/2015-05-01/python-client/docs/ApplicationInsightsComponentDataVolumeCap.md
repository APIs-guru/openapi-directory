# ApplicationInsightsComponentDataVolumeCap

An Application Insights component daily data volume cap

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cap** | **float** | Daily data volume cap in GB. | [optional] 
**max_history_cap** | **float** | Maximum daily data volume cap that the user can set for this component. | [optional] [readonly] 
**reset_time** | **int** | Daily data volume cap UTC reset hour. | [optional] [readonly] 
**stop_send_notification_when_hit_cap** | **bool** | Do not send a notification email when the daily data volume cap is met. | [optional] 
**stop_send_notification_when_hit_threshold** | **bool** | Reserved, not used for now. | [optional] 
**warning_threshold** | **int** | Reserved, not used for now. | [optional] 

## Example

```python
from openapi_client.models.application_insights_component_data_volume_cap import ApplicationInsightsComponentDataVolumeCap

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentDataVolumeCap from a JSON string
application_insights_component_data_volume_cap_instance = ApplicationInsightsComponentDataVolumeCap.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentDataVolumeCap.to_json())

# convert the object into a dict
application_insights_component_data_volume_cap_dict = application_insights_component_data_volume_cap_instance.to_dict()
# create an instance of ApplicationInsightsComponentDataVolumeCap from a dict
application_insights_component_data_volume_cap_from_dict = ApplicationInsightsComponentDataVolumeCap.from_dict(application_insights_component_data_volume_cap_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


