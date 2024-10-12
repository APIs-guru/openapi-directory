# OverdraftFeeChargeCapInner

Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capping_period** | **str** | Period e.g. day, week, month etc. for which the fee/charge is capped | [optional] 
**fee_cap_amount** | **str** | Cap amount charged for a fee/charge | [optional] 
**fee_cap_occurrence** | **float** | Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances. | [optional] 
**fee_type** | **List[str]** | Fee/charge type which is being capped | 
**min_max_type** | **str** | Min Max type | 
**notes** | **List[str]** | Notes related to Overdraft fee charge cap | [optional] 
**other_fee_type** | [**List[OtherFeeTypeInner]**](OtherFeeTypeInner.md) | Other fee type code which is not available in the standard code set | [optional] 

## Example

```python
from openapi_client.models.overdraft_fee_charge_cap_inner import OverdraftFeeChargeCapInner

# TODO update the JSON string below
json = "{}"
# create an instance of OverdraftFeeChargeCapInner from a JSON string
overdraft_fee_charge_cap_inner_instance = OverdraftFeeChargeCapInner.from_json(json)
# print the JSON string representation of the object
print(OverdraftFeeChargeCapInner.to_json())

# convert the object into a dict
overdraft_fee_charge_cap_inner_dict = overdraft_fee_charge_cap_inner_instance.to_dict()
# create an instance of OverdraftFeeChargeCapInner from a dict
overdraft_fee_charge_cap_inner_from_dict = OverdraftFeeChargeCapInner.from_dict(overdraft_fee_charge_cap_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


