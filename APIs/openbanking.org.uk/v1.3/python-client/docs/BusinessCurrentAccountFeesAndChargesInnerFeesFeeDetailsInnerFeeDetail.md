# BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetail

Fee Detail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_of_change** | **str** | Date of the change if it refers to future terms | [optional] 
**fee_sub_details** | [**BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetailFeeSubDetails**](BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetailFeeSubDetails.md) |  | 
**fee_type** | **str** | A description of the Fee type | 
**length_promotional_in_days** | **int** | Describes the length if only a duration is given instead of a date | [optional] 
**other** | **str** | Describe other fee type | [optional] 
**start_promotion_or_future_terms** | **str** | Describes the start date | [optional] 
**stop_promotion_or_future_terms** | **str** | Describes the end date | [optional] 

## Example

```python
from openapi_client.models.business_current_account_fees_and_charges_inner_fees_fee_details_inner_fee_detail import BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetail

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetail from a JSON string
business_current_account_fees_and_charges_inner_fees_fee_details_inner_fee_detail_instance = BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetail.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetail.to_json())

# convert the object into a dict
business_current_account_fees_and_charges_inner_fees_fee_details_inner_fee_detail_dict = business_current_account_fees_and_charges_inner_fees_fee_details_inner_fee_detail_instance.to_dict()
# create an instance of BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetail from a dict
business_current_account_fees_and_charges_inner_fees_fee_details_inner_fee_detail_from_dict = BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetail.from_dict(business_current_account_fees_and_charges_inner_fees_fee_details_inner_fee_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


