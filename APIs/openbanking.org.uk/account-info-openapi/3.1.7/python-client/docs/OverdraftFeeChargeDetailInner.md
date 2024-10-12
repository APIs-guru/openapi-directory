# OverdraftFeeChargeDetailInner

Details about the fees/charges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_frequency** | **str** | Frequency at which the overdraft charge is applied to the account | 
**calculation_frequency** | **str** | How often is the overdraft fee/charge calculated for the account. | [optional] 
**fee_amount** | **str** | Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) | [optional] 
**fee_rate** | **str** | Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) | [optional] 
**fee_rate_type** | **str** | Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) | [optional] 
**fee_type** | **str** | Overdraft fee type | 
**incremental_borrowing_amount** | **str** | Every additional tranche of an overdraft balance to which an overdraft fee is applied | [optional] 
**negotiable_indicator** | **bool** | Indicates whether fee and charges are negotiable | [optional] 
**notes** | **List[str]** | Free text for capturing any other info related to Overdraft Fees Charge Details | [optional] 
**other_application_frequency** | [**OtherApplicationFrequency**](OtherApplicationFrequency.md) |  | [optional] 
**other_calculation_frequency** | [**OtherCalculationFrequency**](OtherCalculationFrequency.md) |  | [optional] 
**other_fee_rate_type** | [**OtherFeeRateType1**](OtherFeeRateType1.md) |  | [optional] 
**other_fee_type** | [**OtherFeeType1**](OtherFeeType1.md) |  | [optional] 
**overdraft_control_indicator** | **bool** | Indicates if the fee/charge is already covered by an &#39;Overdraft Control&#39; fee or not. | [optional] 
**overdraft_fee_charge_cap** | [**List[OverdraftFeeChargeCapInner]**](OverdraftFeeChargeCapInner.md) | Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate. | [optional] 

## Example

```python
from openapi_client.models.overdraft_fee_charge_detail_inner import OverdraftFeeChargeDetailInner

# TODO update the JSON string below
json = "{}"
# create an instance of OverdraftFeeChargeDetailInner from a JSON string
overdraft_fee_charge_detail_inner_instance = OverdraftFeeChargeDetailInner.from_json(json)
# print the JSON string representation of the object
print(OverdraftFeeChargeDetailInner.to_json())

# convert the object into a dict
overdraft_fee_charge_detail_inner_dict = overdraft_fee_charge_detail_inner_instance.to_dict()
# create an instance of OverdraftFeeChargeDetailInner from a dict
overdraft_fee_charge_detail_inner_from_dict = OverdraftFeeChargeDetailInner.from_dict(overdraft_fee_charge_detail_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


