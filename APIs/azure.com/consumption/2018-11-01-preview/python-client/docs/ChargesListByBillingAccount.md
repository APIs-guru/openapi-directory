# ChargesListByBillingAccount

Result of listing charge summary by billing account. It contains a list of available change summaries in reverse chronological order by billing period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ChargeSummaryByBillingAccount]**](ChargeSummaryByBillingAccount.md) | The list of charge summary by billing account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.charges_list_by_billing_account import ChargesListByBillingAccount

# TODO update the JSON string below
json = "{}"
# create an instance of ChargesListByBillingAccount from a JSON string
charges_list_by_billing_account_instance = ChargesListByBillingAccount.from_json(json)
# print the JSON string representation of the object
print(ChargesListByBillingAccount.to_json())

# convert the object into a dict
charges_list_by_billing_account_dict = charges_list_by_billing_account_instance.to_dict()
# create an instance of ChargesListByBillingAccount from a dict
charges_list_by_billing_account_from_dict = ChargesListByBillingAccount.from_dict(charges_list_by_billing_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


