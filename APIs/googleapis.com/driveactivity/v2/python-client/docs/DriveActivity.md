# DriveActivity

A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[Action]**](Action.md) | Details on all actions in this activity. | [optional] 
**actors** | [**List[Actor]**](Actor.md) | All actor(s) responsible for the activity. | [optional] 
**primary_action_detail** | [**ActionDetail**](ActionDetail.md) |  | [optional] 
**targets** | [**List[Target]**](Target.md) | All Google Drive objects this activity is about (e.g. file, folder, drive). This represents the state of the target immediately after the actions occurred. | [optional] 
**time_range** | [**TimeRange**](TimeRange.md) |  | [optional] 
**timestamp** | **str** | The activity occurred at this specific time. | [optional] 

## Example

```python
from openapi_client.models.drive_activity import DriveActivity

# TODO update the JSON string below
json = "{}"
# create an instance of DriveActivity from a JSON string
drive_activity_instance = DriveActivity.from_json(json)
# print the JSON string representation of the object
print(DriveActivity.to_json())

# convert the object into a dict
drive_activity_dict = drive_activity_instance.to_dict()
# create an instance of DriveActivity from a dict
drive_activity_from_dict = DriveActivity.from_dict(drive_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


