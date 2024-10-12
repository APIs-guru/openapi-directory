# BusinessCurrentAccountFeesAndChargesInner

Fees And Charges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fees** | [**BusinessCurrentAccountFeesAndChargesInnerFees**](BusinessCurrentAccountFeesAndChargesInnerFees.md) |  | 
**product_state** | **str** | Describes if the offering is promotional or a description of a future state. | 

## Example

```python
from openapi_client.models.business_current_account_fees_and_charges_inner import BusinessCurrentAccountFeesAndChargesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountFeesAndChargesInner from a JSON string
business_current_account_fees_and_charges_inner_instance = BusinessCurrentAccountFeesAndChargesInner.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountFeesAndChargesInner.to_json())

# convert the object into a dict
business_current_account_fees_and_charges_inner_dict = business_current_account_fees_and_charges_inner_instance.to_dict()
# create an instance of BusinessCurrentAccountFeesAndChargesInner from a dict
business_current_account_fees_and_charges_inner_from_dict = BusinessCurrentAccountFeesAndChargesInner.from_dict(business_current_account_fees_and_charges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


