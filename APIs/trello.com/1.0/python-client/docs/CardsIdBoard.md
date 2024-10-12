# CardsIdBoard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_list** | **str** | id of the list that the card should be moved to on the new board | [optional] 
**value** | **str** | id of the board the card should be moved to | [optional] 

## Example

```python
from openapi_client.models.cards_id_board import CardsIdBoard

# TODO update the JSON string below
json = "{}"
# create an instance of CardsIdBoard from a JSON string
cards_id_board_instance = CardsIdBoard.from_json(json)
# print the JSON string representation of the object
print(CardsIdBoard.to_json())

# convert the object into a dict
cards_id_board_dict = cards_id_board_instance.to_dict()
# create an instance of CardsIdBoard from a dict
cards_id_board_from_dict = CardsIdBoard.from_dict(cards_id_board_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


