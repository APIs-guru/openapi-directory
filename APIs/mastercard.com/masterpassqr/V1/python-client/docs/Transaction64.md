# Transaction64

Array of transactions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_uri** | **str** | Scrubbed URI describing the account. It will include masked account information (e.g. \&quot;************1234\&quot; for a card account) but will not include security codes (e.g. CVC or expiration date for a card account).  | [optional] 
**authorization_id** | **str** | Transaction response ID code that the authorizing institution assigns.    Type: Alphanumeric [a-zA-Z 0-9], Length: 6. | [optional] 
**convenience_amount** | **str** | Amount of the convenience fee. The decimal point is implied based on the transaction_amount.currency. \&quot;[0-9]*\&quot;. Max Length: 12. Value must be less than payment_transfer.amount. | [optional] 
**convenience_indicator** | **str** | Convenience fee type code. Min length: 2. Max Length: 2. Valid values  (01: Indicates Consumer should be prompted to enter tip 02: Indicates that merchant would mandatorily charge a flat convenience fee 03: Indicates that merchant would charge a percentage convenience fee) | [optional] 
**create_timestamp** | **str** | Date and time the transaction was created as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SS±hh[:mm]] | [optional] 
**id** | **str** | System generated unique transfer identifier. | [optional] 
**network** | **str** | Name of the network that processed this transaction. | [optional] 
**network_status_code** | **str** | Network Status Code in case of Decline | [optional] 
**network_status_description** | **str** | Network Status Description in case of Decline | [optional] 
**payment_account_reference** | **str** | A unique value associated with a single PAN and attributed to all tokens associated with that PAN.    Type: Alphanumeric [a-zA-Z 0-9], Length: 29. | [optional] 
**qr_data** | **str** | Encoded QR (Quick Response) code data. Type: Alphanumeric and special characters [a-zA-Z0-9!\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~], Maximum Length: 237 | [optional] 
**resource_type** | **str** | Type of resource. Valid value:  transaction | [optional] 
**retrieval_reference** | **str** | Unique reference number that identifies the transaction at the network. Details- maxlength 24 | [optional] 
**status** | **str** | Status of this transaction. One of APPROVED, DECLINED, UNKNOWN, ERROR, or PENDING. | [optional] 
**status_reason** | **str** | Reason for status One of [APPROVED, DECLINED, FRAUD, CARD_EXPIRED, LIMIT_EXCEEDED,UNKNOWN, ERROR or PENDING] The following status reason will be provided based on the status APPROVED: APPROVED; UNKNOWN:UNKNOWN, ERROR:ERROR, PENDING: PENDING;DECLINED: DECLINED, FRAUD, CARD_EXPIRED, LIMIT_EXCEEDED; | [optional] 
**status_timestamp** | **str** | Date and time of the status as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SS±hh[:mm]] | [optional] 
**switch_serial_number** | **str** | Unique transaction identification number (switch serial number) generated (or assigned) by the Single Message System.Type: Numeric [0-9], Maximum Length: 9 | [optional] 
**system_trace_audit_number** | **str** | Unique system trace audit number for the transaction, the STAN ( system trace audit number ). Details- maxlength 6 | [optional] 
**transaction_amount** | [**TransactionAmount65**](TransactionAmount65.md) |  | [optional] 
**type** | **str** | Type of the transaction. One of: FUNDING, PAYMENT, FUNDING_REVERSAL, or PAYMENT_REVERSAL. | [optional] 
**unique_reference_number** | **str** | Unique reference number for the transaction. Type: Alphanumeric Special [a-zA-Z0-9 * , - . _ ~ ], Length: 19 | [optional] 

## Example

```python
from openapi_client.models.transaction64 import Transaction64

# TODO update the JSON string below
json = "{}"
# create an instance of Transaction64 from a JSON string
transaction64_instance = Transaction64.from_json(json)
# print the JSON string representation of the object
print(Transaction64.to_json())

# convert the object into a dict
transaction64_dict = transaction64_instance.to_dict()
# create an instance of Transaction64 from a dict
transaction64_from_dict = Transaction64.from_dict(transaction64_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


