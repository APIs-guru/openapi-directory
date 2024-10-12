# TransferAmount61

Describes the amount paid to the recipient/merchant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Currency of the transfer amount as an ISO alpha currency code. | [optional] 
**value** | **str** | Amount of the transfer. The decimal point is implied based on the merchant_payment_transfer.currency. | [optional] 

## Example

```python
from openapi_client.models.transfer_amount61 import TransferAmount61

# TODO update the JSON string below
json = "{}"
# create an instance of TransferAmount61 from a JSON string
transfer_amount61_instance = TransferAmount61.from_json(json)
# print the JSON string representation of the object
print(TransferAmount61.to_json())

# convert the object into a dict
transfer_amount61_dict = transfer_amount61_instance.to_dict()
# create an instance of TransferAmount61 from a dict
transfer_amount61_from_dict = TransferAmount61.from_dict(transfer_amount61_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


