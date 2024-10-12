# ListsIdBoard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pos** | **str** | position of the list on the new board | [optional] 
**value** | **str** | id of the board the list should be moved to | [optional] 

## Example

```python
from openapi_client.models.lists_id_board import ListsIdBoard

# TODO update the JSON string below
json = "{}"
# create an instance of ListsIdBoard from a JSON string
lists_id_board_instance = ListsIdBoard.from_json(json)
# print the JSON string representation of the object
print(ListsIdBoard.to_json())

# convert the object into a dict
lists_id_board_dict = lists_id_board_instance.to_dict()
# create an instance of ListsIdBoard from a dict
lists_id_board_from_dict = ListsIdBoard.from_dict(lists_id_board_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


