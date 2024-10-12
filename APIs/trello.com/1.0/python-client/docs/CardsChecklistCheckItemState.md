# CardsChecklistCheckItemState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | One of: complete, false, incomplete or true | [optional] 

## Example

```python
from openapi_client.models.cards_checklist_check_item_state import CardsChecklistCheckItemState

# TODO update the JSON string below
json = "{}"
# create an instance of CardsChecklistCheckItemState from a JSON string
cards_checklist_check_item_state_instance = CardsChecklistCheckItemState.from_json(json)
# print the JSON string representation of the object
print(CardsChecklistCheckItemState.to_json())

# convert the object into a dict
cards_checklist_check_item_state_dict = cards_checklist_check_item_state_instance.to_dict()
# create an instance of CardsChecklistCheckItemState from a dict
cards_checklist_check_item_state_from_dict = CardsChecklistCheckItemState.from_dict(cards_checklist_check_item_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


