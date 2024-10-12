# ChargeSummaryByBillingAccount

A charge summary resource by billing account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ChargeSummaryProperties**](ChargeSummaryProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.charge_summary_by_billing_account import ChargeSummaryByBillingAccount

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSummaryByBillingAccount from a JSON string
charge_summary_by_billing_account_instance = ChargeSummaryByBillingAccount.from_json(json)
# print the JSON string representation of the object
print(ChargeSummaryByBillingAccount.to_json())

# convert the object into a dict
charge_summary_by_billing_account_dict = charge_summary_by_billing_account_instance.to_dict()
# create an instance of ChargeSummaryByBillingAccount from a dict
charge_summary_by_billing_account_from_dict = ChargeSummaryByBillingAccount.from_dict(charge_summary_by_billing_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


