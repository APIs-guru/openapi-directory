# UpdatePhotoRequest

Request to update the metadata of a Photo. Updating the pixels of a photo is not supported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**photo** | [**Photo**](Photo.md) |  | [optional] 
**update_mask** | **str** | Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * &#x60;pose.heading&#x60; * &#x60;pose.lat_lng_pair&#x60; * &#x60;pose.pitch&#x60; * &#x60;pose.roll&#x60; * &#x60;pose.level&#x60; * &#x60;pose.altitude&#x60; * &#x60;connections&#x60; * &#x60;places&#x60; &gt; Note: When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains &#x60;connections&#x60; and &#x60;UpdatePhotoRequest.photo.connections&#x60; is empty, all connections are removed. | [optional] 

## Example

```python
from openapi_client.models.update_photo_request import UpdatePhotoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePhotoRequest from a JSON string
update_photo_request_instance = UpdatePhotoRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePhotoRequest.to_json())

# convert the object into a dict
update_photo_request_dict = update_photo_request_instance.to_dict()
# create an instance of UpdatePhotoRequest from a dict
update_photo_request_from_dict = UpdatePhotoRequest.from_dict(update_photo_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


