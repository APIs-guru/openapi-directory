# BusinessCurrentAccountOverdraftInner

Overdraft

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_of_change** | **str** | Date of the change if it refers to future terms | [optional] 
**fee_charge_negotiable_indicator** | **str** | Fee Charge negotiable Indicator | [optional] 
**fees_and_charges** | [**List[BusinessCurrentAccountOverdraftInnerFeesAndChargesInner]**](BusinessCurrentAccountOverdraftInnerFeesAndChargesInner.md) |  | [optional] 
**length_promotional_in_days** | **int** | Describes the length if only a duration is given instead of a date | [optional] 
**maximum_monthly_overdraft_charge** | **str** | Maximum Monthly Charge (MMC) for Overdraft fee and charges. | [optional] 
**notes** | **str** | Notes on the overdraft | [optional] 
**overdraft_product_state** | **str** | Describes if the offering is promotional or a description of a future state. | [optional] 
**overdraft_tier_band_set** | [**List[BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInner]**](BusinessCurrentAccountOverdraftInnerOverdraftTierBandSetInner.md) | Overdraft Tier Band Set | [optional] 
**overdraft_type** | **str** | Defines if the overdraft facility is committed  | [optional] 
**start_promotion_or_future_terms** | **str** | Describes the start date | [optional] 
**stop_promotion_or_future_terms** | **str** | Describes the end date | [optional] 
**term** | **str** | The duration of the overdraft, if it is non permanent | [optional] 

## Example

```python
from openapi_client.models.business_current_account_overdraft_inner import BusinessCurrentAccountOverdraftInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountOverdraftInner from a JSON string
business_current_account_overdraft_inner_instance = BusinessCurrentAccountOverdraftInner.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountOverdraftInner.to_json())

# convert the object into a dict
business_current_account_overdraft_inner_dict = business_current_account_overdraft_inner_instance.to_dict()
# create an instance of BusinessCurrentAccountOverdraftInner from a dict
business_current_account_overdraft_inner_from_dict = BusinessCurrentAccountOverdraftInner.from_dict(business_current_account_overdraft_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


