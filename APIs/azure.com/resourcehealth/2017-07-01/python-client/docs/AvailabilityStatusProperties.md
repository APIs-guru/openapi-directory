# AvailabilityStatusProperties

Properties of availability state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_state** | **str** | Availability status of the resource. When it is null, this availabilityStatus object represents an availability impacting event | [optional] 
**detailed_status** | **str** | Details of the availability status. | [optional] 
**health_event_category** | **str** | In case of an availability impacting event, it describes the category of a PlatformInitiated health impacting event. Examples are Planned, Unplanned etc. | [optional] 
**health_event_cause** | **str** | In case of an availability impacting event, it describes where the health impacting event was originated. Examples are PlatformInitiated, UserInitiated etc. | [optional] 
**health_event_id** | **str** | It is a unique Id that identifies the event | [optional] 
**health_event_type** | **str** | In case of an availability impacting event, it describes when the health impacting event was originated. Examples are Lifecycle, Downtime, Fault Analysis etc. | [optional] 
**occured_time** | **datetime** | Timestamp for when last change in health status occurred. | [optional] 
**reason_chronicity** | **str** | Chronicity of the availability transition. | [optional] 
**reason_type** | **str** | When the resource&#39;s availabilityState is Unavailable, it describes where the health impacting event was originated. Examples are planned, unplanned, user initiated or an outage etc. | [optional] 
**recently_resolved_state** | [**AvailabilityStatusPropertiesRecentlyResolvedState**](AvailabilityStatusPropertiesRecentlyResolvedState.md) |  | [optional] 
**recommended_actions** | [**List[RecommendedAction]**](RecommendedAction.md) | Lists actions the user can take based on the current availabilityState of the resource. | [optional] 
**reported_time** | **datetime** | Timestamp for when the health was last checked.  | [optional] 
**resolution_eta** | **datetime** | When the resource&#39;s availabilityState is Unavailable and the reasonType is not User Initiated, it provides the date and time for when the issue is expected to be resolved. | [optional] 
**root_cause_attribution_time** | **datetime** | When the resource&#39;s availabilityState is Unavailable, it provides the Timestamp for when the health impacting event was received. | [optional] 
**service_impacting_events** | [**List[ServiceImpactingEvent]**](ServiceImpactingEvent.md) | Lists the service impacting events that may be affecting the health of the resource. | [optional] 
**summary** | **str** | Summary description of the availability status. | [optional] 

## Example

```python
from openapi_client.models.availability_status_properties import AvailabilityStatusProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityStatusProperties from a JSON string
availability_status_properties_instance = AvailabilityStatusProperties.from_json(json)
# print the JSON string representation of the object
print(AvailabilityStatusProperties.to_json())

# convert the object into a dict
availability_status_properties_dict = availability_status_properties_instance.to_dict()
# create an instance of AvailabilityStatusProperties from a dict
availability_status_properties_from_dict = AvailabilityStatusProperties.from_dict(availability_status_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


