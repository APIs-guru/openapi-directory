# BusinessCurrentAccountCreditInterest

Credit Interest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_charged** | **bool** | Is credit paid to the account. The answer will be the condition of all other fields to be filled | 
**credit_interest_group** | [**List[BusinessCurrentAccountCreditInterestCreditInterestGroupInner]**](BusinessCurrentAccountCreditInterestCreditInterestGroupInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.business_current_account_credit_interest import BusinessCurrentAccountCreditInterest

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountCreditInterest from a JSON string
business_current_account_credit_interest_instance = BusinessCurrentAccountCreditInterest.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountCreditInterest.to_json())

# convert the object into a dict
business_current_account_credit_interest_dict = business_current_account_credit_interest_instance.to_dict()
# create an instance of BusinessCurrentAccountCreditInterest from a dict
business_current_account_credit_interest_from_dict = BusinessCurrentAccountCreditInterest.from_dict(business_current_account_credit_interest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


