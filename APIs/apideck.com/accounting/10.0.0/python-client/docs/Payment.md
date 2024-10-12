# Payment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
**accounts_receivable_account_id** | **str** | Unique identifier for the account to allocate payment to. | [optional] 
**accounts_receivable_account_type** | **str** | Type of accounts receivable account. | [optional] 
**allocations** | [**List[PaymentAllocationsInner]**](PaymentAllocationsInner.md) |  | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**currency_rate** | **float** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**customer** | [**LinkedCustomer**](LinkedCustomer.md) |  | [optional] 
**display_id** | **str** | Payment id to be displayed. | [optional] 
**downstream_id** | **str** | The third-party API ID of original entity | [optional] [readonly] 
**id** | **str** | Unique identifier representing the entity | [readonly] 
**note** | **str** | Optional note to be associated with the payment. | [optional] 
**payment_method** | **str** | Payment method name | [optional] 
**payment_method_id** | **str** | Unique identifier for the payment method. | [optional] 
**payment_method_reference** | **str** | Optional reference message returned by payment method on processing | [optional] 
**reconciled** | **bool** | Payment has been reconciled | [optional] 
**reference** | **str** | Optional payment reference message ie: Debit remittance detail. | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**status** | **str** | Status of payment | [optional] 
**supplier** | [**LinkedSupplier**](LinkedSupplier.md) |  | [optional] 
**total_amount** | **float** | Amount of payment | 
**transaction_date** | **datetime** | Date transaction was entered - YYYY:MM::DDThh:mm:ss.sTZD | 
**type** | **str** | Type of payment | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.payment import Payment

# TODO update the JSON string below
json = "{}"
# create an instance of Payment from a JSON string
payment_instance = Payment.from_json(json)
# print the JSON string representation of the object
print(Payment.to_json())

# convert the object into a dict
payment_dict = payment_instance.to_dict()
# create an instance of Payment from a dict
payment_from_dict = Payment.from_dict(payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


