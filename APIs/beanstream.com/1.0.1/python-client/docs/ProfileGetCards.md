# ProfileGetCards


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card** | [**List[ProfileCards]**](ProfileCards.md) |  | [optional] 
**code** | **float** | digits(2) | [optional] 
**customer_code** | **str** | characters(32) | [optional] 
**message** | **str** | alphanumeric(64) | [optional] 

## Example

```python
from openapi_client.models.profile_get_cards import ProfileGetCards

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileGetCards from a JSON string
profile_get_cards_instance = ProfileGetCards.from_json(json)
# print the JSON string representation of the object
print(ProfileGetCards.to_json())

# convert the object into a dict
profile_get_cards_dict = profile_get_cards_instance.to_dict()
# create an instance of ProfileGetCards from a dict
profile_get_cards_from_dict = ProfileGetCards.from_dict(profile_get_cards_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


