# PaymentWriteRequest

PaymentWriteSerializer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creditor_account** | **str** | Registered creditor account | [optional] 
**creditor_object** | [**CreditorAccountWriteRequest**](CreditorAccountWriteRequest.md) | Creditor account | [optional] 
**custom_payment_id** | **str** | Payment Custom Payment ID | [optional] 
**debtor_account** | [**DebtorAccountWriteRequest**](DebtorAccountWriteRequest.md) | Debtor account | [optional] 
**description** | **str** | Payment description | [optional] [default to 'GOCARDLESS']
**institution_id** | **str** | Institution ID for Payment | [optional] [default to 'SWEDBANK_SANDBOX_SANDLV22']
**instructed_amount** | [**InstructedAmountRequest**](InstructedAmountRequest.md) | Instructed amount | 
**payment_product** | [**PaymentProductEnum**](PaymentProductEnum.md) | Payment product  * &#x60;T2P&#x60; - target-2-payments * &#x60;SCT&#x60; - sepa-credit-transfers * &#x60;ISCT&#x60; - instant-sepa-credit-transfer * &#x60;CBCT&#x60; - cross-border-credit-transfers * &#x60;BACS&#x60; - Back Payment Scheme * &#x60;CHAPS&#x60; - CHAPS Payment Scheme * &#x60;FPS&#x60; - Faster Payment Scheme * &#x60;SWIFT&#x60; - Swift Payment Service * &#x60;BT&#x60; - Balance Transfer * &#x60;MT&#x60; - Money Transfer | [optional] 
**periodic_payment** | [**PeriodicPaymentRequest**](PeriodicPaymentRequest.md) |  | [optional] 
**redirect** | **str** | Redirect URL to your application after payment is done | 
**requested_execution_date** | **date** | Payment Execution date (for periodic payments) | [optional] 
**submit_payment** | **bool** | Indicates whether payment should be submitted separately | [optional] [default to False]

## Example

```python
from openapi_client.models.payment_write_request import PaymentWriteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentWriteRequest from a JSON string
payment_write_request_instance = PaymentWriteRequest.from_json(json)
# print the JSON string representation of the object
print(PaymentWriteRequest.to_json())

# convert the object into a dict
payment_write_request_dict = payment_write_request_instance.to_dict()
# create an instance of PaymentWriteRequest from a dict
payment_write_request_from_dict = PaymentWriteRequest.from_dict(payment_write_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


