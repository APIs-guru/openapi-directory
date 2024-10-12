# GoogleMapsPlayablelocationsV3Impression

Encapsulates impression event details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_object_type** | **int** | An arbitrary, developer-defined type identifier for each type of game object used in your game. Since players interact with differ types of game objects in different ways, this field allows you to segregate impression data by type for analysis. You should assign a unique &#x60;game_object_type&#x60; ID to represent a distinct type of game object in your game. For example, 1&#x3D;monster location, 2&#x3D;powerup location. | [optional] 
**impression_type** | **str** | Required. The type of impression event. | [optional] 
**location_name** | **str** | Required. The name of the playable location. | [optional] 

## Example

```python
from openapi_client.models.google_maps_playablelocations_v3_impression import GoogleMapsPlayablelocationsV3Impression

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlayablelocationsV3Impression from a JSON string
google_maps_playablelocations_v3_impression_instance = GoogleMapsPlayablelocationsV3Impression.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlayablelocationsV3Impression.to_json())

# convert the object into a dict
google_maps_playablelocations_v3_impression_dict = google_maps_playablelocations_v3_impression_instance.to_dict()
# create an instance of GoogleMapsPlayablelocationsV3Impression from a dict
google_maps_playablelocations_v3_impression_from_dict = GoogleMapsPlayablelocationsV3Impression.from_dict(google_maps_playablelocations_v3_impression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


