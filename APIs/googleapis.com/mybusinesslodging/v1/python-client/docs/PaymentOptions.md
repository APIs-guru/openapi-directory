# PaymentOptions

Forms of payment accepted at the property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cash** | **bool** | Cash. The hotel accepts payment by paper/coin currency. | [optional] 
**cash_exception** | **str** | Cash exception. | [optional] 
**cheque** | **bool** | Cheque. The hotel accepts a printed document issued by the guest&#39;s bank in the guest&#39;s name as a form of payment. | [optional] 
**cheque_exception** | **str** | Cheque exception. | [optional] 
**credit_card** | **bool** | Credit card. The hotel accepts payment by a card issued by a bank or credit card company. Also known as charge card, debit card, bank card, or charge plate. | [optional] 
**credit_card_exception** | **str** | Credit card exception. | [optional] 
**debit_card** | **bool** | Debit card. The hotel accepts a bank-issued card that immediately deducts the charged funds from the guest&#39;s bank account upon processing. | [optional] 
**debit_card_exception** | **str** | Debit card exception. | [optional] 
**mobile_nfc** | **bool** | Mobile nfc. The hotel has the compatible computer hardware terminal that reads and charges a payment app on the guest&#39;s smartphone without requiring the two devices to make physical contact. Also known as Apple Pay, Google Pay, Samsung Pay. | [optional] 
**mobile_nfc_exception** | **str** | Mobile nfc exception. | [optional] 

## Example

```python
from openapi_client.models.payment_options import PaymentOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentOptions from a JSON string
payment_options_instance = PaymentOptions.from_json(json)
# print the JSON string representation of the object
print(PaymentOptions.to_json())

# convert the object into a dict
payment_options_dict = payment_options_instance.to_dict()
# create an instance of PaymentOptions from a dict
payment_options_from_dict = PaymentOptions.from_dict(payment_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


