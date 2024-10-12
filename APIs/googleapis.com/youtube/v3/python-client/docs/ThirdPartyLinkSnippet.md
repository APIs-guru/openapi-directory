# ThirdPartyLinkSnippet

Basic information about a third party account link, including its type and type-specific information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_to_store_link** | [**ChannelToStoreLinkDetails**](ChannelToStoreLinkDetails.md) |  | [optional] 
**type** | **str** | Type of the link named after the entities that are being linked. | [optional] 

## Example

```python
from openapi_client.models.third_party_link_snippet import ThirdPartyLinkSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyLinkSnippet from a JSON string
third_party_link_snippet_instance = ThirdPartyLinkSnippet.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyLinkSnippet.to_json())

# convert the object into a dict
third_party_link_snippet_dict = third_party_link_snippet_instance.to_dict()
# create an instance of ThirdPartyLinkSnippet from a dict
third_party_link_snippet_from_dict = ThirdPartyLinkSnippet.from_dict(third_party_link_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


