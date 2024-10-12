# ActiveIncidentInfo

Incidents contain the following fields (all should be considered optional)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_count** | **float** | The number of alerts received for this incident | [optional] 
**current_phase** | **str** | The current phase of the incident \&quot;resolved\&quot;, \&quot;triggered\&quot; or \&quot;acknowledged\&quot;. | [optional] 
**entity_id** | **str** | The unique identification of the entity being monitored that caused the incident | [optional] 
**host** | **str** | The host on which the incident occurred | [optional] 
**incident_number** | **str** | The VictorOps incident number | [optional] 
**last_alert_id** | **str** | The unique id of the last alert for the incident | [optional] 
**last_alert_time** | **str** | The time of the last alert received for the incident | [optional] 
**paged_policies** | [**List[EscalationPolicyInfo]**](EscalationPolicyInfo.md) | The escalation policies that were triggered for the incident | [optional] 
**paged_teams** | **List[str]** | The teams that were paged for the incident | [optional] 
**paged_users** | **List[str]** | The users that were paged for the incident. | [optional] 
**service** | **str** | The service name causing the incident (if any) | [optional] 
**start_time** | **str** | The time the incident started | [optional] 
**transitions** | [**List[IncidentTransition]**](IncidentTransition.md) | Transitions of the incident state over time | [optional] 

## Example

```python
from openapi_client.models.active_incident_info import ActiveIncidentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ActiveIncidentInfo from a JSON string
active_incident_info_instance = ActiveIncidentInfo.from_json(json)
# print the JSON string representation of the object
print(ActiveIncidentInfo.to_json())

# convert the object into a dict
active_incident_info_dict = active_incident_info_instance.to_dict()
# create an instance of ActiveIncidentInfo from a dict
active_incident_info_from_dict = ActiveIncidentInfo.from_dict(active_incident_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


