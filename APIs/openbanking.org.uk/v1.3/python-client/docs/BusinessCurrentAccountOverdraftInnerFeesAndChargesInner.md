# BusinessCurrentAccountOverdraftInnerFeesAndChargesInner

Overdraft Fees Charges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_charge_amount** | **str** | Charge applied to tier | [optional] 
**fee_charge_application_frequency** | **str** | Frequency with which the rate, or amount is charged | [optional] 
**fee_charge_calculation_frequency** | **str** | Frequency with which the rate, or amount is calculated | [optional] 
**fee_charge_other_application_frequency** | [**BusinessCurrentAccountOverdraftInnerFeesAndChargesInnerFeeChargeOtherApplicationFrequency**](BusinessCurrentAccountOverdraftInnerFeesAndChargesInnerFeeChargeOtherApplicationFrequency.md) |  | [optional] 
**fee_charge_other_calculation_frequency** | [**BusinessCurrentAccountOverdraftInnerFeesAndChargesInnerFeeChargeOtherApplicationFrequency**](BusinessCurrentAccountOverdraftInnerFeesAndChargesInnerFeeChargeOtherApplicationFrequency.md) |  | [optional] 
**fee_charge_other_type** | [**BusinessCurrentAccountOverdraftInnerFeesAndChargesInnerFeeChargeOtherApplicationFrequency**](BusinessCurrentAccountOverdraftInnerFeesAndChargesInnerFeeChargeOtherApplicationFrequency.md) |  | [optional] 
**fee_charge_rate** | **str** | Fee charge rate applied to tier | [optional] 
**fee_charge_rate_other_type** | [**BusinessCurrentAccountOverdraftInnerFeesAndChargesInnerFeeChargeOtherApplicationFrequency**](BusinessCurrentAccountOverdraftInnerFeesAndChargesInnerFeeChargeOtherApplicationFrequency.md) |  | [optional] 
**fee_charge_rate_type** | **str** | Rate type other than EAR | [optional] 
**fee_charge_type** | **str** | Type of fee or charge | 

## Example

```python
from openapi_client.models.business_current_account_overdraft_inner_fees_and_charges_inner import BusinessCurrentAccountOverdraftInnerFeesAndChargesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountOverdraftInnerFeesAndChargesInner from a JSON string
business_current_account_overdraft_inner_fees_and_charges_inner_instance = BusinessCurrentAccountOverdraftInnerFeesAndChargesInner.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountOverdraftInnerFeesAndChargesInner.to_json())

# convert the object into a dict
business_current_account_overdraft_inner_fees_and_charges_inner_dict = business_current_account_overdraft_inner_fees_and_charges_inner_instance.to_dict()
# create an instance of BusinessCurrentAccountOverdraftInnerFeesAndChargesInner from a dict
business_current_account_overdraft_inner_fees_and_charges_inner_from_dict = BusinessCurrentAccountOverdraftInnerFeesAndChargesInner.from_dict(business_current_account_overdraft_inner_fees_and_charges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


