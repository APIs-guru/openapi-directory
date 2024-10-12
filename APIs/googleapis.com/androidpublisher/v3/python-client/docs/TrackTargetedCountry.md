# TrackTargetedCountry

Representation of a single country where the contents of a track are available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | The country to target, as a two-letter CLDR code. | [optional] 

## Example

```python
from openapi_client.models.track_targeted_country import TrackTargetedCountry

# TODO update the JSON string below
json = "{}"
# create an instance of TrackTargetedCountry from a JSON string
track_targeted_country_instance = TrackTargetedCountry.from_json(json)
# print the JSON string representation of the object
print(TrackTargetedCountry.to_json())

# convert the object into a dict
track_targeted_country_dict = track_targeted_country_instance.to_dict()
# create an instance of TrackTargetedCountry from a dict
track_targeted_country_from_dict = TrackTargetedCountry.from_dict(track_targeted_country_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


