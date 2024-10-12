# Target

Information about the target of activity. For more information on how activity history is shared with users, see [Activity history visibility](https://developers.google.com/drive/activity/v2#activityhistory).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive** | [**Drive**](Drive.md) |  | [optional] 
**drive_item** | [**DriveItem**](DriveItem.md) |  | [optional] 
**file_comment** | [**FileComment**](FileComment.md) |  | [optional] 
**team_drive** | [**TeamDrive**](TeamDrive.md) |  | [optional] 

## Example

```python
from openapi_client.models.target import Target

# TODO update the JSON string below
json = "{}"
# create an instance of Target from a JSON string
target_instance = Target.from_json(json)
# print the JSON string representation of the object
print(Target.to_json())

# convert the object into a dict
target_dict = target_instance.to_dict()
# create an instance of Target from a dict
target_from_dict = Target.from_dict(target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


