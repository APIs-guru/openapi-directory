# StatementCreditOffersSavings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**earned_cashback** | **str** | Value of postpaid credit deal redemptions. | [optional] 
**num_available** | **str** | Count of postpaid credit deals that are ready for activation or redemption. | [optional] 
**num_redeemed** | **str** | Count of postpaid credit deals redeemed. | [optional] 
**potential_savings** | **str** | Minimum value of unredeemed postpaid credit deals. | [optional] 

## Example

```python
from openapi_client.models.statement_credit_offers_savings import StatementCreditOffersSavings

# TODO update the JSON string below
json = "{}"
# create an instance of StatementCreditOffersSavings from a JSON string
statement_credit_offers_savings_instance = StatementCreditOffersSavings.from_json(json)
# print the JSON string representation of the object
print(StatementCreditOffersSavings.to_json())

# convert the object into a dict
statement_credit_offers_savings_dict = statement_credit_offers_savings_instance.to_dict()
# create an instance of StatementCreditOffersSavings from a dict
statement_credit_offers_savings_from_dict = StatementCreditOffersSavings.from_dict(statement_credit_offers_savings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


