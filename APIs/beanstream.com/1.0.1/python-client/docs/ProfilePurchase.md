# ProfilePurchase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **int** | Which credit card to use. Starts at 1 for the first card. You must configure how many cards can be stored by visiting the profile options in the back office. digits(1) | 
**complete** | **bool** | Set to FALSE for pre-auth. digit(1) or boolean | [optional] 
**customer_code** | **str** | The payment profile ID. alphanumeric(32) | 

## Example

```python
from openapi_client.models.profile_purchase import ProfilePurchase

# TODO update the JSON string below
json = "{}"
# create an instance of ProfilePurchase from a JSON string
profile_purchase_instance = ProfilePurchase.from_json(json)
# print the JSON string representation of the object
print(ProfilePurchase.to_json())

# convert the object into a dict
profile_purchase_dict = profile_purchase_instance.to_dict()
# create an instance of ProfilePurchase from a dict
profile_purchase_from_dict = ProfilePurchase.from_dict(profile_purchase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


