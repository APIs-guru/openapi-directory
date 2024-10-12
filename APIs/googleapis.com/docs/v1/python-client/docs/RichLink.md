# RichLink

A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rich_link_id** | **str** | Output only. The ID of this link. | [optional] [readonly] 
**rich_link_properties** | [**RichLinkProperties**](RichLinkProperties.md) |  | [optional] 
**suggested_deletion_ids** | **List[str]** | IDs for suggestions that remove this link from the document. A RichLink might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this person link isn&#39;t suggested for deletion. | [optional] 
**suggested_insertion_ids** | **List[str]** | IDs for suggestions that insert this link into the document. A RichLink might have multiple insertion IDs if it&#39;s a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this person link isn&#39;t a suggested insertion. | [optional] 
**suggested_text_style_changes** | [**Dict[str, SuggestedTextStyle]**](SuggestedTextStyle.md) | The suggested text style changes to this RichLink, keyed by suggestion ID. | [optional] 
**text_style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.rich_link import RichLink

# TODO update the JSON string below
json = "{}"
# create an instance of RichLink from a JSON string
rich_link_instance = RichLink.from_json(json)
# print the JSON string representation of the object
print(RichLink.to_json())

# convert the object into a dict
rich_link_dict = rich_link_instance.to_dict()
# create an instance of RichLink from a dict
rich_link_from_dict = RichLink.from_dict(rich_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


