# CashDetails

Cash details for this payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **object** | The amount of cash given by the customer. | [optional] 
**charge_back_amount** | **object** | The amount of change due back to the buyer. For Square: this read-only field is calculated from the amount_money and buyer_supplied_money fields. | [optional] 

## Example

```python
from openapi_client.models.cash_details import CashDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CashDetails from a JSON string
cash_details_instance = CashDetails.from_json(json)
# print the JSON string representation of the object
print(CashDetails.to_json())

# convert the object into a dict
cash_details_dict = cash_details_instance.to_dict()
# create an instance of CashDetails from a dict
cash_details_from_dict = CashDetails.from_dict(cash_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


