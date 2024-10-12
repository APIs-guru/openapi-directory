# OverdraftTierBandInner

Provides overdraft details for a specific tier or band

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agreement_length_max** | **float** | Specifies the maximum length of a band for a fixed overdraft agreement | [optional] 
**agreement_length_min** | **float** | Specifies the minimum length of a band for a fixed overdraft agreement | [optional] 
**agreement_period** | **str** | Specifies the period of a fixed length overdraft agreement | [optional] 
**bank_guaranteed_indicator** | **bool** | Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances. | [optional] 
**ear** | **str** | EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently used interchangeably), being the actual annual interest rate of an Overdraft. | [optional] 
**identification** | **str** | Unique and unambiguous identification of a  Tier Band for a overdraft. | [optional] 
**notes** | **List[str]** | Optional additional notes to supplement the Tier/band details | [optional] 
**overdraft_fees_charges** | [**List[OverdraftFeesChargesInner1]**](OverdraftFeesChargesInner1.md) | Overdraft fees and charges | [optional] 
**overdraft_interest_charging_coverage** | **str** | Refers to which interest rate is applied when interests are tiered. For example, if an overdraft balance is £2k and the interest tiers are:- 0-£500 0.1%, 500-1000 0.2%, 1000-10000 0.5%, then the applicable interest rate could either be 0.5% of the entire balance (since the account balance sits in the top interest tier) or (0.1%*500)+(0.2%*500)+(0.5%*1000). In the 1st situation, we say the interest is applied to the ‘Whole’ of the account balance,  and in the 2nd that it is ‘Tiered’. | [optional] 
**representative_apr** | **str** | An annual percentage rate (APR) is the annual rate charged for borrowing or earned through an investment. APR is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction but does not take compounding into account. | [optional] 
**tier_value_max** | **str** | Maximum value of Overdraft Tier/Band | [optional] 
**tier_value_min** | **str** | Minimum value of Overdraft Tier/Band | 

## Example

```python
from openapi_client.models.overdraft_tier_band_inner import OverdraftTierBandInner

# TODO update the JSON string below
json = "{}"
# create an instance of OverdraftTierBandInner from a JSON string
overdraft_tier_band_inner_instance = OverdraftTierBandInner.from_json(json)
# print the JSON string representation of the object
print(OverdraftTierBandInner.to_json())

# convert the object into a dict
overdraft_tier_band_inner_dict = overdraft_tier_band_inner_instance.to_dict()
# create an instance of OverdraftTierBandInner from a dict
overdraft_tier_band_inner_from_dict = OverdraftTierBandInner.from_dict(overdraft_tier_band_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


