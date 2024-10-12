# MerchantTransfer104

Response details for a merchant transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | Initiation channel of the transfer request. Values: WEB, MOBILE, BANK, KIOSK. | [optional] 
**created** | **str** | Date and time the original transfer was created as an ISO 8601 Timestamp. Details- YYYY-MM-DDTHH:MM:SS±hh[:mm] Valid Values- Refer &#39;Date And Time Formats | [optional] 
**device_id** | **str** | The serial number of a device that initiated the transfer. | [optional] 
**digital_account_reference_number** | **str** | URI to identify the digital account reference number. It will include masked account information but will not include security codes (e.g. CVC or expiration date for a card account).  | [optional] 
**funding_source** | **str** | Funding source must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT or CASH.  | [optional] 
**id** | **str** | System generated unique merchant transfer identifier. | [optional] 
**interchange_rate_designator** | **str** | Indicates the interchange rate and editing rules applied to the transaction.  Type:Alphanumeric [a-zA-Z 0-9], Length: 2 | [optional] 
**location** | **str** | Location where the transaction is initiated. Valid Values- Refer &#39;Location URIs&#39;. | [optional] 
**original_status** | **str** | Original status of the transfer. One of APPROVED, DECLINED, ERROR, PENDING, UNKNOWN. | [optional] 
**participant** | [**Participant117**](Participant117.md) |  | [optional] 
**payment_origination_country** | **str** | Country where the payment originated from as an ISO 3166-1 alpha-3 country code, in uppercase. Details- Alpha, Length: 3 | [optional] 
**payment_type** | **str** | P2M: Person to Merchant | [optional] 
**processor_id** | **str** | The processor ID is a ten-digit number of the form: 9000xxxxxx, where the Single Message System-assigned processor ID will be up to the last six digits xxxxxx. If the partner is enrolled in multiple processorId numbers, the processorId number must be specified. If the partner is only enrolled in a single processorId number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 10 | [optional] 
**recipient** | [**Recipient107**](Recipient107.md) |  | [optional] 
**recipient_account_uri** | **str** | URI describing the recipient account. It will include masked account information (e.g. \&quot;************1234\&quot; for a card account) but will not include security codes (e.g. CVC or expiration date for a card account). | [optional] 
**reconciliation_data** | [**ReconciliationData115**](ReconciliationData115.md) |  | [optional] 
**resource_type** | **str** | Type of the resource that is being returned. Valid value: merchant_refund_transfer | [optional] 
**routing_transit_number** | **str** | The nine-digit Federal Reserve Routing and Transit (R &amp; T) number of the acquiring institution or the nine-digit pseudo-number assigned to the acquiring institution by Mastercard. If the partner is enrolled in multiple routing transit numbers, the routing transit number must be specified. If the partner is only enrolled in a single routing transit number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 9 | [optional] 
**sender** | [**Sender105**](Sender105.md) |  | [optional] 
**sender_account_uri** | **str** | URI describing the sending account. It will include masked account information (e.g. \&quot;************1234\&quot; for a card account) but will not include security codes (e.g. CVC or expiration date for a card account). | [optional] 
**status** | **str** | Status of the transfer. Values: APPROVED, DECLINED, ERROR, PENDING, REVERSED, CANCELLED. | [optional] 
**status_timestamp** | **str** | Timestamp of when the status was changed to its current value. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm] Valid Values- Refer &#39;Date And Time Formats | [optional] 
**transaction_history** | [**TransactionHistory111**](TransactionHistory111.md) |  | [optional] 
**transaction_local_date_time** | **str** | Local date and time when the transaction is submitted. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm]  | [optional] 
**transfer_amount** | [**TransferAmount110**](TransferAmount110.md) |  | [optional] 
**transfer_reference** | **str** | Unique transaction reference number provided when the Transfer was created. | [optional] 

## Example

```python
from openapi_client.models.merchant_transfer104 import MerchantTransfer104

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantTransfer104 from a JSON string
merchant_transfer104_instance = MerchantTransfer104.from_json(json)
# print the JSON string representation of the object
print(MerchantTransfer104.to_json())

# convert the object into a dict
merchant_transfer104_dict = merchant_transfer104_instance.to_dict()
# create an instance of MerchantTransfer104 from a dict
merchant_transfer104_from_dict = MerchantTransfer104.from_dict(merchant_transfer104_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


