# UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInner

Loan Item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cca_regulated_entity** | **bool** |  | 
**date_of_change** | **str** | Date of the change if it refers to future terms | [optional] 
**is_a_low_interest_repayment_start_possible** | **bool** |  | 
**is_this_an_interest_only_loan** | **bool** |  | 
**length_promotional_in_days** | **int** | Describes the length if only a duration is given instead of a date in days | [optional] 
**loan_pricing** | [**List[UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInnerLoanPricingInner]**](UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInnerLoanPricingInner.md) |  | [optional] 
**product_state** | **str** | Describes if the offering is promotional or a description of a future state. | 
**start_promotion_or_future_terms** | **str** | Describes the start date | [optional] 
**stop_promotion_or_future_terms** | **str** | Describes the end date | [optional] 
**will_the_loan_be_paid_in_tranche_drawdowns** | **bool** |  | 

## Example

```python
from openapi_client.models.unsecured_sme_loans_get200_response_data_inner_loan_item_inner import UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInner

# TODO update the JSON string below
json = "{}"
# create an instance of UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInner from a JSON string
unsecured_sme_loans_get200_response_data_inner_loan_item_inner_instance = UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInner.from_json(json)
# print the JSON string representation of the object
print(UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInner.to_json())

# convert the object into a dict
unsecured_sme_loans_get200_response_data_inner_loan_item_inner_dict = unsecured_sme_loans_get200_response_data_inner_loan_item_inner_instance.to_dict()
# create an instance of UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInner from a dict
unsecured_sme_loans_get200_response_data_inner_loan_item_inner_from_dict = UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInner.from_dict(unsecured_sme_loans_get200_response_data_inner_loan_item_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


