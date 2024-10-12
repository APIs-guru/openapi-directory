# GoogleMapsPlacesV1Review

Information about a review of a place.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_attribution** | [**GoogleMapsPlacesV1AuthorAttribution**](GoogleMapsPlacesV1AuthorAttribution.md) |  | [optional] 
**name** | **str** | A reference representing this place review which may be used to look up this place review again (also called the API \&quot;resource\&quot; name: &#x60;places/{place_id}/reviews/{review}&#x60;). | [optional] 
**original_text** | [**GoogleTypeLocalizedText**](GoogleTypeLocalizedText.md) |  | [optional] 
**publish_time** | **str** | Timestamp for the review. | [optional] 
**rating** | **float** | A number between 1.0 and 5.0, also called the number of stars. | [optional] 
**relative_publish_time_description** | **str** | A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country. | [optional] 
**text** | [**GoogleTypeLocalizedText**](GoogleTypeLocalizedText.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_review import GoogleMapsPlacesV1Review

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1Review from a JSON string
google_maps_places_v1_review_instance = GoogleMapsPlacesV1Review.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1Review.to_json())

# convert the object into a dict
google_maps_places_v1_review_dict = google_maps_places_v1_review_instance.to_dict()
# create an instance of GoogleMapsPlacesV1Review from a dict
google_maps_places_v1_review_from_dict = GoogleMapsPlacesV1Review.from_dict(google_maps_places_v1_review_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


