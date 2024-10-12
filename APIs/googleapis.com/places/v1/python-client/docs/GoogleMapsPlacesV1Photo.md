# GoogleMapsPlacesV1Photo

Information about a photo of a place.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_attributions** | [**List[GoogleMapsPlacesV1AuthorAttribution]**](GoogleMapsPlacesV1AuthorAttribution.md) | This photo&#39;s authors. | [optional] 
**height_px** | **int** | The maximum available height, in pixels. | [optional] 
**name** | **str** | Identifier. A reference representing this place photo which may be used to look up this place photo again (also called the API \&quot;resource\&quot; name: &#x60;places/{place_id}/photos/{photo}&#x60;). | [optional] 
**width_px** | **int** | The maximum available width, in pixels. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_photo import GoogleMapsPlacesV1Photo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1Photo from a JSON string
google_maps_places_v1_photo_instance = GoogleMapsPlacesV1Photo.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1Photo.to_json())

# convert the object into a dict
google_maps_places_v1_photo_dict = google_maps_places_v1_photo_instance.to_dict()
# create an instance of GoogleMapsPlacesV1Photo from a dict
google_maps_places_v1_photo_from_dict = GoogleMapsPlacesV1Photo.from_dict(google_maps_places_v1_photo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


