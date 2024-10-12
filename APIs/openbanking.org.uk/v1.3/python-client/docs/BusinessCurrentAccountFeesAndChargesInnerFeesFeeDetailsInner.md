# BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInner

Fee Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_detail** | [**BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetail**](BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInnerFeeDetail.md) |  | 
**fee_sub_type** | **str** | Fee Sub Type code | 

## Example

```python
from openapi_client.models.business_current_account_fees_and_charges_inner_fees_fee_details_inner import BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInner from a JSON string
business_current_account_fees_and_charges_inner_fees_fee_details_inner_instance = BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInner.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInner.to_json())

# convert the object into a dict
business_current_account_fees_and_charges_inner_fees_fee_details_inner_dict = business_current_account_fees_and_charges_inner_fees_fee_details_inner_instance.to_dict()
# create an instance of BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInner from a dict
business_current_account_fees_and_charges_inner_fees_fee_details_inner_from_dict = BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInner.from_dict(business_current_account_fees_and_charges_inner_fees_fee_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


