# FollowersMetadata

Follower metadata for a location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Total number of followers for the location. | [optional] 
**name** | **str** | The resource name for this. accounts/{account_id}/locations/{location_id}/followers/metadata | [optional] 

## Example

```python
from openapi_client.models.followers_metadata import FollowersMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of FollowersMetadata from a JSON string
followers_metadata_instance = FollowersMetadata.from_json(json)
# print the JSON string representation of the object
print(FollowersMetadata.to_json())

# convert the object into a dict
followers_metadata_dict = followers_metadata_instance.to_dict()
# create an instance of FollowersMetadata from a dict
followers_metadata_from_dict = FollowersMetadata.from_dict(followers_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


