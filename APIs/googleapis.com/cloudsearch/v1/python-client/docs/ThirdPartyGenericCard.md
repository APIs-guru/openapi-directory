# ThirdPartyGenericCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **str** | Unique identifier for the card. | [optional] 
**category** | **str** | Category that the card belongs to. | [optional] 
**content** | [**Content**](Content.md) |  | [optional] 
**context** | [**Context**](Context.md) |  | [optional] 
**is_dismissible** | **bool** | Whether the card can be dismissed. | [optional] 
**priority** | **int** | Priority of the card, where 0 is the highest priority. | [optional] 

## Example

```python
from openapi_client.models.third_party_generic_card import ThirdPartyGenericCard

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyGenericCard from a JSON string
third_party_generic_card_instance = ThirdPartyGenericCard.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyGenericCard.to_json())

# convert the object into a dict
third_party_generic_card_dict = third_party_generic_card_instance.to_dict()
# create an instance of ThirdPartyGenericCard from a dict
third_party_generic_card_from_dict = ThirdPartyGenericCard.from_dict(third_party_generic_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


