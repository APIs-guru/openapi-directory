# BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInnerOverdraftTierBandInner

Tiers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ear** | **str** | EAR of the Tier | [optional] 
**fees_and_charges** | [**List[BusinessCurrentAccountOverdraftInnerFeesAndChargesInner]**](BusinessCurrentAccountOverdraftInnerFeesAndChargesInner.md) |  | [optional] 
**notes** | **str** | Notes on the Overdraft | [optional] 
**tier_band_identification** | **str** | Identification of the tier or band | [optional] 
**tier_value_maximum** | **str** | Maximum value of the tier | 
**tier_value_minimum** | **str** | Minimum value of the tier | 

## Example

```python
from openapi_client.models.business_current_account_overdraft_inner_overdraft_tier_band_set_inner_overdraft_tier_band_inner import BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInnerOverdraftTierBandInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInnerOverdraftTierBandInner from a JSON string
business_current_account_overdraft_inner_overdraft_tier_band_set_inner_overdraft_tier_band_inner_instance = BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInnerOverdraftTierBandInner.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInnerOverdraftTierBandInner.to_json())

# convert the object into a dict
business_current_account_overdraft_inner_overdraft_tier_band_set_inner_overdraft_tier_band_inner_dict = business_current_account_overdraft_inner_overdraft_tier_band_set_inner_overdraft_tier_band_inner_instance.to_dict()
# create an instance of BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInnerOverdraftTierBandInner from a dict
business_current_account_overdraft_inner_overdraft_tier_band_set_inner_overdraft_tier_band_inner_from_dict = BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInnerOverdraftTierBandInner.from_dict(business_current_account_overdraft_inner_overdraft_tier_band_set_inner_overdraft_tier_band_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


