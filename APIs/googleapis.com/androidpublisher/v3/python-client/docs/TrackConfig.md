# TrackConfig

Configurations of the new track.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_factor** | **str** | Required. Form factor of the new track. Defaults to the default track. | [optional] 
**track** | **str** | Required. Identifier of the new track. For default tracks, this field consists of the track alias only. Form factor tracks have a special prefix as an identifier, for example &#x60;wear:production&#x60;, &#x60;automotive:production&#x60;. This prefix must match the value of the &#x60;form_factor&#x60; field, if it is not a default track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) | [optional] 
**type** | **str** | Required. Type of the new track. Currently, the only supported value is closedTesting. | [optional] 

## Example

```python
from openapi_client.models.track_config import TrackConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TrackConfig from a JSON string
track_config_instance = TrackConfig.from_json(json)
# print the JSON string representation of the object
print(TrackConfig.to_json())

# convert the object into a dict
track_config_dict = track_config_instance.to_dict()
# create an instance of TrackConfig from a dict
track_config_from_dict = TrackConfig.from_dict(track_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


