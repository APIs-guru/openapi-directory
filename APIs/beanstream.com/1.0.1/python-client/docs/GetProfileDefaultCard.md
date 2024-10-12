# GetProfileDefaultCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_type** | **str** | MC, VI etc. characters(2) | [optional] 
**expiry_month** | **str** | digits(2) | [optional] 
**expiry_year** | **str** | digits(2) | [optional] 
**name** | **str** | cardholder name alphanumeric(64) | [optional] 
**number** | **str** | masked credit card number alphanumeric(20) | [optional] 

## Example

```python
from openapi_client.models.get_profile_default_card import GetProfileDefaultCard

# TODO update the JSON string below
json = "{}"
# create an instance of GetProfileDefaultCard from a JSON string
get_profile_default_card_instance = GetProfileDefaultCard.from_json(json)
# print the JSON string representation of the object
print(GetProfileDefaultCard.to_json())

# convert the object into a dict
get_profile_default_card_dict = get_profile_default_card_instance.to_dict()
# create an instance of GetProfileDefaultCard from a dict
get_profile_default_card_from_dict = GetProfileDefaultCard.from_dict(get_profile_default_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


