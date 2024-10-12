# PaymentRead

PaymentReadSerializer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creditor_account** | **str** | Registered creditor account | [optional] 
**creditor_object** | [**CreditorAccountWrite**](CreditorAccountWrite.md) | Creditor account | [optional] 
**custom_payment_id** | **str** | Payment Custom Payment ID | [optional] 
**debtor_account** | [**DebtorAccountWrite**](DebtorAccountWrite.md) |  | 
**description** | **str** | Payment description | [optional] [default to 'GOCARDLESS']
**instructed_amount** | [**InstructedAmount**](InstructedAmount.md) | Instructed amount | 
**payment_id** | **str** | Payment ID | [optional] [readonly] 
**payment_product** | [**PaymentProductEnum**](PaymentProductEnum.md) | Payment product  * &#x60;T2P&#x60; - target-2-payments * &#x60;SCT&#x60; - sepa-credit-transfers * &#x60;ISCT&#x60; - instant-sepa-credit-transfer * &#x60;CBCT&#x60; - cross-border-credit-transfers * &#x60;BACS&#x60; - Back Payment Scheme * &#x60;CHAPS&#x60; - CHAPS Payment Scheme * &#x60;FPS&#x60; - Faster Payment Scheme * &#x60;SWIFT&#x60; - Swift Payment Service * &#x60;BT&#x60; - Balance Transfer * &#x60;MT&#x60; - Money Transfer | [optional] 
**payment_status** | [**PaymentStatusEnum**](PaymentStatusEnum.md) | Payment end to end identification  * &#x60;INIT&#x60; - Initiated. Payment has been initiated. * &#x60;ERRE&#x60; - ExecutionError. We experienced error on payment execution. * &#x60;ERRS&#x60; - StatusError. We experienced error retrieving payment status. Try again. * &#x60;ACCC&#x60; - AcceptedSettlementCompleted. Settlement on the creditor&#39;s account has been completed * &#x60;ACCP&#x60; - AcceptedCustomerProfile. Preceding check of technical validation was successful. Customer profile check was successful * &#x60;ACSC&#x60; - AcceptedSettlementCompleted. Settlement on the debtor’s account has been completed * &#x60;ACSP&#x60; - AcceptedSettlementInProcess. All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution * &#x60;ACTC&#x60; - AcceptedTechnicalValidation. Authentication and syntactical and semantical validation are successful * &#x60;ACWC&#x60; - AcceptedWithChange. Instruction is accepted but a change will be made, such as date or remittance not sent * &#x60;ACWP&#x60; - AcceptedWithoutPosting. Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account * &#x60;RCVD&#x60; - Received. Payment initiation has been received by the receiving agent * &#x60;PDNG&#x60; - Pending. Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed * &#x60;RJCT&#x60; - Rejected. Payment initiation or individual transaction included in the payment initiation has been rejected. * &#x60;CANC&#x60; - Cancelled. Payment initiation has been cancelled before execution * &#x60;ACFC&#x60; - AcceptedFundsChecked. Pre-ceeding check of technical validation and customer profile was successful and an automatic funds check was positive * &#x60;PATC&#x60; - PartiallyAcceptedTechnicalCorrect. The payment initiation needs multiple authentications, where some but not yet all have been performed * &#x60;PART&#x60; - PartiallyAccepted. A number of transactions have been accepted, whereas another number of transactions have not yet achieved &#39;accepted&#39; status | [optional] [readonly] 
**payment_type** | [**PaymentTypeEnum**](PaymentTypeEnum.md) | Payment Type  * &#x60;single-payment&#x60; - payment * &#x60;bulk-payment&#x60; - bulk-payments * &#x60;periodic-payment&#x60; - periodic-payments | [optional] [readonly] 
**redirect** | **str** | Redirect URL to your application after payment is done | 

## Example

```python
from openapi_client.models.payment_read import PaymentRead

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRead from a JSON string
payment_read_instance = PaymentRead.from_json(json)
# print the JSON string representation of the object
print(PaymentRead.to_json())

# convert the object into a dict
payment_read_dict = payment_read_instance.to_dict()
# create an instance of PaymentRead from a dict
payment_read_from_dict = PaymentRead.from_dict(payment_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


