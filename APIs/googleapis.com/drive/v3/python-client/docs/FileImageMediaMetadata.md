# FileImageMediaMetadata

Output only. Additional metadata about image media, if available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aperture** | **float** | Output only. The aperture used to create the photo (f-number). | [optional] 
**camera_make** | **str** | Output only. The make of the camera used to create the photo. | [optional] 
**camera_model** | **str** | Output only. The model of the camera used to create the photo. | [optional] 
**color_space** | **str** | Output only. The color space of the photo. | [optional] 
**exposure_bias** | **float** | Output only. The exposure bias of the photo (APEX value). | [optional] 
**exposure_mode** | **str** | Output only. The exposure mode used to create the photo. | [optional] 
**exposure_time** | **float** | Output only. The length of the exposure, in seconds. | [optional] 
**flash_used** | **bool** | Output only. Whether a flash was used to create the photo. | [optional] 
**focal_length** | **float** | Output only. The focal length used to create the photo, in millimeters. | [optional] 
**height** | **int** | Output only. The height of the image in pixels. | [optional] 
**iso_speed** | **int** | Output only. The ISO speed used to create the photo. | [optional] 
**lens** | **str** | Output only. The lens used to create the photo. | [optional] 
**location** | [**FileImageMediaMetadataLocation**](FileImageMediaMetadataLocation.md) |  | [optional] 
**max_aperture_value** | **float** | Output only. The smallest f-number of the lens at the focal length used to create the photo (APEX value). | [optional] 
**metering_mode** | **str** | Output only. The metering mode used to create the photo. | [optional] 
**rotation** | **int** | Output only. The number of clockwise 90 degree rotations applied from the image&#39;s original orientation. | [optional] 
**sensor** | **str** | Output only. The type of sensor used to create the photo. | [optional] 
**subject_distance** | **int** | Output only. The distance to the subject of the photo, in meters. | [optional] 
**time** | **str** | Output only. The date and time the photo was taken (EXIF DateTime). | [optional] 
**white_balance** | **str** | Output only. The white balance mode used to create the photo. | [optional] 
**width** | **int** | Output only. The width of the image in pixels. | [optional] 

## Example

```python
from openapi_client.models.file_image_media_metadata import FileImageMediaMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of FileImageMediaMetadata from a JSON string
file_image_media_metadata_instance = FileImageMediaMetadata.from_json(json)
# print the JSON string representation of the object
print(FileImageMediaMetadata.to_json())

# convert the object into a dict
file_image_media_metadata_dict = file_image_media_metadata_instance.to_dict()
# create an instance of FileImageMediaMetadata from a dict
file_image_media_metadata_from_dict = FileImageMediaMetadata.from_dict(file_image_media_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


