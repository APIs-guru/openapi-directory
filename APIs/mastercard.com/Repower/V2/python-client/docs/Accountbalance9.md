# Accountbalance9

Account Balance amount value and currency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Global currency code used to represent the type of currency for the \&quot;Value\&quot; for the Account balance. Details- numeric, 3, valid ISO 4217 numeric currency codes (leading zeros may be required.) | [optional] 
**value** | **str** | Account balance. Implied decimal point based on currency exponent. Details- Numeric, 12 | [optional] 

## Example

```python
from openapi_client.models.accountbalance9 import Accountbalance9

# TODO update the JSON string below
json = "{}"
# create an instance of Accountbalance9 from a JSON string
accountbalance9_instance = Accountbalance9.from_json(json)
# print the JSON string representation of the object
print(Accountbalance9.to_json())

# convert the object into a dict
accountbalance9_dict = accountbalance9_instance.to_dict()
# create an instance of Accountbalance9 from a dict
accountbalance9_from_dict = Accountbalance9.from_dict(accountbalance9_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


