# GoogleMapsPlacesV1PhotoMedia

A photo media from Places API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name of a photo media in the format: &#x60;places/{place_id}/photos/{photo_reference}/media&#x60;. | [optional] 
**photo_uri** | **str** | A short-lived uri that can be used to render the photo. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_photo_media import GoogleMapsPlacesV1PhotoMedia

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1PhotoMedia from a JSON string
google_maps_places_v1_photo_media_instance = GoogleMapsPlacesV1PhotoMedia.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1PhotoMedia.to_json())

# convert the object into a dict
google_maps_places_v1_photo_media_dict = google_maps_places_v1_photo_media_instance.to_dict()
# create an instance of GoogleMapsPlacesV1PhotoMedia from a dict
google_maps_places_v1_photo_media_from_dict = GoogleMapsPlacesV1PhotoMedia.from_dict(google_maps_places_v1_photo_media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


