# IncidentInfo

Incidents contain the following fields (all should be considered optional)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ack_time** | **str** | The time of the last acknowledgment of the incident | [optional] 
**ack_user** | [**AckUser**](AckUser.md) |  | [optional] 
**ack_user_id** | **str** | The VictorOps user id of the user that acknowledged the incident | [optional] 
**alert_count** | **float** | The number of alerts received for this incident | [optional] 
**current_phase** | **str** | The current phase of the incident \&quot;resolved\&quot;, \&quot;triggered\&quot; or \&quot;acknowledged\&quot;. | [optional] 
**end_time** | **str** | The time the incident ended | [optional] 
**entity_disp_name** | **str** | The display name of the entity causing the incident | [optional] 
**entity_id** | **str** | The unique identification of the entity being monitored that caused the incident | [optional] 
**entity_type** | **str** | The type of entity causing the incident (host/service) | [optional] 
**host** | **str** | The host on which the incident occurred | [optional] 
**incident_number** | **str** | The VictorOps incident number | [optional] 
**last_alert_id** | **str** | The unique id of the last alert for the incident | [optional] 
**last_alert_time** | **str** | The time of the last alert received for the incident | [optional] 
**service** | **str** | The service name causing the incident (if any) | [optional] 
**start_time** | **str** | The time the incident started | [optional] 
**teams** | **str** | The teams that were paged for the incident (comma separated). | [optional] 

## Example

```python
from openapi_client.models.incident_info import IncidentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IncidentInfo from a JSON string
incident_info_instance = IncidentInfo.from_json(json)
# print the JSON string representation of the object
print(IncidentInfo.to_json())

# convert the object into a dict
incident_info_dict = incident_info_instance.to_dict()
# create an instance of IncidentInfo from a dict
incident_info_from_dict = IncidentInfo.from_dict(incident_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


