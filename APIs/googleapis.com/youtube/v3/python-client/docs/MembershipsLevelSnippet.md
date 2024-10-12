# MembershipsLevelSnippet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creator_channel_id** | **str** | The id of the channel that&#39;s offering channel memberships. | [optional] 
**level_details** | [**LevelDetails**](LevelDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.memberships_level_snippet import MembershipsLevelSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipsLevelSnippet from a JSON string
memberships_level_snippet_instance = MembershipsLevelSnippet.from_json(json)
# print the JSON string representation of the object
print(MembershipsLevelSnippet.to_json())

# convert the object into a dict
memberships_level_snippet_dict = memberships_level_snippet_instance.to_dict()
# create an instance of MembershipsLevelSnippet from a dict
memberships_level_snippet_from_dict = MembershipsLevelSnippet.from_dict(memberships_level_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


