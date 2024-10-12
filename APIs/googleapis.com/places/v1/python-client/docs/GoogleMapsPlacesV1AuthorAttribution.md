# GoogleMapsPlacesV1AuthorAttribution

Information about the author of the UGC data. Used in Photo, and Review.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of the author of the Photo or Review. | [optional] 
**photo_uri** | **str** | Profile photo URI of the author of the Photo or Review. | [optional] 
**uri** | **str** | URI of the author of the Photo or Review. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_author_attribution import GoogleMapsPlacesV1AuthorAttribution

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1AuthorAttribution from a JSON string
google_maps_places_v1_author_attribution_instance = GoogleMapsPlacesV1AuthorAttribution.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1AuthorAttribution.to_json())

# convert the object into a dict
google_maps_places_v1_author_attribution_dict = google_maps_places_v1_author_attribution_instance.to_dict()
# create an instance of GoogleMapsPlacesV1AuthorAttribution from a dict
google_maps_places_v1_author_attribution_from_dict = GoogleMapsPlacesV1AuthorAttribution.from_dict(google_maps_places_v1_author_attribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


