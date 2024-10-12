# PeoplePromotionCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**people** | [**List[PersonCore]**](PersonCore.md) |  | [optional] 

## Example

```python
from openapi_client.models.people_promotion_card import PeoplePromotionCard

# TODO update the JSON string below
json = "{}"
# create an instance of PeoplePromotionCard from a JSON string
people_promotion_card_instance = PeoplePromotionCard.from_json(json)
# print the JSON string representation of the object
print(PeoplePromotionCard.to_json())

# convert the object into a dict
people_promotion_card_dict = people_promotion_card_instance.to_dict()
# create an instance of PeoplePromotionCard from a dict
people_promotion_card_from_dict = PeoplePromotionCard.from_dict(people_promotion_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


