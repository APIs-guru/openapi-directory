# TransferAmount2

Information about the transfer amount.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Currency of the transfer amount as an ISO alpha currency code.   Type: Alpha [A-Z], Length: 3 | 
**value** | **str** | Amount of the transfer in the smallest unit of currency. Decimal implied based on the exponent for the currency.   Example: 100 &#x3D; $1.00 USD.   Type: Numeric [0-9], Length: 1-12 | 

## Example

```python
from openapi_client.models.transfer_amount2 import TransferAmount2

# TODO update the JSON string below
json = "{}"
# create an instance of TransferAmount2 from a JSON string
transfer_amount2_instance = TransferAmount2.from_json(json)
# print the JSON string representation of the object
print(TransferAmount2.to_json())

# convert the object into a dict
transfer_amount2_dict = transfer_amount2_instance.to_dict()
# create an instance of TransferAmount2 from a dict
transfer_amount2_from_dict = TransferAmount2.from_dict(transfer_amount2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


