# MemberSnippet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creator_channel_id** | **str** | The id of the channel that&#39;s offering memberships. | [optional] 
**member_details** | [**ChannelProfileDetails**](ChannelProfileDetails.md) |  | [optional] 
**memberships_details** | [**MembershipsDetails**](MembershipsDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.member_snippet import MemberSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of MemberSnippet from a JSON string
member_snippet_instance = MemberSnippet.from_json(json)
# print the JSON string representation of the object
print(MemberSnippet.to_json())

# convert the object into a dict
member_snippet_dict = member_snippet_instance.to_dict()
# create an instance of MemberSnippet from a dict
member_snippet_from_dict = MemberSnippet.from_dict(member_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


