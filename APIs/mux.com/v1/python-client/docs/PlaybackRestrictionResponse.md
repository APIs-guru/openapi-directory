# PlaybackRestrictionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PlaybackRestriction**](PlaybackRestriction.md) |  | [optional] 

## Example

```python
from openapi_client.models.playback_restriction_response import PlaybackRestrictionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlaybackRestrictionResponse from a JSON string
playback_restriction_response_instance = PlaybackRestrictionResponse.from_json(json)
# print the JSON string representation of the object
print(PlaybackRestrictionResponse.to_json())

# convert the object into a dict
playback_restriction_response_dict = playback_restriction_response_instance.to_dict()
# create an instance of PlaybackRestrictionResponse from a dict
playback_restriction_response_from_dict = PlaybackRestrictionResponse.from_dict(playback_restriction_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


