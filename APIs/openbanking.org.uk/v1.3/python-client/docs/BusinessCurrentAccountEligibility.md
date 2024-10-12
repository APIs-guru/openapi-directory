# BusinessCurrentAccountEligibility

Eligibility

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_restricted** | **bool** | Indicates a customer&#39;s age is part of eligibility criteria | 
**annual_business_turnover** | **str** | Annual Business Turnover | [optional] 
**annual_business_turnover_currency** | **str** | Annual Business Turnover Currency | [optional] 
**description** | **str** | One paragraph detailing the eligibility | 
**eligibility_name** | **str** | Free text description, denotes non standard eligibilities not included in the code list | [optional] 
**eligibility_notes** | **str** | Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions | [optional] 
**eligibility_type** | **str** | Eligibility type | [optional] 
**income_condition** | **str** | Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD) | [optional] 
**income_turnover_related** | **bool** | Indicates if eligibility linked to income | 
**marketing_eligibility** | **List[str]** |  | [optional] 
**max_number_of_accounts** | **str** | Maximum number of the same prodcut the customer may hold | [optional] 
**maximum_age** | **int** | Maximum age, in years, allowed to hold the account | [optional] 
**maximum_age_to_open** | **int** | Maximum age, in years, to open an account | [optional] 
**maximum_opening_amount** | **bool** | A maximum amount to be deposited at opening | [optional] 
**min_income_turnover_paid_into_account** | **int** | Minimum Income Amount required to paid into the account | [optional] 
**minimum_age** | **int** | Minimum age, in years, required to hold an account | [optional] 
**minimum_deposit** | **bool** | A minimum deposit required to hold this account | [optional] 
**minimum_income_frequency** | **str** | The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts | [optional] 
**minimum_income_turnover_amount** | **str** | Minimum income / Turnover required to hold the product | [optional] 
**minimum_income_turnover_currency** | **str** | Minimum income / Turnover Currency | [optional] 
**minimum_operating_balance** | **str** | Minimum Operating Balance | [optional] 
**minimum_operating_balance_currency** | **str** | Minimum Operating Balance currency | [optional] 
**minimum_operating_balance_exists** | **bool** | Is there a Minimum Operating Balance? | [optional] 
**opening_deposit_maximum_amount** | **str** | Maximum Amount to be depositing at opening | [optional] 
**opening_deposit_maximum_currency** | **str** | The currency of the Minimum Amount to be depositing at opening | [optional] 
**opening_deposit_minimum** | **str** | Minimum Amount to be held on account | [optional] 
**opening_deposit_minimum_currency** | **str** | The currency of the Minimum Amount to be depositing at opening | [optional] 
**other_financial_holding_required** | **bool** | Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature | 
**previous_bankruptcy** | **bool** | Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280 | 
**residency_restricted** | **bool** | Indicates a customer&#39;s residency forms part of the eligibility criteria | 
**residency_restricted_region** | **str** | Indicates a customer must be current resident of a geographic area/country | [optional] 
**single_joint_income** | **str** | Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this | [optional] 
**third_sector_organisations** | **bool** | Is the product available to operate as a Clubs or Societies account? | 

## Example

```python
from openapi_client.models.business_current_account_eligibility import BusinessCurrentAccountEligibility

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountEligibility from a JSON string
business_current_account_eligibility_instance = BusinessCurrentAccountEligibility.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountEligibility.to_json())

# convert the object into a dict
business_current_account_eligibility_dict = business_current_account_eligibility_instance.to_dict()
# create an instance of BusinessCurrentAccountEligibility from a dict
business_current_account_eligibility_from_dict = BusinessCurrentAccountEligibility.from_dict(business_current_account_eligibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


