# MerchantTransfer14

Response details for a merchant transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_message** | **str** | Message a financial institution will associate to the transfer and may display.\\n\\nType: Alphanumeric Special [a-zA-Z0-9!\\\&quot;#$%&amp;&#39;()*+,-./\\\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~], Maximum Length: 65 | [optional] 
**created** | **str** | Date and time the original transfer was created as an ISO 8601 format.   Type: Alphanumerical Special [A-Z 0-9-:], Maximum Length: 25 | [optional] 
**digital_account_reference_number** | **str** | URI to identify the digital account reference number. It will include masked account information but will not include security codes (e.g. CVC or expiration date for a card account).  | [optional] 
**funding_source** | **str** | Funding source must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT or CASH. | [optional] 
**id** | **str** | System generated unique merchant transfer identifier.   Type: Alphanumeric Special [a-zA-Z 0-9 _], Maximum Length: 32 | [optional] 
**interchange_rate_designator** | **str** | Indicates the interchange rate and editing rules applied to the transaction. Field is applicable for Europe OIs only.  Type:Alphanumeric [a-zA-Z 0-9], Length: 2 | [optional] 
**mastercard_assigned_id** | **str** | Mastercard Assigned ID for tiered interchange calculations.   Type: Numeric [0-9], Maximum Length: 6 | [optional] 
**original_status** | **str** | Original status of the transfer. Values: APPROVED, UNKNOWN.   Type: Alpha [A-Z], Maximum Length: 8 | [optional] 
**participant** | [**Participant28**](Participant28.md) |  | [optional] 
**participation_id** | **str** | Participation identifier of the sender. The receiving financial institution will associate the value to the transfer.\\n\\nType: Alphanumeric Special [a-zA-Z0-9!\\\&quot;#$%&amp;&#39;()*+,-./\\\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~], Maximum Length: 30 | [optional] 
**payment_origination_country** | **str** | Country where the payment originated from as an ISO 3166-1 alpha-3 country code.   Type: Alpha [A-Z], Maximum Length: 3 | [optional] 
**payment_type** | **str** | Payment type used for transfer. Value - P2M: Person to Merchant.   Type: Alphanumeric [A-Z0-9], Maximum Length: 3 | [optional] 
**processor_id** | **str** | The processor ID is a ten-digit number of the form: 9000xxxxxx, where the Single Message System-assigned processor ID will be up to the last six digits xxxxxx. If the partner is enrolled in multiple processorId numbers, the processorId number must be specified. If the partner is only enrolled in a single processorId number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section.  Type: Numeric [0-9], Maximum Length: 10 | [optional] 
**recipient** | [**Recipient18**](Recipient18.md) |  | [optional] 
**recipient_account_uri** | **str** | URI describing the recipient account. It will include masked account information but will not include security codes (e.g. CVC or expiration date for a card account). Pan, Manula Entry Alias and Alias are valid schemas. | [optional] 
**reconciliation_data** | [**ReconciliationData26**](ReconciliationData26.md) |  | [optional] 
**resource_type** | **str** | Type of the resource that is being returned.   Type: Alpha Special [a-z _], Maximum Length:  17 | [optional] 
**routing_transit_number** | **str** | The nine-digit Federal Reserve Routing and Transit (R &amp; T) number of the acquiring institution or the nine-digit pseudo-number assigned to the acquiring institution by Mastercard. If the partner is enrolled in multiple routing transit numbers, the routing transit number must be specified. If the partner is only enrolled in a single routing transit number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section.    Type: Numeric [0-9], Maximum Length: 9 | [optional] 
**sender** | [**Sender15**](Sender15.md) |  | [optional] 
**sender_account_uri** | **str** | URI describing the sending account. It will include masked account information but will not include security codes (e.g. CVC or expiration date for a card account). | [optional] 
**status** | **str** | Status of the transfer. Values: APPROVED, UNKNOWN.   Type: Alpha [A-Z], Maximum Length: 8 | [optional] 
**status_timestamp** | **str** | Timestamp of when the status was changed to its current value.    Type: Alphanumerical Special [A-Z 0-9-:], Maximum Length: 25 | [optional] 
**transaction_history** | [**TransactionHistory22**](TransactionHistory22.md) |  | [optional] 
**transaction_local_date_time** | **str** | Local date and time when the transaction is submitted as an ISO 8601 format.   Type: Alphanumerical Special [A-Z 0-9-:], Maximum Length: 25 | [optional] 
**transfer_amount** | [**TransferAmount21**](TransferAmount21.md) |  | [optional] 
**transfer_reference** | **str** | Unique transaction reference number provided by the partner when the Transfer was created.   Type: Alphanumeric Special [a-zA-Z0-9 * , - . _ ~], Maximum Length: 40 | [optional] 

## Example

```python
from openapi_client.models.merchant_transfer14 import MerchantTransfer14

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantTransfer14 from a JSON string
merchant_transfer14_instance = MerchantTransfer14.from_json(json)
# print the JSON string representation of the object
print(MerchantTransfer14.to_json())

# convert the object into a dict
merchant_transfer14_dict = merchant_transfer14_instance.to_dict()
# create an instance of MerchantTransfer14 from a dict
merchant_transfer14_from_dict = MerchantTransfer14.from_dict(merchant_transfer14_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


