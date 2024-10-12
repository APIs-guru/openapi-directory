# DriveBackgroundImageFile

An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of an image file in Google Drive to use for the background image. | [optional] 
**width** | **float** | The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high. | [optional] 
**x_coordinate** | **float** | The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image. | [optional] 
**y_coordinate** | **float** | The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image. | [optional] 

## Example

```python
from openapi_client.models.drive_background_image_file import DriveBackgroundImageFile

# TODO update the JSON string below
json = "{}"
# create an instance of DriveBackgroundImageFile from a JSON string
drive_background_image_file_instance = DriveBackgroundImageFile.from_json(json)
# print the JSON string representation of the object
print(DriveBackgroundImageFile.to_json())

# convert the object into a dict
drive_background_image_file_dict = drive_background_image_file_instance.to_dict()
# create an instance of DriveBackgroundImageFile from a dict
drive_background_image_file_from_dict = DriveBackgroundImageFile.from_dict(drive_background_image_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


