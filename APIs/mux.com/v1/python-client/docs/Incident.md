# Incident


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_views** | **int** |  | [optional] 
**affected_views_per_hour** | **int** |  | [optional] 
**affected_views_per_hour_on_open** | **int** |  | [optional] 
**breakdowns** | [**List[IncidentBreakdown]**](IncidentBreakdown.md) |  | [optional] 
**description** | **str** |  | [optional] 
**error_description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**impact** | **str** |  | [optional] 
**incident_key** | **str** |  | [optional] 
**measured_value** | **float** |  | [optional] 
**measured_value_on_close** | **float** |  | [optional] 
**measurement** | **str** |  | [optional] 
**notification_rules** | [**List[IncidentNotificationRule]**](IncidentNotificationRule.md) |  | [optional] 
**notifications** | [**List[IncidentNotification]**](IncidentNotification.md) |  | [optional] 
**resolved_at** | **str** |  | [optional] 
**sample_size** | **int** |  | [optional] 
**sample_size_unit** | **str** |  | [optional] 
**severity** | **str** |  | [optional] 
**started_at** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**threshold** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.incident import Incident

# TODO update the JSON string below
json = "{}"
# create an instance of Incident from a JSON string
incident_instance = Incident.from_json(json)
# print the JSON string representation of the object
print(Incident.to_json())

# convert the object into a dict
incident_dict = incident_instance.to_dict()
# create an instance of Incident from a dict
incident_from_dict = Incident.from_dict(incident_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


