# OrderReportTransaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disbursement_amount** | [**Price**](Price.md) |  | [optional] 
**disbursement_creation_date** | **str** | The date the disbursement was created, in ISO 8601 format. | [optional] 
**disbursement_date** | **str** | The date the disbursement was initiated, in ISO 8601 format. | [optional] 
**disbursement_id** | **str** | The ID of the disbursement. | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 
**merchant_order_id** | **str** | Merchant-provided ID of the order. | [optional] 
**order_id** | **str** | The ID of the order. | [optional] 
**product_amount** | [**Amount**](Amount.md) |  | [optional] 
**product_amount_with_remitted_tax** | [**ProductAmount**](ProductAmount.md) |  | [optional] 
**transaction_date** | **str** | The date of the transaction, in ISO 8601 format. | [optional] 

## Example

```python
from openapi_client.models.order_report_transaction import OrderReportTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of OrderReportTransaction from a JSON string
order_report_transaction_instance = OrderReportTransaction.from_json(json)
# print the JSON string representation of the object
print(OrderReportTransaction.to_json())

# convert the object into a dict
order_report_transaction_dict = order_report_transaction_instance.to_dict()
# create an instance of OrderReportTransaction from a dict
order_report_transaction_from_dict = OrderReportTransaction.from_dict(order_report_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


