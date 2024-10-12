# OverdraftFeesChargesInner3

Overdraft fees and charges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overdraft_fee_charge_cap** | [**List[OverdraftFeeChargeCapInner1]**](OverdraftFeeChargeCapInner1.md) | Details about any caps (maximum charges) that apply to a particular fee/charge | [optional] 
**overdraft_fee_charge_detail** | [**List[OverdraftFeeChargeDetailInner1]**](OverdraftFeeChargeDetailInner1.md) | Details about the fees/charges | 

## Example

```python
from openapi_client.models.overdraft_fees_charges_inner3 import OverdraftFeesChargesInner3

# TODO update the JSON string below
json = "{}"
# create an instance of OverdraftFeesChargesInner3 from a JSON string
overdraft_fees_charges_inner3_instance = OverdraftFeesChargesInner3.from_json(json)
# print the JSON string representation of the object
print(OverdraftFeesChargesInner3.to_json())

# convert the object into a dict
overdraft_fees_charges_inner3_dict = overdraft_fees_charges_inner3_instance.to_dict()
# create an instance of OverdraftFeesChargesInner3 from a dict
overdraft_fees_charges_inner3_from_dict = OverdraftFeesChargesInner3.from_dict(overdraft_fees_charges_inner3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


