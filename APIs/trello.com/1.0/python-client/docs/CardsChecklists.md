# CardsChecklists


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_checklist_source** | **str** | The id of the source checklist to copy into a new checklist. | [optional] 
**name** | **str** | a string with a length from 0 to 16384 | [optional] 
**value** | **str** | The id of the checklist to add to the card, or null to create a new one. | [optional] 

## Example

```python
from openapi_client.models.cards_checklists import CardsChecklists

# TODO update the JSON string below
json = "{}"
# create an instance of CardsChecklists from a JSON string
cards_checklists_instance = CardsChecklists.from_json(json)
# print the JSON string representation of the object
print(CardsChecklists.to_json())

# convert the object into a dict
cards_checklists_dict = cards_checklists_instance.to_dict()
# create an instance of CardsChecklists from a dict
cards_checklists_from_dict = CardsChecklists.from_dict(cards_checklists_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


