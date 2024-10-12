# PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAgent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identification** | **str** | Debtor agent identification, If localInstrument &#x3D; &#39;UK.FasterPayments&#39; and debtorAccount was specified then this needs to be a UK Sort code (6 digits) | 

## Example

```python
from openapi_client.models.post_payments_domestic_credit_transfers_consents_params_body_payments_debtor_agent import PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAgent

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAgent from a JSON string
post_payments_domestic_credit_transfers_consents_params_body_payments_debtor_agent_instance = PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAgent.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAgent.to_json())

# convert the object into a dict
post_payments_domestic_credit_transfers_consents_params_body_payments_debtor_agent_dict = post_payments_domestic_credit_transfers_consents_params_body_payments_debtor_agent_instance.to_dict()
# create an instance of PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAgent from a dict
post_payments_domestic_credit_transfers_consents_params_body_payments_debtor_agent_from_dict = PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAgent.from_dict(post_payments_domestic_credit_transfers_consents_params_body_payments_debtor_agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


