# OverdraftFeesChargesInner1

Overdraft fees and charges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overdraft_fee_charge_cap** | [**List[OverdraftFeeChargeCapInner]**](OverdraftFeeChargeCapInner.md) | Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate. | [optional] 
**overdraft_fee_charge_detail** | [**List[OverdraftFeeChargeDetailInner]**](OverdraftFeeChargeDetailInner.md) | Details about the fees/charges | 

## Example

```python
from openapi_client.models.overdraft_fees_charges_inner1 import OverdraftFeesChargesInner1

# TODO update the JSON string below
json = "{}"
# create an instance of OverdraftFeesChargesInner1 from a JSON string
overdraft_fees_charges_inner1_instance = OverdraftFeesChargesInner1.from_json(json)
# print the JSON string representation of the object
print(OverdraftFeesChargesInner1.to_json())

# convert the object into a dict
overdraft_fees_charges_inner1_dict = overdraft_fees_charges_inner1_instance.to_dict()
# create an instance of OverdraftFeesChargesInner1 from a dict
overdraft_fees_charges_inner1_from_dict = OverdraftFeesChargesInner1.from_dict(overdraft_fees_charges_inner1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


