# GoogleMapsPlacesV1SearchTextResponse

Response proto for SearchText. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**places** | [**List[GoogleMapsPlacesV1Place]**](GoogleMapsPlacesV1Place.md) | A list of places that meet the user&#39;s text search criteria. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_search_text_response import GoogleMapsPlacesV1SearchTextResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1SearchTextResponse from a JSON string
google_maps_places_v1_search_text_response_instance = GoogleMapsPlacesV1SearchTextResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1SearchTextResponse.to_json())

# convert the object into a dict
google_maps_places_v1_search_text_response_dict = google_maps_places_v1_search_text_response_instance.to_dict()
# create an instance of GoogleMapsPlacesV1SearchTextResponse from a dict
google_maps_places_v1_search_text_response_from_dict = GoogleMapsPlacesV1SearchTextResponse.from_dict(google_maps_places_v1_search_text_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


