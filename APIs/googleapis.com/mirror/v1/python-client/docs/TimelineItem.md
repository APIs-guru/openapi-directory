# TimelineItem

Each item in the user's timeline is represented as a TimelineItem JSON structure, described below.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) | A list of media attachments associated with this item. As a convenience, you can refer to attachments in your HTML payloads with the attachment or cid scheme. For example:   - attachment: &lt;img src&#x3D;\&quot;attachment:attachment_index\&quot;&gt; where attachment_index is the 0-based index of this array.  - cid: &lt;img src&#x3D;\&quot;cid:attachment_id\&quot;&gt; where attachment_id is the ID of the attachment. | [optional] 
**bundle_id** | **str** | The bundle ID for this item. Services can specify a bundleId to group many items together. They appear under a single top-level item on the device. | [optional] 
**canonical_url** | **str** | A canonical URL pointing to the canonical/high quality version of the data represented by the timeline item. | [optional] 
**created** | **datetime** | The time at which this item was created, formatted according to RFC 3339. | [optional] 
**creator** | [**Contact**](Contact.md) |  | [optional] 
**display_time** | **datetime** | The time that should be displayed when this item is viewed in the timeline, formatted according to RFC 3339. This user&#39;s timeline is sorted chronologically on display time, so this will also determine where the item is displayed in the timeline. If not set by the service, the display time defaults to the updated time. | [optional] 
**etag** | **str** | ETag for this item. | [optional] 
**html** | **str** | HTML content for this item. If both text and html are provided for an item, the html will be rendered in the timeline. Allowed HTML elements - You can use these elements in your timeline cards.   - Headers: h1, h2, h3, h4, h5, h6  - Images: img  - Lists: li, ol, ul  - HTML5 semantics: article, aside, details, figure, figcaption, footer, header, nav, section, summary, time  - Structural: blockquote, br, div, hr, p, span  - Style: b, big, center, em, i, u, s, small, strike, strong, style, sub, sup  - Tables: table, tbody, td, tfoot, th, thead, tr   Blocked HTML elements: These elements and their contents are removed from HTML payloads.   - Document headers: head, title  - Embeds: audio, embed, object, source, video  - Frames: frame, frameset  - Scripting: applet, script   Other elements: Any elements that aren&#39;t listed are removed, but their contents are preserved. | [optional] 
**id** | **str** | The ID of the timeline item. This is unique within a user&#39;s timeline. | [optional] 
**in_reply_to** | **str** | If this item was generated as a reply to another item, this field will be set to the ID of the item being replied to. This can be used to attach a reply to the appropriate conversation or post. | [optional] 
**is_bundle_cover** | **bool** | Whether this item is a bundle cover.  If an item is marked as a bundle cover, it will be the entry point to the bundle of items that have the same bundleId as that item. It will be shown only on the main timeline — not within the opened bundle.  On the main timeline, items that are shown are:   - Items that have isBundleCover set to true   - Items that do not have a bundleId  In a bundle sub-timeline, items that are shown are:   - Items that have the bundleId in question AND isBundleCover set to false | [optional] 
**is_deleted** | **bool** | When true, indicates this item is deleted, and only the ID property is set. | [optional] 
**is_pinned** | **bool** | When true, indicates this item is pinned, which means it&#39;s grouped alongside \&quot;active\&quot; items like navigation and hangouts, on the opposite side of the home screen from historical (non-pinned) timeline items. You can allow the user to toggle the value of this property with the TOGGLE_PINNED built-in menu item. | [optional] 
**kind** | **str** | The type of resource. This is always mirror#timelineItem. | [optional] [default to 'mirror#timelineItem']
**location** | [**Location**](Location.md) |  | [optional] 
**menu_items** | [**List[MenuItem]**](MenuItem.md) | A list of menu items that will be presented to the user when this item is selected in the timeline. | [optional] 
**notification** | [**NotificationConfig**](NotificationConfig.md) |  | [optional] 
**pin_score** | **int** | For pinned items, this determines the order in which the item is displayed in the timeline, with a higher score appearing closer to the clock. Note: setting this field is currently not supported. | [optional] 
**recipients** | [**List[Contact]**](Contact.md) | A list of users or groups that this item has been shared with. | [optional] 
**self_link** | **str** | A URL that can be used to retrieve this item. | [optional] 
**source_item_id** | **str** | Opaque string you can use to map a timeline item to data in your own service. | [optional] 
**speakable_text** | **str** | The speakable version of the content of this item. Along with the READ_ALOUD menu item, use this field to provide text that would be clearer when read aloud, or to provide extended information to what is displayed visually on Glass.  Glassware should also specify the speakableType field, which will be spoken before this text in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification. | [optional] 
**speakable_type** | **str** | A speakable description of the type of this item. This will be announced to the user prior to reading the content of the item in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.  This should be a short, simple noun phrase such as \&quot;Email\&quot;, \&quot;Text message\&quot;, or \&quot;Daily Planet News Update\&quot;.  Glassware are encouraged to populate this field for every timeline item, even if the item does not contain speakableText or text so that the user can learn the type of the item without looking at the screen. | [optional] 
**text** | **str** | Text content of this item. | [optional] 
**title** | **str** | The title of this item. | [optional] 
**updated** | **datetime** | The time at which this item was last modified, formatted according to RFC 3339. | [optional] 

## Example

```python
from openapi_client.models.timeline_item import TimelineItem

# TODO update the JSON string below
json = "{}"
# create an instance of TimelineItem from a JSON string
timeline_item_instance = TimelineItem.from_json(json)
# print the JSON string representation of the object
print(TimelineItem.to_json())

# convert the object into a dict
timeline_item_dict = timeline_item_instance.to_dict()
# create an instance of TimelineItem from a dict
timeline_item_from_dict = TimelineItem.from_dict(timeline_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


