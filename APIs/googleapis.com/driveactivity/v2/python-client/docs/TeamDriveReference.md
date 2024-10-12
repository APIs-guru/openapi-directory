# TeamDriveReference

This item is deprecated; please see `DriveReference` instead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | This field is deprecated; please see &#x60;DriveReference.name&#x60; instead. | [optional] 
**title** | **str** | This field is deprecated; please see &#x60;DriveReference.title&#x60; instead. | [optional] 

## Example

```python
from openapi_client.models.team_drive_reference import TeamDriveReference

# TODO update the JSON string below
json = "{}"
# create an instance of TeamDriveReference from a JSON string
team_drive_reference_instance = TeamDriveReference.from_json(json)
# print the JSON string representation of the object
print(TeamDriveReference.to_json())

# convert the object into a dict
team_drive_reference_dict = team_drive_reference_instance.to_dict()
# create an instance of TeamDriveReference from a dict
team_drive_reference_from_dict = TeamDriveReference.from_dict(team_drive_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


