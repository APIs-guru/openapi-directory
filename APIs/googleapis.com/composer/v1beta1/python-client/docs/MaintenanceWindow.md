# MaintenanceWindow

The configuration settings for Cloud Composer maintenance window. The following example: ``` { \"startTime\":\"2019-08-01T01:00:00Z\" \"endTime\":\"2019-08-01T07:00:00Z\" \"recurrence\":\"FREQ=WEEKLY;BYDAY=TU,WE\" } ``` would define a maintenance window between 01 and 07 hours UTC during each Tuesday and Wednesday.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Required. Maintenance window end time. It is used only to calculate the duration of the maintenance window. The value for end_time must be in the future, relative to &#x60;start_time&#x60;. | [optional] 
**recurrence** | **str** | Required. Maintenance window recurrence. Format is a subset of [RFC-5545](https://tools.ietf.org/html/rfc5545) &#x60;RRULE&#x60;. The only allowed values for &#x60;FREQ&#x60; field are &#x60;FREQ&#x3D;DAILY&#x60; and &#x60;FREQ&#x3D;WEEKLY;BYDAY&#x3D;...&#x60; Example values: &#x60;FREQ&#x3D;WEEKLY;BYDAY&#x3D;TU,WE&#x60;, &#x60;FREQ&#x3D;DAILY&#x60;. | [optional] 
**start_time** | **str** | Required. Start time of the first recurrence of the maintenance window. | [optional] 

## Example

```python
from openapi_client.models.maintenance_window import MaintenanceWindow

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenanceWindow from a JSON string
maintenance_window_instance = MaintenanceWindow.from_json(json)
# print the JSON string representation of the object
print(MaintenanceWindow.to_json())

# convert the object into a dict
maintenance_window_dict = maintenance_window_instance.to_dict()
# create an instance of MaintenanceWindow from a dict
maintenance_window_from_dict = MaintenanceWindow.from_dict(maintenance_window_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


