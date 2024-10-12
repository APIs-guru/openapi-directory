# RepaymentInner

Repayment details of the Loan product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_type** | **str** | The repayment is for paying just the interest only or both interest and capital or bullet amount or balance to date etc | [optional] 
**notes** | **List[str]** | Optional additional notes to supplement the Repayment | [optional] 
**other_amount_type** | **object** | Other amount type which is not in the standard code list | [optional] 
**other_repayment_frequency** | **object** | Other repayment frequency which is not in the standard code list | [optional] 
**other_repayment_type** | **object** | Other repayment type which is not in the standard code list | [optional] 
**repayment_fee_charges** | **object** | Applicable fee/charges for repayment such as prepayment, full early repayment or non repayment. | [optional] 
**repayment_frequency** | **str** | Repayment frequency | [optional] 
**repayment_holiday** | [**List[RepaymentHolidayInner]**](RepaymentHolidayInner.md) | Details of capital repayment holiday if any | [optional] 
**repayment_type** | **str** | Repayment type | [optional] 

## Example

```python
from openapi_client.models.repayment_inner import RepaymentInner

# TODO update the JSON string below
json = "{}"
# create an instance of RepaymentInner from a JSON string
repayment_inner_instance = RepaymentInner.from_json(json)
# print the JSON string representation of the object
print(RepaymentInner.to_json())

# convert the object into a dict
repayment_inner_dict = repayment_inner_instance.to_dict()
# create an instance of RepaymentInner from a dict
repayment_inner_from_dict = RepaymentInner.from_dict(repayment_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


