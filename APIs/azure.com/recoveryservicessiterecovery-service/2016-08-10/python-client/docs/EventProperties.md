# EventProperties

The properties of a monitoring event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_object_friendly_name** | **str** | The friendly name of the source of the event on which it is raised (for example, VM, VMM etc). | [optional] 
**description** | **str** | The event name. | [optional] 
**event_code** | **str** | The Id of the monitoring event. | [optional] 
**event_specific_details** | [**EventSpecificDetails**](EventSpecificDetails.md) |  | [optional] 
**event_type** | **str** | The type of the event. for example: VM Health, Server Health, Job Failure etc. | [optional] 
**fabric_id** | **str** | The ARM ID of the fabric. | [optional] 
**health_errors** | [**List[HealthError]**](HealthError.md) | The list of errors / warnings capturing details associated with the issue(s). | [optional] 
**provider_specific_details** | [**EventProviderSpecificDetails**](EventProviderSpecificDetails.md) |  | [optional] 
**severity** | **str** | The severity of the event. | [optional] 
**time_of_occurrence** | **datetime** | The time of occurrence of the event. | [optional] 

## Example

```python
from openapi_client.models.event_properties import EventProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventProperties from a JSON string
event_properties_instance = EventProperties.from_json(json)
# print the JSON string representation of the object
print(EventProperties.to_json())

# convert the object into a dict
event_properties_dict = event_properties_instance.to_dict()
# create an instance of EventProperties from a dict
event_properties_from_dict = EventProperties.from_dict(event_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


