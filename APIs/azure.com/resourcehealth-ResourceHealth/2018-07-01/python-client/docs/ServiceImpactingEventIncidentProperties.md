# ServiceImpactingEventIncidentProperties

Properties of the service impacting event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incident_type** | **str** | Type of Event. | [optional] 
**region** | **str** | Region impacted by the event. | [optional] 
**service** | **str** | Service impacted by the event. | [optional] 
**title** | **str** | Title of the incident. | [optional] 

## Example

```python
from openapi_client.models.service_impacting_event_incident_properties import ServiceImpactingEventIncidentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceImpactingEventIncidentProperties from a JSON string
service_impacting_event_incident_properties_instance = ServiceImpactingEventIncidentProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceImpactingEventIncidentProperties.to_json())

# convert the object into a dict
service_impacting_event_incident_properties_dict = service_impacting_event_incident_properties_instance.to_dict()
# create an instance of ServiceImpactingEventIncidentProperties from a dict
service_impacting_event_incident_properties_from_dict = ServiceImpactingEventIncidentProperties.from_dict(service_impacting_event_incident_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


