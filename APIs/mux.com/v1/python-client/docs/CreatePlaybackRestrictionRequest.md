# CreatePlaybackRestrictionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referrer** | [**ReferrerDomainRestriction**](ReferrerDomainRestriction.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_playback_restriction_request import CreatePlaybackRestrictionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePlaybackRestrictionRequest from a JSON string
create_playback_restriction_request_instance = CreatePlaybackRestrictionRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePlaybackRestrictionRequest.to_json())

# convert the object into a dict
create_playback_restriction_request_dict = create_playback_restriction_request_instance.to_dict()
# create an instance of CreatePlaybackRestrictionRequest from a dict
create_playback_restriction_request_from_dict = CreatePlaybackRestrictionRequest.from_dict(create_playback_restriction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


