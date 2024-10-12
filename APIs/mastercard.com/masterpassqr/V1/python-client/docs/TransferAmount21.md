# TransferAmount21

Describes the amount paid to the recipient/merchant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Currency of the transfer amount as an ISO alpha currency code.   Type: Alpha [A-Z], Maximum Length: 3 | [optional] 
**value** | **str** | Amount of the transfer in the smallest unit of currency. Decimal implied based on the exponent for the currency.   Example: 100 &#x3D; $1.00 USD.   Type: Numeric [0-9], Maximum Length: 12 | [optional] 

## Example

```python
from openapi_client.models.transfer_amount21 import TransferAmount21

# TODO update the JSON string below
json = "{}"
# create an instance of TransferAmount21 from a JSON string
transfer_amount21_instance = TransferAmount21.from_json(json)
# print the JSON string representation of the object
print(TransferAmount21.to_json())

# convert the object into a dict
transfer_amount21_dict = transfer_amount21_instance.to_dict()
# create an instance of TransferAmount21 from a dict
transfer_amount21_from_dict = TransferAmount21.from_dict(transfer_amount21_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


