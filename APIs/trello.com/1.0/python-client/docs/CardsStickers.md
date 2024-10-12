# CardsStickers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **str** | a string with a length from 0 to 16384 | [optional] 
**left** | **str** | undefined | [optional] 
**rotate** | **str** | undefined | [optional] 
**top** | **str** | undefined | [optional] 
**z_index** | **str** | Valid Z values for stickers, must be an integer | [optional] 

## Example

```python
from openapi_client.models.cards_stickers import CardsStickers

# TODO update the JSON string below
json = "{}"
# create an instance of CardsStickers from a JSON string
cards_stickers_instance = CardsStickers.from_json(json)
# print the JSON string representation of the object
print(CardsStickers.to_json())

# convert the object into a dict
cards_stickers_dict = cards_stickers_instance.to_dict()
# create an instance of CardsStickers from a dict
cards_stickers_from_dict = CardsStickers.from_dict(cards_stickers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


