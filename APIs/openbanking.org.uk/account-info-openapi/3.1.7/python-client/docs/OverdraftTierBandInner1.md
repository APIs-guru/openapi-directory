# OverdraftTierBandInner1

Provides overdraft details for a specific tier or band

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_guaranteed_indicator** | **bool** | Indicates that a bank provides the overdraft limit up to TierValueMIn to all customers automatically | [optional] 
**ear** | **str** | EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently used interchangeably), being the actual annual interest rate of an Overdraft. | [optional] 
**identification** | **str** | Unique and unambiguous identification of a  Tier Band for a overdraft. | [optional] 
**notes** | **List[str]** | Optional additional notes to supplement the Tier/band details | [optional] 
**overdraft_fees_charges** | [**List[OverdraftFeesChargesInner3]**](OverdraftFeesChargesInner3.md) | Overdraft fees and charges | [optional] 
**overdraft_interest_charging_coverage** | **str** | Interest charged on whole amount or tiered/banded | [optional] 
**representative_apr** | **str** | An annual percentage rate (APR) is the annual rate charged for borrowing or earned through an investment. APR is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction but does not take compounding into account. | [optional] 
**tier_value_max** | **str** | Maximum value of Overdraft Tier/Band | [optional] 
**tier_value_min** | **str** | Minimum value of Overdraft Tier/Band | 

## Example

```python
from openapi_client.models.overdraft_tier_band_inner1 import OverdraftTierBandInner1

# TODO update the JSON string below
json = "{}"
# create an instance of OverdraftTierBandInner1 from a JSON string
overdraft_tier_band_inner1_instance = OverdraftTierBandInner1.from_json(json)
# print the JSON string representation of the object
print(OverdraftTierBandInner1.to_json())

# convert the object into a dict
overdraft_tier_band_inner1_dict = overdraft_tier_band_inner1_instance.to_dict()
# create an instance of OverdraftTierBandInner1 from a dict
overdraft_tier_band_inner1_from_dict = OverdraftTierBandInner1.from_dict(overdraft_tier_band_inner1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


