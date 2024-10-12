# ListsCards


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desc** | **str** | a string with a length from 0 to 16384 | [optional] 
**due** | **str** | A date, or null | [optional] 
**id_members** | **str** | A comma-separated list of objectIds, 24-character hex strings | [optional] 
**labels** | **str** | all or a comma-separated list of: blue, green, orange, purple, red or yellow | [optional] 
**name** | **str** | a string with a length from 1 to 16384 | [optional] 

## Example

```python
from openapi_client.models.lists_cards import ListsCards

# TODO update the JSON string below
json = "{}"
# create an instance of ListsCards from a JSON string
lists_cards_instance = ListsCards.from_json(json)
# print the JSON string representation of the object
print(ListsCards.to_json())

# convert the object into a dict
lists_cards_dict = lists_cards_instance.to_dict()
# create an instance of ListsCards from a dict
lists_cards_from_dict = ListsCards.from_dict(lists_cards_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


