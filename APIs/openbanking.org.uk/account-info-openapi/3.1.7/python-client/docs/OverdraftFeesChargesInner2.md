# OverdraftFeesChargesInner2

Overdraft fees and charges details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overdraft_fee_charge_cap** | [**List[OverdraftFeeChargeCapInner1]**](OverdraftFeeChargeCapInner1.md) | Details about any caps (maximum charges) that apply to a particular fee/charge | [optional] 
**overdraft_fee_charge_detail** | [**List[OverdraftFeeChargeDetailInner1]**](OverdraftFeeChargeDetailInner1.md) | Details about the fees/charges | 

## Example

```python
from openapi_client.models.overdraft_fees_charges_inner2 import OverdraftFeesChargesInner2

# TODO update the JSON string below
json = "{}"
# create an instance of OverdraftFeesChargesInner2 from a JSON string
overdraft_fees_charges_inner2_instance = OverdraftFeesChargesInner2.from_json(json)
# print the JSON string representation of the object
print(OverdraftFeesChargesInner2.to_json())

# convert the object into a dict
overdraft_fees_charges_inner2_dict = overdraft_fees_charges_inner2_instance.to_dict()
# create an instance of OverdraftFeesChargesInner2 from a dict
overdraft_fees_charges_inner2_from_dict = OverdraftFeesChargesInner2.from_dict(overdraft_fees_charges_inner2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


