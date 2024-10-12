# DealerDBModelsVoucher

A voucher for EDT activation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** | Read-Only. The date the voucher was created. | [optional] 
**dealer_code** | **str** | The dealer code the voucher is assigned to.  Required for commercial and right to repair vouchers. | [optional] 
**deleted** | **bool** | Read-Only. True if voucher has been deleted. | [optional] 
**email** | **str** | Required for internal vouchers. | [optional] 
**expiration_date** | **datetime** | The expiration date of the voucher. Required for Temporary and Right to Repair Vouchers. | [optional] 
**license_to** | **str** | Required for Internal Vouchers | [optional] 
**modified_by** | **str** | Read-Only. The user that made the last modification to the voucher. | [optional] 
**order_number** | **str** | The order number of a license. Required for Commercial and Right To Repair Vouchers. Not supported for other Vouchers. | [optional] 
**punched** | **bool** | True if voucher has aleady been used.  False if the voucher has not been used. | [optional] 
**punched_date** | **datetime** | Read-Only. The date the voucher was punched. | [optional] 
**purpose** | **str** | Required for Internal Vouchers. Not supported for other Vouchers. | [optional] 
**type** | **str** | The type of voucher. Commercial is the default if not specified. | [optional] 
**voucher_code** | **str** | The voucher code. | [optional] 

## Example

```python
from openapi_client.models.dealer_db_models_voucher import DealerDBModelsVoucher

# TODO update the JSON string below
json = "{}"
# create an instance of DealerDBModelsVoucher from a JSON string
dealer_db_models_voucher_instance = DealerDBModelsVoucher.from_json(json)
# print the JSON string representation of the object
print(DealerDBModelsVoucher.to_json())

# convert the object into a dict
dealer_db_models_voucher_dict = dealer_db_models_voucher_instance.to_dict()
# create an instance of DealerDBModelsVoucher from a dict
dealer_db_models_voucher_from_dict = DealerDBModelsVoucher.from_dict(dealer_db_models_voucher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


