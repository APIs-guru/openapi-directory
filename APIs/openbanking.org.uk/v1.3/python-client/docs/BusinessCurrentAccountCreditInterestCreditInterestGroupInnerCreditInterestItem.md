# BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItem

Credit Interest item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculation_frequency** | **str** | How often is interest applied to account | [optional] 
**calculation_method** | **str** | Method for interest calculation | [optional] 
**date_of_change** | **str** | Date of the change if it refers to future terms | [optional] 
**end_date** | **str** | If interest is charged on a specific date range as end date (often used for promotion) | [optional] 
**fixed_interest_length** | **int** | Fixed interest length in days | [optional] 
**interest_notes** | **str** | Additional notes to supplement the interest details | [optional] 
**interest_rate_type** | **str** | Credit Interest Payment Rate Type | [optional] 
**interest_tiers** | [**List[BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItemInterestTiersInner]**](BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItemInterestTiersInner.md) |  | [optional] 
**length_promotional_in_days** | **int** | Describes the length if only a duration is given instead of a date | [optional] 
**payment_method** | **str** | Credit Interest Payment Method Code | [optional] 
**start_date** | **str** | If interest is charged on a specific date range as start date (often used for promotion) | [optional] 
**start_promotion_or_future_terms** | **str** | Describes the start date | [optional] 
**stop_promotion_or_future_terms** | **str** | Describes the end date | [optional] 

## Example

```python
from openapi_client.models.business_current_account_credit_interest_credit_interest_group_inner_credit_interest_item import BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItem

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItem from a JSON string
business_current_account_credit_interest_credit_interest_group_inner_credit_interest_item_instance = BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItem.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItem.to_json())

# convert the object into a dict
business_current_account_credit_interest_credit_interest_group_inner_credit_interest_item_dict = business_current_account_credit_interest_credit_interest_group_inner_credit_interest_item_instance.to_dict()
# create an instance of BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItem from a dict
business_current_account_credit_interest_credit_interest_group_inner_credit_interest_item_from_dict = BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItem.from_dict(business_current_account_credit_interest_credit_interest_group_inner_credit_interest_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


