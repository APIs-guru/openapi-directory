# AnnouncementReaction

Represents an emoji reaction to an Announcement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The total number of users who have added this reaction. | [optional] 
**me** | **bool** | Whether the authorized user has added this reaction to the announcement. | [optional] 
**name** | **str** | The emoji used for the reaction. Either a unicode emoji, or a custom emoji&#39;s shortcode. | [optional] 
**static_url** | **str** | A link to a non-animated version of the custom emoji (URL). | [optional] 
**url** | **str** | A link to the custom emoji (URL). | [optional] 

## Example

```python
from openapi_client.models.announcement_reaction import AnnouncementReaction

# TODO update the JSON string below
json = "{}"
# create an instance of AnnouncementReaction from a JSON string
announcement_reaction_instance = AnnouncementReaction.from_json(json)
# print the JSON string representation of the object
print(AnnouncementReaction.to_json())

# convert the object into a dict
announcement_reaction_dict = announcement_reaction_instance.to_dict()
# create an instance of AnnouncementReaction from a dict
announcement_reaction_from_dict = AnnouncementReaction.from_dict(announcement_reaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


