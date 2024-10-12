# Transfer129

Response details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | Initiation channel of the transfer request. Values: WEB, MOBILE, BANK, KIOSK. | [optional] 
**created** | **str** | Date and time the original transfer was created as an ISO 8601 Timestamp. Details- YYYY-MM-DDTHH:MM:SSZ Valid Values- Refer &#39;Date And Time Formats&#39; | [optional] 
**device_id** | **str** | The serial number of a device that initiated the transfer. | [optional] 
**id** | **str** | System generated unique transfer identifier. | [optional] 
**interchange_rate_designator** | **str** | Indicates the interchange rate and editing rules applied to the transaction.  Type:Alphanumeric [a-zA-Z 0-9], Length: 2 | [optional] 
**location** | **str** | Location where the transaction is initiated. | [optional] 
**original_status** | **str** | Original status of the transfer. One of APPROVED, DECLINED, ERROR, PENDING, UNKNOWN. | [optional] 
**payment_type** | **str** | Payment type used for transfer. Value - P2M: Person to Merchant. \\n\\nType: Alphanumeric [A-Z0-9], Maximum Length: 3 | [optional] 
**recipient** | [**Recipient134**](Recipient134.md) |  | [optional] 
**recipient_account_uri** | **str** | URI describing the recipient account. It will include masked account information (e.g. \&quot;************1234\&quot; for a card account) but will not include security codes (e.g. CVC or expiration date for a card account). | [optional] 
**reconciliation_data** | [**ReconciliationData142**](ReconciliationData142.md) |  | [optional] 
**resource_type** | **str** | Type of resource | [optional] 
**sanction_screening_override** | **bool** | Sanction Screening validation override if enabled for partner. | [optional] 
**sender** | [**Sender130**](Sender130.md) |  | [optional] 
**sender_account_uri** | **str** | URI describing the sending account. It will include masked account information (e.g. \&quot;************1234\&quot; for a card account) but will not include security codes (e.g. CVC or expiration date for a card account). | [optional] 
**statement_descriptor** | **str** | The statement descriptor is the value that will be displayed on the recipient&#39;s bank or card statement. It consists of two parts: the prefix and the content. The prefix is a short string typically used to identify the partner. The appended &amp;lt;prefix&amp;gt;*&amp;lt;content&amp;gt; will be displayed on the recipient&#39;s statement. Note: While most financial institutions display this information consistently, some may display it incorrectly or not at all. | [optional] 
**status** | **str** | Status of the transfer. Values: APPROVED, DECLINED, ERROR, PENDING, REVERSED, CANCELLED. | [optional] 
**status_timestamp** | **str** | Timestamp of when the status was changed to its current value. Details- YYYY-MM-DDTHH:MM:SSZ Valid Values- Refer &#39;Date And Time Formats&#39; | [optional] 
**transaction_history** | [**TransactionHistory138**](TransactionHistory138.md) |  | [optional] 
**transfer_amount** | [**TransferAmount137**](TransferAmount137.md) |  | [optional] 
**transfer_reference** | **str** | Unique transaction reference number provided when the Transfer was created. | [optional] 

## Example

```python
from openapi_client.models.transfer129 import Transfer129

# TODO update the JSON string below
json = "{}"
# create an instance of Transfer129 from a JSON string
transfer129_instance = Transfer129.from_json(json)
# print the JSON string representation of the object
print(Transfer129.to_json())

# convert the object into a dict
transfer129_dict = transfer129_instance.to_dict()
# create an instance of Transfer129 from a dict
transfer129_from_dict = Transfer129.from_dict(transfer129_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


