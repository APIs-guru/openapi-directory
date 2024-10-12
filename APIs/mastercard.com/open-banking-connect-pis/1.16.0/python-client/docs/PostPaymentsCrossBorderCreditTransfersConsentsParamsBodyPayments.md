# PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creditor_account** | [**PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAccount**](PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAccount.md) |  | 
**creditor_address** | [**PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAddress**](PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAddress.md) |  | [optional] 
**creditor_agent** | [**PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAgent**](PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAgent.md) |  | 
**creditor_name** | **str** | Bank name | 
**debtor_account** | [**PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsDebtorAccount**](PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsDebtorAccount.md) |  | 
**debtor_address** | [**PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsDebtorAddress**](PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsDebtorAddress.md) |  | [optional] 
**debtor_name** | **str** | Debtor legal name | [optional] 
**end_to_end_identification** | **str** | Payment end to end identification | 
**instructed_amount** | [**PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsInstructedAmount**](PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsInstructedAmount.md) |  | 
**instruction_identification** | **str** | Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction. If API profile of ASPSP is CMA9, then field is mandatory. | [optional] 
**instruction_priority** | **str** | Indicator of the urgency or order of importance | 
**local_instrument** | **str** | User community specific instrument. | 
**remittance_information_reference** | **str** | Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. (future use) | [optional] 
**remittance_information_unstructured** | **str** | Description of the payment | [optional] 
**requested_execution_date** | **date** | Scheduled Payment Date | [optional] 
**transfer_charges** | **str** | Charge bearer | [optional] 

## Example

```python
from openapi_client.models.post_payments_cross_border_credit_transfers_consents_params_body_payments import PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments from a JSON string
post_payments_cross_border_credit_transfers_consents_params_body_payments_instance = PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments.to_json())

# convert the object into a dict
post_payments_cross_border_credit_transfers_consents_params_body_payments_dict = post_payments_cross_border_credit_transfers_consents_params_body_payments_instance.to_dict()
# create an instance of PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments from a dict
post_payments_cross_border_credit_transfers_consents_params_body_payments_from_dict = PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments.from_dict(post_payments_cross_border_credit_transfers_consents_params_body_payments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


