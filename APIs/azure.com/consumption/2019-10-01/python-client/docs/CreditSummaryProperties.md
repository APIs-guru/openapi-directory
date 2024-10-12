# CreditSummaryProperties

The properties of the credit summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance_summary** | [**CreditBalanceSummary**](CreditBalanceSummary.md) |  | [optional] 
**expired_credit** | [**Amount**](Amount.md) |  | [optional] 
**pending_credit_adjustments** | [**Amount**](Amount.md) |  | [optional] 
**pending_eligible_charges** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.credit_summary_properties import CreditSummaryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreditSummaryProperties from a JSON string
credit_summary_properties_instance = CreditSummaryProperties.from_json(json)
# print the JSON string representation of the object
print(CreditSummaryProperties.to_json())

# convert the object into a dict
credit_summary_properties_dict = credit_summary_properties_instance.to_dict()
# create an instance of CreditSummaryProperties from a dict
credit_summary_properties_from_dict = CreditSummaryProperties.from_dict(credit_summary_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


