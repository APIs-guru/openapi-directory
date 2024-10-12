# ProfileCards


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **str** | 1-indexed card ID. Total number of cards allowed is configured in your merchant account. | [optional] 
**card_type** | **str** | MC, VI etc. characters(2) | [optional] 
**expiry_month** | **str** | digits(2) | [optional] 
**expiry_year** | **str** | digits(2) | [optional] 
**function** | **str** | Will say DEF for the default card | [optional] 
**number** | **str** | digits(20) | [optional] 

## Example

```python
from openapi_client.models.profile_cards import ProfileCards

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileCards from a JSON string
profile_cards_instance = ProfileCards.from_json(json)
# print the JSON string representation of the object
print(ProfileCards.to_json())

# convert the object into a dict
profile_cards_dict = profile_cards_instance.to_dict()
# create an instance of ProfileCards from a dict
profile_cards_from_dict = ProfileCards.from_dict(profile_cards_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


