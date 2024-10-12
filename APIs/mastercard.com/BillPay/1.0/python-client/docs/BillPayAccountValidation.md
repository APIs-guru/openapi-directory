# BillPayAccountValidation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Consumer account number populated in the message.  The minimum length is 8 and the maximum length is 22. | [optional] 
**biller_id** | **str** | Biller ID populated in the message. The maximum length is 10. | [optional] 
**customer_identifier1** | **str** | Consumer identifier populated in the message. | [optional] 
**customer_identifier2** | **str** | Consumer identifier populated in the message. | [optional] 
**customer_identifier3** | **str** | Consumer identifier populated in the message. | [optional] 
**customer_identifier4** | **str** | Consumer identifier populated in the message. | [optional] 
**response_string** | **str** | Indicates if the bill payment transaction information passed all RPPS transaction processing edits for the specified biller ID or indicates errors. The minimum length is 0 and the maximum length is 120. | [optional] 
**rpps_id** | **str** | Originator RPPS ID populated in the message.  The maximum length is 8. | [optional] 
**transaction_amount** | **str** | Amount populated in the message. | [optional] 

## Example

```python
from openapi_client.models.bill_pay_account_validation import BillPayAccountValidation

# TODO update the JSON string below
json = "{}"
# create an instance of BillPayAccountValidation from a JSON string
bill_pay_account_validation_instance = BillPayAccountValidation.from_json(json)
# print the JSON string representation of the object
print(BillPayAccountValidation.to_json())

# convert the object into a dict
bill_pay_account_validation_dict = bill_pay_account_validation_instance.to_dict()
# create an instance of BillPayAccountValidation from a dict
bill_pay_account_validation_from_dict = BillPayAccountValidation.from_dict(bill_pay_account_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


