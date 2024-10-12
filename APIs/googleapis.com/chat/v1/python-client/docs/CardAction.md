# CardAction

A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_label** | **str** | The label used to be displayed in the action menu item. | [optional] 
**on_click** | [**OnClick**](OnClick.md) |  | [optional] 

## Example

```python
from openapi_client.models.card_action import CardAction

# TODO update the JSON string below
json = "{}"
# create an instance of CardAction from a JSON string
card_action_instance = CardAction.from_json(json)
# print the JSON string representation of the object
print(CardAction.to_json())

# convert the object into a dict
card_action_dict = card_action_instance.to_dict()
# create an instance of CardAction from a dict
card_action_from_dict = CardAction.from_dict(card_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


