# TeamDriveList

A list of Team Drives.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[TeamDrive]**](TeamDrive.md) | The list of Team Drives. | [optional] 
**kind** | **str** | This is always &#x60;drive#teamDriveList&#x60; | [optional] [default to 'drive#teamDriveList']
**next_page_token** | **str** | The page token for the next page of Team Drives. | [optional] 

## Example

```python
from openapi_client.models.team_drive_list import TeamDriveList

# TODO update the JSON string below
json = "{}"
# create an instance of TeamDriveList from a JSON string
team_drive_list_instance = TeamDriveList.from_json(json)
# print the JSON string representation of the object
print(TeamDriveList.to_json())

# convert the object into a dict
team_drive_list_dict = team_drive_list_instance.to_dict()
# create an instance of TeamDriveList from a dict
team_drive_list_from_dict = TeamDriveList.from_dict(team_drive_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


