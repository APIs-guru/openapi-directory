# ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrenceScheduleInner

Parameters for a schedule-based autoscale rule, consisting of an array of days + a time and capacity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **List[str]** | Days of the week for a schedule-based autoscale rule | [optional] 
**time_and_capacity** | [**ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrenceScheduleInnerTimeAndCapacity**](ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrenceScheduleInnerTimeAndCapacity.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_properties_compute_profile_roles_inner_autoscale_recurrence_schedule_inner import ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrenceScheduleInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrenceScheduleInner from a JSON string
application_properties_compute_profile_roles_inner_autoscale_recurrence_schedule_inner_instance = ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrenceScheduleInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrenceScheduleInner.to_json())

# convert the object into a dict
application_properties_compute_profile_roles_inner_autoscale_recurrence_schedule_inner_dict = application_properties_compute_profile_roles_inner_autoscale_recurrence_schedule_inner_instance.to_dict()
# create an instance of ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrenceScheduleInner from a dict
application_properties_compute_profile_roles_inner_autoscale_recurrence_schedule_inner_from_dict = ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrenceScheduleInner.from_dict(application_properties_compute_profile_roles_inner_autoscale_recurrence_schedule_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


