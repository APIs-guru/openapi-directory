# PostPaymentsDomesticCreditTransfersConsentsParamsBodyPayments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creditor_account** | [**PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAccount**](PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAccount.md) |  | 
**creditor_address** | [**PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAddress**](PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAddress.md) |  | [optional] 
**creditor_agent** | [**PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAgent**](PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAgent.md) |  | [optional] 
**creditor_name** | **str** | Bank name | 
**debtor_account** | [**PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAccount**](PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAccount.md) |  | [optional] 
**debtor_agent** | [**PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAgent**](PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsDebtorAgent.md) |  | [optional] 
**end_to_end_identification** | **str** | Payment end to end identification | 
**instructed_amount** | [**PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsInstructedAmount**](PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsInstructedAmount.md) |  | 
**instruction_identification** | **str** | Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction. If API profile of ASPSP is CMA9, then field is mandatory. | [optional] 
**instruction_priority** | **str** | Indicator of the urgency or order of importance | [optional] 
**local_instrument** | **str** | User community specific instrument. | 
**remittance_information_reference** | **str** | Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. (future use) | [optional] 
**remittance_information_unstructured** | **str** | Description of the payment | [optional] 
**requested_execution_date** | **date** | Scheduled Payment Date | [optional] 
**schedule** | [**RequestPisDomesticSchedule**](RequestPisDomesticSchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.post_payments_domestic_credit_transfers_consents_params_body_payments import PostPaymentsDomesticCreditTransfersConsentsParamsBodyPayments

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsDomesticCreditTransfersConsentsParamsBodyPayments from a JSON string
post_payments_domestic_credit_transfers_consents_params_body_payments_instance = PostPaymentsDomesticCreditTransfersConsentsParamsBodyPayments.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsDomesticCreditTransfersConsentsParamsBodyPayments.to_json())

# convert the object into a dict
post_payments_domestic_credit_transfers_consents_params_body_payments_dict = post_payments_domestic_credit_transfers_consents_params_body_payments_instance.to_dict()
# create an instance of PostPaymentsDomesticCreditTransfersConsentsParamsBodyPayments from a dict
post_payments_domestic_credit_transfers_consents_params_body_payments_from_dict = PostPaymentsDomesticCreditTransfersConsentsParamsBodyPayments.from_dict(post_payments_domestic_credit_transfers_consents_params_body_payments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


