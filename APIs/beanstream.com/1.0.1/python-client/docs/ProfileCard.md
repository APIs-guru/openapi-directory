# ProfileCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_month** | **str** | digits(2) | [optional] 
**expiry_year** | **str** | digits(2) | [optional] 
**name** | **str** | cardholder name. alphanumeric(64) | [optional] 
**number** | **str** | Credit card number. digits(20) | [optional] 

## Example

```python
from openapi_client.models.profile_card import ProfileCard

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileCard from a JSON string
profile_card_instance = ProfileCard.from_json(json)
# print the JSON string representation of the object
print(ProfileCard.to_json())

# convert the object into a dict
profile_card_dict = profile_card_instance.to_dict()
# create an instance of ProfileCard from a dict
profile_card_from_dict = ProfileCard.from_dict(profile_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


