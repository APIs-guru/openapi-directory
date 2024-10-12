# Status

Represents a status posted by an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Account**](Account.md) |  | [optional] 
**application** | [**Application**](Application.md) |  | [optional] 
**bookmarked** | **bool** | Have you bookmarked this status? | [optional] 
**card** | [**Card**](Card.md) |  | [optional] 
**content** | **str** | HTML-encoded status content. | [optional] 
**created_at** | **datetime** | The date when this status was created. | [optional] 
**emojis** | [**List[Emoji]**](Emoji.md) | Custom emoji to be used when rendering status content. | [optional] 
**favourited** | **bool** | Have you favourited this status? | [optional] 
**favourites_count** | **int** | How many favourites this status has received. | [optional] 
**id** | **str** | ID of the status in the database. Cast from an integer but not guaranteed to be a number. | [optional] 
**in_reply_to_account_id** | **str** | ID of the account being replied to. | [optional] 
**in_reply_to_id** | **str** | ID of the status being replied. Cast from an integer but not guaranteed to be a number. | [optional] 
**language** | **str** | Primary language of this status. ISO 639 Part 1 two-letter language code. | [optional] 
**media_attachments** | [**List[Attachment]**](Attachment.md) | Media that is attached to this status. | [optional] 
**mentions** | [**List[Mention]**](Mention.md) | Mentions of users within the status content. | [optional] 
**muted** | **bool** | Have you muted notifications for this status&#39;s conversation? | [optional] 
**pinned** | **bool** | Have you pinned this status? Only appears if the status is pinnable. | [optional] 
**poll** | [**Poll**](Poll.md) |  | [optional] 
**reblog** | [**Status**](Status.md) |  | [optional] 
**reblogged** | **bool** | Have you boosted this status? | [optional] 
**reblogs_count** | **int** | How many boosts this status has received. | [optional] 
**replies_count** | **int** | How many replies this status has received. | [optional] 
**sensitive** | **bool** | Is this status marked as sensitive content? | [optional] 
**spoiler_text** | **str** | Subject or summary line, below which status content is collapsed until expanded. | [optional] 
**tags** | [**List[Tag]**](Tag.md) | Hashtags used within the status content. | [optional] 
**text** | **str** | Plain-text source of a status. Returned instead of &#x60;content&#x60; when status is deleted, so the user may redraft from the source text without the client having to reverse-engineer the original text from the HTML content. | [optional] 
**uri** | **str** | URI of the status used for federation. | [optional] 
**url** | **str** | A link to the status&#39;s HTML representation. | [optional] 
**visibility** | **str** | Visibility of this status. | [optional] 

## Example

```python
from openapi_client.models.status import Status

# TODO update the JSON string below
json = "{}"
# create an instance of Status from a JSON string
status_instance = Status.from_json(json)
# print the JSON string representation of the object
print(Status.to_json())

# convert the object into a dict
status_dict = status_instance.to_dict()
# create an instance of Status from a dict
status_from_dict = Status.from_dict(status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


