# FileImageMediaMetadataLocation

Output only. Geographic location information stored in the image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**altitude** | **float** | Output only. The altitude stored in the image. | [optional] 
**latitude** | **float** | Output only. The latitude stored in the image. | [optional] 
**longitude** | **float** | Output only. The longitude stored in the image. | [optional] 

## Example

```python
from openapi_client.models.file_image_media_metadata_location import FileImageMediaMetadataLocation

# TODO update the JSON string below
json = "{}"
# create an instance of FileImageMediaMetadataLocation from a JSON string
file_image_media_metadata_location_instance = FileImageMediaMetadataLocation.from_json(json)
# print the JSON string representation of the object
print(FileImageMediaMetadataLocation.to_json())

# convert the object into a dict
file_image_media_metadata_location_dict = file_image_media_metadata_location_instance.to_dict()
# create an instance of FileImageMediaMetadataLocation from a dict
file_image_media_metadata_location_from_dict = FileImageMediaMetadataLocation.from_dict(file_image_media_metadata_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


