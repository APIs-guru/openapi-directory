# Photo

Photo is used to store 360 photos along with photo metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capture_time** | **str** | Optional. Absolute time when the photo was captured. When the photo has no exif timestamp, this is used to set a timestamp in the photo metadata. | [optional] 
**connections** | [**List[Connection]**](Connection.md) | Optional. Connections to other photos. A connection represents the link from this photo to another photo. | [optional] 
**download_url** | **str** | Output only. The download URL for the photo bytes. This field is set only when GetPhotoRequest.view is set to PhotoView.INCLUDE_DOWNLOAD_URL. | [optional] [readonly] 
**maps_publish_status** | **str** | Output only. Status in Google Maps, whether this photo was published or rejected. | [optional] [readonly] 
**photo_id** | [**PhotoId**](PhotoId.md) |  | [optional] 
**places** | [**List[Place]**](Place.md) | Optional. Places where this photo belongs. | [optional] 
**pose** | [**Pose**](Pose.md) |  | [optional] 
**share_link** | **str** | Output only. The share link for the photo. | [optional] [readonly] 
**thumbnail_url** | **str** | Output only. The thumbnail URL for showing a preview of the given photo. | [optional] [readonly] 
**transfer_status** | **str** | Output only. Status of rights transfer on this photo. | [optional] [readonly] 
**upload_reference** | [**UploadRef**](UploadRef.md) |  | [optional] 
**upload_time** | **str** | Output only. Time when the image was uploaded. | [optional] [readonly] 
**view_count** | **str** | Output only. View count of the photo. | [optional] [readonly] 

## Example

```python
from openapi_client.models.photo import Photo

# TODO update the JSON string below
json = "{}"
# create an instance of Photo from a JSON string
photo_instance = Photo.from_json(json)
# print the JSON string representation of the object
print(Photo.to_json())

# convert the object into a dict
photo_dict = photo_instance.to_dict()
# create an instance of Photo from a dict
photo_from_dict = Photo.from_dict(photo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


