# SettlementTransactionTransaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**post_date** | **str** | The time on which the event occurred in ISO 8601 format. | [optional] 
**type** | **str** | The type of the transaction that occurred. Acceptable values are: - \&quot;&#x60;order&#x60;\&quot; - \&quot;&#x60;reversal&#x60;\&quot; - \&quot;&#x60;orderRefund&#x60;\&quot; - \&quot;&#x60;reversalRefund&#x60;\&quot; - \&quot;&#x60;issueRelatedRefundAndReplacement&#x60;\&quot; - \&quot;&#x60;returnLabelShippingFeeTransaction&#x60;\&quot; - \&quot;&#x60;reversalIssueRelatedRefundAndReplacement&#x60;\&quot; - \&quot;&#x60;reversalReturnLabelShippingFeeTransaction&#x60;\&quot; - \&quot;&#x60;lumpSumCorrectionTransaction&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.settlement_transaction_transaction import SettlementTransactionTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of SettlementTransactionTransaction from a JSON string
settlement_transaction_transaction_instance = SettlementTransactionTransaction.from_json(json)
# print the JSON string representation of the object
print(SettlementTransactionTransaction.to_json())

# convert the object into a dict
settlement_transaction_transaction_dict = settlement_transaction_transaction_instance.to_dict()
# create an instance of SettlementTransactionTransaction from a dict
settlement_transaction_transaction_from_dict = SettlementTransactionTransaction.from_dict(settlement_transaction_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


