# ProfileFromCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cvd** | **str** | Security code on the back of the credit card. This can be set to mandatory in the back office. digits(3) | [optional] [default to '123']
**expiry_month** | **str** | eg. 02 for February. digits(2) | [default to '02']
**expiry_year** | **str** | digits(2) | [default to '18']
**name** | **str** | Card holder name. alphanumeric(64) | [default to '5100000010001004']
**number** | **str** | Credit card number (PAN)  digits(20) | 

## Example

```python
from openapi_client.models.profile_from_card import ProfileFromCard

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileFromCard from a JSON string
profile_from_card_instance = ProfileFromCard.from_json(json)
# print the JSON string representation of the object
print(ProfileFromCard.to_json())

# convert the object into a dict
profile_from_card_dict = profile_from_card_instance.to_dict()
# create an instance of ProfileFromCard from a dict
profile_from_card_from_dict = ProfileFromCard.from_dict(profile_from_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


