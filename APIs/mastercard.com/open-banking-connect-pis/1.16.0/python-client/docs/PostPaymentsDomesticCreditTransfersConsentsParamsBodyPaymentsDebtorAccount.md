# PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identification** | **str** | Debtor account identification, If localInstrument &#x3D; &#39;UK.FasterPayments&#39; and debtorAgent was specified then this needs to be a UK Account number (8 digits) | 

## Example

```python
from openapi_client.models.post_payments_domestic_credit_transfers_consents_params_body_payments_debtor_account import PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAccount

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAccount from a JSON string
post_payments_domestic_credit_transfers_consents_params_body_payments_debtor_account_instance = PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAccount.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAccount.to_json())

# convert the object into a dict
post_payments_domestic_credit_transfers_consents_params_body_payments_debtor_account_dict = post_payments_domestic_credit_transfers_consents_params_body_payments_debtor_account_instance.to_dict()
# create an instance of PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAccount from a dict
post_payments_domestic_credit_transfers_consents_params_body_payments_debtor_account_from_dict = PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAccount.from_dict(post_payments_domestic_credit_transfers_consents_params_body_payments_debtor_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


