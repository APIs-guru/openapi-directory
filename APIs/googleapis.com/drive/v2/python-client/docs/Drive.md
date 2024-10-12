# Drive

Representation of a shared drive. Some resource methods (such as `drives.update`) require a `driveId`. Use the `drives.list` method to retrieve the ID for a shared drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_image_file** | [**DriveBackgroundImageFile**](DriveBackgroundImageFile.md) |  | [optional] 
**background_image_link** | **str** | Output only. A short-lived link to this shared drive&#39;s background image. | [optional] 
**capabilities** | [**DriveCapabilities**](DriveCapabilities.md) |  | [optional] 
**color_rgb** | **str** | The color of this shared drive as an RGB hex string. It can only be set on a &#x60;drive.drives.update&#x60; request that does not set &#x60;themeId&#x60;. | [optional] 
**created_date** | **datetime** | The time at which the shared drive was created (RFC 3339 date-time). | [optional] 
**hidden** | **bool** | Whether the shared drive is hidden from default view. | [optional] 
**id** | **str** | Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive. | [optional] 
**kind** | **str** | Output only. This is always &#x60;drive#drive&#x60; | [optional] [default to 'drive#drive']
**name** | **str** | The name of this shared drive. | [optional] 
**org_unit_id** | **str** | Output only. The organizational unit of this shared drive. This field is only populated on &#x60;drives.list&#x60; responses when the &#x60;useDomainAdminAccess&#x60; parameter is set to &#x60;true&#x60;. | [optional] 
**restrictions** | [**DriveRestrictions**](DriveRestrictions.md) |  | [optional] 
**theme_id** | **str** | The ID of the theme from which the background image and color will be set. The set of possible &#x60;driveThemes&#x60; can be retrieved from a &#x60;drive.about.get&#x60; response. When not specified on a &#x60;drive.drives.insert&#x60; request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don&#39;t set &#x60;colorRgb&#x60; or &#x60;backgroundImageFile&#x60;. | [optional] 

## Example

```python
from openapi_client.models.drive import Drive

# TODO update the JSON string below
json = "{}"
# create an instance of Drive from a JSON string
drive_instance = Drive.from_json(json)
# print the JSON string representation of the object
print(Drive.to_json())

# convert the object into a dict
drive_dict = drive_instance.to_dict()
# create an instance of Drive from a dict
drive_from_dict = Drive.from_dict(drive_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


