# MembershipsLevel

A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube assigns to uniquely identify the memberships level. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#membershipsLevelListResponse\&quot;. | [optional] [default to 'youtube#membershipsLevel']
**snippet** | [**MembershipsLevelSnippet**](MembershipsLevelSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.memberships_level import MembershipsLevel

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipsLevel from a JSON string
memberships_level_instance = MembershipsLevel.from_json(json)
# print the JSON string representation of the object
print(MembershipsLevel.to_json())

# convert the object into a dict
memberships_level_dict = memberships_level_instance.to_dict()
# create an instance of MembershipsLevel from a dict
memberships_level_from_dict = MembershipsLevel.from_dict(memberships_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


