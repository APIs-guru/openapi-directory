# CardsLabels


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | A valid label color or null | [optional] 
**name** | **str** | a string with a length from 0 to 16384 | [optional] 
**value** | **str** | all or a comma-separated list of: blue, green, orange, purple, red or yellow | [optional] 

## Example

```python
from openapi_client.models.cards_labels import CardsLabels

# TODO update the JSON string below
json = "{}"
# create an instance of CardsLabels from a JSON string
cards_labels_instance = CardsLabels.from_json(json)
# print the JSON string representation of the object
print(CardsLabels.to_json())

# convert the object into a dict
cards_labels_dict = cards_labels_instance.to_dict()
# create an instance of CardsLabels from a dict
cards_labels_from_dict = CardsLabels.from_dict(cards_labels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


