# DetailPostpaidCreditOffer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cash_back** | **str** | Value of POSTPAIDCREDIT deal redemption. | [optional] 
**currency_code** | **str** | ISO 4217 code in which the redeeming transaction must be made to qualify for the offer. | [optional] 
**max_cashback** | **str** | The most cash back which a user can earn for the offer. | [optional] 
**min_transaction_amount_to_redeem** | **str** | The smallest purchase amount that will qualify for redemption. | [optional] 
**statement_credit_type** | **str** | Calculation kind of the redemption value. SPEND_CASH/VISIT_CASH- fixed value. SPEND_PERCENTAGE/VISIT_PERCENTAGE- share value. | [optional] 
**visit_threshold** | **str** | The number of purchases required to qualify for redemption. | [optional] 

## Example

```python
from openapi_client.models.detail_postpaid_credit_offer import DetailPostpaidCreditOffer

# TODO update the JSON string below
json = "{}"
# create an instance of DetailPostpaidCreditOffer from a JSON string
detail_postpaid_credit_offer_instance = DetailPostpaidCreditOffer.from_json(json)
# print the JSON string representation of the object
print(DetailPostpaidCreditOffer.to_json())

# convert the object into a dict
detail_postpaid_credit_offer_dict = detail_postpaid_credit_offer_instance.to_dict()
# create an instance of DetailPostpaidCreditOffer from a dict
detail_postpaid_credit_offer_from_dict = DetailPostpaidCreditOffer.from_dict(detail_postpaid_credit_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


