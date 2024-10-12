# UserSavings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prepaid_offer_savings** | [**PrepaidOfferSavings**](PrepaidOfferSavings.md) |  | [optional] 
**statement_credit_offers_savings** | [**StatementCreditOffersSavings**](StatementCreditOffersSavings.md) |  | [optional] 
**total_amount_saved** | **str** | Combined value of purchased and redeemed deals. | [optional] 
**total_offers_used** | **str** | Combined count of purchased and redeemed deals. | [optional] 

## Example

```python
from openapi_client.models.user_savings import UserSavings

# TODO update the JSON string below
json = "{}"
# create an instance of UserSavings from a JSON string
user_savings_instance = UserSavings.from_json(json)
# print the JSON string representation of the object
print(UserSavings.to_json())

# convert the object into a dict
user_savings_dict = user_savings_instance.to_dict()
# create an instance of UserSavings from a dict
user_savings_from_dict = UserSavings.from_dict(user_savings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


