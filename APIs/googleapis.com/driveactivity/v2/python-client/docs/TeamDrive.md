# TeamDrive

This item is deprecated; please see `Drive` instead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | This field is deprecated; please see &#x60;Drive.name&#x60; instead. | [optional] 
**root** | [**DriveItem**](DriveItem.md) |  | [optional] 
**title** | **str** | This field is deprecated; please see &#x60;Drive.title&#x60; instead. | [optional] 

## Example

```python
from openapi_client.models.team_drive import TeamDrive

# TODO update the JSON string below
json = "{}"
# create an instance of TeamDrive from a JSON string
team_drive_instance = TeamDrive.from_json(json)
# print the JSON string representation of the object
print(TeamDrive.to_json())

# convert the object into a dict
team_drive_dict = team_drive_instance.to_dict()
# create an instance of TeamDrive from a dict
team_drive_from_dict = TeamDrive.from_dict(team_drive_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


