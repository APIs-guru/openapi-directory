# BusinessCurrentAccountFeesAndChargesInnerFees

Fees

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_of_change** | **str** | Date of the change if it refers to future terms | [optional] 
**fee_details** | [**List[BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInner]**](BusinessCurrentAccountFeesAndChargesInnerFeesFeeDetailsInner.md) |  | 
**fee_higher_tier** | **int** | Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range | [optional] 
**fee_lower_tier** | **int** | Lower occurrence / range boundary e.g.. For returned cheques this could be 0, which means the first returned cheque fits into this range | [optional] 
**length_promotional_in_days** | **int** | Describes the length if only a duration is given instead of a date | [optional] 
**start_promotion_or_future_terms** | **str** | Describes the start date | [optional] 
**stop_promotion_or_future_terms** | **str** | Describes the end date | [optional] 

## Example

```python
from openapi_client.models.business_current_account_fees_and_charges_inner_fees import BusinessCurrentAccountFeesAndChargesInnerFees

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountFeesAndChargesInnerFees from a JSON string
business_current_account_fees_and_charges_inner_fees_instance = BusinessCurrentAccountFeesAndChargesInnerFees.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountFeesAndChargesInnerFees.to_json())

# convert the object into a dict
business_current_account_fees_and_charges_inner_fees_dict = business_current_account_fees_and_charges_inner_fees_instance.to_dict()
# create an instance of BusinessCurrentAccountFeesAndChargesInnerFees from a dict
business_current_account_fees_and_charges_inner_fees_from_dict = BusinessCurrentAccountFeesAndChargesInnerFees.from_dict(business_current_account_fees_and_charges_inner_fees_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


