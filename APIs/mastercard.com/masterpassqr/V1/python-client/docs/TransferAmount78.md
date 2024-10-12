# TransferAmount78

Describes the amount paid to the recipient/merchant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Currency of the transfer amount as an ISO alpha currency code. | [optional] 
**value** | **str** | Amount of the transfer. The decimal point is implied based on the merchant_payment_transfer.currency. | [optional] 

## Example

```python
from openapi_client.models.transfer_amount78 import TransferAmount78

# TODO update the JSON string below
json = "{}"
# create an instance of TransferAmount78 from a JSON string
transfer_amount78_instance = TransferAmount78.from_json(json)
# print the JSON string representation of the object
print(TransferAmount78.to_json())

# convert the object into a dict
transfer_amount78_dict = transfer_amount78_instance.to_dict()
# create an instance of TransferAmount78 from a dict
transfer_amount78_from_dict = TransferAmount78.from_dict(transfer_amount78_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


