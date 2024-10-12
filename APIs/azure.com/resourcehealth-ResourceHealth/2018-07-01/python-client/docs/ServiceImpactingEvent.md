# ServiceImpactingEvent

Lists the service impacting events that may be affecting the health of the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation_id** | **str** | Correlation id for the event | [optional] 
**event_start_time** | **datetime** | Timestamp for when the event started. | [optional] 
**event_status_last_modified_time** | **datetime** | Timestamp for when event was submitted/detected. | [optional] 
**incident_properties** | [**ServiceImpactingEventIncidentProperties**](ServiceImpactingEventIncidentProperties.md) |  | [optional] 
**status** | [**ServiceImpactingEventStatus**](ServiceImpactingEventStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_impacting_event import ServiceImpactingEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceImpactingEvent from a JSON string
service_impacting_event_instance = ServiceImpactingEvent.from_json(json)
# print the JSON string representation of the object
print(ServiceImpactingEvent.to_json())

# convert the object into a dict
service_impacting_event_dict = service_impacting_event_instance.to_dict()
# create an instance of ServiceImpactingEvent from a dict
service_impacting_event_from_dict = ServiceImpactingEvent.from_dict(service_impacting_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


