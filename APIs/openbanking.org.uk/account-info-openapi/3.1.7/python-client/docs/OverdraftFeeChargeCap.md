# OverdraftFeeChargeCap

Details about any caps (maximum charges) that apply to a particular fee/charge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capping_period** | **str** | Period e.g. day, week, month etc. for which the fee/charge is capped | [optional] 
**fee_cap_amount** | **str** | Cap amount charged for a fee/charge | [optional] 
**fee_cap_occurrence** | **float** | fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount | [optional] 
**fee_type** | **List[str]** | Fee/charge type which is being capped | 
**min_max_type** | **str** | Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution | 
**notes** | **List[str]** | Notes related to Overdraft fee charge cap | [optional] 
**other_fee_type** | [**List[OtherFeeTypeInner]**](OtherFeeTypeInner.md) | Other fee type code which is not available in the standard code set | [optional] 
**overdraft_control_indicator** | **bool** | Specifies for the overdraft control feature/benefit | [optional] 

## Example

```python
from openapi_client.models.overdraft_fee_charge_cap import OverdraftFeeChargeCap

# TODO update the JSON string below
json = "{}"
# create an instance of OverdraftFeeChargeCap from a JSON string
overdraft_fee_charge_cap_instance = OverdraftFeeChargeCap.from_json(json)
# print the JSON string representation of the object
print(OverdraftFeeChargeCap.to_json())

# convert the object into a dict
overdraft_fee_charge_cap_dict = overdraft_fee_charge_cap_instance.to_dict()
# create an instance of OverdraftFeeChargeCap from a dict
overdraft_fee_charge_cap_from_dict = OverdraftFeeChargeCap.from_dict(overdraft_fee_charge_cap_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


