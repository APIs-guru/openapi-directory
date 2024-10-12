# ListPlaybackRestrictionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PlaybackRestriction]**](PlaybackRestriction.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_playback_restrictions_response import ListPlaybackRestrictionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPlaybackRestrictionsResponse from a JSON string
list_playback_restrictions_response_instance = ListPlaybackRestrictionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPlaybackRestrictionsResponse.to_json())

# convert the object into a dict
list_playback_restrictions_response_dict = list_playback_restrictions_response_instance.to_dict()
# create an instance of ListPlaybackRestrictionsResponse from a dict
list_playback_restrictions_response_from_dict = ListPlaybackRestrictionsResponse.from_dict(list_playback_restrictions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


