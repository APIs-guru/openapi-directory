# Incident

An alert incident indicates the activation status of an alert rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activated_time** | **datetime** | The time at which the incident was activated in ISO8601 format. | [optional] [readonly] 
**is_active** | **bool** | A boolean to indicate whether the incident is active or resolved. | [optional] [readonly] 
**name** | **str** | Incident name. | [optional] [readonly] 
**resolved_time** | **datetime** | The time at which the incident was resolved in ISO8601 format. If null, it means the incident is still active. | [optional] [readonly] 
**rule_name** | **str** | Rule name that is associated with the incident. | [optional] [readonly] 

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


