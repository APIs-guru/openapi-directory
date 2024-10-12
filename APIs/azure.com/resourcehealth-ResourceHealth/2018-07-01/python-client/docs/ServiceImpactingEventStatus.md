# ServiceImpactingEventStatus

Status of the service impacting event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Current status of the event | [optional] 

## Example

```python
from openapi_client.models.service_impacting_event_status import ServiceImpactingEventStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceImpactingEventStatus from a JSON string
service_impacting_event_status_instance = ServiceImpactingEventStatus.from_json(json)
# print the JSON string representation of the object
print(ServiceImpactingEventStatus.to_json())

# convert the object into a dict
service_impacting_event_status_dict = service_impacting_event_status_instance.to_dict()
# create an instance of ServiceImpactingEventStatus from a dict
service_impacting_event_status_from_dict = ServiceImpactingEventStatus.from_dict(service_impacting_event_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


