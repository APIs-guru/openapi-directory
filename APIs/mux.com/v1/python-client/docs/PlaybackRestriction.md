# PlaybackRestriction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). | [optional] 
**id** | **str** | Unique identifier for the Playback Restriction. Max 255 characters. | [optional] 
**referrer** | [**ReferrerDomainRestriction**](ReferrerDomainRestriction.md) |  | [optional] 
**updated_at** | **str** | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). | [optional] 

## Example

```python
from openapi_client.models.playback_restriction import PlaybackRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of PlaybackRestriction from a JSON string
playback_restriction_instance = PlaybackRestriction.from_json(json)
# print the JSON string representation of the object
print(PlaybackRestriction.to_json())

# convert the object into a dict
playback_restriction_dict = playback_restriction_instance.to_dict()
# create an instance of PlaybackRestriction from a dict
playback_restriction_from_dict = PlaybackRestriction.from_dict(playback_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


