# Deposit

This type is used to specify/indicate that an initial deposit is required for a motor vehicle listing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Amount**](Amount.md) |  | [optional] 
**due_in** | [**TimeDuration**](TimeDuration.md) |  | [optional] 
**payment_methods** | [**List[PaymentMethod]**](PaymentMethod.md) | This array is no longer applicable and should not be used since eBay now manages the electronic payment options available to buyers to pay the deposit. | [optional] 

## Example

```python
from openapi_client.models.deposit import Deposit

# TODO update the JSON string below
json = "{}"
# create an instance of Deposit from a JSON string
deposit_instance = Deposit.from_json(json)
# print the JSON string representation of the object
print(Deposit.to_json())

# convert the object into a dict
deposit_dict = deposit_instance.to_dict()
# create an instance of Deposit from a dict
deposit_from_dict = Deposit.from_dict(deposit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


