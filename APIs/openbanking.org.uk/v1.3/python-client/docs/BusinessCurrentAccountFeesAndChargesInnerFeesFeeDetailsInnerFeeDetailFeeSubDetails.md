# BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetailFeeSubDetails

Fee Sub Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_amount** | **str** | Fee in GBP | [optional] 
**fee_frequency** | **str** | Triggering frequency of the fee | 
**fee_higher_tier** | **int** | Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range | [optional] 
**fee_lower_tier** | **int** | Lower occurrence / range boundary e.g. For returned cheques this could be 0, which means the first returned cheque fits into this range | [optional] 
**fee_max** | **str** | Fee in GBP | [optional] 
**fee_min** | **str** | Fee in GBP | [optional] 
**fee_rate** | **str** | % Rate | [optional] 
**fees_and_charges_notes** | **str** | Supplementary information for fees and charges | [optional] 
**negotiable** | **bool** | Indicates that this Fee Rate or Fee Amount is negotiable based on risk or other factor | 
**representative_rate** | **str** | Representative Rate | [optional] 

## Example

```python
from openapi_client.models.business_current_account_fees_and_charges_inner_fees_fee_details_inner_fee_detail_fee_sub_details import BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetailFeeSubDetails

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetailFeeSubDetails from a JSON string
business_current_account_fees_and_charges_inner_fees_fee_details_inner_fee_detail_fee_sub_details_instance = BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetailFeeSubDetails.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetailFeeSubDetails.to_json())

# convert the object into a dict
business_current_account_fees_and_charges_inner_fees_fee_details_inner_fee_detail_fee_sub_details_dict = business_current_account_fees_and_charges_inner_fees_fee_details_inner_fee_detail_fee_sub_details_instance.to_dict()
# create an instance of BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetailFeeSubDetails from a dict
business_current_account_fees_and_charges_inner_fees_fee_details_inner_fee_detail_fee_sub_details_from_dict = BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetailFeeSubDetails.from_dict(business_current_account_fees_and_charges_inner_fees_fee_details_inner_fee_detail_fee_sub_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


