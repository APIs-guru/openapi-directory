# CardsChecklistCheckItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | a string with a length from 1 to 16384 | [optional] 
**pos** | **str** | A position. top , bottom , or a positive number. | [optional] 

## Example

```python
from openapi_client.models.cards_checklist_check_item import CardsChecklistCheckItem

# TODO update the JSON string below
json = "{}"
# create an instance of CardsChecklistCheckItem from a JSON string
cards_checklist_check_item_instance = CardsChecklistCheckItem.from_json(json)
# print the JSON string representation of the object
print(CardsChecklistCheckItem.to_json())

# convert the object into a dict
cards_checklist_check_item_dict = cards_checklist_check_item_instance.to_dict()
# create an instance of CardsChecklistCheckItem from a dict
cards_checklist_check_item_from_dict = CardsChecklistCheckItem.from_dict(cards_checklist_check_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


