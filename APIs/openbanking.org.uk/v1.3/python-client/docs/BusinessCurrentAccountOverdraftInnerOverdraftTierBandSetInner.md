# BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInner

Tier Bandset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arrangement_other_type** | [**BusinessCurrentAccountOverdraftInnerFeesAndChargesInnerFeeChargeOtherApplicationFrequency**](BusinessCurrentAccountOverdraftInnerFeesAndChargesInnerFeeChargeOtherApplicationFrequency.md) |  | [optional] 
**arrangement_type** | **str** | Defines the arrangement of the overdraft | 
**buffer_amount** | **str** | Amount on overdraft that is prearranged | [optional] 
**cma_defined_indicator** | **bool** | describes that the tiers and bands are set by the CMA order, as opposed to be set by the banks | 
**ear** | **str** | EAR of the Overdraft Set | [optional] 
**fees_and_charges** | [**List[BusinessCurrentAccountOverdraftInnerFeesAndChargesInner]**](BusinessCurrentAccountOverdraftInnerFeesAndChargesInner.md) | Type of fee or charge | [optional] 
**notes** | **str** | Notes on the Overdraft | [optional] 
**overdraft_tier_band** | [**List[BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInnerOverdraftTierBandInner]**](BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInnerOverdraftTierBandInner.md) |  | [optional] 
**tier_band_set_identification** | **str** | Identification of the set of tiers or bands | [optional] 

## Example

```python
from openapi_client.models.business_current_account_overdraft_inner_overdraft_tier_band_set_inner import BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInner from a JSON string
business_current_account_overdraft_inner_overdraft_tier_band_set_inner_instance = BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInner.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInner.to_json())

# convert the object into a dict
business_current_account_overdraft_inner_overdraft_tier_band_set_inner_dict = business_current_account_overdraft_inner_overdraft_tier_band_set_inner_instance.to_dict()
# create an instance of BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInner from a dict
business_current_account_overdraft_inner_overdraft_tier_band_set_inner_from_dict = BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInner.from_dict(business_current_account_overdraft_inner_overdraft_tier_band_set_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


