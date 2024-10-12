# CardWithId

A [card](https://developers.google.com/chat/api/reference/rest/v1/cards) in a Google Chat message. Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the message can't contain cards. [Card builder](https://addons.gsuite.google.com/uikit/builder)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card** | [**GoogleAppsCardV1Card**](GoogleAppsCardV1Card.md) |  | [optional] 
**card_id** | **str** | Required if the message contains multiple cards. A unique identifier for a card in a message. | [optional] 

## Example

```python
from openapi_client.models.card_with_id import CardWithId

# TODO update the JSON string below
json = "{}"
# create an instance of CardWithId from a JSON string
card_with_id_instance = CardWithId.from_json(json)
# print the JSON string representation of the object
print(CardWithId.to_json())

# convert the object into a dict
card_with_id_dict = card_with_id_instance.to_dict()
# create an instance of CardWithId from a dict
card_with_id_from_dict = CardWithId.from_dict(card_with_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


