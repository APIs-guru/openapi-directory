# TeamDrive

Deprecated: Use the `drive` collection instead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_image_file** | [**TeamDriveBackgroundImageFile**](TeamDriveBackgroundImageFile.md) |  | [optional] 
**background_image_link** | **str** | A short-lived link to this Team Drive&#39;s background image. | [optional] 
**capabilities** | [**TeamDriveCapabilities**](TeamDriveCapabilities.md) |  | [optional] 
**color_rgb** | **str** | The color of this Team Drive as an RGB hex string. It can only be set on a &#x60;drive.teamdrives.update&#x60; request that does not set &#x60;themeId&#x60;. | [optional] 
**created_date** | **datetime** | The time at which the Team Drive was created (RFC 3339 date-time). | [optional] 
**id** | **str** | The ID of this Team Drive which is also the ID of the top level folder of this Team Drive. | [optional] 
**kind** | **str** | This is always &#x60;drive#teamDrive&#x60; | [optional] [default to 'drive#teamDrive']
**name** | **str** | The name of this Team Drive. | [optional] 
**org_unit_id** | **str** | The organizational unit of this shared drive. This field is only populated on &#x60;drives.list&#x60; responses when the &#x60;useDomainAdminAccess&#x60; parameter is set to &#x60;true&#x60;. | [optional] 
**restrictions** | [**TeamDriveRestrictions**](TeamDriveRestrictions.md) |  | [optional] 
**theme_id** | **str** | The ID of the theme from which the background image and color will be set. The set of possible &#x60;teamDriveThemes&#x60; can be retrieved from a &#x60;drive.about.get&#x60; response. When not specified on a &#x60;drive.teamdrives.insert&#x60; request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don&#39;t set &#x60;colorRgb&#x60; or &#x60;backgroundImageFile&#x60;. | [optional] 

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


