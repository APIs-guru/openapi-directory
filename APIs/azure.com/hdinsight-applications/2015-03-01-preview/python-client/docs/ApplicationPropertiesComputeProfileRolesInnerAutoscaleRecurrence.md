# ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrence

Schedule-based autoscale request parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | [**List[ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrenceScheduleInner]**](ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrenceScheduleInner.md) | Array of schedule-based autoscale rules | [optional] 
**time_zone** | **str** | The time zone for the autoscale schedule times | [optional] 

## Example

```python
from openapi_client.models.application_properties_compute_profile_roles_inner_autoscale_recurrence import ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrence

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrence from a JSON string
application_properties_compute_profile_roles_inner_autoscale_recurrence_instance = ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrence.from_json(json)
# print the JSON string representation of the object
print(ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrence.to_json())

# convert the object into a dict
application_properties_compute_profile_roles_inner_autoscale_recurrence_dict = application_properties_compute_profile_roles_inner_autoscale_recurrence_instance.to_dict()
# create an instance of ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrence from a dict
application_properties_compute_profile_roles_inner_autoscale_recurrence_from_dict = ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrence.from_dict(application_properties_compute_profile_roles_inner_autoscale_recurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


