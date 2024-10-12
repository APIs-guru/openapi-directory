# CardsChecklistIdChecklistCurrentCheckItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_checklist** | **str** | An id, or null | [optional] 
**name** | **str** | a string with a length from 1 to 16384 | [optional] 
**pos** | **str** | A position. top , bottom , or a positive number. | [optional] 
**state** | **str** | One of: complete, false, incomplete or true | [optional] 

## Example

```python
from openapi_client.models.cards_checklist_id_checklist_current_check_item import CardsChecklistIdChecklistCurrentCheckItem

# TODO update the JSON string below
json = "{}"
# create an instance of CardsChecklistIdChecklistCurrentCheckItem from a JSON string
cards_checklist_id_checklist_current_check_item_instance = CardsChecklistIdChecklistCurrentCheckItem.from_json(json)
# print the JSON string representation of the object
print(CardsChecklistIdChecklistCurrentCheckItem.to_json())

# convert the object into a dict
cards_checklist_id_checklist_current_check_item_dict = cards_checklist_id_checklist_current_check_item_instance.to_dict()
# create an instance of CardsChecklistIdChecklistCurrentCheckItem from a dict
cards_checklist_id_checklist_current_check_item_from_dict = CardsChecklistIdChecklistCurrentCheckItem.from_dict(cards_checklist_id_checklist_current_check_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


