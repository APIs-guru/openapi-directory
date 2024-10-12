# TeamDriveInfo

Team Drives to search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_drive_ids** | **List[str]** | List of Team Drive IDs, as provided by the [Drive API](https://developers.google.com/drive). | [optional] 

## Example

```python
from openapi_client.models.team_drive_info import TeamDriveInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TeamDriveInfo from a JSON string
team_drive_info_instance = TeamDriveInfo.from_json(json)
# print the JSON string representation of the object
print(TeamDriveInfo.to_json())

# convert the object into a dict
team_drive_info_dict = team_drive_info_instance.to_dict()
# create an instance of TeamDriveInfo from a dict
team_drive_info_from_dict = TeamDriveInfo.from_dict(team_drive_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


