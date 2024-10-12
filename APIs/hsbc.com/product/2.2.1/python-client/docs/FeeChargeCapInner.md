# FeeChargeCapInner

Details about any caps (maximum charges) that apply to a particular fee/charge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capping_period** | **str** | Period e.g. day, week, month etc. for which the fee/charge is capped | [optional] 
**fee_cap_amount** | **str** | Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) | [optional] 
**fee_cap_occurrence** | **float** | fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount | [optional] 
**fee_type** | **List[str]** | Fee/charge type which is being capped | 
**min_max_type** | **str** | Min Max type | 
**notes** | **List[str]** | Free text for adding  extra details for fee charge cap | [optional] 
**other_fee_type** | [**List[OtherFeeTypeInner]**](OtherFeeTypeInner.md) | Other fee type code which is not available in the standard code set | [optional] 

## Example

```python
from openapi_client.models.fee_charge_cap_inner import FeeChargeCapInner

# TODO update the JSON string below
json = "{}"
# create an instance of FeeChargeCapInner from a JSON string
fee_charge_cap_inner_instance = FeeChargeCapInner.from_json(json)
# print the JSON string representation of the object
print(FeeChargeCapInner.to_json())

# convert the object into a dict
fee_charge_cap_inner_dict = fee_charge_cap_inner_instance.to_dict()
# create an instance of FeeChargeCapInner from a dict
fee_charge_cap_inner_from_dict = FeeChargeCapInner.from_dict(fee_charge_cap_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


