# TeamDriveList

A list of Team Drives.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#teamDriveList\&quot;&#x60;. | [optional] [default to 'drive#teamDriveList']
**next_page_token** | **str** | The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. | [optional] 
**team_drives** | [**List[TeamDrive]**](TeamDrive.md) | The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. | [optional] 

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


