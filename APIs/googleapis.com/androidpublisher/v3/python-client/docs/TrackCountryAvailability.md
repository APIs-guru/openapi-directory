# TrackCountryAvailability

Resource for per-track country availability information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries** | [**List[TrackTargetedCountry]**](TrackTargetedCountry.md) | A list of one or more countries where artifacts in this track are available. This list includes all countries that are targeted by the track, even if only specific carriers are targeted in that country. | [optional] 
**rest_of_world** | **bool** | Whether artifacts in this track are available to \&quot;rest of the world\&quot; countries. | [optional] 
**sync_with_production** | **bool** | Whether this track&#39;s availability is synced with the default production track. See https://support.google.com/googleplay/android-developer/answer/7550024 for more information on syncing country availability with production. Note that if this is true, the returned \&quot;countries\&quot; and \&quot;rest_of_world\&quot; fields will reflect the values for the default production track. | [optional] 

## Example

```python
from openapi_client.models.track_country_availability import TrackCountryAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of TrackCountryAvailability from a JSON string
track_country_availability_instance = TrackCountryAvailability.from_json(json)
# print the JSON string representation of the object
print(TrackCountryAvailability.to_json())

# convert the object into a dict
track_country_availability_dict = track_country_availability_instance.to_dict()
# create an instance of TrackCountryAvailability from a dict
track_country_availability_from_dict = TrackCountryAvailability.from_dict(track_country_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


