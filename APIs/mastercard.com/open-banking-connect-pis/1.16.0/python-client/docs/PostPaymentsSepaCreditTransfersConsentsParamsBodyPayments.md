# PostPaymentsSepaCreditTransfersConsentsParamsBodyPayments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_purpose** | **str** | Purpose of the payment | [optional] 
**creditor_account** | [**PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAccount**](PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAccount.md) |  | 
**creditor_address** | [**PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAddress**](PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAddress.md) |  | 
**creditor_agent** | [**PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAgent**](PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAgent.md) |  | 
**creditor_name** | **str** | Bank name | 
**debtor_account** | [**PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsDebtorAccount**](PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsDebtorAccount.md) |  | [optional] 
**debtor_address** | [**PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsDebtorAddress**](PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsDebtorAddress.md) |  | [optional] 
**debtor_agent** | [**PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsDebtorAgent**](PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsDebtorAgent.md) |  | [optional] 
**debtor_name** | **str** | Debtor legal name | 
**end_to_end_identification** | **str** | Payment end to end identification | 
**instructed_amount** | [**PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsInstructedAmount**](PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsInstructedAmount.md) |  | 
**instruction_priority** | **str** | Indicator of the urgency or order of importance | 
**local_instrument** | **str** | User community specific instrument. | 
**remittance_information_reference** | **str** | Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. (future use) | [optional] 
**remittance_information_structured** | **str** | Description of the payment | [optional] 
**remittance_information_unstructured** | **str** | Description of the payment | [optional] 
**requested_execution_date** | **date** | Scheduled Payment Date | [optional] 
**schedule** | [**RequestPisSepaSchedule**](RequestPisSepaSchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.post_payments_sepa_credit_transfers_consents_params_body_payments import PostPaymentsSepaCreditTransfersConsentsParamsBodyPayments

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsSepaCreditTransfersConsentsParamsBodyPayments from a JSON string
post_payments_sepa_credit_transfers_consents_params_body_payments_instance = PostPaymentsSepaCreditTransfersConsentsParamsBodyPayments.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsSepaCreditTransfersConsentsParamsBodyPayments.to_json())

# convert the object into a dict
post_payments_sepa_credit_transfers_consents_params_body_payments_dict = post_payments_sepa_credit_transfers_consents_params_body_payments_instance.to_dict()
# create an instance of PostPaymentsSepaCreditTransfersConsentsParamsBodyPayments from a dict
post_payments_sepa_credit_transfers_consents_params_body_payments_from_dict = PostPaymentsSepaCreditTransfersConsentsParamsBodyPayments.from_dict(post_payments_sepa_credit_transfers_consents_params_body_payments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


