# Transaction140

transaction array

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_uri** | **str** | account uri | [optional] 
**authorization_id** | **str** | Transaction response ID code that the authorizing institution assigns.    Type: Alphanumeric [a-zA-Z 0-9], Length: 6. | [optional] 
**create_timestamp** | **str** | Date and time the transaction was created as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SSZ] | [optional] 
**id** | **str** | System generated unique transfer identifier. | [optional] 
**network** | **str** | Proposed network for the transaction. | [optional] 
**network_status_code** | **str** | Network Status Code in case of Decline | [optional] 
**network_status_description** | **str** | Network Status Description in case of Decline | [optional] 
**payment_account_reference** | **str** | A unique value associated with a single PAN and attributed to all tokens associated with that PAN.    Type: Alphanumeric [a-zA-Z 0-9], Length: 29. | [optional] 
**resource_type** | **str** | Type of resource | [optional] 
**retrieval_reference** | **str** | Unique reference number that identifies the transaction at the network. Details- maxlength 24 | [optional] 
**status** | **str** | Status of the disbursement. One of APPROVED, DECLINED, UNKNOWN, ERROR, or PENDING. | [optional] 
**status_reason** | **str** | Reason for status, APPROVED, DECLINED, FRAUD, CARD_EXPIRED, LIMIT_EXCEEDED, UNKNOWN, ERROR, PENDING | [optional] 
**status_timestamp** | **str** | Date and time of when the status was changed to its current value as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SSZ | [optional] 
**system_trace_audit_number** | **str** | Unique system trace audit number for the transaction, the STAN ( system trace audit number ). Details- maxlength 6 | [optional] 
**transaction_amount** | [**TransactionAmount141**](TransactionAmount141.md) |  | [optional] 
**type** | **str** | Type of the transaction. One of: FUNDING, PAYMENT, FUNDING_REVERSAL, or PAYMENT_REVERSAL. | [optional] 

## Example

```python
from openapi_client.models.transaction140 import Transaction140

# TODO update the JSON string below
json = "{}"
# create an instance of Transaction140 from a JSON string
transaction140_instance = Transaction140.from_json(json)
# print the JSON string representation of the object
print(Transaction140.to_json())

# convert the object into a dict
transaction140_dict = transaction140_instance.to_dict()
# create an instance of Transaction140 from a dict
transaction140_from_dict = Transaction140.from_dict(transaction140_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


