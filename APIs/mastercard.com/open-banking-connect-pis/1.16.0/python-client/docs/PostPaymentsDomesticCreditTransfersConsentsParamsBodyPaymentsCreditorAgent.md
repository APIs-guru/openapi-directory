# PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAgent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clearing_system_identification** | **str** | System identification:   * &#39;UK.SortCode&#39; - UK FPS  | 
**member_identification** | **str** | Sort code | 

## Example

```python
from openapi_client.models.post_payments_domestic_credit_transfers_consents_params_body_payments_creditor_agent import PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAgent

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAgent from a JSON string
post_payments_domestic_credit_transfers_consents_params_body_payments_creditor_agent_instance = PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAgent.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAgent.to_json())

# convert the object into a dict
post_payments_domestic_credit_transfers_consents_params_body_payments_creditor_agent_dict = post_payments_domestic_credit_transfers_consents_params_body_payments_creditor_agent_instance.to_dict()
# create an instance of PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAgent from a dict
post_payments_domestic_credit_transfers_consents_params_body_payments_creditor_agent_from_dict = PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAgent.from_dict(post_payments_domestic_credit_transfers_consents_params_body_payments_creditor_agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


