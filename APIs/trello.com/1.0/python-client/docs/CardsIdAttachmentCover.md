# CardsIdAttachmentCover


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Id of the image attachment of this card to use as its cover, or null for no cover | [optional] 

## Example

```python
from openapi_client.models.cards_id_attachment_cover import CardsIdAttachmentCover

# TODO update the JSON string below
json = "{}"
# create an instance of CardsIdAttachmentCover from a JSON string
cards_id_attachment_cover_instance = CardsIdAttachmentCover.from_json(json)
# print the JSON string representation of the object
print(CardsIdAttachmentCover.to_json())

# convert the object into a dict
cards_id_attachment_cover_dict = cards_id_attachment_cover_instance.to_dict()
# create an instance of CardsIdAttachmentCover from a dict
cards_id_attachment_cover_from_dict = CardsIdAttachmentCover.from_dict(cards_id_attachment_cover_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


