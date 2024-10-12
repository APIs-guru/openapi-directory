# PersonalCurrentAccountsGet200ResponseDataInner

Personal Current Account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_channels** | **List[str]** | Ways to interact with the bank when managing account | 
**benefits** | [**BusinessCurrentAccountBenefits**](BusinessCurrentAccountBenefits.md) |  | 
**ca_pricing** | [**List[BusinessCurrentAccountCAPricingInner]**](BusinessCurrentAccountCAPricingInner.md) |  | 
**card_notes** | **str** | Optional additional notes to supplement the card details | [optional] 
**card_type** | **List[str]** | Card Type available | 
**card_withdrawal_limit** | **str** | The daily Limit that a customer can get via the ATM. This describes the default limit rather than the maximum | 
**cheque_book_available** | **bool** | Can a chequebook be issued | 
**contactless** | **bool** | Does the card issued have contactless facility | 
**credit_interest** | [**BusinessCurrentAccountCreditInterest**](BusinessCurrentAccountCreditInterest.md) |  | 
**credit_scoring_part_of_account_opening_for_getting_an_account** | **bool** | Indicates whether a credit check performed on an inquiry to open an account is submitted | 
**credit_scoring_part_of_account_opening_for_id_verification** | **bool** | Indicates whether a credit check is used to check the address of a potential new account holder | [optional] 
**credit_scoring_part_of_account_opening_id_verification_is_a_hard_or_soft_credit_score** | **List[str]** |  | [optional] 
**credit_scoring_part_of_account_opening_id_verification_text** | **List[str]** | Details on the specific credit scoring | [optional] 
**credit_scoring_part_of_account_opening_is_a_hard_or_soft_credit_score** | **List[str]** | Describes the type of credit scoring | [optional] 
**credit_scoring_part_of_account_opening_text** | **str** | Details on the specific credit scoring | [optional] 
**currency** | **List[str]** | Currency of the Account. Default to GBP at present | 
**eligibility** | [**BusinessCurrentAccountEligibility**](BusinessCurrentAccountEligibility.md) |  | 
**feature** | [**List[BusinessCurrentAccountFeatureInner]**](BusinessCurrentAccountFeatureInner.md) |  | [optional] 
**fees_and_charges** | [**List[BusinessCurrentAccountFeesAndChargesInner]**](BusinessCurrentAccountFeesAndChargesInner.md) |  | 
**international_payments_supported** | **bool** | Indicates that the account supports international payments | 
**maximum_monthly_charge** | **str** | The maximum Relevant Charges that could accrue | [optional] 
**mobile_wallet** | **List[str]** | Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions | [optional] 
**organisation** | [**ATMOrganisation**](ATMOrganisation.md) |  | 
**overdraft** | [**List[BusinessCurrentAccountOverdraftInner]**](BusinessCurrentAccountOverdraftInner.md) |  | [optional] 
**overdraft_offered** | **bool** | Indicates whether an overdraft offered for this account | 
**product_description** | **str** | Description of the product provided by the parent organisation | 
**product_identifier** | **str** | Identifier within the parent organisation for the product. Must be unique in the organisation | 
**product_name** | **str** | The name of the product used for marketing purposes from a customer perspective. i.e. what the customer would recognise | [optional] 
**product_segment** | **List[str]** |  | 
**product_type** | **str** | Descriptive code for the product category | 
**product_url** | **List[str]** | URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL | 
**tsand_cs** | **List[str]** | URL provided by the parent organisation which redirects to the current T&amp;Cs | 

## Example

```python
from openapi_client.models.personal_current_accounts_get200_response_data_inner import PersonalCurrentAccountsGet200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalCurrentAccountsGet200ResponseDataInner from a JSON string
personal_current_accounts_get200_response_data_inner_instance = PersonalCurrentAccountsGet200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(PersonalCurrentAccountsGet200ResponseDataInner.to_json())

# convert the object into a dict
personal_current_accounts_get200_response_data_inner_dict = personal_current_accounts_get200_response_data_inner_instance.to_dict()
# create an instance of PersonalCurrentAccountsGet200ResponseDataInner from a dict
personal_current_accounts_get200_response_data_inner_from_dict = PersonalCurrentAccountsGet200ResponseDataInner.from_dict(personal_current_accounts_get200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


