# Cards


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed** | **str** |  true or false | [optional] 
**desc** | **str** | a string with a length from 0 to 16384 | [optional] 
**due** | **str** | A date, or null | [optional] 
**file_source** | **str** | A file | [optional] 
**id_attachment_cover** | **str** | Id of the image attachment of this card to use as its cover, or null for no cover | [optional] 
**id_board** | **str** | id of the board the card should be moved to | [optional] 
**id_card_source** | **str** | The id of the card to copy into a new card. | [optional] 
**id_labels** | **str** | A comma-separated list of objectIds, 24-character hex strings | [optional] 
**id_list** | **str** | id of the list that the card should be added to | [optional] 
**id_members** | **str** | A comma-separated list of objectIds, 24-character hex strings | [optional] 
**keep_from_source** | **str** | Properties of the card to copy over from the source. | [optional] 
**labels** | **str** | all or a comma-separated list of: blue, green, orange, purple, red or yellow | [optional] 
**name** | **str** | The name of the new card.  It isn&amp;#39;t required if the name is being copied from provided by a URL, file or card that is being copied. | [optional] 
**pos** | **str** | A position. top , bottom , or a positive number. | [optional] 
**subscribed** | **str** |  true or false | [optional] 
**url_source** | **str** | A URL starting with http:// or https:// or null | [optional] 

## Example

```python
from openapi_client.models.cards import Cards

# TODO update the JSON string below
json = "{}"
# create an instance of Cards from a JSON string
cards_instance = Cards.from_json(json)
# print the JSON string representation of the object
print(Cards.to_json())

# convert the object into a dict
cards_dict = cards_instance.to_dict()
# create an instance of Cards from a dict
cards_from_dict = Cards.from_dict(cards_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


