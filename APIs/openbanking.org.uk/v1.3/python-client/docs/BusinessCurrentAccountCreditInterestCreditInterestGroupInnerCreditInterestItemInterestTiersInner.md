# BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItemInterestTiersInner

Credit Interest Tiers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apraer_rate** | **str** | AER or APR Rate for comparison | [optional] 
**daily_charge_for_maximum** | **str** | Special charge on tiered overdraft | [optional] 
**daily_charge_for_minimum** | **str** | Special charge on tiered overdraft | [optional] 
**interest_tier** | **str** | Identifier for the tier | [optional] 
**rate** | **str** | Rate being paid by the bank (gross) | [optional] 
**rate_comparison_type** | **str** | Rate Comparison Type | [optional] 
**tier_value_maximum** | **str** | Max Value of interst tier | [optional] 
**tier_value_minimum** | **str** | Lower value of interest tier | [optional] 

## Example

```python
from openapi_client.models.business_current_account_credit_interest_credit_interest_group_inner_credit_interest_item_interest_tiers_inner import BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItemInterestTiersInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItemInterestTiersInner from a JSON string
business_current_account_credit_interest_credit_interest_group_inner_credit_interest_item_interest_tiers_inner_instance = BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItemInterestTiersInner.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItemInterestTiersInner.to_json())

# convert the object into a dict
business_current_account_credit_interest_credit_interest_group_inner_credit_interest_item_interest_tiers_inner_dict = business_current_account_credit_interest_credit_interest_group_inner_credit_interest_item_interest_tiers_inner_instance.to_dict()
# create an instance of BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItemInterestTiersInner from a dict
business_current_account_credit_interest_credit_interest_group_inner_credit_interest_item_interest_tiers_inner_from_dict = BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItemInterestTiersInner.from_dict(business_current_account_credit_interest_credit_interest_group_inner_credit_interest_item_interest_tiers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


