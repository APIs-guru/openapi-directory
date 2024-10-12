# BusinessCurrentAccountCreditInterestCreditInterestGroupInner

Credit Interest Group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_interest_item** | [**BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItem**](BusinessCurrentAccountCreditInterestCreditInterestGroupInnerCreditInterestItem.md) |  | 
**interest_tier_sub_type** | **str** | Describes if the offering is promotional, regular or a description of a future state | [optional] 

## Example

```python
from openapi_client.models.business_current_account_credit_interest_credit_interest_group_inner import BusinessCurrentAccountCreditInterestCreditInterestGroupInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountCreditInterestCreditInterestGroupInner from a JSON string
business_current_account_credit_interest_credit_interest_group_inner_instance = BusinessCurrentAccountCreditInterestCreditInterestGroupInner.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountCreditInterestCreditInterestGroupInner.to_json())

# convert the object into a dict
business_current_account_credit_interest_credit_interest_group_inner_dict = business_current_account_credit_interest_credit_interest_group_inner_instance.to_dict()
# create an instance of BusinessCurrentAccountCreditInterestCreditInterestGroupInner from a dict
business_current_account_credit_interest_credit_interest_group_inner_from_dict = BusinessCurrentAccountCreditInterestCreditInterestGroupInner.from_dict(business_current_account_credit_interest_credit_interest_group_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


