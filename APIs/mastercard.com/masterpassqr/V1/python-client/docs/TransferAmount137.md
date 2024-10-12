# TransferAmount137

Describes the amount paid to the recipient.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Currency of the transfer amount as an ISO alpha currency code. | [optional] 
**value** | **str** | Amount of the transfer. The decimal point is implied based on the payment_transfer.currency. | [optional] 

## Example

```python
from openapi_client.models.transfer_amount137 import TransferAmount137

# TODO update the JSON string below
json = "{}"
# create an instance of TransferAmount137 from a JSON string
transfer_amount137_instance = TransferAmount137.from_json(json)
# print the JSON string representation of the object
print(TransferAmount137.to_json())

# convert the object into a dict
transfer_amount137_dict = transfer_amount137_instance.to_dict()
# create an instance of TransferAmount137 from a dict
transfer_amount137_from_dict = TransferAmount137.from_dict(transfer_amount137_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


