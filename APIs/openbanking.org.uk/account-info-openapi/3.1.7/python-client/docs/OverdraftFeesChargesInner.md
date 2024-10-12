# OverdraftFeesChargesInner

Overdraft fees and charges details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overdraft_fee_charge_cap** | [**List[OverdraftFeeChargeCapInner]**](OverdraftFeeChargeCapInner.md) | Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate. | [optional] 
**overdraft_fee_charge_detail** | [**List[OverdraftFeeChargeDetailInner]**](OverdraftFeeChargeDetailInner.md) | Details about the fees/charges | 

## Example

```python
from openapi_client.models.overdraft_fees_charges_inner import OverdraftFeesChargesInner

# TODO update the JSON string below
json = "{}"
# create an instance of OverdraftFeesChargesInner from a JSON string
overdraft_fees_charges_inner_instance = OverdraftFeesChargesInner.from_json(json)
# print the JSON string representation of the object
print(OverdraftFeesChargesInner.to_json())

# convert the object into a dict
overdraft_fees_charges_inner_dict = overdraft_fees_charges_inner_instance.to_dict()
# create an instance of OverdraftFeesChargesInner from a dict
overdraft_fees_charges_inner_from_dict = OverdraftFeesChargesInner.from_dict(overdraft_fees_charges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


