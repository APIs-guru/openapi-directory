# DayAndTimeAssignedTargetingOptionDetails

Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week** | **str** | Required. The day of the week for this day and time targeting setting. | [optional] 
**end_hour** | **int** | Required. The end hour for day and time targeting. Must be between 1 (1 hour after start of day) and 24 (end of day). | [optional] 
**start_hour** | **int** | Required. The start hour for day and time targeting. Must be between 0 (start of day) and 23 (1 hour before end of day). | [optional] 
**time_zone_resolution** | **str** | Required. The mechanism used to determine which timezone to use for this day and time targeting setting. | [optional] 

## Example

```python
from openapi_client.models.day_and_time_assigned_targeting_option_details import DayAndTimeAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DayAndTimeAssignedTargetingOptionDetails from a JSON string
day_and_time_assigned_targeting_option_details_instance = DayAndTimeAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(DayAndTimeAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
day_and_time_assigned_targeting_option_details_dict = day_and_time_assigned_targeting_option_details_instance.to_dict()
# create an instance of DayAndTimeAssignedTargetingOptionDetails from a dict
day_and_time_assigned_targeting_option_details_from_dict = DayAndTimeAssignedTargetingOptionDetails.from_dict(day_and_time_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


