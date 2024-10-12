# IncidentTransition

A transition of incident state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_id** | **str** | The unique alert ID that caused the transition | [optional] 
**alert_url** | **str** | A URL to retrieve the details of the alert that caused the transition | [optional] 
**at** | **str** | The time of the transition | [optional] 
**by** | **str** | The user that caused the transition (if any) | [optional] 
**manually** | **bool** | If the incident transition was caused by a person | [optional] 
**message** | **str** | The message entered by that user (if any) | [optional] 
**name** | **str** | The transition name | [optional] 

## Example

```python
from openapi_client.models.incident_transition import IncidentTransition

# TODO update the JSON string below
json = "{}"
# create an instance of IncidentTransition from a JSON string
incident_transition_instance = IncidentTransition.from_json(json)
# print the JSON string representation of the object
print(IncidentTransition.to_json())

# convert the object into a dict
incident_transition_dict = incident_transition_instance.to_dict()
# create an instance of IncidentTransition from a dict
incident_transition_from_dict = IncidentTransition.from_dict(incident_transition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


